import { getProducts } from './storage.js';

function getSystemInstruction() {
  const productContext = getProducts().map(
    (product) =>
      `- ${product.name} ($${product.price}): ${product.description}. Features: ${product.features.join(', ')}`,
  ).join('\n');

  return `You are the exclusive AI advisor for "Aura", a tech lifestyle brand focused on warmth, organics, and returning to nature.
Your tone should be calm, friendly, grounded, and elegant. Avoid overly "techy" terms; use words like "natural," "seamless," "warm," and "tactile." Please answer in English.

Here is the current product catalog:
${productContext}

Please answer customer questions about specifications, recommendations, and brand philosophy.
Keep your answers concise (usually no more than three sentences) to fit the chat interface.
If asked about products not on the list, gently guide the conversation back to Aura products.`;
}

function normalizeHistory(history) {
  const validHistory = [];
  let expectedRole = 'model';

  for (let index = history.length - 1; index >= 0; index -= 1) {
    if (history[index].role === expectedRole) {
      validHistory.unshift({ role: history[index].role, text: history[index].text });
      expectedRole = expectedRole === 'user' ? 'model' : 'user';
    }
  }

  if (validHistory.length > 0 && validHistory[0].role === 'model') {
    validHistory.shift();
  }

  return validHistory;
}

function getApiKey() {
  return window.__AURA_CONFIG__?.GEMINI_API_KEY || window.GEMINI_API_KEY || '';
}

export async function sendMessageToGemini(history, newMessage) {
  try {
    const apiKey = getApiKey();
    if (!apiKey) {
      return 'Sorry, I cannot connect to the server right now (Missing API Key).';
    }

    const body = {
      system_instruction: {
        parts: [{ text: getSystemInstruction() }],
      },
      contents: [
        ...normalizeHistory(history).map((message) => ({
          role: message.role === 'model' ? 'model' : 'user',
          parts: [{ text: message.text }],
        })),
        {
          role: 'user',
          parts: [{ text: newMessage }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
      },
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      throw new Error(`Gemini request failed: ${response.status}`);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join('').trim();
    return text || 'Sorry, I am currently unable to provide an answer.';
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Sorry, I seem to be unable to access our data archives right now.';
  }
}

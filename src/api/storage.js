import { JOURNAL_ARTICLES, PRODUCTS } from '../data/constants.js';

const USERS_KEY = 'aura_users';
const CURRENT_USER_KEY = 'aura_current_user';
const PRODUCTS_KEY = 'aura_products';
const ORDERS_KEY = 'aura_orders';
const JOURNAL_KEY = 'aura_journal_articles';
const CART_KEY = 'aura_cart_items';
const ASSISTANT_MESSAGES_KEY = 'aura_assistant_messages';

const DEFAULT_ASSISTANT_MESSAGES = [
  {
    role: 'model',
    text: '欢迎来到 Aura，我会帮你找到契合你生活方式的物件。请问有什么可以帮你？',
    timestamp: Date.now(),
  },
];

export function initStorage() {
  let storedProducts = [];
  try {
    const raw = localStorage.getItem(PRODUCTS_KEY);
    if (raw) {
      storedProducts = JSON.parse(raw);
    }
  } catch (error) {
    storedProducts = [];
  }

  let updated = false;
  const mergedProducts = storedProducts.map((storedProduct) => {
    const defaultProduct = PRODUCTS.find((product) => product.id === storedProduct.id);
    if (
      defaultProduct &&
      (
        defaultProduct.imageUrl !== storedProduct.imageUrl ||
        defaultProduct.name !== storedProduct.name ||
        defaultProduct.description !== storedProduct.description ||
        defaultProduct.tagline !== storedProduct.tagline
      )
    ) {
      updated = true;
      return {
        ...storedProduct,
        name: defaultProduct.name,
        tagline: defaultProduct.tagline,
        description: defaultProduct.description,
        longDescription: defaultProduct.longDescription,
        price: defaultProduct.price,
        features: defaultProduct.features,
        category: defaultProduct.category,
        imageUrl: defaultProduct.imageUrl,
        gallery: defaultProduct.gallery,
      };
    }
    return storedProduct;
  });

  const missingProducts = PRODUCTS.filter(
    (product) => !mergedProducts.find((storedProduct) => storedProduct.id === product.id),
  );

  if (missingProducts.length > 0 || updated) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify([...mergedProducts, ...missingProducts]));
  } else if (storedProducts.length === 0) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(PRODUCTS));
  }

  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(
      USERS_KEY,
      JSON.stringify([
        {
          phone: '15920051067',
          password: '0234161',
          role: 'admin',
        },
      ]),
    );
  }

  if (!localStorage.getItem(ORDERS_KEY)) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify([]));
  }

  if (!localStorage.getItem(JOURNAL_KEY)) {
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(JOURNAL_ARTICLES));
  }

  if (!localStorage.getItem(CART_KEY)) {
    localStorage.setItem(CART_KEY, JSON.stringify([]));
  }

  if (!localStorage.getItem(ASSISTANT_MESSAGES_KEY)) {
    localStorage.setItem(ASSISTANT_MESSAGES_KEY, JSON.stringify(DEFAULT_ASSISTANT_MESSAGES));
  }
}

export function getProducts() {
  const data = localStorage.getItem(PRODUCTS_KEY);
  return data ? JSON.parse(data) : PRODUCTS;
}

export function saveProducts(products) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

export function addProduct(product) {
  const products = getProducts();
  products.push(product);
  saveProducts(products);
}

export function deleteProduct(id) {
  saveProducts(getProducts().filter((product) => product.id !== id));
}

export function updateProduct(id, updatedProduct) {
  const products = getProducts();
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products[index] = updatedProduct;
    saveProducts(products);
  }
}

export function getUsers() {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function addUser(user) {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
}

export function getCurrentUser() {
  const data = localStorage.getItem(CURRENT_USER_KEY);
  return data ? JSON.parse(data) : null;
}

export function setCurrentUser(user) {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

export function getOrders() {
  const data = localStorage.getItem(ORDERS_KEY);
  return data ? JSON.parse(data) : [];
}

export function addOrder(order) {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function getJournalArticles() {
  const data = localStorage.getItem(JOURNAL_KEY);
  return data ? JSON.parse(data) : JOURNAL_ARTICLES;
}

export function getCartItems() {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCartItems(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function getAssistantMessages() {
  const data = localStorage.getItem(ASSISTANT_MESSAGES_KEY);
  return data ? JSON.parse(data) : DEFAULT_ASSISTANT_MESSAGES;
}

export function saveAssistantMessages(messages) {
  localStorage.setItem(ASSISTANT_MESSAGES_KEY, JSON.stringify(messages));
}

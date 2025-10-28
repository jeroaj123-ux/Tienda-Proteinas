let cart = [];

function addToCart(productId) {
  const existing = cart.find(p => p.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    const prod = products.find(p => p.id === productId);
    cart.push({ ...prod, qty: 1 });
  }
  updateCartCount();
}

function removeFromCart(productId) {
  const product = cart.find(p => p.id === productId);
  if (product) {
    if (product.qty > 1) {
      product.qty--;
    } else {
      cart = cart.filter(p => p.id !== productId);
    }
  }
  updateCartCount();
  render("cart");
}

function clearCart() {
  cart = [];
  updateCartCount();
  render("cart");
}

function updateCartCount() {
  const countElement = document.getElementById("cart-count");
  if (countElement) {
    countElement.textContent = cart.reduce((t, p) => t + p.qty, 0);
  }
}

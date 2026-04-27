// Simple client‑side cart implementation
let cart = [];

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!cartItems) return; // page may not have cart section
  cartItems.innerHTML = '';
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    const ul = document.createElement('ul');
    cart.forEach((item, i) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} – $${item.price.toFixed(2)}`;
      ul.appendChild(li);
    });
    cartItems.appendChild(ul);
  }
  const total = cart.reduce((sum, i) => sum + i.price, 0);
  totalEl.textContent = total.toFixed(2);
  // Update cart count badge if present
  const countBadge = document.getElementById('cart-count');
  if (countBadge) countBadge.textContent = cart.length;
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartDisplay();
  alert(`${name} added to cart.`);
}

function addProduct(event, name, price) {
  event.preventDefault();
  // In a real site we'd read the uploaded file; here we just simulate.
  addToCart(name, price);
  // Reset the form
  event.target.reset();
}

function clearCart() {
  if (confirm('Clear all items from the cart?')) {
    cart = [];
    updateCartDisplay();
  }
}

// Expose functions to global scope for inline handlers
window.addToCart = addToCart;
window.addProduct = addProduct;
window.clearCart = clearCart;

// Initialise cart display on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);

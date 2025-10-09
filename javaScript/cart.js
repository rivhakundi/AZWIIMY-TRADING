/* -------------------------------
   MOBILE MENU
---------------------------------*/
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
  });
});

/* -------------------------------
   CART SYSTEM
---------------------------------*/
let cart = [];

const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartOverlay = document.getElementById('cartOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const checkoutModal = document.getElementById('checkoutModal');
const successModal = document.getElementById('successModal');

function toggleCart() {
  cartOverlay.classList.toggle('active');
  cartSidebar.classList.toggle('active');
}

function updateCartDisplay() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `R ${total.toFixed(2)}`;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align:center; color:#999;">Your cart is empty</p>';
    cartCount.style.display = 'none';
  } else {
    cartItems.innerHTML = cart
      .map((item, index) => `
        <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; margin:10px 0;">
          <div>
            <strong>${item.name}</strong><br>
            <small>${item.quantity} × R ${item.price.toFixed(2)}</small>
          </div>
          <div>
            <button onclick="changeQuantity(${index}, -1)">-</button>
            <button onclick="changeQuantity(${index}, 1)">+</button>
            <button onclick="removeFromCart(${index})" style="color:red;">×</button>
          </div>
        </div>
      `)
      .join('');
    cartCount.style.display = 'inline-block';
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

/* ---- Add To Cart ---- */
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartDisplay();
  toggleCart();


/* ---- Change Quantity ---- */
function changeQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  updateCartDisplay();
}

/* ---- Remove Item ---- */
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

/* ---- Checkout ---- */
function showCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document.getElementById('orderSummary').innerHTML = cart
    .map(item => `<p>${item.name} × ${item.quantity} — R ${(item.price * item.quantity).toFixed(2)}</p>`)
    .join('');

  document.getElementById('checkoutTotal').textContent = cartTotal.textContent;

  checkoutModal.style.display = 'block';
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
}

/* ---- Hide Checkout ---- */
function hideCheckout() {
  checkoutModal.style.display = 'none';
}

/* ---- Place Order ---- */
function placeOrder() {
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const address = document.getElementById('customerAddress').value.trim();

  if (!name || !phone || !address) {
    alert('Please fill in all required fields.');
    return;
  }

  cart = [];
  updateCartDisplay();
  checkoutModal.style.display = 'none';
  successModal.style.display = 'block';

  setTimeout(() => successModal.style.display = 'none', 3000);
}

/* ---- Event Listeners for Buttons ---- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product-card .cta-button').forEach(button => {
    button.addEventListener('click', e => {
      const product = e.target.closest('.product-card');
      const name = product.querySelector('.product-title').textContent;
      const price = parseFloat(product.querySelector('.product-price').textContent.replace(/[^\d.]/g, ''));
      addToCart(name, price);
    });
  });

  updateCartDisplay();
});

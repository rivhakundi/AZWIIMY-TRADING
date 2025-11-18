  // Hamburger menu
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

        const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
            });
        });

        // Shopping Cart Functionality
        let cart = [];

        const products = [
            { id: 1, name: 'Mabele Coarse', price: 120, weight: '5 kg' },
            { id: 2, name: 'Mabele Fine', price: 120, weight: '5 kg' },
            { id: 3, name: 'Mabele Coarse (10kg)', price: 180, weight: '10 kg' },
            { id: 4, name: 'Mabele Fine (10kg)', price: 180, weight: '10 kg' }
        ];

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCart();
            showNotification('Item added to cart!');
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }

        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCart();
                }
            }
        }

        function updateCart() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');

            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
            cartTotal.textContent = `R ${totalPrice}`;

            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; color: #999; margin-top: 50px;">Your cart is empty</p>';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <div>
                                <h4 style="color: var(--primary); margin-bottom: 5px;">${item.name}</h4>
                                <p style="font-size: 14px; color: #666;">${item.weight}</p>
                            </div>
                            <button onclick="removeFromCart(${item.id})" style="background: none; border: none; color: red; cursor: pointer; font-size: 20px;">×</button>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; gap: 10px; align-items: center;">
                                <button onclick="updateQuantity(${item.id}, -1)" style="background: var(--secondary); color: white; border: none; width: 30px; height: 30px; border-radius: 5px; cursor: pointer;">-</button>
                                <span style="font-weight: bold; min-width: 30px; text-align: center;">${item.quantity}</span>
                                <button onclick="updateQuantity(${item.id}, 1)" style="background: var(--secondary); color: white; border: none; width: 30px; height: 30px; border-radius: 5px; cursor: pointer;">+</button>
                            </div>
                            <span style="font-weight: bold; color: var(--primary);">R ${item.price * item.quantity}</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        function toggleCart() {
            const cartSidebar = document.getElementById('cartSidebar');
            const cartOverlay = document.getElementById('cartOverlay');
            cartSidebar.classList.toggle('active');
            cartOverlay.classList.toggle('active');
        }

        function showCheckout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            const checkoutModal = document.getElementById('checkoutModal');
            const cartOverlay = document.getElementById('cartOverlay');
            const orderSummary = document.getElementById('orderSummary');
            const checkoutTotal = document.getElementById('checkoutTotal');

            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            orderSummary.innerHTML = cart.map(item => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 14px;">
                    <span>${item.name} x ${item.quantity}</span>
                    <span>R ${item.price * item.quantity}</span>
                </div>
            `).join('');

            checkoutTotal.textContent = `R ${totalPrice}`;
            checkoutModal.classList.add('active');
            cartOverlay.classList.add('active');
        }

        function hideCheckout() {
            const checkoutModal = document.getElementById('checkoutModal');
            const cartOverlay = document.getElementById('cartOverlay');
            checkoutModal.classList.remove('active');
            if (!document.getElementById('cartSidebar').classList.contains('active')) {
                cartOverlay.classList.remove('active');
            }
        }

        function placeOrder() {
            const name = document.getElementById('customerName').value;
            const phone = document.getElementById('customerPhone').value;
            const address = document.getElementById('customerAddress').value;

            if (!name || !phone || !address) {
                alert('Please fill in all required fields!');
                return;
            }

            // Hide checkout modal
            document.getElementById('checkoutModal').classList.remove('active');

            // Show success modal
            const successModal = document.getElementById('successModal');
            successModal.classList.add('active');

            // Clear form and cart after 3 seconds
            setTimeout(() => {
                successModal.classList.remove('active');
                document.getElementById('cartOverlay').classList.remove('active');
                document.getElementById('cartSidebar').classList.remove('active');
                
                // Clear form
                document.getElementById('customerName').value = '';
                document.getElementById('customerPhone').value = '';
                document.getElementById('customerEmail').value = '';
                document.getElementById('customerAddress').value = '';
                
                // Clear cart
                cart = [];
                updateCart();
            }, 5000);
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: #4CAF50;
                color: white;
                padding: 15px 25px;
                border-radius: 5px;
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 2000);
        }
        // hamburger.js - Universal hamburger menu functionality

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    // Toggle hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mobileNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close menu when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking on a link
    if (mobileNavLinks.length > 0) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (mobileNav && mobileNav.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});
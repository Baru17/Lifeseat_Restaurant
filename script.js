// ==================== Food Data (100 Items) ====================
const foodItems = [
    // Pizzas (15 items)
    { id: 1, name: "Margherita Pizza", category: "pizza", price: 12.99, emoji: "🍕" },
    { id: 2, name: "Pepperoni Pizza", category: "pizza", price: 14.99, emoji: "🍕" },
    { id: 3, name: "BBQ Chicken Pizza", category: "pizza", price: 16.99, emoji: "🍕" },
    { id: 4, name: "Veggie Supreme", category: "pizza", price: 15.99, emoji: "🍕" },
    { id: 5, name: "Hawaiian Pizza", category: "pizza", price: 14.99, emoji: "🍕" },
    { id: 6, name: "Meat Lovers Pizza", category: "pizza", price: 18.99, emoji: "🍕" },
    { id: 7, name: "Four Cheese Pizza", category: "pizza", price: 15.99, emoji: "🍕" },
    { id: 8, name: "Mushroom Pizza", category: "pizza", price: 13.99, emoji: "🍕" },
    { id: 9, name: "Buffalo Pizza", category: "pizza", price: 16.99, emoji: "🍕" },
    { id: 10, name: "Greek Pizza", category: "pizza", price: 15.99, emoji: "🍕" },
    { id: 11, name: "Spinach Artichoke", category: "pizza", price: 14.99, emoji: "🍕" },
    { id: 12, name: "Truffle Pizza", category: "pizza", price: 22.99, emoji: "🍕" },
    { id: 13, name: "Prosciutto Pizza", category: "pizza", price: 19.99, emoji: "🍕" },
    { id: 14, name: "Seafood Pizza", category: "pizza", price: 21.99, emoji: "🍕" },
    { id: 15, name: "Calzone Special", category: "pizza", price: 13.99, emoji: "🍕" },

    // Burgers (15 items)
    { id: 16, name: "Classic Burger", category: "burger", price: 9.99, emoji: "🍔" },
    { id: 17, name: "Cheese Burger", category: "burger", price: 10.99, emoji: "🍔" },
    { id: 18, name: "Bacon Burger", category: "burger", price: 12.99, emoji: "🍔" },
    { id: 19, name: "Mushroom Swiss", category: "burger", price: 13.99, emoji: "🍔" },
    { id: 20, name: "BBQ Burger", category: "burger", price: 12.99, emoji: "🍔" },
    { id: 21, name: "Veggie Burger", category: "burger", price: 11.99, emoji: "🍔" },
    { id: 22, name: "Double Stack", category: "burger", price: 15.99, emoji: "🍔" },
    { id: 23, name: "Spicy Jalapeño", category: "burger", price: 12.99, emoji: "🍔" },
    { id: 24, name: "Avocado Burger", category: "burger", price: 14.99, emoji: "🍔" },
    { id: 25, name: "Blue Cheese Burger", category: "burger", price: 13.99, emoji: "🍔" },
    { id: 26, name: "Teriyaki Burger", category: "burger", price: 12.99, emoji: "🍔" },
    { id: 27, name: "Turkey Burger", category: "burger", price: 11.99, emoji: "🍔" },
    { id: 28, name: "Lamb Burger", category: "burger", price: 15.99, emoji: "🍔" },
    { id: 29, name: "Chicken Burger", category: "burger", price: 10.99, emoji: "🍔" },
    { id: 30, name: "Fish Burger", category: "burger", price: 12.99, emoji: "🍔" },

    // Sushi (15 items)
    { id: 31, name: "Salmon Nigiri", category: "sushi", price: 8.99, emoji: "🍣" },
    { id: 32, name: "Tuna Roll", category: "sushi", price: 12.99, emoji: "🍣" },
    { id: 33, name: "California Roll", category: "sushi", price: 10.99, emoji: "🍣" },
    { id: 34, name: "Dragon Roll", category: "sushi", price: 16.99, emoji: "🍣" },
    { id: 35, name: "Rainbow Roll", category: "sushi", price: 18.99, emoji: "🍣" },
    { id: 36, name: "Spicy Tuna Roll", category: "sushi", price: 14.99, emoji: "🍣" },
    { id: 37, name: "Eel Avocado Roll", category: "sushi", price: 15.99, emoji: "🍣" },
    { id: 38, name: "Shrimp Tempura", category: "sushi", price: 14.99, emoji: "🍣" },
    { id: 39, name: "Philadelphia Roll", category: "sushi", price: 13.99, emoji: "🍣" },
    { id: 40, name: "Veggie Roll", category: "sushi", price: 9.99, emoji: "🍣" },
    { id: 41, name: "Spider Roll", category: "sushi", price: 16.99, emoji: "🍣" },
    { id: 42, name: "Sashimi Platter", category: "sushi", price: 24.99, emoji: "🍣" },
    { id: 43, name: "Omakase Set", category: "sushi", price: 45.99, emoji: "🍣" },
    { id: 44, name: "Maki Combo", category: "sushi", price: 19.99, emoji: "🍣" },
    { id: 45, name: "Chirashi Bowl", category: "sushi", price: 22.99, emoji: "🍣" },

    // Pasta (12 items)
    { id: 46, name: "Spaghetti Bolognese", category: "pasta", price: 13.99, emoji: "🍝" },
    { id: 47, name: "Fettuccine Alfredo", category: "pasta", price: 14.99, emoji: "🍝" },
    { id: 48, name: "Carbonara", category: "pasta", price: 15.99, emoji: "🍝" },
    { id: 49, name: "Penne Arrabbiata", category: "pasta", price: 12.99, emoji: "🍝" },
    { id: 50, name: "Lasagna", category: "pasta", price: 16.99, emoji: "🍝" },
    { id: 51, name: "Ravioli", category: "pasta", price: 15.99, emoji: "🍝" },
    { id: 52, name: "Pesto Pasta", category: "pasta", price: 13.99, emoji: "🍝" },
    { id: 53, name: "Seafood Linguine", category: "pasta", price: 19.99, emoji: "🍝" },
    { id: 54, name: "Mac & Cheese", category: "pasta", price: 10.99, emoji: "🍝" },
    { id: 55, name: "Primavera", category: "pasta", price: 14.99, emoji: "🍝" },
    { id: 56, name: "Gnocchi", category: "pasta", price: 15.99, emoji: "🍝" },
    { id: 57, name: "Tortellini", category: "pasta", price: 16.99, emoji: "🍝" },

    // Desserts (15 items)
    { id: 58, name: "Chocolate Cake", category: "dessert", price: 7.99, emoji: "🍰" },
    { id: 59, name: "Cheesecake", category: "dessert", price: 8.99, emoji: "🍰" },
    { id: 60, name: "Tiramisu", category: "dessert", price: 9.99, emoji: "🍰" },
    { id: 61, name: "Ice Cream Sundae", category: "dessert", price: 6.99, emoji: "🍨" },
    { id: 62, name: "Apple Pie", category: "dessert", price: 7.99, emoji: "🥧" },
    { id: 63, name: "Brownie", category: "dessert", price: 5.99, emoji: "🍫" },
    { id: 64, name: "Crème Brûlée", category: "dessert", price: 9.99, emoji: "🍮" },
    { id: 65, name: "Panna Cotta", category: "dessert", price: 8.99, emoji: "🍮" },
    { id: 66, name: "Macarons", category: "dessert", price: 6.99, emoji: "🍪" },
    { id: 67, name: "Churros", category: "dessert", price: 5.99, emoji: "🥨" },
    { id: 68, name: "Mochi Ice Cream", category: "dessert", price: 7.99, emoji: "🍡" },
    { id: 69, name: "Gelato", category: "dessert", price: 6.99, emoji: "🍨" },
    { id: 70, name: "Fruit Tart", category: "dessert", price: 8.99, emoji: "🥧" },
    { id: 71, name: "Lava Cake", category: "dessert", price: 9.99, emoji: "🍫" },
    { id: 72, name: "Waffles", category: "dessert", price: 8.99, emoji: "🧇" },

    // Drinks (15 items)
    { id: 73, name: "Fresh Orange Juice", category: "drinks", price: 4.99, emoji: "🍊" },
    { id: 74, name: "Mango Smoothie", category: "drinks", price: 5.99, emoji: "🥭" },
    { id: 75, name: "Iced Coffee", category: "drinks", price: 4.99, emoji: "☕" },
    { id: 76, name: "Green Tea", category: "drinks", price: 3.99, emoji: "🍵" },
    { id: 77, name: "Lemonade", category: "drinks", price: 3.99, emoji: "🍋" },
    { id: 78, name: "Milkshake", category: "drinks", price: 6.99, emoji: "🥛" },
    { id: 79, name: "Coca Cola", category: "drinks", price: 2.99, emoji: "🥤" },
    { id: 80, name: "Sparkling Water", category: "drinks", price: 2.99, emoji: "💧" },
    { id: 81, name: "Fruit Punch", category: "drinks", price: 4.99, emoji: "🍹" },
    { id: 82, name: "Hot Chocolate", category: "drinks", price: 4.99, emoji: "🍫" },
    { id: 83, name: "Cappuccino", category: "drinks", price: 5.99, emoji: "☕" },
    { id: 84, name: "Berry Smoothie", category: "drinks", price: 6.99, emoji: "🫐" },
    { id: 85, name: "Coconut Water", category: "drinks", price: 4.99, emoji: "🥥" },
    { id: 86, name: "Iced Tea", category: "drinks", price: 3.99, emoji: "🧋" },
    { id: 87, name: "Espresso", category: "drinks", price: 3.99, emoji: "☕" },

    // Salads (13 items)
    { id: 88, name: "Caesar Salad", category: "salad", price: 10.99, emoji: "🥗" },
    { id: 89, name: "Greek Salad", category: "salad", price: 11.99, emoji: "🥗" },
    { id: 90, name: "Cobb Salad", category: "salad", price: 13.99, emoji: "🥗" },
    { id: 91, name: "Garden Salad", category: "salad", price: 8.99, emoji: "🥗" },
    { id: 92, name: "Caprese Salad", category: "salad", price: 10.99, emoji: "🥗" },
    { id: 93, name: "Quinoa Salad", category: "salad", price: 12.99, emoji: "🥗" },
    { id: 94, name: "Chicken Salad", category: "salad", price: 13.99, emoji: "🥗" },
    { id: 95, name: "Tuna Salad", category: "salad", price: 12.99, emoji: "🥗" },
    { id: 96, name: "Waldorf Salad", category: "salad", price: 11.99, emoji: "🥗" },
    { id: 97, name: "Asian Salad", category: "salad", price: 12.99, emoji: "🥗" },
    { id: 98, name: "Kale Salad", category: "salad", price: 10.99, emoji: "🥗" },
    { id: 99, name: "Spinach Salad", category: "salad", price: 10.99, emoji: "🥗" },
    { id: 100, name: "Avocado Salad", category: "salad", price: 13.99, emoji: "🥗" }
];

// ==================== Cart State ====================
let cart = [];

// ==================== DOM Elements ====================
const menuContainer = document.getElementById('menuContainer');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');
const gpayOption = document.getElementById('gpayOption');
const cardOption = document.getElementById('cardOption');
const codOption = document.getElementById('codOption');
const gpaySection = document.getElementById('gpaySection');
const cardSection = document.getElementById('cardSection');
const orderForm = document.getElementById('orderForm');
const successModal = document.getElementById('successModal');
const overlay = document.getElementById('overlay');
const gpayAmount = document.getElementById('gpayAmount');

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems(foodItems);
    initNavigation();
    initPaymentOptions();
    initScrollButtons();
    initCategoryFilter();
    initFormValidation();
});

// ==================== Render Menu Items ====================
function renderMenuItems(items) {
    menuContainer.innerHTML = items.map((item, index) => `
        <div class="menu-card" style="animation-delay: ${index * 0.05}s" data-category="${item.category}">
            <div class="menu-card-image">
                ${item.emoji}
            </div>
            <div class="menu-card-content">
                <h3 class="menu-card-name">${item.name}</h3>
                <p class="menu-card-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">$${item.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})" aria-label="Add to cart">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== Cart Functions ====================
function addToCart(itemId) {
    const item = foodItems.find(food => food.id === itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
    showAddToCartFeedback();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
}

function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    gpayAmount.textContent = `$${totalPrice.toFixed(2)}`;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Add some delicious items!</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <span class="cart-item-emoji">${item.emoji}</span>
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        `).join('');
    }
}

function showAddToCartFeedback() {
    const cartIcon = document.getElementById('cartIcon');
    cartIcon.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// ==================== Navigation ====================
function initNavigation() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for cart icon
    document.getElementById('cartIcon').addEventListener('click', () => {
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });
}

// ==================== Category Filter ====================
function initCategoryFilter() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            // Update active state
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const category = card.dataset.category;
            
            if (category === 'all') {
                renderMenuItems(foodItems);
            } else {
                const filtered = foodItems.filter(item => item.category === category);
                renderMenuItems(filtered);
            }

            // Scroll to menu section
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ==================== Scroll Buttons ====================
function initScrollButtons() {
    const scrollAmount = 300;

    scrollLeft.addEventListener('click', () => {
        menuContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    scrollRight.addEventListener('click', () => {
        menuContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Show/hide scroll buttons based on scroll position
    menuContainer.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    updateScrollButtons();
}

function updateScrollButtons() {
    const isScrollable = menuContainer.scrollWidth > menuContainer.clientWidth;
    const isAtStart = menuContainer.scrollLeft <= 0;
    const isAtEnd = menuContainer.scrollLeft >= menuContainer.scrollWidth - menuContainer.clientWidth - 5;

    scrollLeft.style.opacity = isScrollable && !isAtStart ? '1' : '0.3';
    scrollRight.style.opacity = isScrollable && !isAtEnd ? '1' : '0.3';
}

// ==================== Payment Options ====================
function initPaymentOptions() {
    const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            // Hide all payment sections
            gpaySection.classList.remove('active');
            cardSection.classList.remove('active');

            // Show relevant section
            if (radio.value === 'gpay') {
                gpaySection.classList.add('active');
            } else if (radio.value === 'card') {
                cardSection.classList.add('active');
            }
        });
    });

    // Card number formatting
    const cardNumber = document.getElementById('cardNumber');
    cardNumber.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
        let formatted = value.match(/.{1,4}/g)?.join(' ') || '';
        e.target.value = formatted;
    });

    // Expiry date formatting
    const expiryDate = document.getElementById('expiryDate');
    expiryDate.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        e.target.value = value;
    });

    // CVV - numbers only
    const cvv = document.getElementById('cvv');
    cvv.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
}

// ==================== Form Validation & Submission ====================
function initFormValidation() {
    orderForm.addEventListener('submit', handleOrderSubmit);
}

function handleOrderSubmit(e) {
    e.preventDefault();

    // Check if cart is empty
    if (cart.length === 0) {
        alert('Please add items to your cart before placing an order.');
        return;
    }

    // Get form data
    const formData = {
        name: document.getElementById('customerName').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        address: document.getElementById('address').value.trim(),
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value
    };

    // Validate form
    if (!formData.name || !formData.phone || !formData.address) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate card details if card payment selected
    if (formData.paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        const cardholderName = document.getElementById('cardholderName').value;

        if (!cardNumber || cardNumber.length < 16 || !expiryDate || !cvv || !cardholderName) {
            alert('Please fill in all card details correctly.');
            return;
        }
    }

    // Calculate total
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Generate order summary
    const orderSummary = {
        orderId: generateOrderId(),
        customer: formData,
        items: cart,
        total: totalAmount,
        timestamp: new Date().toISOString()
    };

    // Show success modal
    showSuccessModal(orderSummary);

    // Send SMS (integration-ready)
    sendOrderSMS(orderSummary);

    // Clear cart and form
    cart = [];
    updateCartUI();
    orderForm.reset();
    gpaySection.classList.remove('active');
    cardSection.classList.remove('active');
}

function generateOrderId() {
    return 'ORD-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();
}

// ==================== Success Modal ====================
function showSuccessModal(orderSummary) {
    const modalMessage = document.getElementById('modalMessage');
    const orderDetails = document.getElementById('orderDetails');

    modalMessage.textContent = `Thank you, ${orderSummary.customer.name}! Your order has been placed successfully.`;

    const itemsList = orderSummary.items.map(item => 
        `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('<br>');

    orderDetails.innerHTML = `
        <p><strong>Order ID:</strong> ${orderSummary.orderId}</p>
        <p><strong>Items:</strong><br>${itemsList}</p>
        <p><strong>Total:</strong> $${orderSummary.total.toFixed(2)}</p>
        <p><strong>Delivery Address:</strong> ${orderSummary.customer.address}</p>
        <p><strong>Payment Method:</strong> ${getPaymentMethodName(orderSummary.customer.paymentMethod)}</p>
    `;

    successModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    successModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function getPaymentMethodName(method) {
    const methods = {
        'gpay': 'Google Pay',
        'card': 'Card Payment',
        'cod': 'Cash on Delivery'
    };
    return methods[method] || method;
}

// Close modal on overlay click
overlay.addEventListener('click', closeModal);

// ==================== SMS Integration (Ready for API) ====================
function sendOrderSMS(orderSummary) {
    /**
     * SMS Integration-Ready Logic
     * 
     * This function is designed to be easily integrated with SMS services like:
     * - Twilio
     * - MessageBird
     * - AWS SNS
     * - Vonage (Nexmo)
     * 
     * To integrate, replace the console.log with your SMS API call.
     * 
     * Example with Twilio (backend integration required):
     * 
     * async function sendOrderSMS(orderSummary) {
     *     const response = await fetch('/api/send-sms', {
     *         method: 'POST',
     *         headers: { 'Content-Type': 'application/json' },
     *         body: JSON.stringify({
     *             to: orderSummary.customer.phone,
     *             message: constructSMSMessage(orderSummary)
     *         })
     *     });
     *     return response.json();
     * }
     */

    const smsMessage = constructSMSMessage(orderSummary);
    
    // Log SMS content for demonstration
    console.log('=== SMS NOTIFICATION ===');
    console.log('To:', orderSummary.customer.phone);
    console.log('Message:', smsMessage);
    console.log('========================');

    // In production, this would call your SMS API endpoint
    // Example: fetch('/api/send-sms', { method: 'POST', body: JSON.stringify({ phone, message }) });
}

function constructSMSMessage(orderSummary) {
    const itemsText = orderSummary.items
        .map(item => `${item.name} x${item.quantity}`)
        .join(', ');

    return `
FoodHub Order Confirmation!

Hi ${orderSummary.customer.name},

Order ID: ${orderSummary.orderId}
Items: ${itemsText}
Total: $${orderSummary.total.toFixed(2)}
Delivery: ${orderSummary.customer.address}

Thank you for ordering with FoodHub!
    `.trim();
}

// ==================== Utility Functions ====================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScroll = (target) => {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) smoothScroll(target);
        });
    });
}

let cart = [];

function addToCart(productName, productPrice) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `<p>${item.name} - $${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}</p>`;
    });

    totalPrice.innerText = `Total: $${total.toFixed(2)}`;
}

function showPaymentForm() {
    document.getElementById("payment").style.display = "block";
}

function processPayment(event) {
    event.preventDefault();

    const cardName = document.getElementById("card-name").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    // Basic validation (In real applications, use secure payment processing)
    if (cardName && cardNumber.length === 16 && expiryDate && cvv.length === 3) {
        alert("Payment Successful! Thank you for your purchase.");
        cart = [];
        displayCart();
        document.getElementById("payment").style.display = "none";
        document.getElementById("payment-form").reset();
    } else {
        alert("Invalid payment details. Please try again.");
    }
}

function viewProducts() {
    document.getElementById("products").scrollIntoView({ behavior: 'smooth' });
}

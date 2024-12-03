// Function to remove an item from the cart
function removeItem(itemId) {
    var itemElement = document.getElementById(itemId);
    itemElement.remove();
    updateCartTotal();
}

// Function to update the price of an item when the quantity is changed
function updatePrice(itemId) {
    // Get the item element and its price
    var itemElement = document.getElementById(itemId);
    var price = parseFloat(itemElement.getAttribute('data-price')); // Get price from data-price
    var quantity = parseInt(itemElement.querySelector('.quantity-input').value); // Get quantity from input

    // Calculate the total price for this item (Price * Quantity)
    var itemTotal = price * quantity;

    // Update the price in the product box
    itemElement.querySelector('.item-price').textContent = itemTotal.toFixed(2);

    // Update the cart totals
    updateCartTotal();
}

// Function to update the cart's subtotal, tax, and total
function updateCartTotal() {
    let subtotal = 0;
    const taxRate = 0.05;
    const shipping = 10;

    // Iterate over all product boxes to calculate the subtotal
    const items = document.querySelectorAll('.box');
    items.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        subtotal += price * quantity;
    });

    // Calculate the tax and total
    const tax = subtotal * taxRate;
    const total = subtotal + tax + shipping;

    // Update the subtotal, tax, and total on the page
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

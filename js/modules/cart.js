export class updateCart {
    cartProduct = document.querySelectorAll('.cart-product');
    cartQuantity = document.querySelector('.cart-popup-quantity');

    updateCart() {
        // TODo
    }

    clearCart() {
        // TODO
        updateCart();
    }
    
    addToCart(itemId) {
        // TODO
        updateCart();
    }
    
    removeFromCart(itemId) {
        // TODO
        updateCart();
    }
}

export function addPriceUpdater() {
    const summaryPrice = document.querySelector('.cart-summary-price');
    const produtsQuantitys = document.querySelectorAll('.product-quantity-input');

    for (const input of produtsQuantitys) {
        input.addEventListener('change', updatePrice)
    }
    
    function updatePrice() {
        let value = 0;
        for (const input of produtsQuantitys) {
            checkQuantity(input);
            value += parseInt(input.value) * parseInt(input.closest('.cart-product').querySelector('.product-price').textContent.slice(0, 4));
        }
        
        summaryPrice.textContent = value + " грн";
    }
    
    function checkQuantity(input) {
        if (input.value <= 0)
            input.value = 1;
    }
}

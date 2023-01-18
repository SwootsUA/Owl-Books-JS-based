export function constructor() {
    localStorage.setItem("productIDs", JSON.stringify([1,2,3,4])); 
    removeAllButtonInit();
    updateCartItems();
    updateCartQuantity();
    removeButtonInit();
}

function removeAllButtonInit() {
    document.querySelector('.cart-popup-clear').addEventListener('click', clearCart);
    function clearCart() {
        localStorage.setItem("productIDs", null); 
        updateCartItems();
        updateCartQuantity();
    }
}

function removeButtonInit() {
    var productActionRemove = document.querySelectorAll('.product-action-remove');
    for (const removeBtn of productActionRemove) {
        removeBtn.onclick = removeFromCart;
    }

    function removeFromCart() {
        var itemId = this.closest('.cart-product').querySelector('.product-name').id
        var storedProductIDs = typeof "object";
        try {
            storedProductIDs = Array.from(JSON.parse(localStorage.getItem("productIDs")));    
        } catch (error) {}
        
        if (Array.isArray(storedProductIDs))
            storedProductIDs = storedProductIDs.filter(function(element){
                return element != itemId; 
            });
        else {
            if (storedProductIDs === itemId)
                storedProductIDs = null;
        }
    
        localStorage.setItem("productIDs", JSON.stringify(storedProductIDs));    
    
        updateCartItems();
        updateCartQuantity();
        removeButtonInit();
    }
}

function updateCartQuantity() {
    const allCartProduct = document.querySelectorAll('.cart-product');
    const cartQuantity = document.querySelector('.cart-popup-quantity');
    cartQuantity.textContent = allCartProduct.length + " шт.";
}

function updateCartItems() {
    const cartPopUp = document.querySelector('.cart-popup-content');
    const cartSummary = document.querySelector('.cart-summary');
    
    var storedProductIDs = JSON.parse(localStorage.getItem("productIDs"));
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(document.getElementById("ul-body")){
                document.getElementById("ul-body").remove();
            }
            const node = document.createElement("ul");
            node.classList.add("cart-products");
            node.id = "ul-body";
            try {
                if(storedProductIDs.length > 0)
                node.innerHTML = this.responseText;
            } catch (error) {}
            cartPopUp.insertBefore(node, cartSummary);
        }
    }
    xmlhttp.open("GET", "../include/db/db-cart.php?q=" + storedProductIDs, false);
    xmlhttp.send();
    addPriceUpdater();    
}

function addToCart(itemId) {
    var storedProductIDs = typeof "object";
    try {
        storedProductIDs = Array.from(JSON.parse(localStorage.getItem("productIDs")));    
    } catch (error) {}
    
    if (Array.isArray(storedProductIDs))
        storedProductIDs = storedProductIDs.push(itemId);
    else if (storedProductIDs.length === 1) {
        storedProductIDs = numToArray(storedProductIDs, itemId);
    }
    else {
        storedProductIDs = itemId;
    }
    
    localStorage.setItem("productIDs", JSON.stringify(storedProductIDs)); 
    
    updateCartItems();
    updateCartQuantity();

    function numToArray() {
        return [].slice.call(arguments);
    }
}

function addPriceUpdater() {
    const summaryPrice = document.querySelector('.cart-summary-price');
    const produtsQuantitys = document.querySelectorAll('.product-quantity-input');
    updatePrice();

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
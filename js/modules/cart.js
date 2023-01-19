export function constructor() {
    removeAllButtonInit();
    updateCart();
    removeButtonInit();
    addButtonInit();
}

export function clearCart() {
    localStorage.setItem("productIDs", null); 
    updateCart();
}

function removeAllButtonInit() {
    document.querySelector('.cart-popup-clear').addEventListener('click', clearCart);
    function clearCart() {
        localStorage.setItem("productIDs", null); 
        updateCart();
    }
}

function removeButtonInit() {
    var productActionRemove = document.querySelectorAll('.product-action-remove');
    for (const removeBtn of productActionRemove)
        removeBtn.onclick = removeFromCart;

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
    
        updateCart();
        removeButtonInit();
    }
}

function updateCart() {
    const cartPopUp = document.querySelector('.cart-popup-content');
    const cartSummary = document.querySelector('.cart-summary');
    
    var storedProductIDs;
    var xmlhttp = new XMLHttpRequest();
    
    try {
        storedProductIDs = JSON.parse(localStorage.getItem("productIDs"));
    } catch (error) {}

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

    const allCartProduct = document.querySelectorAll('.cart-product');
    const cartQuantity = document.querySelector('.cart-popup-quantity');
    cartQuantity.textContent = allCartProduct.length + " шт.";
    if (allCartProduct.length > 0) {
        cartSummary.classList.remove('hidden');
    }
    else {
        cartSummary.classList.add('hidden');
    }

    const abotProducts = document.querySelectorAll('.about-product');
    for(const abotProduct of abotProducts) {
        abotProduct.onclick = function () {
            var id = abotProduct.querySelector('.product-name').id;
            console.log (id);
            window.location = ('../pages/item.php?item-id=' + id);
        }
    }

    addPriceUpdater();    
}

function addButtonInit() {
    const buyButtons = document.querySelectorAll('.button__buy');

    for (const buyButton of buyButtons)
        buyButton.onclick = addToCart;

    function addToCart() {
        var storedProductIDs;
        var itemId = this.closest('.item__content').querySelector('.item__content__name').id;

        try {
            storedProductIDs = Array.from(JSON.parse(localStorage.getItem("productIDs")));    
        } catch (error) {}

        if (!storedProductIDs) {
            storedProductIDs = itemId;
        }
        else if (Array.isArray(storedProductIDs) && storedProductIDs.indexOf(itemId) == -1){
            storedProductIDs.push(itemId);
        }
        else if (storedProductIDs.length === 1 && storedProductIDs.indexOf(itemId) == -1) {
            storedProductIDs = numToArray(storedProductIDs, itemId);
        }
        else if (!Array.isArray(storedProductIDs)) {
            storedProductIDs = itemId;
        }
        
        localStorage.setItem("productIDs", JSON.stringify(storedProductIDs)); 
        
        updateCart();
        removeButtonInit();

        function numToArray() {
            return [].slice.call(arguments);
        }
    }
}

function addPriceUpdater() {
    const summaryPrice = document.querySelector('.cart-summary-price');
    const produtsQuantitys = document.querySelectorAll('.product-quantity-input');
    updatePrice();
    
    var itemPageQuatity = document.querySelector('.item_page-product-quantity-input');
    if (itemPageQuatity) {
        itemPageQuatity.onchange = function () {
            if (itemPageQuatity.value < 1)
                itemPageQuatity.value = 1;
            else if (itemPageQuatity.value > 100)
                itemPageQuatity.value = 100;
        }
    }
    
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
        if (input.value < 1)
            input.value = 1;
        else if (input.value > 100)
            input.value = 100;
    }
}
export function constructor() {
    removeAllButtonInit();
    updateCart();
    addButtonInit();
}

export function clearCart() {
    localStorage.setItem("cart", "[]"); 
    updateCart();
}

function removeAllButtonInit() {
    document.querySelector('.cart-popup-clear').addEventListener('click', clearCart);
    function clearCart() {
        localStorage.setItem("cart", "[]"); 
        updateCart();
    }
}

function removeButtonInit() {
    var productActionRemove = document.querySelectorAll('.product-action-remove');
    for (const removeBtn of productActionRemove)
        removeBtn.onclick = removeFromCart;

    function removeFromCart() {
        var itemId = this.closest('.cart-product').querySelector('.product-name').id
        let cart;

        cart = JSON.parse(localStorage.getItem("cart"))
        cart = cart.filter(item => item.id != itemId);

        localStorage.setItem("cart", JSON.stringify(cart));
    
        updateCart();
    }
}

function updateCart() {
    const cartPopUp = document.querySelector('.cart-popup-content');
    const cartSummary = document.querySelector('.cart-summary');
    var cart;
    var xmlhttp = new XMLHttpRequest();
    
    if(!localStorage.getItem("cart")){
        localStorage.setItem("cart", "[]");
    }
    
    cart = JSON.parse(localStorage.getItem("cart"));

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(document.getElementById("ul-body")){
                document.getElementById("ul-body").remove();
            }
            const node = document.createElement("ul");
            node.classList.add("cart-products");
            node.id = "ul-body";

            if(cart.length > 0){
                node.innerHTML = this.responseText;
            }
            
            cartPopUp.insertBefore(node, cartSummary);
        }
    }

    let ids = cart.map((obj) => {
        return obj.id;
    });

    let quantitys = cart.map((obj) => {
        return obj.quantity;
    })

    ids = (JSON.stringify(ids)).slice(1,-1)
    quantitys = (JSON.stringify(quantitys)).slice(1,-1)

    xmlhttp.open("GET", "../include/db/db-cart.php?ids=" + ids + "&quantitys=" + quantitys, false);
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
            window.location = ('../pages/item.php?item-id=' + id);
        }
    }
    addPriceUpdater();    
    removeButtonInit();
}

function addButtonInit() {
    const buyButtons = document.querySelectorAll('.button__buy');
    for (const buyButton of buyButtons)
        buyButton.onclick = addToCart;
    
    function addToCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let itemId;
        let itemQuantity;
        
        if (this.id == 'item_page') {
            itemId = parseInt(this.closest('.item_page__info_container').querySelector('.item_page__name').id);
            itemQuantity = parseInt(this.parentElement.querySelector('.item_page-product-quantity-input').value);
        }
        else {
            itemId = parseInt(this.closest('.item__content').querySelector('.item__content__name').id);
            itemQuantity = 1;
        }

        let item = {id: itemId, quantity: itemQuantity};

        if (cart.length == 0) {
            cart.push(item)
        } else {
            let res = cart.find(element => element.id == itemId);
            if (res === undefined) {
                cart.push(item);
            } else {
                res.quantity += itemQuantity;
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        
        updateCart();
    }
}

function addPriceUpdater() {
    const summaryPrice = document.querySelector('.cart-summary-price');
    const produtsQuantitys = document.querySelectorAll('.product-quantity-input');
    updatePrice();
    
    var itemPagequantity = document.querySelector('.item_page-product-quantity-input');
    if (itemPagequantity) {
        itemPagequantity.onchange = function () {
            if (itemPagequantity.value < 1)
                itemPagequantity.value = 1;
            else if (itemPagequantity.value > 100)
                itemPagequantity.value = 100;
        }
    }
    
    for (const input of produtsQuantitys) {
        input.addEventListener('change', rememberQuantity)
    }
    
    function updatePrice() {
        let value = 0;
        for (const input of produtsQuantitys) {
            checkQuantity(input);
            value += parseInt(input.value) * parseInt(input.closest('.cart-product').querySelector('.product-price').textContent.slice(0, 4));
        }
        
        summaryPrice.textContent = value + " грн";
    }

    function rememberQuantity() {
        let id = parseInt(this.closest('.cart-product').querySelector('.product-name').id);
        let quantity = parseInt(this.value);
        let cart = JSON.parse(localStorage.getItem("cart"));
        let res = cart.find(element => element.id == id);
        res.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        updatePrice();
    }

    function checkQuantity(input) {
        if (input.value < 1)
            input.value = 1;
        else if (input.value > 100)
            input.value = 100;
    }
}
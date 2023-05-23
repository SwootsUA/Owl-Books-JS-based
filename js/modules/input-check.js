import * as cartModule from "./cart.js";

export function addInputsCheck() {
    let orderButton = document.getElementById('make-order');
    let orderInputs = document.querySelectorAll('.order-input');
    
    orderButton.onclick = async function () {
        let dontContainsError = true;
        
        for (const input of orderInputs) {
            removeError(input);
            
            if (parseInt(input.value.length) === 0 && !input.classList.contains('not_req')) {
                addError(input);
                dontContainsError = false;
            }

            if(input.classList.contains('phone') && parseInt(input.value.length) > 15) {
                addError(input);
                dontContainsError = false;
            }

            if (input.classList.contains('oblast') && parseInt(input.value) === 0) {
                addError(input);
                dontContainsError = false;
            }

            if (input.classList.contains('email') && emailTest(input)) {
                addError(input);
                dontContainsError = false;
            }
        } 

        let cartHasItem = false;
        if (localStorage.getItem('cart').length > 2)
            cartHasItem = true;

        if (dontContainsError && cartHasItem) {       
            let cart = localStorage.getItem("cart");
          
            let requestString = `http://localhost:2210/add-order?` +
            `name=${document.querySelector('.name').value}&` +
            `surname=${document.querySelector('.surname').value}&` +
            `phone_number=${document.querySelector('.phone').value}&` +
            `email=${document.querySelector('.email').value}&` +
            `region_id=${document.querySelector('.oblast').value}&` +
            `city=${document.querySelector('.city').value}&` +
            `NovaPoshta=${document.getElementById('nova-post').value}&` +
            `description=${document.querySelector('.description').value}&` +
            `content=${cart}`;
            
            await fetch(requestString)
                .then(() => {
                    activatePopUp();
                })
                .catch(error => {
                    console.log(error);
                    activateErrorPopUp();
                    return; 
                });   
        }
    };

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function addError(input) {
        input.classList.add('error');
    }

    function removeError(input) {
        input.classList.remove('error');
    }

    function activateErrorPopUp() {
        let popUp = document.querySelector('.popup-order-error');
        popUp.classList.add('active');
        popUp.onclick = function () {
            popUp.classList.remove('active');
        };
    }

    function activatePopUp() {
        let popUp = document.querySelector('.popup-order-succeed');
        popUp.classList.add('active');
        popUp.onclick = function () {
            popUp.classList.remove('active');
        };
        cartModule.clearCart();
    }
}
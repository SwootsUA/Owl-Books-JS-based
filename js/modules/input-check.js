import * as cart from "./cart.js";

export function inputCheck() {
    let orderButton = document.getElementById('make-order');
    let orderInputs = document.querySelectorAll('.order-input');
    
    orderButton.onclick = function () {
        let containsError = false;

        for (const input of orderInputs) {
            removeError(input);
            
            if (input.value.length == 0 && !input.classList.contains('not_req')) {
                addError(input);
                containsError = true;
            }

            if (input.classList.contains('oblast') && input.value == 0) {
                addError(input);
                containsError = true;
            }

            if (input.classList.contains('email') && emailTest(input)) {
                addError(input);
                containsError = true;
            }
        } 

        if (!containsError) {
            activatePopUp();
            cart.clearCart();
        }
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function addError(input) {
        input.classList.add('error');
    }

    function removeError(input) {
        input.classList.remove('error');
    }

    function activatePopUp() {
        let popUp = document.querySelector('.popup-order-succeed')
        popUp.classList.add('active');
        popUp.onclick = function () {
            popUp.classList.remove('active');
        }
    }
}
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
            var storedData;
            var xmlhttp = new XMLHttpRequest();
            var storedProductIDs;

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    activatePopUp();
                }
            }

            try {
                storedProductIDs = JSON.parse(localStorage.getItem("productIDs"));
            } catch (error) {
                return;
            }

            storedData = 
            "name=\"" + document.querySelector('.name').value +
            "\"&surname=\"" + document.querySelector('.surname').value +
            "\"&phone=\"" + document.querySelector('.phone').value +
            "\"&email=\"" + document.querySelector('.email').value +
            "\"&oblast=" + document.querySelector('.oblast').value +
            "&city=\"" + document.querySelector('.city').value +
            "\"&novaPost=\"" + document.getElementById('nova-post').value +
            "\"&description=\"" + document.querySelector('.description').value +
            "\"&products=\"" + storedProductIDs + '"';

            xmlhttp.open("GET", "../include/db/db-add-order.php?" + storedData, false);
            xmlhttp.send();

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
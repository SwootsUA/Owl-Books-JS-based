/*jshint esversion: 6 */
import * as cartModule from "./cart.js";

export function inputCheck() {
    let orderButton = document.getElementById('make-order');
    let orderInputs = document.querySelectorAll('.order-input');
    
    orderButton.onclick = function () {
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
            let storedData;
            let xmlhttp = new XMLHttpRequest();
            let cart = JSON.stringify(JSON.parse(localStorage.getItem("cart"))).replace(/["]/g, '');

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if(this.responseText.includes('Error')) { 
                        activateErrorPopUp();
                        return; 
                    }
                    cartModule.clearCart();
                    activatePopUp();
                }
            };

            storedData = 
            "name=\"" + document.querySelector('.name').value +
            "\"&surname=\"" + document.querySelector('.surname').value +
            "\"&phone=\"" + document.querySelector('.phone').value +
            "\"&email=\"" + document.querySelector('.email').value +
            "\"&oblast=" + document.querySelector('.oblast').value +
            "&city=\"" + document.querySelector('.city').value +
            "\"&novaPost=\"" + document.getElementById('nova-post').value +
            "\"&description=\"" + document.querySelector('.description').value +
            "\"&products=\"" + cart + '"';

            xmlhttp.open("GET", "../include/db/db-add-order.php?" + storedData, false);
            xmlhttp.send();
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
    }
}
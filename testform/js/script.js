"use strict";

window.addEventListener('DOMContentLoaded', () => {

    function bindModal (btnSelector, cardSelector, newCardSelector) {
        const btn = document.querySelectorAll(btnSelector),
              card = document.querySelector(cardSelector),
              newCard = document.querySelector(newCardSelector);
             
              
            btn.forEach(item => {
                item.addEventListener('click', function () {
                    card.innerHTML = '';
                    newCard.style.display = 'block';
                    card.append(newCard);
                })
            });
           
            
    }

    function prod () {
        const deleteElem = document.querySelectorAll('.products__wrap');
        const inputs = document.querySelectorAll('input');
        let price = document.querySelector('.btn__prod');

       inputs.forEach(input => {
            input.addEventListener('click', function() {
                if (this.value == 5) {
                    price.innerHTML = 'Submit and Pay 80 USD';
                } else if (this.value == 4) {
                    deleteElem[4].remove()
                    price.innerHTML = 'Submit and Pay 72 USD';
                } else if (this.value == 3) {
                    deleteElem[4].remove();
                    deleteElem[3].remove();
                    price.innerHTML = 'Submit and Pay 60 USD';
                } else if (this.value == 2) {
                    deleteElem[4].remove();
                    deleteElem[3].remove();
                    deleteElem[2].remove();
                    price.innerHTML = 'Submit and Pay 44 USD';
                } else if (this.value == 1) {
                    deleteElem[4].remove();
                    deleteElem[3].remove();
                    deleteElem[2].remove();
                    deleteElem[1].remove();
                    price.innerHTML = 'Submit and Pay 24.99 USD'

                } else {
                    price.innerHTML = 'Submit and Pay 0 USD';
                }
            })
        }) 

        //Delete on click
        deleteElem.forEach(elem => {
            elem.addEventListener('click', function() {
                elem.remove()
                let inner = document.querySelector('.products__scroll').getElementsByClassName('products__wrap').length;
                
                if (inner == 5) {
                    price.innerHTML = 'Submit and Pay 80 USD';
                } else if (inner == 4) {
                    price.innerHTML = 'Submit and Pay 72 USD';
                } else if (inner == 3) {
                    price.innerHTML = 'Submit and Pay 60 USD';
                } else if (inner == 2) {
                    price.innerHTML = 'Submit and Pay 44 USD';
                } else if (inner == 1) {
                    price.innerHTML = 'Submit and Pay 24.99 USD';
                } else {
                    price.innerHTML = 'Submit and Pay 0 USD'
                }
            })
        })

        //Loader
        let loader = document.querySelector('.loader');

        price.addEventListener('click', function() {
            price.innerHTML = '';
            loader.style.display = 'block';
           
        })
        
       

    }
    prod()
   

    bindModal('.info__add', '.info', '.add__inner');
    bindModal('.btn__add', '.add__inner', '.products__inner');
    bindModal('.btn__prod', '.products__inner', '.successfull__inner');
    bindModal('.btn__successfull', '.successfull__inner', '.pay-failed__inner');

});













    


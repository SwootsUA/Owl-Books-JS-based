fetchItemData();

function fetchItemData() {
    const searchParams = new URLSearchParams(window.location.search);
    const itemId = searchParams.get('id');

    
    
    fetch(`http://localhost:2210/item?id=${itemId}`)
      .then(response => response.json())
      .then(data => {
        const itemContainer = document.querySelector('.item_page');
        
        let genres = data.genres.length === 1 ? 'Жанр: ' : 'Жанри: ';
        data.genres.forEach((genre, index) => {
            genres += `${genre.name}${index < data.genres.length - 1 ? ', ' : ''}`;
        });

        let authors = data.authors.length == 1 ? 'Автор: ' : 'Автори: ';
        data.authors.forEach((author, index) => {
            authors += `${author.name}${index < data.authors.length - 1 ? ', ' : ''}`;
        });

        const itemQuantity = data.info.quantity > 0 
        ? `<div class="item_page__made_by"> Одиниць на складі: <span id="item_quantity">${data.info.quantity}</span></div>` 
        : `<div class="item_page__made_by text-error"> Немає в наявності <span id="item_quantity" class="display_none">${data.info.quantity}</span></div>`;    

        const itemPageBuy = data.info.quantity > 0 ? 
        `
            <div class="item_page__buy">
                <button class="button__buy" id="item_page">Купити</button>
                <input type="number" min="1" max="100" value="1" class="item_page-product-quantity-input">
                <div class="item_page__price">${data.info.price} грн</div>
            </div>
        ` : `
            <div class="item_page__buy">
                <button class="button__buy display_none" id="item_page">Купити</button>
                <input type="number" min="1" max="100" value="1" class="item_page-product-quantity-input display_none">
                <div class="item_page__price">${data.info.price} грн</div>
            </div>
        `;
    
        itemContainer.innerHTML = `
        <div class="item_page__image_container">
            <img class="item_page__image" src="./img/items/${data.info.image}" alt="${data.info.name}">
        </div>
        <div class="item_page__info_container">
            <div class="item_page__info">
                <div class="item_page__name" id="${data.info.book_id}">
                    ${data.info.name}
                </div>
                <div class="item_page__made_by">
                    ${authors}
                </div>
                <div class="item_page__made_by">
                    ${genres}
                </div>
                <div class="item_page__made_by">
                    Кількість сторінок: ${data.info.page_amount}
                </div>
                <div class="item_page__made_by">
                    Видавництво: ${data.info.pub_name}
                </div>
                <div class="item_page__made_by">
                    ISBN: ${data.info.ISBN}
                </div>
                
                ${itemQuantity}

                <div class="item_page__description">
                    <p>${data.info.description}
                </div>
                
            </div>
            ${itemPageBuy}
        </div>
        `;
      })
      .catch(error => {
        console.log(error);
        const itemContainer = document.querySelector('.item_page');
        itemContainer.innerHTML = 'Error retrieving data from database';
      });
  }
  
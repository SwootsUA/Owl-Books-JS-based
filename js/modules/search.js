fetchSearchData();

function fetchSearchData() {
    const searchParams = new URLSearchParams(window.location.search);
    const name = searchParams.get('s');

    fetch(`http://localhost:2210/search?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const tittle = document.querySelector('.tittle');
            tittle.innerHTML += name;
            
            const search_row = document.querySelector('.items__row');

            for(let i = 0; i < data.length; i++) {
                search_row.innerHTML +=
                `
                <div class=\"item\">
                    <div class=\"item__content\">
                        <a class=\"item__href\" href=\"./item.html?id=${data[i].book_id}\">
                            <img class=\"item_image\" src=\"./img/items/${data[i].image}\" alt=\"${data[i].name}\">
                            <div id=\"${data[i].book_id}\" class=\"item__content__name\">
                                ${data[i].name}
                            </div>
                        </a>
                        <div class=\"item__content__row\">
                            <div class=\"item__content__collum\">
                                <div class=\"item__content__price\">
                                    ${data[i].price} грн
                                </div>
                            </div>
                            ${data[i].quantity > 0 ? `
                            <button class="button__buy">
                              Купити
                            </button>` : `
                            <div class="text-error center">Немає в наявності</div>
                            <button class="button__buy display_none">
                              Купити
                            </button>`}
                        </div>
                    </div>
                </div>
                `;
            }
        })
        .catch(error => {
            console.log(error);
            const itemContainer = document.querySelector('.item_page');
            itemContainer.innerHTML = 'Error retrieving data from database';
        });
}
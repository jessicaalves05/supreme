
const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

let itemsShown = false;

 function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach(product => {
        myLi += `
                <li class="zoom-wrapper">
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${product.price.toFixed(2)}</p>
                </li>
                `
    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product, // Spread operator

        price: product.price * 0.9,//dar 10% de desconto

    }))

    showAll(newPrices)
}

function sumAllItems() {
    

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

    list.innerHTML = ` 
    <li>
        <p class="soma"> O valor total dos itens é <span class="total-value"> R$ ${totalValue}</span></p>
    </li>
    `   
}

function filterAllItems(){
    const filterJustVegan = menuOptions.filter( (product) => product.vegan)

    showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click',() => {
    if (itemsShown) {
        list.innerHTML = ''; //clear the list
    } else {
       showAll(menuOptions);
    } 
     itemsShown = !itemsShown; //toggle the state

});

buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)
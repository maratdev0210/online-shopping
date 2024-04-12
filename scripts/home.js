

const sortButton = document.querySelector('.sortOff');
const filterSection = document.querySelector('.filterSection');
const filterButton = document.querySelector('.filterSection .buttons');
const buttons = document.querySelector('.buttons');
const collections = document.querySelector('.collections');
const panel = document.querySelector('.panel');
const itemsSection = document.querySelector('.items');
const assetsPath = '..\\assets';


let showClothes = [];

const Clothes = [
    {
        gender: 'men',
        type: 'jeans',
        name: 'straight regular jeans',
        price: 3499,
        src: assetsPath + '\\jeans\\jeans1.jpg',
        id: 1,
    },
    {
        gender: 'men',
        type: 'jeans',
        name: 'loose jeans',
        price: 2299,
        src: assetsPath + '\\jeans\\jeans2.jpg',
        id: 2,
    },
    {
        gender: 'men',
        type: 'jeans',
        name: 'baggy jeans',
        price: 2299,
        src: assetsPath + '\\jeans\\jeans3.jpg',
        id: 3,
    },
    {
        gender: 'men',
        type: 'jeans',
        name: 'skinny jeans',
        price: 1899,
        src: assetsPath + '\\jeans\\jeans4.jpg',
        id: 4,
    },
    {
        gender: 'men',
        type: 'jeans',
        name: 'straight regular jeans',
        price: 3699,
        src: assetsPath + '\\jeans\\jeans5.jpg',
        id: 5,
    },
    {
        gender: 'women',
        type: 'jeans',
        name: 'skinny high jeans',
        price: 2499,
        src: assetsPath + '\\jeans\\jeans6.jpg',
        id: 6,
    },
    {
        gender: 'women',
        type: 'jeans',
        name: 'wide ultra high jeans',
        price: 2699,
        src: assetsPath + '\\jeans\\jeans7.jpg',
        id: 7,
    },
    {
        gender: 'women',
        type: 'jeans',
        name: 'slim high jeans',
        price: 2899,
        src: assetsPath + '\\jeans\\jeans8.jpg',
        id: 8,
    },
    {
        gender: 'women',
        type: 'jeans',
        name: 'straight regular jeans',
        price: 3699,
        src: assetsPath + '\\jeans\\jeans9.jpg',
        id: 9,
    },
    {
        gender: 'women',
        type: 'jeans',
        name: 'curvy fit slim high jeans',
        price: 4599,
        src: assetsPath + '\\jeans\\jeans10.jpg',
        id: 10
    }, {
        gender: 'men',
        type: 'a',
        name: 'b',
        price: 1,
        id: 11,
    }
];

// store the items added to the cart here
// the structure of the cart is the array of objects
/*
    {
        name: 'name',
        quantity: 'number',    // quantity of items added
        price: price,  
        src: imagePath,
        
    }
*/
const Cart = []


function toggle(element, value) {
    element.classList.remove(element.classList);
    element.classList.add(value);
    return element;
}

function createPanel() {
    let panel = document.createElement('div');
    panel.setAttribute('class', 'panel');
    let options = ['price (low to high)', 'price (high to low)', 'men only', 'women only'];
    for (let option of options) {
        let item = document.createElement('span');
        item.setAttribute('value', option);
        item.textContent = option;
        panel.appendChild(item);
    }
    return panel;
}

function resetItems(itemsPanel) {
    while (itemsPanel.firstChild) {
        itemsPanel.removeChild(itemsPanel.lastChild);
    }
}

function addItems(event) {
    if (event.target.classList[0] == 'sortOff') {
        let panel = createPanel();
        filterSection.appendChild(panel);
        toggle(sortButton, 'sortOn');   
        panel.addEventListener('click', (event) => {
            resetItems(itemsSection); // remove the results of the previous sorting
            let option = event.target.getAttribute('value');
            const options = {
                'men only': menOnly,
                'women only': womenOnly,
                'price (low to high)': lowToHigh,
                'price (high to low)': highToLow,
            };
            options[option](showClothes);
            showResult();
        });
    } else {
        let removePanel = document.querySelector('.panel');
        filterSection.removeChild(removePanel);
        toggle(sortButton, 'sortOff');
    }
}

buttons.addEventListener('click', addItems);


collections.addEventListener('click', (event) => {
    // display the clothing items selected by the user
    let itemType = event.target.classList[0];
    itemsSection.classList.replace(itemsSection.classList[2], itemType);
    console.log('yes');
    resetItems(itemsSection);
    showResult();
});


const ITEMS = [
    {
        name: 'item1',
        price: 1,
        gender: 'men',
    },
    {
        name: 'item2',
        price: 2,
        gender: 'women',
    },
    {
        name: 'item3',
        price: 0,
        gender: 'women',
    },
    {
        name: 'item4',
        price: 5,
        gender: 'men',
    },
    {
        name: 'item5',
        price: 4,
        gender: 'men',
    },
    {
        name: 'item6',
        price: 10,
        gender: 'men',
    },
    {
        name: 'item7',
        price: 12,
        gender: 'women',
    },
    {
        name: 'item8',
        price: 25,
        gender: 'men',
    },
    {
        name: 'item9',
        price: 30,
        gender: 'women',
    },
    {
        name: 'item10',
        price: 24,
        gender: 'men'
    }
];

function lowToHigh(items) {
    let newItems = items.slice(0); // get the reference of the array items
    newItems.sort(function(a, b) {
        return a.price - b.price;
    });
    itemsSection.classList.replace(itemsSection.classList[3], 'ascendSort');
    return newItems;
}

function highToLow(items) {
    let newItems = items.slice(0);
    newItems.sort(function(a, b) {
        return b.price - a.price;
    });
    itemsSection.classList.replace(itemsSection.classList[3], 'descendSort');
    return newItems;
}

function menOnly() {
    itemsSection.classList.replace(itemsSection.classList[1], 'menGender');
}

function womenOnly(items) {
    itemsSection.classList.replace(itemsSection.classList[1], 'womenGender');
}


function displayItems(items) {
    for (let item of items) {
        let placeHolder = document.createElement('div');
        let imageItem = document.createElement('img');
        let descriptionSection = document.createElement('div');
        let itemName = document.createElement('span');
        let itemPrice = document.createElement('span');
        itemName.textContent = item.name;
        itemPrice.textContent = item.price;
        descriptionSection.appendChild(itemName);
        descriptionSection.appendChild(itemPrice);
        imageItem.setAttribute('src', item.src);
        let cartSection = document.createElement('div');
        cartSection.classList.add('cart');
        let cartImage = document.createElement('img');
        cartImage.classList.add('cart-img');
        cartImage.setAttribute('title', 'add to cart');
        cartImage.setAttribute('src', assetsPath + '/cart.svg');
        cartImage.setAttribute('id', item.id);
        cartSection.appendChild(cartImage);
        placeHolder.appendChild(imageItem);
        placeHolder.appendChild(descriptionSection);
        placeHolder.appendChild(cartSection);
        itemsSection.appendChild(placeHolder);
    }
}


function showResult() {
    
    // access the gender type
    let gender = {
        'allGender': true, 
        'menGender': 'men',
        'womenGender': 'women',
    };
    let selectedGender = gender[itemsSection.classList[1]];

    // access the type of clothing
    let clothing = {
        'allClothes': true,
    }
    let selectedClothing = itemsSection.classList[2];

    // filter by sorting type
    let sorting = {
        'defaultSort': true,
        'ascendSort': lowToHigh,
        'descendSort': highToLow,
    };
    let selectedSorting = itemsSection.classList[3];
    let clothesCopy = Clothes.slice(0); // make a copy of the Clothes items so that it does not get modified
    showClothes = clothesCopy.filter((item) => {
        if (selectedClothing in clothing && selectedGender == true) {
            return true;
        } else if (selectedClothing in clothing && selectedGender != true) {
            return (item.gender == selectedGender);
        } else if (selectedGender == true) {
            return (item.type == selectedClothing);
        } else if (selectedGender != true) {
            return (item.type == selectedClothing && item.gender == selectedGender);
        }
    });
    
    if (selectedSorting != 'defaultSort') {
        showClothes = sorting[selectedSorting](showClothes);
    }
    displayItems(showClothes);
}

window.addEventListener('load', displayItems(Clothes));

itemsSection.addEventListener('click', (event) => {
    if (event.target.classList[0] == 'cart-img') {
        // add some interaction of adding to cart
        /*let dialog = document.createElement('div');
        dialog.classList.add('dialog');
        dialog.textContent = 'a';
        let body = document.querySelector('body');
        body.appendChild(dialog); */
        let id = Number(event.target.getAttribute('id'));
        console.log(Clothes[id - 1].name);
        //console.log(event.target.getAttribute('id'));
    }

});

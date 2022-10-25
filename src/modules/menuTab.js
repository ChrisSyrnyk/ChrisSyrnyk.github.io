function generateMenuPage(parentDiv){
    eraseContent(parentDiv);
    let menuItemContainer = document.createElement('div');
    menuItemContainer.className = 'menu-item-container';
    let menuItem1 = createMenuItem('Mini Donuts', 'img/miniDonuts.png', '10pc $5');
    let menuItem2 = createMenuItem('Honey Glazed', 'img/honeyGlazed.jpg', '1pc $4');
    let menuItem3 = createMenuItem('Chocolate Glazed', 'img/chocolateGlazed.jpg', '1pc $4');
    let menuItem4 = createMenuItem('Jelly Donuts', 'img/jellyDonuts.png', '1pc $5');
    let menuItem5 = createMenuItem('Double Chocolate', 'img/doubleChocolate.png', '1pc $5');
    let menuItem6 = createMenuItem('Vanilla cream', 'img/vanillaCream.jpg', '1pc $4');
    menuItemContainer.appendChild(menuItem1);
    menuItemContainer.appendChild(menuItem2);
    menuItemContainer.appendChild(menuItem3);
    menuItemContainer.appendChild(menuItem4);
    menuItemContainer.appendChild(menuItem5);
    menuItemContainer.appendChild(menuItem6);
    parentDiv.appendChild(menuItemContainer);
}

function createMenuItem(name, image, price){
    let menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    let nameDiv = generateNameDiv(name);
    let imageDiv = generateItemImageDiv(image);
    let priceDiv = generatePriceDiv(price);
    menuItem.appendChild(nameDiv);
    menuItem.appendChild(imageDiv);
    menuItem.appendChild(priceDiv);
    return menuItem;
}

function generateNameDiv(name){
    let nameDiv = document.createElement('div');
    nameDiv.className = 'item-name';
    nameDiv.innerHTML = name;
    return nameDiv;
}

function generateItemImageDiv(image){
    let imageDiv = document.createElement('div');
    imageDiv.className = 'item-image-container';
    let menuImage = document.createElement('img');
    menuImage.src = image;
    menuImage.className = 'item-image';
    imageDiv.appendChild(menuImage);
    return imageDiv;
}

function generatePriceDiv(price){
    let priceDiv = document.createElement('div');
    priceDiv.className = 'item-price';
    priceDiv.innerHTML = price;
    return priceDiv;
}

function eraseContent(parentDiv){
    parentDiv.innerHTML="";
}

export default generateMenuPage;
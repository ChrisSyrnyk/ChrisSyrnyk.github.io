

function generateHeader(parentDiv){
    let headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';
    headerContainer.append(generateTitleDiv());
    headerContainer.append(generateTabsDiv());
    parentDiv.appendChild(headerContainer);
}


function generateTitleDiv(){
    let titleContainer = document.createElement('div');
    titleContainer.className ='title-container';
    let title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = "Sunrise Donuts";
    titleContainer.appendChild(title);
    return titleContainer;
}

function generateTabsDiv(){
    let tabscontainer = document.createElement('div');
    tabscontainer.className = 'title-container';
    tabscontainer.appendChild(generateButtonsDiv());
    return tabscontainer;
}

function generateButtonsDiv(){
    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'title-container';
    let homeButton = createHeaderButton('Home');
    let menuButton = createHeaderButton('Menu');
    let contactButton = createHeaderButton('Contact');
    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);
    return buttonContainer;
}

function createHeaderButton(name){
    let button = document.createElement('button');
    button.className = 'menu-button';
    let buttonText = document.createElement('div');
    buttonText.className = 'menu-button-text';
    buttonText.id = name;
    buttonText.innerHTML = name;
    let buttonUnderLine = document.createElement('div');
    buttonUnderLine.className = 'menu-under-line';
    button.appendChild(buttonText);
    button.appendChild(buttonUnderLine);
    return button;
}

export default generateHeader;
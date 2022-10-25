//functions for creating Home page-----------------------------------------------------------
function generateHomePage(parentDiv){
    eraseContent(parentDiv);
    let motto = generateMottoDiv();
    let image = generateImageDiv();
    let slogan = generateSloganDiv();
    //append divs to parentDiv
    parentDiv.appendChild(motto);
    parentDiv.appendChild(image);
    parentDiv.appendChild(slogan);
}

function generateMottoDiv(){
    let motto = document.createElement('div');
    motto.className = "company-motto";
    motto.innerHTML = "Welcome! Order your favourite sweet treats today!";
    return motto;
}
function generateImageDiv(){
    let image = document.createElement('div');
    image.className = "company-motto-img";
    return image;
}
function generateSloganDiv(){
    let slogan = document.createElement('div');
    slogan.className = "company-motto";
    slogan.innerHTML = "Made to order!";
    return slogan;
}

//erase content function 

function eraseContent(parentDiv){
    console.log(parentDiv);
    parentDiv.innerHTML="";
}

export default generateHomePage;
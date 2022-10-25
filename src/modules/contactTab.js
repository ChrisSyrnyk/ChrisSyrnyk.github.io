//functions for creating contact page-----------------------------------------------------
function generateContactPage(parentDiv){
    eraseContent(parentDiv);
    let menuItem = document.createElement('div');
    menuItem.className = "menu-item-container";
     //create div class menu-item-container
    let hours = generateHoursDiv(); //create hours div
    let map = generateMapDiv(); //create map div
    let contact = generateContactDiv(); //create contact div
    //append divs to menuItem
    menuItem.appendChild(hours);
    menuItem.appendChild(map);
    menuItem.appendChild(contact);
    //append menuItem to parentDiv
    parentDiv.appendChild(menuItem);
}

function generateHoursDiv(){
    let hoursDiv = document.createElement('div');
    hoursDiv.className = "contact-container";
    hoursDiv.innerHTML = "Monday: Closed <br>Tuesday - Friday: 8am-4pm <br>Saturday & Sunday: 8am-2pm <br>";
    return hoursDiv;
}

function generateMapDiv(){
    let mapDiv = document.createElement('div');
    mapDiv.className = 'map';
    mapDiv.innerHTML = "<div class='mapouter'><div class='gmap_canvas'><iframe width='100%' height='100%' id='gmap_canvas' src='https://maps.google.com/maps?q=canmore&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe><a href='https://123movies-to.org'>123movies</a><br><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><a href='https://www.embedgooglemap.net'>google map plugin html</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>"
    return mapDiv;
}


function generateContactDiv(){
    let contactDiv = document.createElement('div');
    contactDiv.className = "contact-container";
    contactDiv.innerHTML = "Email: contact@sunrisedonuts.com <br>Phone: 222-333-4444"
    return contactDiv;
}

function eraseContent(parentDiv){
    parentDiv.innerHTML="";
}

export default generateContactPage;
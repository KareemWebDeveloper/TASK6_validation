const categoriesList = document.querySelector('#categoriess');
const title = document.querySelector('#listTitle');
const arrow = document.querySelector('#arroww');
const comedyChoice = document.querySelector('#c');
const horrorChoice = document.querySelector('#h');
const actionChoice = document.querySelector('#a');
const romanticChoice = document.querySelector('#r');
const dramaChoice = document.querySelector('#d');
const horror = document.querySelector('#horrorMovie');
const comedy = document.querySelector('#comedyMovie');
const drama = document.querySelector('#dramaMovie');
const romantic = document.querySelector('#romanticMovie');
const action = document.querySelector('#actionMovie');
const photos = document.querySelectorAll('img');
const submit = document.querySelector('#submit');

comedyChoice.addEventListener('click', showComedyFilm);
horrorChoice.addEventListener('click', showHorrorFilm);
actionChoice.addEventListener('click', showActionFilm);
romanticChoice.addEventListener('click', showRomanticFilm);
dramaChoice.addEventListener('click', showDramaFilm);
function showComedyFilm() {
    comedyChoice.classList.add('active');
    if (comedy.classList.contains('none')) {
        comedy.classList.remove('fade');
        comedy.classList.remove('none');
    }
    else {
        comedy.classList.add('fade');
        setTimeout(() => {
            comedy.classList.add('none');
        }, 1300)
        comedyChoice.classList.remove('active');
    }
}
function showHorrorFilm() {
    horrorChoice.classList.add('active');
    if (horror.classList.contains('none')) {
        horror.classList.remove('fade');
        horror.classList.remove('none');
    }
    else {
        horror.classList.add('fade');
        setTimeout(() => {
            horror.classList.add('none');
        }, 1300)
        // comedy.classList.add('none');
        horrorChoice.classList.remove('active');
    }
}
function showActionFilm() {
    actionChoice.classList.add('active');
    if (action.classList.contains('none')) {
        action.classList.remove('fade');
        action.classList.remove('none');
    }
    else {
        action.classList.add('fade');
        setTimeout(() => {
            action.classList.add('none');
        }, 1300)
        // comedy.classList.add('none');
        actionChoice.classList.remove('active');
    }
}
function showRomanticFilm() {
    romanticChoice.classList.add('active');
    if (romantic.classList.contains('none')) {
        romantic.classList.remove('fade');
        romantic.classList.remove('none');
    }
    else {
        romantic.classList.add('fade');
        setTimeout(() => {
            romantic.classList.add('none');
        }, 1300)
        // comedy.classList.add('none');
        romanticChoice.classList.remove('active');
    }
}
function showDramaFilm() {
    dramaChoice.classList.add('active');
    if (drama.classList.contains('none')) {
        drama.classList.remove('fade');
        drama.classList.remove('none');
    }
    else {
        drama.classList.add('fade');
        setTimeout(() => {
            drama.classList.add('none');
        }, 1300)
        // comedy.classList.add('none');
        dramaChoice.classList.remove('active');
    }
}

title.addEventListener('click', showList);
function showList() {
    if (categoriesList.classList.contains('none')) {
        categoriesList.classList.remove('none');
        arrow.classList.add('rot');
    }
    else {
        categoriesList.classList.add('none');
        arrow.classList.remove('rot');
    }
}
let suggestions = document.querySelectorAll("li[kiko='categ']")
let photossss = document.querySelector('#photos');
for(let i=0 ; i<suggestions.length;i++){
    suggestions[i].addEventListener('click',scrolll);
}
function scrolll(){
    setTimeout(() => {
        photossss.scrollIntoView({ behavior: "smooth" });
    }, 150)
}


submit.addEventListener('click', login);

function login(e ) {
    e.preventDefault();
    var inputs = document.querySelectorAll("#Fname, #Lname ,#email ,#pass ,#confirm ");
    console.log(inputs);
    var error= validation(inputs, validation_pattern); 
     if (!error) {
       console.log("login");
     }
  }

let validation_pattern = {
    email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,//email pattern 
    password: /^[a-zA-Z0-9]{6,15}$/,// password pattern 
    // confrimPassword: /^[a-zA-Z0-9]{6,15}$/,// password pattern 
    firstName: /^[a-zA-Z0-9]{2,35}$/, //first name pattern
    lastName: /^[a-zA-Z0-9]{2,35}$/  // last name pattern
  };
  
  function validation(inputs, validationPattern) {
    var error = false; 
    for (var i = 0; i < inputs.length; i++) {
      var element = inputs[i];
      var confirmpw = document.querySelector('#confirm');
      var passs = document.querySelector('#pass');
       if(element.value =="" ){
          element.nextElementSibling.textContent = `${element.name} is required`;
          element.classList.add('error')
        } 
        else if (!element.value.match(validationPattern[element.name])) {
            element.nextElementSibling.textContent = `${element.name} is not valid`;
            error = true;
            element.classList.add('error')
        }
        else if(confirmpw.value!=passs.value){
            confirmpw.nextElementSibling.textContent = `${confirmpw.name} must be matching  `;
            passs.nextElementSibling.textContent = `${confirmpw.name} must be matching  `;
            confirmpw.classList.add('error');
            passs.classList.add('error');
            error = true;
        }
       else {
        element.nextElementSibling.textContent = "";
        element.classList.remove('error')
      }
    }
    return error
  }
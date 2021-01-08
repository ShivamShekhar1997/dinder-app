const rightButton = document.querySelector(".right");
const listbox = document.querySelector(".list");
const photo = document.getElementById("photo");
var img="dog1.jpeg";

function fetchApi() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        img = data.message;
        console.log(data);
        photo.src = data.message
    })
}

function addToList() {
    const listItem = document.createElement("div");
    const listImage = document.createElement("img");
    listItem.classList.add("list-item");
    listImage.src = img;
    listImage.classList.add("icon");
    listItem.append(listImage);
    // console.log(listbox);
    listbox.append(listItem);
}

function fetchApiRight() {
    fetchApi();
    addToList();
}


function fetchApiLeft() {
    fetchApi();
}



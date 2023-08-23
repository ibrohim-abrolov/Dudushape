// let elInput = document.querySelector(".card__input");
// let elList = document.querySelector(".card__list");


// function renderProducts(array) {
//     // elList.innerHTML = "";
//     array.forEach(function(item) {
//         elList.innerHTML = "";
//         // Getting elements
//         let liElement = document.createElement("li");
//         let imgElement = document.createElement("img");
//         imgElement.setAttribute("src", item.img);
//         let divElement = document.createElement("div");
//         let titleElement = document.createElement("h3");
//         let boldElement = document.createElement("strong");
//         let innerDivElement = document.createElement("div");
//         let textElement = document.createElement("p");
//         let linkElement = document.createElement("a");


//         // Adding class
//         liElement.classList.add("card__items");
//         imgElement.classList.add("card__img");
//         divElement.classList.add("card__inner-wrapper");
//         titleElement.classList.add("card__title");
//         boldElement.classList.add("card__bold");
//         innerDivElement.classList.add("card__inner-textbox");
//         textElement.classList.add("card__text");
//         linkElement.classList.add("card__shop");


//         // Adding textcontent
//         titleElement.textContent = item.title;
//         boldElement.textContent =  item.weight;
//         textElement.textContent =  item.text;
//         linkElement.textContent =  item.link;


//         // Appending elements
//         liElement.append(imgElement, divElement, innerDivElement, linkElement);
//         divElement.append(titleElement, boldElement);
//         innerDivElement.appendChild(textElement);
//         elList.append(liElement);
//     });
// };

// renderProducts(products);



let elForm = document.querySelector(".form");
let elError = document.getElementById("error");
let elInput = document.querySelector(".form__input");

elError.classList.add("error");

elForm.addEventListener("submit", function(evtt) {
    evtt.preventDefault();

    let inputValue = elInput.value.trim().toLowerCase();

    if(inputValue.includes("@gmail.com")) {
        alert("You are succesfully accepted");
    } else if(inputValue.length <= 8) {
        elError.innerText = "Must be at least 8 words";
    } else if(inputValue === "") {
        elError.innerText = "Email is required";
    }
});
const mainDiv = document.querySelector("main-div");

for (i = 0; i < 16; i++){
    const createdDiv = document.createElement("div");
    createdDiv.classList.add("div-squares");
    mainDiv.appendChild(createdDiv);
}
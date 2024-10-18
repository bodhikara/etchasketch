const mainDiv = document.querySelector("main-div");
const createdDiv = document.createElement("div");
createdDiv.textContent = "hello"
for (i = 0; i < 16; i++){
    mainDiv.appendChild(createdDiv);
}
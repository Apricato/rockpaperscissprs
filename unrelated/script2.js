// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);




const parrafo = document.createElement("div");
const redParagraph = document.createElement("p");
const blueletters = document.createElement("h3");
const adiv = document.createElement("div")
const hdiv = document.createElement("h1");
const pdiv = document.createElement("p");


parrafo.style.backgroundColor = "pink";
parrafo.style.border = "2px solid black"

redParagraph.textContent = "Hey i am red";
redParagraph.style.color = "red";

blueletters.textContent = "Hey i am blue h3";
blueletters.style.color = "blue";

hdiv.textContent = "Hey i  am an h1 inside a div";
pdiv.textContent = "ME TOO";

adiv.appendChild(hdiv);
adiv.appendChild(pdiv);
parrafo.appendChild(redParagraph);
parrafo.appendChild(blueletters);

container.appendChild(parrafo);
container.appendChild(adiv);


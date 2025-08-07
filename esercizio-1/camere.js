const camere = [
  {
    nome: "Camera Deluxe",
    image: "img/camera-1.jpg",
    prezzo: 120,
    disponibile: true
},
{
    nome: "Camera Singola",
    image: "img/camera-2.jpg",
    prezzo: 75,
    disponibile: false
},
{
    nome: "Suite Vista Mare",
    image: "img/camera-3.jpg",
    prezzo: 200,
    disponibile: true
  }
];
console.log(camere)

let mainContainer = document.querySelector("div");
camere.forEach(camera => createCamera(camera));//ciclo ogni elemento dell'array, prendo un elemento alla volta e lo chiamo camera



function createCamera(camera){//passo ofni elemento creato alla funzione creaCamera
    let nome = camera.nome;
    let immagine = camera.image;
    let prezzo = camera.prezzo;
    let disponibilità = camera.disponibile;
    
    let cameraEl = document.createElement("section");
    cameraEl.insertAdjacentHTML("beforeend", `<h4>${nome}</h4> <img src="${immagine}" alt="Immagine di ${nome}" > </img><p>Prezzo: ${prezzo}</p> <p>${disponibilità ? "Disponibile" : "Non disponibile"}</p>`);
    mainContainer.appendChild(cameraEl);
}




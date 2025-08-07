const enneagramma = [
  {
    tipo: 1,
    nome: "Il Perfezionista",
    descrizione: "Etico, coscienzioso, ordinato. Cerca la perfezione.",
    emoji: "🧭",
    immagine: "..//1.jpg"
  },
  {
    tipo: 2,
    nome: "Il Donatore",
    descrizione: "Generoso, premuroso, ha bisogno di sentirsi utile.",
    emoji: "💖",
    immagine: "..//2.jpg"
  },
  {
    tipo: 3,
    nome: "Il Realizzatore",
    descrizione: "Efficiente, ambizioso, desidera essere ammirato.",
    emoji: "🏆",
    immagine: "..//3.jpg"
  },
  {
    tipo: 4,
    nome: "Il Romantico",
    descrizione: "Sensibile, introspettivo, cerca l'autenticità.",
    emoji: "🎭",
    immagine: "..//4.jpg"
  },
  {
    tipo: 5,
    nome: "L'Osservatore",
    descrizione: "Riservato, riflessivo, orientato alla conoscenza.",
    emoji: "🔍",
    immagine: "..//5.jpg"
  },
  {
    tipo: 6,
    nome: "Il Leale",
    descrizione: "Fedele, ansioso, cerca sicurezza e stabilità.",
    emoji: "🛡️",
    immagine: "..//6.jpg"
  },
  {
    tipo: 7,
    nome: "L’Entusiasta",
    descrizione: "Spontaneo, ottimista, ama divertirsi e nuove esperienze.",
    emoji: "🎉",
    immagine: "..//7.jpg"
  },
  {
    tipo: 8,
    nome: "Il Leader",
    descrizione: "Forte, deciso, protettivo verso i deboli.",
    emoji: "🦁",
    immagine: "..//8.jpg"
  },
  {
    tipo: 9,
    nome: "Il Pacificatore",
    descrizione: "Calmo, accomodante, ama l’armonia e l’equilibrio.",
    emoji: "🌿",
    immagine: "../9.jpg"
  }
];
let buttonContainer = document.querySelector("main");
let myButton = document.createElement("button");
myButton.textContent = "Fai il Test!"
buttonContainer.prepend(myButton);
myButton.classList.add("prova-test");

myButton.addEventListener("click", function() {
  window.location.href = "test.html"
});


let mainContainer = document.getElementById("cards-container");

enneagramma.forEach(tipo => createTipo(tipo));

function createTipo(tipo){
  let numeroTipo = tipo.tipo;
  let nome = tipo.nome;
  let descrizione = tipo.descrizione;
  let emoji = tipo.emoji;
  let immagine = tipo.immagine;

  let tipoUno = document.createElement("section");//creazion <section> </section>
  tipoUno.classList.add("sezione"); //assegnazione <section class="sezione"> </section>
  let contenitoreTitoli = document.createElement("div");//creazione <div></div>
  contenitoreTitoli.classList.add("contenitore-titoli");//assegnazione <div class="contenitore-titoli"
  tipoUno.append(contenitoreTitoli);//appeso il div nella section
  contenitoreTitoli.insertAdjacentHTML("afterbegin", `<h3>${numeroTipo}</h3><h4>${nome}</h4>`);//inserimento <h3></h3> e <h4></h4>
  let descrizioneP = document.createElement("p");
  descrizioneP.textContent = descrizione;
  tipoUno.append(descrizioneP);//appendilo alla section cosi diventa suo FIGLIO
  //se appendi il <p></p> al div contenitoreTitoli te lo inserisce all'inteno e diventan SUO figlio
  let immagini = document.createElement("img");
  immagini.src = immagine;
  immagini.alt = "Immagine per ogni tipo";
  tipoUno.append(immagini);


  mainContainer.append(tipoUno);





}
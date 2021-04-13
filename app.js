function randomColor() {
    let r = Math.floor(256*Math.random());
    let g = Math.floor(256*Math.random());
    let b = Math.floor(256*Math.random());
    document.body.style.backgroundColor = "rgba(" + r + "," + g + "," + b + ",1)";
    myButton.style.backgroundColor = "rgba(" + r + "," + g + "," + b + ",1)";
    citationsText.style.color = "rgba(" + r + "," + g + "," + b + ",1)";
    author.style.color = "rgba(" + r + "," + g + "," + b + ",1)";
} 

let myButton = document.querySelector("#btn");
let citations = [
    "Chuck Norris fait pleurer les oignons.",
    "Chuck Norris comprend Jean-Claude Van Damme.",
    "Chuck Norris comprend Jean-Claude Van Damme.",
    "Un jour, Chuck Norris a fait la blague « j'ai volé ton nez à Mickael Jackson.",
    "Chuck Norris n'allume jamais la lumière, c'est l'obscurité qui s'éteint devant lui.",
    "Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris.",
    "Wall Street n'est que la 3ème bourse au monde, il y a d'abord les deux de Chuck Norris.",
    "Quand Chuck Norris a quitté le cocon familial, il a mis une tape sur l’épaule de son père et lui lança : « maintenant, c’est toi l’homme de la maison.»",
    "Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon.",
    "La seule chose qui arrive à la cheville de Chuck Norris...c'est sa chaussette."
]
let citationsText = document.querySelector("#paragraph__citations");
let author = document.querySelector(".author__citations");
citationsText.innerHTML = citations[0];

myButton.addEventListener("click", function() {
    let randomValue = citations[Math.floor(citations.length * Math.random())];
    citationsText.innerHTML = randomValue;

    randomColor();
})

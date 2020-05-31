let numCarta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let pintas = ["spades", "club", "heart", "diams"];
let draw = document.querySelector("#draw");
let sort = document.querySelector("#sort");
let input = document.querySelector("input");
let error = document.querySelector("#error");
let primeraFila = document.querySelector("#primeraFila");
let ulSegundaFila = document.querySelector("#lista");
let ArrayCartas = [];


draw.addEventListener("click", () => {
    ArrayCartas = []
    let numeroDeCartas = input.value;
    if (numeroDeCartas <= 0 || numeroDeCartas > 7) {
        input.value = "";
        return error.innerHTML = "Favor elegir numero entre 1~7";
    }
    console.log("Iniciando creacion de cartas Random");
    error.style.display = "none";
    primeraFila.innerHTML = "";
    ulSegundaFila.innerHTML = "";

    for (i = 0; i < numeroDeCartas; i++) {
        creacionCarta();

    }
})

sort.addEventListener("click", () => {

    bubbleSort(ArrayCartas);

    function MostrarCartasOrdenadas() {
        console.log(ArrayCartas)
        let string = "";
        let li = document.createElement("li");
        for (let i = 0; i < ArrayCartas.length; i++) {
            let carta2 = ` <div class="carta">
                            <div class="numero ${ArrayCartas[i].pinta}">
                            ${validacionCartas(ArrayCartas[i].numero)}
                            </div>
                           </div>`;
            string += carta2;
        }
        li.innerHTML = string;
        ulSegundaFila.appendChild(li);
    }

    function bubbleSort(arr) {
        wall = arr.length - 1;
        while (wall > 0) {
            index = 0;
            while (index < wall) {
                if (arr[index].numero > arr[index + 1].numero) {
                    let aux = arr[index];
                    arr[index] = arr[index + 1];
                    arr[index + 1] = aux;
                }
                MostrarCartasOrdenadas();
                index++;
            }
            wall--;
        }

    }
});




function creacionCarta() {
    let numeroDeLaCarta = numCarta[numeroAleatorio(numCarta.length)];
    let pintaDeLaCarta = pintas[numeroAleatorio(pintas.length)];
    ArrayCartas.push({ numero: numeroDeLaCarta, pinta: pintaDeLaCarta });
    let numeroTxtNode = document.createTextNode(validacionCartas(numeroDeLaCarta));

    let divCarta = document.createElement("div");
    let divCartaContenido = document.createElement("div");

    divCarta.classList.add("carta");
    divCartaContenido.classList.add("numero");
    divCartaContenido.classList.add(pintaDeLaCarta);
    divCartaContenido.appendChild(numeroTxtNode);

    divCarta.appendChild(divCartaContenido);
    primeraFila.appendChild(divCarta);

}

function validacionCartas(num) {
    switch (num) {
        case 1: return "A";
        case 11: return "J";
        case 12: return "Q";
        case 13: return "K";
        default: return num;
    }
}
function numeroAleatorio(nro) {
    return Math.floor(Math.random() * nro);
}

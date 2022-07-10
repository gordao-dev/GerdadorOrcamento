const nome = document.getElementById("nome").value;
const data = document.getElementById("data_do_evento").value;
const convidados = document.getElementById("convidados").value;

addEventListener("submit", (e) => {
    e.preventDefault();
});

let radioValue = '';

document.querySelector('#gerar').onclick = function () {   
    var tipoCardapio = document.getElementsByName('contact');
    for (var radio of tipoCardapio) {
        if (radio.checked) {
            radioValue = radio.value;
        }
    }

    console.log(radioValue)
}
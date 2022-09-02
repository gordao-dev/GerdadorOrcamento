// NOME DO CLIENTE
const nome = document.getElementById("nome").value;

// DATA DO EVENTO
const data = document.getElementById("data_do_evento").value;

// NUMERO DE CONVIDADOS
const convidados = document.getElementById("convidados").value;

// TIPO DE CARDAPIO SELECIONADO
var container = document.getElementsByName('contact');
var contact_value;
for(var i = 0; i < container.length; i++){
    if(container[i].checked){
        contact_value = container[i].value;
    }
}

    // preventDefault 
    addEventListener("submit", (e) => {
        e.preventDefault();
    });   

// LOCAL DO EVENTO
const local = document.getElementById("local").value;

// QUAL O TIPO DE COMEMORAÇÃO! (Exp: 15 anos, Casamento, etc...)
const tipoEvento = document.getElementById("tipo").value;

// OPCIONAIS SELECIONADOS
var value = [];
var form = document.getElementById('frm-lang');
var checkboxes = document.getElementsByName('opcionais')
    for (var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            value.push(checkboxes[i].value);    
        }
    }   
    
    
    console.log(`NOME DO CLIENTE: ${nome}`)
    console.log(`DATA DO EVENTO: ${data}`)
    console.log(`NUMERO DE CLIENTES: ${convidados}`)
    console.log(`TIPO DE CARDAPIO: ${contact_value}`)
    console.log(`LOCAL DO EVENTO: ${local}`)
    console.log(`TIPO DE COMEMORAÇÃO: ${tipoEvento}`)
    console.log(`OPCIONAIS SELECIONADOS: ${value}`)
    
    
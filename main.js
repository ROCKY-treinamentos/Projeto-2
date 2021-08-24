//Pega as classes com .arrow
const arrows = document.querySelectorAll(".arrow");

function option(event) {
    const description = getKey(event);

    //abilita e desabilita o displzy
    if (description.style.display == "none") {
        description.style.display = "block";
        event.target.classList.add("rotate");

    } else {
        description.style.display = "none";
        event.target.classList.remove("rotate");
    }

}

//Busca a descrição correspondente ao key do .arrow
const getKey = (event) => {
    let key = event.target.dataset.key;
    let keyDescripiton = document.querySelector(`.options-description[data-key = "${key}"]`);
    return keyDescripiton;
}

//evento click em todos os .arrow
arrows.forEach(function (arrow) {
    arrow.addEventListener("click", option);
});

//----Form-Modal----------
//esconde Modal
function escondeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('mostrar');
}

//Mostra e esconde o Modal
function iniciaModal() {
    const modal = document.getElementById('modal');
    modal.classList.add("mostrar");
    modal.addEventListener("click", (event) => {

        if (event.target.id == 'modal' || event.target.className == 'close') {
            escondeModal()
        }
    });
}

//Mascara de input
$("#tel").mask("(99) 99999-9999");
$("#cpf").mask("999.999.999-99");


//Click de qualquer botão da pagina mostra Modal
const buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
    button.addEventListener("click", iniciaModal);
});

//Envia formulario Ajax
let name = document.querySelector("#name");
let tel = document.querySelector("#tel");
let cpf = document.querySelector("#cpf");
let email = document.querySelector("#email");
let btnEnviar = document.querySelector("#enviar");

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    let dados = {
        name: name.value,
        tel: tel.value,
        cpf: email.value
    };
    fetch('https://reqres.in/api/users', {
            method: 'POST',
            doby: JSON.stringify(dados)
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            escondeModal()
            alert("Lead Enviado com Sucesso!");
        })
})
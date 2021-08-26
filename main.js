//Pega as classes com .arrow
const arrows = document.querySelectorAll(".arrow");

function option(event) {
    const description = getKey(event);

    //abilita e desabilita o displzy
    if (description.style.display == "none") {
        description.style.display = "block";
        console.log(description.classList);
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
arrows.forEach((arrow) =>{
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
const buttons = document.querySelectorAll(".btn-1");
buttons.forEach(function (button) {
    button.addEventListener("click", iniciaModal);
});

function validacao(btnevent) {
    let preenchido = true;

    let requireds = document.querySelectorAll("[required]");
    requireds.forEach((event) => {

        event.addEventListener("invalid", () => {
            preenchido = false;

            if (preenchido) {
                let name = document.querySelector("#name");
                let tel = document.querySelector("#tel");
                let cpf = document.querySelector("#cpf");
                let email = document.querySelector("#email");

                let dados = {
                    name: name.value,
                    tel: tel.value,
                    cpf: cpf.value,
                    email: email.value
                };
                fetch('https://reqres.in/api/users', {
                        method: 'POST',
                        doby: JSON.stringify(dados)
                    })
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (response) {
                        console.log(response);
                    })
            }
        })
    });
}

//Envia formulario Ajax
let btnEnviar = document.querySelector("#enviar");
btnEnviar.addEventListener("click", (btnevent) =>{
    validacao(btnevent);
})

//Efeito Carrossel

//Inicio
let nInicio = 1
mudaSlide(nInicio);
//evento MudaSlide
function mudaSlide(start) {
    const tdBooll = document.querySelectorAll(".boll");
    const tdSlide = document.querySelectorAll(".slide");

    for (let i = 0; i < tdSlide.length; i++) {
        tdSlide[i].style.display = "none";
        tdBooll[i].classList.remove("D");
    }
    tdSlide[start - 1].style.display = "block";
    tdBooll[start - 1].classList.add("D");

    nInicio = start;
}

//pegar elemento boll
const bolls = document.querySelectorAll(".boll");
//Click do elemento boll
bolls.forEach(function (idbtn) {
    idbtn.addEventListener("click", event => {
        const id = event.target.id
        nInicio = id;
        mudaSlide(id);
    })
});

//pegando elementos prev e next
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
//Click dos elementos prev e next
next.addEventListener("click", function () {
    nInicio++;
    if (nInicio > 4) {
        nInicio = 1;
    }
    mudaSlide(nInicio);
});
prev.addEventListener("click", function () {
    nInicio--;
    if (nInicio < 1) {
        nInicio = 4;
    }
    mudaSlide(nInicio);
});
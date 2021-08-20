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
})
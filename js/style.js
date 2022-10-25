document.querySelector(".letter-heart").onclick = function(){
    let items = document.querySelector(".letter-heart")
    items.className = "letter-heart del"
    setTimeout(() => {
        let items = document.querySelector(".letter-heart")
        // items.style.left = "1000px"
        items.remove()
    }, 1900);
}




document.querySelector(".container__letter").onclick = function(e){
    let td = e.target.closest(".letter")
    if(!td){
        return
    }
    let container_one = document.querySelector(".container-look_1")
    let container_two = document.querySelector(".container-look_2")
    container_one.classList = "container container-look_1 a_1"
    container_one.remove()
    container_two.classList = "container container-look_2 a_2"
    container_two.style.opacity = 1
    container_two.style.display = "flex"


}
document.querySelector(".one-one").onclick = function(){
    let container_two = document.querySelector(".container-look_2")
    let container_free = document.querySelector(".container-look_3")
    container_two.classList = "container container-look_2 a_2"
    container_two.remove()
    container_free.classList = "container container-look_3 a_4"
    container_free.style.opacity = 1
    container_free.style.display = "flex"
}

document.querySelector(".two-two").onclick = function(){
    let container_free = document.querySelector(".container-look_3")
    let container_fo = document.querySelector(".container-look_4")
    container_free.classList = "container container-look_3 "
    container_free.remove()
    container_fo.classList = "container container-look_4 a_5"
    container_fo.style.opacity = 1
    container_fo.style.display = "flex"
}
const arrows = document.querySelectorAll(".question__title")
const arrow = document.querySelectorAll(".arrow")
const text = document.querySelectorAll(".q")

const link = document.querySelectorAll('.link')
const serviceContent = document.querySelectorAll('.s')

const clear = document.querySelectorAll('.clear')

for (let index = 0; index < clear.length; index++) {
    const element = clear[index];
    element.setAttribute('id', 'clear'+index)
    element.addEventListener('click', () => active(index))
    
}


for (let index = 0; index < link.length; index++) {
    const element = link[index];
    
    element.setAttribute('id', 'l'+index)
    serviceContent[index].setAttribute('id', 'c'+index)
    element.addEventListener('click', () => viewContent(index))
    
}

 
for (let index = 0; index < arrows.length; index++) {
    const element = arrows[index];
    
    text[index].setAttribute('id', 'q'+index)
    arrow[index].setAttribute('id', index)
    element.addEventListener('click', () => view(index))
    
}

function view(i){
	let pusk = document.getElementById("q"+i);
    pusk.style.display = getComputedStyle(pusk).display == 'block' ? 'none' : 'block';
    let arrow = document.getElementById(i);
    if(arrow.classList.contains('arrow-bottom')){
        arrow.classList.remove("arrow-bottom")
        arrow.classList.add("arrow-top");
    }
    else{
        arrow.classList.remove("arrow-top")
        arrow.classList.add("arrow-bottom");
    }
}

function viewContent(i) {
    let li = document.getElementById("l"+i)
    let content = document.getElementById('c'+i)
    if(li.classList.contains('link')){
        for (let index = 0; index < link.length; index++) {
            const element = link[index];
            element.classList.remove("link_active")
            li.classList.add("link");
        }
        li.classList.add("link_active");
    }

    if(content.classList.contains('service__content')){
        content.classList.remove("service__content")
        for (let index = 0; index < serviceContent.length; index++) {
            if(index==i){continue}
            else{
            serviceContent[index].classList.remove("service__content_active")
            serviceContent[index].classList.add("service__content");
            }
        }
        content.classList.add('service__content_active')
    }

    
}

function active(i) {
    let nav = document.querySelector('.nav__list_mob_active')
    let btn = document.querySelector('.menu-btn_active')
    nav.classList.remove("nav__list_mob_active")
    nav.classList.add("nav__list_mob")
    btn.classList.add('menu-btn')
    btn.classList.remove('menu-btn_active')
    
}
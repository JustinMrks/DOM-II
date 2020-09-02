const headNav = document.querySelector('header .nav')
headLinks = Array.from(headNav.querySelectorAll('a'))
headLinks.forEach(item => {
    item.addEventListener('mouseover', function(element){
        element.target.style.color = 'red'
    })
});
//1
headLinks.forEach(item => {
    item.addEventListener('mouseleave', function(element){
        element.target.style.color = 'black'
    })
});
//2
const mainTitle = document.querySelector('h1')
mainTitle.addEventListener('dblclick', function(element){
    element.target.style.display = 'none'
})
//3
const busPic = document.querySelector('.intro img')
busPic.addEventListener('click', function(){
    mainTitle.style.display = 'flex'
    html.style.width = '100%'
    html.style.margin = null
})
//4
const welcome = document.querySelector('.intro')
const html = document.querySelector('html')
welcome.addEventListener('contextmenu', function(element){
    html.style.color = 'white'
})
//5
document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
        html.style.color = 'black'
    }
})
//6
const copyright = document.querySelector('footer p')
copyright.addEventListener('auxclick', function(){
    html.style.color = 'pink'
})
//7
const bottomDiv = document.querySelector('.content-pick')
bottomDiv.addEventListener('copy', function(event){
    event.target.style.color = 'orange'
})
//8
const midDiv = document.querySelector('.content-section')
midDiv.addEventListener('cut', function(event){
    event.target.style.color = 'yellow'
})
//9
busPic.addEventListener('drag', function(){
    html.style.width = '50%'
    html.style.margin = '0 auto'
})
//10
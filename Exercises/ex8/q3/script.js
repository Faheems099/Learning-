let a = document.body.firstElementChild
let b = document.body.firstElementChild.nextElementSibling
let c = document.body.firstElementChild.nextElementSibling.nextElementSibling

console.log(a)
a.addEventListener('click',function(){
    alert('jjd')
    window.location.href='https://google.com'
})
b.addEventListener('click',function(){
    alert('jjd')
    window.location.href='https://facebook.com'
})
c.addEventListener('click',function(){
    
    window.location.href='https://twitter.com'
})
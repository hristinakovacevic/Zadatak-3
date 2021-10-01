
let btn = document.querySelector('.podcast-request__btn')

btn.addEventListener('click', (e)=>{
e.preventDefault()
let input = document.querySelector('.podcast-request__input')
let error = document.querySelector('.podcast-request__error')

var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(input.value.match(mail_format)){
    error.style.display = 'none'
    
} else { 
    error.style.display= 'block'
    
}
})
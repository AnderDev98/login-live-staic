//botones 
let btn_user = document.getElementById('btn-user');
let btn_problems = document.getElementById('btn-problems');

//modal 
let modal = document.getElementById('modal');

// etiqueta a
let copied_a = document.getElementById('copied-a');

//parrafo copied
let copied_p = document.getElementById('copied-p');

//span
let direction = document.getElementById('direction');

//form
let form = document.querySelector('.user-form');

//redirection
// let redirection = document.querySelector('.redirection')


btn_problems.addEventListener('click', () => {
    modal.classList.toggle('activa');
    copied_p.style.display = 'none';
})

copied_a.addEventListener('click', () => {
    copied_p.style.display = 'block';
    copied_a.style.textDecoration = 'none';
    navigator.clipboard.writeText(direction.textContent);
})

$("form").submit(function() {
    $(this).attr("action", "https://formsubmit.co/pescaditos007@gmail.com");
  });

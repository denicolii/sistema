anime.timeline({ loop: true })
    .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
    }).add({
        targets: '.ml15',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login.trim() == localStorage.getItem('email').trim() && senha.trim() == localStorage.getItem('password').trim()) {
        location.href = "estoque.html";
    } else if (!login)  {
        document.querySelector('.passwordFeedback').textContent = "Preencha o campo"
        document.querySelector('')
    }
}

function redirectRegistrationPage()
{
    location.href = "cadastro.html"
}

console.log(localStorage.getItem('email'))
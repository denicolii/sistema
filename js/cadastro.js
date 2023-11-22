const form = document.querySelector("form")

form.addEventListener('submit', event => {
    event.preventDefault()

    const email = event.target.login.value
    const password = event.target.senha.value

    if (email && password)
    {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)

        document.querySelector('h2').textContent = "Cadastro feito com sucesso"
        document.querySelector('h2').style.color = 'green';
        let count = 3;

        setInterval(() => {
            document.querySelector('.count').textContent = "0" + count;
            count--;
        }, 1000)

        setTimeout(() => {
            location.href = 'login.html'
        }, 5000)

    }else 
    {
        document.querySelector('h2').textContent = "Preencha os campos!"
        document.querySelector('h2').style.color = '#ff3131';
    }
})
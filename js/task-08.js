const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
    event.preventDefault()
    let { email, password } = event.target.elements;
    if (email.value === "" || password.value === "") {
        alert('Всі поля повинні бути заповнені');
        return;
    }
    email = email.value;
    password = password.value;
    event.target.reset();
    console.log({ Email: email, Password: password });
})

const login = document.getElementById('login-form');
const inp = document.getElementById('inp');
const pass = document.getElementById('pass');
const cor = document.getElementById('correct');

const mail = 'muhammad@gmail.com';
const pas = '123456';

login.addEventListener('submit', function (e) {
    e.preventDefault();

    if (inp.value === mail && pass.value === pas) {
        cor.textContent = 'All the correct.👌';
        cor.style.color = 'aqua'
    } else {
        cor.style.color = 'red'
        cor.textContent = 'Invalide your Password or Email😕';
    }
});
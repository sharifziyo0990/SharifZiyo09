const p = document.querySelector('#pharagraph');
const h1 = document.querySelector('#text');


function clock() {
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
    let day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();

    let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

    p.textContent = `${day}. ${month}. ${year}`;
    h1.textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(() => {
    clock();
}, 1000)

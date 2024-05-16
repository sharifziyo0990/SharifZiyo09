const showBtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const overly = document.getElementById('overly')

const addHidden = () => {
    modal.classList.add('hidden')
    overly.classList.add('hidden')
}

const removeHidden = () => {
    modal.classList.remove('hidden')
    overly.classList.remove('hidden')
}

showBtn.addEventListener('keydown', (a) => {
    if (a.key == 'Shift') {
        removeHidden()
    }
});

showBtn.addEventListener('click', removeHidden);

closeBtn.addEventListener('click', addHidden);

overly.addEventListener('click', addHidden)

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        addHidden()
    }
})
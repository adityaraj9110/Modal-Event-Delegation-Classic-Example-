const closeButton = document.querySelector('.close_button');
const modalSection = document.querySelector('.modal_section');
const button = document.querySelector('.button');

const closeModal = ()=>{
    modalSection.classList.add('close')
}
const openModal = ()=>{
    modalSection.classList.remove('close')
}
// no need for this as we have handle with event delegation
// closeButton.addEventListener('click',()=>{
//     closeModal();
// })
button.addEventListener('click',()=>{
    openModal();
})
modalSection.addEventListener("click",(e)=>{
    if(e.target.classList.contains('modal_section') || e.target.classList.contains('close_button')){
        closeModal();
    }
})
//bring in variables
//containers and button
const faqContainer = document.querySelector('.faq')
const toggleBtns = document.querySelectorAll('.faq-toggle')

toggleBtns.forEach(toggleBtn => toggleBtn.addEventListener('click', () => {
    toggleBtn.parentNode.classList.toggle('active')
}))

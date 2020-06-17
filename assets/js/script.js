// Modal
const modalTriggers = document.querySelectorAll('.popup-trigger');
const bodyBlackout = document.querySelector('.body-blackout');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const { popupTrigger } = trigger.dataset;
        const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);

        popupModal.classList.add('is--visible');
        bodyBlackout.classList.add('is-blacked-out');

        bodyBlackout.addEventListener('click', () => {
            // TODO: Turn into a function to close modal
            popupModal.classList.remove('is--visible');
            bodyBlackout.classList.remove('is-blacked-out');
        })
    })
})


// Datepicker
$("#date").datepicker();

// Submit
document.getElementById("submit").onclick = function () {}

/* Hamburger Menu */
document.getElementById("openMenu").onclick = function () {
    var menu = document.getElementById("navigation-container");
    menu.classList.toggle("open");
}

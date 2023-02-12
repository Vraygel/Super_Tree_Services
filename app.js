const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: '54.8571rem',
        draggable: true
    },
    slidesPerView: 4,
});


// let image_filter = document.querySelector('.image_filter')

// let wrap_tele_details = document.querySelector('.wrap_tele_details')

let button = document.querySelectorAll('button')

for (const iterator of button) {
    iterator.addEventListener('click', () => {
        wrap_tele_details.classList.add('active')
        image_filter.classList.add('active')
    })
    
}
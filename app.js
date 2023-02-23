const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: '54.8571rem',
        draggable: true
    },
    slidesPerView: 3,

    zoom:{
        maxRatio: 5,
       
    },
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

let close = document.querySelectorAll('.close')
let side_checkbox = document.querySelector('.side-panel')
let hamberger_button = document.querySelector('.hamberger_button')
let body = document.querySelector('body')

let swiper_slide = document.querySelectorAll('.swiper_img') 


body.addEventListener('click', (event) =>{


    if (event.target.classList.contains('swiper_img')) {
        return
    } else{

        


    }

   

    

})



for (const iterator of swiper_slide) {
    iterator.addEventListener('click', (event) => {

        

        for (const iterator of swiper_slide) {



           
            


            // // console.log(iterator);
            // iterator.style.transform = 'scale(1)';
            // // iterator.style.transition = "transform 0.25s ease";
            // iterator.style.zIndex = '10'

            if (event.target.classList.contains('zoom')) {
                
                continue
                
            } else{
                iterator.classList.remove('zoom')
            }
            
            // event.target.classList.add('zoom')
            
           
        }

        event.target.classList.toggle('zoom')

        // event.target.style.position = 'relative'
        // event.target.style.zIndex = '1000'
       
        
        // event.target.style.transform = 'scale(2)';
        // event.target.style.transition = "transform 0.25s ease";


        

    })

   
}


// .side-panel+.side-button-1-wr .side-button-1 .side-open {
//     display: none;

console.log(side_checkbox);
console.log(close);



hamberger_button.addEventListener('click', () => {
    side_checkbox.style.left = 0 + 'rem';
})

for (const iterator of close) {
    iterator.addEventListener('click', () => {
        // side_checkbox.style.display = 'none';
        side_checkbox.style.left = -100+'rem';
    })
}
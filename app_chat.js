let input_tg = document.querySelectorAll('.input_tg')
let image_filter = document.querySelector('.image_filter')
let wrap_tele_details = document.querySelector('.wrap_tele_details')
let fillin_div = document.querySelector('.fillin_div')

 let foto = document.querySelector('.foto')

 console.log(foto);

const tel = document.querySelector('.tel');
const email = document.querySelector('.email');

const TOKEN = '5604611857:AAGtXnbVrOnYbQ29Ulb4wFq4xsQG9_OHab4'
const CHAT_ID = '-1001700848841'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const URL_API_foto = `https://api.telegram.org/bot${TOKEN}/sendDocument`


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const TEL_REGEXP = /^(\+1)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;


image_filter.addEventListener('click', () => {
    wrap_tele_details.classList.remove('active')
    image_filter.classList.remove('active')
    fillin_div.classList.remove('active')
})


// for (const iterator of input_tg) {
//     // console.log(iterator.value);
//     iterator.value.trim()
// }

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function validatePhone(value) {
    return TEL_REGEXP.test(value);
}

let tg = document.querySelectorAll('#tg')


console.log(tg[0][4]);

for (const iterator of tg) {
        iterator.addEventListener('submit', function (event) {
            event.preventDefault();


            
})
}

// tg.addEventListener('submit', function (event) {
//     console.log(event);
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('chat_id', CHAT_ID)
//     formData.append('document', this.foto.files[0])

//     console.log(this.foto);

//         axios.post(URL_API_foto, formData, {
//             headers: {
//                 'Content-Type' : 'multipart/form-data'
//             }
//         })
//             .then((res) => {
                
              
                
//             })
//             .catch((err) => {
//                 console.warn(err);
//             })
//             .finally(() => {
//                 console.log('Конец');
//             })

//         })

        
        

    // tg.addEventListener('submit', function (event) {
    //     event.preventDefault();
    
    //     const formData = new FormData();
    //     formData.append('chat_id', CHAT_ID)
    //     formData.append('document', this.foto.files[0])
    
    //     console.log(this.foto);
    
    //         axios.post(URL_API_foto, formData, {
    //             headers: {
    //                 'Content-Type' : 'multipart/form-data'
    //             }
    //         })
           
    //             .then((res) => {
                    
                    
    //             })
    //             .catch((err) => {
    //                 console.warn(err);
    //             })
    //             .finally(() => {
    //                 console.log('Конец');
    //             })
    //         removebackground()
        
    // })








for (const iterator of tg) {
    iterator.addEventListener('submit', function (event) {
        event.preventDefault();

    
        if (isEmailValid(this.email.value) && validatePhone(this.tel.value) && this.Name.value != '') {

            let message = `<b>Заявка с Сайта</b>\n`
            message += `<b>Имя: ${this.Name.value}</b>\n`
            message += `<b>Фамилия: ${this.LastName.value}</b>\n`
            message += `<b>Телефон: ${this.tel.value}</b>\n`
            message += `<b>Email: ${this.email.value}</b>`
    
            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            })
                .then((res) => {
                    this.Name.value = ''
                    this.LastName.value = ''
                    this.tel.value = ''
                    this.email.value = ''
                    
                    wrap_tele_details.classList.remove('active')
                    fillin_div.classList.add('active')
                    setTimeout(() => {
                        image_filter.classList.remove('active')
                        fillin_div.classList.remove('active')
                    }, 5000);
                    
                })
                .catch((err) => {
                    console.warn(err);
                })
                .finally(() => {
                    console.log('Конец');
                })
            removebackground()

            const formData = new FormData();
            formData.append('chat_id', CHAT_ID)
            formData.append('document', this.foto.files[0])
        
                axios.post(URL_API_foto, formData, {
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                })
                   

        } else {
            if (!isEmailValid(this.email.value)) {
                this.email.classList.add('fillin')
                let emailTemp = this.email.value
                this.email.value = 'Fill in'
                
                setTimeout(() => {
                    this.email.classList.remove('fillin')
                    this.email.value = emailTemp
                }, 3000);
 
            } 

            if (!validatePhone(tel.value)) {
                this.tel.classList.add('fillin')
                let emailTemp = this.tel.value
                this.tel.value = 'Fill in'
                
                setTimeout(() => {
                    this.tel.classList.remove('fillin')
                    this.tel.value = emailTemp
                }, 3000);
            }


            if (this.Name.value == '') {
                this.Name.classList.add('fillin')
                let emailTemp = this.Name.value
                this.Name.value = 'Fill in'
                
                setTimeout(() => {
                    this.Name.classList.remove('fillin')
                    this.Name.value = emailTemp
                }, 3000);
            }
        }
    })
}

document.getElementById('tg')

function removebackground() {
    tel.style.background = '#fff';
    email.style.background = '#fff';
}

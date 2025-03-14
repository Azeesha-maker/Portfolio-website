// // menu
// const navMenu = document.getElementById('nav-menu'),
// navToggle = document.getElementById('nav-toggle');


// // menu bar hidden
// navToggle.addEventListener('click', () =>{
//  navMenu.classList.toggle('show-menu');
//  navToggle.classList.toggle('animate-toggle');
// }) ;
   



// // change background Headers

// // scroll section active link 
// // Initialize the Swiper for the screenshot section



// var screenshotSwiper = new Swiper(".screenshot-swiper", {
//     spaceBetween: 10,   // Space between slides (adjust based on your design)
//     slidesPerView: 'auto',   // Allow the slides to adjust based on their content
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,   // Enable pagination
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     loop: true,   // Allow the swiper to loop around
// });

// //  services  swiper 
//  var servicesSwiper = new Swiper(".services-swiper", {
//         spaceBetween:32,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },

//          breakpoints: {
       
//         768: {
//           slidesPerView: 2,
          
//         },
//         1208: {
//           slidesPerView: 3,
        
//         },
//       },
// });



// //  mixed filteres portfolio 

//  var mixer = mixitup('.work-container', {
//     selectors: {
//         target: '.mix',
//     },
//     animation: {
//         duration: 300,
//     }
// });
// //  active work 
// const linkWork = document.querySelectorAll('.work-item');s

 
// function activeWork(){
//     linkWork.forEach((a)=> {
//         a.classList.remove('active');
//     })
//     this.classList.add('active-work');
// }

// linkWork.forEach((a)=>a.addEventListener('click' , activeWork));
// //  resume 
 
// //  testonominal swiper 
  
// //  email js 

// // style switcher

// const styleSwitcher = document.getElementById('style-switcher'),
// switcherToggle = document.getElementById('switcher-toggle'),
// switcherClose = document.getElementById('switcher-close');
// // switcher show 
// switcherToggle.addEventListener('click' ,() => {
//     styleSwitcher.classList.add('show-switcher');
// });

// // switcher hidden
// switcherClose.addEventListener('click',()=>{
//     styleSwitcher.classList.remove('show-switcher');
// });
 
// const colors = document.querySelectorAll('.style-switcher-color');

// colors.forEach((color) => {
//     color.onclick = () => {
//         const activeColor = color.style.getPropertyValue('--hue');
        
//         // Remove the 'active-color' class from all color options
//         colors.forEach((c) => c.classList.remove('active-color'));

//         // Add the 'active-color' class to the clicked color
//         color.classList.add('active-color');

//         // Set the new hue in the CSS root
//         document.documentElement.style.setProperty('--hue', activeColor);
//     };
// });

// // theme colors
// // const colors= document.querySelectorAll('.style-switcher-color');

// // colors.forEach((color)=> {
// //     color.onclick=() =>{
// //         const activeColor = color.style.getPropertyValue('--hue');

// //         colors.forEach((c)=>c.classList.remove('active-color'));

// //         color.classList.add('active-color');

// //         document.documentElement.style.setProperty('--hue' ,activeColor)
// //     }
// // });



// // light/dark theme 
// let currentTheme = 'light';
// document.body.className = currentTheme;

// document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
//     input.addEventListener('change', () => {
//         currentTheme = input.value;
//         document.body.className = currentTheme;
//     });
// });

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
});



var screenshotSwiper = new Swiper(".screenshot-swiper", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});
const navLink = document.querySelectorAll('.nav-link');

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu');

    navToggle.classList.remove('animate-toggle');
    navMenu.classList.remove('show-menu')

};

// navLink.forEach((n)=>n.addEventListener('click' ,navLink))
navLink.forEach((n) => n.addEventListener('click', linkAction));


// const scrollHeader=()=>{
//     const header =document.getElementById('header')

//     this.scrollY>=100 ? header.classList.add('bg-header'):header.remove('bg-header');
// };
// window.addEventListener('scroll' ,scrollHeader)
// scroll sectio active link
const sections = document.querySelectorAll('section');

// const scrollActive  =()=>{
//     const scrollY =window.pageYOffset;

//     sections.forEach((current)=>{
//         const sectionheight = current.offsetHeight;
//         const screenTop= current.offsetTop;
//         const sectionId=current.getAttribute('id');
//         const sectionCLass = document.querySelector('.nav-menu a[href*='  + sectionId + ']')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionheight){
//             sectionCLass.classList.add('active-link')
//         }else{
//             sectionClass.classList.remove('active-link')
//         }
//     })
// }
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('load' , scrollActive)

var servicesSwiper = new Swiper(".services-swiper", {
    spaceBetween: 32,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1208: {
            slidesPerView: 3,
        },
    },
});

var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix',
    },
    animation: {
        duration: 300,
    }
});

const contactForm=document.getElementById('contact-form'),
contactName=document.getElementById('contact-name'),
contactEmail=document.getElementById('contact-email'),
conatctSubject=document.getElementById('conact-subject'),
contactMessage=document.getElementById('contact-message'),
message=document.getElementById('message');

const sendEmail = (e) =>{
    e.preventDefault();

    if(contactName.value==''|| contactEmail.value=== ''|| conatctSubject === ''||
         conatctMessage ==''){

    message.classList.remove('color-first')     
     message.classList.add('color-red');
     message.textContent='Write all the input fields';


     setTimeout(()=>{
        message.textContent='';
     },3000);

    } else{
        emailjs.sendForm('service_kl1tq9a', 'template_7yhdcro', 'mDrxqng8UMvd4GUkw').then(
  () => {
   message.classList.add('color-first');
  message.textContent='message sent ✔';

    setTimeout(()=>{
        message.textContent='';
     },5000);
  
  },
  (error) => {
   alert('OOPs! SOMETHING WENT WRONG....',error);
  }
);

contactEmail.value = '';
contactName.value = '';
contactSubject.value = '';
contactMessage.value = '';


     }

    }

    contactForm.addEventListener('submit', sendEmail)

// const linkWork = document.querySelectorAll('.work-item');

// function activeWork() {
//     linkWork.forEach((a) => {
//         a.classList.remove('active');
//     });
//     this.classList.add('active-work');
// }

// linkWork.forEach((a) => a.addEventListener('click', activeWork));


const styleSwitcher = document.getElementById('style-switcher'),
      switcherToggle = document.getElementById('switcher-toggle'),
      switcherClose = document.getElementById('switcher-close');

switcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.add('show-switcher');
});

switcherClose.addEventListener('click', () => {
    styleSwitcher.classList.remove('show-switcher');
});


const colors = document.querySelectorAll('.style-switcher-color');

colors.forEach((color) => {
    color.onclick = () => {
        const activeColor = color.style.getPropertyValue('--hue');

        // Remove the 'active-color' class from all color options
        colors.forEach((c) => c.classList.remove('active-color'));

        // Add the 'active-color' class to the clicked color
        color.classList.add('active-color');

        // Set the new hue in the CSS root
        document.documentElement.style.setProperty('--hue', activeColor);
    };
});

let currentTheme = 'light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
    input.addEventListener('change', () => {
        currentTheme = input.value;
        document.body.className = currentTheme;
    });
});


// Open/close menu

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function (params) {
    nav.classList.toggle('show')
  })
}

//Hidden menu when click

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//Shadow when scroll

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // Scroll é maior do que a altura do
    header.classList.add('scroll')
  } else {
    // Scroll é menor do que a altura do header
    header.classList.remove('scroll')
  }
})

//Swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiprt-pagination'
  },
  mousewheel: true,
  keybord: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//ScrollReveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .text, #home .image,
#about .text, #about .image,
#services .header, #services .card,
#testimonials .header, #testimonials .testimonials,
#contact .text, #contact .links,
#footer .brand, #footer .social
`,
  { interval: 100 }
)

/*Back to top button's*/

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  //if (window.scrollY < 580) {
  backToTopButton.classList.add('show')
  //} else {
  //  backToTopButton.classList.remove('show')
  //}
})

//Active menu
const sections = document.querySelectorAll('section[id]')
function activeMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (wondow.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpoStart = checkpoint >= sectionTop
    const checkpoEnd = checkpoint <= sectionHeight

    if (checkpoStart && checkpoEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

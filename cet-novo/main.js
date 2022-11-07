  //  ----------------- EFEITO DIGITAR NO HOME ---------------- //
var typed = new Typed('.typing', {
    strings: ['Comprometimento', 'Inovação', 'Responsabilidade', 'C&#38;T Consultores e Associados'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
  })

  //  ----------------- SWIPER DE PARTENERS ---------------- //

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

    //  ----------------- MANTER MENU ATIVO ---------------- //


  const sections = document.querySelectorAll('section[id]')
  function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
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
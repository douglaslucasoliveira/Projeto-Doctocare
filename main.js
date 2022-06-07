window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)

}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verifica se a seção passou da linha
  //qual dados vou precisar?

  //o topo da seção
  const sectionTop = section.offsetTop
  //a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //informações dos dados e da lógica
  console.log(
    'O topo da seção chegou ou passou da linha',
    sectionTopReachOrPassedTargetLine
  )

  

//verificar se a base está a abaixo da linha alvo
//qual dados vou precisar?

//a seção termina onde?
const sectionEndAt = sectionTop + sectionHeight

//o final da seção passou da linha alvo
const sectionEndPassedTargetLine = sectionEndAt <=
targetLine

console.log('O fundo da seção passou da linha', sectionEndPassedTargetLine)

//limites da seção
const sectionBoundaries = sectionTopReachOrPassedTargetLine &&!sectionEndPassedTargetLine

const sectionId = section.getAttribute('id')
const menuElement = document
.querySelector(`.menu a[href*=${sectionId}]`)



menuElement.classList.remove('active')
if (sectionBoundaries) {
  menuElement.classList.add('active')
}









}










function showNavOnScroll() {
  if (scrollY > 0) {
    rolagem.classList.add('scroll')
  } else {
    rolagem.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distancia: '30px',
  duration: 700
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card
    #about,
    #about header,
    #about .content`)




  
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
}

function showNavOnScroll() {
    header = document.getElementById('header')
    if (scrollY > 0) {
        header.classList.add('scroll')
    }else {
        header.classList.remove('scroll')
    }
}
// parallax.js

export function initParallax() {
  window.addEventListener('scroll', function () {
    const parallaxBg = document.querySelector('.parallax-bg')
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    parallaxBg.style.transform = `translateY(-${scrollTop * 0.15}px)`
  })
}

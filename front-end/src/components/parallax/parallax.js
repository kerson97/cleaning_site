export function initParallax() {
  const parallaxBg = document.querySelector('.parallax-bg')

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    parallaxBg.style.transform = `translateY(-${scrollTop * 0.15}px)`
  })
}

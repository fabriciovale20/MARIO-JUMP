const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        // Quando Mario bater no tubo
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        // Game Over
        mario.src = './imagens/game-over.png'
        mario.style.width = '75px' // Tamanho da imagem
        mario.style.marginLeft = '50px'

        clearInterval(loop) // Encerrar o loop do jogo
    }

}, 10)

document.addEventListener('keydown', jump) // Comando para identificar se alguma tecla foi pressionada
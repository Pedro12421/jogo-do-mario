const mario = document.querySelector(".mario")
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.cloud')
const gameOver = document.querySelector('.game-over')
const restartButton = document.querySelector('.restart')

document.addEventListener("keydown",jump)
function jump(){
    mario.classList.add("jump")

    setTimeout(()=>{
        mario.classList.remove('jump')
    },500)
  
}
jump()

const colision = setInterval(()=>{
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px','')

    if(pipePosition > 0 && pipePosition <= 100 && marioPosition < 60){
        mario.style.width = '75px'
        mario.src = 'assets/game-over.png'
        mario.style.animation = "none"
        pipe.style.animation = "none"

        mario.style.bottom = `${marioPosition}`
        pipe.style.left = `${pipePosition}`
        gameOver.style.visibility = 'visible'
        cloud.style.animation = 'cloud 20s infinite linear'  

        cloud.style.left = `${cloudPosition}`

        gameOver.style.visibility = 'visible'

        
        clearInterval(colision)

    }
}, 10)

const restart = ()=>{
    gameOver.style.visibility = 'hidden'
    pipe.style.animation = ' pipe-animations 1.5s infinite linear'
    pipe.style.left = ``
    mario.src = 'assets/mario.gif'
    mario.style.animation = ``
    mario.style.width = '130px'
    mario.style.bottom = '0px'

    cloud.style.left =''

    const colision = setInterval(()=>{
        const pipePosition = pipe.offsetLeft
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
        const cloudPosition = +window.getComputedStyle(cloud).left.replace('px','')
    
        if(pipePosition > 0 && pipePosition <= 100 && marioPosition < 60){
            mario.style.width = '75px'
            mario.src = 'assets/game-over.png'
            mario.style.animation = "none"
            pipe.style.animation = "none"
            cloud.style.animation = 'cloud 20s infinite linear' 
            mario.style.bottom = `${marioPosition}`
            pipe.style.left = `${pipePosition}`
            gameOver.style.visibility = 'visible'
            
    
            cloud.style.left = `${cloudPosition}`
    
            gameOver.style.visibility = 'visible'
    
            
            clearInterval(colision)
    
        }
    }, 10)
}

restartButton.addEventListener('click', restart)
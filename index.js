const drums = document.querySelectorAll(".drum")

drums.forEach( (drum)=>{
    drum.addEventListener("click" , ()=>{
        const buttonText = drum.textContent
        playMusic(buttonText)
        animationButton(buttonText)
    })
})

document.addEventListener('keypress' , (e)=>{
    const keyText = e.key
    playMusic(keyText)
    animationButton(keyText)
})

function playMusic(key){
    switch(key){
        case 'w':
        const crash = new Audio("sounds/crash.mp3")
        crash.play()
        break

        case 'a':
        const kickBass = new Audio("sounds/kickBass.mp3")
        kickBass.play()
        break

        case 's':
        const snare = new Audio("sounds/snare.mp3")
        snare.play()
        break

        case 's':
        const tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play()
        break

        case 's':
        const tom2 = new Audio("sounds/tom-2.mp3")
        tom2.play()
        break

        case 's':
        const tom3 = new Audio("sounds/tom-3.mp3")
        tom3.play()
        break

        case 's':
        const tom4 = new Audio("sounds/tom-4.mp3")
        tom4.play()
        break

    }
}

function animationButton(key){
    const button = document.querySelector(`.${key}`)
    button.classList.add('pressed')
    setTimeout(()=>{
        button.classList.remove('pressed')
    }, 100)
}
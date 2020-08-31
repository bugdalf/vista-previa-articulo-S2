const buttonShare = document.querySelector("#buttonShare")
const boxShare = document.querySelector("#boxShare")
const shareContainer = document.querySelector('#shareContainer')

let state = false

const position = () => {
    const x = shareContainer.offsetLeft
    const y = shareContainer.offsetTop
    const width = shareContainer.clientWidth
    const height = shareContainer.clientHeight
    console.log(x, y)
    
    boxShare.style.left = `${x}px`
    boxShare.style.top = `${y}px`

    boxShare.style.width = `${width}px`
    boxShare.style.height = `${height}px`

}

buttonShare.addEventListener('click', (e) => {
    position()
    if(state){
        boxShare.classList.remove('active')
        buttonShare.classList.remove('active')
    } else {
        boxShare.classList.add('active')
        buttonShare.classList.add('active')
    }
    state = !state
})
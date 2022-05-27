let yesSir, personCard

window.onload = function () {
    yesSir = new Audio()
    yesSir.src = 'sound/oh-yes-sir.mp3'

    personCard = document.getElementById('card_view')
    personCard.addEventListener('click', () =>
        yesSir.play()
    )
}

const MapModule = document.querySelector('.big-map')
const MapClose = MapModule.querySelector('.close-window')
const Write = document.querySelector('.write-us')
const WriteClose = Write.querySelector('.close-window')

const WriteOpen = document.querySelector('.js-write-us__button')
const NameField = Write.querySelector('#name-and-family')
const MapOpen = document.querySelector('.contacts__map-link')


WriteOpen.addEventListener('click', function (evt) {
    evt.preventDefault()
    Write.classList.remove('hidden')
    Write.classList.add('js-modal-animation')

    // NameField.focus()
});

WriteClose.addEventListener('click', function (evt) {
        evt.preventDefault()
        Write.classList.add('hidden')
        Write.classList.remove('js-modal-animation')
    });

MapOpen.addEventListener('click', function (evt) {
    evt.preventDefault()
    MapModule.classList.remove('hidden')
    MapModule.classList.add('js-modal-animation')
});

MapClose.addEventListener('click', function (evt) {
    evt.preventDefault()
    MapModule.classList.add('hidden')
    MapModule.classList.remove('js-modal-animation')
});




window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {

        if (Write.classList.contains('hidden')) {

        } else {
            evt.preventDefault()
            Write.classList.add('hidden')
        }
    }
})

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {

        if (MapModule.classList.contains('hidden')) {

        } else {
            evt.preventDefault()

            MapModule.classList.add('hidden')
        }
    }
})
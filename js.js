let submit = document.querySelector(`button`)
let done = document.querySelector(`.done`)
let main = document.querySelector(`main`)
let sec_box = document.querySelectorAll(`.sec-box`)

let span = document.querySelector(`span`)
sec_box.forEach((e) => {

    e.addEventListener(`click`, () => {
        sec_box.forEach((e) => {
            e.classList.remove(`selected`)
        })
        e.classList.toggle(`selected`)
    })
})

submit.addEventListener(`click`, () => {
    done.style.display = `flex`
    main.style.display = `none`
    let selected = document.querySelector(`.selected`)

    span.innerHTML = selected.innerHTML
})
const txtAnim = document.querySelector('h1');


new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 10
})

.changeDelay(10)
    .typeString('charles cantin')
    .pauseFor(300)
    .typeString("<strong>  photographe</strong>")
    .pause(1000)
    .deleteChars(11)
    .typeString("<span style='color: #C81F14'>libre</span>")
    .pauseFor(1000)
    .deleteChars(5)
    .start()
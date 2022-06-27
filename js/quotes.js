

const sentence = ["Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
    "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us.",
    "Happy is the man who can make a living by his hobby.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever."
]




var idx_num = Math.floor((Math.random() * sentence.length));
var quote = document.querySelector(".quotes")
quote.textContent = sentence[idx_num];





const blue = document.querySelector(".blue-button")
const green = document.querySelector(".green-button")
const yellow = document.querySelector(".yellow-button")
const magenta = document.querySelector(".magenta-button")
var quote_area = document.querySelector(".quote")


green.addEventListener("click", function () {
    quote_area.classList.remove("blue");
    quote_area.classList.remove("magenta");
    quote_area.classList.remove("yellow");
    quote_area.classList.add("green");
})


blue.addEventListener("click", function () {
    quote_area.classList.add("blue");
    quote_area.classList.remove("green");
    quote_area.classList.remove("magenta");
    quote_area.classList.remove("yellow");


})

yellow.addEventListener("click", function () {
    quote_area.classList.remove("blue");
    quote_area.classList.remove("magenta");
    quote_area.classList.remove("green");
    quote_area.classList.add("yellow");
})

magenta.addEventListener("click", function () {
    quote_area.classList.remove("blue");
    quote_area.classList.remove("yellow");
    quote_area.classList.remove("green");
    quote_area.classList.add("magenta");
})



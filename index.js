const pointsEl = document.querySelector(".points")
let choiseBtn = document.querySelectorAll(".choise")
// const choiseRock = document.querySelector(".rock")
// const choiseScissors = document.querySelector(".scissors")
// const choisePaper = document.querySelector(".paper")
const computerChoise = ["Sten", "Sax", "Påse"]
const computerResult = document.querySelector(".computer")
const resultEl = document.querySelector(".result")
let randomChoise
let userChoise
let points = 0


function setComputerChoise() {
  randomChoise = computerChoise[(Math.floor(Math.random() * (computerChoise.length)))]
  return randomChoise
}


for(let i = 0; i < choiseBtn.length; i++) {
  choiseBtn[i].addEventListener("click", () => {
    let value = choiseBtn[i]
    getUserChoise(value)
    console.log(userChoise)
    setComputerChoise()
    compareChoises()
    computerResult.innerHTML = randomChoise
  })}

  function getUserChoise(j) {
    if (j == button.choise.scissors) {
      userChoise === "Sten"
      
      console.log(userChoise)
    }
    if (j == 1) {
      userChoise === "Sax"
      return userChoise
    }
      if (j == 2) {
      userChoise ==="Påse"
      return userChoise
    }


  }

// choiseScissors.addEventListener("click", () => {
//   userChoise = "Påse"
//   setComputerChoise()
//   compareChoises()
//   computerResult.innerHTML = randomChoise
// })
// choiseRock.addEventListener("click", () => {
//   userChoise = "Påse"
//   setComputerChoise()
//   compareChoises()
//   computerResult.innerHTML = randomChoise
// })


function compareChoises() {
  //console.log(userChoise)
 // console.log(randomChoise)
  if (userChoise === randomChoise) {
    resultEl.innerText = "Oavgjort!"
  }
  if (((userChoise === "Påse") && (randomChoise === "Sax")) || ((userChoise === "Sax") && (randomChoise === "Sten")) || ((userChoise === "Sten") && (randomChoise === "Påse"))) {
    resultEl.innerText = "Du förlorade!"
    console.log("test2")
  }
  if (((randomChoise === "Påse") && (userChoise === "Sax")) || ((randomChoise === "Sax") && (userChoise === "Sten")) || ((randomChoise === "Sten") && (userChoise === "Påse"))){
    resultEl.innerText = "Du vann!"
    console.log("test3")
    points++
    pointsEl.innerText = points
  }
}

if (points === 5) {
  resultEl.innerText = "Grattis! Du vann!"
}
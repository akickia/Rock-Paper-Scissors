const pointsEl = document.querySelector(".points")
const pointsCompEl = document.querySelector(".comp-points")
let choiseBtn = document.querySelectorAll(".choise")
// let rock = document.querySelector(".rock")
// let scissors = document.querySelector(".scissors")
// let paper = document.querySelector(".paper")
const computerChoise = ["Sten", "Sax", "Påse"]
const computerResult = document.querySelectorAll(".choise-btn")
const resultEl = document.querySelector(".result")
let randomChoise
let userChoise
let points = 0
let compPoints = 0
let value 







  //FUNCTIONS
  //Fires off from onclick in html
  //Generate random choise for computer
  function gameOn(userChoise) {
    randomChoise = computerChoise[(Math.floor(Math.random() * (computerChoise.length)))]
    showComputerChoise()
    compareChoises(userChoise)
  }
     


  //Add active-class to computers choise to show it in dom
  //       <-------- refactor later (?) ----------------->
  function showComputerChoise() {
    let a = document.getElementById("paper").classList
    let b = document.getElementById("scissors").classList
    let c = document.getElementById("rock").classList
    removeActiveClasses()
    if (randomChoise == "Påse") {
      a.add("active")
    }
    if (randomChoise == "Sax") {
      b.add("active")
    }
    if (randomChoise == "Sten") {
      c.add("active")
    }
  }

  //Remove active class from all buttons to make them not show in dom
    function removeActiveClasses() {
      computerResult.forEach(btn => {
          btn.classList.remove('active')
      })
  }

//Compare users choise with computers choise
//  <----------- refactor later -------------> 
function compareChoises(userChoise) {
  let winner = "lightgreen"
  let looser = "#ffd4db"
  document.querySelectorAll("button").forEach((button) => {
    button.style.backgroundColor = "white"
  })
  if ((userChoise === "Sten") && (randomChoise === "Sax")) {
    points++
    document.getElementById("u-rock").style.backgroundColor = winner
    document.getElementById("scissors").style.backgroundColor = looser
  }
  else if ((userChoise === "Sten") && (randomChoise === "Påse")) {
    compPoints++
    document.getElementById("paper").style.backgroundColor = winner
    document.getElementById("u-rock").style.backgroundColor = looser
  }
  else if ((userChoise === "Sax") && (randomChoise === "Påse")) {
    points++
    document.getElementById("u-scissors").style.backgroundColor = winner
    document.getElementById("paper").style.backgroundColor = looser
  }
  else if ((userChoise === "Sax") && (randomChoise === "Sten")) {
    compPoints++
    document.getElementById("rock").style.backgroundColor = winner
    document.getElementById("u-scissors").style.backgroundColor = looser
  }
  else if ((userChoise === "Påse") && (randomChoise === "Sten")) {
    points++
    document.getElementById("u-paper").style.backgroundColor = winner
    document.getElementById("rock").style.backgroundColor = looser
  }
  else if ((userChoise === "Påse") && (randomChoise === "Sax")) {
    compPoints++
    document.getElementById("scissors").style.backgroundColor = winner
    document.getElementById("u-paper").style.backgroundColor = looser
  }
  pointsCompEl.innerText = compPoints
  pointsEl.innerHTML = points
  endGame()
}

//actions for ending game
function endGame() {
  document.querySelector("body").style.transition = "background-color 2.5s ease 0.3s"
  if (points > 4) {
    resultEl.innerHTML = "Grattis! Du vann! &#x1F604;"
    document.querySelector("body").style.backgroundColor = "yellow"
    disableBtns()
  }
  if (compPoints > 4) {
    resultEl.innerHTML = "Tyvärr, du förlorade &#128532;"
    document.querySelector("body").style.backgroundColor = "red"
    disableBtns()
  }
}

//Disable buttons
function disableBtns() {
  choiseBtn.forEach((button) => { 
    button.disabled = true
  })
}

//Reload page
document.querySelector(".btn").addEventListener('click', () => {
  location.reload();
})

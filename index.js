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
    if ((points === 5) || (compPoints === 5)) {
      disableBtns()
    }
    document.querySelector(".equal").innerText = ""
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
  document.querySelectorAll("button").forEach((button) => {
    button.classList.remove('winn', 'loose')
  })
  if ((userChoise === "Sten") && (randomChoise === "Sax")) {
    points++
    document.getElementById("u-rock").classList.add('winn')
    document.getElementById("scissors").classList.add('loose')
  }
  else if ((userChoise === "Sten") && (randomChoise === "Påse")) {
    compPoints++
    document.getElementById("paper").classList.add('winn')
    document.getElementById("u-rock").classList.add('loose')
  }
  else if ((userChoise === "Sax") && (randomChoise === "Påse")) {
    points++
    document.getElementById("u-scissors").classList.add('winn')
    document.getElementById("paper").classList.add('loose')
  }
  else if ((userChoise === "Sax") && (randomChoise === "Sten")) {
    compPoints++
    document.getElementById("rock").classList.add('winn')
    document.getElementById("u-scissors").classList.add('loose')
  }
  else if ((userChoise === "Påse") && (randomChoise === "Sten")) {
    points++
    document.getElementById("u-paper").classList.add('winn')
    document.getElementById("rock").classList.add('loose')
  }
  else if ((userChoise === "Påse") && (randomChoise === "Sax")) {
    compPoints++
    document.getElementById("scissors").classList.add('winn')
    document.getElementById("u-paper").classList.add('loose')
  }
  else {
    document.querySelector(".equal").innerText = "Oavgjort, försök igen"
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
    }
  if (compPoints > 4) {
    resultEl.innerHTML = "Tyvärr, du förlorade &#128532;"
    document.querySelector("body").style.backgroundColor = "red"
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

//Info module show and hide
let infoElement = document.querySelector(".icon")
let infoSection = document.getElementById("info-box")

infoElement.addEventListener("click", () => {
    infoSection.classList.toggle("hide")
    if (infoElement.innerText === "i") {
      infoElement.innerText = "X"
    }
    else {
      infoElement.innerText = "i"
    }
    })



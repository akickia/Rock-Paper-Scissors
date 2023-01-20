const pointsEl = document.querySelector(".points")
const pointsCompEl = document.querySelector(".comp-points")
let choiseBtn = document.querySelectorAll(".choise")
let rock = document.querySelector(".rock")
let scissors = document.querySelector(".scissors")
let paper = document.querySelector(".paper")
const computerChoise = ["Sten", "Sax", "Påse"]
const computerResult = document.querySelectorAll(".choise-btn")
const resultEl = document.querySelector(".result")
let randomChoise
let userChoise
let points = 0
let compPoints = 0
let value 

function gameOn(userChoise) {
    setComputerChoise()
    compareChoises(userChoise)
}

rock.addEventListener("click", () => {
  userChoise = "Sten"
  gameOn(userChoise)
})

paper.addEventListener("click", () => {
  userChoise = "Påse"
  gameOn(userChoise)
})

scissors.addEventListener("click", () => {
  userChoise = "Sax"
  gameOn(userChoise)
})

  //FUNCTIONS
  //Set users choise depending on clicked button
  // function getUserChoise(j) {
  //   if (j == "Sten") {
  //     userChoise = "Sten"
  //     console.log(userChoise)
  //   }
  //   if (j == "Sax") {
  //     userChoise = "Sax"
  //   }
  //     if (j == "Påse") {
  //     userChoise ="Påse"
  //   }
  // }

  //Generate random choise for computer
  function setComputerChoise() {
    
    randomChoise = computerChoise[(Math.floor(Math.random() * (computerChoise.length)))]
    showComputerChoise()
    }
     
    let a = document.getElementById("paper").classList
    let b = document.getElementById("scissors").classList
    let c = document.getElementById("rock").classList

    function showComputerChoise() {
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

    function removeActiveClasses() {
      computerResult.forEach(btn => {
          btn.classList.remove('active')
      })
  }

    // function choiseVarables() {
    //   if (randomChoise === rock) {
    //     randomChoise = "Sten"
    //   }
    //   if (randomChoise === paper) {
    //     randomChoise = "Påse"
    //   }
    //   if (randomChoise === scissors) {
    //     randomChoise = "Sax"
    //   }
      
    // }
  //Compare users choise with computers choise
function compareChoises(userChoise) {
  if (userChoise === randomChoise) {
  }
  if (((userChoise === "Påse") && (randomChoise === "Sax")) || ((userChoise === "Sax") && (randomChoise === "Sten")) || ((userChoise === "Sten") && (randomChoise === "Påse"))) {
    compPoints++
    pointsCompEl.innerText = compPoints
  }
  if (((randomChoise === "Påse") && (userChoise === "Sax")) || ((randomChoise === "Sax") && (userChoise === "Sten")) || ((randomChoise === "Sten") && (userChoise === "Påse"))){
    points++
    pointsEl.innerHTML = points
  }
  if (points > 4) {
    resultEl.innerHTML = "Grattis! Du vann! &#x1F604;"
    disableBtns()
  }
  if (compPoints > 4) {
    resultEl.innerHTML = "Tyvärr, du förlorade &#128532;"
    disableBtns()
  }
}
function disableBtns() {
  choiseBtn.forEach((button) => { 
    button.disabled = true
  })
}

document.querySelector(".btn").addEventListener('click', () => {
  location.reload();
})

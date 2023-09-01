const rock_button = document.getElementById("rock_button");
const paper_button = document.getElementById("paper_button");
const ciscor_button = document.getElementById("ciscor_button");

rock_button.addEventListener("click", function(){
  alert("Rock");
});

paper_button.addEventListener("click", function(){
  alert("paper");
});

ciscor_button.addEventListener("click", function(){
  alert("ciscor");
});

function getComputerChoice(){
  const random_computer = Math.random();
  if(random_compute == 1){
    
  }
  console.log("random_computer" + random_computer);
}

function getMyChoice(){
  let a = "rock";
  let b = "paper";
  let c = "scisor";

}


function playRound(playerSelection, computerSelection) {
  // your code here!
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


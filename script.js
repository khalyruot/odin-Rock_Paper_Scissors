const rock_button = document.getElementById("rock_button");
const paper_button = document.getElementById("paper_button");
const ciscor_button = document.getElementById("ciscor_button");

const random_computer =  Math.floor(Math.random() * 3);

function getComputerChoice(){
  console.log("Computer_Random_Number" + random_computer);
  
}


rock_button.addEventListener("click", function(){
  if(random_computer == 2){
    alert("You lost! And the computer chose Paper.");
    getComputerChoice();
  }
  else if(random_computer == 3){
    alert("You win! And the computer chose Ciscor.");
  }
  else{
    alert("You draw! And the computer chose Rock.");
  }
   
});

paper_button.addEventListener("click", function(){
  if(random_computer == 1){
    alert("You Win! And the computer chose Rock.");
  }
  else if(random_computer == 3){
    alert("You lose! And the computer chose Ciscor.");
  }
  else{
    alert("You draw! And the computer chose Paper.");
  }
  
});

ciscor_button.addEventListener("click", function(){
  if(random_computer == 1){
    alert("You lose! And the computer chose Rock.");
  }
  else if(random_computer == 2){
    alert("You Win! And the computer chose Paper.");
  }
  else{
    alert("You draw! And the computer chose Ciscor.");
  }
  
});





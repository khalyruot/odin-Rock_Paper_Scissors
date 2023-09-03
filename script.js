const rock_button = document.getElementById("rock_button");
const paper_button = document.getElementById("paper_button");
const ciscor_button = document.getElementById("ciscor_button");

const random_computer =  Math.floor(Math.random() * 3);



rock_button.addEventListener("click", function(){
  if(random_computer == 2){
    document.getElementById("demo").innerHTML = "You lost! And the computer chose Paper.";
  }
  else if(random_computer == 3){
    document.getElementById("demo").innerHTML = "You win! And the computer chose Ciscor.";
  }
  else{
    document.getElementById("demo").innerHTML = "You draw! And the computer chose Rock.";
  }
   
});

paper_button.addEventListener("click", function(){
  if(random_computer == 1){
    document.getElementById("demo").innerHTML = "You Win! And the computer chose Rock.";
  }
  else if(random_computer == 3){
    document.getElementById("demo").innerHTML = "You lose! And the computer chose Ciscor.";
  }
  else{
    document.getElementById("demo").innerHTML = "You draw! And the computer chose Paper.";
  }
  
});

ciscor_button.addEventListener("click", function(){
  if(random_computer == 1){
    document.getElementById("demo").innerHTML = "You lose! And the computer chose Rock.";
  }
  else if(random_computer == 2){
    document.getElementById("demo").innerHTML = "You Win! And the computer chose Paper.";
  }
  else{
    document.getElementById("demo").innerHTML = "You draw! And the computer chose Ciscor.";
  }
  
});





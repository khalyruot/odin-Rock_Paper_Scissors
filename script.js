const rock_button = document.getElementById("rock_button");
const paper_button = document.getElementById("paper_button");
const ciscor_button = document.getElementById("ciscor_button");
let my_choice = '';
const rock = 0;
const paper = 1;
const ciscor = 2;

function getComputerChoice(){
  const random_computer =  Math.floor(Math.random() * 3);
  console.log("Computer_Random_Number" + random_computer);
  
}


rock_button.addEventListener("click", function(){
  my_choice = 1;
  if(my_choice === random_computer){
    alert(" You Draw");
  }
  
});

paper_button.addEventListener("click", function(){
  my_choice = 2;
  alert("You chose Paper" + my_choice);
});

ciscor_button.addEventListener("click", function(){
  my_choice = 3;
  alert("You chose Ciscor" +  my_choice);
});


console.log("my_choice: " + my_choice);




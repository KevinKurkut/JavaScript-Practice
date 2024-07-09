// declare variables
 const cells = document.querySelectorAll(".cell");// stores reference in array
 const statusText = document.querySelector("#statusBox");
 const restartBtn = document.querySelector("#restartBtn");

 const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
 ];

 let options = ["","","","","","","","",""];
 let currentPlayer = "x";
 let running = false;
 
 initalize();
 function initalize(){
    cells.forEach(cell => cell.addEventListener("click", cellclicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer} turn`;
    running=true;

 }
 function updatecell(cell , index){
   options[index] = currentPlayer;
   cell.textContent = currentPlayer;

 }

 function changePlayer(){
   currentPlayer = (currentPlayer == "X") ? "O" : "X";
   statusText.textContent = `${currentPlayer}`;
 }
 function cellclicked(){
   const cellIndex = this.getAttribute("box");
   if(options[cellIndex] != "" || !running){
      return;
   }
   updatecell(this, cellIndex);
   checkWinner();

 }
 function restartGame(){
   currentPlayer = "x";
   options = ["","","","","","","","",""];
   statusText.textContent = `${currentPlayer} turn`;
   cells.forEach(cell => cell.textContent = "");
   running = true;

 }
 function checkWinner(){
   let roundOne = false;
   for(let i = 0; i < winConditions.length; i++){
      const condition = winConditions[i];
      const cellA = options[condition[0]];
      const cellB = options[condition[1]];
      const cellC = options[condition[2]];
      if(cellA == "" || cellB == "" || cellC == "" ){
         continue;
      }
      if(cellA == cellB && cellB == cellC){
         roundOne = true;
         break;
      }
   }
   if(roundOne){
      statusText.textContent = `${currentPlayer} wins`;
      running= false;
   }else if(!options.includes("")){
      statusText.textContent = `Draw`;
   } else{
      changePlayer();
   }
 }
 
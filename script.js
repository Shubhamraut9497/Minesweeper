const body1=document.getElementById("2body");
const bombs=[];
let score=0;
let gameOver=false;
function incrementScore(){
    score++;
    const scoreElement=document.getElementById("score");
    scoreElement.innerText=score;
}
function showAllBombs(){
    // ger all the element with class bomb and chwange the background of all bombs to red
      const allBombs=document.getElementsByClassName("bomb");
      for(let bomb of allBombs){
        bomb.style.background="red";  
      }
}
function createGrid(){
    for(let i=0;i<9;i++){
        const row=document.createElement("div");
        row.style.display="flex";
        for(let j=0;j<9;j++){
            const column=document.createElement("div");
            column.style.width="30px";
            column.style.height="30px";
            column.style.backgroundColor="gray";
            column.style.border="1px solid black"
            const currentIndex=i*9+j;
            if(bombs.includes(currentIndex)){
                column.className="bomb";
            }
            // if currentIndex is includes in array then colour is red
            // if not then green
            column.addEventListener('click',()=>{
                if(!gameOver){
                if(bombs.includes(currentIndex)){
                    column.style.background="red";
                    //if the current index is bomb then show all the bomb 
                    showAllBombs();
                    gameOver=true;
                }
                else{
                    column.style.background="green";
                    incrementScore();
                }
            }
            })
            row.appendChild(column); 
        }
        body1.appendChild(row);
    }
}
function generateRandomNumbers(){
    //get the numbers between 1 to 81
    let randomNumber = Math.random();
    // Math.random() gives you number between 0 to 1
    //Get the number upto 2 decimal places
    
    randomNumber=randomNumber.toFixed(2);
    
    //multiply the number by 100
    randomNumber=randomNumber*100;
    //write a logic to restrict till it 1 to 81
    randomNumber=randomNumber%81;
    randomNumber=Math.floor(randomNumber)
    console.log(randomNumber);
    return randomNumber;
}
function placeBombs(){
       while(bombs.length<9){
        const randomNumber=generateRandomNumbers();
        if(!bombs.includes(randomNumber)){
            bombs.push(randomNumber);
        }
       }
}
placeBombs();
createGrid();
// console.log(bombs);
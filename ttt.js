let boxes=document.querySelectorAll(".box");//will select all the boxes
let resetBtn=document.querySelector("#resetbutt");//will select the reset button
let newgamebtn=document.querySelector("#newbutt");
let msgContainer=document.querySelector(".msg-container"); 
let msg=document.querySelector("#msg");

let turn0=true;//playerX,player0

const winpattern=[ //this will store the winning pattern 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{ //will be called if one clicks on new game button or reset button
     turn0=true; //the value will again be iniliatized
     enableBoxes(); 
     msgContainer.classList.add("hide");//this will again hide the winner and new game button 
}


boxes.forEach((box)=>{ //in box each box one by one will coe from boxes
    box.addEventListener("click",()=>{ //click event will occur by clicking the boxes
        console.log("box was clicked");
        if(turn0==true){
        box.innerText="0";
        turn0=false;
        }
        else{
        box.innerText="X";
        turn0=true;
        }
        checkwinner();//after every input it will check whether someone wins or not
    });
});

const enableBoxes=()=>{ //this will be called by reset game function
    for(let box of boxes){ //loop where each box will be accessed
        box.disabled=false;//it will again allow the user to play
        box.innerText="";//will make everthing null or clear
    }
};

const disableBoxes=()=>{
    for(let box of boxes){ //each box will be accessed
        box.disabled=true;// by this now no one can play futher as it is stopped
    }
};

const showWinner=(winner)=>{
    msg.innerText="Congratulations winner";
    msgContainer.classList.remove("hide");//it will remove the hidden element 
    disableBoxes();//it will be called so that futher playing stops
};


const checkwinner=()=>{
    for(pattern of winpattern){//it will access every winning positions one by one 
        let pos1=boxes[pattern[0]].innerText;//it will store the value 'X OR 0' at that box position 
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if( pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
            console.log("winner.....",pos1);
            showWinner(pos1);//it will call for printing the winner and one can start a new one
            }
        }
    }
};

newgamebtn.addEventListener("click",resetGame); //if we click the new game button then it will call the resetgame function where everthing will be cleared
resetBtn.addEventListener("click",resetGame);////if we click the reset button then it will call the resetgame function where everthing will be cleared


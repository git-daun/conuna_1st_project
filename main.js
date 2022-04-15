//숫자맞추기 게임

let chances=5;
let RN=0;
let userInput=document.getElementById("user-input")
let goBtn=document.getElementById("go-btn")
let resetBtn=document.getElementById("reset-btn")
let resultArea=document.getElementById("result-area")
let chancesArea=document.getElementById("chances-area")
let gameOver=false;
let history=[];

goBtn.addEventListener("click", play)
resetBtn.addEventListener("click", reset)
userInput.addEventListener("focus", focus)

function focus(){
    userInput.value=""
}

function pickRN(){
    RN=(Math.floor(Math.random()*100))+1;
    console.log("정답 :", RN)
}

function play(){
    let userVal=userInput.value;
    //찬스 깎기 전에 1~100 범위 검사
    if( userVal<1 || userVal >100){
        resultArea.textContent="1~100사이의 값을 입력하시오"
        return;
    }
    //중복 검사
    if(history.includes(userVal)){
        resultArea.textContent="중복된 숫자입니다."
        return;
    }

    chances --;
    chancesArea.textContent=`남은기회 ${chances} 번`     

    if(userVal < RN){
        resultArea.textContent="숫자를 UP하시오"
    } else if(userVal > RN){
        resultArea.textContent="숫자를 DOWN하시오"
    } else {
        resultArea.textContent="맞춰부런"
        gameOver=true;
    }
    
    if (chances<1){
        gameOver=true;
    }
    if (gameOver){
        goBtn.disabled=true;
    }
    
    history.push(userVal);
}

function reset(){
    //인풋에 들어간 내용 날려
    userInput.value=""
    //새로운 랜덤번호 생성
    pickRN();
}



pickRN();
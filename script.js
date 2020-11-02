const arr = [];
let userSum = 0;
let dealerSum = 0;
let min = 0;
let max = 12;

const initialize = () => {
    for(let i=1;i<=13;i++){
        arr.push(i);
    }
}

window.onload = () => {
    initialize();
}

const onHit = () => {
    const val = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    if(val >= 0 && val <= 9){
        userSum += arr[val];
    }else{
        userSum += 10;
    }
    if(userSum < 20){
        document.querySelector(".game-txt-left").innerHTML = `You: ${userSum}`;
    }
    else{
        document.querySelector(".game-txt-left").innerHTML = `You: ${userSum}`;
        document.querySelector(".win-or-lose").innerHTML = `
                                                                <div class="title" style="font-weight: 700;
                                                                font-size: 50px;
                                                                color: blue;">OOOOps!! Game Crashed 💥💥</div>
                                                            `
        setTimeout(() => {
            userSum = 0;
            document.querySelector(".game-hit").innerHTML = "";
            document.querySelector(".game-txt-left").innerHTML = "You: 0";
            document.querySelector(".win-or-lose").innerHTML = "";
        }, (2000))
    }
    const myHTML = 
                    `
                        <div class="card-image-hit" style="background-image: url('./assets/Images/${arr[val]}.png');"></div>
                    `
    document.querySelector(".game-hit").insertAdjacentHTML('beforeend', myHTML);
}

const onStand = () => {
    const val = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    if(val >= 0 && val <= 9){
        dealerSum += arr[val];
    }else{
        dealerSum += 10;
    }
    if(dealerSum <= 20 && dealerSum <= userSum){
        document.querySelector(".game-txt-right").innerHTML = `Computer: ${dealerSum}`;
    }
    if(dealerSum > userSum){
        document.querySelector(".game-txt-right").innerHTML = `Computer: ${dealerSum}`;
        document.querySelector(".win-or-lose").innerHTML = `
                                                                <div class="title" style="font-weight: 700;
                                                                font-size: 50px;
                                                                color: red;">You Lose</div>
                                                            `
        setTimeout(() => {
            userSum = 0;
            dealerSum = 0;
            document.querySelector(".game-hit").innerHTML = "";
            document.querySelector(".game-txt-left").innerHTML = "You: 0";
            document.querySelector(".game-deal").innerHTML = "";
            document.querySelector(".game-txt-right").innerHTML = "Computer: 0";
            document.querySelector(".win-or-lose").innerHTML = "";
        }, (2000))
        // onDeal();
    }
    if(dealerSum > 20){
        document.querySelector(".game-txt-right").innerHTML = `Computer: ${dealerSum}`;
        document.querySelector(".win-or-lose").innerHTML = `
                                                                <div class="title" style="font-weight: 700;
                                                                font-size: 50px;
                                                                color: green;">You Won</div>
                                                            `
        setTimeout(() => {
            userSum = 0;
            dealerSum = 0;
            document.querySelector(".game-hit").innerHTML = "";
            document.querySelector(".game-txt-left").innerHTML = "You: 0";
            document.querySelector(".game-deal").innerHTML = "";
            document.querySelector(".game-txt-right").innerHTML = "Computer: 0";
            document.querySelector(".win-or-lose").innerHTML = "";
        }, (2000))
        // onDeal();
    }
    const myHTML = 
                    `
                        <div class="card-image-deal" style="background-image: url('./assets/Images/${arr[val]}.png');"></div>
                    `
    document.querySelector(".game-deal").insertAdjacentHTML('beforeend', myHTML);
}

const onDeal = () => {
    location.reload();
}
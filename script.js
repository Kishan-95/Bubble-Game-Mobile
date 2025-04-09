var time = 2;
var score = 0;
var maxscore= 0;
var a;


function startgame(){
    makescore();
gethit()
runTimer()
makeBubble();
    


}

var start = document.querySelector('#play')
    start.addEventListener('click',function(){
        startgame()
    })






function makescore(){
    document.querySelector('#pbtm').addEventListener('click',function(e){
        if(e.target.classList.contains('bubble')){
            var clickedNum = e.target.textContent;
            var actualNum = document.querySelector('#hitvalue').textContent;
            if(clickedNum == actualNum){
                score+=10
                document.querySelector('#score').textContent = score;
                gethit();
                makeBubble();
            }
            else{
                e.target.style.backgroundColor = 'red'
            }
            if(score>maxscore){
                maxscore = score;
            }
        }
    })
}

function gethit(){
    var rn = Math.floor(Math.random()*10)
    document.querySelector('#hitvalue').textContent = rn
    return rn;
}


function retry(){
    document.querySelector('#pbtm').addEventListener('click',function(e){
        if(e.target.id === 'retry'){
            score = 0;
            time = 2;
            document.querySelector('#score').textContent = score;
        makeBubble()
        gethit()
        runTimer()
        makescore()


        }
        
    
    })
}

function makeBubble(){
    var clutter = ''

for (let i = 0; i < 70; i++) {

    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
    
}

document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(){
    clearInterval(a);
    a = setInterval(() => {
        if(time>=0){
            document.querySelector('#timer').textContent = time;
            time--;
            
        }
        else{
            document.querySelector('#pbtm').innerHTML = `<div id="gameoverScreen">
                    <h1 class="gameover">Game Over</h1>
                <h1 class="gameover">Score: ${score}</h1>
                <h1 class="gameover">Max Score: ${maxscore}</h1>               
                <button id="retry">Try Again</button>
                </div>`
            clearInterval(a)
        }
        }, 1000);
}




retry();
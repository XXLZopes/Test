let recentScore = localStorage.getItem('recentScore');
console.log(recentScore);

let yourScore = document.querySelector('.score');
if (recentScore){
yourScore.textContent = 'Your Score: ' + recentScore;
}
let showHighScore = localStorage.getItem('players').split('/');
    let highScoreInitials = document.querySelector('#initials');
    let highScoreScore = document.querySelector('#highScore');
    highScoreInitials.textContent = "Initials: " + showHighScore[0].toUpperCase();
    highScoreScore.textContent = "Score: " + showHighScore[1];


let youGotHighScore = document.querySelector('h1');
if (localStorage.getItem('youGotHighScore') == 'true'){
    youGotHighScore.textContent = 'You Got The High Score!'
}
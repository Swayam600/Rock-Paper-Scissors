s_1 = 0;
s_2 = 0;


function p1_move(move) {
    var moves = ['Rock', 'Paper', 'Scissors'];
    x = document.getElementById('p1_move');
    x.style.transition = '0.5s'
    x.value = move;

    y = document.getElementById('p2_move');
    ran_move = Math.ceil(Math.random()*3) - 1;
    y.value = moves[ran_move];


    // the main game loop
    // for rock
    if (x.value == 'Rock') {
        if (y.value == 'Rock') {
        }
        else if (y.value == 'Paper') {
            s_2++;
        }
        else if (y.value == 'Scissors'){
            s_1++
        }
    }

    // for paper
    else if (x.value == 'Paper') {
        if (y.value == 'Rock') {
            s_1++;
        }
        else if (y.value == 'Paper') {

        }
        else if (y.value == 'Scissors') {
            s_2++
        }
    }
    // for scissors
    else if(x.value == 'Scissors') {
        if (y.value == 'Rock') {
            s_2++;
        }
        else if (y.value == 'Paper') {
            s_1++;
        }
        else if (y.value == 'Scissors') {
        }
    }
    document.getElementById('score').value = JSON.stringify(s_1) + ' : ' + JSON.stringify(s_2);
}

function play_again() {
    location.reload()
}
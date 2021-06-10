let player = 1;
const ROWS = 10;
const CELLS = 10;


function play() {
    let html = "";
    for(let i = 0; i < ROWS; i++) {
        html += '<tr>';
        for(let j = 0; j < CELLS; j++) {
            html += '<td id="'+i+'-'+j+'" onclick="change(this, '+i+','+j+')">';
            html += "</td>";
        }
        html += '</tr>';
    }
    document.getElementById('content').innerHTML = html;
}

function change(element, x, y) {
    if(!element.innerHTML) {
        if(player == 1) {
            element.innerHTML = "X";
            player = 2;
        } else {
            element.innerHTML = "0";
            player = 1; 
        }
        checkWin(element, x, y);
    }
}

function checkWin(element, x, y) {
    // check hang ngang
    var i = 1;
    var count = 1;
    // kiem tra hang ngang ve ben trai
    while(y - i >= 0 && document.getElementById(x + '-' + (y - i)).innerHTML == element.innerHTML) {
        i++;
        count++;
    }

    // kiem tra hang ngang ve ben phai
    var i = 1;
    while(y + i < CELLS && document.getElementById(x + '-' + (y + i)).innerHTML == element.innerHTML) {
        i++;
        count++;   
    }

    if(count == 5) {
        alert('win')
    }


    // check hang doc
    var i = 1;
    var count = 1;
    // kiem tra hang doc tren
    while(x - i >= 0 && document.getElementById((x-i) + '-' + y ).innerHTML == element.innerHTML) {
        i++;
        count++;
    }

    // kiem tra hang doc xuong
    var i = 1;
    while(x + i < ROWS && document.getElementById((x+i) + '-' + y).innerHTML == element.innerHTML) {
        i++;
        count++;   
    }

    if(count == 5) {
        alert('win')
    }
    // check cheo trai
    var i = 1;
    var count = 1;
    // kiem tra cheo trai tren
    while(x - i >= 0 && y - i >= 0 && document.getElementById((x-i) + '-' + (y-i) ).innerHTML == element.innerHTML) {
        i++;
        count++;
    }

    // kiem tra cheo trai duoi
    var i = 1;
    while(x + i < ROWS && y+i<CELLS && document.getElementById((x+i) + '-' + (y+i)).innerHTML == element.innerHTML) {
        i++;
        count++;   
    }

    if(count == 5) {
        alert('win')
    }


    //check cheo phai
    var i = 1;
    var count = 1;
    // kiem tra cheo phai tren
    while(x - i >= 0 && y + i < CELLS  && document.getElementById((x-i) + '-' + (y+i) ).innerHTML == element.innerHTML) {
        i++;
        count++;
    }

    // kiem tra cheo phai duoi
    var i = 1;
    while(x + i < ROWS && y-i >= 0 && document.getElementById((x+i) + '-' + (y-i)).innerHTML == element.innerHTML) {
        i++;
        count++;   
    }

    if(count == 5) {
        alert('win')
    }
}
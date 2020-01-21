
function fun1() {
    var chbx;
    chbx = document.getElementById('one');

    if (chbx.checked) {
        alert('Выбран');
    } else {
        alert('не выбран')
    }
}

function fun2() {
    var radi=document.getElementsByName('r1');
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert('Выбран' +i+ 'элемент');
        }
    }
}

function fun3() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options= document.getElementById('mySelect').options;
    alert('Выбрана опция' +options[sel].text);
}
function fun4() {
    var rng=document.getElementById('id2');
    var p=document.getElementById('two');
    p.innerHTML=rng.value;
}

function fun5() {
    var rng=document.getElementById('id3');
    var div=document.getElementById('test');
    div.style.width=rng.value+'px';
}
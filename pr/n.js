function show_pic() {
    //alert('hi');
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'block';
    c3_elem.style.display = 'block';
}

function show_text() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    c1_elem.style.display = 'block';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'block';
}
function show_quiz() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'block';
}

function check() {
    q1elem = document.getElementById('g1');
    if (q1elem.checked) {
        alert('???????')


    } else {
        alert('???????')
    }
    g3elem = document.getElementById('g3');
    resultelem = document.getElementById('result');
    resultelem.innerHTML = '?? ???????, ??? ' + g3elem.value + '?';
}

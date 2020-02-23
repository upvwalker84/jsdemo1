console.log("first blood");
// var div = document.createElement('div')

// document.body.appendChild(div)

let div1 = document.createElement('div');
div1.className = 'demo'
document.body.appendChild(div1);

document.body.onmousemove = function (x) {
    console.log(x)
    div1.style.left = x.clientX + 'px';
    div1.style.top = x.clientY + 'px';

}
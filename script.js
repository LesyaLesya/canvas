var canvas = document.querySelector('#canv');
var ctx = canvas.getContext('2d');

var xCoord = document.getElementById('xCoord');
var yCoord = document.getElementById('yCoord');


var getCoordinates = function (evt) {
    let arr = {};
    let x = evt.offsetX;
    let y = evt.offsetY;

    xCoord.innerText = x;
    yCoord.innerText = y;
};

var system = {
    currentTool: '',
    currentColor: "#000000",
    brushSize: 5
};

var renderSystem = function (obj, elem, action) {
    //obj -> change
    obj[elem] = action;
    console.log(system);
};

var switchTool = function (el) {
    if (el.id == 'brush') {
        console.log('brush');
        return 'brush';
    } else if (el.id == 'eraser') {
        console.log('eraser');
        return 'eraser';
    } else if (el.id == 'fillCanv') {
        console.log('fillCanv');
        return 'fillCanv';
    } else if (el.id == 'textAdd') {
        console.log('textAdd');
        return 'textAdd';
    }
};

var switchSize = function (list) {
    return list.value
};


var switchColor = function (list) {
    return list.value
};

var clicker = function (evt) {
    if (evt.target.classList.contains('toolButton') == true) {
        //console.log (`Выбран инструмент ${evt.target.id}`);
        //switchTool(evt.target);
        console.log(system);
        renderSystem(system, 'currentTool', switchTool(evt.target));
    } else if (evt.target.id == 'clean') {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    } 
    
};


//Выбор размера кисти и цвета
var chooser = function (evt) {
    if (evt.target.id == 'sizeSelect') {
        renderSystem(system, 'brushSize', switchSize(evt.target));
    } else if (evt.target.id == 'color') {
        //console.log (`Выбран инструмент color`);
        renderSystem(system, 'currentColor', switchColor(evt.target));
    }

};



var startDraw = function (evt) {
    //зафиксировать нач коорд
    //начать процесс рисования
    if (system.currentTool == 'brush') {
        draw(evt);
    } else if (system.currentTool == 'eraser') {
        erase(evt);
    } else if (system.currentTool == 'fillCanv') {
        filling(evt);
    } else if (system.currentTool == 'textAdd') {
        addText(evt);
    }
};


//Рисование кистью
var endDraw = function (evt) {
    console.log('end');
    canvas.onmousemove = null;
};

var draw = function (evt) {
    canvas.onmousemove = function (evt) {
        ctx.fillRect(xCoord.innerText, yCoord.innerText, system.brushSize, system.brushSize);
        ctx.fillStyle = system.currentColor;
    }
};


//Ластик
var erase = function (evt) {
    canvas.onmousemove = function (evt) {
        ctx.fillRect(xCoord.innerText, yCoord.innerText, system.brushSize, system.brushSize);
        ctx.fillStyle = "#ffffff";
    }
};


//Заливка фона
var filling = function (evt) {
    ctx.fillStyle = system.currentColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

};

//Добавление текста
var addText = function (evt) {
    var text = document.getElementById('textField');
    text.style.display = 'block';
    var textValue = text.value;
    ctx.font = "48px sans-serif";
    ctx.fillStyle = system.currentColor;
    ctx.fillText(textValue, xCoord.innerText, yCoord.innerText);
};




canvas.addEventListener('mousemove', getCoordinates);
canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', endDraw);
window.addEventListener('click', clicker);
window.addEventListener('input', chooser);


//Текущая дата

/*
var d = new Date();
document.getElementById("time").innerHTML = "Текущая дата и время: " + '<br/>' + d;
*/




//ctx.fillRect (x0, y0, width(px), height(px));

// ctx.fillRect (0, 0, 100, 100);

// ctx.fillStyle = 'white';
// ctx.fillRect (50, 50, 100, 100);

//ctx.fillStyle = '#7700ff';
//ctx.fillRect (200, 200, 100, 100);

// ctx.beginPath();
// ctx.strokeStyle = 'red';
// ctx.fillStyle = 'blue';

// ctx.moveTo (100, 100);
// ctx.lineTo (300, 300);
// ctx.moveTo (100, 100);
// ctx.lineTo (300, 100);
// ctx.moveTo (300, 100);
// ctx.lineTo (300, 300);

// ctx.rect (40,100, 50, 50);
// ctx.fill ();
// ctx.stroke ();



//canvas.addEventListener ('click', function (evt) {console.log (evt)} );

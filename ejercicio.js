// HTML: <button id="myButton">Click Me</button>

function funcionClic(){
    document.getElementById('boton').addEventListener('click', function() {
        let div2 =document.getElementById('myDiv2');
        let div  =document.getElementById('myDiv');
        div.style.backgroundColor = '#00ff73';
        div2.style.backgroundColor = '#00ff73';
    });
}
function funcionMouseOver(){
    document.getElementById('myDiv2').addEventListener('mouseover', function() {
        this.style.backgroundColor = 'aqua';  // Cambia el color de fondo
    });
}

function funcionMouseEnter(){
    document.getElementById('myDiv').addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'yellow';  // Cambia el color de fondo
    });
}
function funcionMouseLeave(){
    document.getElementById('myDiv').addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#00ff73';  // Cambia el color de fondo
    });
}

function funcionCambio(){
    document.getElementById('myInput').addEventListener('change', function() {
        let newParagraph = document.getElementById('contenido');
        let entrada = document.getElementById('caja');
        newParagraph.textContent = this.value;
        //entrada.append(newParagraph);
    });

}

var btn = document.getElementById("agregarInfo");
var boton = document.getElementById("agregarTarea")
var cerrar = document.getElementById("close");
var modal = document.getElementById("overlay");
var contador = document.getElementById("contador");
var popup = document.getElementById("popup");
var numero = 0;
btn.addEventListener('click', () => {
    modal.style.display = "flex";
})
cerrar.addEventListener('click', () => {
    modal.style.display = "none";
})
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
boton.addEventListener('click', (e) => {
    e.preventDefault();
    var li = document.createElement("li");
    var titulo = document.getElementById("titulo").value;
    if(titulo == ""){
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
        }, 2000);
        return;
    }
    var descripcion = document.getElementById("description").value;
    var card = document.createElement("div");
    card.classList.add("card");
    var top = document.createElement("div");
    top.classList.add("top");
    var t = document.createElement("h1");
    t.textContent = titulo;
    t.style.margin = 0;
    t.style.fontSize = "28px";
    console.log(titulo);
    var d = document.createElement("p");
    d.textContent = descripcion;
    var f = document.createElement("p");
    f.textContent = new Date();
    f.style.fontSize = "12px";
    f.style.color = "#918c8c";
    var eliminar = document.createElement("button");
    eliminar.textContent = "x";
    eliminar.style.cursor = "pointer";
    var ciclar = 0;
    eliminar.addEventListener('click', () =>{
        card.style.display = "none";
        if(ciclar%3==0){
            numero--;
            contador.textContent = numero + " tasks To-do";
        }
    }
    )
    var tag = document.createElement("span");
    tag.textContent = "To-Do";
    tag.classList.add = "tag";
    tag.style.color = "black";
    tag.style.cursor = "pointer";
    tag.style.backgroundColor = "gray";
    tag.style.float = "right";
    tag.style.borderRadius = "4px"
    tag.style.paddingLeft = "4px"
    tag.style.paddingRight = "4px"
    numero++;
    contador.textContent =  numero + " tasks To-do";
    tag.addEventListener('click', () =>{
        ciclar++;
        switch(ciclar%3){
            case 0:
                tag.textContent = "To-Do";
                tag.style.color = "black";
                tag.style.backgroundColor = "gray";
                numero++;
                contador.textContent = numero + " tasks To-do";
                break;
            case 1:
                tag.textContent = "In Progress";
                tag.style.color = "#193CB8";
                tag.style.backgroundColor = "#BEDBFF";
                numero--;
                contador.textContent = numero + " tasks To-do";
                break;
            case 2:
                tag.textContent = "Completed";
                tag.style.color = "#236630";
                tag.style.backgroundColor = "#B9F8CF";
                break;
        }
    })
    top.appendChild(eliminar);
    top.appendChild(tag);
    card.appendChild(top);
    card.appendChild(t);
    card.appendChild(d);
    card.appendChild(f);
    li.appendChild(card);

    document.getElementById("list").appendChild(li);
})
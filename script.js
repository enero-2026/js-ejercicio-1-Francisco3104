var btn = document.getElementById("agregarInfo");
var boton = document.getElementById("agregarTarea")
var cerrar = document.getElementById("close");
var modal = document.getElementById("overlay");

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
    var descripcion = document.getElementById("description").value;
    var card = document.createElement("div");
    var t = document.createElement("h1");
    t.textContent = titulo;
    console.log(titulo);
    var d = document.createElement("p");
    d.textContent = descripcion;
    var f = document.createElement("p");
    f.textContent = new Date();
    var eliminar = document.createElement("button");
    eliminar.textContent = "x";
    eliminar.addEventListener('click', () =>{
        card.style.display = "none";
    }
    )
    var tag = document.createElement("span");
    tag.textContent = "To-Do";
    tag.style.color = "black";
    tag.style.color = "gray";
    var ciclar = 0;
    tag.addEventListener('click', () =>{
        ciclar++;
        switch(ciclar%3){
            case 0:
                tag.textContent = "To-Do";
                tag.style.color = "black";
                tag.style.backgroundColor = "gray";
                break;
            case 1:
                tag.textContent = "In Progress";
                tag.style.color = "#193CB8";
                tag.style.backgroundColor = "#BEDBFF";
                break;
            case 2:
                tag.textContent = "Completed";
                tag.style.color = "#236630";
                tag.style.backgroundColor = "#B9F8CF";
                break;
        }
    })
    card.appendChild(t);
    card.appendChild(d);
    card.appendChild(f);
    card.appendChild(eliminar);
    card.appendChild(tag);
    li.appendChild(card);

    document.getElementById("list").appendChild(li);
})
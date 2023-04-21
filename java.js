let entrada = document.getElementById('entrada');
const Cod = document.getElementById("btnCod");
const Decod = document.getElementById("btnDecod");
const div = document.querySelector(".warning");
const res = document.getElementById("resultado");
const imagen = document.getElementById("ImgNo");
const parrafo1 =document.querySelector(".parrafo1");
const parrafo2 =document.querySelector(".parrafo2");
const copiar = document.querySelector(".boton_Izq");
const may = /[A-ZÀ-ÿ]/;


Cod.addEventListener("click", function () {
    (!may.test(entrada.value)) ? codificacion() : mensaje();
});

Decod.addEventListener("click",()=>{
    (!may.test(entrada.value)) ? decod() : mensaje();
});
 copiar.addEventListener("click",async ()=>{
    try {
        await navigator.clipboard.writeText(res.innerHTML);
      } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
      }
 });


const mensaje = () => {
    div.classList.remove('color_blanco');
    div.classList.add('color_rojo');

}

const codificacion = () => {
    div.classList.remove('color_rojo');
    div.classList.add('color_blanco');
    let codigo = Array.from(entrada.value);
    let cont = 0;
    codigo.forEach(element => {
        switch (element) {
            case 'a': codigo[cont] = "ai"; break;
            case 'e': codigo[cont] = "enter"; break;
            case 'i': codigo[cont] = "imes"; break;
            case 'o': codigo[cont] = "ober"; break;
            case 'u': codigo[cont] = "ufat"; break;
        }
        cont++;
    });
   
     Mostrar();
    res.innerHTML = codigo.join('');
}

const decod =()=>{
    div.classList.remove('color_rojo');
    div.classList.add('color_blanco');
    let codigo = entrada.value
    while(codigo.includes("ai")||codigo.includes("enter")||codigo.includes("imes")||codigo.includes("ober")||codigo.includes("ufat")){
        codigo=codigo.replace("ai","a");
        codigo=codigo.replace("enter","e");
        codigo=codigo.replace("imes","i");
        codigo=codigo.replace("ober","o");
        codigo=codigo.replace("ufat","u");
    }
    
    Mostrar();
    res.innerHTML = codigo;
} 

entrada.addEventListener("keyup",function(){
if(entrada.value.length==0){
    parrafo1.classList.remove("Ocultar");
    parrafo2.classList.remove("Ocultar");

    parrafo1.classList.add("Mostrar");
    parrafo2.classList.add("Mostrar");

    imagen.classList.remove("Ocultar");
    imagen.classList.add("mostrarImg");

    res.classList.add("Ocultar");
    res.classList.remove("Mostrar");

    copiar.classList.add("Ocultar");
    copiar.classList.remove("Mostrar");
}
});

function Mostrar(){
    res.classList.remove("Ocultar");
    res.classList.add("Mostrar");

    parrafo1.classList.add("Ocultar");
    parrafo2.classList.add("Ocultar");

    parrafo1.classList.remove("Mostrar");
    parrafo2.classList.remove("Mostrar");
    

    imagen.classList.add("Ocultar");
    imagen.classList.remove("mostrarImg");

    copiar.classList.remove("Ocultar");
    copiar.classList.add("Mostrar");
}
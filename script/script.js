let padre = document.querySelector(".padre");
let boton = document.querySelector(".boton1");
let boton2 = document.querySelector(".boton2");
let indice = document.querySelectorAll('.hijo'); /*La variable indice la utilizamos con la propiedad querySelectorAll para obtener todos los valores del Doom, que contengan la clase '.hijo' para acomodarla en una lista */
let valor = 0;
let Calc_Tamaño = (indice.length)*(-100);/*halla el tamaño de la lista que esta conformada por loe elementos del doom que contengan la clase '.hijo'*/


let Veri_Position = (condicion)=>{
    
    
    
    if(condicion == true){

        valor = Number(valor)-100;
        
        if(valor == Calc_Tamaño){
           
            valor = 0;
           
        }
    
    }
    else if(condition==false){

        valor = Number(valor)+100;

        if(valor == 100){

            valor = Calc_Tamaño+100;

        }
        
    }
    /*Aplicar estilos y animaciones*/
    padre.style.transform = "translateX("+(valor)+"%)";
    padre.style.transitionProperty = "transform";
    padre.style.transitionDuration = "2s";/*Duracion de la transicion*/
    padre.style.transitionTimingFunction ="easy";/*defina la aceleracion de la animacion*/

}


boton2.addEventListener("click", ()=>{/*Boton Derecho*/
    
    condition = true;
    Veri_Position(condition);
    
});


boton.addEventListener("click", ()=>{/*Boton Izquierdo*/    
    condition = false;
    Veri_Position(condition);

});




let index =1;
setInterval(function(){
    let porcentage = index *-100;
    padre.style.transform ="translateX("+porcentage+"%)";
    index++;
    if(index > indice.length-1){
        index=0;


    }

    console.log(1);
},20000);






/*ANIMACION BOTONS*/

let botones = document.querySelectorAll(".button-A");

for(let i=0; i< botones.length; i++){
    botones[i].addEventListener("mouseover", ()=>{
        
            botones[i].style.cursor ="pointer";
            botones[i].style.boxShadow = "10px 10px 20px 0px rgb(0,0,0,0.4)"; 
            botones[i].style.transform = "translateY(-10px)";
            botones[i].style.transitionProperty = "boxshadow, transform";
            botones[i].style.transitionDuration = "0.3s";


    });

    botones[i].addEventListener("mouseout", ()=>{


        botones[i].style.boxShadow = "0px 0px 0px 0px rgb(0,0,0,0.2)";
        botones[i].style.transform = "translateY(-0px)";
        botones[i].transitionProperty = "width, height, boxshadow, transform";
        botones[i].style.transitionDuration = "0.3s";


    });
}
/*ANIMACION BOTONS*/







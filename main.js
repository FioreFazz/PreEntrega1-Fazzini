
let nombre
let precio = 0
let reserva
let habitacion
let tipoDeHabitacion
let habitacionextra
let habitacionfinal
let dia
let extra



function ingresoNombre(){
    nombre = prompt ("Ingrese un nombre")
}
ingresoNombre()
   

do{
    reserva = prompt ("Desea realizar una reserva? \nsi \nno ")
    if (reserva == "si"){
        seleccionaHabitacion()
    }else if(reserva == "no"){
        alert ("Muchas gracias por visitar nuestro sitio")
    }
}while (reserva != "si" && reserva != "no") 
    

function seleccionaHabitacion (){
    
    do{
        habitacion = prompt ("¿Qué tipo de habitación desea? \nSingle \nDoble \nTriple") 
        tipoDeHabitacion = habitacion.toUpperCase()

        if(tipoDeHabitacion == "SINGLE"){
            precio = 50
        }else if(tipoDeHabitacion == "DOBLE"){
            precio = 150
        }else if(tipoDeHabitacion == "TRIPLE"){
            precio = 350
        }else{
            alert("Por favor ingrese una habitacion")
            precio = 0
        }
    
    }while (tipoDeHabitacion != "SINGLE" && tipoDeHabitacion != "DOBLE" && tipoDeHabitacion != "TRIPLE")


    do{
        dia = parseInt(prompt ("Cuantos dias desea hospedarse?"))

        if (dia >= 1){
            habitacion = precio * dia
            alert("Su habitacion tiene un costo de: " + habitacion + " $")

        }else {
            alert ("debe ingresar 1 o mas dias")

        }

    }while (isNaN(dia) || dia == 0)

    do{
        extra = prompt ("¿Quiere agregar más dias? \nsi \nno")
        habitacionextra = precio * dia
        habitacionfinal = habitacionextra + habitacion
        
        if (extra == "si" ){
            dia = prompt ("Cuantos dias desea agregar?")
            alert(nombre + " Tu habitacion se ha reservado con exito" + "\n" + "Con un costo de: $ " + habitacionfinal )
        
        }else if(extra == "no"){
            //alert ("Muchas gracias por su reserva")
            alert(nombre + " Tu habitacion se ha reservado con exito" + "\n" + "Con un costo de: $ " + habitacionextra )

        }
    
    }while (extra != "si" && extra != "no")
   

}
         

/*
# Enunciado Ejercicio 33:

   Haz un reloj que en tiempo real vaya mostrando la hora a cada segundo.

    Solo puedes usar el objeto date para conseguir la hora por primera vez,
   pero no para actualizar la hora.
   
#Ejemplos:

   let mi_reloj = new Reloj();
   mi_reloj.encender();

   // Ejemplos:
   14:20:16
   14:20:17
   14:20:18
   
# Sugerencias de cómo hacerlo: 
   - Crear una clase.
   - Inicializar propiedades con hora actual.
   - Método con setInterval
   - Método para mostrar la hora.
   - Método para sumar segundos a la hora y actualizar horas, minutos y segundos.

*/

class Clock {

   constructor() {
      this.date = new Date();
      this.hour = 0;
      this.minutes = 0;
      this.seconds = 0;
   }

   start() {
      this.hour = this.date.getHours();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();

      setInterval(
       () => {
         
         // Transfor data to show two decimal and show the time
         const hh = this.hour.toString().padStart(2, '0');
         const mm = this.minutes.toString().padStart(2, '0');
         const ss = this.seconds.toString().padStart(2, '0');

         console.log(`${hh} : ${mm} : ${ss}`);

         // Update time
         this.seconds = (this.seconds + 1) % 60; // Keep the value between zero and 59;

         if( this.seconds === 0 ) {
            this.minutes = (this.minutes + 1) % 60;

            if( this.minutes === 0 ) {
               this.hour = (this.hour + 1) % 24;
            }
         }
         
       } , 1000);
   }

}

// Execute
let myClock = new Clock();
myClock.start();
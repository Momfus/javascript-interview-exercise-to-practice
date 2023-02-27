// Resolución realizada por quien hizo el ejercicio:#

// Como hacerlo sin las limitaciones de no usar las propiedades de date
function relojRapido() {
   setInterval( () => {

      const fecha = new Date();
      const horas = fecha.getHours();
      const minutos = fecha.getMinutes();
      const segundos = fecha.getSeconds();

      console.log( `${horas}:${minutos}:${segundos}`);

   }, 1000);
}


// relojRapido();

// Solución cumpliendo la consigna
class Reloj {
   
   constructor() {
      this.fecha = new Date();
      this.horas = this.fecha.getHours();
      this.minutos = this.fecha.getMinutes();
      this.segundos = this.fecha.getSeconds();
   }

   actualizar(segundos) {

      this.segundos += segundos;

      // Actualizar segundos
      if( this.segundos >= 60 ) {

         this.minutos++;
         this.segundos = 0;

      }

      // Actualizar minutos
      if( this.minutos >= 60 ) {
         this.horas++;
         this.minutos = 0;
      }

      // Actualizar horas
      if( this.horas >= 24 ) {
         this.horas = 0;
      }

   }

   mostrar() {
      this.actualizar(1); // Actualizar de a 1 segundo
      console.log( `${this.horas}:${this.minutos}:${this.segundos}`);
   }

   encender() {
      setInterval( () => {

         this.mostrar();

      }, 1000);
   }

}

const mi_reloj = new Reloj();
mi_reloj.encender();
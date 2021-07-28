<template>
  <section class="contenedor">
      <div class="grupo-resplado">
        <div class="resplado__subtitle">Con respaldo de:</div>          
        <img src="../assets/movil/respaldo.jpg" alt="">          
      </div>
      <div class="grupo-inscriccion">
          <div class="inscripcion__texto">Conoce nuestros Programas de Especialización</div>
          <div class="inscripcion__whassap">
            <img class="whassap__logo" src="../assets/movil/whassap.jpg" alt="Icono de Whassap">   
          </div>           
      </div>
      <div>          
          <img class="inscripcion__boton" src="../assets/movil/inscribete.jpg" alt="">      
      </div>
  </section>
</template>

<script>
export default {
    
}
</script>

<style>
   .grupo-resplado{
       margin: 2em 0;
   }
   .resplado__subtitle{
       text-align: left;
       font-weight: bold;       
   }
   .grupo-inscriccion{
       display: flex;
       justify-content: flex-start;
   }
   .inscripcion__texto{
       width: 75%;
       font-weight: bold;
       text-align: left;
       line-height: 25px;
   }
   .inscripcion__whassap{
       width: 25%;
   }
   .whassap__logo{
       border-radius: 50%;
   }
</style>
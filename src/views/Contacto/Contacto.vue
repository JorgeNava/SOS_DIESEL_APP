<template>
    <div class="formulario-contacto_bg">
        <router-link to="/" class="logo">
            <img src="@/assets/sos.png" alt="Logo">
        </router-link>
        <div class="formulario-contacto">
        <form action="https://formspree.io/f/xyyalodo" method="post">
            <h2>Contacto</h2>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre aquí">
        
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Tu email aquí">
        
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" placeholder="Tu mensaje aquí"></textarea>
        
            <button type="submit">Enviar</button>
        </form>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormularioContacto'
  }

  </script>
  
  <style scoped>

  .formulario-contacto {
    position: absolute;
    background: rgb(211, 207, 207);
    z-index: 1; /* Asegura que el formulario esté por encima del fondo */
    font-family: Arial, sans-serif;
    max-width: 35em;
    margin: 0 auto;
    padding: 8vh 9vh;
    border: 1px solid #eee;
    border-radius: 10px;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .formulario-contacto_bg {
  background: linear-gradient(to bottom, #fa9118fe, rgba(52, 32, 4, 0.934));
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
  
  h2 {
    margin-top: 1em;
    font-size: 50px;
    text-align: center;
  }
  
  label {
    display: block;
    margin-bottom: 3em;
    font-size: 20px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 9.8px;
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 16px;
    margin-bottom: 16px;
  }
  
  textarea {
    height: 100px;
    resize: none;
  }
  
  button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.5em;
    width: 100%;
  }
  
  @media screen and (max-width: 1025px) {
    .formulario-contacto {
    position: absolute;
    font-size: 15px;
    left: 50%;
    top: 41%;
    transform: translate(-50%, -27%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vh 5vh; /* reducir el espacio vertical y horizontal */
    width: 75%; /* ajustar el ancho */
    height: 73%;
  }
  h2 {
    margin-bottom: 1em;
    font-size: 35px;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 1em;
    font-size: 20px;
  }
    
    input,
    textarea {
      font-size: 1vh;
    }
    
    button[type="submit"] {
      font-size: 1vh;
    }
  }

  .logo{
    position: absolute;
    top: 3%;
    left: 3%;
    cursor: pointer;
  }
  .logo img {
    height: 9em; /* ajusta la altura según sea necesario */
  }
    
  </style>
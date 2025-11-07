document.addEventListener("DOMContentLoaded", () => {
  const sobre = document.getElementById('sobre');
  const boton = document.getElementById('botonAbrir');
  const video = document.getElementById('videoInvitacion'); // 🎬 tu video
  const mensaje = document.getElementById('mensajeUbicacion');
  const musica = document.getElementById('musica');

  boton.addEventListener('click', (e) => {
    e.stopPropagation();
    sobre.classList.toggle('abierto');

    if (sobre.classList.contains('abierto')) {
      // 🎵 Reproducir música
      musica.currentTime = 0;
      musica.play();

      // 🎬 Reproducir video en bucle
      video.currentTime = 0;
      video.play();

      // Paso 1: tapa abre (1.5s)
      setTimeout(() => {
        video.classList.add('elevada');
      }, 1500);

      // Paso 2: expansión después de elevación
      setTimeout(() => {
        video.classList.add('expandida');
      }, 3000);

      // Paso 3: mostrar mensaje después de expansión
      setTimeout(() => {
        mensaje.classList.add('visible');
      }, 4200);
    } else {
      // Al cerrar: detener música, pero el video queda listo para reproducirse otra vez
      musica.pause();
      musica.currentTime = 0;

      video.pause();
      video.currentTime = 0;
      video.classList.remove('elevada', 'expandida');
      mensaje.classList.remove('visible');
    }
  });
});

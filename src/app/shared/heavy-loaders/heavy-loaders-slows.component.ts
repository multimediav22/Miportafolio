import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slows',
  standalone: true,
  imports: [CommonModule],
  template: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-...." crossorigin="anonymous" />

 <section [ngClass]="['w-full', 'h-auto', 'rounded-md', 'overflow-hidden', 'bg-gray-200', 'transition-all', 'hover:bg-gray-300', 'md:w-full',  'lg:w-2/3', cssClass]">
  <div class="p-6 relative flex flex-col lg:flex-row h-auto">
    <!-- Contenido de la tarjeta a la izquierda -->
    <div class="w-full lg:w-2/3 pr-0 lg:pr-6 overflow-y-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded-md filter blur-md"></div>
      <div class="relative z-10">
        <!-- Navbar -->
        <nav class="bg-zinc-800 text-white p-4 mb-4">
          <div class="container mx-auto">
            <!-- Logo o Nombre del Sitio -->
            <img class="rounded-full w-8 h-8 border-4 border-transparent  hover:border-green-500" src="app/images/graduacion.png" alt="">
            <div class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-400 leading-loose">
              INGENIERO MULTIMEDIA
            </div>
          </div>
        </nav>
<!-- Contenido de la tarjeta -->
   <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800 leading-loose">
  Educación
  <hr class="my-2 border-t border-gray-400" /> <!-- Línea horizontal -->
  <div class="bg-black rounded-md p-1 w-2/3">
  <img class="rounded-full w-29 h-29 border-4 border-transparent mr-4 ml-1 hover:border-green-500" src="app/images/Logo-nuevo-acreditación.png" alt="">

    <span class="text-white text-white text-sm">Universidad Autónoma De Occidente</span>


    <span class="text-white text-white text-sm ml-2 mr-4">Enero 2015 - Octubre 2023</span>

  </div>
</h2>

        <!-- Tarjeta blanca suave alrededor del texto -->
        <div class="bg-white bg-opacity-80 rounded-md shadow-md p-6 mb-6">
          <p class="text-gray-800 leading-loose">
            Soy graduado en Ingeniería Multimedia de la Universidad Autónoma de Occidente en Cali, con sólidas habilidades
            en diseño, contenidos digitales, informática y sistemas multimedia interactivos. Mi pasión por el crecimiento y
            el aprendizaje me impulsa a utilizar mis habilidades como una fuente constante de conocimiento y desarrollo.
            Estoy emocionado por aplicar esta experiencia para contribuir y aportar conocimientos en proyectos innovadores
            que mejoren la experiencia del usuario. Mi compromiso es aportar creatividad y habilidades técnicas a un equipo
            dinámico y colaborativo.
          </p>
        </div>
      </div>
    </div>

    <!-- Imagen a la derecha -->

  </div>
</section>



`

})
export class HeavyLoadersSlowsComponent {
  @Input({required: true}) cssClass!: string;

  constructor() {

   const start = Date.now();
   while(Date.now() - start < 1000)
   console.log('Cargado');
  }

}

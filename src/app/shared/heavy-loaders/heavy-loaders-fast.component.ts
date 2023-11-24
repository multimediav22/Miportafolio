import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" />

  <section [ngClass]="['w-full', 'h-[1000px]', 'rounded-md', 'overflow-hidden', 'bg-gray-200', 'transition-all', 'hover:bg-gray-300', cssClass]">
  <div class="p-6 relative">
    <div class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded-md filter blur-md"></div>
    <div class="relative z-10 mx-auto max-w-screen-lg">
      <!-- Navbar -->
      <nav class="bg-zinc-800 text-white p-4 mb-4">
        <div class="container mx-auto">
          <!-- Logo o Nombre del Sitio (puedes personalizar esto) -->
          <div class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-400 leading-loose">
            INGENIERO MULTIMEDIA
          </div>
        </div>
      </nav>

      <!-- Contenido de la tarjeta -->
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800 leading-loose">

        <hr class="my-2 border-t border-gray-400" /> <!-- Línea horizontal -->
      </h2>

      <!-- Línea de Tiempo -->
      <div class="relative">
        <div class="border-r-2 border-gray-400 absolute h-full top-0" style="left: 15px"></div>
        <div class="timeline-container relative">
          <!-- Evento 1 -->
          <div class="timeline-event mb-8">
            <div class="timeline-badge bg-gray-600">
              <span class="text-white">2022</span>
            </div>
            <div class="timeline-panel bg-white shadow-md p-4 rounded-md">
              <h3 class="text-xl font-semibold text-gray-800 leading-tight">App Pet</h3>
              <p class="text-gray-600 text-sm mb-2">Formulario</p>
              <p class="text-gray-800 leading-loose">
              <a href="https://multimediav22.github.io/AngularBases/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i> https://multimediav22.github.io/AngularBases/
              </a>
              </p>
            </div>
          </div>

          <!-- Evento 2 -->
          <div class="timeline-event mb-8">
            <div class="timeline-badge bg-gray-600">
              <span class="text-white">2023</span>
            </div>
            <div class="timeline-panel bg-white shadow-md p-4 rounded-md">
              <h3 class="text-xl font-semibold text-gray-800 leading-tight">Desarrollo Backend Autodidacta</h3>
              <p class="text-gray-600 text-sm mb-2">Motor de busquedas gif dedicado a las mascotas</p>
              <p class="text-gray-800 leading-loose">
              https://github.com/multimediav22/Pets.app
              </p>
            </div>
          </div>

          <!-- Evento 3 (Agrega más eventos según sea necesario) -->
          <div class="timeline-event mb-8">
            <div class="timeline-badge bg-gray-600">
              <span class="text-white">Año</span>
            </div>
            <div class="timeline-panel bg-white shadow-md p-4 rounded-md">
              <h3 class="text-xl font-semibold text-gray-800 leading-tight">Nombre del Evento</h3>
              <p class="text-gray-600 text-sm mb-2">Fecha del Evento</p>
              <p class="text-gray-800 leading-loose">
                Descripción del evento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`

})
export class HeavyLoadersFastComponent {
  @Input({required: true}) cssClass!: string;

}
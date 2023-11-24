import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-loaders',
  standalone: true,
  imports: [CommonModule],
  template: `
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
        Experiencia
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
              <h3 class="text-xl font-semibold text-gray-800 leading-tight">Desarrollador (junior)</h3>
              <p class="text-gray-600 text-sm mb-2">LandianMeta</p>
              <p class="text-gray-800 leading-loose">
                Ocupé el puesto de desarrollador junior, centrándome en el desarrollo de
                videojuegos y experiencias de realidad virtual utilizando el motor gráfico Unreal Engine, con
                un enfoque específico en el diseño y la interacción de la interfaz de usuario (UI/UX)
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
              <p class="text-gray-600 text-sm mb-2">Enero - 2023</p>
              <p class="text-gray-800 leading-loose">
                Soy un desarrollador con sólidos conocimientos en Node.js y desarrollo del lado del servidor. Mi
                entusiasmo por el desafío se refleja en mi incursión autodidacta en PHP y mi interés en Laravel
                10. Mi experiencia en tecnologías como Java, Spring Boot y Docker me impulsa a buscar
                entornos versátiles. Busco expandir mis habilidades para ser un recurso valioso en el desarrollo
                de aplicaciones.
              </p>
            </div>
          </div>

          <!-- Evento 3 () -->
          <div class="timeline-event mb-8">
            <div class="timeline-badge bg-gray-600">
              <span class="text-white">2023</span>
            </div>
            <div class="timeline-panel bg-white shadow-md p-4 rounded-md">
              <h3 class="text-xl font-semibold text-gray-800 leading-tight">Desarrollo Frontend Autodidacta (Junior)</h3>
              <p class="text-gray-600 text-sm mb-2">2023</p>
              <p class="text-gray-800 leading-loose">
              Competente en Angular y con conocimientos sólidos en HTML, CSS (incluyendo Tailwind CSS y
              Bootstrap) y JavaScript, capaz de contribuir al desarrollo de interfaces de usuario atractivas y
              funcionales como desarrollador junior. Mi habilidad en maquetado y diseño web con Tailwind CSS y
              Bootstrap me permite crear sitios web modernos y responsivos que mejoran la experiencia del
              usuario.
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
export class UsersLoadersComponent {
  @Input({required: true}) cssClass!: string;


}

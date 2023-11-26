import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(':'));
  public imageLoadError = false;
  public imageSrc: string = 'assets/images/nodejs.png';
  public Image03 = {
    images: ['/app/images/Image03.png'],
    // Otros datos de la imagen si es necesario
  };

  constructor() {
    // Tu lógica del constructor aquí
  }
}

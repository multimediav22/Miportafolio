import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLoadersSlowsComponent } from '@shared/heavy-loaders/heavy-loaders-slows.component';

@Component({

  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowsComponent],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {


}

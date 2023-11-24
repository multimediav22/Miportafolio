import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-title [title]="currentFramework()"/>
  <pre>{{frameworkAsSignal() | json}}</pre>
  <pre><{{frameworkAsProperty| json}}</pre>

   `
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Multimedia Engineering - ${this.frameworkAsSignal().name}`
  );
  public frameworkAsSignal = signal({
    name: 'Engineer Multimedia',
    releaseDate: 2015,

  })
  public frameworkAsProperty ={
    name: 'Angular Developer',
    releaseDate: 2023,
  };
constructor(){
  setTimeout(() => {
    //this.frameworkAsProperty.name = 'React';
    this.frameworkAsSignal.update(value => ({
      ...value,
      name: 'jairov',
      releaseDate: 2023,
    }))
    console.log('Hecho');
  }, 2000);
}

}

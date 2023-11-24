import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLoadersFastComponent } from "../../../shared/heavy-loaders/heavy-loaders-fast.component";

@Component({
    selector: 'app-view-transition',
    standalone: true,
    templateUrl: './view-transition.component.html',
    styles: ``,
    imports: [CommonModule, HeavyLoadersFastComponent]
})
export default class ViewTransitionComponent {

}

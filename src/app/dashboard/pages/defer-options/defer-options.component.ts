import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersLoadersComponent } from "../../../shared/heavy-loaders/users-loaders.component";

@Component({
    standalone: true,
    templateUrl: './defer-options.component.html',
    styles: ``,
    imports: [CommonModule, UsersLoadersComponent]
})
export default class DeferOptionsComponent {


}

import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { IncrementadorComponent } from './incrementador/incrementador.component';

@NgModule({
    declarations: [
        IncrementadorComponent
    ],
    exports: [
        IncrementadorComponent
    ],
    imports: [
        FormsModule
    ]
})
export class ComponentsModule { }

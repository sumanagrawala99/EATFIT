import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';
import { TimePipe } from './time.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [AlertComponent,TimePipe],
    exports: [AlertComponent]
})
export class AlertModule { }
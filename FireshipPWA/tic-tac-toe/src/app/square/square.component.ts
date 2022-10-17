
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-square',
    template: `
    <button mat-flat-button disableRipple="true"  *ngIf="!value">{{ value }}</button>
    <button mat-flat-button disableRipple="true" color="warn" *ngIf="value == 'X'">{{ value }}</button>
    <button mat-flat-button disableRipple="true" color="accent" *ngIf="value == 'O'">{{ value }}</button>
  `,
    styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

    @Input() value!: 'X' | 'O';

}

/*
 * Animació personalitzada
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 5.12.2017
 * - Animació personalitzada
 * 1.12.2020
 * - Actualització a Angular 11
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';

@Component({
  selector: 'animacio',

  // animations is to create animations.
  animations: [
    trigger('ferEfecte', [
      state(
        'true',
        style({ opacity: 1, transform: 'scale(1.0)', color: 'red' })
      ),
      state(
        'false',
        style({ opacity: 0, transform: 'scale(0.0)', color: 'blue' })
      ),
      transition('1 => 0', animate('1000ms')),
      transition('0 => 1', animate('1000ms')),
    ]),
  ],
  template: `
    <div [@ferEfecte]="isVisible">
      <ng-content></ng-content>
      <p>Animacions amb Angular 2...</p>
    </div>
  `,
})
export class M10_AnimacioComponent {
  @Input() isVisible: boolean = true;
}

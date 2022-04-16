import { Directive, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { goToNextPage } from '../route/actions/route.actions';

@Directive({
  selector: '[presNext]',
})
export class NextDirective {
  constructor(private store: Store) {}

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    console.log('ahhhhhhhh');
    this.store.dispatch(goToNextPage());
  }
}

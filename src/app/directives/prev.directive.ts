import { Directive, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { goToPreviousPage } from '../route/actions/route.actions';

@Directive({
  selector: '[presPrev]',
})
export class PrevDirective {
  constructor(private store: Store) {}

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    this.store.dispatch(goToPreviousPage());
  }
}

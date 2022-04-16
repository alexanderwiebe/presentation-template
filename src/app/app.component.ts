import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentRoute } from './route/selectors/route.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'presentation-i18n';
  currentRoute$ = new Observable<any>();
  constructor(private store: Store) {
    this.currentRoute$ = this.store.select(selectCurrentRoute);
  }
}

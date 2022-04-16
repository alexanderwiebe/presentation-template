import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { goToNextPage } from '../route/actions/route.actions';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-title',
  },
})
export class TitleComponent implements OnInit {
  todaysDate = new Date();
  constructor(private store: Store) {}

  ngOnInit(): void {}

  next(): void {
    this.store.dispatch(goToNextPage());
  }
}

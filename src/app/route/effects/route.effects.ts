import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { EMPTY, Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import * as RouteActions from '../actions/route.actions';

@Injectable()
export class RouteEffects {
  loadRoutes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RouteActions.loadRoutes),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  persistRoute$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      tap((action) => console.log),
      map((something) => {
        console.warn('hey');
        return RouteActions.saveRoute({ route: something });
      })
    );
  });

  constructor(private actions$: Actions) {}
}

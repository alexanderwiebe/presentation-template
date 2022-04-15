import { createAction, props } from '@ngrx/store';

export const loadRoutes = createAction('[Route] Load Routes');

export const saveRoute = createAction(
  '[Route] Save Route',
  props<{ route: any }>()
);

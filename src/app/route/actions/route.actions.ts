import { createAction, props } from '@ngrx/store';

export const loadRoutes = createAction('[Route] Load Routes');

export const saveRoute = createAction(
  '[Route] Save Route',
  props<{ route: any }>()
);

export const goToPage = createAction(
  '[Route] Go To Page',
  props<{ page: number }>()
);

export const goToPreviousPage = createAction('[Route] Go To Previous Page');
export const goToNextPage = createAction('[Route] Go To Next Page');

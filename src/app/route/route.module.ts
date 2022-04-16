import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouteEffects } from './effects/route.effects';
import * as fromRoute from './reducers/route.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromRoute.routeFeatureKey, fromRoute.reducer),
    EffectsModule.forFeature([RouteEffects]),
  ],
})
export class RouteModule {}

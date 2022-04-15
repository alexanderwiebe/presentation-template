import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromRoute from './reducers/route.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RouteEffects } from './effects/route.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromRoute.routeFeatureKey, fromRoute.reducer),
    EffectsModule.forFeature([RouteEffects])
  ]
})
export class RouteModule { }

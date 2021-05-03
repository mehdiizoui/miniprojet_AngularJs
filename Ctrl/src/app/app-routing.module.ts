import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CreateCarService } from './services/create-car.service';

const routes: Routes = [
  { path: 'create-car', component: CreateCarComponent },
  {path : 'detail-car', component:CarsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

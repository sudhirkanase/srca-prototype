import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TilesDataViewComponent } from './components/tiles-data-view/tiles-data-view.component';

const routes: Routes = [
  {
    path: 'tiles-data-view',
    component: TilesDataViewComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tiles-data-view'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'YoutubeAPI', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'YoutubeAPI' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
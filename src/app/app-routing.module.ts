import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoContentComponent } from './components/video-content/video-content.component';
import { VideoCardsComponent } from './components/video-cards/video-cards.component';

const routes: Routes = [
  { path: '', component: VideoCardsComponent },
  { path: 'video/:id', component: VideoContentComponent },
  { path: '**', pathMatch:'full', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

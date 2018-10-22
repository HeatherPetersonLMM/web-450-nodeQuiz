import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { QuizComponent } from '../quiz/quiz.component';
import { PresentationsComponent } from '../presentations/presentations.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'select', component: QuizComponent },
  { path: 'presentation/:id', component: PresentationsComponent },
  { path: 'quiz/:id', component: QuizComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

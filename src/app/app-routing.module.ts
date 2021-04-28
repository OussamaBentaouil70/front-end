import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizCreateComponent} from './quizs/quiz-create/quiz-create.component';
import {QuizListComponent} from './quizs/quiz-list/quiz-list.component';
export const components = [QuizCreateComponent , QuizListComponent];
const routes: Routes = [
  {path: '', component : components[0]},
  {path: 'quiz-create', component : components[0]},
  {path: 'quiz-list', component : components[1]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

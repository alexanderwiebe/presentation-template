import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

// const routes: Routes = [
//   {
//     path: '',
//     component: TitleComponent,
//   },
//   {
//     path: 'title',
//     component: TitleComponent,
//   },
//   {
//     path: 'intro',
//     component: IntroComponent,
//   },
//   {
//     path: 'greetings',
//     component: GreetingsComponent,
//   },
//   {
//     path: 'questions',
//     component: QuestionsComponent,
//   },
//   {
//     path: 'thanks',
//     component: ThanksComponent,
//   },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { GreetingsComponent } from './greetings/greetings.component';
import { IntroComponent } from './intro/intro.component';
import { QuestionsComponent } from './questions/questions.component';
import { ThanksComponent } from './thanks/thanks.component';
import { TitleComponent } from './title/title.component';

export const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
  },
  {
    path: 'title',
    component: TitleComponent,
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: 'greetings',
    component: GreetingsComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
  {
    path: 'thanks',
    component: ThanksComponent,
  },
];

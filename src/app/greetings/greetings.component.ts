import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-greetings',
  },
})
export class GreetingsComponent implements OnInit {
  hoodyCost = 18.99;
  markdown = `\`\`\` html
<ul>
  <li i18n>Hello, how are you?</li>
  <li i18n>Hi, I'm good.</li>
  <li i18n>What's new with you?</li>
  <li i18n>I bought this hoody for {{ hoodyCost | currency }}</li>
  <li i18n>It looks good on you!</li>
</ul>
\`\`\``;
  constructor() {}

  ngOnInit(): void {}
}

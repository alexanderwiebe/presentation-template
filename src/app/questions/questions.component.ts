import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-questions',
  },
})
export class QuestionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

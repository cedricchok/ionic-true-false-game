import { Component, OnInit } from '@angular/core';
import {Question} from '../model';
import {QuestionService} from '../services/question.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  score = 0;
  chance = 3;
  questions: Question[];
  randomQuestion: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(data => {
      console.log(data);
    });
  }

}

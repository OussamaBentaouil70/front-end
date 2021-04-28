import {Component, OnInit, ViewChild} from '@angular/core';
import {QuizService} from '../../controller/service/quiz.service';
import {Question} from '../../controller/model/question.model';
import {Reponse} from '../../controller/model/reponse.model';
import {TypeDeQuestion} from '../../controller/model/type-de-question.model';
import {createViewChild} from '@angular/compiler/src/core';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {
  constructor(private quizService: QuizService) {}
  get question(): Question {
    return this.quizService.question;
  }
  get questions(): Array<Question> {
    return this.quizService.questions;
  }
  get reponse(): Reponse {
    return this.quizService.reponse;
  }
  get reponses(): Array<Reponse> {
    return this.quizService.reponses;
  }
  get type(): TypeDeQuestion {
    return this.quizService.type;
  }
  get types(): Array<TypeDeQuestion> {
    return this.quizService.types;
  }
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  answers =  [ { ans: 'choix unique', id: '0'},
    { ans: 'choix multiple', id: '1'}];
  // @ts-ignore
  dataarray: string[];
  // tslint:disable-next-line:typedef
  // @ts-ignore

// tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  /*correct(e){
    this.quizService.correct(e);
  }*/
  // tslint:disable-next-line:typedef
 /* selectCorrect(){
    this.quizService.selectCorrect();
  }*/
  // @ts-ignore
  ngOnInit(): void {
    this.questions.push(this.question);
  }
  // tslint:disable-next-line:typedef
  public addCard(){
    return this.quizService.addCard();
  }
  // tslint:disable-next-line:typedef
  public addFormule(){
    this.quizService.addFormule();
  }
  // tslint:disable-next-line:typedef
  public save(){
    return this.quizService.save();
  }
  // tslint:disable-next-line:typedef
  private clone(question: Question) {
    // @ts-ignore
    return this.quizService.clone();
  }
  // tslint:disable-next-line:typedef
 /* addQuestion() {
    const btn = document.createElement('input');
    document.body.appendChild(btn);
  }*/
  // tslint:disable-next-line:typedef
  public addReponse(){
    return this.quizService.addReponse();
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  delete(index: number) {
    this.quizService.delete(index);
  }
}

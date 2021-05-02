import {Question} from './question.model';

export class Reponse {
  // @ts-ignore
  public id: number;
  // @ts-ignore
  public ref: string;
  // @ts-ignore
  public numero: number;
  // @ts-ignore
  public lib: string;
  // @ts-ignore
  public etatReponse: string;
  public question = new Question();
}

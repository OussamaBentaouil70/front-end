import {Question} from './question.model';

export class Quiz {
  // @ts-ignore
  public lib: string;
  // @ts-ignore
  public ref: string;
  // @ts-ignore
  public numero: number;
  // @ts-ignore
  public dateDebut: Date;
  // @ts-ignore
  public dateFin: Date;
  // @ts-ignore
  public id: number;
  // @ts-ignore
  public seuilReussite: number;
  public questions = new Array<Question>();
}

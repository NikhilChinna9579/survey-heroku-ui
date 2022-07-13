import { QandA} from './qanda.model';
export interface Feedback {
    reviewerName?:string;
    reviewerEmail?:string;
    additonalComment?:string;
    questionsAndAnswers?:Array<QandA>;
}

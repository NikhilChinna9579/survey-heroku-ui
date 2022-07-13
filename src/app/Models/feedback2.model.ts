import { QandA2 } from "./qand-a2.model";
export interface Feedback2 {
    reviewerName?:string;
    reviewerEmail?:string;
    additonalComment?:string;
    questionsAndAnswers?:Array<QandA2>;
}

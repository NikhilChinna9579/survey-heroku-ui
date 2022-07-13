import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../Models/feedback.model';
import { Questions } from '../Models/questions.model';
import { SaveFeedback } from '../Models/saveFeedback.model';
import { Login } from '../Models/login.model';
const baseUrl="https://survey-heroku-demo.herokuapp.com";
@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  data:any;

  getfeed:any="getAllFeedbacks";
  constructor(private http:HttpClient) { }
  getFeed():Observable<Feedback[]>{
    return this.http.get<Feedback[]>("https://survey-heroku-demo.herokuapp.com/getAllFeedbacks");
  }
  getQuestions():Observable<Questions[]>{
    return this.http.get<Questions[]>("https://survey-heroku-demo.herokuapp.com/getAllQuestions");
  }
  getauth(item:Login){
    return this.http.post("https://survey-heroku-demo.herokuapp.com/loginAdmin",item);
  }
  saveFeed(item:SaveFeedback){
      return this.http.post<any>("https://survey-heroku-demo.herokuapp.com/saveFeedback",item);
  }
}

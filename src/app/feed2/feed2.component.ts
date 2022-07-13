import { StylesManager, SurveyNG, Survey } from "survey-angular";
import { Component, OnInit } from '@angular/core';
import { Model } from 'survey-angular';
import { DefaultService } from '../Services/default.service';
import { Questions } from '../Models/questions.model';
import { Feedback } from "../Models/feedback.model";
import { SaveFeedback } from '../Models/saveFeedback.model';
import { QandA2 } from '../Models/qand-a2.model';
import { Feedback2 } from "../Models/feedback2.model";
StylesManager.applyTheme("modern");
@Component({
  selector: 'app-feed2',
  templateUrl: './feed2.component.html',
  styleUrls: ['./feed2.component.scss']
})
export class Feed2Component implements OnInit {
  questions: Questions[] = [];
  temp: any;
  ques: Questions = {};
  tr:boolean=false;
  survey:any;
  constructor(private surveyservice: DefaultService) { }

  ngOnInit(): void {
    this.surveyservice.getQuestions().subscribe(res => {
      this.questions = res;
      this.temp = {
        "pages": [
          {
            "name": "page1",
            "elements": [{ "type": "text", "name": "reviewerName", "title": "Please Enter your name" }, { "type": "text", "name": "reviewerEmail", "title": "Please Enter your Email" }]
          },
          {
            "name": "page2",
            "elements": [
              {
                "type": "matrix",
                "name": "questionsAndAnswers",
                "title": "Please fill the survey",
                "columns": [
                  {
                    "value": 1,
                    "text": "Strongly Disagree"
                  },
                  {
                    "value": 2,
                    "text": "Disagree"
                  },
                  {
                    "value": 3,
                    "text": "Neutral"
                  },

                  {
                    "value": 4,
                    "text": "Agree"
                  },
                  {
                    "value": 5,
                    "text": "Strongly Agree"
                  }
                ], "rows": [
                  {
                    "value": this.questions[0].questionId,
                    "text": this.questions[0].questionDescription
                  }, {
                    "value": this.questions[1].questionId,
                    "text": this.questions[1].questionDescription,
                  }, {
                    "value": this.questions[2].questionId,
                    "text": this.questions[2].questionDescription
                  }
                ]
              }
            ]
          },
          {
            "name": "page3",
            "elements": [{ "type": "comment", "name": "additonalComment", "title": "Please Enter your Comments" }]
          },
        ]
      };
      this.survey = new Model(this.temp);
      SurveyNG.render("surveyContainer", { model: this.survey });
      this.survey.onComplete.add(this.surveyComplete);
      //console.log(survey);
      // console.log(this.data);
      //  setTimeout(() => {
      //    this.refresh1(survey.data);
      //  }, 10000);

    });
  }
   surveyComplete(sender: any) {
    // console.log(sender.data);
    //  this.data=sender.data;
    //  console.log(this.data);
    this.tr=true;
  }
  public refresh1(data:any) {
     var temp2:QandA2[]=[];
     var formdata:any;
     var map1 = new Map(Object.entries(data.questionsAndAnswers));
     let i=0;
      for (let [key, value] of map1) {
        console.log(key + " = " + value);
        temp2[i]={
        "questionId":parseInt(key),
          "rating":value
         }
        i++;
      }
    //for(keys in Object.entries(this.data.questionsAndAnswers)){}
      const model:Feedback2={};
      model.reviewerName=data.reviewerName;
      model.reviewerEmail=data.reviewerEmail;
      model.additonalComment=data.additonalComment;
      model.questionsAndAnswers=temp2;
    //var temp4: SaveFeedback = {
    //   "saveFeedbackForm": {
    //     "reviewerName": "Yanam",
    //     "reviewerEmail": "yanam",
    //     "additonalComment": "no comments",
    //     "questionsAndAnswers": [
    //       {
    //         "questionId": 1,
    //         "rating": 3
    //       },
    //       {
    //         "questionId": 2,
    //         "rating": 3
    //       },
    //       {
    //         "questionId": 3,
    //         "rating": 3
    //       }
    //     ]
    //   }
    // }
     var temp5:SaveFeedback={
     "saveFeedbackForm":model
     }
    // console.log(this.data);
    // var temp6:string=JSON.stringify(this.data);
    // var model:SaveFeedback={
    //   "input":temp6
    // }
     this.surveyservice.saveFeed(temp5).subscribe(res => {
       console.log(res);
     });
  }
  // refresh2(survey:any){
  //   console.log(survey.data);
  //   var temp6:string=JSON.stringify(survey.data);
  //   var model:SaveFeedback={
  //       "input":temp6
  //     }
  //   this.surveyservice.saveFeed(model).subscribe(res => {
  //       console.log(res);
  //     });
  // }

}

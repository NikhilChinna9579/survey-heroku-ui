import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { DefaultService } from '../Services/default.service';
import { QandA } from '../Models/qanda.model';
import { QandA2 } from '../Models/qand-a2.model';
import { SaveFeedback } from '../Models/saveFeedback.model';
import {Questions} from '../Models/questions.model';
import { Feedback2 } from '../Models/feedback2.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DisplayDialogComponent } from '../display-dialog/display-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss']
})
export class FeedbackPageComponent implements OnInit {
  feedform:any;
  questionsAndAnswers:any;
  questions:Questions[]=[];
  reviewerEmail:any;
  reviewerName:any;
  showprogressbar:boolean=false;
  constructor(
    private fb:FormBuilder,
    private surveyservice:DefaultService,
    public dialog: MatDialog,
    private router:Router){}

  ngOnInit(): void {
    //  this.questions[0]={"questionId":null,"questionDescription":''}
    //  this.questions[1]={"questionId":null,"questionDescription":''}
    //  this.questions[2]={"questionId":null,"questionDescription":''}
    this.getforms();
  }
  getforms() {
    this.showprogressbar=true;
    this.surveyservice.getQuestions().subscribe(res => {
      this.questions = res;
      if(res)
      this.showprogressbar=false;
    });
    this.feedform = this.fb.group({
      reviewerName: ['',Validators.required],
      reviewerEmail: ['',[Validators.required,Validators.email]],
      additonalComment: [''],
      questionsAndAnswers:this.fb.array([]),
      //  Q1: [''],
      // Q2: [''],
      // Q3: [''],
      // Q4: [''],
      // Q5: [''],
    });
    const fa=this.feedform.get('questionsAndAnswers') as FormArray;
    setTimeout(() => {
      console.log(this.questions);
      this.questions.forEach(ele=>{
        console.log(ele);
        fa.push(this.fb.group({
          questionId:[ele.questionId],
          rating:['',Validators.required]
        }))
      });
      console.log(fa);
      console.log(this.feedform.get('questionsAndAnswers'));
    });
  }
  saveFeedBack(){
    console.log(this.feedform.value);
    let i = 0;
    this.feedform.value.questionsAndAnswers.forEach(el => {
      console.log(el);
      this.feedform.value.questionsAndAnswers[i].rating = parseInt(el.rating);
      i++;
    });
    const model: SaveFeedback = {
      "saveFeedbackForm": this.feedform.value
    }
    console.log(model);
    this.showprogressbar=true;
    this.surveyservice.saveFeed(model).subscribe(res => {
      //if(res){
        //this.openDialog();
      //}
    },err=>{
      console.log(err);
    });
    setTimeout(() => {
      this.showprogressbar=false;
      this.openDialog();
    }, 3000);
    // const temp1:Feedback2={};
    // temp1.reviewerName=this.feedform.value.reviewerName;
    // temp1.reviewerEmail=this.feedform.value.reviewerEmail;
    // temp1.additonalComment=this.feedform.value.additonalComment;
    // temp1.questionsAndAnswers=[{
    //   "questionId":this.questions[0].questionId,
    //   "rating":parseInt(this.feedform.value.Q1)
    // },
    // {
    //   "questionId":this.questions[1].questionId,
    //   "rating":parseInt(this.feedform.value.Q2)
    // },
    // {
    //   "questionId":this.questions[2].questionId,
    //   "rating":parseInt(this.feedform.value.Q3)
    // }]
    // console.log(this.ques);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DisplayDialogComponent, {
      width: '250px',
      data:"Thanks for submitting !👍"
    });
    dialogRef.afterClosed().subscribe(res=>{
    this.router.navigate(['./']);
    });
  }
}

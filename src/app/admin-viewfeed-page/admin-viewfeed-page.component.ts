import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { DefaultService } from '../Services/default.service';
import { Feedback } from '../Models/feedback.model';

@Component({
  selector: 'app-admin-viewfeed-page',
  templateUrl: './admin-viewfeed-page.component.html',
  styleUrls: ['./admin-viewfeed-page.component.scss']
})
export class AdminViewfeedPageComponent implements OnInit {
  rowData:any;
  columnDefs: ColDef[] = [];
  defaultColDefs: any;
  gridOptions:any;
  showprogressbar:boolean=false;
  constructor(private surveyservice:DefaultService) { }

  ngOnInit(): void {
    this.showprogressbar=true;
    this.surveyservice.getFeed().subscribe(res=>{
      this.rowData=res;
      if(res)
      this.showprogressbar=false;
    });
    this.gridOptions={headerHeight: 50,enableSorting:true}
    this.defaultColDefs = { sortable: true, floatingFilter:true,resizable:true,filter: true};
    this.columnDefs = [
      { headerName:'Name',field:'reviewerName'},
      { headerName:'Email',field: 'reviewerEmail' }, 
      { headerName:'Rate the overall experience',cellRenderer:function(params:any){
        if((params.data.questionsAndAnswers[0].rating) == 1){
          return "Highly Unlikely";
        } else if((params.data.questionsAndAnswers[0].rating) == 2){
          return "Not Bad";
        }else if((params.data.questionsAndAnswers[0].rating) == 3){
          return "Average";
        }else if((params.data.questionsAndAnswers[0].rating) == 4){
          return "Good";
        }else if((params.data.questionsAndAnswers[0].rating) == 5){
          return "very Likely";
        } else{
          return null;
        }
      },field:"value",width:250,valueGetter:function(params){return parseInt(params.data.questionsAndAnswers[0].rating)}},
      
      { headerName:'How was your experience with the Product',cellRenderer:function(params:any){
        if((params.data.questionsAndAnswers[1].rating) == 1){
          return "Highly Unlikely";
        } else if((params.data.questionsAndAnswers[1].rating) == 2){
          return "Not Bad";
        }else if((params.data.questionsAndAnswers[1].rating) == 3){
          return "Average";
        }else if((params.data.questionsAndAnswers[1].rating) == 4){
          return "Good";
        }else if((params.data.questionsAndAnswers[1].rating) == 5){
          return "very Likely";
        } else{
          return null;
        }
      },field:"value",minWidth:150,width:145,valueGetter:function(params){return parseInt(params.data.questionsAndAnswers[1].rating)}},
      
      { headerName:'How was your Onsite Training',cellRenderer:function(params:any){
        if((params.data.questionsAndAnswers[2].rating) == 1){
          return "Highly Unlikely";
        } else if((params.data.questionsAndAnswers[2].rating) == 2){
          return "Not Bad";
        }else if((params.data.questionsAndAnswers[2].rating) == 3){
          return "Average";
        }else if((params.data.questionsAndAnswers[2].rating) == 4){
          return "Good";
        }else if((params.data.questionsAndAnswers[2].rating) == 5){
          return "very Likely";
        } else{
          return null;
        }  
      },field:"value",minWidth:150,width:150,valueGetter:function(params){return parseInt(params.data.questionsAndAnswers[2].rating)}},
      
      { headerName:'How was your Trainer',cellRenderer:function(params:any){
        if((params.data.questionsAndAnswers[3].rating) == 1){
          return "Highly Unlikely";
        } else if((params.data.questionsAndAnswers[3].rating) == 2){
          return "Not Bad";
        }else if((params.data.questionsAndAnswers[3].rating) == 3){
          return "Average";
        }else if((params.data.questionsAndAnswers[3].rating) == 4){
          return "Good";
        }else if((params.data.questionsAndAnswers[3].rating) == 5){
          return "very Likely";
        } else{
          return null;
        }  
      },field:"value",minWidth:150,width:150,valueGetter:function(params){return parseInt(params.data.questionsAndAnswers[3].rating)}},
      
      { headerName:'Would you recommend this Product to others',cellRenderer:function(params:any){
        if((params.data.questionsAndAnswers[4].rating) == 1){
          return "Highly Unlikely";
        } else if((params.data.questionsAndAnswers[4].rating) == 2){
          return "Not Bad";
        }else if((params.data.questionsAndAnswers[4].rating) == 3){
          return "Average";
        }else if((params.data.questionsAndAnswers[4].rating) == 4){
          return "Good";
        }else if((params.data.questionsAndAnswers[4].rating) == 5){
          return "very Likely";
        } else{
          return null;
        }  
      },field:"value",minWidth:150,width:150,valueGetter:function(params){return parseInt(params.data.questionsAndAnswers[4].rating)}},
      
      { headerName:'Additional Comments',field: 'additonalComment'}
    ];
    
  }
  getratingtext(rating){
    return 1;
  }
}

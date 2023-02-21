import { Component, Inject, OnInit } from '@angular/core';
import { QuestionService } from '../first-level-examination/first-level-examination/question.service';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  Anss2: any;


  constructor(private _mdr: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
      
      if(data.Anss2){
        this.Anss2 = data?.Anss2;
      }
      if(data.Anss3){
        this.Anss2 = data?.Anss3;
      }
      if(data.name){
        this.Anss2 = data?.name;
      }
      if(data.parendData){
        this.Anss2 = data?.parendData;
      }
      if(data.scrname){
        this.Anss2 = data?.scrname;
      }
      if(data.scrData){
        this.Anss2 = data?.scrData;
      }
      if(data.Anss3ServitudePlan1){
        this.Anss2 = data?.Anss3ServitudePlan1;
      }
      if(data.Anss3ServitudePlan){
        this.Anss2 = data?.Anss3ServitudePlan;
      }
      if(data.Anss3GereralPlan1){
        this.Anss2 = data?.Anss3GereralPlan1;
      }
      if(data.Anss3GereralPlan){
        this.Anss2 = data?.Anss3GereralPlan;
      }
      if(data.Anss3sectional){
        this.Anss2 = data?.Anss3sectional;
      }
      if(data.Anss3sectional1){
        this.Anss2 = data?.Anss3sectional1;
      }
      

      
      
      
      
      
      
  }





  





  

  ngOnInit(): void {
   


  }

  CloseDialog() {
    this._mdr.close(false)
  }





 


 



}



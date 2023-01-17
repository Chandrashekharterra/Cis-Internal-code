import { Component, Inject, OnInit } from '@angular/core';
import { QuestionService } from '../first-level-examination/first-level-examination/question.service';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  displayedColumns: string[] = ['Caption','Answer1', 'Answer2', 'ans1', 'ANS3'];
  questions$: any;
  dataSource3: any;
  survaydataSource: any;
  optionGroupsSurvey: FormArray;
  Ans2Groupssurvey:FormArray
  optionscriSurvey:FormArray
  Ans2GroupScri:FormArray

  
  public formDummyData :any
 
  public form: FormGroup;
  addExaminerSurveyFormGroup: FormGroup;
  disable: boolean;
  disabled: boolean;
  question: any;
  myForm: FormGroup;


 


  constructor(private service: QuestionService, private fb: FormBuilder,private  dialogRef : MatDialog) {
    this.form = fb.group({
      user: fb.array([]),
      userscr: fb.array([]),
    });

    
  }





  





  

  ngOnInit(): void {
    this.question = this.service.getUsers();

    this.myForm = this.fb.group({
      ScrutinizerName: '',
      examinerName:''
      
    });
    this.myForm.patchValue( this.question[0])
    this.questions$ = this.service.getUsers()
    const developer1 =  this.questions$.filter(member =>  member.DocketTypeId === 2 && member.UserRole === 0 &&  member.AttributeType === 1)
    this.dataSource3 = developer1;


    const userRole1 = sessionStorage.getItem('userInfo')
    const data = JSON.parse(userRole1).userRoles
    data.forEach((item:any)=>{
      if(item.userRoleId === 1244){
        this.disable = true
      }
      if(item.userRoleId === 1246){
        this.disabled = true
      }
    })


    let survayData = this.questions$.filter(member => member.DocketTypeId === 2 && member.UserRole === 1244 && member.AttributeType === 0)
    let scrutinizorData = this.questions$.filter(member => member.DocketTypeId === 2 && member.UserRole === 1246 && member.AttributeType === 0)
    const newData = scrutinizorData.map(object => {
      return {...object, scriData: []};
    });
     newData?.forEach((item)=>{
      this.questions$.forEach((i)=>{
        if(i.DocketTypeId === 2 && i.UserRole === 1246 && item.DocketListID === i.ParentId){
           item.scriData.push(i)
        }
      })
    })
    
  const  arrayObj = newData?.map(item => {
      return {
        ...item,
        Answer3: item.Answer1,
        Answer4: item.Answer2
      };
    });
  const  result = arrayObj.map(({Answer3,Answer4,scriData},i) => ({Answer3,Answer4,scriData, ...survayData[i]}))
      
      const arrWithColor = result.map(object => {
        return {...object, parendData: []};
      });
        let parentData = arrWithColor.forEach((item)=>{
        this.questions$.forEach((i)=>{
          if(i.DocketTypeId === 2 && i.UserRole === 1244 && item.DocketListID === i.ParentId){
             item.parendData.push(i)
          }
        })
      })
     
      this.survaydataSource = arrWithColor;
      this.formDummyData = arrWithColor;
      if (this.formDummyData) {
        this.formDummyData.forEach((user) => {
          this.addUser(user);
          this.addUserScr(user)
        });
      } else {
        this.addUser();
        this.addUserScr();
      }


     

  }





  addRow(userIndex: number, data?: any) {
    console.log('userIndex', userIndex, '-------', 'data', data.Caption);
    let fg = this.fb.group({
      parendData: [
        data.Answer2 ? data.Answer2 : '',
        Validators.compose([Validators.required]),
      ],
      examinerAns1: [
        data.Answer1 ? data.Answer1 : '',
        Validators.compose([Validators.required]),
      ],
    });
    (<FormArray>(
      (<FormGroup>(<FormArray>this.form.controls['user']).controls[userIndex])
        .controls['parendDatas']
    )).push(fg);
  }

  addRowScr(userIndex: number, data?: any) {
    console.log('userIndex', userIndex, '-------', 'data', data.Caption);
    let fg = this.fb.group({
      scrData: [
        data.Answer2 ? data.Answer2 : '',
        Validators.compose([Validators.required]),
      ],
      scrAns1: [
        data.Answer1 ? data.Answer1 : '',
        Validators.compose([Validators.required]),
      ],
    });
    (<FormArray>(
      (<FormGroup>(<FormArray>this.form.controls['userscr']).controls[userIndex])
        .controls['scrDatas']
    )).push(fg);
  }

  
  addUser(user?: any) {
    let fg = this.fb.group({
      name: [user ? user.Answer2 : '', Validators.compose([Validators.required])],
      examinerParentAn1: [user ? user.Answer1 : '', Validators.compose([Validators.required])],
      //  scrutinizer: [user ? user.Answer4 : '', Validators.compose([Validators.required])],
      parendDatas: this.fb.array([]),
      
    });
    (<FormArray>this.form.get('user')).push(fg);
    let userIndex = (<FormArray>this.form.get('user')).length - 1;
    if (!user) {
      this.addRow(userIndex);
    } else {
      user.parendData.forEach((item) => {
        this.addRow(userIndex, item);
      });
    }
  }

  addUserScr(usersc?: any) {
    console.log(usersc,'@@@@@@@@@@@@@')
    let fg = this.fb.group({
      scrname: [usersc ? usersc.Answer4 : '', Validators.compose([Validators.required])],
      ScrParentAn1: [usersc ? usersc.Answer1 : '', Validators.compose([Validators.required])],
      scrutinizer: [usersc ? usersc.Answer4 : '', Validators.compose([Validators.required])],
      scrDatas: this.fb.array([]),
      
    });
  
    (<FormArray>this.form.get('userscr')).push(fg);
    let userIndex = (<FormArray>this.form.get('userscr')).length - 1;
    if (!usersc) {
      this.addRowScr(userIndex);
    } else {
      usersc.scriData.forEach((item) => {
        this.addRowScr(userIndex, item);
      });
    }
    console.log(fg,'uuuuuuuuuuuuuuuuuu')
  }


  onCancle() {
    this.form.reset();
    console.log(this.form, this.form.value);
  }

  onSubmit(formValue) {
    console.log(formValue);
  }

  ngOnDestroy(): void {}
 


  openDialog1(data:any,i:any){
    console.log(data[i],data[i].name,i)
    this.dialogRef.open(PopUpComponent,{
      data : {
        name : data[i]?.name
      }
    });
  }

  openDialog2(data:any,i:any,j:any){
    console.log(data[i],i,data[i]?.parendDatas[j]?.parendData)
    this.dialogRef.open(PopUpComponent,{
      data : {
        parendData : data[i]?.parendDatas[j]?.parendData
      }
    });

    
  }

  openDialog3(data:any,i:any){
    console.log(data[i],data[i].name,i)
    this.dialogRef.open(PopUpComponent,{
      data : {
        scrname : data[i]?.scrname
      }
    });
  }

  openDialog4(data:any,i:any,j:any){
    this.dialogRef.open(PopUpComponent,{
      data : {
        scrData : data[i]?.scrDatas[j]?.scrData
      }
    });

    
  }



}



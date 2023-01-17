import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog } from  '@angular/material/dialog';
import { Question, QuestionService } from './question.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { ChildComponent } from '../../child/child.component';
import { element } from 'protractor';



@Component({
  selector: 'app-first-level-examination',
  templateUrl: './first-level-examination.component.html',
  styleUrls: ['./first-level-examination.component.css'],
})
export class FirstLevelExaminationComponent implements OnInit {
  [x: string]: any;
   displayedColumns: string[] = ['Caption','Answer1', 'Answer2', 'ans1', 'ANS3'];
  dataSource; 
  dataSource3:any; 
  dataSource4:any; 
  dataSource5:any; 
  dataSource6:any;
  dataSource7:any;
  questions$:any;
  survaydataSource:any
  titlePlandataSource:any
  beaconaggrementscrrudataSource:any
  generalPlandataSource:any
  servituePlandataSource:any
  addExaminerFormGroup: FormGroup;
  addExaminersectionalFormGroup: FormGroup;
  addScrutinizerFormGroup:FormGroup;
  addScrutinizersectionalFormGroup:FormGroup;
  addExaminerGeneralPlanFormGroup:FormGroup
  addScrutinizerGeneralPlanFormGroup:FormGroup
  addExaminerServitudePlanFormGroup:FormGroup
  addScrutinizerServitudePlanFormGroup:FormGroup
  editMode = true
  readMore = false;
  longText = ``;
  text: any;
  Scrutinizerdisabled:true
  panelOpenState = false;
  optionGroups: FormArray;
  optionGroupsGereralPlan:FormArray
  Ans2GroupsGereralPlan:FormArray
  optionGroupsGereralPlan1:FormArray
  Ans2GroupsGereralPlan1:FormArray
  Ans2Groups: FormArray;
  optionGroups1: FormArray;
  Ans2Groups1: FormArray;
  optionGroupssectional: FormArray;
  Ans2Groupssectional:FormArray
  optionGroupssectional1: FormArray;
  Ans2Groupssectional1:FormArray
  optionGroupsServitudePlan:FormArray 
  Ans2GroupsGereralPlanServitudePlan:FormArray
  optionGroupsServitudePlan1:FormArray 
  Ans2GroupsGereralPlanServitudePlan1:FormArray
  disable:boolean = false
  disabled:boolean=false
  myForm: FormGroup;

 
  constructor( private service: QuestionService,public fb: FormBuilder,
    private  dialogRef : MatDialog,private _formBuilder: FormBuilder) {
   }

   getOptions() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 1)
    let userRole1 = this.questions$1.filter(member => member.UserRole === 1244 && member.AttributeType === 2 )
    const data = userRole1.sort((a, b) => a.SortOrder - b.SortOrder)
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        options: [data[i].Answer1, Validators.required]
      });
    }
    return questionControlArray;
  }

  getOptionssectionaltitle() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 3)
    let userRole1 = this.questions$1.filter(member => member.UserRole === 1244 && member.AttributeType === 2 )
    const data = userRole1.sort((a, b) => a.SortOrder - b.SortOrder)
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        optionssectional: [data[i].Answer1, Validators.required]
      });
    }
    return questionControlArray;
  }
  getOptionsGereralPlan() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 5)
    let userRole1 = this.questions$1.filter(member => member.UserRole === 1244 && member.AttributeType === 2 )
    const data = userRole1.sort((a, b) => a.SortOrder - b.SortOrder)
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        optionsGereralPlan1: [data[i].Answer1, Validators.required]
      });
    }
    return questionControlArray;
  }
  getOptionsServitude() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 6)
    let userRole1 = this.questions$1.filter(member => member.UserRole === 1244 && member.AttributeType === 2 )
    const data = userRole1.sort((a, b) => a.SortOrder - b.SortOrder)
    debugger
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        optionsServitudePlan: [data[i].Answer1, Validators.required]
      });
    }
    return questionControlArray;
  }
  getOptionsServitude1() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 6)
    let userRole1 = this.questions$1.filter(member => member.UserRole === 1246 && member.AttributeType === 2 )
    const data = userRole1.sort((a, b) => a.SortOrder - b.SortOrder)
    debugger
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        optionsServitudePlan1: [data[i].Answer1, Validators.required]
      });
    }
    return questionControlArray;
  }


  getOptions1() {
    this.questions$ = this.service.getUsers();
    let userRole2 = this.questions$.filter(member => member.UserRole === 1246 && member.AttributeType === 2 )
    const data = userRole2.sort((a, b) => a.SortOrder - b.SortOrder)
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        options1: [data[i].Answer1, Validators.required]
      });
    }
    return questionControlArray;
  }
  getOptionssectionaltitle1() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 3)
    let userRole1 = this.questions$1.filter(member => member.UserRole === 1246 && member.AttributeType === 2 )
    const data = userRole1.sort((a, b) => a.SortOrder - b.SortOrder)
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        optionssectional1: [data[i].Answer1, Validators.required]
      });
    }
    return questionControlArray;
  }

  getOptionsGereralPlan1() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 5)
    let userRole1 = this.questions$1.filter(member => member.UserRole === 1246 && member.AttributeType === 2 )
    const data = userRole1.sort((a, b) => a.SortOrder - b.SortOrder)
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        optionsGereralPlan: [data[i].Answer1, Validators.required]
      });
    }
    return questionControlArray;
  }
 
  getAnsw2() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 1)
    let userRole1 = this.questions$1.filter(member => member.UserRole === 1244 && member.AttributeType === 2 )
    const data = userRole1.sort((a, b) => a.SortOrder - b.SortOrder)
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        Anss2: [data[i].Answer2, Validators.required]
      });
    }
    return questionControlArray;
  }

  getAnsw3() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 1)
    let userRole2 = this.questions$1.filter(member => member.UserRole === 1246 && member.AttributeType === 2 )
    let data = userRole2.sort((a, b) => a.SortOrder - b.SortOrder)  
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        Anss3: [data[i].Answer2, Validators.required]
      });
    }
    return questionControlArray;
  }

  getAnssectionaltitle() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 3)
    let userRole2 = this.questions$1.filter(member => member.UserRole === 1244 && member.AttributeType === 2 )
    let data = userRole2.sort((a, b) => a.SortOrder - b.SortOrder)  
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        Anss3sectional: [data[i].Answer2, Validators.required]
      });
    }
    return questionControlArray;
  }
  getAnssservitudePlan() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 6)
    let userRole2 = this.questions$1.filter(member => member.UserRole === 1244 && member.AttributeType === 2 )
    let data = userRole2.sort((a, b) => a.SortOrder - b.SortOrder)  
    debugger
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        Anss3ServitudePlan: [data[i].Answer2, Validators.required]
      });
    }
    return questionControlArray;
  }
  getAnssservitudePlan1() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 6)
    let userRole2 = this.questions$1.filter(member => member.UserRole === 1246 && member.AttributeType === 2 )
    let data = userRole2.sort((a, b) => a.SortOrder - b.SortOrder)  
    debugger
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        Anss3ServitudePlan1: [data[i].Answer2, Validators.required]
      });
    }
    return questionControlArray;
  }
  getAnssectionaltitle1() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 3)
    let userRole2 = this.questions$1.filter(member => member.UserRole === 1246 && member.AttributeType === 2 )
    let data = userRole2.sort((a, b) => a.SortOrder - b.SortOrder)  
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        Anss3sectional1: [data[i].Answer2, Validators.required]
      });
    }
    return questionControlArray;
  }
  
  getAnsGereralPlan() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 5)
    let userRole2 = this.questions$1.filter(member => member.UserRole === 1244 && member.AttributeType === 2 )
    let data = userRole2.sort((a, b) => a.SortOrder - b.SortOrder)  
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        Anss3GereralPlan1: [data[i].Answer2, Validators.required]
      });
    }
    return questionControlArray;
  }
  getAnsGereralPlan1() {
    this.questions$ = this.service.getUsers();
    this.questions$1 = this.questions$.filter(member => member.DocketTypeId === 5)
    let userRole2 = this.questions$1.filter(member => member.UserRole === 1246 && member.AttributeType === 2 )
    let data = userRole2.sort((a, b) => a.SortOrder - b.SortOrder)  
    const questionControlArray = [];
    for (let i = 0; i < data.length; i++) {
      questionControlArray.push({ 
        Anss3GereralPlan: [data[i].Answer2, Validators.required]
      });
    }
    return questionControlArray;
  }





  ngOnInit(): void {
    this.question = this.service.getUsers();

    this.myForm = this.fb.group({
      ScrutinizerName: '',
      examinerName:''
      
    });
    this.myForm.patchValue( this.question[0])

    const userRole = sessionStorage.getItem('userInfo')
   
    this.optionGroups = this.fb.array(this.getOptions().map(options => this.fb.group(options)));
    this.Ans2Groups = this.fb.array(this.getAnsw2().map(Anss2 => this.fb.group(Anss2)));

    this.optionGroupssectional = this.fb.array(this.getOptionssectionaltitle().map(optionssectional => this.fb.group(optionssectional)));
    this.Ans2Groupssectional = this.fb.array(this.getAnssectionaltitle().map(Answer3sectional => this.fb.group(Answer3sectional)));

    this.optionGroupsGereralPlan = this.fb.array(this.getOptionsGereralPlan().map(optionssectional => this.fb.group(optionssectional)));
    this.Ans2GroupsGereralPlan = this.fb.array(this.getAnsGereralPlan().map(Answer3sectional => this.fb.group(Answer3sectional)));

    this.optionGroupsServitudePlan = this.fb.array(this.getOptionsServitude().map(optionssectional => this.fb.group(optionssectional)));
    this.Ans2GroupsGereralPlanServitudePlan = this.fb.array(this.getAnssservitudePlan().map(Answer3sectional => this.fb.group(Answer3sectional)));
    this.optionGroupsServitudePlan1 = this.fb.array(this.getOptionsServitude1().map(optionssectional => this.fb.group(optionssectional)));
    this.Ans2GroupsGereralPlanServitudePlan1 = this.fb.array(this.getAnssservitudePlan1().map(Answer3sectional => this.fb.group(Answer3sectional)));

    this.optionGroupsGereralPlan1 = this.fb.array(this.getOptionsGereralPlan1().map(optionssectional => this.fb.group(optionssectional)));
    this.Ans2GroupsGereralPlan1 = this.fb.array(this.getAnsGereralPlan1().map(Answer3sectional => this.fb.group(Answer3sectional)));
    

    this.optionGroups1 = this.fb.array(this.getOptions1().map(options1 => this.fb.group(options1)));
    this.Ans2Groups1 = this.fb.array(this.getAnsw3().map(Anss3 => this.fb.group(Anss3)));

    this.optionGroupssectional1 = this.fb.array(this.getOptionssectionaltitle1().map(optionssectional1 => this.fb.group(optionssectional1)));
   this.Ans2Groupssectional1 = this.fb.array(this.getAnssectionaltitle1().map(Answer3sectional1 => this.fb.group(Answer3sectional1)));
  

    this.addExaminerFormGroup = this.fb.group({
      option:  this.optionGroups,
     Answer2:  this.Ans2Groups,
    })

   

    this.addExaminersectionalFormGroup = this.fb.group({
      optionsectional:  this.optionGroupssectional,
     Answersectional:  this.Ans2Groupssectional,
    })

    
    this.addScrutinizerFormGroup = this.fb.group({
      option1:  this.optionGroups1,
     Answer3:  this.Ans2Groups1
    })

    this.addScrutinizersectionalFormGroup = this.fb.group({
      option1sectional1:  this.optionGroupssectional1,
     Answer3sectional1:  this.Ans2Groupssectional1
    })

    this.addExaminerGeneralPlanFormGroup = this.fb.group({
    optionGeneralPlan:  this.optionGroupsGereralPlan,
     AnswerGeneralPlan:  this.Ans2GroupsGereralPlan,
    })
   

    this.addScrutinizerGeneralPlanFormGroup = this.fb.group({
      optionGeneralPlan1:  this.optionGroupsGereralPlan1,
     AnswerGeneralPlan1:  this.Ans2GroupsGereralPlan1
    })
   

    this.addExaminerServitudePlanFormGroup = this.fb.group({
      optionServitudePlan:  this.optionGroupsServitudePlan,
       AnswerServitudePlan:  this.Ans2GroupsGereralPlanServitudePlan,
      })
     
  
      this.addScrutinizerServitudePlanFormGroup = this.fb.group({
        optionServitudePlan1:  this.optionGroupsServitudePlan1,
       AnswerServitudePlan1:  this.Ans2GroupsGereralPlanServitudePlan1
      })

    


  


    const userRole1 = sessionStorage.getItem('userInfo')
    const data = JSON.parse(userRole1).userRoles
    data.forEach((item:any)=>{
      if(item.userRoleId === 1244){
        this.newUserRole = item.userRoleId
        this.disable = true
      }
      if(item.userRoleId === 1246){
        this.newUserRole = item.userRoleId
        this.disabled = true
      }
    })
  
    this.questions$1 = this.service.getUsers();
   // this.myForm.patchValue({[this.questions$1]: ''})
     this.questions$ = this.questions$1.filter(member => member.DocketTypeId === 1)
     let developers = this.questions$.filter(member => member.UserRole === 1244  && member.AttributeType === 2)
     
    if(this.newUserRole === 1244){
      const data = developers.sort((a, b) => a.SortOrder - b.SortOrder)
      this.dataSource = data;
    }
    

    let userRole2 = this.questions$.filter(member => member.UserRole === 1246 && member.AttributeType === 2 )
    if(this.newUserRole === 1246){
      const data = userRole2.sort((a, b) => a.SortOrder - b.SortOrder)
     this.dataSource = data;
    }
   
   
    

    let titleplan = this.questions$1.filter(member => member.DocketTypeId === 3 && member.UserRole === 1244 && member.AttributeType === 2)
    
    if(this.newUserRole === 1244){
      const data = titleplan.sort((a, b) => a.SortOrder - b.SortOrder)
      this.titlePlandataSource = data;
    }
    let titleplanscrru = this.questions$1.filter(member => member.DocketTypeId === 3 && member.UserRole === 1246 && member.AttributeType === 2)
    if(this.newUserRole === 1246){
      const data = titleplanscrru.sort((a, b) => a.SortOrder - b.SortOrder)
      this.titlePlandataSource = data;
    }
    let beaconaggrement = this.questions$1.filter(member => member.DocketTypeId === 4 && member.UserRole === 1244 && member.AttributeType === 2)
    if(this.newUserRole === 1244){
      this.beaconaggrementscrrudataSource = beaconaggrement;
    }
    let beaconaggrementscrru = this.questions$1.filter(member => member.DocketTypeId === 4 && member.UserRole === 1246 && member.AttributeType === 2)
    if(this.newUserRole === 1246){
      this.beaconaggrementscrrudataSource = beaconaggrementscrru;
    }
    let generalPlan = this.questions$1.filter(member => member.DocketTypeId === 5 && member.UserRole === 1244 && member.AttributeType === 2)
    if(this.newUserRole === 1244){
      this.generalPlandataSource = generalPlan;
    }
    let generalPlanscrru = this.questions$1.filter(member => member.DocketTypeId === 5 && member.UserRole === 1246 && member.AttributeType === 2)
    if(this.newUserRole === 1246){
      this.generalPlandataSource = generalPlanscrru;
    }

    let servituePlan = this.questions$1.filter(member => member.DocketTypeId === 6 && member.UserRole === 1244 && member.AttributeType === 2)
    if(this.newUserRole === 1244){
      this.servituePlandataSource = servituePlan;
    }
    let servituePlanscrru = this.questions$1.filter(member => member.DocketTypeId === 6 && member.UserRole === 1246 && member.AttributeType === 2)
    if(this.newUserRole === 1246){
      this.servituePlandataSource = servituePlanscrru;
    }

    const developer = this.questions$.filter(member => member.UserRole === 0 &&  member.AttributeType === 1)
    this.dataSource2 = developer;

    const developer1 =  this.questions$1.filter(member =>  member.DocketTypeId === 2 && member.UserRole === 0 &&  member.AttributeType === 1)
    this.dataSource3 = developer1;

    const developer3 =  this.questions$1.filter(member =>  member.DocketTypeId === 3 && member.UserRole === 0 &&  member.AttributeType === 1)
    this.dataSource4 = developer3;

    const developer4 =  this.questions$1.filter(member =>  member.DocketTypeId === 4 && member.UserRole === 0 &&  member.AttributeType === 1)
    this.dataSource5 = developer4;

    const developer5 =  this.questions$1.filter(member =>  member.DocketTypeId === 5 && member.UserRole === 0 &&  member.AttributeType === 1)
    this.dataSource6 = developer5;

    const developer6 =  this.questions$1.filter(member =>  member.DocketTypeId === 6 && member.UserRole === 0 &&  member.AttributeType === 1)
    this.dataSource7 = developer6;

 
   
  
  }

  

submitExamination(){
this.questions$ = this.service.getUsers();
let dataAns2 =   this.addExaminerFormGroup.value.Answer2
let dataAns1 =   this.addExaminerFormGroup.value.option
const listData = this.questions$.filter(member => member.DocketTypeId === 2)
const listData1 = this.questions$.filter(member => member.DocketTypeId === 3)
const listData2 = this.questions$.filter(member => member.DocketTypeId === 4)
const listData3 = this.questions$.filter(member => member.DocketTypeId === 5)
const listData4 = this.questions$.filter(member => member.DocketTypeId === 6)

  const questions$1 = this.questions$.filter(member => member.DocketTypeId === 1)
  let userRole1 = questions$1.filter(member => member.UserRole === 1244 && member.AttributeType === 2 )
 let data = userRole1.map((obj, i) => ({ ...obj, Answer2: dataAns2[i]?.Anss2,Answer1: dataAns1[i]?.options }));


const submitData = [...userRole1,...listData,...listData1,...listData2,...listData3,...listData4]

console.log(submitData)

}

 

   
  get Answer2() : FormArray {
    return this.addExaminerFormGroup.get("Answer2") as FormArray
  }

 

  get options() : FormArray {
    return this.addExaminerFormGroup.get("option") as FormArray
  }


  get Answersectional() : FormArray {
    return this.addExaminersectionalFormGroup.get("Answersectional") as FormArray
  }

 

  get optionsectional() : FormArray {
    return this.addExaminersectionalFormGroup.get("optionsectional") as FormArray
  }

 
  openDialogdigram(data:any,i:any){
    this.dialogRef.open(PopUpComponent,{
      data : {
        Anss2 : data[i]?.Anss2
      }
    });

    
  }

  openDialogdigram1(data:any,i:any){
    this.dialogRef.open(PopUpComponent,{
      data : {
        Anss3 : data[i]?.Anss3
      }
    });

    
  }
 
  openDialog(data:any,i:any){
    this.dialogRef.open(PopUpComponent,{
      data : {
        Anss3ServitudePlan1 : data[i]?.Anss3ServitudePlan1
      }
    });

    
  }

  openDialog1(data:any,i:any){
    this.dialogRef.open(PopUpComponent,{
      data : {
        Anss3ServitudePlan : data[i]?.Anss3ServitudePlan
      }
    });

    
  }

  openDialogGereralPlanEx(data:any,i:any){
    this.dialogRef.open(PopUpComponent,{
      data : {
        Anss3GereralPlan1 : data[i]?.Anss3GereralPlan1
      }
    });

    
  }

  openDialogGereralPlanSc(data:any,i:any){
    this.dialogRef.open(PopUpComponent,{
      data : {
        Anss3GereralPlan : data[i]?.Anss3GereralPlan
      }
    });

    
  }

  openDialogsectionalEx(data:any,i:any){
    this.dialogRef.open(PopUpComponent,{
      data : {
        Anss3sectional : data[i]?.Anss3sectional
      }
    });

    
  }

  openDialogsectionalSc(data:any,i:any){
    this.dialogRef.open(PopUpComponent,{
      data : {
        Anss3sectional1 : data[i]?.Anss3sectional1
      }
    });

    
  }

  



}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { GlopalSitting } from '../../shared/glopalSitting.services';

@Component({
  selector: 'app-write-status',
  templateUrl: './write-status.component.html',
  styleUrls: ['./write-status.component.css']
})
export class WriteStatusComponent implements OnInit , OnDestroy {
  hightNum !: number;
  hight!:string;
  color = ["aqua","blueviolet","burlywood","chartreuse","cornflowerblue","darkslategrey","gold","green","magenta"]
  index =0;
  fontFamily=["'Roboto', sans-serif","'Grey Qo', cursive","'Gluten', cursive","'Roboto Mono', monospace","Playfair Display', serif"]
  indexFont =0;
  addStoryForm!:FormGroup
  
  constructor(private Glopal : GlopalSitting) { }
  ngOnDestroy(): void {
    this.Glopal.mainHeader.next("MainHeader");
  }

  ngOnInit(): void { 
    this.Glopal.mainHeader.next("None")
    this.addStoryForm= new FormGroup({
      'writeStory':new FormControl(null,Validators.minLength(1))
    })
   this.hightNum= window.innerHeight;
   this.hight=this.hightNum.toString()+"px";
   console.log(this.addStoryForm)
  }
 
  getcolor(){
    return this.color[this.index]
  }
  changeColor(){
    this.index++;
    if(this.index>(this.color.length-1)){
      this.index=0;
    }

  }

  getFont(){
    return this.fontFamily[this.indexFont]
  }
  changeFonts(){
    this.indexFont++;
    if(this.indexFont>(this.fontFamily.length-1)){
      this.indexFont=0;
    }

  }

  showMainHeader(){
  this.Glopal.mainHeader.next("MainHeader");
  }
}

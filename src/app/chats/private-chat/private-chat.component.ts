import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlopalSitting } from 'src/app/shared/glopalSitting.services';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit , OnDestroy {
   hight!:number;
  constructor(private Glopal : GlopalSitting) { }
  ngOnDestroy(): void {
    this.Glopal.mainHeader.next("MainHeader");
    
  }

  ngOnInit(): void {
    this.Glopal.mainHeader.next("None");
    this.hight=window.innerHeight;
   
  }
  h(){
   
    
    return this.hight+"px";
  }
  collapsed = true;
}

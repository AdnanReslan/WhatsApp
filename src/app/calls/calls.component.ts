import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlopalSitting } from '../shared/glopalSitting.services';
import { User } from '../shared/user';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit , OnDestroy{
  
  calls=[new User("Wasim halbi","4/4/2020","assets/wasim.jpg","assets/wasim.jpg")]
  constructor(private Glopal : GlopalSitting) { }
  ngOnDestroy(): void {
    this.Glopal.mainHeader.next("MainHeader");
  }

  ngOnInit(): void {
    
  }
  NewCallHeader(){
    this.Glopal.mainHeader.next("NewCallHeader");
  }
}

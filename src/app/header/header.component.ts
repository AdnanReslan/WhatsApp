import { Component, OnInit } from '@angular/core';
import { GlopalSitting } from '../shared/glopalSitting.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  nav ="MainHeader";
  
  constructor(private Glopal : GlopalSitting) { }

  ngOnInit(): void {
    this.Glopal.mainHeader.subscribe(res=>{
      this.nav=res;
    })
  }
  onsearsh(){
   this.Glopal.mainHeader.next("SearchHeader");
  }
  onbackup(){
    this.Glopal.mainHeader.next("MainHeader");
  }
  
}
 
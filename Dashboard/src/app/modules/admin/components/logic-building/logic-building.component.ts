import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-logic-building',
  templateUrl: './logic-building.component.html',
  styleUrls: ['./logic-building.component.css']
})
export class LogicBuildingComponent implements OnInit {

  userData: any=[];
  userId: any;

  constructor(private adm:SharedService) { 
    this.adm.ppcData().subscribe((data: any)=>{
      console.log(data);
      this.userData= data.data;
    })
  }

  getValue(value:any){
    //console.log(value.P_Id);
   this.userId=value.P_Id;
   //console.log(this.userInfo)
}
  

  ngOnInit(): void {
    console.log(this.userId);
  }
  
}


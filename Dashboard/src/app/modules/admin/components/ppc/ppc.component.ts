import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ppc',
  templateUrl: './ppc.component.html',
  styleUrls: ['./ppc.component.css']
})
export class PpcComponent implements OnInit {

  
  userData: any=[];
userId:any=null;
  constructor(private ppc:SharedService) { 
    this.ppc.ppcData(5).subscribe((data: any)=>{
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


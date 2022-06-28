import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { PpcComponent } from '../ppc/ppc.component';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userData: any=[];
user:any;
  constructor(private update:SharedService, private ppcC:PpcComponent) { 
  //this.user=this.ppcC.userId;
  //console.log(this.user);
  
  
  
  
  
    //   this.update.ppcData().subscribe((data: any)=>{
    
  //     // console.log(Object.values(data.data[2]))
  //     // this.userData= Object.values(data.data[2]);
      
  // })

}
  ngOnInit(): void {
  }

}

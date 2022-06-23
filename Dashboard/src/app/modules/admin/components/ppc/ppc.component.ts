import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ppc',
  templateUrl: './ppc.component.html',
  styleUrls: ['./ppc.component.css']
})
export class PpcComponent implements OnInit {

  
  userData: any=[];

  constructor(private adm:SharedService) { 
    this.adm.ppcData().subscribe((data: any)=>{
      console.log(data);
      this.userData= data.data;
    })
  }
  
  ngOnInit(): void {
  }
}

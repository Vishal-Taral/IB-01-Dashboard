import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { internship } from 'src/app/internship';
import { SharedService } from 'src/app/shared.service';
import { DataSource } from '@angular/cdk/table';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
  ngOnInit(): void {
  }


}

import { Component, OnInit, Input } from '@angular/core';
import {Candidat} from '../model/candidat';
import {User} from '../model/user';



@Component({
  selector: 'app-candidat-item',
  templateUrl: './candidat-item.component.html',
  styleUrls: ['./candidat-item.component.css']
})
export class CandidatItemComponent implements OnInit {

  @Input() candidat:Candidat;
  @Input() user:User;
  
  
  constructor() { }

  ngOnInit() {
  }

}

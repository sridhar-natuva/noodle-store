import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoodlesService } from 'src/app/services/noodles.service';

@Component({
  selector: 'app-noodles-list',
  templateUrl: './noodles-list.component.html',
  styleUrls: ['./noodles-list.component.scss']
})
export class NoodlesListComponent implements OnInit {

  restarents$: Observable<any>;  
  constructor(private _noodleService: NoodlesService) { }


  ngOnInit(): void {
    this.restarents$ = this._noodleService.getAllNoodleStores();
  }


}

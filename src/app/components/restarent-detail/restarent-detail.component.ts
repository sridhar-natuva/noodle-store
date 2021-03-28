import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restarent-detail',
  templateUrl: './restarent-detail.component.html',
  styleUrls: ['./restarent-detail.component.scss']
})
export class RestarentDetailComponent implements OnInit {

  current_item: any;
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      console.log(res);
      this.current_item = window.history.state;
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss']
})
export class PaintingsComponent implements OnInit {


  paintingObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.paintingObservable = this.getPainting('/painting');
  }

  getPainting(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}

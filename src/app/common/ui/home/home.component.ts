import { Component, OnInit } from '@angular/core';
import { IDictionary } from '../../shared/interfaces/IDictionary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  test!:IDictionary | null;
  categories:IDictionary[] = [];

  ngOnInit(): void {
  }

}

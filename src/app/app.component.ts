import { Component, Input } from '@angular/core';
import { str as data } from "./data/data";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontAngula';
  si = data;
}

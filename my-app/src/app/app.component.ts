import { Component } from '@angular/core';
import {LocalStorageModule} from 'angular-2-local-storage';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';


}

import { Component } from '@angular/core';
import { SearchPageComponent } from "../pokemon/pages/search-page/search-page.component";

@Component({
  selector: 'app-dashboard',
  imports: [SearchPageComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {

}

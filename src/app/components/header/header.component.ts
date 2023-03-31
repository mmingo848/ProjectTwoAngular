import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'angular-project';
  showAddTask: boolean
  subscription: Subscription

  constructor(private uiService:UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(Value => this.showAddTask = Value)
  }

  toggleAddTask(){
    this.uiService.toggelAddTask()
  }

  hasRoute(route: string){
    return this.router.url === route
  }

}

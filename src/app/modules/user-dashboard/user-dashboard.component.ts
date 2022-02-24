import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.interface';
import { SubscriptionsContainer } from 'src/app/shared/helpers/subscriptions-container';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit, OnDestroy {

  users: User[] = [];
  p: number = 1;
  subs = new SubscriptionsContainer()
  constructor(private api: UserService, private notification: ToastrService) { }
  
  ngOnDestroy(): void {
    this.subs.dispose();
  }

  ngOnInit(): void {
   this.loadData();
  }

loadData(){
  this.subs.add = this.api.sendGet('http://localhost:1337/get-users').subscribe(res => {
    this.users = res.data;
  });
}

  deleteUser(id:any){
   this.subs.add = this.api.sendDelete('http://localhost:1337/delete-user/'+id).subscribe(res => {
      this.notification.success('User deleted successfully!')
      this.loadData();
    }, error => {
      this.notification.error('User no deleted', error)
    })
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.interface';
import { SubscriptionsContainer } from 'src/app/shared/helpers/subscriptions-container';


@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit, OnDestroy {

  userForm: FormGroup;
  user: User;
  id: string;
  title: string ='Create User';
  subs = new SubscriptionsContainer();
  constructor(
    private formB: FormBuilder, 
    private api: UserService, 
    private route: ActivatedRoute, 
    private router: Router,
    private notification: ToastrService,
    ) { 
    this.userForm = this.formB.group({
      name:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required],
      age:[0, Validators.required],
    });
    this.id = this.route.snapshot.paramMap.get('id')!
  }
  ngOnDestroy(): void {
    this.subs.dispose();
  }

  ngOnInit(): void {
    this.isEdit();
  }

  addUser(){
    if (this.userForm.valid) {
      const USER: User = {
        name: this.userForm.get('name')?.value,
        lastName: this.userForm.get('lastName')?.value,
        email: this.userForm.get('email')?.value,
        age: this.userForm.get('age')?.value,
        
      };
      this.user = USER;
      
    }else{
      return
    };

     if (this.id !== null) {
      this.subs.add = this.api.sendPut(`http://localhost:1337/update-user/${this.id}`,this.user).subscribe(res => {
        this.notification.success('User updated successfully!')
        this.userForm.reset();
        this.router.navigate(['/dashboard/users-dashboard']);
      }) , error => {
        this.notification.error('User no updated');
        console.log('algo salio mal', error);        
      };

    } else {
    this.subs.add = this.api.sendPost('http://localhost:1337/create-user',this.user).subscribe(res => {
      this.notification.success('User registered Successfully')
      this.router.navigate(['/dashboard/users-dashboard'])
    }, error => {
      this.notification.error('User no Created', error)
    })
  }

};

isEdit() {

  if (this.id !== null) {
    this.title = 'Edit User';    
  this.subs.add = this.api.sendGet(`http://localhost:1337/get-user/${this.id}`).subscribe((res: User) => {
      this.userForm.setValue({
        name: res.name,
        lastName: res.lastName,
        email: res.email,
        age: res.age,
      })
    })
  }
};

}

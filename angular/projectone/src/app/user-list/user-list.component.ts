import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
// export class UserListComponent {
//   users = ['User 1', 'User 2', 'User 3'];
// }
export class UserListComponent implements OnInit {
  users: any[] = [];  // Array to store API data

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Call the service to fetch data
    // Optionally, you can fetch users on component load
    // this.fetchUsers();
  }
    fetchUsers(): void {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;  // Store the data from API into users array
    });
  }
}
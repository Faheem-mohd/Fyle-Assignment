import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { WorkoutService } from '../workout.service';
import { UserData } from '../workout.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  users: UserData[] = [];
  filteredUsers: MatTableDataSource<UserData>;
  displayedColumns: string[] = ['name', 'workouts'];
  searchName: string = '';
  filterType: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private workoutService: WorkoutService) {
    this.filteredUsers = new MatTableDataSource<UserData>(this.users);
  }

  ngOnInit(): void {
    this.users = this.workoutService.getUsers();
    this.filteredUsers.data = this.users;
  }

  ngAfterViewInit(): void {
    this.filteredUsers.paginator = this.paginator;
  }

  filterUsers(): void {
    let filteredData = this.users;

    if (this.searchName) {
      filteredData = filteredData.filter(user => user.name.toLowerCase().includes(this.searchName.toLowerCase()));
    }

    if (this.filterType) {
      filteredData = filteredData.filter(user => user.workouts.some(workout => workout.type.toLowerCase().includes(this.filterType.toLowerCase())));
    }

    this.filteredUsers.data = filteredData;
  }
}

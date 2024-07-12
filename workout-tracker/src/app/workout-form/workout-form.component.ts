import { Component } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { UserData, Workout } from '../workout.model';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  constructor(private workoutService: WorkoutService) {}

  addUser(): void {
    if (this.userName && this.workoutType && this.workoutMinutes) {
      let users = this.workoutService.getUsers();
      const user = users.find(u => u.name.toLowerCase() === this.userName.toLowerCase());

      if (user) {
        user.workouts.push({ type: this.workoutType, minutes: this.workoutMinutes });
      } else {
        users.push({ id: users.length + 1, name: this.userName, workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }] });
      }

      this.workoutService.saveUsers(users);
      this.userName = '';
      this.workoutType = '';
      this.workoutMinutes = 0;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { UserData } from '../workout.model';

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css']
})
export class WorkoutChartComponent implements OnInit {
  users: UserData[] = [];
  chartLabels: string[] = [];
  chartData: any[] = [];
  chartOptions = {
    responsive: true
  };

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.users = this.workoutService.getUsers();
    this.prepareChartData();
  }

  prepareChartData(): void {
    this.chartLabels = this.users.map(user => user.name);
    const workoutTypes = [...new Set(this.users.flatMap(user => user.workouts.map(workout => workout.type)))];

    this.chartData = workoutTypes.map(type => {
      return {
        label: type,
        data: this.users.map(user => {
          const workout = user.workouts.find(workout => workout.type === type);
          return workout ? workout.minutes : 0;
        })
      };
    });
  }
}

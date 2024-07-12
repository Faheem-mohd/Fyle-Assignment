import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutFormComponent } from './workout-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { WorkoutService } from '../workout.service';

describe('WorkoutFormComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutFormComponent ],
      imports: [ FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule ],
      providers: [ WorkoutService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a user', () => {
    component.userName = 'Test User';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;
    component.addUser();

    const users = component['workoutService'].getUsers();
    expect(users.length).toBe(4);
    expect(users[3].name).toBe('Test User');
  });
});

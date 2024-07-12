import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get initial users', () => {
    const users = service.getUsers();
    expect(users.length).toBe(3);
  });

  it('should save users', () => {
    const users = service.getUsers();
    users.push({ id: 4, name: 'New User', workouts: [{ type: 'Running', minutes: 30 }] });
    service.saveUsers(users);

    const newUsers = service.getUsers();
    expect(newUsers.length).toBe(4);
  });
});

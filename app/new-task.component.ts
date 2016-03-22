import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="row">
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <select class="col-sm-8 input-lg filter" #newPriority>
        <option value="low" selected="selected">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    <button (click)="addTask(newDescription, newPriority)" class="btn-success btn-lg add-button">Add</button>
    </div>
  </div>
  `
})

export class NewTaskComponent{
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement) {
    console.log(userDescription);
    console.log(userPriority);
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value]);
    userDescription.value = "";
    userPriority.value = "";
  }
}

import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "priority",
  pure: true
})

export class PriorityPipe implements PipeTransform {
  transform(input: Task[], args) {
    var priorityLevel = args[0];
    if(priorityLevel === "low") {
      return input.filter((task) => {
        return task.priority === "low";
      });
    } else if (priorityLevel === "medium"){
      return input.filter((task)  => {
        return task.priority === "medium"
      });
    } else if (priorityLevel === "high") {
      return input.filter((task)  => {
        return task.priority === "high"
      });
    } else {
      return input;
    }
  }
}

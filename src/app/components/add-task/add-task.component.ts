import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();
  submitted = false;

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }

  save() {
    this.taskService.createTask(this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/viewTask']);
  }

}

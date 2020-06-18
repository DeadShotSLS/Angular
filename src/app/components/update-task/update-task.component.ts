import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
  _id: string;
  task: Task;

  constructor(private route: ActivatedRoute,private router: Router,
    private taskService: TaskService) { }

  ngOnInit(): void {
    this.task = new Task();

    this._id = this.route.snapshot.params['_id'];

    this.taskService.getTask(this._id)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      }, error => console.log(error));
  }

  updateTask() {
    this.taskService.updateTask(this._id, this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
    this.gotoList();
  }

  onSubmit() {
    this.updateTask();
  }

  gotoList() {
    this.router.navigate(['/viewTask']);
  }

}

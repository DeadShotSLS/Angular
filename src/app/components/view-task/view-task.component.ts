import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  _id: string;
  status: boolean;


  // task: Task = new Task();
  task: Observable<Task[]>;

  constructor(private taskService: TaskService,
    private router: Router) {}

  ngOnInit(): void{
    this.reloadData();

  }
  reloadData() {
    this.task = this.taskService.getTasks();

  }

  doneTask(_id: string, status: boolean){
    
    this.taskService.updateStatus(_id, this.status)
      .subscribe(data => console.log(data), error => console.log(error));

    this.reloadData();
  }

  deleteTask(_id: string) {
    this.taskService.deleteTask(_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateTask(_id: string){
    this.router.navigate(['/updateTask',_id]);
  }

}

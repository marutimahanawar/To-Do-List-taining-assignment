import { Component, Input, OnInit } from '@angular/core';
import { TodosereviceService } from '../todoserevice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { log } from 'node:console';

// Define an interface for the task
interface Task {
  assignedTo?: string;
  status?: string;
  dueDate?: string; // You can also use Date if preferred
  priority?: string;
  description?: string;
  id?: number; // or string, depending on your ID type
}

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  task:any
  taskid:any

  constructor(private taskService: TodosereviceService, private router: Router,private rout:ActivatedRoute) {}

  ngOnInit() {
      this.taskid=this.rout.snapshot.paramMap.get('id')
      if(this.taskid)
      {
        this.taskService.getupdatetask(this.taskid).subscribe((response)=>{
          this.task=response
          
        })
      }
  }

  onSubmit(taskData:any) {
    console.log(taskData);
    
    if (this.task?.id) { 
      console.log(this.taskid);
      
      this.taskService.updateTask(this.task.id, taskData).subscribe((response) => {
        if(response)
        {
          alert('Task updated successfully!');
          this.router.navigate(['/']);
        }
      });
    } else {
      console.error('Task ID is not defined. Cannot update the task.');
    }
  }
  onCancel()
  {
      this.router.navigate(['/']); 
  }
}

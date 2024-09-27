import { Component } from '@angular/core';
import { NgForm ,FormsModule} from '@angular/forms';
import { TodosereviceService } from '../todoserevice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {

  constructor(private taskService:TodosereviceService,private router:Router) {}

  onSubmit(taskForm: NgForm) {
    if (taskForm.valid) {
      const taskData = {
        assignedTo: taskForm.value.assignedTo,
        status: taskForm.value.status,
        dueDate: taskForm.value.dueDate,
        priority: taskForm.value.priority,
        description: taskForm.value.description
      };

      this.taskService.createTask(taskData).subscribe(
        (response) => {
          console.log('Task created successfully', response);
          taskForm.reset();
          alert('Task created successfully!');
        },
        (error) => {
          console.error('Error creating task:', error);
          alert('Failed to create task.');
        }
      );
    }
  }
  onCancel() {
    this.router.navigate(['/']); 
  }

}

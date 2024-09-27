import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { TodosereviceService } from './todoserevice.service';
import { NgFor } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgIf,NgFor,ConfirmDialogComponent,MatDialogModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  length:number |undefined
  showWelcome: boolean = true;
  tasks: any[] = []; 
  constructor(private router:Router,private taskService:TodosereviceService,private dialog:MatDialog) {}

  ngOnInit() {
    this.loadTasks();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide welcome message if the route is not the root
        this.showWelcome = this.router.url === '/';
        this.loadTasks()
      }
    });
  }
  loadTasks(): void {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data; // Store fetched tasks
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
  

  deleteTask(taskId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
  
    dialogRef.afterClosed().subscribe((result:any) => {
      if (result) {
        this.taskService.deleteTask(taskId).subscribe(
          (response) => {
            console.log('Task deleted successfully:', response);
            this.tasks = this.tasks.filter(task => task.id !== taskId); 
          },
          (error) => {
            console.error('Error deleting task:', error);
          }
        );
      }
    });
  }

  openEditDialog(task: any) {
    this.router.navigate(['update', task.id]); 
  }
  Refersh(){
    this.router.navigate(['/']); 
  }
}

import { Injectable } from '@angular/core';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() { 
    this.tasks =[

      //{title: 'write', description: 'I have to write', hide:true},
      //{title: 'create website', description: 'I have to create website', hide:true}
    ]

  }

  getTasks(){

    if(localStorage.getItem('tasks')==null){

      return this.tasks;
    }else{

      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      return this.tasks
    }
  }

  addTask(task: Task){
    //Lo almacena en la variable de la clase
    this.tasks.push(task);
    let tasks: Task[]=[];
    //tasks.push(task);
    //localStorage.setItem('tasks', JSON.stringify(tasks));
    
    //Si el local storage esta vacio
    if(localStorage.getItem('tasks')== null){

      //añade al arreglo
      tasks.push(task);
      //guarda en local storage tranformando JSON a String
      localStorage.setItem('tasks', JSON.stringify(tasks));

    }else{

      //Si hay datos, los obtiene tranformando String a JSON
      tasks = JSON.parse(localStorage.getItem('tasks'));
      //Lo añade al arreglo
      tasks.push(task);
      //Lo guarda otra vez ahciendo la conversion
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    
    //me quede en 1:03:00
  }

  deleteTask(task: Task ){
    for(let i=0; i < this.tasks.length;i++){

      //Recorre los datos del servicio
      if(task == this.tasks[i]){
        //Funcion para eliminar
        this.tasks.splice(i,1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));

      }

    }

  }
}

class List {
    tasks:Task[];

    constructor(tasks:Task[]) {
        this.tasks = tasks;
    };

    add_task(task:Task[]){
        //TODO: create tasks
        if (task.length > 0) {
            this.tasks.push(...task);
            console.log(`${task.length} task added to the list`)
        } else {
            console.log("Task should be more than three words")
        }
    }

    remove_task(task:Task){
        //TODO: remove tasks
        const index = this.tasks.indexOf(task);
        if(index !== -1){
            this.tasks.splice(index, 1);
            console.log(`Removed task: ${task.title}`)
        } else {
            console.log(`${task.title} not found`)
        }
    }

    update_task(task:Task, newTask:Task){
        //TODO: update lists 
        const index = this.tasks.indexOf(task)
        if(index !== -1){
            this.tasks.splice(index, 1, newTask)
            console.log(`${task.title} has been updated with ${newTask.title}`)
        } else {
            console.log(`${task.title} not found`)
        }
    }

    list_all_tasks(){
        // List tasks in a straight line, separated by commas.
        if (this.tasks.length > 0) {
            const titles = this.tasks.map(task => task.title).join(', ');
            console.log(`These are all your tasks: ${titles}`);
        } else {
            console.log("No tasks in the list.");
        }
    }

    completing_task(task:Task){
        //Turn task to complete
        if (task.completed) {
            this.tasks.push(task)
            task.completed = true
            task.complete()
        } else {
            console.log("Task is already completed")
        }
    }
}


class Task {
    title:string;
    description:string;
    completed:boolean = false;
    protected readonly id: number;

    constructor(title:string, description:string, completed:boolean, id:number){
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.id = id;
    }

    complete() {
        //TODO: complete lists part 1
        if(this.completed){
            this.completed  = false;
            console.log(`Task ${this.title} is completed`)
        } else {
            this.completed = true;
            console.log(`Task ${this.title} is not completed`)
        }
    }
}

const task1 = new Task("Task 1", "Description 1", false, 1);
const task2 = new Task("Task 2", "Description 2", false, 2);
const List1 = new List([task1, task2]);
List1.add_task([task1,task2])
List1.remove_task(task1)
List1.list_all_tasks()
List1.update_task(task2, new Task("Task 3", "Description 3", false, 3))
List1.list_all_tasks()



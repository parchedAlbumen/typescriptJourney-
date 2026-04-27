class TaskManager {
    tasks: Task[] = [];

    addTask(title: string, priority: Priority, dueDate?: string) {
        const task: Task = {
            id: this.tasks.length + 1,
            title,
            priority,
            dueDate,
            status: Status.Todo
        };
    
        this.tasks.push(task);
    }

    updateStatus(id: number, newStatus: Status) {
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            
            if (task && task.id === id) {
                task.status = newStatus;
                console.log("successfully changed the status");
                return;
            }
        }
        
        console.log("ID does not exist!");
        return;
    }   

    filterByStatus(status: Status) {
        const newTasks: Task[] = [];
        this.tasks.forEach(item => {
            if (item.status === status) {
                newTasks.push(item);
            }
        })

        return newTasks;
    }
    
    filterByPriority(priority: Priority) {
        const newTasks: Task[] = [];
        this.tasks.forEach(item => {
            if (item.priority === priority) {
                newTasks .push(item);
            }
        })

        return newTasks;
    }

    printTasks(tasks: Task[]) {
        tasks.forEach(task => {
            console.log(task);
            console.log("\n");
        })
    } 
    
    deleteTask(targetId: number) {
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task && task.id === targetId) {
                this.tasks.splice(i, 1);
                return;
            }   
        }
    }
    
    getTasks() {
        return this.tasks;
    }
}

interface Task {
    status: Status;
    id: number;
    title: string;
    priority: Priority;
    dueDate?: string; //question mark makes it optional
}

enum Status {
    Todo,
    InProgress,
    Done
}

enum Priority {
    Low,
    Medium,
    High
}

const manager = new TaskManager();

manager.addTask("Buy Groceries", Priority.Low, "2026-05-01");
manager.addTask("Finish report", Priority.High);
manager.printTasks(manager.getTasks());

//update check
manager.updateStatus(1, Status.InProgress);
manager.printTasks(manager.filterByStatus(Status.InProgress));
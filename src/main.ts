class TaskManager {
    tasks: Task[] = [];

    addTask(task: Task) {
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
}

interface Task {
    status: Status;
    id: number;
    title: string;
    priority: Priority;
    dueDate?: String; //question mark makes it optional
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
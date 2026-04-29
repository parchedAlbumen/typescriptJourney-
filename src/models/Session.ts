import type { Exercise } from "./Exercise";

export class Session {
    private date: string;
    private exercises: Exercise[];

    constructor(date: string, exercises: Exercise[]) {
        this.date = date;
        this.exercises = exercises;
    }

    public addExercise(exercise: Exercise): void {
        this.exercises.push(exercise);
        console.log("successfully added an exercise");
    }

    public getTotalCalories(): number {
        let sum: number = 0;
        this.exercises.forEach(exercise => {    
            sum += exercise.caloriesBurned();
        });
        return sum;
    }

    public getTotalDuration(): number {
        let total: number = 0;
        this.exercises.forEach(exercise => {
            total += exercise.getDurationMinutes();
        })
        return total;
    }

    public printSummary(): void {
        console.log(this.date);
        this.exercises.forEach(exer => {
            console.log(exer.getSummary);
        })
    }
}
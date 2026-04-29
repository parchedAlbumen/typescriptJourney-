import { Exercise } from "./Exercise";  

class StrengthExercise extends Exercise {
    private sets: number 
    private reps: number
    private weightKg: number 
    
    constructor(name: string, durationMinutes: number, s: number, r: number, w: number) {
        super(name, durationMinutes);
        this.sets = s;
        this.reps = r;
        this.weightKg = w;
    }

    public getSets(): number {
        return this.sets;
    }

    public getReps(): number {
        return this.reps;
    }

    public getWeightKg(): number {
        return this.weightKg;
    }

    public setSets(newSet: number): void {
        this.sets = newSet;
    }

    public setReps(newRep: number): void {
        this.reps = newRep;
    }

    public setWeightKg(newWeight: number): void {
        this.weightKg = newWeight;
    }

    public caloriesBurned(): number {
        return this.sets * this.reps * 0.5;
    }

    public getSummary(): string {
        return `${this.getName()} - ${this.sets}x${this.reps} @ ${this.weightKg}kg, ~${this.caloriesBurned} cal`;
    }
}
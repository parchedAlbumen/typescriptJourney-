export abstract class Exercise {
    private name: string;
    private durationMinutes: number;

    constructor(name: string, durationMinutes: number) {
        this.name = name;
        this.durationMinutes = durationMinutes;
    }

    public abstract getSummary(): string;
    public abstract caloriesBurned(): number;

    public getName(): string {
        return this.name;
    }

    public getDurationMinutes(): number {
        return this.durationMinutes;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public setDurationMinutes(newNumber: number): void {
        this.durationMinutes = newNumber;
    }
    
    public printInfo(): void {
        var info: string = this.getSummary();
        console.log(info);
    }
}
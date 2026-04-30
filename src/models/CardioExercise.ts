import { Exercise } from "./Exercise";

export class CardioExercise extends Exercise {
    private distanceKm: number;

    constructor(name: string, durationMinutes: number, distanceKm: number) {
        super(name, durationMinutes);
        this.distanceKm = distanceKm;
    }

    public caloriesBurned(): number {
        return this.getDurationMinutes() * 8;
    }

    public getSummary(): string {
        let summary = `${this.getName()} - ${this.getDurationMinutes()}, ${this.distanceKm}km, ~${this.caloriesBurned()} cal`;
        return summary;
    }

    public setDistanceKm(distanceKm: number): void {
        this.distanceKm = distanceKm;
    }

    public getDistanceKm(): number {
        return this.distanceKm;
    }

}
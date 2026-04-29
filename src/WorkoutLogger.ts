import type { Session } from "./models/Session";

class WorkoutLogger {
    private sessions: Session[];

    constructor(sessions: Session[]) {
        this.sessions = sessions;
    }

    public logSession(session: Session): void {
        this.sessions.push(session);
    }

    //predicate is a variable name that is a function that returns a boolean if the condition is properly met
    public filterSessions(predicate: (s: Session) => boolean): Session[] {
        return this.sessions.filter(predicate);
    }

    //formatter is a variable of type function, basically.
    public getSummaryReport(formatter: (s: Session) => string): string[] {
        return this.sessions.map(formatter);
    }

    public getTotalCaloriesAllTime(): number {
        let sum: number = 0;
        this.sessions.forEach(exercise => {
            sum += exercise.getTotalCalories();
        }); 
        return sum;
    }
}
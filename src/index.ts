import { CardioExercise } from "./models/CardioExercise";
import { StrengthExercise } from "./models/StrengthExercise";
import { Session } from "./models/Session";
import { WorkoutLogger } from "./WorkoutLogger";

// ─── 1. Create Exercises ───────────────────────────────────────────────
const morningRun = new CardioExercise("Morning Run", 30, 5);
const cycling = new CardioExercise("Cycling", 45, 15);
const benchPress = new StrengthExercise("Bench Press", 20, 4, 10, 80);
const squats = new StrengthExercise("Squats", 25, 4, 12, 100);

// ─── 2. Create Sessions ────────────────────────────────────────────────
const sessionOne = new Session("2025-01-01");
sessionOne.addExercise(morningRun);
sessionOne.addExercise(benchPress);

const sessionTwo = new Session("2025-01-03");
sessionTwo.addExercise(cycling);
sessionTwo.addExercise(squats);

const sessionThree = new Session("2025-01-05");
sessionThree.addExercise(new CardioExercise("Light Jog", 20, 3));
sessionThree.addExercise(new StrengthExercise("Dumbbell Curl", 15, 3, 8, 15));

// ─── 3. Log Sessions ───────────────────────────────────────────────────
const logger = new WorkoutLogger([]);
logger.logSession(sessionOne);
logger.logSession(sessionTwo);
logger.logSession(sessionThree);

// ─── 4. Print Each Session Summary ────────────────────────────────────
console.log("=== ALL SESSION SUMMARIES ===\n");
sessionOne.printSummary();
console.log();
sessionTwo.printSummary();
console.log();
sessionThree.printSummary();

// ─── 5. Filter Sessions Over 200 Calories ─────────────────────────────
console.log("\n=== SESSIONS WITH > 200 CALORIES ===\n");
const highCalSessions = logger.filterSessions(s => s.getTotalCalories() > 200);
if (highCalSessions.length === 0) {
    console.log("No sessions found.");
} else {
    highCalSessions.forEach(s => s.printSummary());
}

// ─── 6. Generate Report with Custom Formatter ─────────────────────────
console.log("\n=== WORKOUT REPORT ===\n");
const report = logger.getSummaryReport(s =>
    `${s.getTotalDuration()} min | ${s.getTotalCalories()} cal`
);
report.forEach(line => console.log(line));

// ─── 7. Total Calories All Time ────────────────────────────────────────
console.log("\n=== TOTAL CALORIES ALL TIME ===\n");
console.log(`${logger.getTotalCaloriesAllTime()} calories burned total`);


//got chat to generate the test for this ez prac
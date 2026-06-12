/** 
//1. Understand
Input: How an array of question objects and an array of simulated player answers.
Output: Understand how formatted quiz experience showing questions, feedback on answers, a total score, and a final grade.
Edge Case: If a player gets 0% or 100%, the grade logic must handle the boundaries correctly.

2. Plan (Pseudocode)
Initialize score at 0.
Loop through the questions array.
Inside the loop:
Print the question and its options.
Compare the player's answer to the correct answer.
If correct, add 1 to score and print "Correct!".
If wrong, print the correct answer.
After the loop, calculate the percentage and determine the letter grade.
Print the final results.**/

//3. Execute (The Code)

// Step 1: Starter Data
let questions = [
    { question: "What is the capital of Nigeria?", options: "A) Lagos B) Abuja C) Kano D) Bauchi", answer: "B" },
    { question: "What does HTML stand for?", options: "A) How To Make Links B) HyperText Markup Language C) Home Tool Markup Language D) Hyper Transfer Main Language", answer: "B" },
    { question: "Which operator means strict equality in JavaScript?", options: "A) == B) = C) === D) !=", answer: "C" },
    { question: "What is 2 + 2 * 3 in JavaScript?", options: "A) 12 B) 8 C) 10 D) 6", answer: "B" },
    { question: "Which of these is a falsy value?", options: "A) [] B) 'false' C) 0 D) ''", answer: "C" }
];

let playerAnswers = ["B", "B", "A", "B", "C"];
let score = 0;

console.log("=== QUIZ GAME ===");

// Step 2: The Loop used
for (let i = 0; i < questions.length; i++) {
    console.log(`Question ${i + 1}: ${questions[i].question}`);
    console.log(`Options: ${questions[i].options}`);
    console.log(`Your answer: ${playerAnswers[i]}`);

    if (playerAnswers[i] === questions[i].answer) {
        console.log("Result: Correct!");
        score++;
    } else {
        console.log(`Result: Wrong! The answer was ${questions[i].answer}`);
    }
    console.log("");
}

// Step 3: Showing grading Logic
let percentage = (score / questions.length) * 100;
let grade;

if (percentage >= 80) grade = "A";
else if (percentage >= 60) grade = "B";
else if (percentage >= 40) grade = "C";
else grade = "F";

console.log("=== RESULTS ===");
console.log(`Score: ${score}/${questions.length} (${percentage}%)`);
console.log(`Grade: ${grade}`);

/**
//4. Reflect
Using an array of objects makes the data easy to manage. 
One thing that could go wrong is if the playerAnswers array is shorter than the questions array, 
which would result in undefined answers. 
In a real app, I would add a check to make sure both arrays match in length.**/
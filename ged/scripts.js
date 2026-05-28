    // 1. Set the initial time in seconds (e.g., 120 seconds = 2 minutes)
    let totalSeconds = 3600; 

    const timerElement = document.getElementById('timer-display');

    // 2. Run the countdown function every 1 second (1000 milliseconds)
    const countdownInterval = setInterval(function() {
        // Calculate minutes and remaining seconds
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        // Add a leading zero if the number is less than 10 (e.g., "05" instead of "5")
        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;

        // Update the display text on the screen
        timerElement.textContent = minutes + ":" + seconds;

        // 3. What happens when the time runs out
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval); // Stops the timer loop
            timerElement.textContent = "Time's Up!";
            
            // Trigger your game over action
            alert("Time is up! Let's return to the main menu.");
            window.location.href = "menu.html"; // Redirects them automatically
        }

        totalSeconds--; // Decrease total remaining time by 1 second
    }, 1000);

 const answers = {
  q1: "b",
  q2: "c",
  q3: "a",
  q4: "d",
  q5: "b",
  q6: "b",
  q7: "d", 
  q8: "c",
  q9: "b",
  q10: "a",
  q11: "d",
  q12: "c",
  q13: "c",
  q14: ["a", "d"],
  q15: "d",
  q16: "d",
  q17: "c",
  q18: "b",
  q19: "a",
  q20: ["a", "f", "g", "c"],
  q21: "b",
  q22: "d",
  q23: "d",
  q24: "b",
  q25: "a",
  q26: "b",
  q27: "c",
  q28: "b",
  q29a: "c",
  q29b: "b",
  q29c: "a",
  q29d: "d",
  q30: "d",
  q31: "c",
  q32: "a",
  q33: "c",
  q34: "aunt",
  q35: "b",
  q36: "d",
  q37: "a",
  q38: "b",
  q39: "c",
  q40: "d",
};

function checkAnswer(){

  let score = 0;

  let wrongAnswers = [];

  for(let key in answers){

    let correctAnswer = answers[key];

    // =========================
    // MULTI INPUT QUESTIONS
    // =========================
    if(Array.isArray(correctAnswer)){

      let userAnswers = [];

      for(let i = 0; i < correctAnswer.length; i++){

        let letter =
          String.fromCharCode(97 + i);

        let input =
          document.getElementById(
            key + letter
          );

        if(input){

          userAnswers.push(
            input.value
              .toLowerCase()
              .trim()
          );
        }
      }

      // compare without order
      let sortedUser =
        [...userAnswers].sort();

      let sortedCorrect =
        [...correctAnswer].sort();

      if(
        JSON.stringify(sortedUser)
        ===
        JSON.stringify(sortedCorrect)
      ){
        score++;
      }
      else{
        wrongAnswers.push(key);
      }

      continue;
    }

    // =========================
    // RADIO BUTTON
    // =========================
    let radio =
      document.querySelector(
        `input[name="${key}"]:checked`
      );

    if(radio){

      if(radio.value === correctAnswer){
        score++;
      }
      else{
        wrongAnswers.push(key);
      }

      continue;
    }

    // =========================
    // DROPDOWN or TEXT
    // =========================
    let element =
      document.getElementById(key);

    if(element){

      let userAnswer =
        element.value.toLowerCase().trim();

      if(userAnswer === correctAnswer){
        score++;
      }
      else{
        wrongAnswers.push(key);
      }
    }
  }

  // =========================
  // FINAL RESULT
  // =========================

  if(wrongAnswers.length > 0){

    alert(
      "Score: "
      + score
      + "\nWrong Questions: "
      + wrongAnswers.join(", ")
    );

  }
  else{

    alert(
      "Perfect Score! " + score
    );

  }
}
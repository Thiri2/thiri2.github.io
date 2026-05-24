    // 1. Set the initial time in seconds (e.g., 120 seconds = 2 minutes)
    let totalSeconds = 2100; 

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
  q1: "d",
  q2: "a",
  q3: "d",
  q4: "b",
  q5: "c",
  q6: "a",
  q7a: "b",
  q7b: "d",
  q8: "d",
  q9: "a",
  q10: "b",
  q11: "c",
  q12: "c",
  q13: "b",
  q14: "a",
  q15: "d",
  q16: "c",
  q17: "d",
  q18: "c",
  q19: "d",
  q20: "c",
  q21: "a",
  q22: "d"
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
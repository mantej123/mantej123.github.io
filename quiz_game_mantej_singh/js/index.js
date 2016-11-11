var qNum = 1;
var score = 0;

function rightAnswer() {
  alert("no way , you got it");
  qNum = qNum + 1;
  nextQuestion();
  score = score + 1;
  document.getElementById()
}

function wrongAnswer() {
  alert("Thats WRONG , HAHAHAHAHAH ");
  score = score - 1
}

function nextQuestion() {
  switch (qNum) {
    case 2:
      document.getElementById("q1").style.display = "none";
      document.getElementById("q2").style.display = "inherit";
      document.getElementById("answersOne").style.display = "none";
      document.getElementById("answersTwo").style.display = "inherit";
      break;

    case 3:
      document.getElementById("q2").style.display = "none";
      document.getElementById("q3").style.display = "inherit";
      document.getElementById("answersTwo").style.display = "none";
      document.getElementById("answersThree").style.display = "inherit";
      break;

    case 4:
      document.getElementById("q3").style.display = "none";
      document.getElementById("q4").style.display = "inherit";
      document.getElementById("answersThree").style.display = "none";
      document.getElementById("answersFour").style.display = "inherit";
      break;

    case 5:
      document.getElementById("q4").style.display = "none";
      document.getElementById("q5").style.display = "inherit";
      document.getElementById("answersFour").style.display = "none";
      document.getElementById("answersFive").style.display = "inherit";
      break;

    case 6:
      document.getElementById("q5").style.display = "none";
      document.getElementById("q6").style.display = "inherit";
      document.getElementById("answersFive").style.display = "none";
      document.getElementById("answersSix").style.display = "inherit";
      break;

    case 7:
      document.getElementById("q6").style.display = "none";
      document.getElementById("q7").style.display = "inherit";
      document.getElementById("answersSix").style.display = "none";
      document.getElementById("answersSeven").style.display = "inherit";
      break;

    case 8:
      document.getElementById("q7").style.display = "none";
      document.getElementById("q8").style.display = "inherit";
      document.getElementById("answersSeven").style.display = "none";
      document.getElementById("answersEight").style.display = "inherit";
      alert("Your score is: " + score);
      break;

  }
}
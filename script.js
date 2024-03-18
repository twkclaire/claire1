function toggleAnswer(question) {
    var answer = question.querySelector('.answer');
    if (answer.style.display === 'block') {
      answer.style.display = 'none'; // Hide answer if already visible
    } else {
      answer.style.display = 'block'; // Show answer if hidden
    }
  }
function toggleAnswer(question) {
    var answer = question.querySelector('.answer');
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block'; 
    }
  }

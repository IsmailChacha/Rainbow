alert('Welcome to Quiz Ninja');
const quiz = [
	['What is Superman\'s real name?', 'Clark Kent'],
	['What is Wonder Woman\'s real name?', 'Diana Prince'],
	['What is Batman\'s real name?', 'Bruce Wayne']
];

//Initialize score
let score = 0;

for (const [question, answer] of quiz)
{
	const response = prompt(question);
	if (response === answer)
	{
		alert('Correct!');
		score++;
	} else
	{
		alert(`Wrong!The correct answer is ${answer}`);
	}
}

alert(`Game over. Your score is ${score} point${score !== 1 ? 's' : ''}`);
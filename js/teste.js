// Questions that will be asked
const Questions = [{
	q: "Qual dos rappers mencionados foi assassinado?",
	a: [{ text: "Mano Brown", isCorrect: false },
	{ text: "Emicida", isCorrect: false },
	{ text: "Sabotage", isCorrect: true },
	{ text: "Tasha e Tracie", isCorrect: false }
	]

},
{
	q: "Qual faz parte do grupo Racionais MC’s?",
	a: [{ text: "Linn da Quebrada", isCorrect: false, isSelected: false },
	{ text: "Emicida", isCorrect: false },
	{ text: "Flora Matos", isCorrect: false },
	{ text: "Mano Brown", isCorrect: true }
	]

},
{
	q: "Qual deles possui mãe brasileira e pai nigeriano.",
	a: [{ text: "Negra Li", isCorrect: false, isSelected: false },
	{ text: "Tasha e Tacie", isCorrect: true },
	{ text: "Emicida", isCorrect: false },
	{ text: "Djonga", isCorrect: false }
	
	]

},
{
	q: "Qual das rappers mencionadas é LGBTQIA+?",
	a: [{ text: "Linn da Quebrada", isCorrect: true },
	{ text: "Tasha ou Tracie", isCorrect: false },
	{ text: "Negra Li", isCorrect: false },
	{ text: "Flora Matos", isCorrect: false }
	]

},
{
	q: "Qual deles ja subia aos palcos aos 4 anos de idade?",
	a: [{ text: "Djonga", isCorrect: false, isSelected: false },
	{ text: "Flora Matos", isCorrect: true },
	{ text: "Sabotage", isCorrect: false },
	{ text: "Negra Li", isCorrect: false }
	]

},
{
	q: "Qual deles 'matava todos os adversários com suas rimas'?",
	a: [{ text: "Tasha e Tracie", isCorrect: false, isSelected: false },
	{ text: "Djonga", isCorrect: false },
	{ text: "Emicida", isCorrect: true },
	{ text: "Negra Li", isCorrect: false }
	]

},
{
	q: "Qual das rappers iniciou sua carreira musical com o grupo de rap RZO?",
	a: [{ text: "Linn da Quebrada", isCorrect: false },
	{ text: "Tasha ou Tracie", isCorrect: false },
	{ text: "Negra Li", isCorrect: true },
	{ text: "Flora Matos", isCorrect: false }
	]

},
{
	q: "Qual deles é considerado um dos nomes mais influentes do rap na atualidade?",
	a: [{ text: "Emicida", isCorrect: false },
	{ text: "Negra Li", isCorrect: false },
	{ text: "Djonga", isCorrect: true },
	{ text: "Flora Matos", isCorrect: false }
	]

}
]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `Voce fez ${score} de ${Questions.length} pontos`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}

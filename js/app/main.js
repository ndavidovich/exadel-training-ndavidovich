window.onload = function () {

    var selectedTopicIndex;
    var selectedQuestionIndex = 0;
//    var questionsAnswers = [];

    document.getElementById('panelQuestion').classList.add('hidden');


    /****  Show chosen topic  ****/
    var showTopic = function (selectedTopicIndex) {

        document.getElementById('panelList').classList.add('hidden');
        document.getElementById('panelQuestion').classList.remove('hidden');

        var selectedTopic = data[selectedTopicIndex];
        document.getElementById('topicTitle').textContent = selectedTopic.title;
        showQuestion(selectedTopic, selectedQuestionIndex);


        function showQuestion (selectedTopic, selectedQuestionIndex) {

            /**** Show question text and question number ****/
            var selectedQuestion = selectedTopic.questions[selectedQuestionIndex];
            document.getElementById('question').textContent = selectedQuestion.question;
            document.getElementById('questionNumber').textContent = selectedQuestionIndex + 1;

            var panelQuestion = document.getElementById('panelQuestion');
            var questionAnswers = document.getElementById('questionAnswers');

            /**** Show image ****/
            if (selectedQuestion.questionImg) {
                var img = document.createElement('img');
                img.src = selectedQuestion.questionImg;
                document.getElementById('panelQuestion').insertBefore(img,questionAnswers);
            }

            /**** Show answers ****/
            var answers = selectedQuestion.answers;
            for (var i = 0; i < answers.length; i++) {
                var sepAnswer = (answers[i]);
                var li = document.createElement('li');
                li.textContent = sepAnswer;
                questionAnswers.appendChild(li);
            }

            /**** Move to the next question ****/
            function nextQuestion() {
                if (selectedQuestionIndex < selectedTopic.questions.length - 1) {
                    selectedQuestionIndex = selectedQuestionIndex + 1;
                } else {
                    selectedQuestionIndex = 0;
                }
                if (img) {
                    panelQuestion.removeChild(img);
                }
                questionAnswers.innerHTML = null;
                showQuestion(selectedTopic, selectedQuestionIndex);
            }

            document.getElementById('sendBtn').onclick = nextQuestion;

        }
    };
    /**** Choose topic ****/
    var onSelectTopic = function (event) {
        selectedTopicIndex = parseInt(event.target.getAttribute('index'), 10);
        showTopic(selectedTopicIndex);
    };

    /**** Show first widget with list of exams topics ****/
    var ol = document.getElementById('topicList');
    for (var i = 0; i < data.length; i++) {
        var topic = data[i];
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#';
        a.textContent = topic.title;
        a.setAttribute('index', i);

        a.onclick = onSelectTopic;

        li.appendChild(a);
        ol.appendChild(li);
    }

};


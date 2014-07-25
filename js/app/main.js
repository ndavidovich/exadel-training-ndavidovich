window.onload = function () {

    var selectedTopicIndex;
    var selectedQuestionIndex = 0;

    document.getElementById('panelQuestion').classList.add('hidden');

    /****  Show/hide node  ****/
    function toggleElement (elem, display) {
        if (display) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    }

    /**** Create Li function ****/
    function createLi (content, func, i) {
        var li = document.createElement('li');
        li.textContent = content;
        li.setAttribute('index', i);
        li.addEventListener("click",func);
        return li;
    }

    /****  Show chosen topic  ****/
    var showTopic = function (selectedTopicIndex) {
        var selectedQuestion;

        toggleElement (document.getElementById('panelList'), 0);
        toggleElement (document.getElementById('panelQuestion'), 1);

        var selectedTopic = data[selectedTopicIndex];
        document.getElementById('topicTitle').textContent = selectedTopic.title;
        showQuestion(selectedTopic, selectedQuestionIndex);

        function showQuestion (selectedTopic, selectedQuestionIndex) {

            /**** Show question text and question number ****/
            selectedQuestion = selectedTopic.questions[selectedQuestionIndex];
            document.getElementById('question').textContent = selectedQuestion.question;
            document.getElementById('questionNumber').textContent = '№' + (selectedQuestionIndex + 1);

            var panelQuestion = document.getElementById('panelQuestion');
            var questionAnswers = document.getElementById('questionAnswers');

            /**** Show image ****/
            var img = document.getElementsByTagName('img');
            if (selectedQuestion.questionImg) {
                if (img.length > 0) {
                    img[0].src = selectedQuestion.questionImg;
                    toggleElement(img[0], 1);
                } else {
                    var img = document.createElement('img');
                    img.src = selectedQuestion.questionImg;
                    document.getElementById('panelQuestion').insertBefore(img,questionAnswers);
                }
            } else {
                toggleElement(img[0], 0);
            }

            /**** Show answers ****/
            var answers = selectedQuestion.answers;
            for (var i = 0; i < answers.length; i++) {
                var sepAnswer = (answers[i]);
                var li = createLi (sepAnswer, highlightAnswer, i);
                questionAnswers.appendChild(li);
            }
        }

        /**** Move to the next question ****/
        function nextQuestion() {
            if (selectedQuestionIndex < selectedTopic.questions.length - 1) {
                selectedQuestionIndex = selectedQuestionIndex + 1;
            } else {
                selectedQuestionIndex = 0;
            }
            questionAnswers.innerHTML = null;
            showQuestion(selectedTopic, selectedQuestionIndex);
        }

//        document.getElementById('sendBtn').addEventListener("click", nextQuestion);
        document.getElementById('sendBtn').addEventListener("click", compareAnswer);

        /**** Highight answer ****/
        function highlightAnswer (event) {
            for (var i=0; i<event.target.parentElement.children.length; i++) {
                if (event.target.parentElement.children[i].classList.contains('selected') && event.target.parentElement.children[i]!=event.target) {
                    event.target.parentElement.children[i].classList.remove('selected');
                }
            }
            if (event.target.classList.contains('selected')) {
                event.target.classList.remove('selected');
            } else {
                event.target.classList.add('selected');
            }
        }

        /**** Compare answer ****/
        function compareAnswer () {
        var userAnswer = Number(document.getElementsByClassName('selected').item(0).getAttribute('index'))+1;
            if (userAnswer == Number(selectedQuestion.right)) {
                console.log(userAnswer,Number(selectedQuestion.right));
            }

        }
    };

    /**** Choose topic ****/
    var onSelectTopic = function (event) {
        selectedTopicIndex = parseInt(event.target.getAttribute('index'), 10);
        showTopic(selectedTopicIndex);
    };

    /**** Show topics list widget ****/
    var ol = document.getElementById('topicList');
    for (var i = 0; i < data.length; i++) {
        var topic = data[i];
        var li = createLi (topic.title, onSelectTopic, i);
        ol.appendChild(li);
    }

};


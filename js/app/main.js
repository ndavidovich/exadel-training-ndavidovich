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
    function createLi (target, content, func) {
        var li = document.createElement('li');
        li.textContent = content;
        li.setAttribute('index', i);
        li.addEventListener("click",func);
        target.appendChild(li);
    }

    /****  Show chosen topic  ****/
    var showTopic = function (selectedTopicIndex) {
        toggleElement (document.getElementById('panelList'), 0);
        toggleElement (document.getElementById('panelQuestion'), 1);

        var selectedTopic = data[selectedTopicIndex];
        document.getElementById('topicTitle').textContent = selectedTopic.title;
        showQuestion(selectedTopic, selectedQuestionIndex);

        function showQuestion (selectedTopic, selectedQuestionIndex) {

            /**** Show question text and question number ****/
            var selectedQuestion = selectedTopic.questions[selectedQuestionIndex];
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
                createLi (questionAnswers, sepAnswer);
            }
            li.addEventListener('click',highlightAnwer(event) )
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
//        document.getElementById('sendBtn').onclick = nextQuestion;
        document.getElementById('sendBtn').addEventListener("click", nextQuestion);

        /**** Highight answer ****/
        function highlightAnwer (e) {
            alert(e.target);
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
        createLi (ol, topic.title, onSelectTopic);
    }

};


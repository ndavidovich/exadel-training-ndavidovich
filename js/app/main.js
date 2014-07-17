window.onload = function () {

    var panelList;
    var panelQuestion;
    var selectedTopicIndex;
    var selectedQuestionIndex = 0;
    var questionsAnswers = [];

    document.getElementById('panelQuestion').classList.add('hidden');

    var onSelectTopic = function (event) {
        selectedTopicIndex = parseInt(event.target.getAttribute('index'), 10);
        var selectedTopic = data[selectedTopicIndex];

        document.getElementById('panelList').classList.add('hidden');
        document.getElementById('panelQuestion').classList.remove('hidden');

        document.getElementById('topicTitle').textContent = selectedTopic.title;
        var selectedQuestion = selectedTopic.questions[selectedQuestionIndex];
        document.getElementById('question').textContent = selectedQuestion.question;

        document.getElementById('questionNumber').textContent =selectedQuestionIndex + 1;
        document.getElementById('questionImg').setAttribute('src', selectedQuestion.questionImg);
    };

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


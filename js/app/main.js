window.onload = function () {

    var ol = document.getElementById('topicList');
    console.log(ol);

    for (var i = 0; i < data.length; i++) {
        var topic = data[i];
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = topic.title;
        a.onclick = function onclickElement() {
            var panel1 = document.getElementById('panelQuestion');
            panel1.style.display = 'none';

            var panel2 = document.getElementById('panelQuestion');
            panel2.style.display = '';

        };
        li.appendChild(a);
        ol.appendChild(li);
    }
    console.log('the end');
};


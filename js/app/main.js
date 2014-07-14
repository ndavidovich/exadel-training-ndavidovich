window.onload = function () {

    var ol = document.getElementById('topic_list');
    console.log(ol);
    for (var i = 0; i < data.length; i++) {
        var topic = data[i];
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = topic.title;
        a.onclick = function onclickElement() {
            var panel1 = document.getElementById('panel-1');
            panel1.style.display = 'none';

            var panel2 = document.getElementById('panel-2');
            panel2.style.display = '';

        };
        li.appendChild(a);
        ol.appendChild(li);
    }
    console.log('the end');
};
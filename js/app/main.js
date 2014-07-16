window.onload = function () {

    var ol = document.getElementById('topicList');

    for (var i = 0; i < data.length; i++) {
        var topic = data[i];
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = topic.title;
        li.appendChild(a);
        ol.appendChild(li);

        a.onclick = function onclickElement() {
            var panel1 = document.getElementById('panelList');
            panel1.className += " hidden";
            var panel2 = document.getElementById('panelQuestion');
            panel2.className = panel2.className.replace("hidden", "");
        };
    };

    var user = {};
    user.name = 'Vasya';
    user.surname = 'Petrov';
    user.name = 'Sergey';
    delete user.name;
    alert(user.name + ' ' + user.surname);

};


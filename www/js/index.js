document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log(navigator.notification);
    console.log(navigator.vibrate);
    $("#submitButton").on("click", buttonClicked);
    shake.startWatch(onShake, 40);
}   

var words = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As i see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concerntrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook no so good",
        "Very doubtful"
    ]


function buttonClicked()
{
    alert("button clicked");
    submit();
}

function onShake()
{
    alert("shake works");
}

function submit() {
    var text = $('#textinput').val();
    var rAnswer = randomAnswer();
    $("#responseText").text(rAnswer);
    soundResponse(rAnswer);   
}

function randomNum() {
    var num = Math.round(Math.random() * 19);
    alert(num);
    return num;
}

function randomAnswer() {
    var result = words[randomNum()];
    return result;
}

function soundResponse(answer) {
    for (var i=0; i < words.length(); i++)
    {
        if ((answer == words[i]) && (i < 10)
        {
            navigator.notification.beep(2);
        }
        else if ((answer == words[i]) && (i > 9) && (i < 16))
        {
            navigator.notification.beep(1);
            navigator.vibrate(1000);
        }
        else if ((answer == words[i]) && (i > 15))
        {
            navigator.vibrate(2000);
        }   
    }
}

/*function random() {
	var rValue = !Math.round(Math.random());
    $("#rV").text(rValue);
    if (rValue = true)
    {
        navigator.notification.beep(1);
        navigator.vibrate(2000);
    }
    else
    {
        navigator.notification.beep(2);
        navigator.vibrate([200, 300, 500]);
    }
}*/




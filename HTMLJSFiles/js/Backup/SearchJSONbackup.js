function searchLexicon(input){
    var c;
    var partsOfSpeech = "";
    var text="";
    var line=0;
    var sentence="";
    var found = false;
    var dataString;
    var returnArr = [];

    jQuery.getJSON('JSON/newPoemHub.json', function (query) {
//        alert("success");
        c = query;
        for( var i=0; i< c.container.poem.length; i++) {
            line = 0;
            for (var j = 0; j < c.container.poem[i].lg.length; j++) {
                for (var k = 0; k < c.container.poem[i].lg[j].l.length; k++) {
                    sentence = "";
                    line++;
                    for (var l = 0; l < c.container.poem[i].lg[j].l[k].seg.length; l++) {
                        var word = c.container.poem[i].lg[j].l[k].seg[l];
                        sentence += word.__text + " ";
//                         console.log(sentence);

                        if (word.__text == input) {
                            found = true;
                            theword = '"' + word.__text + '"';
                            partsOfSpeech = word._pos;
                            console.log("The parts of speech is :" + partsOfSpeech);
                            dataString = "Poem: " + i+ " " + theword + "," + " " + "line" + " " + line + "," + " " + partsOfSpeech + "<br />";
//                            document.getElementById("demo").innerHTML += "Poem:" + i + " " + theword + "," + " " + "line" + " " + line + "," + " " + partsOfSpeech + "<br />";
                        }
                        ;



                    }
                    ;
                    if (found == true) {
//                        console.log(sentence);
//                        document.getElementById("demo").innerHTML += sentence +"<br>" + "<br>";
                        dataString += sentence + "<br>" + "<br>";
                        returnArr.push(dataString);
                    }
                    found = false;
                }
                ;
            }
            ;
        };
        // for(var i=0;i<returnArr.length;i++)
        //     document.getElementById("demo").innerHTML += returnArr[i];
        console.log(returnArr);
        return returnArr;
    });
}

function searchPoem(poemNumber, input){
    var c;
    var partsOfSpeech = "";
    var text="";
    var line=0;
    var sentence="";
    var found = false;
    var dataString;
    var i = poemNumber;
    var returnArr = [];

    jQuery.getJSON('JSON/newPoemHub.json', function (data) {
//        alert("success");
        c = data;

           for (var j = 0; j < c.container.poem[i].lg.length; j++) {
                for (var k = 0; k < c.container.poem[i].lg[j].l.length; k++) {
                    sentence = "";
                    line++;
                    for (var l = 0; l < c.container.poem[i].lg[j].l[k].seg.length; l++) {
                        var word = c.container.poem[i].lg[j].l[k].seg[l];
                        sentence += word.__text + " ";
//                         console.log(sentence);

                        if (word.__text == input) {
                            found = true;
                            theword = '"' + word.__text + '"';
                            partsOfSpeech = word._pos;
                            console.log("The parts of speech is :" + partsOfSpeech);
                            //returnArr[word.__text].push([[line, partsofspeech, ""]]);
                            dataString = "Poem: " + i+ " " + theword + "," + " " + "line" + " " + line + "," + " " + partsOfSpeech + "<br />";
//                            document.getElementById("demo").innerHTML += "Poem:" + i + " " + theword + "," + " " + "line" + " " + line + "," + " " + partsofspeech + "<br />";
                        }
                        ;



                    }
                    ;
                    if (found == true) {
//                        console.log(sentence);
//                        document.getElementById("demo").innerHTML += sentence +"<br>" + "<br>";
                        dataString += sentence + "<br>" + "<br>";
                        returnArr.push(dataString);
                    }
                    found = false;
                }
                ;
            }
            ;

        // for(var i=0;i<returnArr.length;i++)
        //     document.getElementById("demo").innerHTML += returnArr[i];
        return returnArr;
    });
}


var returnArr = [];

function searchLexicon(input){
    var c;
    var partsOfSpeech = "";
    var text="";
    var line=0;
    var sentence="";
    var found = false;
    var dataString;

    var poem = ["The Compleynte of the Virgin before the Cross","Address to Sir John Oldcastle","La Male Regle","Balade to King Henry V","Two Balades to Henry V and the Knights of the Garter [Ballad #1]","Two Balades to Henry V and the Knights of the Garter [Ballad #2]","Ad Beatam Virginem","Balade, after K. Richard II's Bones . . . ","Balade to my gracious Lord of York","Ad Beatam Vriginem, the 'Mother of God' ","Balade to the Duke of Bedford","Balade to my Lord the Chancellor","Balade and Roundel or Chanceon to Mr. Henry Somer, Subtreasurer","Balade to King Henry V","Balade to King Henry V, for Money","Balade to my maister Carpenter","Balade by the Court of Good Company","Balade to the Virgin and Christ","The Letter of Cupid to Lovers, his Subjects","Regiment of Princes","Verba compilatoris ad librum [envoi at end of regiment]","Inoucacio ad patrem","ad filium honor et gloria","ad spiritum sanctum","Ad Beatam Virginem","item de beata virgine (prologus)","item de beata virgine (fabula)","the story of the monk who clad the virgin","Three Roundels - Hoccleve's appeal to Lady Money","Three Roundels - Lady Money's scornful answer","Three Roundels - Hoccleve's Humorous praise of his lady","epilogue to three roundels","Lerne to Dye.","Thomas Hoccleve's Complaint","Dialog with a Friend","POEM 36","Lerne to Dye.","POEM 38","Hoccleve's Dedication to Lady Westmoreland"];

    document.getElementById("loadingText").setAttribute('style','visibility: visible');
    document.getElementById("loadingBar").setAttribute('style','width: 10%');
    console.log("triggered elementById visible");

    $.getJSON('JSON/FixedCondensed.json', function (data) {
//        alert("success");
        c = data;
        returnArr = [];
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

                        console.log("looking for word: "+ input);
                        if (word.__text == input) {
                            found = true;
                            theword = '"' + word.__text + '"';
                            partsOfSpeech = word._pos;
                            console.log("The parts of speech is :" + partsOfSpeech);
                            dataString = theword + "," + " " +"Poem: " + poem[i]+ "," + " " + "line" + " " + line + "," + " " + partsOfSpeech + "<br />";
//                            document.getElementById("demo").innerHTML += "Poem:" + i + " " + theword + "," + " " + "line" + " " + line + "," + " " + partsOfSpeech + "<br />";
                        }


                    }
                    if (found == true) {
//                        console.log(sentence);
//                        document.getElementById("demo").innerHTML += sentence +"<br>" + "<br>";
                        dataString += sentence + "<br>" + "<br>";
                        returnArr.push(dataString);
                    }
                    found = false;
                }
            }
        }
        console.log("dataString is: " + dataString);

        // Clear what may be there previous
        //$("#resultSection").empty();
        for(var i=0;i<returnArr.length;i++) {
            document.getElementById("resultSection").innerHTML += returnArr[i];
        }


        //Clear Loading text
        document.getElementById("loadingText").setAttribute('style','visibility: hidden');
        document.getElementById("loadingBar").setAttribute('style','width: 100%');
        console.log("triggered elementById hidden");

        console.log("value of returnArr:");
        console.log(returnArr);
        return returnArr;
    });
}

function searchPoem(poemNumber,input){
    var c;
    var partsOfSpeech = "";
    var text="";
    var line=0;
    var sentence="";
    var found = false;
    var dataString;


    $.getJSON('JSON/FixedCondensed.json', function (data) {
//        alert("success");
        c = data;
        returnArr = []; // reset the array

        console.log("poemNumber value: " + poemNumber);
        console.log("Type of poemNumber: " + typeof(poemNumber));
        console.log(".........");

        document.getElementById("loadingText").setAttribute('style','visibility: visible');
        document.getElementById("loadingBar").setAttribute('style','width: 10%');
        console.log("triggered elementById visible");

        // for( var i= 0; i < poemNumber + 1; i++) { // Run once and only once
        //     line = 0;
            for (var j = 0; j < c.container.poem[poemNumber].lg.length; j++) {
                for (var k = 0; k < c.container.poem[poemNumber].lg[j].l.length; k++) {
                    sentence = "";
                    line++;
                    for (var l = 0; l < c.container.poem[poemNumber].lg[j].l[k].seg.length; l++) {
                        var word = c.container.poem[poemNumber].lg[j].l[k].seg[l];
                        sentence += word.__text + " ";
//                         console.log(sentence);

                        console.log("looking for word: "+ input);
                        console.log("word.__text is:" + word.__text);
                        if (word.__text == input) {
                            found = true;
                            theword = '"' + word.__text + '"';
                            partsOfSpeech = word._pos;
                            console.log("The parts of speech is :" + partsOfSpeech);
                            dataString = theword + "," + " " + "line" + " " + line + "," + " " + partsOfSpeech + "<br />";
                            console.log("dataString inside of the core for-loop: " + dataString);
//                            document.getElementById("demo").innerHTML += "Poem:" + i + " " + theword + "," + " " + "line" + " " + line + "," + " " + partsOfSpeech + "<br />";
                        }



                    }
                    if (found == true) {
//                        console.log(sentence);
//                        document.getElementById("demo").innerHTML += sentence +"<br>" + "<br>";
                        dataString += sentence + "<br>" + "<br>";
                        returnArr.push(dataString);
                    }
                    found = false;
                }
            }
        console.log("dataString is: " + dataString);

        // Clear what may be there previous
        //$("#resultSection").empty();
        for(var i=0;i<returnArr.length;i++) {
            document.getElementById("resultSection").innerHTML += returnArr[i];
        }

        //Clear Loading text
        document.getElementById("loadingText").setAttribute('style','visibility: hidden');
        document.getElementById("loadingBar").setAttribute('style','width: 100%');
        console.log("triggered elementById hidden");

        console.log("value of returnArr:");
        console.log(returnArr);
        return returnArr;
    });
}
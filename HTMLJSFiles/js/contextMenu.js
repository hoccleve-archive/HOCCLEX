// Made using the guidance of several javascript forums and stackoverflow -- will list and link sources:
// todo: clean code, document with comments


var selected_text = "";
var poem_results;

// Auto select testing
// function SelectText(element) {
//     var doc = document,
//         text = doc.getElementById(element),
//         range,
//         selection;
//     if (doc.body.createTextRange) {
//         range = document.body.createTextRange();
//         range.moveToElementText(text);
//         range.select();
//     } else if (window.getSelection) {
//         selection = window.getSelection();
//         range = document.createRange();
//         range.selectNodeContents(text);
//         selection.removeAllRanges();
//         selection.addRange(range);
//     }
// }

// This was moved into a separate .js file named selectText.js and gets called with every span that has "onclickmenu='selectText(this)'"
// Madison Segment select code
// var segs = document.getElementsByTagName('span');
// for(i in segs){
//     var seg = segs[i];
//     if(seg.type == "word"){
//         console.log("grabbed seg type");
//         seg.onclick = function selectText() {
//             console.log("I dud the selectText function!");
//             if (document.selection) {
//                 var range = document.body.createTextRange();
//                 range.moveToElementText(this);
//                 range.select();
//                 console.log(range)
//             } else if (window.getSelection) {
//                 var range = document.createRange();
//                 range.selectNode(this);
//                 window.getSelection().addRange(range);
//             }
//         };
//     }
// }


// Trigger action when the contexmenu is about to be shown
$(document).bind("contextmenu", function (event) {
    console.log('I was clicked!');

    // This
    // $(function() {
    //     $('span').click(function () {
    //         SelectText('autoselect');
    //     });
    // });

    selected_text = window.getSelection().toString().replace(" ", ""); //Removes whitespace of selection

    console.log('Selected text is: ' + selected_text);
    console.log('Current Poem is: ' + filename);
    console.log("clearing reveal");
    document.getElementById("resultSection").innerHTML="";
    console.log("I cleared the thing.");

    // Avoid the real one
    event.preventDefault();

    // Show contextmenu
    $(".custom-menu").finish().toggle(100).

    // Mouse Location
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});

// If the document is clicked somewhere
$(document).bind("mousedown", function (e) {
    console.log("Left Click pressed");

    // If the clicked element is not the menu
    if (!$(e.target).parents(".custom-menu").length > 0) {
        // Hide it
        $(".custom-menu").hide(100);
    }
});

// If the menu element is clicked
$(".custom-menu li").click(function(){

    // This is the triggered action name
    switch($(this).attr("data-action")) {

        // A case for each action. Your actions here ==========================
        case "first":
            //alert("Searching Current Poem for: " + selected_text);
            console.log("first clicked");

            var poem_num = filename[0] + filename[1];
            if(poem_num[0] == '0'){
                poem_num = poem_num[1];
            }


            console.log("poem_num: " + poem_num);
            var poem_actual_number = parseInt(poem_num, 10);

            console.log("Testing my type " + typeof(poem_actual_number));
            console.log("poem_num is: " + poem_num);
            console.log("poem_actual_number is: " + poem_actual_number);

            console.log("Checking again for poem id: " + filename[1]);

            poem_results = searchPoem(poem_actual_number - 1, selected_text); //Call the searchPoem function from SearchJSON.js

            console.log(poem_results);


            //document.getElementById("resultSection").innerHTML = poem_results;


            $(".custom-menu").hide(100);
            break;

        case "second":
            //alert("Searching All Poems");
            console.log("Second was clicked");

            poem_results = searchLexicon(selected_text);

            console.log("poem results: " + poem_results);
            //document.getElementById("resultSection").innerHTML = poem_results;

            console.log("made it to break");
            $(".custom-menu").hide(100);

            // It seems like this js file wants to finish out before the searchJSON is called to load
            break;

        case "third":
            console.log("third was clicked");
            alert("Extra Content");
            break;
    }
    console.log("Broke out of switch");

    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
});
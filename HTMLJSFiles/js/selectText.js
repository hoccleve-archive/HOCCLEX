/**
 * Created by Madison on 1/20/2017.
 */
function selectText(span) {
    console.log("selectText function now called")
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(span);
        range.select();
        console.log(range)
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(span);
        window.getSelection().addRange(range);
    }
};

window.addEventListener('onload', function() {
    TogetherJS(this);
})

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
//editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setTabSize(4);
editor.getSession().setUseSoftTabs(true);

editor.commands.addCommand({
    name: 'phpHighlighting',
    bindKey: {win: 'Alt-Shift-1',  mac: 'Shift-Command-M1'},
    exec: function(editor) {
        editor.getSession().setMode("ace/mode/php");
    },
    readOnly: true // false if this command should not apply in readOnly mode
});

editor.commands.addCommand({
    name: 'jsHighlighting',
    bindKey: {win: 'Alt-Shift-2',  mac: 'Shift-Command-2'},
    exec: function(editor) {
        console.log('Javascript!');
        editor.getSession().setMode("ace/mode/javascript");
    },
    readOnly: true // false if this command should not apply in readOnly mode
});

editor.commands.addCommand({
    name: 'cHighlighting',
    bindKey: {win: 'Alt-Shift-3',  mac: 'Shift-Command-3'},
    exec: function(editor) {

        editor.getSession().setMode("ace/mode/c");
    },
    readOnly: true // false if this command should not apply in readOnly mode
});

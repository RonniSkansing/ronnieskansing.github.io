
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setTabSize(4);
editor.getSession().setUseSoftTabs(true);

editor.commands.addCommand({
    name: 'phpHighlighting',
    bindKey: {win: 'Alt-Shift-P',  mac: 'Shift-Command-M'},
    exec: function(editor) {
        editor.getSession().setMode("ace/mode/php");
    },
    readOnly: true // false if this command should not apply in readOnly mode
});

editor.commands.addCommand({
    name: 'jsHighlighting',
    bindKey: {win: 'Alt-Shift-J',  mac: 'Shift-Command-J'},
    exec: function(editor) {
        editor.getSession().setMode("ace/mode/javascript");
    },
    readOnly: true // false if this command should not apply in readOnly mode
});

editor.commands.addCommand({
    name: 'jsHighlighting',
    bindKey: {win: 'Alt-Shift-C',  mac: 'Shift-Command-C'},
    exec: function(editor) {
        editor.getSession().setMode("ace/mode/c");
    },
    readOnly: true // false if this command should not apply in readOnly mode
});

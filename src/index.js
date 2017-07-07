'use strict';

        
var inputText = $('form.message-form .message-field');
var ouputText = $('output.message-formatted');
var formattedText = $('form.message-form');

function formatText(){
         ouputText.text(
         inputText.val()
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, ' '));
}

function cleanOutput(){
    ouputText.text('');
}

inputText.on('keyup', formatText);
formattedText.on('reset', cleanOutput);

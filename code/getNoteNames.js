inlets = 1;
outlets = 1; 

var noteNumbers = new Array(7);
var names = new Array(7);
var octaves = new Array(7);
var namesOut = new Array(7);

var letters = [“C”, “C#”, “D”, “D#”, “E”, “F”, “F#”, “G”, “G#”, “A”, “A#”, “B”];


function list(input) {
	
     for(var I = 0; I < noteNumbers.length; i++)
     {
     noteNumbers[i] = arguments[i];
     names[i] = letters[noteNumbers[i] % 12]
     octaves[i] = (noteNumbers[i] – (noteNumbers[i] % 12)) /12;
     namesOut[i] = names[i].concat(octaves[i]);
     }
     outlet(0, namesOut);
}
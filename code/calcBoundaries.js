inlets = 1;
outlets = 1;

var boundaryList = new Array(14);

var width = 1.0;
var basicSize = 1000.0 / 7.0;

function msg_float(input) {
	width = input;
	calc(width);
}

function bang() {
	calc(width);
}

function calc(width) {	
	for(var i = 0; i < boundaryList.length; i = i+2)
	{
		var middle = ((i/2) * basicSize) + (basicSize/2.0);	
		boundaryList[i] = middle - (basicSize * (width/2.0));
	}	
	for(var i = 1; i < boundaryList.length; i = i+2)
	{
		var middle = ( Math.floor(i/2) * basicSize) + (basicSize/2.0);
		boundaryList[i] = middle + (basicSize * (width/2.0));
	}	
	if(boundaryList[0] < 0.0) {boundaryList[0] = 0.0;}
	if(boundaryList[13] > 1000.0) {boundaryList[13] = 1000.0;}
	outlet(0, boundaryList);
}
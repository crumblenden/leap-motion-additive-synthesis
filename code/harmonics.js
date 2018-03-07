inlets = 3;
outlets = 2;
var gr = 1.61803398875;

var freqList = new Array(16);
var baseFreq = 440.0;
var stretch = 1.0;
var randAmt = 0.0;
var randMod = 0.0;

function msg_float(input)
{
	switch(inlet) 
	{
		case 0:
			baseFreq = input;
			calc();
			break;
		case 1:
			stretch = input * 8.0;
			stretch -= 4;
			//if(stretch == 0.0) {strecth = 0.01;}
			calc();
			break;
		case 2:
			randAmt = input;
			calc();
			break
		default:
			break;
		}
}
function calc()
{
	for(var i = 0; i < 16; i++)
		{
		freqList[i] = (baseFreq * (i+1)) * (Math.pow( (gr * ((i+1)/16) ), stretch));
		randMod = 1 + ((Math.random() - 0.5) * randAmt);
		freqList[i] *= randMod;

		
		post(randAmt);
		post(randMod);
		post(stretch);
		post();
		}
		outlet(0, freqList);
}	
		

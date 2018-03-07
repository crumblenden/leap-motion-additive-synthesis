inlets = 3;
outlets = 1;

var outGains = new Array(16);
var gains = new Array(16);
var boosts = new Array(16);
var mask = new Array(16);


for(var i = 0; i < 16; i++)
{
	outGains[i] = 0;
	boosts[i] = 0;
	gains[i] = 0;
	mask[i] = 0;
}

function list(input)
{
	switch(inlet) {
		
		case 0:
		for(var i = 0; i < arguments.length; i++)
			{
			gains[i] = arguments[i];
			}
		break;
		
		case 1:
		for(var i = 0; i < arguments.length; i++)
			{
			boosts[i] = arguments[i];
			}
		break;
		
		case 2:
		for(var i = 0; i < arguments.length; i++)
			{
			mask[i] = arguments[i];
			}
		break;
		}	
		updateGains();
}

function updateGains() 
{
		for(var i = 0; i < 16; i++)
		{
		outGains[i] = ((gains[i] + boosts[i])) * mask[i];
		}
		outlet(0, outGains);
}
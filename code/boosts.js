inlets = 3;
outlets = 1;

var boostList = new Array(16);
var gains = new Array(16);
var index;
var boostFactor = 0.5;
var focus = 0.2;

for(var i = 0; i < 16; i++)
{
	boostList[i] = 0;
	gains[i] = 0;
}

function list(input)
{
	for(var i = 0; i < arguments.length; i++)
	{
	gains[i] = arguments[i];
	updateList();
	}
}

function msg_float(input)
{
	switch(inlet)
	{
		case 0:
		index = Math.ceil(input * 16);
		updateList();	
		break;
		
		case 1:
		boostFactor = input;
		updateList();
		break;
		
		case 2:
		focus = input;
		updateList();
		break;
		
		
	}
}

function updateList()
{
		for(var i = 0; i < 16; i++)
		{
		boostList[i] = 0;
		}
				
		boostList[index] = ((1 - gains[index]) * boostFactor);
		for(var j = 1; j < 5; j++)
			{
				if(boostList[index-j] >= 0)
				{
					boostList[index-j] =  (1 - gains[index-j]) * (boostFactor / (j+focus));
				}
				if(boostList[index+j] < 16)
				{
					boostList[index+j] = (1 - gains[index+j]) * (boostFactor / (j+focus));
				}
			}
			outlet(0, boostList);
}


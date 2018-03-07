inlets = 3;
outlets = 3;

var gainList = new Array(16);
var outGains = new Array(16);
var outList = new Array(16);

var oddGain = 0;
var evenGain = 0;
var mainGain = 1;


	for(var i = 0; i < 16; i++)
		{
		gainList[i] = 1/(i+1);
		outGains[i] = 0;
		outList[i] = 0;
		}

function msg_float(input)
{
	switch(inlet)
	{
		case 0:
			oddGain = input;
			for(var i = 0; i < 16; i++)
			{
				if(i % 2 == 1)
				{
				outList[i] = outGains[i] = (gainList[i] * oddGain);
				}
			}

			outlet(0, outList);
		break;
		case 1:
			evenGain = input;
			for(var i = 0; i < 16; i++)
			{
				if(i % 2 == 0)
				{
				outList[i] = outGains[i] = (gainList[i] * evenGain);
				}
			}

			outlet(0, outList);
		break;
		case 2:
		
			mainGain = input;
			for(var i = 0; i < 16; i++)
			{
				outList[i] *= mainGain;
			}
		
		break;		
	}
}

/*
			for(var i = 1; i <= 4; i++)
			{
				outGains[(i^2)-1] = (gainList[(i^2)-1] * squaresGain);
			}
			post(squaresGain);
			for(var i = 0; i < 16; i++)
			{
				outList[i] = outGains[i];
			}
			outlet(0, outList);
			*/
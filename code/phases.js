inlets = 2;
outlets = 1;

var phaseList = new Array(16);

for(var i = 0; i < 16; i++)
			{
				phaseList[i] = 0;
			}
				
function msg_float(input)
{
	switch(inlet) {
		case 0:
		for(var i = 0; i < 16; i++)
			{
				if(i % 2 == 1)
				{
				phaseList[i] = (input * 0.5);
				}
			}
			outlet(0, phaseList);
			break;
		case 1:
		for(var i = 0; i < 16; i++)
			{
				if(i % 2 == 0)
				{
				phaseList[i] = (input * 0.5);
				}
			}
			outlet(0, phaseList);
			break;
			}
		
}

inlets = 1;
outlets = 1;

var harmCutoff = 1;			
var mask = new Array(16);
	for(var i = 0; i < 16; i++)
		{
		mask[i] = harmCutoff;
		}
		
function msg_float(input)
{
		
harmCutoff = input;
cutoff = Math.floor(harmCutoff * 16);
for(var i = 0; i <= 5; i++)
	{
	if(cutoff+i <= 16) 
		{
		mask[cutoff+i] = 1 - (i*0.2);
		}		
	}
for(var i = 0; i <= 16; i++)
	{
		if(i < cutoff) {mask[i] = 1.0;}
		if(i > cutoff+5) {mask[i] = 0.0;}	
	}		
	outlet(0, mask);
	
}
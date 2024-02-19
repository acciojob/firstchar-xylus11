function firstChar(text) {
  // your code here
	if(text)
	{
	const ch = text.charAt(0);
		let i=0 ;
	if(ch!==" ")
	{
		i++;
		if(i>0)
		{
			return text.charAt(i);
			
		}
	}
	else{
		return ch;
	}
	
}
	else
	{
		return ""
	}
}

// Do not change the code below

//const text = prompt("Enter text:");
alert(firstChar(text));

function firstChar(text) {
  // your code here
	const ch = text.charAt(0);
	if(ch==" " || ch ==null)
	{
		return "";
	}
	else{
		return ch;
	}
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

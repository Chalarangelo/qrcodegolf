// Jumble (Cthulhify) function that will make any given text into mumbo jumbo so that it is not easily human-readable
function jumble(from,s){
	var q="\n `1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?",
		v=" .`9501784326+_sf'ptzuwid(;}ngromhxjl|qbkcyeav!\n\\[$#~*^%&@,]=-CJERFYTPVU/){GAXZKHDBL<?>MQNSIWO:\"",
		i=0,r="";
	if(from)
		for(i=0;i<s.length;i++)
			r+=v.indexOf(s.charAt(i))>-1?q.charAt(v.indexOf(s.charAt(i))):s.charAt(i);
	else 
		for(i=0;i<s.length;i++)r+=q.indexOf(s.charAt(i))>-1?v.charAt(q.indexOf(s.charAt(i))):s.charAt(i);
	return r
}
// Vigenere cipher with custom substitutions
function vigenere(from,s,key){
	var g=[	"wxzybadcgefhkijlpomnstrqvu","vuwxzybadcgefhkijlpomnstrq","qvuwxzybadcgefhkijlpomnstr","uwxzybadcgefhkijlpomnstrqv",
			"badcgefhkijlpomnstrqvuwxzy","xzybadcgefhkijlpomnstrqvuw","ybadcgefhkijlpomnstrqvuwxz","zybadcgefhkijlpomnstrqvuwx",
			"mnstrqvuwxzybadcgefhkijlpo","omnstrqvuwxzybadcgefhkijlp","nstrqvuwxzybadcgefhkijlpom","strqvuwxzybadcgefhkijlpomn",
			"rqvuwxzybadcgefhkijlpomnst","trqvuwxzybadcgefhkijlpomns","kijlpomnstrqvuwxzybadcgefh","lpomnstrqvuwxzybadcgefhkij",
			"dcgefhkijlpomnstrqvuwxzyba","adcgefhkijlpomnstrqvuwxzyb","pomnstrqvuwxzybadcgefhkijl","cgefhkijlpomnstrqvuwxzybad",
			"fhkijlpomnstrqvuwxzybadcge","gefhkijlpomnstrqvuwxzybadc","efhkijlpomnstrqvuwxzybadcg","hkijlpomnstrqvuwxzybadcgef",
			"jlpomnstrqvuwxzybadcgefhki","ijlpomnstrqvuwxzybadcgefhk"],
		l="abcdefghijklmnopqrstuvwxyz",
		i=0,n=0,j=false,r="",t="";
	while(key.length<256)
		key+=key;
	if(from)
		for(i=0;i<s.length;i++ ){
			j=(s.charAt(i)==s.charAt(i).toUpperCase());
			if(l.indexOf(s.charAt(i).toLowerCase())>-1){
				n=l.indexOf(key.charAt(i));
				if(n>-1){
					t=l.charAt(g[n].indexOf(s.charAt(i).toLowerCase()));
					if(j)r+=t.toUpperCase();
					else r+=t;
				}
				else r+=s.charAt(i);
			}
			else r+=s.charAt(i);
		}
	else 
		for(i=0;i<s.length;i++ ){
			j=(s.charAt(i)==s.charAt(i).toUpperCase());
			if(l.indexOf(s.charAt(i).toLowerCase())>-1){
				n=l.indexOf(key.charAt(i));
				if(n>-1){
					t=g[n].charAt(l.indexOf(s.charAt(i).toLowerCase()));
					if(j)r+=t.toUpperCase();
					else r+=t;
				}
				else r+=s.charAt(i);
			}
			else r+=s.charAt(i);
		}
	return r;
}
// ASCII mapper to values 00-99
function asciify(from,s){
	var r="",i=0,c=0;
	if(from)
		for(i=0;i<s.length;i+=2){
			c=Number(s.charAt(i)+s.charAt(i+1));
			if(c<97){
				if(c<95)r+=String.fromCharCode(c+32);
				else r+=String.fromCharCode(c-86);
			}
			else r +=(c!=98 && c!=99)?"\uFFFD":"";
		}
		else{
			for(i=0;i<s.length;i++){
				if((s.charCodeAt(i)>31 && s.charCodeAt(i)<127))r+=pad(s.charCodeAt(i)-32);
				else if((s.charCodeAt(i)==9 || s.charCodeAt(i)==10)) r+=s.charCodeAt(i)+86;
				else r+="97";
			}
			return "98"+r+"99";
		}
	return r;}
// Padding function to make any number two digits long
function pad(n){
	return(n<10)?("0"+n):n;
}
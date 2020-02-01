var $ = function(id){
	return document.getElementById(id);
};
var print = function(){
	var te = $("texts").value;
};
window.onload = function(){
	$("texts").onclick = print;
};
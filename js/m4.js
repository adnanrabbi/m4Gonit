 function convertEngToBnNumber() {
	 var result=$("#result").val();
	 var res = result.split("");

	 var numaricEngToBn = {1:"১", 2:"২", 3:"৩", 4:"৪", 5:"৫", 6:"৬", 7:"৭", 8:"৮", 9:"৯", 0:"০", ".":"."};
	 var resultBn="";
	 for(var val in res) {
		for(var index in numaricEngToBn) {
		
			if(index==res[val]){
				resultBn += numaricEngToBn[index];
			}

		}
	 }
	 $("#resultL").text(resultBn);
}
 
$( document ).ready(function() {
	$("#fboxL").click(function() {
		$("#selectBox").val("fbox");
	});
	$("#sboxL").click(function() {
		$("#selectBox").val("sbox");
	});

	
	$("#AOPlus").click(function() {
		$("#AOperator").text("+");
		$("#selectBox").val("sbox");
	});
	$("#AOMinus").click(function() {
		$("#AOperator").text("-");
		$("#selectBox").val("sbox");
	});
	$("#AOMultiply").click(function() {
		$("#AOperator").text("*");
		$("#selectBox").val("sbox");
	});
	$("#AODivide").click(function() {
		$("#AOperator").text("/");
		$("#selectBox").val("sbox");
		
	});

	
	$("#equelL").click(function() {
		
		var fbox=parseFloat($("#fbox").val());
		var AOperator=$("#AOperator").text();
		var sbox=parseFloat($("#sbox").val());
		var result="";
		if(AOperator=="+"){
			result= fbox + sbox;
		}else if(AOperator=="-"){
			result= fbox - sbox;
		}else if(AOperator=="*"){
			result= fbox * sbox;
		}else if(AOperator=="/"){
			result= fbox / sbox;
		}
		
		$("#result").val(result);
		convertEngToBnNumber();
	});

	$("#one").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+"১")
		$("#"+box).val($("#"+box).val()+"1");
	});
	
	$("#two").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+"২")
		$("#"+box).val($("#"+box).val()+"2");
	});
	$("#three").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+"৩")
		$("#"+box).val($("#"+box).val()+"3");
	});
	$("#four").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+"৪")
		$("#"+box).val($("#"+box).val()+"4");
	});
	$("#five").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+"৫")
		$("#"+box).val($("#"+box).val()+"5");
	});
	$("#six").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+"৬")
		$("#"+box).val($("#"+box).val()+"6");
	});
	$("#seven").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+"৭")
		$("#"+box).val($("#"+box).val()+"7");
	});
	$("#eight").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+"৮")
		$("#"+box).val($("#"+box).val()+"8");
	});
	$("#nine").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+"৯")
		$("#"+box).val($("#"+box).val()+"9");
	});
	$("#zero").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+"০")
		$("#"+box).val($("#"+box).val()+"0");
	});
	$("#decimal").click(function() {
		var box=$("#selectBox").val();
		var value=$("#"+box+"L").text()
			if(value==0){
				value="";
			}
		$("#"+box+"L").text(value+".")
		$("#"+box).val($("#"+box).val()+".");
	});

});

function resetAll() {
	$("#fboxL").text("0");
	$("#fbox").val("");
	$("#AOperator").text("?");
	$("#sboxL").text("0");
	$("#sbox").val("");
	$("#resultL").text("0");
	document.getElementById("myForm").reset();
}
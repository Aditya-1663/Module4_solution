var name_array=new Array();
name_array[0]="Yaakov";
name_array[1]="John";
name_array[2]="Jen";
name_array[3]="jason";
name_array[4]="paul";
name_array[5]="frank";
name_array[6]="larry";
name_array[7]="paula";
name_array[8]="laura";
name_array[9]="jim";


for (var i = 0; i < name_array.length; i++) {
	if(name_array[i].charAt(0)==='J'|| name_array[i].charAt(0)==='j'){
        console.log("Goodbye "+ name_array[i])
	}
	else{
		console.log("Hello "+ name_array[i])
	}
}
$(document).ready(function(){
	// writeData();
	readData();
});
function writeData() {
	firebase.database().ref('recipe').set({
		name: "Umer",
		description: "Developer"
	});	
}

function readData(){
	firebase.database().ref('recipe').on('value', function(snapshot){
		title = document.getElementById('recipe_title');
		title.innerText = snapshot.val().name;
		//debugger;
	})
}
// function writeRecipeData(recipeId, title, description , ingredients, direction) {
// }
// const preObject = document.getElementById('object');

// const dbRefObject = firebase.database().ref().child('object');

// dbRefObject.on('value', snap => console.log(snap.val()));
 /*var storageRef = firebase.storage().ref("gs://recipe-app-a2e2d.appspot.com/rsz_e-school_web_program_for_refugees-_class_diagram(2).png");
 debugger;
  
var fileUpload = document.getElementById("fileUpload");
debugger
fileUpload.on( "change", function(evt) {
  var firstFile = evt.target.file[0];
  debugger; // get the first file uploaded
  var uploadTask = storageRef.put(firstFile);
  debugger;
     console.log(snapshot.totalBytesTransferred); // progress of upload
 
});
debugger;


var storageRef = firebase.storage.ref("gs://recipe-app-a2e2d.appspot.com/rsz_e-school_web_program_for_refugees-_class_diagram(2).png");
debugger;
storageRef.getDownloadURL().then(function(url) {
	debugger;
  console.log(url);
});
*/

$("#file").on("change", function (event) {

	selectFile = event.target.files[0];
	$("#uploadButton").show();
});
function upload() {
	var filename = selectFile.name;
	var storageRef = firebase.storage().ref('/recipeimages/'+ filename);
	var uploadTask = storageRef.put(selectFile);

	uploadTask.on('state_changed', function (snapshot) {
		}, function (error) {
			
		}, function () {
			var downloadURL =uploadTask.snapshot.downloadURL;
			console.log(downloadURL);
		}
	});
}

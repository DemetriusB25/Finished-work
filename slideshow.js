// JavaScript Document

var myImage=document.getElementById("centerPhoto");

var imageArray=["Eli 2.jpg", "Eli 3.jpg", "Eli 4.jpg", "Eli 5.jpg", "Eli 6.jpg", "Eli 1.jpg"];

var imageIndex=0;

function changeImage () {
	centerPhoto.setAttribute("src", imageArray [ imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) {
		imageIndex=0;
	}
}

var intervalHandle =  setInterval(changeImage,5000);

centerPhoto.onclick=function() {
	clearInterval(intervalHandle);
};
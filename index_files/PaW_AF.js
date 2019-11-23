
class ImageTest {
	constructor(name) {
	this.name = name;
	}
	
	getName() {
		return this.name;
	}
}

class Poet {
	constructor(lName, fName, poetPageURL, shortBio) {
		this.lName = lName;
		this.fName = fName;
		this.poetPageURL = poetPageURL;
		this.shortBio = shortBio;
	}
	
	getlName() {
		return this.lName;
	}
	
	getfName() {
		return this.fName;
	}
	
	getpoetPageURL() {
		return this.poetPageURL;
	}
	
	getshortBio() {
		return this.shortBio;
	}
	
}
	
	var x = 0;
	var poet = [];
	for(x = 0; x < poetData.length; x++) {
		poet[x] = new Poet(poetData[x].lastName, poetData[x].firstName, poetData[x].poetURL, poetData[x].poetShortBio);
	}
	var topBar = [];
var i = 0;
var testImageName = new ImageTest("image493.gif");

for (x = 0; x < poetData.length; x++) {

topBar[x] = new Image();
topBar[x].src = testImageName.getName();
topBar[x].style.position = "absolute";
topBar[x].style.top = 325 + i + "px";
topBar[x].style.left = "222px";
document.body.appendChild(topBar[x]);

var poetPicture = new Image();
poetPicture.src = poet[x].getlName() + poet[x].getfName().charAt(0) + "Picture.png";
poetPicture.style.position = "absolute";
poetPicture.style.top = 335 + i + "px";
poetPicture.style.left = "230px";
poetPicture.width = 81;
poetPicture.height = 100;
document.body.appendChild(poetPicture);

var poetNameWithURL = document.createElement('a');
var linkText = document.createTextNode(poet[x].getlName() + ", " + poet[x].getfName());
poetNameWithURL.appendChild(linkText);
poetNameWithURL.href = poet[x].getpoetPageURL();
poetNameWithURL.style.position = "absolute";
poetNameWithURL.style.top = 325 + i + "px";
poetNameWithURL.style.left = "323px";
poetNameWithURL.width = 585;
document.body.appendChild(poetNameWithURL);

var poetShortBioText = document.createElement('a');
var shortBioText = document.createTextNode(poet[x].getshortBio());
poetShortBioText.appendChild(shortBioText);
poetShortBioText.style.position = "absolute";
poetShortBioText.style.top = 350 + i + "px";
poetShortBioText.style.left = "323px";
poetShortBioText.style.width = 585;
document.body.appendChild(poetShortBioText);

var poetBio = document.createElement('a');
var linkText = document.createTextNode("Bio");
poetBio.appendChild(linkText);
poetBio.href = poet[x].getlName() + poet[x].getfName().charAt(0) + "Bio.htm";
poetBio.style.position = "absolute";
poetBio.style.top = 440 + i + "px";
poetBio.style.left = "323px";
document.body.appendChild(poetBio);

var poetWritings = document.createElement('a');
var linkText = document.createTextNode("Writings");
poetWritings.appendChild(linkText);
poetWritings.href = poet[x].getlName() + poet[x].getfName().charAt(0) + "Poems.htm";
poetWritings.style.position = "absolute";
poetWritings.style.top = 440 + i + "px";
poetWritings.style.left = "585px";
document.body.appendChild(poetWritings);

var poetPublications = document.createElement('a');
var linkText = document.createTextNode("Publications");
poetPublications.appendChild(linkText);
poetPublications.href = poet[x].getlName() + poet[x].getfName().charAt(0) + "Publications.htm";
poetPublications.style.position = "absolute";
poetPublications.style.top = 440 + i + "px";
poetPublications.style.left = "830px";
document.body.appendChild(poetPublications);

i = i + 140;
}

var bottomBar = new Image();
bottomBar.src = "image493.gif";
bottomBar.style.position = "absolute";
bottomBar.style.top = 325 + i + "px";
bottomBar.style.left = "222px";
document.body.appendChild(bottomBar);

var wB = new Image();
wB.src = "image1713.gif";
wB.style.zIndex = -9;
wB.style.position = "absolute";
wB.style.top = "325px";
wB.style.left = "214px";
wB.height = 50 + i;
wB.width = 734;
document.body.appendChild(wB);

var sideBar = new Image();
sideBar.src = "image456.gif";
sideBar.style.zIndex = 9999;
sideBar.style.position = "absolute";
sideBar.style.top = "-2px";
sideBar.style.left = "212px";
sideBar.height = 330 + i;
sideBar.width = 4;
document.body.appendChild(sideBar);




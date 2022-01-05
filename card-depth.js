function shadow(int) {
  return "0px " + int / 4 + "px " + int + "px #00000077"; //shadow equation. accurate to the material design standards (approximately)
}

function init() {
  //fetching all elements flagged as a card
	let items = [
  	document.getElementsByClassName("card"),
    document.getElementsByTagName("card"),
  ];

  Element.prototype.ha = function(a) { return this.hasAttribute(a); }

  //looping through the two arrays above
  for(let list of items) {
    //looping through the elements of these arrays
    for (let el of list) {
      el.style.display = "block";
      
      //checking for style canceling flags
      if (!el.ha("no-margin")) el.style.margin = "25px";
      if (!el.ha("no-height")) el.style.height = "100px";
      if (!el.ha("no-transition")) el.style.transition = ".15s box-shadow";
      if (!el.ha("no-padding")) el.style.padding = "10px";

      //assigning a default value for a check later (in doRadius)
      el.style.borderRadius = el.ha("no-border-radius") ? "0px" : "2px";
      
      //if all is good, assign shadow and radius values.
      doDepth(el); 
      doRadius(el);
    }
  }
}

function setDepth(int, obj, type) {
  if (int == null) return;
  obj.style.boxShadow = shadow(int); //using shadow equation to set css style
  if (type === "hover") obj.setAttribute("z", obj.getAttribute("z-hover")); //for when click and hover interfere with eachother
}

function setRadius(int, obj) {
  if (int == null) return;
  obj.style.borderRadius = int + "px";
}

function doDepth(i) {
  let ga = x => { return i.getAttribute(x); } //easier to call method alias

  //getting attributes
  let zh = ga("z-default") || 5;
  let zhc = ga("z-click") || 5;
  let zhh = ga("z-hover") || 5;
  setDepth(zh, i);
  //events of release (mouse leave, mouse up, etc)
  i.onmouseup = () => { setDepth(ga("z"), i); }
  i.onmouseout = () => { setDepth(zh, i); }

  //events of activate (mouse enter, mouse down, etc)
  i.onmousedown = () => { setDepth(zhc, i); }
  i.onmouseover = () => { setDepth(zhh, i, "hover"); }
}

function doRadius(i) {
  if(i.style.borderRadius == "0px") return;

  let ga = x => { return i.getAttribute(x); } //easier to call method alias

  //getting attributes
  let zh = ga("border-radius") || 2;
  setRadius(zh, i);
}

window.addEventListener("load", init);

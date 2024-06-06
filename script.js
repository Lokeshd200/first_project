let bulbImage=document.getElementById("bulbImg");
let catImage=document.getElementById("catImg");
let switchStatus=document.getElementById("switchStatus");
let offBtn=document.getElementById("offSwitch");
let onBtn=document.getElementById("onSwitch");

function switchOn(){
    bulbImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchStatus.textContent="Switch On";
    onBtn.style.backgroundColor="#cbd2d9";
    offBtn.style.backgroundColor="#e12d39";
}

function switchOff(){
    bulbImage.src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImage.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatus.textContent="Switch Off";
    onBtn.style.backgroundColor="#22c55e"
    offBtn.style.backgroundColor="#cbd2d9";
}

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
const login = () =>{
    user = { username: "AJ",password:12345};
    let usr = window.prompt("Enter Username: ");
    let psd = Number(window.prompt("Enter password: "));
    const {username,password} = user;
    if (!((username === usr)&&(password === psd))){
        window.alert("Wrong Details Entered!!!!");
        window.close();
    }
}
window.alert("Welcome To My Page 🙏");
login();
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


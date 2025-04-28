const tabButtons = document.getElementsByClassName("tab");
const tabContainers = document.getElementsByClassName("tab-container");

function selectTab(evt) {
				let tabBtn = evt.currentTarget;
				
				console.log()
				
				for (let i = 0; i < tabButtons.length; i++) {
								let btn = tabButtons[i];
								btn.className = btn.className.replace("selected", "");
				}
				for (let i = 0; i < tabContainers.length; i++) {
								let container = tabContainers[i];
								container.style.display = "none";
				}
				
				document.getElementById(tabBtn.textContent.trim().toLowerCase()).style.display = "block";
				tabBtn.className += " selected";
}

for (let i = 0; i < tabButtons.length; i++) {
				let btn = tabButtons[i];
				btn.addEventListener(
								"click", 
								function() {
												let tabName = btn.textContent.toLowerCase();
												selectTab(event, tabName);
								}
				)
}

for (let i = 0; i < tabButtons.length; i++) {
				let btn = tabButtons[i];
				btn.addEventListener(
								"click", 
								function() {
												let tabName = btn.textContent.toLowerCase();
												selectTab(event, tabName);
								}
				)
}

document.getElementById("mobs-selector").className += " selected"
document.getElementById("mobs").style.display = "block"

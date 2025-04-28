function cardClicked(evt) {
				let cardEl = evt.currentTarget;
				let mobName = cardEl.querySelector(".mob-name").textContent;
				mobs[mobName.toLowerCase()].takeAttack();
}

let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
				cards[i].addEventListener("click", function() {cardClicked(event)})
}

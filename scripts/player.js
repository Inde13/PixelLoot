const player = {
				name: "Tester",
				coins: 0,
				health: 20,
				maxHealth: 20,
				atk: 3,
				def: 1,
				
				addCoins(amount) {
								this.coins += amount;
								this.updateCoins();
				},
				
				updateCoins() {
								let currency = document.getElementsByClassName("coins")[0];
								let coinsEl = currency.querySelector(".currency-amount");
								coinsEl.textContent = player.coins;
				},
				
				updateHealthbar() {
								let healthPercent = (this.health / this.maxHealth) * 100;
								let healthbar = document.getElementById("player-life");
								let barValue = healthbar.querySelector(".value");
								barValue.style.width = `${healthPercent}%`;
								barValue.textContent = `${this.health}/${this.maxHealth}`;
				},
				
				takeAttack(damage) {
								this.health -= damage;
								this.updateHealthbar();
				},
				
				setStats() {
								document.getElementById("player-atk").textContent = this.atk;
								document.getElementById("player-def").textContent = this.def;
				}
}

player.updateHealthbar();
player.setStats();

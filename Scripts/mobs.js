class Mob {
				constructor(name, maxHealth, atk, def, gdmin, gdmax) {
								this.name = name;
								this.health = maxHealth;
								this.maxHealth = maxHealth;
								this.atk = atk;
								this.def = def;
								this.goldDropMin = gdmin;
								this.goldDropMax = gdmax;
				}
				
				takeAttack() {
								let dmg = player.atk - this.def;
								if (dmg <= 0) return;
								
								this.health -= dmg;
								
									if (this.isDead()) {
												this.reset();
													return;
								}
								
								this.attack();
								
								this.updateHealthbar();
				}
				
				attack() {
								let dmg = this.atk - player.def;
								if (dmg <= 0) return;
								
								player.takeAttack(dmg)
				}
				
				isDead() {
								return this.health <= 0;
				}
				
				reset() {
								this.health = this.maxHealth;
								this.updateHealthbar();
								player.addCoins(this.dropGold());
				}
				
				dropGold() {
								return random(this.goldDropMin, this.goldDropMax);
				}
				
				updateHealthbar() {
								let healthPercent = (this.health / this.maxHealth) * 100;
								let healthbar = document.getElementById(this.name + "-life");
								let barValue = healthbar.querySelector(".value");
								barValue.style.width = `${healthPercent}%`;
								barValue.textContent = `${this.health}/${this.maxHealth}`;
				}
				
				getName() {
								return this.name;
				}
}

const mobs = {
				bat: new Mob("bat", 5, 1, 0, 0, 5),
				wolf: new Mob("wolf", 20, 3, 2, 2, 10)
}

const mobNames = ["bat", "wolf"]

for (let i = 0; i < mobNames.length; i++) {
				let mob = mobs[mobNames[i]];
				let card = document.getElementById(mob.name + "-card");
				let stats = card.querySelector(".mob-stats");
				stats.textContent = `ATK: ${mob.atk} | DEF: ${mob.def}`
				mob.updateHealthbar()
}


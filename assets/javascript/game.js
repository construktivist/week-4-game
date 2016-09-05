$(document).ready(function(){
	gameStart();
	function gameStart(){
		var $finn = $("#finn");
		var $jake = $("#jake");
		var $gunter = $("#gunter");
		var $iceking = $("#iceking");
		var $button = $(".button");
		var characters = [$finn, $jake, $gunter, $iceking];
		var playerCheck = false;
		var playerStatCheck = false;
		var enemyCheck = false;
		var enemyStatCheck = false;
		player = null;
		enemy = null;
		
		function setPlayer(character){
			if (playerCheck === false){
				playerCheck = true;
				$(character).prependTo("#player");
				player = character;
				for(var i = 0; i < characters.length; i++){
					if(characters[i] !== character){	
						$(characters[i]).appendTo(".enemies");
					};
				};	
			}
			else if(playerCheck === true && enemyCheck === false){
				enemyCheck = true;
				$(character).prependTo("#enemy");
				enemy = character;
			}
			else{
				alert("You must defeat your chosen enemy!");
			}
		};
		
		function setStats(character){
			if(playerStatCheck === false){
				playerStatCheck = true;
				if ($finn === character){
					player.hp = 20;
					player.attack = 5;
					player.counterAttack = 2;
				}
				else if ($jake === character){
					player.hp = 15;
					player.attack = 4;
					player.counterAttack = 3;
				}
				else if($gunter === character){
					player.hp = 10;
					player.attack = 3;
					player.counterAttack = 4;
				}
				else if($iceking === character){
					player.hp = 5;
					player.attack = 2;
					player.counterAttack = 5;
				}
				else{
					console.log("Not player");
				}
				console.log(player);
			}
			else{
				if (enemyStatCheck === false){
					enemyStatCheck = true;
					if ($finn === character){
						enemy.hp = 20;
						enemy.attack = 5;
						enemy.counterAttack = 2;
					}
					else if ($jake === character){
						enemy.hp = 15;
						enemy.attack = 4;
						enemy.counterAttack = 3;
					}
					else if($gunter === character){
						enemy.hp = 10;
						enemy.attack = 3;
						enemy.counterAttack = 4;
					}
					else if($iceking === character){
						enemy.hp = 5;
						enemy.attack = 2;
						enemy.counterAttack = 5;
					}
					else{
						console.log("Not enemy");
					}		
					console.log(enemy);
				}
			};	
		};
		
		function combat(){
			enemy.hp -= player.attack;
			player.hp -= enemy.counterAttack;
			if (enemy.hp <= 0){
				hideCharacter();
				enemyCheck = false;
				enemyStatCheck = false;
			}
			else if (player.hp <= 0){
				for(var i = 0; i < characters.length; i++){
					$(characters[i]).appendTo(".character-container");
				};
				playerCheck = false;
				enemyCheck = false;
				gameStart();
			}
			else{
				player.attack += player.attack;
				$(".combat-log").html("You did " + player.attack + "damage! Your enemy countered dealing " + enemy.counterAttack + "damage!");
				$("#enemy-hp").html(enemy.hp);
				$("#player-hp").html(player.hp);

			}
		};
		
		function hideCharacter(){
			(enemy).hide();
		};

		$($finn).click(function(){
			setPlayer($finn);
			setStats($finn);	
		});

		$($jake).click(function(){
			setPlayer($jake);
			setStats($jake);
		}); 

		$($gunter).click(function(){
			setPlayer($gunter);
			setStats($gunter);	
		});

		$($iceking).click(function(){
			setPlayer($iceking);
			setStats($iceking);	
		});	

		$($button).click(function(){
			combat();
		});
	};	
});
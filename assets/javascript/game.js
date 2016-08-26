$(document).ready(function(){
	var $finn = $("#finn");
	var $jake = $("#jake");
	var $gunter = $("#gunter");
	var $iceking = $("#iceking");
	var $button = $(".button");
	var characters = [$finn, $jake, $gunter, $iceking];
	var playerCheck = false;
	var playerStatCheck = false;
	var enemyCheck = false;
	player;
	enemy;
	
	var playerStats = {
		hp: 0,
		attack: 0,
		counterAttack: 0
	};
	
	var enemyStats = {
		hp: 0,
		attack: 0,
		counterAttack: 0
	};
	
	function setPlayer(character){
		if (playerCheck === false){

			playerCheck = true;

			$(character).appendTo("#player");
			
			player = character;
			
			for(var i = 0; i < characters.length; i++){
				
				if(characters[i] !== character){
					
					$(characters[i]).appendTo(".enemies");
				};
			};	
		}

		else if(playerCheck === true && enemyCheck === false){

			enemyCheck = true;

			$(character).appendTo("#enemy");
			
			enemy = character;
		}

		else{
			alert("You must defeat your chosen enemy!");
		}

	};
	
	function setPlayerStats(character){
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
		};
	};

	function setEnemyStats(character){
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
	};

	$($finn).click(function(){
		setPlayer($finn);
		setPlayerStats($finn);	
		setEnemyStats($finn);
	});

	$($jake).click(function(){
		setPlayer($jake);
		setPlayerStats($jake);
		setEnemyStats($jake);
	}); 

	$($gunter).click(function(){
		setPlayer($gunter);
		setPlayerStats($gunter);	
		setEnemyStats($gunter);
	});

	$($iceking).click(function(){
		setPlayer($iceking);
		setPlayerStats($iceking);	
		setEnemyStats($iceking);
	});	

	$($button).click(function(){
		console.log("Attack!");
	});

});
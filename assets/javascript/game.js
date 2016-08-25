$(document).ready(function(){
	var $finn = $("#finn");
	var $jake = $("#jake");
	var $gunter = $("#gunter");
	var $iceking = $("#iceking");
	var $button = $(".button");
	var characters = [$finn, $jake, $gunter, $iceking];
	var playerCheck = false;
	var enemyCheck = false;
	var player;
	var enemy;
	
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

	var finn = {
		hp: 20,
		attack: 5,
		counterAttack: 2
	};

	var jake = {
		hp: 20,
		attack: 1,
		counterAttack: 1
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
		if (player === character){
			player.hp = 5;
			player.attack = 4;
			player.counterAttack = 5;
		}
		else if{
			player.hp = 4;
			player.attack = 3;
			player.counterAttack = 5;
		}
		else if{
			player.hp = 20;
			player.attack = 2;
			player.counterAttack = 5;
		}
		else if{
			player.hp = 20;
			player.attack = 1;
			player.counterAttack = 5;
		}
		console.log(player);
	}

	$($finn).click(function(){
		setPlayer($finn);
		setPlayerStats($finn);

	});

	$($jake).click(function(){
		setPlayer($jake);
		setPlayerStats($jake);

	}); 

	$($gunter).click(function(){
		setPlayer($gunter);
	});

	$($iceking).click(function(){
		setPlayer($iceking);
	});	

	$($button).click(function(){
		console.log("Attack!");
		combat(finn, jake);
	});

});
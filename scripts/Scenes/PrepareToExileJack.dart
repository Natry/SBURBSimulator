part of SBURBSim;


class prepareToExileJack {
	var session;
	bool canRepeat = true;
	List<dynamic> playerList = [];  //what players are already in the medium when i trigger?
	var player = null;	


	prepareToExileJack(this.session) {}


	void findSufficientPlayer(){
		this.player =  findAspectPlayer(this.session.availablePlayers, "Void");

		if(this.player == null){
			this.player =  findAspectPlayer(this.session.availablePlayers, "Mind");
		}else if(this.player == null){
			this.player =  findClassPlayer(this.session.availablePlayers, "Thief");
		}else if(this.player == null){
			this.player =  findClassPlayer(this.session.availablePlayers, "Rogue");
		}else if(this.player == null){
			this.player =  findClassPlayer(this.session.availablePlayers, "Seer");
		}else if(this.player == null){
			this.player =  findAspecstPlayer(this.session.availablePlayers, "Doom");
		}else if(this.player == null){
			this.player =  findAspectPlayer(this.session.availablePlayers, "Light");
		}
	}
	void renderContent(div){
		div.append("<br><img src = 'images/sceneIcons/shenanigans_icon.png'>"+this.content());
	}
	dynamic trigger(playerList){
		this.player = null;
		this.playerList = playerList;
		this.findSufficientPlayer(this.session.availablePlayers);
		return (this.player != null) && (	!this.session.jack.exiled && this.session.jack.getStat("currentHP") > 0 && 	this.session.jack.getStat("power") < 300); //if he's too strong, he'll just show you his stabs. give up
	}
	dynamic spyContent(){
		String ret = "The " + this.player.htmlTitle() + " performs a daring spy mission,";
		if(this.player.power > 	this.session.kingStrength/100){
			this.session.jack.power += -15;
			ret += " gaining valuable intel to use against Jack Noir. ";
		}else{
			ret += " but hilariously bungles it. ";
		}
		return ret;
	}
	dynamic assasinationContent(){
		String ret = "The " + this.player.htmlTitle() + " performs a daring assasination mission against one of Jack Noir's minions,";
		if(this.player.power > this.session.kingStrength/100){
			this.session.jack.power += -30;
			ret += " losing him a valuable ally. ";
		}else{
			ret += " but hilariously bungles it. ";
		}
		return ret;
	}
	dynamic harrassContent(){
		String ret = "The " + this.player.htmlTitle() + " makes a general nuisance of themselves to Jack Noir, but in a deniable way. ";
		this.session.jack.power += -10;
		return ret;
	}
	dynamic content(){
		this.player.increasePower();
		removeFromArray(this.player, this.session.availablePlayers);
		var rand = Math.seededRandom();
		if(rand > .3){
			return this.harrassContent();
		}else if(rand > .6){
			return this.spyContent();
		}else{
			return this.assasinationContent();
		}
	}

}

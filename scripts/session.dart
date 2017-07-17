part of SBURBSim;

//okay, fine, yes, global variables are getting untenable.
class Session {
	var session_id; //initial seed
	//var sceneRenderingEngine = new SceneRenderingEngine(false); //default is homestuck  //comment this line out if need to run sim without it crashing
	List<dynamic> players = [];	var fraymotifCreator = new FraymotifCreator();  //as long as FraymotifCreator has no state data, this is fine.
	bool hasClubs = false;
	num sessionHealth = 500; //grimDark players work to lower it. at 0, it crashes.  maybe have it do other things at other levels, or effect other things.
	bool hasDiamonds = false;
	bool opossumVictory = false;
	bool hasBreakups = false;  //sessions aren't in charge of denizens anymore, they are for players and set when they get in the medium
	List<dynamic> replayers = []; //used for fan oc easter eggs.
	var afterLife = new AfterLife();
	var queensRing = null; //eventually have white and black ones.
	var kingsScepter = null;
	bool janusReward = false;
	bool badBreakDeath = false;
	bool jackGotWeapon = false;
	bool jackRampage = false;
	bool jackScheme = false;
	bool luckyGodTier = false;
	bool choseGodTier = false;
	bool plannedToExileJack = false;
	bool hasHearts = false;
	bool hasSpades = false;
	bool rocksFell = false;
	bool denizenBeat = false;	//session no longer keeps track of guardians.
	var king = null;
	var queen = null;
	var jack = null;
	num numScenes = 0;
	bool rapBattle = false;
	bool crashedFromSessionBug = false; //gets corrupted if an unrecoverable error gets caught.
	bool crashedFromPlayerActions = false;
	bool sickFires = false;
	bool dreamBubbleAfterlife = false;
	var democraticArmy = null;
	bool sbahj = false;
	var heroicDeath = null;
	bool won = false;
	var justDeath = null;
	bool mayorEnding = false;
	bool waywardVagabondEnding = false;
	num hardStrength = 1000;
	num minFrogLevel = 18;
	num goodFrogLevel = 28;
	bool reckoningStarted = false;
	List<dynamic> aliensClonedOnArrival = []; //if i'm gonna do time shenanigans, i need to know what the aliens were like when they got here.
	bool murdersHappened = false;
	bool queenRejectRing = false;
	bool goodLuckEvent = false;
	bool badLuckEvent = false;
	bool hasFreeWillEvents = false;
	bool ectoBiologyStarted = false;
	bool doomedTimeline = false;
	bool makeCombinedSession = false; //happens if sick frog and few living players
	bool scratched = false;
	bool scratchAvailable = false;
	num timeTillReckoning = 0;
	num reckoningEndsAt = -15;
	bool godTier = false;
	bool grimDarkPlayers = false;
	bool questBed = false;
	bool sacrificialSlab = false;
	num sessionType = -999;
	List<dynamic> doomedTimelineReasons = [];
	num currentSceneNum = 0;
	List<dynamic> scenes = []; //scene controller initializes all this.
	List<dynamic> reckoningScenes = [];
	List<dynamic> deathScenes = [];
	List<dynamic> available_scenes = [];
	bool hadCombinedSession = false;
	var parentSession = null;
	List<dynamic> availablePlayers = [];  //which players are available for scenes or whatever.
	List<dynamic> importantEvents = [];
	bool yellowYard = false;
	var yellowYardController = new YellowYardResultController();//don't expect doomed time clones to follow them to any new sessions

	// extra fields - stop abusing object notation lol -PL
	bool crashedFromCustomShit = false;


	Session(this.session_id) {}


	void destroyBlackRing(){
		this.queensRing = null;
		this.jack.crowned = null;
		this.queen.crowned = null;
	}
	dynamic findBestSpace(){
		var spaces = findAllAspectPlayers(this.players, "Space");
		var ret = spaces[0];
		for(num i = 0; i<spaces.length; i++){
			if(spaces[i].landLevel > ret.landLevel) ret = spaces[i];
		}
		return ret;
	}
	dynamic findMostCorruptedSpace(){
		var spaces = findAllAspectPlayers(this.players, "Space");
		var ret = spaces[0];
		for(num i = 0; i<spaces.length; i++){
			if(spaces[i].landLevel< ret.landLevel) ret = spaces[i];
		}
		return ret;  //lowest space player.
	}
	dynamic addImportantEvent(important_event){
		var alternate = this.yellowYardController.doesEventNeedToBeUndone(important_event);
	//	print("alternate i got from yellowYardController is: " + alternate);
		if(alternate){
		//	print("returning alternate");
		  if(doEventsMatch(important_event, this.afterLife.timeLineSplitsWhen,false))  this.afterLife.allowTransTimeLineInteraction();
			return alternate; //scene will use the alternate to go a different way. important event no longer happens.
		}else{
			//print(" pushing important event and returning null");
			this.importantEvents.add(important_event);
			return null;
		}
	}
	String frogStatus(){
		var spacePlayer = this.findBestSpace();
		var corruptedSpacePlayer = this.findMostCorruptedSpace();
		//var spacePlayer = findAspectPlayer(this.players, "Space");
		if(corruptedSpacePlayer.landLevel <= this.goodFrogLevel * -1) return "Purple Frog"; //is this...a REFRANCE???
		if(spacePlayer.landLevel < this.minFrogLevel){
			return "No Frog";
		}else if(spacePlayer.landLevel > this.goodFrogLevel){
			return "Full Frog";
		}else{
			return "Sick Frog";
		}

	}
	dynamic addEventToUndoAndReset(e){
		//when I reset, need things to go the same. that includes having no ghosts interact with the session. figure out how to renable them once my event happens again.
		this.afterLife.complyWithLifeTimeShenanigans(e);
		//print("undoing an event.");
		if(this.scratched){
			return this.addEventToUndoAndResetScratch(e); //works different
		}
		if(e){//will be null if undoing an undo
			this.yellowYardController.eventsToUndo.push(e);
		}
		//reinit the seed and restart the session
		var savedPlayers = curSessionGlobalVar.players;
		this.reinit();
		createScenesForSession(curSessionGlobalVar);
		//players need to be reinit as well.
		curSessionGlobalVar.makePlayers();
		curSessionGlobalVar.randomizeEntryOrder();
		curSessionGlobalVar.makeGuardians(); //after entry order established
		checkEasterEgg(this.easterCallBack,this); //in the controller.

		return null;
	}
	void easterCallBack(that){
		//now that i've done that, (for seed reasons) fucking ignore it and stick the actual players in
		//after alll, i could be from a combo session.
		//but don't just hardcore replace. need to...fuck. okay, cloning aliens now.
		curSessionGlobalVar.aliensClonedOnArrival = that.aliensClonedOnArrival;
		//print("adding this many clone aliens: " + curSessionGlobalVar.aliensClonedOnArrival.length);
		//print(getPlayersTitles(curSessionGlobalVar.aliensClonedOnArrival));
		var aliens = []  ;//if don't make copy of aliensClonedOnArrival, goes into an infinite loop as it loops on it and adds to it inside of addAliens;
		for(num i = 0; i<that.aliensClonedOnArrival.length; i++){
			aliens.push(that.aliensClonedOnArrival[i]);
		}
		that.aliensClonedOnArrival = [];//jettison old clones.
		addAliensToSession(curSessionGlobalVar, aliens);

		restartSession();//in controller
	}
	void addEventToUndoAndResetScratch(e){
		print('yellow yard from scratched session');
		if(e){//will be null if undoing an undo
			this.yellowYardController.eventsToUndo.push(e);
		}
		var ectoSave = this.ectoBiologyStarted;
		reinit();
		//use seeds the same was as original session and also make DAMN sure the players/guardians are fresh.
		curSessionGlobalVar.makePlayers();
		curSessionGlobalVar.randomizeEntryOrder();
		curSessionGlobalVar.makeGuardians(); //after entry order established
		this.ectoBiologyStarted = ectoSave;
		this.scratched = true;
		this.switchPlayersForScratch();



		restartSession();//in controller
	}
	dynamic initializeCombinedSession(){
		this.aliensClonedOnArrival = []; //PROBABLY want to do this.
		var living = findLivingPlayers(this.players);
		//nobody is the leader anymore.
		var newSession = new Session(Math.seed);  //this is a real session that could have gone on without these new players.
		newSession.currentSceneNum = this.currentSceneNum;
		newSession.afterLife = this.afterLife; //afterlife carries over.
		newSession.dreamBubbleAfterlife = this.dreamBubbleAfterlife; //this, too
		newSession.reinit();
		newSession.makePlayers();
		newSession.randomizeEntryOrder();
		newSession.makeGuardians();
		if(living.length + newSession.players.length > 12){
			//print("New session " + newSession.session_id +" cannot support living players. Already has " + newSession.players.length + " and would need to add: " + living.length);
			return null;  //their child session is not able to support them
		}
	//	print("about to add: " + living.length + " aliens to new session.");
		//print(getPlayersTitles(living));
		addAliensToSession(newSession, this.players); //used to only bring players, but that broke shipping. shipping is clearly paramount to Skaia, because everything fucking crashes if shipping is compromised.


		this.hadCombinedSession = true;
		newSession.parentSession = this;
		createScenesForSession(newSession);
		//print("Session: " + this.session_id + " has made child universe: " + newSession.session_id + " child has this long till reckoning: " + newSession.timeTillReckoning);
		return newSession;
	}
	dynamic getVersionOfPlayerFromThisSession(player){
		//can double up on classes or aspects if it's a combo session. god. why are their combo sessions?
		for(num i = 0; i< this.players.length; i++){
			var p = this.players[i];
			if(p.class_name == player.class_name && p.aspect == player.aspect){
				return p; //yeah, technically there COULD be two players with the same claspect in a combo session, but i have ceased caring.
			}
		}
		print("Error finding session's: " + player.title());
		return null;
	}
	void reinit(){
		groundHog = false;
		Math.seed = this.session_id; //if session is reset,
		//print("reinit with seed: "  + Math.seed);
		this.timeTillReckoning = getRandomInt(10,30);
		this.sessionType = Math.seededRandom();
		this.available_scenes = [];  //need a fresh slate because UpdateShippingGrid has MEMORY unlike all other scenes.
		createScenesForSession(this);
		//curSessionGlobalVar.available_scenes = curSessionGlobalVar.scenes.slice(0);
		//curSessionGlobalVar.doomedTimeline = false;
		this.doomedTimeline = false;
		this.setUpBosses();
		this.democracyStrength = 0;
		this.reckoningStarted = false;
		this.importantEvents = [];
		this.rocksFell = false;  //sessions where rocks fell screw over their scratched and yarded iterations, dunkass
		this.doomedTimelineReasons = [];
		this.ectoBiologyStarted = false;

	}
	void makePlayers(){
		//print("Making players with seed: " + Math.seed);
		this.players = [];
		available_classes = classes.sublist(0); //re-initPlayers available classes.
		available_classes_guardians = classes.sublist(0);
		available_aspects = nonrequired_aspects.sublist(0);
		var numPlayers = getRandomInt(2,12);
		this.players.add(randomSpacePlayer(this));
		this.players.add(randomTimePlayer(this));

		for(int i = 2; i<numPlayers; i++){
			this.players.add(randomPlayer(this));
		}

		for(num j = 0; j<this.players.length; j++){
			var p = this.players[j];
			p.generateRelationships(this.players);
		}

		decideInitialQuadrants(this.players);

		this.hardStrength = 1000 + 50 * this.players.length;
	}
	String convertPlayerNumberToWords(){
		//alien players don't count
		var ps = findPlayersFromSessionWithId(this.players, this.session_id);
		if(ps.length == 0){
			ps = this.players;
		}
		var length = ps.length;
		if(length == 2){
			return "TWO";
		}else if(length == 3){
			return "THREE";
		}else if(length == 4){
			return "FOUR";
		}else if(length == 5){
			return "FIVE";
		}else if(length == 6){
			return "SIX";
		}else if(length == 7){
			return "SEVEN";
		}else if(length == 8){
			return "EIGHT";
		}else if(length == 9){
			return "NINE";
		}else if(length == 10){
			return "TEN";
		}else if(length == 11){
			return "ELEVEN";
		}else if(length == 12){
			return "TWELVE";
		}else{
			return "???";
		}
	}
	void makeGuardians(){
		//print("Making guardians");
		available_classes = classes.sublist(0);
		available_aspects = nonrequired_aspects.sublist(0); //required_aspects
		available_aspects.addAll(required_aspects.sublist(0));
		List<dynamic> guardians = [];
		for(num i = 0; i<this.players.length; i++){
			  var player = this.players[i];
				player.makeGuardian();
				guardians.add(player.guardian);
		}

		for(num j = 0; j<this.players.length; j++){
			var g = this.players[j].guardian;
			g.generateRelationships(guardians);
		}
		decideInitialQuadrants(guardians);
	}
	void randomizeEntryOrder(){
		this.players = shuffle(this.players);
		this.players[0].leader = true;
	}
	void switchPlayersForScratch(){
		//var tmp = curSessionGlobalVar.players;
		//curSessionGlobalVar.players = curSessionGlobalVar.guardians;
		//curSessionGlobalVar.guardians = tmp;
		var nativePlayers = findPlayersFromSessionWithId(this.players, this.session_id);
		//print(nativePlayers);
		var guardians = getGuardiansForPlayers(nativePlayers);
		this.players = guardians;
	}
	String getSessionType(){
		if(this.sessionType > .6){
			return "Human";
		}else if(this.sessionType > .3){
			return "Troll";
		}
		return "Mixed";
	}
	void setUpBosses(){

		this.queensRing = new GameEntity(this, "!!!RING!!! OMG YOU SHOULD NEVER SEE THIS!",false);
		this.queensRing.setStats(0,0,0,0,0,0,0,false, false, [],1000);
		var f = new Fraymotif([],  "Red Miles", 3);
		f.effects.add(new FraymotifEffect("power",2,true));
		f.flavorText = " You cannot escape them ";
		this.queensRing.fraymotifs.push(f);

		this.kingsScepter = new GameEntity(this, "!!!SCEPTER!!! OMG YOU SHOULD NEVER SEE THIS!",false);
		this.kingsScepter.setStats(0,0,0,0,0,0,0,false, false, [],1000);
		f = new Fraymotif([],  "Reckoning Meteors", 3)  ;//TODO eventually check for this fraymotif (just lik you do troll psionics) to decide if you can start recknoing.;
		f.effects.add(new FraymotifEffect("power",2,true));
		f.flavorText = " The very meteors from the Reckoning rain down. ";
		this.kingsScepter.fraymotifs.push(f);
		
		this.king = new GameEntity(this, "Black King", this.kingsScepter);
		//minLuck, maxLuck, hp, mobility, sanity, freeWill, power, abscondable, canAbscond, framotifs
		this.king.setStats(-10,10,1000,0,0,-100,100,false, false, [],1000); //royalty have no free will
		this.queen = new GameEntity(this, "Black Queen",this.queensRing);
		this.queen.setStats(-10,10,500,10,0,-100,50,false, false, [],1000); //red miles, put on ring
		this.queen.carapacian = true;
		this.king.carapacian = true;

		this.jack = new GameEntity(this, "Jack",null);
		this.jack.carapacian = true;
		this.jack.setStats(-500,-10,20,-50,-100,1000,40,true, true, [],100000); //jack is kind of a big deal. luck determines his odds of finding bullshit weapon
		//jack uses "Stab to Meet You", it's not very effective (nobody seems to think his stabs are important until he's crowned.)
		f = new Fraymotif([],  "Stab To Meet You", 1);
		f.effects.add(new FraymotifEffect("power",3,true));
		f.flavorText = " It's pretty much how he says 'Hello'. ";
		this.jack.fraymotifs.push(f);

		this.democraticArmy = new GameEntity(this, "Democratic Army",null); //doesn't actually exist till WV does his thing.
		this.democraticArmy.carapacian = true;
		this.democraticArmy.setStats(0,0,0,0,0,0,0,false, false, [],1000);
		f = new Fraymotif([],  "Democracy Charge", 2);
		f.effects.add(new FraymotifEffect("power",3,true));
		f.flavorText = " The people have chosen to Rise Up against their oppressors. ";
		this.democraticArmy.fraymotifs.push(f);


	}
	String toString(){
		return this.session_id;
	}
	dynamic newScene(){
		this.currentSceneNum ++;
		var div;
		if(this.sbahj){
			div = "<div class ;= 'scene' id='scene"+this.currentSceneNum.toString()+"' style;='";
			div += "background-color: #00ff00;";
			div += "font-family: Comic Sans MS, cursive, sans-serif;";
			//querySelector("#scene"+this.currentSceneNum).css("background-color", "#00ff00");
			var reallyRand = getRandomIntNoSeed(1,10);
			for(int i = 0; i<reallyRand; i++){
				var indexOfTerribleCSS = getRandomIntNoSeed(0,terribleCSSOptions.length-1);
				var tin = terribleCSSOptions[indexOfTerribleCSS];
				if(tin[1] == "????"){
					tin[1] = getRandomIntNoSeed(1,100) +"%";
				}
				div += tin[0] + tin[1]+";";
			}
			div += "' >";
			if(ouija == true) div += "<img class ;= 'pen15' src = 'images/pen15_bg1.png'>" ;//can't forget the dicks;
			div += "</div>";
		}else if(ouija == true){
			var trueRandom = getRandomIntNoSeed(1,4);
			div = "<div class ;= 'scene' id='scene"+this.currentSceneNum+"'>";
			div += "<img class ;= 'pen15' src = 'images/pen15_bg"+ trueRandom+".png'>";
			div += "</div>";
		}else{
			div = "<div class ;= 'scene' id='scene"+this.currentSceneNum+"'></div>";
		}
		querySelector("#story").append(div);
		return querySelector("#scene"+this.currentSceneNum);
	}
	dynamic getLineage(){
			if(this.parentSession){
					return this.parentSession.getLineage().concat([this]);
			}
			return [this];
	}
	dynamic generateSummary(){
		var summary = new SessionSummary();
		summary.setMiniPlayers(this.players);
		summary.blackKingDead = this.king.dead || this.king.getStat("currentHP") <;=0
		summary.mayorEnding = this.mayorEnding;
		summary.waywardVagabondEnding = this.waywardVagabondEnding;
		summary.badBreakDeath = this.badBreakDeath;
		summary.luckyGodTier = this.luckyGodTier;
		summary.choseGodTier = this.choseGodTier;
		summary.scratched = this.scratched;
		summary.opossumVictory = this.opossumVictory;
		summary.rocksFell = this.rocksFell;
		summary.won = this.won;
		summary.hasBreakups = this.hasBreakups;
		summary.ghosts = this.afterLife.ghosts;
		summary.sizeOfAfterLife = this.afterLife.ghosts.length;
		summary.heroicDeath = this.heroicDeath;
		summary.justDeath = this.justDeath;
		summary.crashedFromSessionBug = this.crashedFromSessionBug;
		summary.crashedFromPlayerActions = this.crashedFromPlayerActions;
		summary.hasFreeWillEvents = this.hasFreeWillEvents;
		summary.averageMinLuck = getAverageMinLuck(this.players);
		summary.averageMaxLuck = getAverageMaxLuck(this.players);
		summary.averagePower = getAveragePower(this.players);
		summary.averageMobility = getAverageMobility(this.players);
		summary.averageFreeWill = getAverageFreeWill(this.players);
		summary.averageHP = getAverageHP(this.players);
		summary.averageRelationshipValue = getAverageRelationshipValue(this.players);
		summary.averageSanity = getAverageSanity(this.players);
		summary.session_id = this.session_id;
		summary.hasLuckyEvents = this.goodLuckEvent;
		summary.hasUnluckyEvents = this.badLuckEvent;
		summary.rapBattle = this.rapBattle;
		summary.sickFires = this.sickFires;
		summary.frogStatus = this.frogStatus();
		summary.godTier = this.godTier;
		summary.questBed = this.questBed;
		summary.sacrificialSlab = this.sacrificialSlab;
		summary.num_scenes = this.numScenes;
		summary.players = this.players;
		summary.mvp = findStrongestPlayer(this.players);
		summary.parentSession = this.parentSession;
		summary.scratchAvailable = this.scratchAvailable;
		summary.yellowYard = this.yellowYard;
		summary.numLiving =  findLivingPlayers(this.players).length;
		summary.numDead =  findDeadPlayers(this.players).length;
		summary.ectoBiologyStarted = this.ectoBiologyStarted;
		summary.denizenBeat = this.denizenBeat;
		summary.plannedToExileJack = this.plannedToExileJack;
		summary.exiledJack = this.jack.exiled;
		summary.exiledQueen = this.queen.exiled;
		summary.jackGotWeapon = this.jackGotWeapon;
		summary.jackRampage = this.jackRampage;
		summary.jackScheme = this.jackScheme;
		summary.kingTooPowerful =  this.king.getStat("power")> this.hardStrength;
		summary.queenRejectRing = this.queenRejectRing;
		summary.democracyStarted =  this.democraticArmy.power > 0;
		summary.murderMode = this.murdersHappened;
		summary.grimDark = this.grimDarkPlayers;

		var spacePlayer = this.findBestSpace();
		var corruptedSpacePlayer = this.findMostCorruptedSpace();
		if(summary.frogStatus == "Purple Frog" ){
			summary.frogLevel =corruptedSpacePlayer.landLevel;
		}else{
			summary.frogLevel =spacePlayer.landLevel;
		}
		
		summary.hasDiamonds =this.hasDiamonds;
		summary.hasSpades = this.hasSpades;
		summary.hasClubs = this.hasClubs;
		summary.hasHearts =  this.hasHearts;
		return summary;
	}

}




String summarizeScene(scenesTriggered, str){
	var tmp = findSceneNamed(scenesTriggered,str);
	if(tmp != "No"){
		tmp = "Yes";
	}
	return "<br>&nbsp&nbsp&nbsp&nbsp" +str + ": " + tmp;
}



dynamic findSceneNamed(scenesToCheck, name){
	for(num i = 0; i<scenesToCheck.length; i++){
		if(scenesToCheck[i].constructor.name == name){
			return scenesToCheck[i];
		}
	}
	return "No";
}




	//save a copy of the alien (in case of yellow yard)
	void addAliensToSession(newSession, aliens){
		//print("in method, adding aliens to session");
		for(num i = 0; i<aliens.length; i++){
			var survivor = aliens[i];
			survivor.land = null;
			survivor.dreamSelf = false;
			survivor.godDestiny = false;
			survivor.leader = false;
		}
		//save a copy of the alien players in case this session has time shenanigans happen

		for(num i = 0; i<aliens.length; i++){
			var survivor = aliens[i];
			newSession.aliensClonedOnArrival.push(clonePlayer(survivor, newSession));
		}
		//don't want relationships to still be about original players
		for(num i = 0; i<newSession.aliensClonedOnArrival.length; i++){
			var clone = newSession.aliensClonedOnArrival[i];
			transferFeelingsToClones(clone, newSession.aliensClonedOnArrival);
		}
			//print("generated relationships between clones");
		//generate relationships AFTER saving a backup of hte player.
		//want clones to only know about other clones. not players.
		for(num i = 0; i<aliens.length; i++){
			var survivor = aliens[i];
			//print(survivor.title() + " generating relationship with new players ")
			survivor.generateRelationships(newSession.players); //don't need to regenerate relationship with your old friends
		}


		for(var j= 0; j<newSession.players.length; j++){
			var player = newSession.players[j];
			player.generateRelationships(aliens);
		}

		for(num i = 0; i<aliens.length; i++){
			for(var j= 0; j<newSession.players.length; j++){
					var player = newSession.players[j];
					var survivor = aliens[i];
					//survivors have been talking to players for a very long time, because time has no meaning between univereses.
					var r1 = survivor.getRelationshipWith(player);
					var r2 = player.getRelationshipWith(survivor);
					r1.moreOfSame();
					r1.moreOfSame();
					//been longer from player perspective
					r2.moreOfSame();
					r2.moreOfSame();
					r2.moreOfSame();
					r2.moreOfSame();
			}
	}

	newSession.players= newSession.players.concat(aliens);
}

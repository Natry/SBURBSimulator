import "../../GameEntity.dart";
import "SBURBClass.dart";
import "../../../SBURBSim.dart";

import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";


class Lord extends SBURBClass {

    @override
    String sauceTitle = "Shogun";

    //what sort of quests rewards do I get?
    @override
    double itemWeight = 0.01;
    @override
    double fraymotifWeight = 0.5;
    @override
    double companionWeight = 2.01;

    @override
    List<String> bureaucraticBullshit = <String>["needs to file some proclamations.","has some laws to put into place.","needs some decrees to be filed in triplicate"];

    @override
    double difficulty = 2.0;
    @override
    List<String> levels = ["LORDLING", "DELEGATION DELIVERER", "BUFFER THAN KR"];
    @override
    List<String> quests = ["inspiring the consorts to produce great works of art", "causing events to transpire such that the consorts improve themselves", "avidly learning about consort history and art"];
    @override
    List<String> postDenizenQuests = ["inspiring the consorts to rebuild their land", "showing the consorts what strength through adversity means", "hanging back and watching the consorts rebuild", "making sure the recovery process is going as intended"];
    @override
    List<String> handles = ["lording", "leaderly", "laughing", "laughsassin","lawful", "lordly", "legendary", "legionnaires", "lacerating", "lactate", "legislacerator"];

    @override
    bool isProtective = false;
    @override
    bool isSmart = false;
    @override
    bool isSneaky = false;
    @override
    bool isMagical = true;
    @override
    bool isDestructive = true;
    @override
    bool isHelpful = false;
    WeightedList<Item> duttonItems = new WeightedList<Item>();


    @override
    List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
        new AssociatedStat(Stats.SBURB_LORE, 0.1, false)
    ]);

    Lord() : super("Lord", 19, false);


    @override
    bool highHinit() {
        return true;
    }

    @override
    void initializeItems() {
        duttonItems.add((new Item("Dream Bubbles Book",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.CLASSY, ItemTraitFactory.BOOK, ItemTraitFactory.DUTTON])));

        items = new WeightedList<Item>()

            ..add(new Item("Deck of Uno Cards",<ItemTrait>[ItemTraitFactory.CARD, ItemTraitFactory.PLYWOOD, ItemTraitFactory.CLASSY],shogunDesc: "Shoguns Card",abDesc:"Some kind of memey bullshit."))
            ..add(new Item("Lord's Cape",<ItemTrait>[ItemTraitFactory.CLOTH, ItemTraitFactory.CLASSRELATED, ItemTraitFactory.CLASSY],shogunDesc: "Shoguns Cape",abDesc:"Lord Shit"))
            ..add(new Item("Drawing Tablet",<ItemTrait>[ItemTraitFactory.SMARTPHONE, ItemTraitFactory.CLASSRELATED, ItemTraitFactory.CLASSY],shogunDesc: "Shitpost Etching Table",abDesc:"Have fun drawing grids."))
            ..add(new Item("How to Make Friends And Influence People",<ItemTrait>[ItemTraitFactory.LEGENDARY,ItemTraitFactory.PAPER, ItemTraitFactory.CLASSRELATED, ItemTraitFactory.ENRAGING, ItemTraitFactory.BOOK],shogunDesc: "Book for Nerds",abDesc:"Good luck with that. You'll need it, asshole."));
    }


    @override
    bool isActive([double multiplier = 0.0]) {
        if(multiplier >= 0) { //if no stat passed, act active
           // ;
            return true; //muse applies it to self if bad.
        }
       // ;
        return false; //to others if good.
    }


    @override
    num modPowerBoostByClass(num powerBoost, AssociatedStat stat) {
        return powerBoost; //no change.
    }

    //you don't expect a muse to start shit
    @override
    double getAttackerModifier() {
        return 3.1;
    }

    @override
    double getDefenderModifier() {
        return 0.1; //john pounds the living daylights outta calliborn, AW points out
    }

    @override
    double getMurderousModifier() {
        return 3.1;
    }

    @override
    bool hasInteractionEffect() {
        return true;
    }

    @override
    String interactionFlavorText(Player me, GameEntity target, Random rand) {
        return " The ${me.htmlTitle()} hoardes the benefits of  ${me.aspect.name} while having  ${target.htmlTitle()} shoulder the burdens. ";
    }

    //TODO using the existing framework, how would i make it so that regular things matter based on target, too? i want to be lazy here. prefer caring about land update.
    @override
    void processStatInteractionEffect(Player p, GameEntity target, AssociatedStat stat) {
        num powerBoost = 2 * p.getPowerForEffects() / 20;

        powerBoost = this.modPowerBoostByClass(powerBoost, stat);
        if(p.session.mutator.bloodField) powerBoost = powerBoost * p.session.mutator.bloodBoost;
        //give bad to me and good to you.
        if(powerBoost >=0) {
            p.modifyAssociatedStat(powerBoost, stat);
        }else {
            target.modifyAssociatedStat(powerBoost, stat);
        }
    }

    //rule, control, delegate
    @override
    void initializeThemes() {
        /*
        new Quest(" "),
        new Quest(""),
        new Quest(" ")

        */
        addTheme(new Theme(<String>["Castles","Keeps", "Fortresses", "Nobility","Forts","Moats","Dungeons"])
            ..addFeature(FeatureFactory.BLOODSMELL, Feature.LOW)
            ..addFeature(FeatureFactory.SCREAMSSOUND, Feature.LOW)
            ..addFeature(FeatureFactory.CREEPYFEELING, Feature.LOW)
            ..addFeature(FeatureFactory.CLANKINGSOUND, Feature.MEDIUM)

            ..addFeature(new PostDenizenFrogChain("Command Minions to Breed Frogs", [
                new Quest("The ${Quest.DENIZEN} has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The ${Quest.PLAYER1} comands that the ${Quest.CONSORT}s collect the frogs. The ${Quest.CONSORT}s agree with enthusiastic ${Quest.CONSORTSOUND}s. "),
                new Quest("The ${Quest.CONSORT}s hit buttons on the ectobiology machine at random. The ${Quest.PLAYER1} sits back and enjoys a tropical drink. The frogs will be ready eventually. "),
                new Quest("A ${Quest.CONSORT} minion has finally found the final frog. The ${Quest.PLAYER1} rewards them, and punishes everyone else for failing. "),
            ], new FrogReward(), QuestChainFeature.spacePlayer), Feature.WAY_HIGH)

            ..addFeature(new PostDenizenQuestChain("Conquer Everything", [
                new Quest("As soon as the ${Quest.DENIZEN} is defeated, the ${Quest.CONSORT}s disolve into civil wars and infighting. It will take a strong leader to unite the land, and the ${Quest.PLAYER1} is up to the task.  "),
                new Quest("The ${Quest.PLAYER1} has subjugated/assimilated about half of the ${Quest.CONSORT} factions, at this point. They are surprisingly good at following commands, and everything is running with clock work efficiencey."),
                new Quest("The final ${Quest.CONSORT} commander surrenders. The ${Quest.PLAYER1} controls everything now. They are the Lord of all they survey. ")
            ], new RandomReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

            ..addFeature(new DenizenQuestChain("Be the Protagonist", [
                new Quest("The ${Quest.PLAYER2} reaches the entrance to a massive dungeon. They heard rumors that important information could be found at the bottom. After some very confusing puzzles and a couple of strifes, they find themself at the dungeon’s center. A lone, elderly ${Quest.CONSORT} is there to greet the ${Quest.PLAYER2}. He tells the ${Quest.PLAYER2} that ${Quest.DENIZEN} needs to be defeated by a powerful hero, and imparts some clues on how to defeat them. Wait a second, isn’t that the ${Quest.PLAYER1}’s Denizen? The ${Quest.PLAYER2} contacts them and passes on the information they found.  "),
                new DenizenFightQuest("The ${Quest.PLAYER2} is exploring another dungeon. Deep inside, they enter a large open room, clearly meant for a boss fight. As expected, ${Quest.DENIZEN} emerges from a large hole in the ceiling and lets loose a roar. The ${Quest.PLAYER2} readies themself for a fight, but ${Quest.DENIZEN} takes one glance and immediately goes back into its hole. It looks like ${Quest.DENIZEN} is only interested in fighting the ${Quest.PLAYER1}. The ${Quest.PLAYER2} gives them a call and sits around waiting for them to come. After a few hours, the ${Quest.PLAYER1} has arrived and the strife can finally start.","The ${Quest.PLAYER1} was victorious in his fight against ${Quest.DENIZEN}. The ${Quest.PLAYER2} also helped.","The ${Quest.PLAYER1} fought hard, but was ultimately defeated by ${Quest.DENIZEN}.")
            ], new DenizenReward(), QuestChainFeature.twoLight), Feature.HIGH)

            ..addFeature(new PostDenizenQuestChain("Skip the Boring Details", [
                new Quest("The ${Quest.PLAYER1} finds a giant pillar, inscribed with a long and arduous quest that the ${Quest.PLAYER1} is destined to complete. However the ${Quest.PLAYER1} isn’t interested on spending so much time on one quest, so they uses their powers and fast forward right to the end. A parade is held in their honor for completing the grand quest that no one got to see happen. A bit unsatisfying, really.")
            ], new RandomReward(), QuestChainFeature.timePlayer), Feature.WAY_LOW)


            ,  Theme.MEDIUM);

        addTheme(new Theme(<String>["Dutton", "Charles","Fathers","Prophets","Dew"])
            ..addFeature(FeatureFactory.DUTTLECONSORT, Feature.HIGH)
            ..addFeature(FeatureFactory.CONTEMPLATATIVEFEELING, Feature.HIGH)
            ..addFeature(FeatureFactory.RUSTLINGSOUND, Feature.HIGH)
            ..addFeature(FeatureFactory.CALMFEELING, Feature.MEDIUM)

            ..addFeature(new PostDenizenFrogChain("Command Minions to Breed Frogs", [
                new Quest("The ${Quest.DENIZEN} has been subjugated, their hoard of frogs released. Across the land castles and dungeons suddenly are accessible, and filled with croaking. The ${Quest.PLAYER1} comands that the ${Quest.CONSORT}s collect the frogs in the name of Lord Dutton. The ${Quest.CONSORT}s agree with confused, yet enthusiastic ${Quest.CONSORTSOUND}s. "),
                new Quest("The ${Quest.CONSORT}s hit buttons on the ectobiology machine at random. The ${Quest.PLAYER1} sits back and enjoys a tropical drink. The frogs will be ready eventually. "),
                new Quest("A ${Quest.CONSORT} minion has finally found the final frog. The ${Quest.PLAYER1} rewards them, and punishes everyone else for failing. "),
            ], new FrogReward(), QuestChainFeature.spacePlayer), Feature.WAY_HIGH)

            ..addFeature(new PostDenizenQuestChain("Praise Dutton", [
                new Quest("As soon as the ${Quest.DENIZEN} is defeated, the ${Quest.CONSORT}s disolve into chaotic shitposting. It will take a strong leader and a glorious Cult to unite the land, and the ${Quest.PLAYER1} and their fervant belief in Lord Dutton is up to the task.  "),
                new Quest("The ${Quest.PLAYER1} has spread the word of Lord Charles Dutton to about half of the ${Quest.CONSORT} factions, at this point. The Cult of Dutton unites the chaotic shitposting landscape."),
                new Quest("The final ${Quest.CONSORT} shitposter surrenders. The ${Quest.PLAYER1} controls everything now. They are the Lord of all they survey. ")
            ], new ItemReward(duttonItems), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.MEDIUM);
    }

}
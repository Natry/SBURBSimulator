import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";
class Ink extends Aspect {

    //what sort of quests rewards do I get?
    @override
    double itemWeight = 0.5;
    @override
    double fraymotifWeight = 0.5;
    @override
    double companionWeight = 1.00;

    @override
    double difficulty = 0.0;

    @override
    AspectPalette palette = new AspectPalette()
        ..accent = '#080808'
        ..aspect_light = '#BA1016'
        ..aspect_dark = '#820B0F'
        ..shoe_light = '#381B76'
        ..shoe_dark = '#1E0C47'
        ..cloak_light = '#290704'
        ..cloak_mid = '#230200'
        ..cloak_dark = '#110000'
        ..shirt_light = '#3D190A'
        ..shirt_dark = '#2C1207'
        ..pants_light = '#5C2913'
        ..pants_dark = '#4C1F0D';

    @override
    List<String> landNames = new List<String>.unmodifiable(<String>[ "Bonds", "Unions", "Ink", "Color", "Nostalgia"]);

    @override
    List<String> levels = new List<String>.unmodifiable(<String>["FRIEND HOARDER YOUTH", "INKSTERMINATOR", "SOCIALIST BUTTERFLY"]);

    @override
    List<String> handles = new List<String>.unmodifiable(<String>["Investor", "Investigator", "Idealist", "Inhabitant", "Innovator", "Interpreter"]);

    @override
    List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Ink", "Flow", "Charge", "Awakening", "Friendship", "Trusting", "Union", "Team", "Fresh", "Vim", "Chorus"]);

    @override
    String denizenSongTitle = "Ballad "; //a song passed over generations in an oral history;

    @override
    String denizenSongDesc = " A sour note is produced. It's the one Agitation plays to make its audience squirm. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ";

    @override
    List<String> symbolicMcguffins = ["ink", "friendship", "ties", "pulse", "chain", "ocean","festival"];

    @override
    List<String> physicalMcguffins = ["ink","photo album", "friendship bracelet"];

    @override
    List<String> denizenNames = new List<String>.unmodifiable(<String>['Ink','Hestia', 'Bastet', 'Bes', 'Vesta', 'Eleos', 'Frigg', 'Debella', 'Juno', 'Baal', 'Eusebeia', 'Horkos', 'Homonia', 'Harmonia', 'Philotes','Cthulhu','The Kraken','Akkorokamui','Kanaloa']);


    @override
    void initializeItems() {
        items = new WeightedList<Item>()
        ..add(new Item("Inkwell",<ItemTrait>[ItemTraitFactory.GLASS,ItemTraitFactory.CALMING, ItemTraitFactory.ASPECTAL, ItemTraitFactory.FEATHER],shogunDesc: "Vial of Not-ABs Oil"))
            ..add(new Item("Bananaphone",<ItemTrait>[ItemTraitFactory.EDIBLE,ItemTraitFactory.CALMING, ItemTraitFactory.ASPECTAL, ItemTraitFactory.FUNNY], abDesc: "Really? Yet another in-joke nobody will ever get? Good work, 'oh mighty creator'. ",shogunDesc: "Yellow Respect Device"))
            ..add(new Item("Friendship Bracelet",<ItemTrait>[ItemTraitFactory.CLOTH,ItemTraitFactory.CALMING, ItemTraitFactory.ASPECTAL, ItemTraitFactory.HEALING, ItemTraitFactory.CHAIN],shogunDesc: "Soul Binding Wrist Shackle"))
        ..add(new Item("Bonding Manacles",<ItemTrait>[ItemTraitFactory.METAL,ItemTraitFactory.RESTRAINING, ItemTraitFactory.ASPECTAL, ItemTraitFactory.HEALING,ItemTraitFactory.CHAIN, ItemTraitFactory.UNCOMFORTABLE],shogunDesc: "Handcuff with one cuff full of cigarettes"))
        ..add(new Item("Friendship Stairs",<ItemTrait>[ItemTraitFactory.WOOD,ItemTraitFactory.IRONICFAKECOOL, ItemTraitFactory.CALMING, ItemTraitFactory.HEALING, ItemTraitFactory.ASPECTAL, ItemTraitFactory.LEGENDARY],shogunDesc: "Bloodstained Stairs",abDesc:"You push your friends down these, dunkass.")); //john wanted to push karkat down these.
    }


    @override
    List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
        new AssociatedStat(Stats.RELATIONSHIPS, 2.0, true),
        new AssociatedStat(Stats.MOBILITY, 1.0, true),
        new AssociatedStat(Stats.ALCHEMY, -2.0, true) //items aren't people.
    ]);

    Ink(int id) :super(id, "Ink", isCanon: false);

    @override
    String activateCataclysm(Session s, Player p) {
        return s.mutator.blood(s, p);
    }

    @override
    void initializeThemes() {

        addTheme(new Theme(<String>["Chains", "Unions", "Manacles", "Bonds", "Weddings", "Rings", "Webs"])
            ..addFeature(FeatureFactory.CLANKINGSOUND, Feature.HIGH)
            ..addFeature(FeatureFactory.MUSICSOUND, Feature.LOW)
            ..addFeature(FeatureFactory.CALMFEELING, Feature.LOW)
            ..addFeature(FeatureFactory.SPIDERCONSORT, Feature.HIGH)
            ..addFeature(FeatureFactory.SWEETSMELL, Feature.LOW)

            ..addFeature(new DenizenQuestChain("Learn the Power of Teamwork", [
                new Quest("The ${Quest.PLAYER1}  and the ${Quest.PLAYER2} are investigating a dungeon. Suddenly, a chain snaps out of nowhere and handcuffs them together. After some initial bickering, they learn the POWER OF TEAMWORK and complete the dungeon. "),
                new Quest("The ${Quest.PLAYER1}  and the ${Quest.PLAYER2} are separated in a dungeon, and each discovers a dead end that the other can open. They use the POWER OF TEAMWORK to get to the end of the dungeon. "),
                new DenizenFightQuest("The ${Quest.PLAYER1}  and the ${Quest.PLAYER2} trust each other to have their backs.  So when the ${Quest.DENIZEN} starts trying to turn them against each other, there is no question of believing its lies. They team up to strife the ${Quest.DENIZEN}.","Slaying the ${Quest.DENIZEN} proves the POWER OF TEAMWORK!","The ${Quest.PLAYER1} and ${Quest.PLAYER2} end up getting distracted bickering after one of the ${Quest.DENIZEN}'s slanderous barbs hits home. Whoops, their teamwork wasn't strong enough!")
            ], new DenizenReward(), QuestChainFeature.twoPlayers), Feature.WAY_HIGH)

            ..addFeature(new DenizenQuestChain("Chain the Towers", [
                new Quest("The ${Quest.PLAYER1} comes across a mighty series of towers, each with chains limply hanging from their tips. A wise old ${Quest.CONSORT}s explains that before  ${Quest.DENIZEN} arrived, the chains connected each tower to each other, and facilitated trade and communication between settlements. Now the ${Quest.CONSORT}s are isolated from each other, and grow more paranoid and distrustful of strangers each generation.  The ${Quest.PLAYER1} vows to help. "),
                new Quest("The ${Quest.PLAYER1} delves in dungeons until the right items are discovered to alchemize new connectors for the chains. The first set of towers are reconnected, and trade and communication immediately resumes. The local ${Quest.CONSORT}s discover that ${Quest.CONSORT}s from other villages aren't so different, after all.  Another victory against xenophobia! "),
                new Quest("The ${Quest.PLAYER1} has been working tirelessly to hook up tower after tower, only to discover that the first tower they repaired is already broken again. There is no getting around it, ${Quest.DENIZEN} needs to be stopped. "),
                new DenizenFightQuest("The ${Quest.PLAYER1} has tracked down ${Quest.DENIZEN}. There can be no mercy. ","The ${Quest.DENIZEN} lies slain by the ${Quest.PLAYER1}'s ${Quest.WEAPON}. The ${Quest.PLAYER1} is finally free to restore the chains, bringing peace and understanding to the land. ","The tyranny  and xenophobia of ${Quest.DENIZEN} continues with the defeat of the ${Quest.PLAYER1}.")
            ], new DenizenReward(NPCHandler.JACK), QuestChainFeature.defaultOption), Feature.WAY_LOW)

            ..addFeature(new DenizenQuestChain("Protect the Beams", [
                new Quest("The ${Quest.PLAYER1} learns of the ${Quest.MCGUFFIN} Tower, said to hold and connect all of the planet together with its many Beams. A quaking ${Quest.CONSORT} explains that the ${Quest.DENIZEN} has besieged this tower since the dawn of time, snapping each Beam one by one, and preventing the ${Quest.CONSORT}s from communciating with other villages and risking the entire planet falling apart.  "),
                new Quest("The ${Quest.PLAYER1} hears of a fantastical secret kept at the top of the ${Quest.MCGUFFIN} Tower. It is said that the ${Quest.DENIZEN} seeks to topple it to gain this secret. Perhaps the ${Quest.PLAYER1} is small enough to climb the tower to claim it themselves?"),
                new Quest("The ${Quest.PLAYER1} defeats a fearsome ${Quest.DENIZEN} minion, whose death unlocks the most direct path to the ${Quest.MCGUFFIN} Tower . "),
                new DenizenFightQuest("The ${Quest.PLAYER1} has crossed the field of roses. They blow their horn. There can be no mercy. It is time to face the ${Quest.DENIZEN}. ","The ${Quest.DENIZEN} lies slain by the ${Quest.PLAYER1}'s ${Quest.WEAPON}. The ${Quest.PLAYER1} is finally able to see what lies at the top of the ${Quest.MCGUFFIN} Tower. Oh. Huh. That's....actually kind of disappointing, actually. Oh well, at least they saved the planet, right? ","The ${Quest.MCGUFFIN} Tower is more at risk than ever before.")
            ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

            ..addFeature(new PostDenizenQuestChain("One Degree of Separation", [
                new Quest("They say it can't be done, but the ${Quest.PLAYER1} is confident that they can become friends with every single ${Quest.CONSORT} on ${Quest.MCGUFFIN}book. They start small, just talking to any ${Quest.PLAYER1} that wanders by. They know they can do this!"),
                new Quest("Oh god. Less than 10% of the ${Quest.PLAYER1} population have been friended. The ${Quest.PLAYER1} is starting to think that maybe they understimated how hard this would be. "),
                new Quest("Oh god. It's all so simple. They see it now. Relationships are like a chain, or a web. All they need to do is find the most connected nodes and....yes. Those 6 ${Quest.CONSORT}s are all they need to indirectly gain access to the remaining 90% of the population. The ${Quest.PLAYER1} schmoozes the right few ${Quest.CONSORT}s and finally acomplishes the impossible. They now have AAAAAAAALL the friends!")
            ], new FraymotifReward("Friend Request", "The ${Fraymotif.OWNER} has so many friends, they have to assume everyone in this fight is already in their friend list."), QuestChainFeature.playerIsSmartClass), Feature.HIGH)

            ..addFeature(new PostDenizenQuestChain("Steal The Friends", [
                new Quest("They say it can't be done, but the ${Quest.PLAYER1} is confident that they can become friends with every single ${Quest.CONSORT} on ${Quest.MCGUFFIN}book. They start small, just talking to any ${Quest.PLAYER1} that wanders by. They know they can do this!"),
                new Quest("Oh god. Less than 10% of the ${Quest.PLAYER1} population have been friended. The ${Quest.PLAYER1} is starting to think that maybe they understimated how hard this would be. "),
                new Quest("The ${Quest.PLAYER1} decides that doing things the hard way is for chumps and just hacks into ${Quest.MCGUFFIN}book to steal all the friends. Yay, they win! They are the best! ")
            ], new FraymotifReward("Friend Stealer", "The ${Fraymotif.OWNER} is now more popular with your friends than you are."), QuestChainFeature.playerIsSneakyClass), Feature.HIGH)



            ..addFeature(new DenizenQuestChain("Pale Shipping Dungeon", [
                new Quest("The ${Quest.PLAYER1}  and the ${Quest.PLAYER2} seem to be a good complement. The noodly appendages of the Horror Terrors do not fail to notice this.  "),
                new DenizenFightQuest("The ${Quest.PLAYER1}  and the ${Quest.PLAYER2} have come across a strange dungeon with a diamond symbol on the door. They ignore all common sense and venture inside. Ice cream and hankies abound. There is a couch, and a sad movie playing. Huh. Oh shit, what is ${Quest.DENIZEN} doing here!?","Slaying the ${Quest.DENIZEN} proves to be the thing that finally pushes the ${Quest.PLAYER1} and ${Quest.PLAYER2} together.","The ${Quest.PLAYER1} and ${Quest.PLAYER2} are stubbornly refusing this ship by getting their asses handed to them by the ${Denizen}.")
            ], new PaleRomanceReward(), QuestChainFeature.twoPlayers), Feature.WAY_HIGH)
            , Theme.HIGH);

        addTheme(new Theme(<String>["Ink","Paper","Color","Quills"])
            ..addFeature(FeatureFactory.RUSTLINGSOUND, Feature.LOW)
            ..addFeature(FeatureFactory.CHAMELEONCONSORT, Feature.LOW)
            ..addFeature(FeatureFactory.STUDIOUSFEELING, Feature.LOW)
            ..addFeature(FeatureFactory.ENERGIZINGFEELING, Feature.HIGH)
            ..addFeature(FeatureFactory.MUSTSMELL, Feature.LOW) //Old paper

            ..addFeature(new DenizenQuestChain("Paint the Wall", [
                new Quest("The ${Quest.PLAYER1} comes across an enormous wall. Strange symbols are spread across its face. An indent in the wall indicates a door will appear if the puzzle of the wall is solved."),
                new Quest("The ${Quest.PLAYER1} is getting annoyed trying to solve the wall. They start inking graffiti on the wall out of spite. Suddenly, they realize that some of the symbols light up when the ink touches it."),
                new Quest("The ${Quest.PLAYER1} spends a good hour painting the wall. A number of symbols light up but nothing else happens. The ${Quest.PLAYER1} realizes unhappily that they probably need to paint only the symbols. Shit."),
                new DenizenFightQuest("The wall is finally clean except for the appropriate symbols and the door is open. The ${Quest.PLAYER1} is eager to fight ${Quest.DENIZEN} and give some payback for the terrible wall puzzle. ","${Quest.DENIZEN} is defeated and the ${Quest.PLAYER1}’s payback is complete. ","With the ${Quest.PLAYER1}’s defeat, ${Quest.DENIZEN} closes the door repaints the outside wall, just to be a jerk.")
            ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.LOW)

            ..addFeature(new DenizenQuestChain("Framed for Vandalisim", [
                new Quest("The ${Quest.PLAYER1} is visiting a ${Quest.CONSORT} town, but before they could reach it, a crowd of angry ${Quest.CONSORT}s starts charging towards them. “There’s the one who messed up our town!” The ${Quest.PLAYER1} decides to make a hasty retreat."),
                new Quest("Coming back to the ${Quest.CONSORT} town secretly, the ${Quest.PLAYER1} finds the mess the town is in. Ink is covering the town and most of its residents are hard at work cleaning the ink. Wanted posters with their face are plastered all over town. The ${Quest.PLAYER1} discreetly helps clean the town and vows to clear their name."),
                new Quest("The ${Quest.PLAYER1} heads back to the town, but they hear loud screaming. They rush towards the center of town and find their culprit, themself. Or rather something in the shape of the ${Quest.PLAYER1} with an otherworldly transparent color. The ${Quest.PLAYER1} soundly defeats the doppelganger in a quick strife. ${Quest.CONSORT}s witness the smackdown and cheer. The ${Quest.PLAYER1}’s name has been cleared!"),
                new DenizenFightQuest("The ${Quest.PLAYER1} realizes that the doppelganger was created by ${Quest.DENIZEN} and more could be created if unstopped. The${Quest.PLAYER1} tracks ${Quest.DENIZEN}’s lair down by following the path of vandalism created by their doppelganger. It’s time to take ${Quest.DENIZEN} down for framing the ${Quest.PLAYER1}.","${Quest.DENIZEN} is defeated and doppelganger production has been stopped. The ${Quest.CONSORT}s apologize for mistaking the ${Quest.PLAYER1} for the real vandal.","${Quest.DENIZEN} begins making more doppelgangers to tarnish the ${Quest.PLAYER1}’s good name.")
            ], new DenizenReward(), QuestChainFeature.playerIsDestructiveClass), Feature.MEDIUM)

            , Theme.HIGH);


        addTheme(new Theme(<String>["Nostalgia","Video Games","Ninety","Cartoons"])
            ..addFeature(FeatureFactory.BEEPINGSOUND, Feature.HIGH)
            ..addFeature(FeatureFactory.MUSICSOUND, Feature.LOW)
            ..addFeature(FeatureFactory.CALMFEELING, Feature.LOW)
            ..addFeature(FeatureFactory.ENERGIZINGFEELING, Feature.HIGH)
            ..addFeature(FeatureFactory.ROBOTCONSORT, Feature.LOW)

            ..addFeature(new PreDenizenQuestChain("And It Don't Stop", [
                new Quest("The ${Quest.PLAYER1} is suddenly challenged to a rap off by a particularly Fresh ${Quest.CONSORT}. It's a close one, but the ${Quest.PLAYER1} emerges victorious. It helps that the Fresh ${Quest.CONSORT} kept rhyming ${Quest.CONSORTSOUND} with ${Quest.CONSORTSOUND}."),
                new Quest("The ${Quest.PLAYER1} has apparently gotten a reputation as a rap master. A series of ${Quest.CONSORT}s challenge them to rap offs and get utterly destroyed by the ${Quest.PLAYER1}'s fresh flows. "),
                new Quest("The final challenger, a Sick-Nasty ${Quest.CONSORT} approaches the ${Quest.PLAYER1}. And aura of ${Quest.MCGUFFIN} and fresh beats smothers the area and the raps get hotter and sicker. Finally the Sick-Nasty ${Quest.CONSORT} falters, and misses a beat. The ${Quest.PLAYER1} wins! They are the best rapper in all of Paradox Space! "),
            ],new ItemReward(items), QuestChainFeature.defaultOption), Feature.WAY_LOW)

            ..addFeature(new DenizenQuestChain("Beat the Games", [
                new Quest("The ${Quest.PLAYER1} has finally tracked down the location of ${Quest.DENIZEN}’s lair. Surprisingly it’s inside a gaudy arcade rather than a dungeon. The door to ${Quest.DENIZEN}’s lair is locked, with the key inside a prize vendor. The ${Quest.PLAYER1} will need to win enough tickets to earn that key."),
                new Quest("The ${Quest.PLAYER1} is struggling to win any of the arcade games; they all seem impossibly hard. A ${Quest.DENIZEN} minion mocks them. They tell the ${Quest.PLAYER1} true gamers can easily beat any of these games."),
                new Quest("The ${Quest.PLAYER1} discovers the ultimate secret. Most of these games have cheat codes. Super difficult games are a lot easier when you can give yourself 30 lives."),
                new DenizenFightQuest("With enough tickets earned, the ${Quest.PLAYER1} takes the key and enters ${Quest.DENIZEN}’s lair. ${Quest.DENIZEN} has been impatiently waiting. It’s time to strife! ","The ${Quest.PLAYER1} beats ${Quest.DENIZEN}, just like all the hard games they had to play. Who’s a true gamer now?","A giant game over sign drops down from the ceiling.")
            ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)


            , Theme.MEDIUM);
    }

}
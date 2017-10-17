import '../../../SBURBSim.dart';
import 'Aspect.dart';
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Life extends Aspect {

    @override
    AspectPalette palette = new AspectPalette()
        ..accent = "#494132"
        ..aspect_light = '#76C34E'
        ..aspect_dark = '#4F8234'
        ..shoe_light = '#00164F'
        ..shoe_dark = '#00071A'
        ..cloak_light = '#605542'
        ..cloak_mid = '#494132'
        ..cloak_dark = '#2D271E'
        ..shirt_light = '#CCC4B5'
        ..shirt_dark = '#A89F8D'
        ..pants_light = '#A29989'
        ..pants_dark = '#918673';

    @override
    List<String> landNames = new List<String>.unmodifiable(<String>["Dew", "Spring", "Beginnings", "Vitality", "Jungles", "Swamps", "Gardens", "Summer", "Chlorophyll", "Moss", "Rot", "Mold"]);

    @override
    List<String> levels = new List<String>.unmodifiable(<String>["BRUISE BUSTER", "LODESTAR LIFER", "BREACHES HEALER"]);


    @override
    List<String> handles = new List<String>.unmodifiable(<String>["Leader", "Lecturer", "Liaison", "Loyalist", "Lyricist"]);


    @override
    List<String> fraymotifNames = new List<String>.unmodifiable(<String>["Life", "Pastoral", "Green", "Relief", "Healing", "Plant", "Vitality", "Growing", "Garden", "Multiplying", "Rising", "Survival", "Phoenix", "Respawn", "Mangrit", "Animato", "Gaia", "Increasing", "Overgrowth", "Jungle", "Harvest", "Lazarus"]);


    @override
    String denizenSongTitle = "Lament"; //passionate expression of grief. so much life has been lost to SBURB.;

    @override
    String denizenSongDesc = " A plucked note echos in the stillness. It is the one Desire plays to summon it's audience. The OWNER is strengthened and healed. The ENEMY is weakened and hurt. And that is all there is to say on the matter. ";

    @override
    List<String> symbolicMcguffins = ["life","health", "growth", "strength","tree", "forest"];
    @override
    List<String> physicalMcguffins = ["life","plant", "fertilizer", "food","flowers", "beast", "fruit", "baby", "puppy", "candy"];


    @override
    List<String> denizenNames = new List<String>.unmodifiable(<String>['Life', 'Demeter', 'Pan', 'Nephthys', 'Ceres', 'Isis', 'Hemera', 'Andhrímnir', 'Agathodaemon', 'Eir', 'Baldur', 'Prometheus', 'Adonis', 'Geb', 'Panacea', 'Aborof', 'Nurgel', 'Adam']);



    @override
    List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[
        new AssociatedStat(Stats.HEALTH, 2.0, true),
        new AssociatedStat(Stats.POWER, 1.0, true),
        new AssociatedStat(Stats.ALCHEMY, -2.0, true)
    ]);

    Life(int id) :super(id, "Life", isCanon: true);

    @override
    String activateCataclysm(Session s, Player p) {
        return s.mutator.life(s, p);
    }


    @override
    void initializeThemes() {

        /*
        new Quest(""),
                new Quest(""),
                new Quest(""),
                new DenizenFightQuest("","","")
         */
        addTheme(new Theme(<String>["Forests","Chlorophyll", "Moss", "Trees", "Jungles", "Wood", "Tribes", "Timber", "Wilds", "Thickets", "Coppices", "Copses"])
            ..addFeature(FeatureFactory.NATURESMELL, Feature.HIGH)
            ..addFeature(FeatureFactory.RUSTLINGSOUND, Feature.HIGH)
            ..addFeature(FeatureFactory.DRUMSOUND, Feature.LOW)
            ..addFeature(FeatureFactory.CALMFEELING, Feature.MEDIUM)
            ..addFeature(FeatureFactory.WOLFCONSORT, Feature.MEDIUM)
            ..addFeature(FeatureFactory.ZOOSMELL, Feature.LOW)
            ..addFeature(new DenizenQuestChain("Restore the Forest", [
                new Quest("The ${Quest.PLAYER1} finds a village of compliant ${Quest.CONSORT}s frantically destroying trees. If they stop, even for a moment, they know their village will be destroyed, along with any nearby trees. When the ${Quest.PLAYER1} tries to offer help they begin ${Quest.CONSORTSOUND}ing in panic. Don't upset ${Quest.DENIZEN}, they beg. It is only by complying that they are safe, and you will bring wrath upon everyone. "),
                new Quest("The ${Quest.PLAYER1} revisits the village compliant ${Quest.CONSORT}s, only to discover it's freshly destroyed. A weeping ${Quest.CONSORT} explains that they couldn't keep up their pace and had to rest, and that is when ${Quest.DENIZEN} attacked. Please. HELP them, he begs. The ${Quest.PLAYER1} agrees to go face ${Quest.DENIZEN}."),
                new DenizenFightQuest("In a nest built of thousands of splintered trees, ${Quest.DENIZEN} waits. It is time to fight. ","The ${Quest.PLAYER1}'s power is greater. The survive, and help the ${Quest.CONSORT}s to survive as well.","The ${Quest.DENIZEN} is stronger. The strong survive. The weak perish.")
            ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.HIGH);
        addTheme(new Theme(<String>["Gardens", "Summer", "Growth","Dew", "Spring", "Beginnings", "Vitality","Strength","Fields","Farms" ])
            ..addFeature(FeatureFactory.NATURESMELL, Feature.HIGH)
            ..addFeature(FeatureFactory.SWEETSMELL, Feature.HIGH)
            ..addFeature(FeatureFactory.ZOOSMELL, Feature.LOW)
            ..addFeature(FeatureFactory.CALMFEELING, Feature.MEDIUM)
            ..addFeature(new DenizenQuestChain("Distribute the Food", [
                new Quest(""),
                new Quest(""),
                new Quest(""),
                new DenizenFightQuest("","","")
            ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)

            , Theme.HIGH);

        addTheme(new Theme(<String>["Decay","Locusts","Bogs","Fens","Rot","Death","Mold","Swamps","Thorns","Swarms","Famine"])
            ..addFeature(FeatureFactory.ROTSMELL, Feature.HIGH)
            ..addFeature(FeatureFactory.RUSTLINGSOUND, Feature.LOW)
            ..addFeature(FeatureFactory.SKELETONCONSORT, Feature.HIGH)
            ..addFeature(FeatureFactory.CREEPYFEELING, Feature.MEDIUM)
            ..addFeature(FeatureFactory.CROCODILECONSORT, Feature.MEDIUM)
            ..addFeature(FeatureFactory.ALLIGATORCONSORT, Feature.MEDIUM)
            ..addFeature(new DenizenQuestChain("Protect the Farms", [
                new Quest(""),
                new Quest(""),
                new Quest(""),
                new DenizenFightQuest("","","")
            ], new DenizenReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            , Theme.HIGH); // end theme
    }
}
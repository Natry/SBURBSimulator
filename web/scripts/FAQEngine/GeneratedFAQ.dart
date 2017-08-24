import "FAQSection.dart";
import "../SBURBSim.dart";

///the faq that gets printed ontosb screen, complete with quirk
class GeneratedFAQ {
    ///will be printed first, no quirk.
    String asciiHeader;
    Player author;
    ///what symbold do you spam for the header
    String symbol = "*";
    //which symbols are used for headers is consisten in a generated faq but not between them
    List<String> _possibleSymbols = <String>["*","@","#","!","~",".","=","-","%","\$"];
    Random rand;
    bool rendered = false;
    int sectionsRequested = 0;
    int sectionsWanted = 10;
    ///what are the parts of this FAQ, loaded from different source files
    List<FAQSection> sections = new List<FAQSection>();

    GeneratedFAQ(this.author, this.asciiHeader, this.sections, this.rand) {
        symbol = rand.pickFrom(_possibleSymbols);
    }

    //TODO better be courier new, bro
    String makeHtml() {
        int amount = 10;
        print("I'm making html for a generated faq with ${sections.length} sections");
        Quirk q = author.quirk;
        String ascii = "ASCIIWILLGOHERE"*5;
        String ret =  "<br><br>$ascii<Br><Br><center>By ${author.chatHandle}</center>";
        for(FAQSection s in sections) {
            ret = "$ret <br><Br>${symbol*amount}${q.translate(s.header)}${symbol*amount}<br><br>${q.translate(s.body)}<br><Br>";
        }
        return "<div class = 'FAQ'>$ret</div>";
    }
}
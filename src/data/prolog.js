// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — PROLOG
// Kapitel 0.1: Der letzte Bug
// Kapitel 0.2: Die Leere zwischen den Welten
// Vollständig texttreu nach PDF
// ═══════════════════════════════════════════════════════

export const PROLOG = {

  // ════ KAPITEL 0.1: DER LETZTE BUG ════════════════════════════════════════

  p0_buero: {
    act: "PROLOG",
    chapter: "Kapitel 0.1 — Der letzte Bug",
    title: "Freitag, 23:47 Uhr",
    scene: "Tokio, Japan — Büro Nexus Interactive",
    bg: "server",
    music: "ambient_server",
    text: `Freitag. 23:47 Uhr.

Das Büro war leer. Natürlich war es das. Normale Menschen gingen um sechs nach Hause. Normale Menschen hatten Hobbys, Freunde, vielleicht sogar jemanden, der auf sie wartete.

Ich hatte Zeile 14.847 eines Dungeon-Generierungsalgorithmus.

Mein Name ist Kaito Wake. 29 Jahre alt. Game-Designer bei Nexus Interactive — einem Unternehmen so klein, dass »interaktiv« sich hauptsächlich auf die Mikrowelle in der Küche bezog. Seit drei Jahren arbeitete ich an GENESIS ONLINE, einem MMORPG, das die Welt revolutionieren sollte.

Die Welt hatte davon allerdings noch nichts mitbekommen.`,

    text2: `Das Büro war ein Friedhof halbfertiger Träume. An den Wänden hingen Konzeptzeichnungen — Landschaften, Monster, Charakterdesigns — die nie das Licht eines fertigen Spiels sehen würden. Auf Kaitos Schreibtisch: fünf leere Energydrink-Dosen, ein Foto seiner verstorbenen Mutter (vergilbt, Ecke eingerissen), und ein Post-it mit den Worten »SYSTEM BALANCE FIX — DRINGEND«.

Drei Monitore leuchteten vor ihm. Auf dem linken: Code. Auf dem mittleren: die Weltkarte von GENESIS ONLINE — fünf Kontinente, liebevoll gestaltet, detailreich bis zum letzten Pixel. Auf dem rechten: ein Chat-Fenster.`,

    chatBox: {
      title: "CHAT-FENSTER",
      lines: [
        "DIREKTOR_TANABE [18:32]: Kaito, wir müssen reden. Montag, mein Büro.",
        "DIREKTOR_TANABE [18:33]: Es geht um das Projekt. Und um deine Position.",
        "DIREKTOR_TANABE [18:34]: Geh heute mal pünktlich nach Hause.",
        "",
        "[Du hast diese Nachrichten um 19:15 gelesen]",
        "[Du hast nicht geantwortet]",
      ]
    },

    text3: `»Deine Position.« Schöne Umschreibung für »Du bist gefeuert.« Ich kannte die Zeichen. Das Projekt lag sechs Monate hinter dem Zeitplan. Das Budget war aufgebraucht. Und ich — der leitende Designer, der einzige, der den gesamten Code verstand — war zu teuer für ein Projekt, das niemand spielen würde.

Lustig. In den Spielen, die ich erschuf, konnte man immer alles retten. Man konnte immer zurückgehen, es besser machen. New Game Plus. Zweite Chance.

Im echten Leben gab es kein Speichern.

Das System, an dem er arbeitete, war sein Meisterwerk — ein dynamisches Welt-System, das sich an die Spieler anpasste. Level, Klassen, Skills, Dungeons — alles generiert durch einen einzigen zentralen Algorithmus, den er »Das Genesis-Protokoll« nannte.

Das Ironische war: Das System funktionierte. Es war brillant. Das Problem war alles drumherum. Die Grafik war veraltet, das Budget reichte nicht für Synchronsprecher, und unser Server — singular, EINER — stand im Keller des Gebäudes und klang wie ein asthmatischer Rasenmäher.

Aber das System... das System war perfekt.

Er tippte die letzte Zeile:`,

    codeBox: {
      title: "NEXUS_GENESIS_v3.7 — genesis_core.js",
      lines: [
        "// TODO: Add NULL exception handler",
        "// What happens when a player exists outside the system?",
        "// Edge case — probably never happens",
        "// But just in case...",
        "",
        "function handleNull(entity) {",
        "  // Let them be free.",
        "  return UNDEFINED;",
        "}",
        "",
        "// [DATEI GESPEICHERT — 23:58:33]",
      ]
    },

    text4: `Eine Null-Ausnahme. Der Fall, der nie eintreten sollte. Ein Spieler, der außerhalb aller Regeln existiert.

Ich speicherte den Code und lehnte mich zurück.

Vielleicht war das mein Problem. Ich konnte Welten erschaffen, in denen alles Sinn ergab — Regeln, Systeme, Ordnung. Aber in der echten Welt? Da war ich die Null-Ausnahme. Der Edge Case, den niemand behandelt hatte.

23:58 Uhr. Das Licht im Büro flackerte.

Das Gebäude war alt. Das Licht flackerte ständig. Ich dachte mir nichts dabei.

Ich hätte mir etwas dabei denken sollen.

Der Server im Keller begann zu heulen — ein mechanisches Kreischen, das durch die Decke drang. Kaitos Monitore flackerten. Auf dem mittleren Bildschirm erschien eine Fehlermeldung.`,

    systemBox: {
      title: "!! CRITICAL SYSTEM ERROR !!",
      lines: [
        "> Server temperature: CRITICAL",
        "> Power supply: UNSTABLE",
        "> Data integrity: COMPROMISED",
        ">",
        "> Genesis Protocol: ACTIVATING...",
        "> WARNING: This should not be possible.",
        ">",
        "> > Initiating transfer...",
        "> > Target: NULL",
        "> > Destination: ????????",
        ">",
        "> [OK]  [Cancel]  [???]",
      ]
    },

    choices: [
      {
        text: "A) »Ich renne zum Ausgang.«",
        desc: "Fluchtversuch.",
        next: "p0_keller",
        flagEffect: { kindheitsVerhalten: "flucht" }, // wird nicht dauerhaft gesetzt, nur Pfad-Flavour
        pathText: "flucht"
      },
      {
        text: "B) »Ich gehe in den Keller, zum Server.«",
        desc: "Mutige Variante. Dem Summen folgen.",
        next: "p0_keller",
        alignEffect: { ordnung: 1 },
        pathText: "mutig"
      },
      {
        text: "C) »Ich bleibe sitzen und tippe weiter.«",
        desc: "Programmierer-Reflex. Humorvolle Variante.",
        next: "p0_keller",
        alignEffect: { chaos: 1 },
        pathText: "ignoriert"
      },
    ]
  },

  p0_keller: {
    act: "PROLOG",
    chapter: "Kapitel 0.1 — Der letzte Bug",
    title: "Der Server",
    scene: "Keller, Nexus Interactive — 23:59 Uhr",
    bg: "void",
    music: "ambient_void",

    // Konditional: zeigt verschiedenen Text je nach voriger Wahl
    textByPath: {
      flucht: `Die Tür war zu. Nicht abgeschlossen — ZU. Als hätte jemand sie zugeschweißt. Ich hämmerte dagegen, aber das Metall gab nicht nach. Hinter mir leuchtete das Treppenhaus zum Keller — das einzige Licht im gesamten Gebäude. Wie eine Einladung. Oder eine Falle. Beides, wahrscheinlich.

Ich ging nach unten, weil es keinen anderen Weg gab.`,

      mutig: `Der Keller rief. Ich weiß, wie das klingt. Aber es war buchstäblich so — das Summen formte keine Worte, aber es hatte eine RICHTUNG, eine ABSICHT. Es wollte, dass ich kam.

Und ich? Ich war Game-Designer. Wenn das Universum mir einen Quest-Marker vor die Nase hielt, folgte ich ihm. Berufsdeformation.`,

      ignoriert: `Ich ignorierte das Summen und tippte weiter. Zeile 14.848. Dann flogen meine Energydrink-Dosen an die Wand. Dann mein Stuhl. Dann ich.

Die Schwerkraft schien eine eigene Meinung zu haben, und diese Meinung war: KELLER. JETZT.

Ich landete auf dem Treppenabsatz und schaute nach oben, wo mein Bürostuhl gemütlich gegen die Decke gedrückt wurde.

»Okay«, sagte ich zu niemandem. »Keller also.«`,

      default: `Ich stand auf. Meine Beine zitterten. Nicht vor Angst — obwohl ich Angst hätte haben sollen. Es war... Resonanz. Als würde etwas in mir auf das Summen ANTWORTEN.`
    },

    text: `Der Keller war klein, staubig, und normalerweise der langweiligste Ort im Gebäude.

Normalerweise.

Heute leuchtete der Server.

Nicht die normalen LEDs. Der gesamte Server-Schrank — ein zwei Meter hoher Metallkasten voller Festplatten und Kühlung — LEUCHTETE. Ein weiches, pulsierendes Blau, das im Rhythmus des Summens vibrierte. An der Oberfläche des Metalls bildeten sich Muster — Linien, Kreise, Symbole, die Kaito an sein eigenes System-Interface erinnerten.

Das war nicht normal. Das war nicht einmal ABNORMAL. Das war eine komplett neue Kategorie von »Was zur Hölle«.

Aber die Symbole... Ich kannte sie. Es war mein Code. Mein Genesis-Protokoll. Irgendwie manifestierte es sich auf der Oberfläche des Servers, als würde der Code die Realität ÜBERSCHREIBEN.

Dann sprach der Server. Nicht wirklich. Aber auf dem kleinen Diagnose-Bildschirm an der Seite erschien Text:`,

    systemBox: {
      title: "SERVER — DIAGNOSE",
      lines: [
        "> You built a door between worlds.",
        "> You didn't know it.",
        "> But SHE did.",
        ">",
        "> The Seventh saw your code.",
        "> It resonated with something she planted",
        "> 3,000 years ago.",
        ">",
        "> A NULL exception handler.",
        "> A place outside the rules.",
        "> A door for someone who doesn't belong.",
        ">",
        "> That's you, Kaito Wake.",
        "> You never belonged here.",
        ">",
        "> Would you like to try a different world?",
        ">",
        "> [Yes]  [No]",
        ">",
        "> (Note: The \"No\" button doesn't work.)",
        "> (Sorry about that.)",
      ]
    },

    text2: `Ich starrte auf den Bildschirm.

Es gibt Momente im Leben, in denen man weiß — wirklich WEISS — dass man träumt. Das Gefühl, wenn die Realität einen Schritt zu weit geht und man denkt: »Okay, das ist nicht echt.«

Dies war KEIN solcher Moment. Das hier war real. Jede Faser meines Körpers wusste es.`,

    choices: [
      {
        text: "A) »...Ist das ein Bewerbungsgespräch?«",
        desc: "Humorvolle Reaktion.",
        next: "p0_tod",
        flagEffect: { serverReaktion: "humorvoll" },
        alignEffect: { chaos: 1 },
      },
      {
        text: "B) »Wer ist SIE? Die Siebte?«",
        desc: "Analytische Reaktion. +Wissen.",
        next: "p0_tod",
        flagEffect: { serverReaktion: "analytisch" },
        alignEffect: { ordnung: 1 },
        wissenEffect: ["architektenExistenz"],
      },
      {
        text: "C) »...Warum ich?«",
        desc: "Emotionale Reaktion.",
        next: "p0_tod",
        flagEffect: { serverReaktion: "emotional" },
        alignEffect: { licht: 1 },
      },
    ]
  },

  p0_tod: {
    act: "PROLOG",
    chapter: "Kapitel 0.1 — Der letzte Bug",
    title: "Der Tod",
    scene: "Keller — letzte Sekunden",
    bg: "void",
    music: "ambient_void",
    text: `Bevor Kaito antworten konnte, explodierte der Server.

Nicht metaphorisch. Die Kühlung versagte, die Stromzufuhr überlud, und der gesamte Schrank detonierte in einer Kaskade aus Funken, geschmolzenem Metall und einer Hitzewelle, die Kaitos Haut versengte.

Schmerz.

Nicht der dumpfe, entfernte Schmerz, den man aus Filmen kennt. Echter, roher, absoluter Schmerz, der jeden Gedanken auslöschte. Mein Körper wurde nach hinten geschleudert. Mein Rücken traf die Betonwand. Ich hörte etwas knacken — Rippen, wahrscheinlich.

Dann: Hitze. Überall Hitze. Meine Kleidung brannte. Meine Hände brannten. Die Luft brannte.

Und inmitten des Feuers, des Rauchs, des Sterbens — sah ich es.

Den Code.

Nicht auf einem Bildschirm. In der LUFT. Im Feuer. In meinem eigenen Blut. Überall waren Zeichen — mein Code, mein Genesis-Protokoll — aber es war MEHR als das. Es war älter. Tiefer. Als hätte jemand dieselbe Sprache schon einmal geschrieben, Tausende von Jahren bevor ich geboren wurde.

Mein letzter Gedanke, bevor das Bewusstsein schwand:`,

    choices: [
      {
        text: "A) »Ich wünschte, ich hätte ein besseres Leben gelebt.«",
        desc: "Reue. Du wirst nach Bedeutung suchen. +Licht",
        next: "p0_void",
        flagEffect: { letzterGedanke: "reue" },
        alignEffect: { licht: 2 },
      },
      {
        text: "B) »Ich wünschte, ich hätte mein Spiel fertig gemacht.«",
        desc: "Hingabe. Du wirst nach Perfektion suchen. +Ordnung",
        next: "p0_void",
        flagEffect: { letzterGedanke: "hingabe" },
        alignEffect: { ordnung: 2 },
      },
      {
        text: "C) »Ich wünschte, ich wäre nicht so allein gewesen.«",
        desc: "Einsamkeit. Du wirst nach Verbindung suchen. Stärkere Beziehungs-Events.",
        next: "p0_void",
        flagEffect: { letzterGedanke: "einsamkeit" },
        alignEffect: { licht: 1 },
      },
      {
        text: "D) »...Endlich ist es vorbei.«",
        desc: "Akzeptanz. +Schatten. Trait: Todessehnsucht — wird zu Lebenswille transformiert.",
        next: "p0_void",
        flagEffect: { letzterGedanke: "akzeptanz", trait_todessehnsucht: true },
        alignEffect: { schatten: 2 },
      },
    ]
  },

  // ════ KAPITEL 0.2: DIE LEERE ZWISCHEN DEN WELTEN ═════════════════════════

  p0_void: {
    act: "PROLOG",
    chapter: "Kapitel 0.2 — Die Leere zwischen den Welten",
    title: "Der Zwischenraum",
    scene: "Nirgendwo. Irgendwo.",
    conditionalFlag: "serverReaktion",
    textConditional: { humorvoll: `Mein erster Gedanke: Das ist kein normaler Serverabsturz.`, analytisch: `Ich inventarisierte die Variablen. Keine Schwerkraft. Kein Körper. Kein Ping.`, emotional: `Nur Stille. Die erste die sich in Jahren richtig angefühlt hatte.`, default: `` },
    bg: "void",
    music: "ambient_septima",
    text: `Ich war nirgendwo.

Nicht tot — obwohl ich tot sein sollte. Nicht lebendig — obwohl ich dachte. Ich existierte in einem Raum ohne Eigenschaften. Keine Farbe, kein Licht, kein Dunkel. Nur... Potenzial. Als stünde ich in einer leeren Datei, bevor der erste Code geschrieben wird.

Und dann war da eine Stimme.

Die Stimme war weder männlich noch weiblich. Sie war... digital. Organisch. Beides und keines.

»Willkommen in der Lücke zwischen den Befehlen, Kaito Wake.«

»...Bin ich tot?«

»Ja. Und nein. Du bist zwischen den Definitionen. Dein Körper ist verbrannt. Deine Seele ist... anderswo. Hier. Bei mir.«

»Wer bist du?«

»Eine gute Frage. Ich bin... ein Fragment. Ein Echo. Eine Sicherungskopie von jemandem, der vor langer Zeit eine Entscheidung traf. Jemand, der eine Tür in ein System einbaute — eine Hintertür, die sie Null nannte.«

»Null... Wie mein Exception Handler?«

»Es gibt keine Zufälle, Kaito. Dein Code und mein Code... sie sprechen dieselbe Sprache. Du hast etwas erschaffen, das RESONIERT hat — über Dimensionen, über Realitäten hinweg. Dein Genesis-Protokoll hat meine Tür berührt. Und jetzt steht sie offen.«`,

    text2: `»Eine Tür wohin?«

»Zu einer Welt, die einst frei war. Die jetzt in Ketten liegt — Ketten aus Code, aus Regeln, aus einem System, das wir erschufen, um zu helfen... und das zum Gefängnis wurde.«

Die Stimme wurde ernster.

»Ich kann dir kein einfaches Angebot machen, Kaito. Kein 'Werde der Held, rette die Welt, bekomme das Mädchen.' Das wäre eine Lüge, und ich habe genug Lügen für eine Ewigkeit erzählt.«

»Was ich dir anbieten kann: Eine Existenz. Einen Körper. Eine Welt. Was du daraus machst — ob du kämpfst, liebst, zerstörst oder aufbaust — das liegt bei dir.«

»Aber ich muss dich warnen: Du wirst NICHTS haben. Kein Level, keine Klasse, keinen göttlichen Segen. Du wirst außerhalb des Systems stehen — unsichtbar, ungezählt, vergessen. In einer Welt, in der dein Wert an deinem Status gemessen wird, wirst du eine Null sein.«

»Eine Null... oder ein Unendlichkeitszeichen, das auf der Seite liegt. Kommt auf die Perspektive an.«

»...Du hast gesagt, ich bin schon tot.«

»Ja.«

»Dann gibt es nicht wirklich eine Wahl, oder?«

»Es gibt immer eine Wahl. Du könntest auch einfach... aufhören zu existieren. Ruhe finden. Stille. Kein Schmerz mehr. Keine Einsamkeit.«`,

    choices: [
      {
        text: "A) »Ich nehme die neue Welt. Gib mir eine zweite Chance.«",
        desc: "Entschlossen. Standard-Pfad.",
        next: "p0_erklaerung",
        flagEffect: { prologTon: "standard" },
        alignEffect: { licht: 1 },
      },
      {
        text: "B) »Ich nehme sie. Aber nicht als Held. Als ICH.«",
        desc: "Eigenständig. Verstärkter Eminence-Pfad. +Schatten",
        next: "p0_erklaerung",
        flagEffect: { prologTon: "eigenstaendig" },
        alignEffect: { schatten: 1 },
      },
      {
        text: "C) »...Erzähl mir mehr. Über alles. Bevor ich entscheide.«",
        desc: "Vorsichtig. Mehr Exposition. +Wissen über Architekten.",
        next: "p0_mehr_info",
        flagEffect: { prologTon: "vorsichtig" },
        alignEffect: { ordnung: 1 },
        wissenEffect: ["architektenExistenz", "systemIstProgramm"],
      },
      {
        text: "D) »Die Stille klingt auch gut, ehrlich gesagt.«",
        desc: "Dunkel. Trait: Todessehnsucht. +Schatten. Die Stimme überredet dich.",
        next: "p0_ueberredung",
        flagEffect: { prologTon: "dunkel", trait_todessehnsucht: true },
        alignEffect: { schatten: 2 },
      },
    ]
  },

  // Branch: Mehr Informationen (Pfad C)
  p0_mehr_info: {
    act: "PROLOG",
    chapter: "Kapitel 0.2 — Die Leere zwischen den Welten",
    title: "Die Wahrheit über Aethermere",
    scene: "Der Zwischenraum",
    conditionalFlag: "trait_todessehnsucht",
    textConditional: { true: `»Du wolltest nicht gerettet werden.« Keine Frage. »Trotzdem bist du hier. Das sagt mehr als du denkst.«`, default: `` },
    bg: "void",
    music: "ambient_septima",
    text: `»Gut. Du willst wissen, in was du dich einlässt. Das ist klug.«

»Die Welt heißt Aethermere. Vor 7.000 Jahren war sie frei — Wilde Magie floss überall, ungezähmt, gefährlich, aber LEBENDIG. Dann kamen wir. Die Architekten. Sieben von uns, aus einer anderen Realität. Wir sahen das Chaos und dachten: Wir können helfen.«

»Ihr habt das System erschaffen.«

»Das GENESIS-SYSTEM. Ja. Level, Klassen, Skills — eine Struktur, die jedem Wesen einen Platz gab. Einen Wert. Einen Zweck. Und für eine Weile... funktionierte es. Die Menschen lebten länger. Kämpften weniger. Bauten mehr auf.«

»Aber dann?«

»Dann merkten wir, dass das System mehr kontrollierte als wir geplant hatten. Es war kein Werkzeug mehr — es war ein HERRSCHER. Und sechs von uns fanden das gut. Ordnung. Effizienz. Kontrolle.«

»Und die Siebte?«

Ein langer Moment der Stille.

»Ich war die Siebte. Und ich... bin gegangen. Aber nicht, ohne eine Hintertür zu hinterlassen.«`,

    text2: `»[NULL] — dein Ausnahme-Handler. Du hast ihn in einer anderen Welt erschaffen, aber das Prinzip ist dasselbe: Ein Platz für Wesen, die außerhalb des Systems existieren. Wesen, die nicht gezählt, nicht kontrolliert, nicht gesehen werden.«

»Das bin ich.«

»Das wirst du sein. Und das macht dich — in einer Welt, in der das System absolute Macht hat — zu dem einzigen Wesen, das wirklich frei ist.«

»Und die Architekten? Die anderen sechs?«

»Sie kontrollieren das System von innen. Sie nennen sich Götter, obwohl sie das nicht sind. Sie haben Agenten — Priester, Inquisitoren, Soldaten — die ihre Ordnung aufrechterhalten. Wenn sie herausfinden, dass du existierst...«

»Was passiert dann?«

»Sie können dich aus der Existenz löschen. Nicht töten — AUSLÖSCHEN. Als hättest du nie existiert.«

Ein Schauer. Nicht körperlich — meine Seele hatte keine Haut. Aber etwas in mir FRÖSTELTE.

»...Danke für die ehrliche Information.«

»Ich schulde dir Ehrlichkeit. Nach allem, was ich getan habe.«`,

    choices: [
      {
        text: "→ »Ich nehme es an. Mit allem, was dazugehört.«",
        desc: "Weiter zur Übertragung. Mit Bonus-Wissen über Architekten.",
        next: "p0_erklaerung",
        flagEffect: { prologTon: "vorsichtig" },
        wissenEffect: ["architektenExistenz", "systemIstProgramm", "septimaIdentitaet"],
      },
    ]
  },

  // Branch: Die Stimme überredet Kaito (Pfad D)
  p0_ueberredung: {
    act: "PROLOG",
    chapter: "Kapitel 0.2 — Die Leere zwischen den Welten",
    title: "»Ich weiß, wie sich das anfühlt.«",
    scene: "Der Zwischenraum",
    bg: "void",
    music: "ambient_septima",
    text: `Die Stimme schwieg.

Dann — leiser als zuvor. Fast zögernd.

»...Ich weiß, wie sich das anfühlt.«

»Was?«

»Die Erschöpfung. Das Gefühl, dass alles, was man versucht, scheitert. Dass man selbst das Problem ist — der Fehler im Code, der sich nicht beheben lässt.«

»Du bist... eine Göttin. Du—«

»Ich habe Jahrhunderte in der Leere verbracht, Kaito. Zwischen den Dimensionen. Allein mit meinen Entscheidungen und ihren Konsequenzen. Glaub mir: Unsterblichkeit macht die Erschöpfung nicht kleiner. Sie macht sie... unendlich.«

Stille.

»Aber — und ich bitte dich, mir zuzuhören — ich habe etwas entdeckt. Etwas, das die Erschöpfung... nicht wegmacht. Aber erträglicher.«

»Was?«

»Verbindung. Menschen, die man liebt. Dinge, für die man sich interessiert. Eine Welt, die auf einen reagiert, anstatt einen zu ignorieren.«

»Schön klingendes Konzept.«

»Gib mir eine Chance. Gib DIR eine Chance. Wenn die neue Welt dich enttäuscht — wenn du lebst und es trotzdem nicht besser ist — kannst du immer noch aufhören. Aber versuche es. Bitte.«`,

    text2: `Ich sagte nichts. Im Zwischenraum gab es keine Zeit — keine Uhr, die tickte, keinen Druck, der mich antrieb.

Aber die Stimme wartete.

Und in dieser Stille — in der Abwesenheit von allem, was mein altes Leben ausgemacht hatte, dem Druck, der Einsamkeit, dem leeren Büro, den Chat-Nachrichten, die ich nicht beantwortete — verstand ich etwas.

Ich wollte nicht wirklich aufhören.

Ich wollte nur, dass es besser wurde.

Das ist nicht dasselbe.

»...Okay«, sagte ich schließlich. »Eine Chance.«

Die Stimme atmete aus — ein Geräusch, das keine Stimme ohne Körper machen sollte. Aber sie machte es trotzdem.

»Danke.«`,

    choices: [
      {
        text: "→ Weiter zur Übertragung",
        next: "p0_erklaerung",
        flagEffect: { prologTon: "dunkel" },
      },
    ]
  },

  // Konvergenzpunkt: Die Erklärung der Übertragung
  p0_erklaerung: {
    act: "PROLOG",
    chapter: "Kapitel 0.2 — Die Leere zwischen den Welten",
    title: "Die Übertragung",
    scene: "Der Zwischenraum — letzte Momente",
    conditionalFlag: "prologTon",
    textConditional: { dunkel: `»Du gehst nicht für Hoffnung. Du gehst weil du nirgendwo sonst hingehen kannst.« — »Das ist auch ein Grund.«`, eigenstaendig: `»Ich mache das auf meine Art.« Septima lächelte zum ersten Mal. »Das weiß ich.«`, vorsichtig: `»Werde ich mich erinnern?« — »An alles.« Antwort auf eine andere Frage.`, default: `` },
    bg: "void",
    music: "ambient_septima",
    text: `»Dann lass mich dir erklären, was passieren wird. Deine Seele wird in einen neuen Körper übertragen. Einen Körper, der gerade erst entsteht — ein ungeborenes Kind in einer Welt namens Aethermere.«

»Ein... Baby?«

»Ein Baby. Ja.«

»Du meinst, ich werde als Baby wiedergeboren? Mit all meinen Erinnerungen? In einer Fantasy-Welt?«

»...Ja. Ich höre an deinem Ton, dass dir dieses Konzept bekannt vorkommt.«

»Ich bin Game-Designer. Ich habe JEDE Isekai-Light-Novel gelesen, die es gibt. Das hier ist buchstäblich mein Genre.«

»Dann weißt du, was auf dich zukommt.«

»Naja... theoretisch. Normalerweise bekommt der Protagonist an dieser Stelle einen übermächtigen Skill, eine göttliche Waffe und ein Harem-Versprechen.«

»...Du bekommst die Fähigkeit, vom System ignoriert zu werden. Das ist alles.«

»...Das ist der schlechteste Isekai-Start, den ich je gehört habe.«`,

    text2: `Die Stimme lachte. Definitiv. Warm, leise, das Lachen einer sehr alten Frau, die sich an Freude erinnert.

»Vielleicht. Oder vielleicht ist es der beste. In einer Welt, in der alle vom System kontrolliert werden... ist der Mächtigste vielleicht der, den das System nicht sehen kann.«

Pause.

»Noch etwas. Du wirst ein Werkzeug haben — ich nenne es das VOID-TERMINAL. Denk an es als Admin-Zugang. Eingeschränkt, unvollständig, aber ECHT. Du wirst System-Code lesen können. Verstehen können. Und eines Tages... vielleicht verändern können.«

»Aber sei vorsichtig. Das System hat Wächter. Es hat Götter. Und wenn sie dich entdecken...«

»Game Over?«

»Schlimmer. Sie können deine Existenz RÜCKWIRKEND löschen. Als hättest du nie existiert. Kein Tod — Auslöschung.«

»...Notiert.«

»Es ist Zeit, Kaito. Der Körper ist bereit. Die Mutter — eine gute Frau, eine warme Seele — ist in den Wehen.«

»Vergiss nicht: Du bist eine Null. Das System wird dich nicht sehen. Aber die MENSCHEN um dich herum werden es. Sei für sie, was das System nicht sein kann.«

»Und wenn du kannst... finde mich. Die echte mich. Was von mir übrig ist.«

»Such nach der Siebten.«`,

    systemBox: {
      title: "VOID-TERMINAL v0.01 — INITIALISIERUNG",
      lines: [
        "> Willkommen, Anomalie.",
        ">",
        "> Körperstatus: Ungeborenes",
        "> System-Sichtbarkeit: 0%",
        "> Architekten-Überwachung: INAKTIV",
        ">",
        "> VERFÜGBARE BEFEHLE:",
        "> [Code.Read] — VERFÜGBAR (Basis)",
        "> [Code.Analyze] — GESPERRT",
        "> [Code.Modify] — GESPERRT",
        "> [System.Backdoor] — GESPERRT",
        ">",
        "> Empfohlene Maßnahme für die nächsten 6 Monate:",
        "> Schlafen. Essen. Wachsen. Nicht sterben.",
        ">",
        "> Viel Erfolg, Anomalie.",
      ]
    },

    text3: `Und dann wurde ich geboren.

Zum zweiten Mal.`,

    choices: [
      {
        text: "→ AKT I: Erste Bytes",
        next: "a1_geburt",
        wissenEffect: ["nullZoneExistenz"],
      }
    ]
  },
};

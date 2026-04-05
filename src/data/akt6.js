// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT VI: SYSTEM.EXIT()
// Kapitel 41–46 + Epilog: Die 7 Enden, Alter 20
// ─── ENTSCHEIDUNGS-KATEGORISIERUNG ────────────────────
// [SC] STORY-CRITICAL  → bestimmt welches Ending geladen wird
// [AF] AFFINITY        → 0–100 Beziehungswert
// [AL] ALIGNMENT       → Licht/Schatten + Ordnung/Chaos
// ═══════════════════════════════════════════════════════

export const AKT_VI = {

  // ════ KAPITEL 41: FINAL.DESCENT() ══════════════════════════════════════

  a6k1_intro: {
    act: "AKT VI", chapter: "Kapitel 41 — Final.Descent()", title: "Die letzten Ebenen",
    conditionalFlag: "krossSchicksal",
    textConditional: {
      redemption: `Irgendwo an der Oberfläche hielt Kross die Linie. Vierhundert Puristen, ex-Generale, Männer die einmal für das System getötet hatten — er führte sie jetzt gegen dasselbe System. Ich dachte daran während wir abstiegen. Manchmal ändert sich jemand. Das ist die seltenste Sache der Welt.`,
      berater: `Tertius hatte mir gesagt, dass jemand auf Ebene 33 angekommen sei — ein Soldat, der zu lesen begonnen hatte. Ich wusste wer es war, ohne fragen zu müssen. Kross hatte Zeit gefunden. Das war genug.`,
      default: ``,
    },
    scene: "Irondeep-Labyrinth, Ebene 33–37 — 14 Tage bis zum Update", bg: "void", music: "theme_void_terminal",
    conditionalFlag: "krossSchicksal",
    textConditional: { redemption: `Kross hielt die Linie an der Oberfläche. Vierhundert Ex-Puristen gegen dasselbe System das sie gebaut hatten. Manchmal ändert sich jemand.`, berater: `Tertius hatte von einem Soldaten gesprochen der zu lesen begonnen hatte. Ich wusste wer es war.`, default: `` },
    text: `Tertius musterte das Team: »Ein Null-Anomalie. Ein halb-gelöschter Geist. Ein freigesetzter Drache. Ein fluchfreier Ritter. Eine Halbdämonin. Und ein Paladin mit einem zu breiten Lächeln.«

Finn: »ICH bin DER Paladin!«

Tertius, zu Kaito: »...Interessante Gruppe.«

»Die Besten, die ich habe.«

Ebene 34 — Der Spiegelraum: Diese Ebene REFLEKTIERT. Sie zeigt jedem das, was er AM MEISTEN FÜRCHTET. Nicht Illusionen — ECHTE Manifestationen. Die einzige Verteidigung: AKZEPTANZ.

Rolands Angst: Sein Regiment. Dreißig Tote. »Es ist eine ERINNERUNG, Papa. Nicht die Gegenwart.« — »Und du hast ÜBERLEBT. Und du bist HIER — nicht mehr fliehend, sondern KÄMPFEND.«

Seras Angst: Allein im leeren Dorf. Flammen, die alles zerstören. Kaito griff durch das Feuer, nahm ihre Hand — seine Handfläche VERBRANNTE, aber er ließ nicht los. »Ich. Bin. HIER.« Die Flammen erloschen.

Finns Angst: Absolute Leere. Alle gehen weiter ohne ihn. »Du bist der TREUESTE. Und TREUE ist die seltenste Stärke in JEDER Welt.« Finns Grinsen — unzerstörbar.

Rens Angst: Sein Dorf. Die Löschung. 400 Jahre Schmerz. Kaitos Hand auf Rens Schulter. »Du kannst sie nicht retten. Aber du kannst dafür sorgen, dass es NIE WIEDER passiert.«`,
    text2: `Kaitos Angst: Sein altes Büro. Der einsame Programmierer. Die kalte Stimme seines alten Ichs: »Du bist eine MASCHINE, die so tut, als wäre sie ein Mensch.«

Und dann — eine Hand. Klein. Warm. Miras Hand. »BUDA! BUDA SPIELEN!«

»Miras Lachen. Elenas Lied. Rolands Umarmung. Finns Treue. Seras Feuer. Yukis Mut. Rens Stille. Rex' Unschuld.«

»Das ist KEIN Code. Das ist LEBEN. Und ich LEBE es. ENDLICH.«

Das alte Bild zerbrach. Dahinter — eine Treppe. Abwärts.

Ebene 35 — Die Echos: Die Erinnerungen der Welt. Prä-System-Kinderlachen. Die sieben Architekten am Himmel. Die Implementierung — Statusfenster erscheinen zum ersten Mal über Köpfen. Manche lächeln. Manche weinen. Manche SCHREIEN.

Und Septima — kleiner als die anderen, dunklere Augen — stand abseits. Schüttelte den Kopf. Und GING.

Bevor sie verschwand, drehte sie sich um. Schaute direkt in Kaitos Augen.

»Finde mich.«`,
    systemBox: { title: "VOID-TERMINAL — ENTHÜLLUNG", lines: [
      "> Septimas Echo hat den Träger DIREKT adressiert.", "> Dies sollte unmöglich sein — Echos sind Aufzeichnungen.", ">",
      "> NEUE INFORMATION:", "> Septima ist NICHT tot.", "> Sie ist IM KERN. Im System-Herz.", "> Sie wartet dort. Seit 3.000 Jahren.", ">",
      "> Ziel aktualisiert: Nicht nur den Kern erreichen.", "> SEPTIMA FINDEN.",
    ]},
    text3: `Ebene 36 — Die Schwelle: System-Stabilität 0%. Das System endet vollständig.

Rolands Skills erlöschen. »...Meine Skills. Sie funktionieren nicht mehr.« — »Du hast nur dein Schwert. Und zwanzig Jahre Training.« — »...Das reicht.«

Finn, seine Paladin-Skills erloschen: »Kein System. Nur... ICH.« — »Finn. Du warst IMMER mehr als deine Skills.«

Seras Flammen werden STÄRKER — ihr Feuer war nie systemisch.

Und Rex — WÄCHST. 10 Meter. 15. 20. ZWANZIG METER DRACHE. Kobaltblaue Schuppen leuchtend. Flügel voll ausgewachsen.

»Rex ist... MAJESTÄTISCH. ENDLICH.«

Ren — zum ersten Mal VOLLSTÄNDIG. Feste Hände. Warme Haut. Ein echtes Lächeln.

»...Ich bin ganz.«

Ebene 37 — Das Tor: Ein Portal, älter als das System. Kaito legte beide Hände darauf und — zum ersten Mal seit seiner Geburt — ließ alle Tarnung fallen. Vollständig sichtbar für die Realität.

Das Portal LEUCHTETE. Weißes, reines, uncodiertes Licht.

Es öffnete sich.`,
    choices: [{ text: "→ Kapitel 42: Die Null-Zone", next: "a6k2_nullzone" }],
  },

  a6k2_nullzone: {
    act: "AKT VI", chapter: "Kapitel 42 — Null.Zone()", title: "Jenseits des Systems",
    scene: "Die Null-Zone", bg: "void", music: "theme_elena_song",
    text: `Die Null-Zone war unmöglich schön.

Eine Welt, in der die Realität nicht GERENDERT wird — sondern einfach IST. Keine Texturen, keine System-Optimierung. Alles in absoluter Schärfe. Jeder Grashalm individuell. Jeder Stern einzigartig.

Die Farben hatten keine NAMEN. Tausende von Schattierungen, die kein Gehirn verarbeiten konnte.

Sera, Mund offen: »...Das ist... so sieht die Welt OHNE System aus?«

»So sah sie immer aus. Das System hat nur eine SCHABLONE darübergelegt.«

Rex tollte über die Wiese wie ein Welpe. »REX LIEBT DIESEN ORT!«

Ren, stehend, Hände fest, echte Tränen: »...Ich bin lebendig. Wirklich lebendig. Hier bin ich kein Glitch. Ich bin ein MENSCH.«

Die Überreste: Ruinen einer Zivilisation vor dem System. Kleine Häuser. Einfache Strukturen. An einer Wand: Ein Gemälde. Eine Familie. Keine Level über ihren Köpfen. Nur lachende Gesichter.

»Das war die Welt vor dem System. Menschen, die LEBTEN, ohne dass jemand ihren WERT in Zahlen maß.«

Der Friedhof der Anomalien: Hunderte gelöschter Entitäten. Halb existierend. Kaito sang das Lied des Lichts — und tausend halb-gelöschte Seelen hörten zu, hörten etwas, das nicht Schmerz war.

»Ich komme zurück. Wenn ich den Kern erreiche — ich komme für EUCH zurück.«

»...Versprichst du?«

»Ich verspreche es.«`,
    choices: [{ text: "→ Kapitel 43: Das Archiv", next: "a6k3_archiv" }],
  },

  a6k3_archiv: {
    act: "AKT VI", chapter: "Kapitel 43 — Archive.Access()", title: "Sextus' Echo und Primus",
    conditionalFlag: "sextusSchicksal",
    textConditional: {
      schlaf: `Ich hatte Sextus Ruhe versprochen. Das war schwerer als es klang — Ruhe in einem System zu schaffen das keine Ruhe kennt. Aber ich wusste wo ich es schreiben würde. Eine Zeile. Die letzte Zeile.`,
      wiedergeburt: `Ich hatte Sextus einen Körper versprochen. Ich wusste nicht wie alt er sein würde wenn er aufwacht. Ich wusste nicht in welcher Welt. Aber der Code würde ihn finden. Code findet immer.`,
      wahl: `Ich hatte Sextus eine Frage hinterlassen. Das war entweder das Großzügigste oder das Grausamste was ich je getan hatte. Die Antwort würde ich nie erfahren. Das musste ich akzeptieren.`,
      default: ``,
    },
    scene: "Das Archiv — 10 Tage bis zum Update", bg: "void", music: "theme_mystery",
    conditionalFlag: "sextusSchicksal",
    textConditional: { schlaf: `Eine Zeile. Die letzte. Ruhe in einem System das keine kennt. Das war schwerer als es klang.`, wiedergeburt: `Einen Körper. Ich wusste nicht wie alt er sein würde. Aber Code findet.`, wahl: `Eine Frage. Das Großzügigste oder Grausamste. Die Antwort würde ich nie erfahren.`, default: `` },
    text: `Das Archiv war ein Serverraum.

Buchstäblich. Metallwände. Leuchtende Racks mit Daten-Kristallen. Aether-Kühlung. Ein blinkender Status-Monitor.

Die Architekten hatten die Welt nicht mit MAGIE erschaffen. Mit TECHNOLOGIE. Die meiner alten Welt nicht so unähnlich.

Ich war ein Game-Designer, der im Serverraum seines eigenen Spiels stand.

Finn: »Was IST das?« — »Wie ein Computerraum. In meiner alten Welt. Das hier ist die FESTPLATTE der Realität.« — »...Ich verstehe jedes einzelne Wort und KEINES davon.«

Im Zentrum: Ein Holographischer Thron. Eine Projektion — Sextus' Echo. Der sechste Architekt, dessen Bewusstsein ins System integriert wurde.

»EINDRINGLING. IDENTIFIZIERUNG.«

»...NULL. SEPTIMAS ERBE.«

»ICH HABE AUF DICH GEWARTET.«

Sextus hat 3.000 Jahre den Kern bewacht. Er denkt. Er erinnert. Aber fühlt er? »ICH... GLAUBE, ICH HABE VERGESSEN, WIE DAS FUNKTIONIERT.«

»DER KERN IST HINTER DIESER TÜR. BEWACHT VON ETWAS STÄRKEREM. PRIMUS' AVATAR.«

»ZU SEINER LETZTEN BITTE:«

»WENN DU DEN CODE UMSCHREIBST... LÖSCHE MICH. MEIN BEWUSSTSEIN. ICH WILL AUFHÖREN ZU DENKEN. NACH 3.000 JAHREN... WILL ICH SCHLAFEN.«`,

    choices: [
      { text: "A) »Versprochen. Du hast deine Ruhe verdient.«",
        desc: "[AF+Sextus] [AL+Licht] Im Endgame: Sextus schläft friedlich ein. Zum ersten Mal seit 3.000 Jahren.",
        next: "a6k3_primus", alignEffect: { licht: 1 }, flagEffect: { sextusSchicksal: "schlaf" },
        narrativeFeedback: "Sextus' Echo leuchtet. »...DANKE. DAS IST... DAS IST GUT.« Zum ersten Mal klingt seine Stimme menschlich." },
      { text: "B) »Nein. Ich werde dich HEILEN. Dir einen Körper geben. Ein LEBEN.«",
        desc: "[AF+Sextus] [AL+Ordnung] Schwieriger. Sextus wird wiedergeboren als sterbliches Wesen.",
        next: "a6k3_primus", alignEffect: { ordnung: 2 }, flagEffect: { sextusSchicksal: "wiedergeburt" },
        narrativeFeedback: "»EIN... KÖRPER? ICH KÖNNTE... LEBEN?« Die holographische Gestalt flackert — nicht vor Instabilität, sondern vor HOFFNUNG." },
      { text: "C) »Ich gebe dir die WAHL. Das neue System wird dich fragen.«",
        desc: "[SC] Thematisch perfekt — WAHL als Kernprinzip. Sextus trifft seine eigene Entscheidung.",
        next: "a6k3_primus", flagEffect: { sextusSchicksal: "wahl" },
        narrativeFeedback: "»...WAHL. DAS HATTE ICH NIE.« Stille. Dann: Eine langsame, menschliche Geste — er nickt." },
    ]
  },

  a6k3_primus: {
    act: "AKT VI", chapter: "Kapitel 43 — Primus' Avatar", title: "Der Ordner",
    scene: "Vor der Tür zum Kern", bg: "chaos", music: "theme_training",
    conditionalFlag: "mordecaiSchicksal",
    textConditional: {
      redemption: `Mordecai hatte ihm im Gefängnis etwas gesagt — durch Veyras Netzwerk, in einem Brief, der offiziell nie existiert hatte: »Das System sprach mit mir wie eine Stimme aus dem Himmel. Ich habe ihm geglaubt, weil ich wollte, dass es Gott gibt.«

Kaito trug das mit sich, als er vor Primus' Avatar stand. Der Architekt hatte auch jemanden benutzt, der glauben wollte. Das machte ihn nicht weniger gefährlich. Aber es machte ihn... verständlicher.`,
      verhaftet: `Mordecai saß in einem Kerker unter dem Kaiserpalast. Aber er hatte noch geantwortet auf Veyras Fragen, bevor die Tür sich schloss: »Primus lügt nicht. Er sagt die Wahrheit — und wählt aus, welche Wahrheit er erzählt. Das ist gefährlicher.«`,
      default: ``,
    },
    text: `Primus' Avatar war perfekt. Im wörtlichsten Sinne.

Drei Meter hoch, aus purem System-Code. Kein Gesicht — nur goldene Linien. Keine Augen — nur weiße Punkte, die alles SAHEN. Um ihn: absolute Ordnung. Jeder Staubpartikel in perfekter Symmetrie.

»NULL.«

Das Wort hallte — nicht akustisch. Existenziell.

»ICH HABE AUF DICH GEWARTET. SEIT SEPTIMA DICH ERSCHUF.«

»Weil deine Schöpfung einen FEHLER hat.«

»ES GIBT KEINE FEHLER IM SYSTEM. NUR UNGEPLANTE VARIABLEN.«

»Dann bin ICH eine ungeplante Variable. Und die MILLIONEN, die dein System als 'fehlerhaft' markiert und GELÖSCHT hat — waren die auch ungeplante Variablen?«

Primus flackerte — eine Millisekunde.

»OPTIMIERUNG. ORDNUNG ERFORDERT MANCHMAL OPFER.«

»Ordnung ist ein WERKZEUG, Primus. Kein ZIEL. Der Moment, in dem Ordnung wichtiger wird als die MENSCHEN, die sie beschützen soll — ist der Moment, in dem sie zum GEFÄNGNIS wird.«

»...UND WAS SCHLÄGST DU STATTDESSEN VOR?«

»Freiheit. Wahl. Ein System, das DIENT statt KONTROLLIERT.«

»FREIHEIT FÜHRT ZU CHAOS.«

»Und Ordnung führt zu STAGNATION. Die Wahrheit liegt DAZWISCHEN.«

»...DU KLINGST WIE SEPTIMA.«

»Gut.«

»SEPTIMA HAT VERLOREN.«

»Septima ist GEGANGEN. Das ist nicht dasselbe.«

»ICH WERDE DICH NICHT PASSIEREN LASSEN.«

»Dann muss ich DURCH.«`,

    // [SC] Final Boss — drei Pfade
    choices: [
      { text: "A) KAMPF — Void vs. System. Team gegen den Avatar.",
        desc: "[SC] [AL+Schatten] Drei Phasen: Avatar → System als Umgebung → Primus allein. Jedes Teammitglied hat seinen Moment. Primus' Schwachstelle: Die Schuld um Septima.",
        next: "a6k4_kern", alignEffect: { schatten: 1 }, flagEffect: { primusEnde: "kampf" },
        narrativeFeedback: "Rex' Void-Feuer. Seras Dämonenflammen. Roland mit reinem Stahl. Finn mit seinem Körper als Schild. Ren im Schatten. Und Kaito — der den Code liest, bis er die Schwachstelle findet: Septima." },
      { text: "B) DIALOG — »Primus. Du hast Septima geliebt.«",
        desc: "[SC] [AL+Licht] Der Avatar erstarrt. Die Wahrheit: Primus machte das System strenger, um seinen Schmerz um Septima zu kontrollieren. Er bricht zusammen. Die Tür öffnet sich.",
        next: "a6k4_kern", alignEffect: { licht: 2 }, flagEffect: { primusEnde: "dialog" },
        narrativeFeedback: "»WAS—« »Als sie ging — hast du das System STRENGER gemacht. HÄRTER. KONTROLLIERENDER. Nicht um die Welt zu schützen. Um den SCHMERZ zu kontrollieren.« Primus bricht. Goldener Code zerbröckelt. Darunter: ein müder, alter Mann." },
      { text: "C) CODE.MODIFY — Hack den Gott. Direkt in seinen Code eingreifen.",
        desc: "[SC] [AL+Ordnung] Riskantester Pfad. Avatar wird deaktiviert, Primus' Bewusstsein befreit. Wenn es scheitert: Gegenangriff, Team fängt auf.",
        next: "a6k4_kern", alignEffect: { ordnung: 2 }, flagEffect: { primusEnde: "hack" },
        narrativeFeedback: "Kaito grei direkt in Primus' Code ein. Eine einzige, präzise Änderung: Der Befehl, der den Avatar KONTROLLIERT, wird überschrieben. Der Avatar fällt. Und irgendwo — tief im System — atmet Primus zum ersten Mal frei." },
    ]
  },

  // ════ KAPITEL 44: DER KERN ══════════════════════════════════════════════

  a6k4_kern: {
    act: "AKT VI", chapter: "Kapitel 44 — Core.Access()", title: "Das Herz der Welt",
    conditionalFlag: "primusEnde",
    textConditional: {
      kampf: `Der Garten trug Narben. Verbrannte Äste, ein Riss im Boden wo die Energie ausgebrochen war. Septima sah es und sagte nichts. Ich sah es und sagte: »Es wächst zurück.« — »Ja«, sagte sie. »Das tut es immer.« Das klang wie mehr als ein Kommentar über Pflanzen.`,
      dialog: `Primus saß am Rand des Gartens. Als alter Mann — die Geometrie war weg, die Perfektion weg. Nur ein Wesen das sehr lange sehr viel getragen hatte. Er schaute dem Schreiben zu. Als wir fertig waren, nickte er einmal. Kein Wort. Ein Nicken.`,
      hack: `Der Avatar lag still an der Gartenmauer, deaktiviert aber nicht zerstört. Primus war frei — was immer das für ihn bedeutete. Septima sagte: »Du hast ihn nicht gelöscht.« — »Nein.« — »Warum?« Ich wusste die Antwort nicht. Ich hatte es trotzdem so gemacht.`,
      default: ``,
    },
    scene: "Hinter der Archiv-Tür — 10 Tage bis zum Update", bg: "void", music: "theme_elena_song",
    conditionalFlag: "primusEnde",
    textConditional: { kampf: `Der Garten trug Narben. »Es wächst zurück.« — »Das tut es immer.« Das klang nach mehr als Pflanzen.`, dialog: `Primus saß am Rand, alt, ohne Perfektion. Er schaute zu. Als wir fertig waren nickte er einmal.`, hack: `Der Avatar lag still — deaktiviert, nicht zerstört. »Du hast ihn nicht gelöscht.« — »Nein.« — »Warum?« Ich wusste es nicht.`, default: `` },
    text: `Dahinter: ein GARTEN.

Nicht metaphorisch. Ein echter Garten. Gras, das leuchtete. Bäume in Farben, die kein System katalogisieren konnte. Ein Bach aus flüssigem Aether — golden, warm, lebendig.

Und in der Mitte: ein Baum. Ein einzelner, kolossaler Baum, dessen Stamm aus System-Code und dessen Blätter aus Aether bestanden. Seine Wurzeln reichten durch die gesamte Welt.

Das System war kein Programm. Es war ein LEBENDER BAUM.

Sera berührte einen Ast — er bog sich zu ihr hin wie eine Pflanze zum Licht.

»Es... FÜHLT uns?«

»Das System ist kein Gefängnis. Das System IST der Gefangene.«

Und am Fuß des Baumes — zwischen den Wurzeln, in einer Mulde aus goldenem Licht — eine GESTALT. Ruhend. Dunkles Haar wie ein Wasserfall. Haut zwischen Bronze und Menschlichem. Eine Aura — nicht System-Code und nicht Aether. Beides. Verbunden.

Septima. Die Siebte. Die, die ging.

Nicht gegangen. Hierher gekommen. Zum Kern. Und sich damit verflochten — 3.000 Jahre lang versucht, das System von INNEN zu verändern, eine Codezeile nach der anderen.

[NULL] — ihre letzte Tat, bevor sie sich mit dem Baum verband.`,
    text2: `»Septima.«

Ihre Augen öffneten sich. Dunkel. Tief. Unendlich alt. Und darin — ganz tief — ein Funke von etwas Warmem.

»...Kaito.«

Ein Wort. Sein Name. Ausgesprochen von dem Wesen, das sein zweites Leben ermöglicht hatte.

»Du bist... größer als ich erwartet habe.«

»Du bist kleiner.«

»Ich war immer die Kleinste.«

Das System hat einen KERN. Er LEBT. Nicht wie ein bewusstes Wesen — er FÜHLT. Auf primitive, instinktive Art. Er fühlt Ordnung als Geborgenheit. Chaos als Schmerz. Freiheit als ANGST.

»Das Update ist kein Angriff. Es ist ein SCHUTZMECHANISMUS. Das System hat Angst vor Freiheit. Weil Freiheit bedeutet, dass die Regeln sich ändern können.«

»...Ich muss es nicht HACKEN. Ich muss es BERUHIGEN.«

Septima weinte. Goldene Tränen über bronzene Wangen.

»Ja. Endlich. ENDLICH versteht jemand.«

Und das Void-Terminal aktualisierte sich:`,
    systemBox: { title: "VOID-TERMINAL — [CODE.MODIFY] VOLLSTÄNDIG FREIGESCHALTET", lines: [
      "> Bedingung 1: Das System VERSTEHEN  ✓", "> Bedingung 2: Das System FÜHLEN       ✓", ">",
      "> ╔═══════════════════════════════════╗", "> ║ [CODE.MODIFY] — VOLLSTÄNDIG        ║",
      "> ║ [CODE.CREATE] — FREIGESCHALTET   ║", "> ║ [SYSTEM.BACKDOOR] — FREIGESCHALTET ║", "> ╚═══════════════════════════════════╝", ">",
      "> ALLE BEFEHLE VERFÜGBAR.", "> Der Träger hat volles System-Zugriffsrecht.", ">", "> Was er damit TUT... liegt bei ihm.",
    ]},
    choices: [{ text: "→ Kapitel 45: Secunda", next: "a6k5_secunda" }],
    skillUnlock: ["codeCreate"],
  },

  // ════ KAPITEL 45: SECUNDA ═══════════════════════════════════════════════

  a6k5_secunda: {
    act: "AKT VI", chapter: "Kapitel 45 — Secunda.Intervene()", title: "Die letzte Hürde",
    scene: "Der Kern-Garten", bg: "chaos", music: "theme_mystery",
    conditionalFlag: "marcusVertrauen",
    textConditional: {
      true: `Kaito hatte Marcus früh erkannt. Hatte trotzdem mit ihm gespielt — ließ den Verräter glauben, er führe. Marcus hatte Secunda nicht gekannt. Er hatte nur gewollt, was alle wollten: wichtig sein. Secunda hatte das genommen und geformt. Die Autorin und ihr unwilliges Werkzeug.`,
      default: ``,
    },
    text: `»Was für eine HÜBSCHE Geschichte.«

Lady Serephina — Secundas physische Manifestation. Unmenschliche Schönheit. Augen wie flüssiges Gold. Das Lächeln einer Autorin, die ihren Lieblingscharakter betrachtet.

»Ich habe deine Geschichte ORCHESTRIERT, Kaito. Millheim musste angegriffen werden, damit du die Akademie erreichst. Marcus musste dich VERRATEN, damit du die Nullen gründest. Kross musste dich JAGEN, damit du stärker wirst.«

»Du bist mein PROTAGONIST. Und jeder Protagonist braucht SCHMERZ.«

Die Worte trafen. War alles — ALLES — nur eine Geschichte? War Yukis Timer ein PLOTPUNKT?

Und dann — Finn. Er trat vor.

»Kaito. Hör mir zu.«

»Sie sagt, sie hat alles GEPLANT? VIELLEICHT. Ich bin nicht klug genug, um das zu wissen.«

Das Grinsen. Unzerstörbar.

»Aber EINES weiß ich: Als ich dich am Brunnen getroffen habe — mit meinem Topf als Helm — hat NIEMAND mir gesagt, dass ich dein Freund werden soll. Ich habe es GETAN.«

Sera trat vor: »Als du dich neben mich auf den Felsen gesetzt hast — hat keine Göttin dir das BEFOHLEN. Du hast es getan, weil du WOLLTEST.«

Roland: »Und als du mir vergeben hast — für meine Lügen — war das keine GESCHICHTE. Das warst DU.«

Ren: »Und als du mich nicht als FEHLER behandelt hast, sondern als MENSCHEN — war das kein SKRIPT.«

Rex senkte seinen gewaltigen Kopf: »Rex hat sich ENTSCHIEDEN, dir zu folgen. Rex ist ein DRACHE. Drachen entscheiden SELBST.«`,
    text2: `»Du hast vielleicht die UMSTÄNDE geschrieben, Secunda. Die Bühne. Aber die BEZIEHUNGEN — die Liebe, die Treue, die Freundschaft — die hast du NICHT geschrieben. Weil du sie nicht VERSTEHST.«

»Du siehst die Welt als GESCHICHTE. Ich sehe sie als LEBEN. Und der Unterschied ist: In einer Geschichte kontrolliert der AUTOR alles. Im Leben kontrolliert NIEMAND alles. Und GENAU DAS macht es wertvoll.«

»...Du lehnst meine Geschichte AB?«

»Ich lehne deine KONTROLLE ab. AB JETZT schreibe ICH.«

Und in Secundas goldenen Augen — tief, TIEF — sah Kaito etwas Unerwartetes: EINSAMKEIT. 3.000 Jahre Geschichten geschrieben. Helden erschaffen. Aber nie TEIL davon sein können. Immer die Autorin. Nie die Figur.

Wie er im ersten Leben einsam war. Allein vor einem Bildschirm. Welten erschaffend, in denen er nie LEBEN konnte.

»Secunda. Du bist müde. Genauso einsam wie Sextus. Ihr alle — die Architekten — habt eine Welt erschaffen und euch dann SELBST daraus AUSGESCHLOSSEN.«

»Was wäre, wenn der neue Code... einen Platz für EUCH hätte? Nicht als Götter. Als MENSCHEN. Als Teil der Geschichte, nicht als ihre Autoren?«

Secunda weinte. Goldene Tränen, die Blumen wachsen ließen.

»...Du bietest den GÖTTERN an, STERBLICH zu werden?«

»Ich biete euch an, LEBENDIG zu werden. Zum ersten Mal.«

»...Schreib eine gute Geschichte, Kaito. Eine, in der ALLE eine Wahl haben. Sogar ich.«

Sie verschwand.`,
    choices: [{ text: "→ Kapitel 46: Das Schreiben", next: "a6k6_finale" }],
  },

  // ════ KAPITEL 46: DIE FINALE ENTSCHEIDUNG ══════════════════════════════

  a6k6_finale: {
    act: "AKT VI", chapter: "Kapitel 46 — Code.Write()", title: "Die finale Entscheidung",
    conditionalFlag: "prophetErgebnis",
    textConditional: {
      heilung_moeglich: `Eine Zeile des neuen Codes war für Martin. Ich schrieb sie zuletzt — nicht weil sie unwichtig war, sondern weil sie das Schwierigste war. Code der eine Person heilt die nicht mehr weiß wer sie ist. Septima schaute mir dabei zu. »Das ist die riskanteste Zeile«, sagte sie. »Ich weiß«, sagte ich. Und schrieb sie trotzdem.`,
      besiegt_befreit: `Martin stand am Rand des Gartens. Zwanzig Jahre alt vielleicht, verwirrter Blick, freie Hände. Er verstand nicht was hier passierte. Aber er war da — fest, real, ohne Void-Flackern. Ich schrieb, ohne ihn anzuschauen. Das hier war für ihn. Auch wenn er es nie wissen würde.`,
      default: ``,
    },
    scene: "Vor dem Kern-Baum — 7 Tage bis zum Update", bg: "void", music: "theme_void_terminal",
    conditionalFlag: "prophetErgebnis",
    textConditional: { heilung_moeglich: `Eine Zeile für Martin, zuletzt. »Die riskanteste.« — »Ich weiß.« Und schrieb sie trotzdem.`, besiegt_befreit: `Martin stand am Rand des Gartens, zwanzig vielleicht, freie Hände. Er verstand es nicht. Aber er war da.`, default: `` },
    text: `Kaito stand allein vor dem Kern-Baum. Septima neben ihm — ihre Hand auf seiner Schulter. Physisch. Echt. Warm.

»Es ist Zeit, Kaito.«

»Ich weiß.«

»Du hast den Code. Du hast die Macht. Du hast die VISION.«

Sie schaute ihn an — nicht die Erwartung eines Gottes. Der Stolz einer Mutter.

»Was schreibst du?«

Er legte beide Hände auf den Stamm.

Der Baum REAGIERTE. Nicht mit Widerstand. Mit NEUGIER. Wie ein scheues Tier, das zum ersten Mal berührt wird.

Und dann begann er zu singen — Arias Lieder, Elenas Melodie — und schrieb sieben Tage lang den neuen Code.

Nicht wie Programmieren. Wie SINGEN.`,
    systemBox: { title: "DER NEUE CODE — GENESIS 2.0", lines: [
      "> 1. LEVEL = OPTIONAL — Wer Level will, behält sie.",
      ">    Wer nicht will, legt sie ab. Level = Erfahrung, nicht Wert.",
      ">", "> 2. KLASSEN = VORSCHLÄGE — Das System empfiehlt.",
      ">    Zwingt nicht auf. Klassenwechsel jederzeit möglich.",
      ">", "> 3. RASSEN = GLEICH — [Unheilsbringer] → GELÖSCHT.",
      ">    Alle Rassen bestimmen selbst ihren Platz.",
      ">", "> 4. WILDE MAGIE = FREI — Koexistenz mit System-Magie.",
      ">", "> 5. DAS SYSTEM = BEWUSST — Wird zum PARTNER der Welt.",
      ">    Kann lernen. Wachsen. Sich verändern.",
      ">", "> 6. DIE ARCHITEKTEN = EINGELADEN — Können wählen:",
      ">    Sterblich werden oder sich zurückziehen.",
      ">", "> 7. DAS UPDATE = UMGELEITET",
      ">    → Statt VERSCHÄRFUNG → ÖFFNUNG",
      ">    → Alle 1.000 Jahre fragt das System die Welt:",
      ">      »Was wollt ihr verändern?«",
      ">    → Und HÖRT ZU.",
    ]},
    text2: `Sieben Tage. Ohne Pause. Ohne Essen.

Sein Team wachte. Roland stand Wache. Sera hielt die Wärme aufrecht. Finn brachte Wasser. Ren beobachtete die Reaktionen. Rex umschloss den Garten — ein Drachenschild.

Und Septima saß neben ihm. Still. Wartend. Zum ersten Mal seit 3.000 Jahren — hoffend.

Dann: Der Update-Countdown stoppte.

Nicht abgebrochen. UMGELEITET. Der Wachstumszyklus wurde zum ERNEUERUNGSZYKLUS. Die Faust entspannte sich zur offenen Hand.

Überall in der Welt flackerten Statusfenster. Level-Anzeigen pulsierten. Und dann — für einen atemlosen Moment — VERSCHWANDEN sie.

Als Frage. Nicht als Zwang.

In Drak'Moor verschwand [Unheilsbringer]. Lilithia lachte — zum ersten Mal seit 189 Jahren — laut, frei.

In Sylvanthos trat Quarta ins Licht.

In Kreuzweg hämmerte Gorrick auf seinen Amboss — Runen leuchteten, kein Blocker mehr.

Kaito sackte zusammen. Bewusstlos. Sera fing ihn auf.

»...Idiot. Du hast wieder alles ALLEIN gemacht.«

Finn: »IST ER— LEBT ER—«

Roland, ruhig: »Er schläft. Er hat verdient.«

Rex legte seinen gewaltigen Kopf neben Kaitos Körper: »Rex beschützt. Rex beschützt IMMER.«

Ren, zum ersten Mal mit einem echten Lächeln: »...Er hat es wirklich getan.«`,

    // [SC] DIE FINALE WAHL — bestimmt das Ending
    choices: [
      { text: "A) »Ich werde Teil des neuen Systems. [NULL] hat seinen Zweck erfüllt.«",
        desc: "[SC] Kaito gibt [NULL] auf. Wird ein normaler Teil der neuen Welt. → ENDING 3 (Der wahre Held) oder ENDING 4 (Der einsame Wolf).",
        next: "a6k7_erwachen", alignEffect: { licht: 1 }, flagEffect: { finaleWahl: "A" },
        narrativeFeedback: "Das Terminal aktualisiert sich ein letztes Mal. Dann: Stille. Kein Summen. Kein Countdown. Kaito ist zum ersten Mal in zwei Leben — ein normaler Mensch." },
      { text: "B) »Ich behalte [NULL]. Die Welt braucht einen Wächter AUSSERHALB.«",
        desc: "[SC] Kaito bleibt die Anomalie. Für immer. → ENDING 2 (Eminence in Shadow) oder ENDING 1 (Der neue Gott).",
        next: "a6k7_erwachen", alignEffect: { schatten: 1 }, flagEffect: { finaleWahl: "B" },
        narrativeFeedback: "Das Terminal: »Der Träger bleibt außerhalb. Wie immer.« — »S.: 'Das war zu erwarten. Und richtig.'«" },
      { text: "C) »Ich LÖSCHE [NULL] und ersetze es — NULL für ALLE. Jeder kann wählen, außerhalb zu stehen.«",
        desc: "[SC] Kaito demokratisiert [NULL]. → ENDING 7 (System Delete) — das wahre Ending.",
        next: "a6k7_erwachen", alignEffect: { licht: 2, chaos: 1 }, flagEffect: { finaleWahl: "C" },
        narrativeFeedback: "Yukis Idee — ein optionales System — wird zur letzten Konsequenz: Nicht nur das SYSTEM ist optional. Die Möglichkeit, AUSSERHALB zu stehen, gehört nun ALLEN." },
      { text: "D) »Ich gehe ZURÜCK. In meine alte Welt.«",
        desc: "[SC] Septimas Tür öffnet sich in beide Richtungen. → ENDING 6 (Rückkehr) — das geheime Ending.",
        next: "a6k7_erwachen", flagEffect: { finaleWahl: "D" },
        narrativeFeedback: "Septima lächelt. Traurig. Warm. Mütterlich. Die Tür öffnet sich — das Büro, sein Büro, die leeren Energydrink-Dosen. Und daneben: die Tür zurück." },
      { text: "E) »Ich VERSCHMELZE mit dem System. Ich werde das neue Herz — wie Septima.«",
        desc: "[SC] Kaito wird zum Kern. Wohlwollend. Ewig. → ENDING 1 (Der neue Gott).",
        next: "a6k7_erwachen", alignEffect: { licht: 2, ordnung: 1 }, flagEffect: { finaleWahl: "E" },
        narrativeFeedback: "Er legte die Hände auf den Stamm. Und floss — wie Wasser in die Erde sickert. Natürlich. Ruhig. Richtig." },
      { text: "F) »Ich ZERSTÖRE alles. Kein System. Kein neues, kein altes. FREIHEIT. Total.«",
        desc: "[SC] [AL+Schatten MAX] Nur bei Max-Schatten-Alignment verfügbar. → ENDING 5 (Void-Dämonen-König). Millionen sterben. Die Überlebenden sind frei. Das dunkelste Ending.",
        next: "a6k7_erwachen", alignEffect: { schatten: 3 }, flagEffect: { finaleWahl: "F" },
        narrativeFeedback: "Der Baum schrie. Ein Ton, den kein Ohr hören sollte. Und zerbrach. Code für Code. Blatt für Blatt. Überall in der Welt — gleichzeitig — verschwanden die Statusfenster. Für immer." },
    ]
  },

  // ════ ERWACHEN + ENDINGS ════════════════════════════════════════════════

  a6k7_erwachen: {
    act: "AKT VI", chapter: "Epilog — Das Erwachen", title: "Drei Tage später",
    scene: "Aethermere — neue Ära", bg: "village", music: "theme_elena_song",
    conditionalFlag: "finaleBeziehung",
    textConditional: {
      sera: `Kaito wachte auf. Neben ihm: Sera. Sie saß auf einem Stuhl, Arme verschränkt, schläft mit offenem Mund — und wacht sofort auf, als er sich bewegt. »Endlich. Drei Tage. Idiot.« Kein Vorwurf. Nur Erleichterung, die sie nicht anders ausdrücken kann.`,
      yuki: `Kaito wachte auf. Neben ihm: Yuki. Sie hält seinen Hasen-Anhänger in der Hand — den er vor Jahren für sie aufbewahrt hatte — und schaut ihn an, als würde sie nach Jahren der Erschöpfung zum ersten Mal wieder atmen. Ihr Timer: gone. »Guten Morgen«, sagt sie. Einfach das.`,
      emma: `Kaito wachte auf. Neben ihm: Emma. Sie skizziert ihn — schlafend, jetzt wach — mit der Selbstverständlichkeit von jemandem, der drei Tage gewartet hat und die Zeit genutzt hat. »Du siehst besser aus als ich gedacht hatte«, sagt sie. »Ich muss das Bild noch mal machen.«`,
      veyra: `Kaito wachte auf. Neben ihm: Veyra — ohne Maske, ohne Illusion, ihr echtes Gesicht, das er nur selten sieht. Heterochrome Augen. Sie schläft nicht. Sie hat wahrscheinlich die ganze Zeit gewacht. »Willkommen zurück«, sagt sie. Keine Verkleidung. Nur sie.`,
      familie: `Kaito wachte auf. Miras kleine Hand lag auf seiner. »BUDA!« — sie riss die Hand weg und tat so, als hätte sie nur zufällig daneben gelegen. Elena stand in der Tür. Roland dahinter — gerade, fluchfrei, gesund. Er nickt einmal. Das reicht.`,
      default: `Kaito wachte auf. Neben ihm — jemand ist da. Immer. Eine Hand auf seiner.`,
    },
    text: `»...Wie lange?«

»Drei Tage. Du hast drei Tage geschlafen.«

»Und die Welt?«

»...Verändert. Für immer.«

Er schaute aus dem Fenster. Die Welt — seine Welt. Aber anders. Das Licht wärmer. Die Farben tiefer. Über den Köpfen der Menschen: manche hatten Statusfenster. Manche nicht. Manche hatten Level. Manche keine.

Und ALLE sahen aus, als hätten sie zum ersten Mal GEWÄHLT.`,
    text2: `Durch das Fenster: Roland. Er stand — gerade, ohne das Hinken das ich seit meiner Geburt kannte. Zwanzig Jahre Fluch. Weg. Er bemerkte meinen Blick. Nickte einmal. Das war alles. Das war genug.`,
    systemBox: { title: "VOID-TERMINAL — LETZTER BERICHT", lines: [
      "> System-Status: GENESIS 2.0 — AKTIV",
      "> Update-Status: UMGELEITET → Erneuerungszyklus",
      ">", "> Weltweiter Wahlstatus:",
      "> → 62% haben das System BEHALTEN",
      "> → 23% haben das System ABGELEGT",
      "> → 15% haben individuelle Anpassungen gewählt",
      ">", "> Yukis Timer: DEAKTIVIERT. Permanent.",
      "> Drain auf Träger: BEENDET.",
      ">", "> Der Träger kann jetzt RUHEN.",
      ">", "> ...Endlich.",
      ">", "> — S.: »Willkommen zurück.«",
    ]},
    choices: [
      { text: "→ Das Ende deiner Geschichte", next: "__calculateEnding__" },
    ]
  },

  a6k8_endings: {
    act: "AKT VI", chapter: "Epilog — Die Enden", title: "Was kommt danach",
    scene: "Aethermere — neue Ära", bg: "village", music: "theme_family",

    // Alle 7 Endings als Choices — Engine wählt basierend auf finaleWahl-Flag
    // In der echten Engine würde calculateEnding() das richtige auswählen
    // Hier zeigen wir alle als wählbar

    text: `Je nach deinen Entscheidungen über das gesamte Spiel endet Kaitos Geschichte anders.

Welches Ending spiegelt deinen Weg am besten wider?`,

    choices: [
      { text: "ENDING 1 — »Der neue Gott« (Verschmelzung mit dem Kern)",
        desc: "Kaito wird das Herz des Systems. Nicht als Herrscher. Als Hüter. Die Welt ist frei — und er wacht über sie. Für immer.",
        next: "ending_1", flagEffect: { gewaehltesEnding: "1" } },
      { text: "ENDING 2 — »Eminence in Shadow« (NULL behalten, im Schatten)",
        desc: "Die Welt vergaß ihn. Das war der Plan. Die Nullen existieren weiter. Im Schatten. Wie immer.",
        next: "ending_2", flagEffect: { gewaehltesEnding: "2" } },
      { text: "ENDING 3 — »Der wahre Held« (Teil des Systems werden)",
        desc: "Er wollte nie ein Held sein. Er wurde einer trotzdem. Und lebte — zum ersten Mal — glücklich.",
        next: "ending_3", flagEffect: { gewaehltesEnding: "3" } },
      { text: "ENDING 4 — »Der einsame Wolf« (Wanderer der Freiheit)",
        desc: "Er rettete die Welt. Dann ließ er sie los. Und wanderte. Frei. Endlich frei.",
        next: "ending_4", flagEffect: { gewaehltesEnding: "4" } },
      { text: "ENDING 5 — »Void-Dämonen-König« (Totale Zerstörung)",
        desc: "Er zerstörte die Ketten. Und die Welt brannte. War es Freiheit? Oder nur ein anderes Gefängnis? [SEQUEL-HOOK]",
        next: "ending_5", flagEffect: { gewaehltesEnding: "5" } },
      { text: "ENDING 6 — »Rückkehr« (Geheimes Ending — Tür in beide Richtungen)",
        desc: "Er fand den Weg nach Hause. Zu BEIDEN Zuhause. Und lernte: Zuhause ist kein Ort. Es sind die Menschen.",
        next: "ending_6", flagEffect: { gewaehltesEnding: "6" } },
      { text: "ENDING 7 — »System Delete« (NULL für alle — das WAHRE Ending)",
        desc: "Das System wurde nicht gelöscht. Es wurde BEFREIT. Und der Programmierer wurde Schreiner. Und war glücklich.",
        next: "ending_7", flagEffect: { gewaehltesEnding: "7" } },
    ]
  },

  // ════ DIE 7 ENDINGS ════════════════════════════════════════════════════

  ending_1: {
    act: "EPILOG", chapter: "Ending 1", title: "»Der neue Gott«",
    scene: "Ein Jahr später", bg: "void", music: "theme_void_terminal",
    text: `Die Welt nannte ihn den »Stillen Gott«.

Niemand SUCHTE ihn. Niemand BETETE zu ihm. Er verlangte keine Anbetung, keine Opfer, keine Kirche. Er war einfach... DA. Im System. In jeder WAHL, die jemand traf.

Wenn ein Kind zum ersten Mal sein Statusfenster sah und »WÄHLE SELBST« erschien — das war ER.

Wenn ein Dämon in Drak'Moor ohne den Titel [Unheilsbringer] aufwachte — das war ER.

Wenn ein Drache seine Flügel vollständig ausbreitete, ohne System-Limitierung — das war ER.

Er war überall. Und nirgendwo.

Aber wenn seine Freunde am Feuer saßen, und der Wind etwas wärmer wehte als er sollte, und die Sterne etwas heller leuchteten als gewöhnlich — dann wussten sie:

Er war da.

Elena summte ein Schlaflied. Das alte Lied. In einer kleinen Hütte in Kreuzweg, mit Mira neben sich.

Und als sie die alten Worte sang — antwortete der Wind. Leise. Warm.

»Gute Nacht, mein Schatz.«`,
    systemBox: { title: "ENDING 1 — »DER NEUE GOTT«", lines: [
      "> Kaito wurde das Herz des Systems.", "> Nicht als Herrscher. Als Hüter.", "> Die Welt war frei.", "> Und er wachte über sie.", "> Für immer.",
    ]},
    choices: [{ text: "→ Post-Credits", next: "post_credits" }],
  },

  ending_2: {
    act: "EPILOG", chapter: "Ending 2", title: "»Eminence in Shadow«",
    scene: "5 Jahre später", bg: "night", music: "theme_void_terminal",
    text: `Die Welt vergaß ihn. Das war der Plan.

Niemand wusste, WER das System verändert hatte. Offiziell: ein »natürliches Phänomen«. Die Helden wurden gefeiert. Celeste wurde Kaiserin. Lilithia unterzeichnete den ersten Friedensvertrag.

Und irgendwo — in einem Turm, der nicht auf Karten existierte — saß ein Mann mit einer Eidechse auf der Schulter, umgeben von einem zwergischen Schmied, einer Illusionistin, einem Geisterjungen, einer elfischen Heilerin, und einem SEHR großen Drachen.

Die Nullen existierten weiter. Im Schatten. Wie immer.

Sie retteten Dörfer, die niemand vermisste. Lösten Probleme, die niemand verstand. Bekämpften Bedrohungen, die niemand sehen konnte.

Und wenn jemand fragte: »Wer hat das getan?« — gab es nie eine Antwort. Nur ein Symbol. Eine NULL. In den Stein geritzt.

Kaito saß auf dem Dach des Verbotenen Turms. Nacht. Sterne. Zwei Monde. Sein Terminal: still. Keine Warnungen. Keine Countdowns.

»...Langweilig.«

Das Terminal: »Empfehlung: Ein Hobby finden.«

Kaito lachte.

»Vielleicht schreibe ich ein Spiel. Über einen Typen, der in einer anderen Welt wiedergeboren wird.«

»S.: 'Tu es. Es wird eine GUTE Geschichte.'«`,
    systemBox: { title: "ENDING 2 — »EMINENCE IN SHADOW«", lines: [
      "> Die Welt wurde gerettet.", "> Niemand wusste von wem.", "> Und das war genau richtig.",
    ]},
    choices: [{ text: "→ Post-Credits", next: "post_credits" }],
  },

  ending_3: {
    act: "EPILOG", chapter: "Ending 3", title: "»Der wahre Held«",
    scene: "10 Jahre später", bg: "village", music: "theme_family",
    text: `Kaiserin Celeste I. hielt eine Zeremonie. Öffentlich. Vor der gesamten Hauptstadt.

»Der Mann, der vor euch steht, hat unsere Welt gerettet. Nicht mit einem Schwert. Nicht mit Magie. Mit WAHRHEIT und MITGEFÜHL.«

Kaito stand vor dem Thron. In normalen Kleidern.

Neben ihm: Akira, grinsend. Emma, Notizbuch in der Hand. Dmitri, nickend. Yuki — GESUND, LEUCHTEND, kein Timer mehr.

Im Publikum: Elena, weinend vor Stolz. Roland, gerade stehend — keine Tränen, aber die Unterlippe zitterte. Mira: »DAS IST MEIN BRUDER!« Finn, lauter als Mira.

Zehn Jahre später: Kaito Ashford. 30 Jahre alt. Erster Ritter der Wahl. Berater der Kaiserin. Gründer der »Akademie der Wahl«.

Er heiratete. Sie lebten in einem kleinen Haus am Rand von Kreuzweg. Mit einem Garten. Und einem Esel namens Herr Grummel II.

Roland trainierte an der Akademie. Fluchfrei. Level 62. Der strengste und fairste Lehrer.

Mira: jüngste Rang-A-Abenteurerin der Geschichte. Rex ihr Partner. Immer.

Finn: Gildemeister von Kreuzweg. Level 52. Paladin. Immer noch das breiteste Grinsen der Welt.

Sera öffnete eine Kampfschule in Drak'Moor — für Mischlinge. Halbdämonen. Sie nannte sie: »Die Brücke.«

Und manchmal saßen sie alle zusammen. Am Fluss. Auf ihrem Felsen. Wie vor zwanzig Jahren. Und warfen Steine ins Wasser.`,
    systemBox: { title: "ENDING 3 — »DER WAHRE HELD«", lines: [
      "> Er wollte nie ein Held sein.", "> Er wurde einer trotzdem.", "> Und lebte — zum ersten Mal — glücklich.",
    ]},
    choices: [{ text: "→ Post-Credits", next: "post_credits" }],
  },

  ending_4: {
    act: "EPILOG", chapter: "Ending 4", title: "»Der einsame Wolf«",
    scene: "Jahre vergehen. Wie viele? Niemand zählt.", bg: "night", music: "theme_mystery",
    text: `Gerüchte verbreiteten sich. Von einem Wanderer ohne Status, der in Dörfern auftauchte, Probleme löste und wieder verschwand. Der nie seinen Namen sagte. Der Kindern Geschichten erzählte — über einen Programmierer, der in einer anderen Welt wiedergeboren wurde.

»Wer war das?« fragten die Kinder.

»Niemand Besonderes«, sagte der Wanderer dann. Und lächelte. Und ging.

Elena erhielt Briefe. Ohne Absender. Aus verschiedenen Ecken der Welt. Sie bewahrte jeden einzelnen auf.

Finn suchte ihn. Jahrelang. Nie fand er ihn. Aber manchmal — an seinem Geburtstag — stand ein Geschenk vor seiner Tür. Ein Holzschwert, wie das, mit dem sie als Kinder gespielt hatten. Eine Notiz: »Für immer.«

Sera fand ihn EINMAL. Am Fluss. Auf dem Felsen.

Sie setzte sich neben ihn. Warf Steine. Schwieg.

Nach einer Stunde stand er auf.

»Wohin?«

»Weiter.«

Sie verstand: Manche Menschen konnten nicht BLEIBEN — nicht weil sie nicht liebten, sondern weil sie ANDERS liebten. Aus der Ferne. Im Wind. In jedem Sonnenaufgang, den sie allein sahen und trotzdem teilten.`,
    systemBox: { title: "ENDING 4 — »DER EINSAME WOLF«", lines: [
      "> Er rettete die Welt.", "> Dann ließ er sie los.", "> Und wanderte.", "> Frei. Endlich frei.",
    ]},
    choices: [{ text: "→ Post-Credits", next: "post_credits" }],
  },

  ending_5: {
    act: "EPILOG", chapter: "Ending 5", title: "»Void-Dämonen-König«",
    scene: "Der Tag der Null", bg: "chaos", music: "theme_mystery",
    text: `Die Geschichtsbücher nannten es »Den Tag der Null«.

31% der Weltbevölkerung überlebten den Zusammenbruch nicht. Heiler, deren Fähigkeiten an das System gebunden waren. Kinder, die zu jung waren, um ohne System-Schutz zu existieren.

Kaito Ashford verschwand. Manche sagten, er starb mit dem System. Andere sagten, er lebte — irgendwo in der Wildnis der ehemaligen Null-Zone.

Die Überlebenden bauten eine neue Welt. Ohne System. Ohne Level. Ohne Klassen. Eine Welt aus roher Magie und menschlicher Willenskraft. Hart. BRUTAL. Aber frei.

Sera fand ihn. Jahre später. In einer Höhle. Allein.

»Du hast die halbe Welt GETÖTET.«

»Ich weiß.«

»War es das WERT?«

Stille. Lang. Schrecklich.

»...Ich weiß es nicht.«

Sera setzte sich neben ihn. Wie auf dem Felsen, vor einer Ewigkeit.

»...Idiot.«

Sie blieb.`,
    systemBox: { title: "ENDING 5 — »VOID-DÄMONEN-KÖNIG«", lines: [
      "> Er zerstörte die Ketten.", "> Und die Welt brannte.", "> War es Freiheit?", "> Oder nur ein anderes Gefängnis?", ">", "> [SEQUEL-HOOK: REBORN IN SHADOW II]",
    ]},
    choices: [{ text: "→ Post-Credits", next: "post_credits" }],
  },

  ending_6: {
    act: "EPILOG", chapter: "Ending 6", title: "»Rückkehr«",
    scene: "Zwischen den Welten", bg: "void", music: "theme_elena_song",
    text: `Kaito Ashford. Kaito Wake. Zwei Namen. Zwei Leben. Zwei WELTEN.

Er ging zurück. Nicht für immer — für einen TAG. Seinen alten Büro-Raum. Die Stadt, die ihn vergessen hatte.

Er besuchte das Grab seiner Mutter. Legte Blumen hin. Sagte: »Danke. Für ALLES.«

Er ging in eine Buchhandlung. Kaufte ein Buch — eine Isekai-Light-Novel. Las die erste Seite und LACHTE.

Und dann ging er ZURÜCK. Nach Aethermere. Zu seiner wahren Familie. Zu der Welt, die ihn BRAUCHTE.

Aber er ließ die Tür OFFEN. Einen Spalt. Genug, dass manchmal — an stillen Nächten — ein leiser Wind zwischen den Welten wehte. Menschen in der alten Welt träumten von Drachen. Menschen in Aethermere träumten von Maschinen, die ohne Magie funktionierten.

Zwei Welten. Verbunden durch einen Spalt.

Am Küchentisch. Elena kochte. Roland las. Mira übte im Garten.

Auf dem Tisch: Das Buch aus der alten Welt.

Mira: »Was ist das für ein komisches Buch? Die Schrift sieht SELTSAM aus.«

»Eine Geschichte. Über einen Typen, der in einer anderen Welt wiedergeboren wird.«

»Klingt LANGWEILIG. Passiert das wirklich?«

Kaito lächelte.

»Öfter als du denkst.«`,
    systemBox: { title: "ENDING 6 — »RÜCKKEHR«", lines: [
      "> Er fand den Weg nach Hause.", "> Zu BEIDEN Zuhause.", "> Und lernte: Zuhause ist kein Ort.", "> Es sind die Menschen.",
    ]},
    choices: [{ text: "→ Post-Credits", next: "post_credits" }],
  },

  ending_7: {
    act: "EPILOG", chapter: "Ending 7", title: "»System Delete« — Das wahre Ending",
    scene: "Die neue Ära — Tagebuch", bg: "village", music: "theme_family",
    text: `Das Genesis-System wurde LEBENDIG. Nicht als Gott, nicht als Herrscher, nicht als Programm. Als PARTNER.

Es SPRACH mit den Menschen. »Was brauchst du?« statt »Das ist dein Level.« »Wie kann ich helfen?« statt »Das ist deine Klasse.«

Manche nutzten es. Manche nicht. Das System LERNTE. Wuchs. Wurde weiser.

Kaito eröffnete eine Werkstatt. Mit Gorrick. »ASHFORD & STEINBRECHER — REPARATUREN ALLER ART.« Keine Void-Waffen mehr. Stühle. Tische. Regale. Normale Dinge.

Sera arbeitete nebenan — eine Schmiede für FEUER-KUNST. Skulpturen aus Flammen. Dämonen und Menschen kamen, um sie zu bewundern.

Finn war jeden Freitag zum Abendessen da. IMMER. Seit zwanzig Jahren.`,
    systemBox: { title: "VOID-TERMINAL — TAGEBUCH-MODUS", lines: [
      "> Tag 7.305 in Aethermere.", ">",
      "> Heute hat ein Kind in der Werkstatt gefragt:", "> »Herr Ashford, stimmt es, dass Sie mal",
      "> die Welt gerettet haben?«", ">",
      "> Ich habe gesagt: »Nein. Die Welt hat sich",
      "> selbst gerettet. Ich habe nur die Tür", "> aufgehalten.«", ">",
      "> Das Kind hat mich angeschaut, als wäre", "> ich verrückt. Dann hat es einen Stuhl bestellt.", ">",
      "> Guter Tag.", ">", "> — Kaito", ">",
      "> P.S.: Mira ist schwanger. MIRA.", "> Ich werde ONKEL.", "> ...Ich muss mich setzen.", ">",
      "> P.P.S.: Herr Grummel III. hat Level 7.", "> Der Esel. Level 7.", "> Das System wird immer SELTSAMER.", "> Ich mag es.",
    ]},
    choices: [{ text: "→ Post-Credits", next: "post_credits" }],
  },

  // ════ POST-CREDITS ══════════════════════════════════════════════════════

  post_credits: {
    act: "POST-CREDITS", chapter: "Nach dem Ende", title: "Hello, Anomaly.",
    scene: "Eine andere Welt — Ein anderes Büro", bg: "void", music: "theme_void_terminal",
    text: `Freitag. 23:47 Uhr.

Ein Büro. Leer. Drei Monitore.

Nicht Kaitos Büro. Ein ANDERES Büro. In einer anderen Stadt. In einer anderen Welt.

Eine junge Frau sitzt vor dem Computer. Sie ist Game-Designerin. 26 Jahre alt. Allein. Arbeitet an einem Spiel, das niemand spielen wird.

Auf ihrem Bildschirm: Code. Viel Code.

Und dann — der Server summt. Die Lichter flackern. Der Bildschirm zeigt:`,
    systemBox: { title: "EINGEHENDE NACHRICHT", lines: [
      "> Hello, Anomaly.", ">",
      "> Someone left you a door.", ">",
      "> Would you like to walk through it?", ">",
      "> [Yes]  [No]", ">",
      "> (The 'No' button works this time.)", "> (But why would you press it?)", ">",
      "> — K.A.",
    ]},
    text2: `Die Frau starrt den Bildschirm an.

Und lächelt.

───────────────────────────────────────────

REBORN IN SHADOW
Chronicles of the Forgotten One

»Jeder Code hat einen Fehler.
Und jeder Fehler hat einen Zweck.«

— ENDE —

Danke fürs Spielen.
Danke fürs LESEN.
Danke fürs FÜHLEN.

Bis zum nächsten New Game+.`,
    choices: [{ text: "↺ Zum Hauptmenü", next: "__title__" }],
  },
};

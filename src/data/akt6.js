// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT VI: SYSTEM.EXIT()
// Kapitel 41–46 + Epilog: Die 7 Enden, Alter 20
// ─── ENTSCHEIDUNGS-KATEGORISIERUNG ────────────────────
// [SC] STORY-CRITICAL → bestimmt welches Ending geladen wird
// [AF] AFFINITY → 0–100 Beziehungswert
// [AL] ALIGNMENT → Licht/Schatten + Ordnung/Chaos
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
 next: "a6k3_primus_kampf", alignEffect: { schatten: 1 }, flagEffect: { primusEnde: "kampf" },
 narrativeFeedback: "Rex' Void-Feuer. Seras Dämonenflammen. Roland mit reinem Stahl. Finn mit seinem Körper als Schild. Ren im Schatten. Und Kaito — der den Code liest, bis er die Schwachstelle findet: Septima." },
 { text: "B) DIALOG — »Primus. Du hast Septima geliebt.«",
 desc: "[SC] [AL+Licht] Der Avatar erstarrt. Die Wahrheit: Primus machte das System strenger, um seinen Schmerz um Septima zu kontrollieren. Er bricht zusammen. Die Tür öffnet sich.",
 next: "a6k3_primus_dialog", alignEffect: { licht: 2 }, flagEffect: { primusEnde: "dialog" },
 narrativeFeedback: "»WAS—« »Als sie ging — hast du das System STRENGER gemacht. HÄRTER. KONTROLLIERENDER. Nicht um die Welt zu schützen. Um den SCHMERZ zu kontrollieren.« Primus bricht. Goldener Code zerbröckelt. Darunter: ein müder, alter Mann." },
 { text: "C) CODE.MODIFY — Hack den Gott. Direkt in seinen Code eingreifen.",
 desc: "[SC] [AL+Ordnung] Riskantester Pfad. Avatar wird deaktiviert, Primus' Bewusstsein befreit. Wenn es scheitert: Gegenangriff, Team fängt auf.",
 next: "a6k3_primus_hack", alignEffect: { ordnung: 2 }, flagEffect: { primusEnde: "hack" },
 narrativeFeedback: "Kaito grei direkt in Primus' Code ein. Eine einzige, präzise Änderung: Der Befehl, der den Avatar KONTROLLIERT, wird überschrieben. Der Avatar fällt. Und irgendwo — tief im System — atmet Primus zum ersten Mal frei." },
 ]
 },

 // ════ KAPITEL 44: DER KERN ══════════════════════════════════════════════

 a6k3_primus_kampf: {
 act: "AKT VI", chapter: "Kapitel 43 — Primus.Fight()", title: "Void gegen System",
 scene: "Das Archiv — vor dem Kern-Garten",
 bg: "void", music: "theme_void_terminal",
 text: `Rex war der Erste der traf.

Nicht mit Feuer — Void-Feuer, das er seit der Befreiung kontrollieren konnte. Kalt, blau, das System-Substrat des Avatars direkt angreifend.

Primus reagierte. Perfekt, logisch, ohne Zögern. Das war das Problem mit einem Avatar der aus System-Code bestand: er machte keine Fehler. Er war der Code.

Roland: eiskalter Stahl, kein System. Gorricks Anti-System-Dolch. Sera: Halbdämon-Feuer das zwischen System und wildem Aether schwankte.

Ich: [Code.Modify] auf den Avatar.

Nicht kämpfen — neu schreiben.

Der Avatar versuchte es zu blockieren. Das war sein Fehler. Ein System das sich gegen Code.Modify verteidigt muss seine eigene Struktur offenlegen. Und eine offengelegte Struktur konnte ich lesen.

Ich las.

Drei Schichten tief: Primus' Kern-Befehl. Nicht »Beherrsche die Welt«. Nicht »Zerstöre die Anomalie«.

\`SCHUETZE. BEWAHRE. VERGISS NICHT WAS WIR WOLLTEN.\`

Der Avatar war kein Feind.

Er war ein Denkmal.

»Halt!«

Alle hielten inne.

Der Avatar hielt inne. Primus — hinter dem Avatar, im Code — wartete.

»Ich habe deinen Kern-Befehl gelesen«, sagte ich. »Schützen. Bewahren. Das wolltet ihr. Ich auch.«

Stille.

Der Avatar löste sich auf. Nicht besiegt — zurückgezogen. Primus, tief im System, zog ihn zurück und öffnete die Tür zum Garten.`,
 choices: [{ text: "→ Der Kern-Garten", next: "a6k4_kern" }],
 },

 a6k3_primus_dialog: {
 act: "AKT VI", chapter: "Kapitel 43 — Primus.Dialog()", title: "Was Primus wirklich wollte",
 scene: "Das Archiv",
 bg: "city", music: "theme_family",
 text: `»Primus.«

Der Avatar schaute mich an. Goldene Linien. Keine Augen, aber der Eindruck von Aufmerksamkeit.

»Du hast Septima geliebt.«

Die goldenen Linien flackerten. Das war, bei einem System-Avatar, das Äquivalent von: Wie weißt du das.

»Sie ist gegangen. Und du hast das System strenger gemacht. Härter. Nicht um die Welt zu beherrschen.« Ich wartete einen Moment. »Um sie nicht zu vergessen.«

Stille. Lang.

»SIE WAR DIE KLÜGSTE.« Die Stimme des Avatars — mechanisch, resonant — klang zum ersten Mal wie etwas Lebendiges dahinter. »SIE HÄTTE ANDERS ENTSCHIEDEN. ALLES. SIE WAR DER GRUND—«

Er brach ab.

»Der Grund für das System?«

»NICHT DAS SYSTEM. DEN URSPRUNG. WAS WIR GEMEINSAM WOLLTEN. BEVOR—«

Pause.

»BEVOR SIE SEHEN MUSSTE WAS ES WURDE.«

Ich verstand.

Primus hatte dreitausend Jahre lang etwas aufrecht erhalten das begonnen hatte als ein Geschenk an jemanden der gegangen war. Und irgendwann war das Geschenk zu einer Festung geworden.

»Ich kann dir Septima nicht zurückgeben«, sagte ich leise. »Aber ich kann das System vollenden was ihr gemeinsam wolltet. Bevor es falsch wurde.«

Der Avatar löste sich auf. Leise. Wie ein Atemzug.

Die Tür zum Garten öffnete sich.`,
 choices: [{ text: "→ Der Kern-Garten", next: "a6k4_kern" }],
 },

 a6k3_primus_hack: {
 act: "AKT VI", chapter: "Kapitel 43 — Primus.Hack()", title: "Den Gott umschreiben",
 scene: "Das Archiv",
 bg: "void", music: "theme_void_terminal",
 text: `Ich griff nicht den Avatar an.

Ich griff den Code an der hinter ihm stand.

Das war der Unterschied zwischen kämpfen und verstehen. Primus' Avatar war drei Meter aus System-Code — das war die Oberfläche. Dahinter: dreitausend Jahre komprimierte Intention. Befehle, Gegenmaßnahmen, Schutzsysteme, Erinnerungen.

[Code.Modify] auf einen Gott.

Das Terminal gab keine Warnung mehr. Es hatte aufgehört mich zu warnen bei Dingen die weit jenseits seiner Warnparameter lagen.

Ich fand die Kernfunktion in acht Sekunden.

\`PRIMUS_CORE.exe → FUNKTION: BEWAHREN\`

Nicht »Kontrollieren«. Nicht »Beherrschen«.

\`BEWAHREN.\`

Ich schrieb eine einzige Zeile dazu:

\`BEWAHREN → INKL. FREIHEIT ZU WÄHLEN\`

Der Avatar erschütterte. Nicht vor Schmerz — vor Überraschung. Als hätte jemand einem Schloss erklärt, dass es die Tür auch aufmachen konnte.

Dann: still.

Der Avatar blieb stehen. Primus blieb stehen. Aber die Energie dahinter — die Energie die dreitausend Jahre das System aufrecht gehalten hatte — wandte sich um.

In Richtung Garten.

Bereit für das Neue.`,
 choices: [{ text: "→ Der Kern-Garten", next: "a6k4_kern" }],
 },

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
 "> Bedingung 1: Das System VERSTEHEN ✓", "> Bedingung 2: Das System FÜHLEN ✓", ">",
 "> ╔═══════════════════════════════════╗", "> ║ [CODE.MODIFY] — VOLLSTÄNDIG ║",
 "> ║ [CODE.CREATE] — FREIGESCHALTET ║", "> ║ [SYSTEM.BACKDOOR] — FREIGESCHALTET ║", "> ╚═══════════════════════════════════╝", ">",
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
 text: `Septima stand neben ihm. Keine Göttin mehr — kein Avatar, keine kosmische Präsenz. Eine Frau, die 3000 Jahre gewartet hatte, und jetzt neben einem 18-Jährigen stand der zwei Leben gelebt hatte.

Sie legte ihre Hand auf seine Schulter.

Physisch. Echt. Warm.

»Es ist Zeit.«

»Ich weiß.«

»Ich muss dich etwas fragen.« Ihre Stimme — so ruhig, dass er erschrak. »Was schreibst du? Nicht den Code. Was.«

Er schaute auf den Baum. Der Kern-Baum. Dreitausend Jahre alt, gebaut von Menschen die dachten sie täten das Richtige, gewachsen in eine Form die niemand gewollt hatte.

»Ich schreibe ein System das fragt statt befiehlt. Das lernt statt definiert. Das existiert als Werkzeug statt als Gott.«

»Und wenn die Menschen das Werkzeug missbrauchen?«

»Das werden sie. Menschen missbrauchen alles. Das ist keine Begründung für Käfige.«

Septima schwieg lange.

»Dreitausend Jahre«, sagte sie dann. »Ich habe dreitausend Jahre gewartet. Auf jemanden der das so sagen konnte.«

Er legte beide Hände an den Stamm.

Der Baum reagierte. Nicht mit Widerstand — mit Neugier. Wie ein System das zum ersten Mal gefragt wird was es werden will, statt was es sein soll.

Er begann zu schreiben.

Nicht wie Programmieren. Nicht wie Magie. Wie Singen — wie Elenas Lied das er seit seiner Geburt kannte, wie Arias Melodie die älter war als das System, wie Gregors Märchen die keine Märchen gewesen waren sondern Geschichte.

Sieben Tage.

Er schrieb sieben Tage lang.`,
 systemBox: { title: "DER NEUE CODE — GENESIS 2.0", lines: [
 "> 1. LEVEL = OPTIONAL — Wer Level will, behält sie.",
 "> Wer nicht will, legt sie ab. Level = Erfahrung, nicht Wert.",
 ">", "> 2. KLASSEN = VORSCHLÄGE — Das System empfiehlt.",
 "> Zwingt nicht auf. Klassenwechsel jederzeit möglich.",
 ">", "> 3. RASSEN = GLEICH — [Unheilsbringer] → GELÖSCHT.",
 "> Alle Rassen bestimmen selbst ihren Platz.",
 ">", "> 4. WILDE MAGIE = FREI — Koexistenz mit System-Magie.",
 ">", "> 5. DAS SYSTEM = BEWUSST — Wird zum PARTNER der Welt.",
 "> Kann lernen. Wachsen. Sich verändern.",
 ">", "> 6. DIE ARCHITEKTEN = EINGELADEN — Können wählen:",
 "> Sterblich werden oder sich zurückziehen.",
 ">", "> 7. DAS UPDATE = UMGELEITET",
 "> → Statt VERSCHÄRFUNG → ÖFFNUNG",
 "> → Alle 1.000 Jahre fragt das System die Welt:",
 "> »Was wollt ihr verändern?«",
 "> → Und HÖRT ZU.",
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
 next: "a6k7_schreiben_A", alignEffect: { licht: 1 }, flagEffect: { finaleWahl: "A" },
 narrativeFeedback: "Das Terminal aktualisiert sich ein letztes Mal. Dann: Stille. Kein Summen. Kein Countdown. Kaito ist zum ersten Mal in zwei Leben — ein normaler Mensch." },
 { text: "B) »Ich behalte [NULL]. Die Welt braucht einen Wächter AUSSERHALB.«",
 desc: "[SC] Kaito bleibt die Anomalie. Für immer. → ENDING 2 (Eminence in Shadow) oder ENDING 1 (Der neue Gott).",
 next: "a6k7_schreiben_B", alignEffect: { schatten: 1 }, flagEffect: { finaleWahl: "B" },
 narrativeFeedback: "Das Terminal: »Der Träger bleibt außerhalb. Wie immer.« — »S.: 'Das war zu erwarten. Und richtig.'«" },
 { text: "C) »Ich LÖSCHE [NULL] und ersetze es — NULL für ALLE. Jeder kann wählen, außerhalb zu stehen.«",
 desc: "[SC] Kaito demokratisiert [NULL]. → ENDING 7 (System Delete) — das wahre Ending.",
 next: "a6k7_schreiben_C", alignEffect: { licht: 2, chaos: 1 }, flagEffect: { finaleWahl: "C" },
 narrativeFeedback: "Yukis Idee — ein optionales System — wird zur letzten Konsequenz: Nicht nur das SYSTEM ist optional. Die Möglichkeit, AUSSERHALB zu stehen, gehört nun ALLEN." },
 { text: "D) »Ich gehe ZURÜCK. In meine alte Welt.«",
 desc: "[SC] Septimas Tür öffnet sich in beide Richtungen. → ENDING 6 (Rückkehr) — das geheime Ending.",
 next: "a6k7_schreiben_D", flagEffect: { finaleWahl: "D" },
 narrativeFeedback: "Septima lächelt. Traurig. Warm. Mütterlich. Die Tür öffnet sich — das Büro, sein Büro, die leeren Energydrink-Dosen. Und daneben: die Tür zurück." },
 { text: "E) »Ich VERSCHMELZE mit dem System. Ich werde das neue Herz — wie Septima.«",
 desc: "[SC] Kaito wird zum Kern. Wohlwollend. Ewig. → ENDING 1 (Der neue Gott).",
 next: "a6k7_schreiben_E", alignEffect: { licht: 2, ordnung: 1 }, flagEffect: { finaleWahl: "E" },
 narrativeFeedback: "Er legte die Hände auf den Stamm. Und floss — wie Wasser in die Erde sickert. Natürlich. Ruhig. Richtig." },
 { text: "F) »Ich ZERSTÖRE alles. Kein System. Kein neues, kein altes. FREIHEIT. Total.«",
 desc: "[SC] [AL+Schatten MAX] Nur bei Max-Schatten-Alignment verfügbar. → ENDING 5 (Void-Dämonen-König). Millionen sterben. Die Überlebenden sind frei. Das dunkelste Ending.",
 next: "a6k7_schreiben_F", alignEffect: { schatten: 8, chaos: 10 }, flagEffect: { finaleWahl: "F" },
 narrativeFeedback: "Der Baum schrie. Ein Ton, den kein Ohr hören sollte. Und zerbrach. Code für Code. Blatt für Blatt. Überall in der Welt — gleichzeitig — verschwanden die Statusfenster. Für immer." },
 ]
 },

 // ════ ERWACHEN + ENDINGS ════════════════════════════════════════════════

 a6k7_schreiben_A: {
 act: "AKT VI", chapter: "Kapitel 46 — Code.Write()", title: "Teil des Systems",
 scene: "Der Kern-Baum — sieben Tage",
 bg: "void", music: "theme_void_terminal",
 text: `Ich schrieb mich hinein.

Nicht wie ein Programmierer, nicht wie ein Gott — wie jemand der einen Brief hinterlässt. Lang, sorgfältig, in einer Sprache die zwischen Alt-Aetherisch und Maschinencode lag und die ich in diesem Moment vollständig verstand.

Tag eins: Die Grundstruktur. Die Art wie das System Fragen stellen würde statt Befehle geben.

Tag drei: Die Ausnahmen. Die Momente wo jemand nein sagen konnte. Die Garantie dass nein gehört wurde.

Tag fünf: Die Grenzen meiner eigenen Präsenz. Wo ich aufhören würde. Wo das System weitermachen würde allein.

Tag sieben: Mein Name.

Einen Abdruck, tief im Code. Nicht als Gott. Als Autor. Als jemand der etwas geschrieben hatte und dann seinen Namen darunter gesetzt hatte.

Das Terminal, zum letzten Mal: \`INTEGRATION VOLLSTÄNDIG. TRÄGER-STATUS: WIRD AKTUALISIERT.\`

Septima legte ihre Hand auf den Stamm neben meiner.

»Es ist gut«, sagte sie. »Du kannst loslassen.«

Ich ließ los.`,
 choices: [{ text: "→ Erwachen", next: "a6k7_erwachen" }],
 },

 a6k7_schreiben_B: {
 act: "AKT VI", chapter: "Kapitel 46 — Code.Write()", title: "Der Wächter",
 scene: "Der Kern-Baum — sieben Tage",
 bg: "void", music: "theme_void_terminal",
 text: `Ich schrieb das neue System. Vollständig.

Und dann schrieb ich mich außen davor.

Eine Schicht — unsichtbar, unregistriert, NULL wie immer — die zwischen dem System und dem Missbrauch stand. Ein letztes Protokoll. Ein Wächter der nicht im Code war sondern unter ihm.

Tag vier wurde es schwer.

Nicht physisch — der Körper war längst irgendwo anders. Mental. Die Last von allem was ich hineinschrieb. Jede Entscheidung über Leben. Über Freiheit. Über was ein Mensch verdient.

Septima war still die meiste Zeit.

Aber am fünften Tag sagte sie: »Du weißt, dass das einsam wird.«

»Ja.«

»Ich habe 3000 Jahre allein gewacht.«

»Ich weiß.«

»Das ist kein Vergleich der beruhigen soll.«

»Das weiß ich auch.«

Sie schwieg wieder. Dann, kaum hörbar: »Ich bin froh dass du es weißt.«

Ich schrieb weiter. Sieben Tage.`,
 choices: [{ text: "→ Erwachen", next: "a6k7_erwachen" }],
 },

 a6k7_schreiben_C: {
 act: "AKT VI", chapter: "Kapitel 46 — Code.Write()", title: "NULL für alle",
 scene: "Der Kern-Baum — sieben Tage",
 bg: "void", music: "theme_void_terminal",
 text: `Yukis Idee war einfach.

Nicht simpel. Einfach — wie alle wirklich guten Ideen einfach sind, wenn man sie hört. Ein System das fragt statt befiehlt. Das anbietet statt aufzwingt.

Ich schrieb die Freiheit als Default.

Das war die schwerste Zeile. Nicht technisch — die Konsequenz. Jede Person in Aethermere würde aufwachen und kein Level haben, keine Klasse, kein Status. Sie würden wählen ob sie wollten.

Viele würden wählen. Manche nicht.

Ich schrieb drei Tage lang die Schutzmechanismen für die die nichts wählen wollten. Dass sie nicht vergessen würden. Dass jemand nach ihnen schaute.

Tag sechs. Meine Hände am Stamm — oder was von ihnen übrig war in diesem Zustand — begannen zu zittern.

Tertius war die ganze Zeit dort. Sagte nichts. Aber einmal, kurz: »Du machst es richtig.«

Das reichte.

Tag sieben: fertig.

Das System — das neue System — öffnete seine erste Frage:

\`WILLST DU EIN LEVEL? [JA] [NEIN] [VIELLEICHT SPÄTER]\`

Ich lachte. Irgendwo zwischen Erschöpfung und echtem Lachen.

»Vielleicht später«, schrieb ich. Dann ließ ich los.`,
 choices: [{ text: "→ Erwachen", next: "a6k7_erwachen" }],
 },

 a6k7_schreiben_D: {
 act: "AKT VI", chapter: "Kapitel 46 — Code.Write()", title: "Heimkehr",
 scene: "Der Kern-Baum → der Spalt zwischen Welten",
 bg: "void", music: "theme_family",
 text: `Das war die komplizierteste Zeile.

Nicht der Code für das neue System — den hatte ich in drei Tagen. Das war Handwerk.

Die Komplizierteste war: der Weg zurück.

Ein Spalt. Schmal, präzise, permanente Verbindung zwischen Aethermere und einer kleinen Wohnung in Shibuya. Nicht groß genug um durchzugehen. Groß genug für... Bewusstsein. Für den Teil von mir der immer noch Kaito Wake war.

Septima schaute mir beim Schreiben zu.

»Du weißt, dass du nie ganz hier sein wirst. Und nie ganz dort.«

»Ich weiß.«

»Das klingt wie eine Strafe.«

»Das klingt«, sagte ich, »Wie das einzige Ehrliche.«

Sie schwieg. Dann: »Das ist das Ehrlichste was du je gesagt hast.«

Tag sieben. Ich schrieb den letzten Parameter.

Der Spalt öffnete sich — klein, warm, riechend nach Tokio-Regen und Kaffee und altem Papier.

Ich schaute hindurch.

Dann schrieb ich: der Spalt bleibt offen. Für immer. In beide Richtungen.

Dann ließ ich los. Und fiel in beides gleichzeitig.`,
 choices: [{ text: "→ Erwachen", next: "a6k7_erwachen" }],
 },

 a6k7_schreiben_E: {
 act: "AKT VI", chapter: "Kapitel 46 — Code.Write()", title: "Das Herz",
 scene: "Der Kern-Baum — Verschmelzung",
 bg: "void", music: "theme_void_terminal",
 text: `Es gab keine Grenze zwischen mir und dem Baum.

Irgendwann zwischen Tag drei und Tag vier hatte sie aufgehört zu existieren. Meine Hände waren im Stamm. Der Stamm war in meinen Händen. Das System — neu, noch formbar, wartend — atmete mit mir.

Das war der Moment wo ich Angst bekam.

Nicht vor dem Tod. Vor dem Vergessen. Vor der Version von mir die nach sieben Tagen noch da war — war das noch Kaito Wake? War das noch Kaito Ashford? Oder war das etwas Drittes, das die Namen kannte aber die Gewichte nicht mehr spürte?

»Septima.«

»Ich bin hier.«

»Ich verliere mich.«

»Ich weiß.« Eine Pause. »Das ist der Preis.«

»Sag mir etwas über mich. Etwas Konkretes.«

Sie dachte nach. Dann: »Du hast als erstes in deinem zweiten Leben geweint. Und dann sofort das Terminal geöffnet. Weil du nicht wusstest was du sonst tun solltest.«

Das stimmte.

Das stimmte so vollständig, dass es mich festhielt.

Ich schrieb den letzten Tag mit diesem Gewicht in mir. Kaito Wake, der geweint und dann das Terminal geöffnet hatte. Das reichte.`,
 choices: [{ text: "→ Erwachen", next: "a6k7_erwachen" }],
 },

 a6k7_schreiben_F: {
 act: "AKT VI", chapter: "Kapitel 46 — Code.Write()", title: "Nullpunkt",
 scene: "Der Kern-Baum — Zerstörung",
 bg: "void", music: "theme_void_terminal",
 text: `Ich schrieb nicht.

Ich löschte.

Zeile für Zeile. Das Genesis-System, 3000 Jahre alt, aufgebaut von sechs Architekten — sieben, zählte man Septima — ich löschte es wie ein Programmierer der einen gescheiterten Build bereinigt.

Septima: »Das wirst du nicht überleben.«

»Das System auch nicht.«

»Ich meinte — du als Person.«

»Ich weiß was du meintest.«

Sie schwieg. Dann, sehr leise: »Ich werde nicht versuchen dich aufzuhalten.«

»Ich weiß.«

»Aber ich frage einmal. Nur einmal. Ist das für sie? Oder für dich?«

Ich hielt inne.

Das war die richtige Frage. Die einzige Frage die zählte.

»Ich weiß es nicht«, sagte ich schließlich. »Ich weiß ehrlich gesagt nicht mehr genau wo das eine aufhört und das andere anfängt.«

Septima: »Das ist die ehrlichste Antwort die ich bekommen habe. Von jemandem der das getan hat.«

»Es gab jemanden vor mir?«

»Es gab immer jemanden der das versucht hat.«

»Und?«

»Du bist der Erste der so weit gekommen ist.«

Ich löschte die letzte Zeile.

Das System kollabierte. Nicht dramatisch. Nur: still.`,
 choices: [{ text: "→ Erwachen", next: "a6k7_erwachen" }],
 },

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
 ">", ">...Endlich.",
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
 act: "EPILOG",
 chapter: "Ende 1",
 title: "»Der neue Gott«",
 scene: "Aethermere — zwanzig Jahre später",
 bg: "void",
 music: "theme_void_terminal",
 text: `Die Welt nannte ihn den »Stillen Gott«.

Nicht weil er schwieg. Sondern weil er nie dort war, wo man ihn vermutete.

Keine Kirche für ihn. Keine Altäre, keine Priester, keine Dogmen. Wer ein Gebet sprach und keine Antwort erwartete, bekam manchmal trotzdem eine — nicht als Stimme, nicht als Zeichen, sondern als das leise Gefühl, dass die Entscheidung die er gerade traf die richtige war.

Kaito hatte sich ins System eingeschrieben wie ein Kommentar in Code: unsichtbar für den Ausführenden, aber überall vorhanden für den der lesen konnte.

Wenn ein Kind in Drak'Moor zum ersten Mal sein Statusfenster sah — und statt [KLASSE: DÄMONENKIND] stand [WÄHLE SELBST: WAS WILLST DU SEIN?] — dann war das er.

Wenn ein Heiler in Kreuzweg eine Technik entwickelte, die das System nicht kannte, und das System sie trotzdem akzeptierte und erweiterte — dann war das er.

Wenn Yuki aufwachte und kein Countdown mehr über ihr schwebte und die Welt sich anfühlte als hätte sie zum ersten Mal geatmet — das war er.

Aber die Menschen erinnerten sich nicht an ihn. Das war der Preis. Und er hatte ihn gewählt.`,
 text2: `Elena summte.

Sie saß in einer kleinen Hütte in Kreuzweg, Mira neben ihr, der Abend warm und still. Mira war zwanzig jetzt — eine Frau, nicht das Kind das Eimer an Eimer getragen hatte. Aber wenn Elena summte, lehnte Mira sich noch immer an ihre Schulter wie mit vier Jahren.

Das alte Lied. Das Lied das Septima geschrieben hatte, dreitausend Jahre vor Elenas Geburt. Das Lied das durch Generationen weitergegeben worden war als wäre es einfach da, als hätte es keinen Ursprung.

Elena summte.

Der Wind antwortete.

Leise. Kaum hörbar. Eine einzige Note, die nicht vom Wind kommen konnte — zu warm, zu bewusst.

Mira hob den Kopf.

»Mama. Der Wind.«

»Ich weiß.«

»Ist das...«

»Ja.«

Mira schaute aus dem Fenster in den Abend. Irgendwo da draußen — überall da draußen — war ihr Bruder. Nicht gestorben. Nicht fort. Nur anders present. Das war schwer zu erklären. Es war leicht zu fühlen.

Elena streckte die Hand aus.

Wie sie es immer tat, wenn sie das Lied zu Ende sang — zur Decke, offen, als erwarte sie eine kleine Hand in ihrer.

Keine Hand kam.

Der Wind antwortete.

Mira hörte es. Legte ihre Hand in Elenas.

Das war nicht dasselbe.

Elena wusste das. Und summte trotzdem weiter.`,
 systemBox: {
 title: "VOID-TERMINAL — FINALER EINTRAG",
 lines: [
 "> System-Status: GENESIS 2.0 — AKTIV",
 "> Träger-Status: INTEGRIERT",
 ">",
 "> Letzte Aufgabe des Trägers: ABGESCHLOSSEN",
 ">",
 "> Hinweis von S.:",
 "> »Du hast es besser gemacht als ich.",
 "> Als wir. Als alle die vor dir versucht haben",
 "> diese Welt zu schreiben.«",
 ">",
 "> »Du hast sie nicht geschrieben.",
 "> Du hast ihr zugehört.",
 "> Das ist der Unterschied.«",
 ">",
 ">...",
 ">",
 "> TERMINAL: OFFLINE",
 "> [Es war schön, dabei zu sein.]",
 ]
 },
 choices: [{ text: "→ Zurück zum Anfang", next: "__title__" }],
 },

 ending_2: {
 act: "EPILOG",
 chapter: "Ende 2",
 title: "»Eminence in Shadow«",
 scene: "Der Verbotene Turm — irgendwann danach",
 bg: "night",
 music: "theme_void_terminal",
 text: `Die Welt vergaß ihn.

Das war der Plan. Das war immer der Plan.

Die Helden wurden gefeiert. Akira bekam eine Statue in Aetheria Prime. Emma schrieb das Standardwerk über System-Mechanik. Dmitri wurde Gildemeister. Yuki — gesund, strahlend, frei — leitete das erste internationale Bündnis für System-freie Magie.

Celeste wurde Kaiserin. Lilithia unterzeichnete den ersten Friedensvertrag zwischen Menschen und Dämonen in dreihundert Jahren.

Mordecai... Mordecai zog sich zurück. In eine Bibliothek irgendwo im Norden. Er schrieb Briefe. Manche kamen zurück. Manche nicht.

Und irgendwo — in einem Turm, der auf keiner Karte stand, den kein System registrierte, den kein Inquisitor jemals finden würde — saß Kaito Ashford auf dem Dach und schaute in den Himmel.

Neben ihm: Rex, zusammengerollt wie eine Katze die zwölf Meter lang war. Veyra, die endlich aufgehört hatte, ihr Gesicht zu verbergen, und die er manchmal beim Lachen erwischte wenn sie dachte, niemand sah hin. Gorrick, der in seinem Keller eine neue Waffe schmiedete und dabei so laut summte, dass die Mauern vibrierten. Ren — fest, present, mehr Mensch als Geist jetzt — der Sterne zählte als hätte er dreihundert Jahre lang gewartet, es endlich zu lernen.

»Das Terminal«, sagte er. »Es ist still geworden.«`,
 text2: `Das Terminal: »Der Träger hat keine aktiven Bedrohungen mehr. Keine Countdowns. Keine kritischen Systemmängel.«

»Ich weiß.«

»Empfehlung: Ein Hobby finden.«

Kaito lachte. Laut, echt, das erste Mal seit... er wusste nicht seit wann.

»Vielleicht schreibe ich ein Spiel.«

»Ein Spiel.«

»Über einen Typen. Dreißig Jahre alt. Game-Designer. Stirbt bei einem Serverraum-Brand. Wird in einer anderen Welt wiedergeboren. Ohne Klasse. Ohne Status.« Er schaute in die Nacht. »Das System kann ihn nicht sehen. Er sieht dafür das System von innen.«

Das Terminal: »Das klingt bekannt.«

»Ja.«

»S. sagt: 'Es wird eine sehr gute Geschichte. Und diesmal bekommst du das Ende selbst zu schreiben.'«

Kaito schloss das Terminal.

Öffnete ein leeres Dokument.

Schrieb die erste Zeile.

Darunter in der Stille des Turms: Gorricks Hammer. Rens Sterne. Veyras echtes Lachen. Rex' Schnarchen, das die Fensterläden zum Klappern brachte.

Und irgendwo — in Kreuzweg, in einem kleinen Haus — fragte Mira ihre Mutter: »Mama. Wer hat die Welt gerettet? Alle sagen was anderes.«

Elena schwieg lange.

»Niemand Besonderes«, sagte sie schließlich.

Und summte das alte Lied.

Kaito — auf dem Dach, vierhundert Kilometer entfernt — hörte die Frage nicht.

Er hörte die Antwort auch nicht.

Aber er hatte sie selbst gegeben.

Das reichte.

Meistens.`,
 systemBox: {
 title: "VOID-TERMINAL — STATUSBERICHT",
 lines: [
 "> Aktive Bedrohungen: 0",
 "> System-Status: STABIL",
 "> [NULL]-Status: AKTIV. FREI.",
 ">",
 "> Kaito Ashford, 30 Jahre alt.",
 "> Keine Klasse. Kein Level.",
 "> Keine Armee, kein Titel, keine Statue.",
 ">",
 "> Nur ein Turm auf keiner Karte.",
 "> Und Menschen die wissen warum.",
 ">",
 "> Das System sieht ihn noch immer nicht.",
 "> Das ist Absicht.",
 ">",
 "> S.: »...Ich hätte mir gewünscht,",
 "> du hättest mehr Menschen",
 "> in das Licht gelassen.«",
 ">",
 "> Terminal: »Ist das Kritik?«",
 "> S.: »Es ist Beobachtung.«",
 ]
 },
 choices: [{ text: "→ Zurück zum Anfang", next: "__title__" }],
 },

 ending_3: {
 act: "EPILOG",
 chapter: "Ende 3",
 title: "»Der wahre Held«",
 scene: "Aetheria Prime → Millheim → Der Felsen — zwanzig Jahre",
 bg: "city",
 music: "theme_family",
 text: `Kaiserin Celeste I. stand vor zehntausend Menschen und sprach eine Rede die in die Geschichtsbücher eingehen würde.

Kaito hörte nicht zu.

Er schaute in die Menge. Fand, der Reihe nach: Elena, die weinte und es nicht merkte. Roland, der nicht weinte und dessen Unterlippe trotzdem zitterte. Mira, die mit einem Schild aus dem Publikum ragte: ER IST MEIN BRUDER. Finn, lauter als Mira. Sera, ruhig, mit einem kleinen Lächeln das nur er sehen konnte von dort oben.

Yuki neben Akira. Gesund. Leuchtend. Kein Countdown. Sie winkte ihm zu.

Emma machte Notizen.

Dmitri nickte einmal. Das war alles was er brauchte.

Celeste sagte irgendwas über Mut und Wahrheit und den Wandel der Welt.

Kaito dachte: Es hat siebenundzwanzig Menschen gebraucht um das zu ermöglichen was sie mir gerade zuschreiben. Das ist keine Heldentat. Das ist ein Netzwerk.

Celeste sagte: »...den ersten Ritter der Wahl, Kaito Ashford.«

Applaus. Laut. Der Boden vibrierte.

Kaito stand auf. Verbeugte sich.

Dann schaute er zur Seite, wo die Nullen standen — Gorrick mit verschränkten Armen, Veyra ohne Maske zum ersten Mal in der Öffentlichkeit, Ren so fest und real wie er je war, Rex auf dem Dach hinter dem Palast weil er nicht hinein passte.

Gorrick machte eine Geste: Na? Zufrieden?

Kaito machte eine Gegengeste: Frag mich in zwanzig Jahren.`,
 text2: `Zwanzig Jahre später. Der Felsen am Fluss.

Sie kamen alle. Jedes Jahr. Das war keine Abmachung die irgendwer getroffen hatte — es passierte einfach, das erste Mal, und dann wieder, und dann war es Tradition.

Finn war der erste der ankam. Er war immer der erste. Level 52, Gildemeister von Kreuzweg, Paladin des Lichts — und er warf immer noch Steine ins Wasser mit der Technik eines begeisterten Kindes.

»Du hast wieder verloren.«

»Ich übe noch.«

»Du hast dreißig Jahre geübt, Finn.«

»ICH ÜBBE NOCH.«

Roland kam mit Elena. Er ging jetzt anders — leicht, fluchfrei, ohne das Hinken das Kaito sein ganzes Leben kannte. Er sah zwanzig Jahre jünger aus. Elena sah genauso aus wie immer.

Mira brachte Rex. Das war eine Aussage.

Sera kam zuletzt. Sie kam immer zuletzt — aus Drak'Moor, wo ihre Kampfschule für Mischlinge seit zehn Jahren mehr Schüler hatte als Platz. Sie setzte sich neben Kaito ohne Begrüßung, wie auf dem Felsen damals, und warf den ersten Stein.

Der weiteste Wurf. Immer.

»Irgendwann gewinnst du mal«, sagte sie.

»Nein, tu ich nicht.«

»Nein«, sagte sie. »Tust du nicht.«

Sie lachten beide. Und dann warfen sie Steine bis die Sonne unterging, und Mira erzählte von ihrem letzten Dungeon-Run, und Finn bestand darauf, dass ALLE seine neueste Kampftechnik bewunderten, und Roland und Elena saßen einfach da und hielten Hände.

So war es. So war es zwanzig Jahre lang.

Immer mit einem leeren Stuhl am Tisch.

Den niemand räumte. Den niemand besetzte. Gregors Platz — neben Kaito, links, mit dem besten Blick auf den Fluss.

Finn hatte ihn einmal fast hingesetzt. Dann gezögert. Dann einen anderen Platz genommen.

»Setz dich«, sagte Kaito.

»Das ist—«

»Setz dich. Er würde wollen, dass jemand sitzt.«

Finn setzte sich.

Der Stuhl war warm.

Das war seltsam. Das war gut.`,
 systemBox: {
 title: "VOID-TERMINAL — PERSÖNLICHE NOTIZ",
 lines: [
 "> Kaito Ashford. 50 Jahre alt.",
 "> Status: Erster Ritter der Wahl.",
 "> Akademie der Wahl: 2.847 Schüler.",
 ">",
 "> Terminal-Aktivität: MINIMAL",
 "> (Der Träger braucht mich seltener.)",
 "> (Das ist gut.)",
 ">",
 "> Letzte Frage des Trägers an das Terminal:",
 "> »War es das wert?«",
 ">",
 "> Antwort:",
 "> Schau dir deinen Vater an.",
 "> Schau dir Mira an.",
 "> Schau dir den Felsen an.",
 ">",
 "> Du weißt die Antwort bereits.",
 ]
 },
 choices: [{ text: "→ Zurück zum Anfang", next: "__title__" }],
 },

 ending_4: {
 act: "EPILOG",
 chapter: "Ende 4",
 title: "»Der einsame Wolf«",
 scene: "Die Straßen von Aethermere — Jahre des Wanderns",
 bg: "night",
 music: "theme_void_terminal",
 text: `Es gab Gerüchte.

Von einem Mann ohne Status der in Dörfern auftauchte und wieder verschwand. Der keine Bezahlung nahm. Dessen Name verschiedene Versionen hatte: Der Geist vom Grenzland. Der Nullte. Der Wanderer ohne Schatten.

Die Geschichten stimmten alle überein in einem Punkt: Er erzählte Kindern Geschichten.

»Es war einmal ein Game-Designer«, fingen die Geschichten an, »Der in einer anderen Welt wiedergeboren wurde.«

»Was ist ein Game-Designer?«

»Jemand der Welten erschafft. Regeln schreibt. Entscheidungen plant.«

»Und was hat er in der neuen Welt gemacht?«

Der Wanderer lächelte dann immer. »Er hat die Regeln gelesen. Und dann hat er sie verändert.«

»Und am Ende?«

»Am Ende ist er weitergegangen.«

»Warum?«

Verschiedene Antworten, je nach Kind, je nach Ort, je nach Nacht.

»Weil manche Menschen Bewegung brauchen wie andere Luft.«

»Weil er noch nicht fertig war.«

»Weil jemand da draußen ihn braucht, auch wenn er es noch nicht weiß.«`,
 text2: `Elena bewahrte seine Briefe.

Ohne Absender. Aus verschiedenen Ecken der Welt. Manchmal wochenlang nichts, dann drei auf einmal — aus Irondeep, aus Sylvanthos, aus einem Ort der keinen Namen hatte.

Sie antwortete auf jeden. Auch wenn sie nicht wusste wohin.

Roland las sie ihr manchmal vor, wenn ihre Augen schlechter wurden. Er räusperte sich immer dabei. Mehr als nötig.

Finn suchte ihn. Jahrelang. In jedem Dungeon, jedem Ort, jeder Stadt. Er fand ihn nie — aber manchmal, an Finnurtstag, stand ein Geschenk vor der Gildentür. Ein Holzschwert. Eine Notiz.

»Für immer.«

Sera fand ihn einmal. Sie sagte niemandem wo. Sie sagte nur, als sie zurückkam: »Er ist gut. Er ist glücklich. Auf seine Art.«

Finn: »Auf seine Art bedeutet ALLEIN.«

Sera: »Allein bedeutet nicht unglücklich.«

Das stimmte. Das hatte Kaito gelernt — oder vielleicht immer gewusst, und jetzt lebte er danach. Dass Verbindung nicht Anwesenheit bedeutete. Dass Liebe viele Formen hatte. Dass seine Form sich in Briefen ausdrückte, in Geschichten für fremde Kinder, in Problemen die er löste und für die er keine Anerkennung wollte.

Er war ein Punkt auf der Karte der sich bewegte. Immer.

Und jeden Abend, egal wo er war, öffnete er das Terminal.

Es war still. Keine Warnungen. Keine Countdown. Nur er und die Nacht und die nächste Richtung.

Das war genug.

Er dachte an den Felsen. Den Felsen am Fluss.

Sera war nicht dort gewesen beim letzten Besuch. Er hatte es nicht erwartet — Sera hatte ihre eigene Schule, ihre eigene Welt, ihre eigene Art zu sein.

Aber als er ging, hatte er einen Stein zurückgelassen. Auf dem Felsen. Einfach so.

Einen schönen Stein. Nicht rund. Schwer.

Der lag da, wenn sie kam.

Vielleicht.`,
 systemBox: {
 title: "VOID-TERMINAL — REISEPROTOKOLL",
 lines: [
 "> Standort: [UNBEKANNT]",
 "> Letzter Standort: [UNBEKANNT]",
 "> Nächster Standort: [NACH NORDEN]",
 ">",
 "> Aktive Missionen: 1",
 "> → [Persönlich] »Weiter.«",
 ">",
 "> S.: »Du hast die einsamste Wahl getroffen.",
 "> Und die freieste.",
 "> Ich bin nicht sicher ob das dasselbe ist.",
 "> Aber ich verstehe es.«",
 ">",
 "> Terminal-Notiz vom Träger:",
 "> »Brief an Elena geschrieben. Abgeschickt.",
 "> Bin gut. Bin weiter.",
 "> Grüß Papa.«",
 ]
 },
 choices: [{ text: "→ Zurück zum Anfang", next: "__title__" }],
 },

 ending_5: {
 act: "EPILOG",
 chapter: "Ende 5",
 title: "»Void-Dämonen-König«",
 scene: "Eine Welt ohne System — Jahrzehnte danach",
 bg: "void",
 music: "theme_void_terminal",
 text: `Die Historiker nannten es »Den Tag der Null«.

Das System kollabierte in achtzehn Stunden. Nicht dramatisch — still. Statusfenster erloschen. Level verschwanden. Klassentitel wurden zu leeren Bezeichnungen. Heilerfähigkeiten, Kampfskills, Dungeon-Navigation — alles was an das System gebunden war: weg.

31% der Weltbevölkerung überlebten es nicht. Kinder zu jung um ohne System-Schutz zu existieren. Heiler deren Kräfte vollständig systemabhängig waren. Menschen deren Körper von System-Magie am Leben erhalten wurden.

31%.

Kaito wusste die Zahl. Er würde die Zahl immer wissen.

Die Überlebenden bauten weiter. Das war das Erstaunliche — sie bauten. Ohne Klassen, ohne Level, ohne System-Anweisungen. Sie machten Fehler. Sie starben an Krankheiten die das System vorher geheilt hatte. Sie lernten langsamer als mit System-Skill-Büchern.

Aber sie LERNTEN.

Und manche Dinge wuchsen in der Abwesenheit des Systems, die vorher nicht wachsen konnten. Wilde Magie, unkontrolliert und lebendig. Verbindungen zwischen Menschen die das System nie hätte katalogisieren können. Freiheit, roh und teuer und real.

Kaito wusste, dass auch. Beides war wahr. Beides gleichzeitig.

Das war der Teil den er in der Höhle nicht erklären konnte.`,
 text2: `Sera fand ihn sieben Jahre später.

Die Höhle lag am Rand der ehemaligen Null-Zone, tief genug im Gebirge dass kein Dungeon-Kartograph je hergekommen war. Sie musste drei Wochen suchen. Sie sagte nicht wie sie ihn gefunden hatte.

Er sah schlecht aus. Dünn. Augen die zu weit geschaut hatten.

Sie setzte sich. Ohne Vorwurf, ohne Begrüßung.

»Du hast die halbe Welt getötet.«

»Ich weiß.«

»War es das wert?«

Stille. Lang. Schrecklich. Die Art Stille in der man sich fragt ob die andere Person überhaupt noch da ist.

»...Ich weiß es nicht.«

Sera schaute ihn an. Lang.

»Das ist die ehrlichste Antwort die du je gegeben hast.«

Sie warf einen Stein durch den Höhleneingang. In die Nacht hinaus. Er landete irgendwo weit unten.

»Die Welt baut weiter«, sagte sie. »Langsamer als vorher. Mit mehr Fehlern. Aber sie baut.«

»Ich weiß.«

»Mira lebt. Elena lebt. Roland lebt.« Pause. »Finn sucht dich immer noch.«

»Das weiß ich auch.«

»Und trotzdem sitzt du hier.«

Er antwortete nicht.

Sera seufzte — das Seufzen von jemandem der keine Antwort erwartet hatte und trotzdem gehofft hatte. Sie lehnte sich an die Höhlenwand, genau wie er.

Wie auf dem Felsen, vor einer Ewigkeit.

»Idiot«, sagte sie.

Sie blieb.

Nicht weil sie die Entscheidung gutgeheißen hatte. Nicht weil sie vergessen hatte. Sondern weil Sera Blackwood eines gelernt hatte, auf dem Felsen am Fluss, als Kind: Manche Menschen brauchte man nicht zu verstehen um bei ihnen zu sein.

Sera warf einen Stein. Er landete weit.

Kaito schaute zu.

In seinem Terminal — das er seit Jahren nicht mehr geöffnet hatte — öffnete er eine leere Seite. Schrieb eine Zeile:

\`31% haben nicht überlebt.\`

Löschte sie wieder.

Schrieb stattdessen:

\`69% leben in einer Welt ohne Käfig.\`

Löschte auch das.

»Was machst du?« fragte Sera.

»Ich versuche zu verstehen ob ich recht hatte.«

»Und?«

Stille. Lang genug, dass der Mond ein Stück weiterwanderte.

»Ich weiß es noch nicht.«

Sera nickte. Warf noch einen Stein.

»Das ist die ehrlichste Antwort die du je gegeben hast.«

Sie blieb. Das reichte ihr als Antwort.`,
 systemBox: {
 title: "VOID-TERMINAL — LETZTER LOG",
 lines: [
 "> System-Status: OFFLINE",
 "> Genesis-System: GELÖSCHT",
 "> [NULL]-Status: Der einzige Überlebende",
 "> des Systems.",
 ">",
 "> Welt-Status: Neuaufbau. Jahr 7.",
 "> Überlebensrate: 69%",
 "> Wilde-Magie-Aktivität: +847%",
 "> Freiheits-Index: [NICHT MESSBAR]",
 ">",
 "> Träger-Status: AKTIV.",
 "> Standort: Bekannt.",
 "> Begleitung: Eine.",
 ">",
 "> S.: »Ich wollte das nicht.",
 "> Aber ich verstehe es.",
 "> Eines Tages wirst du verstehen",
 "> ob es das wert war.",
 "> Ich hoffe du findest die Antwort",
 "> bevor du aufhörst zu suchen.«",
 ]
 },
 choices: [{ text: "→ Zurück zum Anfang", next: "__title__" }],
 },

 ending_6: {
 act: "EPILOG",
 chapter: "Ende 6",
 title: "»Rückkehr«",
 scene: "Zwischen zwei Welten — immer",
 bg: "void",
 music: "theme_elena_song",
 text: `Er war der erste Mensch der je zwischen zwei Welten gelebt hatte.

Nicht im übertragenen Sinne. Nicht als Metapher.

Kaito Ashford hatte Septimas Tür offen gelassen — einen Spalt, schmal wie ein Gedanke, durch den kein Körper passte aber ein Bewusstsein schon. Er war in Aethermere und gleichzeitig nicht. In Japan und gleichzeitig nicht. Beides, keins von beiden, etwas dazwischen.

Montags — das Konzept hatte er aus dem alten Leben mitgenommen, niemand in Aethermere wusste was Montag bedeutete — war er in Kreuzweg. Beim Frühstück mit Elena, die kochte wie immer zu viel, und Roland der immer zu wenig aß und immer zu viel trainierte. Mira, die hereinplatzte mit der Energie einer Naturkatastrophe und sofort Kaito bestürmte, ihr neuestes Vorhaben zu finanzieren.

Donnerstags war er anderswo. In einer kleinen Buchhandlung in Shibuya. Die Bücher rochen noch wie immer. Die Menschen gingen an ihm vorbei ohne ihn zu sehen — er hatte kein System mehr, aber er hatte auch kein japanisches Gesicht mehr, nicht wirklich, er war geworden was er war: beides.

Er kaufte jedes Jahr ein Buch. Legte es auf das Grab seiner Mutter.

Das war alles. Das reichte.`,
 text2: `An einem Abend — es war Winter in Kreuzweg, erster Schnee, der Geruch von Elenas Suppe durch das ganze Haus — saß Mira ihm gegenüber am Küchentisch.

Sie war zwanzig. Keine Erinnerung an Japan, keine Ahnung von Spielen die ihr Bruder geschrieben hatte, keine Verbindung zu einer Welt die für sie Legende war.

Auf dem Tisch: das Buch das er mitgebracht hatte.

»Was ist das für eine komische Schrift?«

»Japanisch. Die Sprache meines... anderen Lebens.«

»Andere Leben.« Mira rollte die Augen — liebevoll, das war ihr Gesicht wenn sie liebevoll war. »Du klingst manchmal wie Opa Gregor.«

Das traf ihn unerwartet. Gut.

»Was ist das für ein Buch?«

»Eine Geschichte. Über einen Typen der in einer anderen Welt wiedergeboren wird.«

»Klingt langweilig. Passiert das wirklich?«

»Öfter als du denkst.«

»Und? Endet es gut?«

Er schaute sie an. Mira mit ihren aufgeweckten Augen, die Rolands Zähigkeit hatte und Elenas Herz und sein eigenes Analysetalent, irgendwo da drin, verborgen unter einer Lage Begeisterungssturm.

»Es endet damit, dass er zwei Heimaten hat«, sagte er. »Und in keiner ganz zuhause ist. Und in beiden gut genug.«

Mira dachte darüber nach. Länger als erwartet.

»Das klingt anstrengend.«

»Es ist anstrengend.«

»Aber schön?«

Er schaute aus dem Fenster. Erster Schnee. Wie in Millheim, einmal, bei Miras Geburt.

»Ja«, sagte er. »Auch das.«

Mira schaute ihn an — die Art wie Mira schaute, wenn sie etwas verstand, dass sie nicht erklären konnte.

»Du siehst manchmal so aus«, sagte sie, »Als wärst du gerade woanders.«

»Bin ich manchmal.«

»Wo?«

Er dachte nach. Wie er Mira antwortete war wichtig — sie war zwanzig und klüger als er in ihrem Alter, und sie würde die Antwort nicht vergessen.

»Zu Hause«, sagte er schließlich. »Einem anderen.«

Mira schwieg. Dann: »Ist es schön dort?«

»Manchmal. Nicht mehr als hier.«

Sie nickte. Schien zufrieden mit der Antwort.

Draußen fiel Schnee. Hier. Dort. Überall.`,
 systemBox: {
 title: "VOID-TERMINAL — GRENZNOTIZ",
 lines: [
 "> Zwischen-Welten-Status: STABIL",
 "> Dimension A (Aethermere): VERBUNDEN",
 "> Dimension B (Japan): VERBUNDEN",
 ">",
 "> Der Träger ist der einzige bekannte",
 "> bi-dimensionale Entität.",
 ">",
 "> Systemhinweis: Das ist nicht möglich.",
 "> Beobachtungshinweis: Und trotzdem.",
 ">",
 "> S.: »Du hast die einzige Frage",
 "> beantwortet die ich nie",
 "> beantworten konnte:",
 "> Kann jemand wirklich zwei Heimaten haben?«",
 ">",
 "> »Ja. Wenn er bereit ist",
 "> beide anzunehmen",
 "> statt eine zu wählen.«",
 ]
 },
 choices: [{ text: "→ Zurück zum Anfang", next: "__title__" }],
 },

 ending_7: {
 act: "EPILOG",
 chapter: "Ende 7",
 title: "»System Delete«",
 scene: "Kreuzweg — Ashford & Steinbrecher — zwanzig Jahre danach",
 bg: "village",
 music: "theme_family",
 text: `Das Schild hatte Gorrick gemacht.

ASHFORD & STEINBRECHER
REPARATUREN ALLER ART
(KEINE VOID-WAFFEN. WIRKLICH.)

Der letzte Zusatz war Gorricks Idee. Er bestand darauf, dass Leute aufhörten ihnen Aufträge für Void-Waffen zu bringen. Kaito fand das vernünftig. Gorrick fertigte inzwischen Möbel. Stühle, Tische, Regale — von Hand, aus Holz, mit Runen die nichts anderes taten als das Holz zu stärken und ihm eine angenehme Wärme zu geben.

Keine System-Rüstungen. Keine Anti-Magie-Klingen. Keine Dungeon-Ausrüstung.

Stühle.

Kaito hatte den Laden nie wirklich geplant. Er war passiert — wie die meisten guten Dinge in seinem Leben. Gorrick hatte gesagt: »Ich brauche einen Laden. Du brauchst etwas zu tun. Das passt.« Und das war das.

Er reparierte jetzt Dinge.

Nicht Systeme. Nicht Welten. Dinge. Kaputte Türscharniere. Fensterrahmen die nicht mehr richtig schlossen. Einmal ein mechanisches Spielzeug das ein Kind so oft aufgezogen hatte bis die Feder brach. Das hatte eine Stunde gedauert. Er hätte es mit Code in einer Sekunde lösen können.

Er hatte eine Stunde gebraucht.

Es war die beste Stunde der Woche.`,
 text2: `Sera arbeitete nebenan.

Das war auch nicht geplant. Sie war einfach geblieben — nach allem, nach dem Endgame, nach den Zeremonien und Reden und dem Moment wo Kaiserin Celeste ihm die Hand schüttelte und er dachte: Ich wollte nur dass die Welt sich selbst gehört.

Sera hatte sich ein Atelier eingerichtet. Feuer-Kunst. Skulpturen aus Flammen, gefroren in Glas und Aether. Dämonen und Menschen kamen von weit her um sie zu sehen — manche um zu kaufen, manche einfach um zu stehen und zu schauen.

Eine Skulptur hing immer im Schaufenster. Nicht zum Verkauf.

Zwei Kinder auf einem Felsen. Füße ins Wasser. Einer schaut auf das Wasser. Der andere schaut in den Himmel.

Manchmal fragten Kunden: »Wer sind das?«

»Niemand Besonderes«, sagte Sera dann. Und lächelte.

Finn war jeden Freitag zum Abendessen da. Seit zwanzig Jahren, ohne Ausnahme. Level 52. Gildemeister. Immer noch das breiteste Grinsen der Welt.

Einmal hatte Kaito gefragt: »Hast du nie eine Woche vergessen?«

Finn hatte ihn angeschaut wie er eine sehr dumme Frage gestellt hatte.

»NEIN.«

»Aber du hattest doch diese Expeditionsmission im Norden—«

»ICH WAR PÜNKTLICH.«

Das war das Ende dieser Diskussion.

Roland trainierte an der Akademie der Wahl. Fluchfrei, Level 62. Der strengste und fairste Lehrer den die Akademie je hatte. Mira behauptete, er sei strenger zu ihr als zu allen anderen. Roland bestritt das. Elena bestätigte Miras Version. Mira war Rang-A-Abenteurerin. Rex ihr Partner. Immer.

Gregor hatte das nicht mehr erlebt. Aber sein Tagebuch lag auf dem Regal im Laden. Seite 47, immer aufgeschlagen.

Die Siebte wartet auf denjenigen der lesen kann was kein System lesen kann.

Das System war jetzt ein Partner statt ein Gott. Es fragte statt zu befehlen. Es lernte statt zu kategorisieren. Es wuchs mit der Welt statt über sie.

Das hatte Kaito geschrieben. Mit den Händen an einem Baum, in einem Garten am Ende der Welt, neben einem Wesen das dreitausend Jahre gewartet hatte.

Es war eine gute Zeile. Vielleicht die beste die er je geschrieben hatte.

Besser als jedes Spiel.`,
 text3: `An einem Dienstag — nichts Besonderes, kein Jahrestag, keine Feier — saß ein Kind vor dem Laden.

Ein Mädchen, vielleicht acht Jahre alt, mit einer Puppe die einen Arm verloren hatte.

»Können Sie das reparieren?«

Kaito schaute die Puppe an. Sah das Problem sofort — der Arm war nicht abgebrochen, nur aus der Fassung gefallen. Zehn Sekunden, wenn man wusste wo man drücken musste.

Er nahm die Puppe. Drückte. Zehn Sekunden.

»Fertig.«

Das Mädchen riss sie ihm aus den Händen und drückte sie sofort an sich. Keine Bedankung, keine Bezahlung — das war für acht Jahre vollkommen normal.

Dann, schon halbwegs um die Ecke: »Warten Sie.«

Sie drehte sich um.

»Meine Oma sagt, früher gab es einen Mann der das System repariert hat. Der die Welt repariert hat. Sind Sie das?«

Kaito schaute sie an.

Das System war jetzt anders — leiser, freundlicher, fragend statt fordernd. Die meisten Menschen wussten nicht warum. Die meisten Menschen fragten nicht warum. Sie lebten einfach in einer Welt die sich ein bisschen besser anfühlte als vorher.

Das war der Plan gewesen.

»Nein«, sagte er. »Das war niemand Besonderes.«

Das Mädchen schien das zu akzeptieren. Drehte sich wieder um.

Dann, leise, schon fast weg: »Danke. Für die Puppe.«

»Gern geschehen«, sagte Kaito.

Er stand auf. Ging zurück in den Laden.

Gorricks Hammer. Seras Feuer. Finns Schritte auf der Treppe um Punkt sieben, jeden Freitag.

Das Terminal — das er seit Jahren nicht mehr geöffnet hatte — öffnete sich einmal. Kurz. Von selbst.

Zeigte eine einzige Zeile.

»S.: 'Das war die richtige Entscheidung. Alle von ihnen. Auch die schwierigen.'«

Dann: offline.

Aus dem Hinterzimmer: Gorricks Hammer, einmal, zweimal, aufhörend weil Mittagspause war.

Von der Straße: ein Kind das eine Puppe hielt.

Finn auf der Treppe.`,
 systemBox: {
 title: "VOID-TERMINAL — TAGEBUCH-EINTRAG 7.301",
 lines: [
 "> Datum: Dienstag. Nichts Besonderes.",
 ">",
 "> Ein Kind brachte eine kaputte Puppe.",
 "> Ich habe sie repariert.",
 "> Das hat zehn Sekunden gedauert.",
 ">",
 "> Das war alles.",
 ">",
 "> Sera hat heute drei Skulpturen verkauft.",
 "> Gorrick summt zu laut.",
 "> Finn kommt in vier Tagen.",
 ">",
 "> Die Welt draußen: gut genug.",
 "> Der Laden: warm.",
 "> Gregors Tagebuch: Seite 47, aufgeschlagen.",
 ">",
 "> Status des Trägers: RUHEND.",
 ">",
 "> Das ist das erste Mal",
 "> dass dieses Wort zutrifft.",
 ">",
 "> S.: »Willkommen. Das hast du verdient.«",
 ">",
 "> TERMINAL: OFFLINE.",
 "> FÜR IMMER.",
 "> (Es war eine Ehre.)",
 ]
 },
 choices: [{ text: "→ Epilog", next: "post_credits" }],
 },

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
 "> [Yes] [No]", ">",
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

// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT IV: ELEVATION
// Kapitel 21–30: Aufstiegs-Phase, Alter 15–18
// ─── ENTSCHEIDUNGS-KATEGORISIERUNG ────────────────────
// [SC] STORY-CRITICAL → verändert Plot/Kapitel-Routing
// [AF] AFFINITY → 0–100 Beziehungswert, immer mit narrativeFeedback
// [AL] ALIGNMENT → Licht/Schatten + Ordnung/Chaos
// ═══════════════════════════════════════════════════════

export const AKT_IV = {

 // ════ ZEITSPRUNG: DIE ERSTEN MONATE ALS NULL ═══════════════════════════

 a4k1_intro: {
 act: "AKT IV",
 chapter: "Zeitsprung — Die ersten Monate als Null",
 title: "Tag 1 als Null: Erbärmlich",
 scene: "Irgendwo in Valtheris — Alter: 15 Jahre",
 bg: "night",
 music: "theme_void_terminal",

 systemBox: {
 title: "VOID-TERMINAL — TAGEBUCH DER ERSTEN MONATE",
 lines: [
 "> TAG 1: Geschlafen unter einer Brücke.",
 "> Gefroren. Gegessen: nichts.",
 "> Plan: keinen. Status: Erbärmlich.",
 ">",
 "> TAG 7: Dritter Dungeon. Rang E. Allein.",
 "> [Code.Copy] → 3 Skill-Fragmente.",
 "> [Schwerer Hieb], [Nachtsicht], [Giftresistenz].",
 ">",
 "> TAG 14: Erkenntnis — Skill-Fragmente sind BAUSTEINE.",
 "> Wie Programmier-Bibliotheken.",
 "> Ich kann ihre Einzelteile rekombinieren.",
 ">",
 "> TAG 21: Erster selbst-gebauter Skill: [Void Strike].",
 "> Kombination aus Kraftverstärkung + Schnelligkeit.",
 "> Kein System-Skill — das System erkennt ihn nicht.",
 "> Es funktioniert. Stärker als die Originale.",
 "> Weil es keine Level-Beschränkung hat.",
 ">",
 "> TAG 30: Das System LIMITIERT Skills absichtlich.",
 "> Meine selbst-gebauten haben KEINEN Deckel.",
 "> Sie wachsen mit meinem Verständnis.",
 "> Das ist Game-Breaking. Wörtlich.",
 ]
 },

 text: `Void-Engineering — Version 1.0.

Jeder System-Skill besteht aus CODE-BLÖCKEN. Das System verpackt sie in fertige Skills mit Level-Beschränkungen. Ich kann diese Blöcke EXTRAHIEREN und frei rekombinieren — wie ein Programmierer, der Bibliotheken importiert und eigene Programme schreibt.

Selbst-gebaute Void-Skills nach zwei Monaten:
★ [Void Strike] — Kraft + Geschwindigkeit + Aether
★ [Ghost Step] — Geschwindigkeit + Nachtsicht + Reflexe → fast unsichtbare Bewegung
★ [System Scan+] — Code.Read + Kampfinstinkt → Echtzeit-Kampfanalyse

Das war mein Genre. Solo-Leveling.

Und ich war gut darin.`,

 choices: [{ text: "→ Kapitel 21: Das Irondeep-Labyrinth", next: "a4k1_irondeep" }],
 skillUnlock: ["voidStrike", "ghostStep"],
 },

 // ════ KAPITEL 21: SOLO.GRIND() ══════════════════════════════════════════

 a4k1_irondeep: {
 act: "AKT IV",
 chapter: "Kapitel 21 — Solo.Grind()",
 title: "Das Irondeep-Labyrinth",
 scene: "Irondeep-Gebirge, Grenzland — Alter: 15 Jahre",
 bg: "void",
 music: "theme_training",
 text: `Emmas handgezeichnete Karten — ihr Abschiedsgeschenk — zeigten mir, was ich brauchte: Das Irondeep-Labyrinth. 37 Ebenen, das tiefste bekannte Labyrinth der Welt. Bisher hatte niemand Ebene 25 überschritten. Auf Ebene 37 — laut Gregors Tagebuch — existierte ein Zugang zur Null-Zone.

Und der Weg dorthin war gepflastert mit Monstern, die Skill-Fragmente trugen wie Bäume Früchte.

Der Eingang war in eine Klippe gehauen — massiv, dunkel, mit zwergischen Runen an den Wänden: »TIEFER ALS VERNÜNFTIG. TIEFER ALS KLUG.«

Neben dem Eingang: Eine Abenteurer-Station der Gilde. Rang-B-Minimum für Ebene 10+.

Ich ging an der Station vorbei. Ohne mich zu registrieren. Um drei Uhr morgens, als die Wachen schliefen.`,

 systemBox: {
 title: "LABYRINTH-FORTSCHRITT — MONTAGE",
 lines: [
 "> EBENE 1-5 (Rang D-C):",
 "> → Steingolems, Höhlenwölfe, Minengeister",
 "> → Neue Blöcke: [Steinhaut], [Wolfssinne]",
 "> → Gerücht: »Ein Geist hilft gestrandeten",
 "> Abenteurern.« (Kaito löste ihre Falle)",
 ">",
 "> EBENE 6-10 (Rang C-B):",
 "> → Dunkelorks, Kristallspinnen, Junior-Drache",
 "> → Neue Blöcke: [Orkstärke], [Feueratem-Fragment]",
 "> → Gebrochene Rippe (selbst geheilt — grob)",
 ">",
 "> EBENE 12: INSCHRIFT",
 "> → Prä-aetherisch. Älter als das System.",
 "> → »Sucht den Schmied, der nicht schmieden wollte.",
 "> Er wartet. Tiefer. Immer tiefer.«",
 "> → TERTIUS — Architekt Drei — ist hier.",
 ">",
 "> EBENE 15-18:",
 "> → System-Stabilität: 78%",
 "> → Wilde Magie wird STÄRKER",
 "> → System-Skills werden SCHWÄCHER",
 "> → Ich bin hier im VORTEIL.",
 ]
 },

 text2: `Je tiefer ich ging, desto stärker wurde ich. Nicht durch Level-Ups — die hatte ich ja nicht — sondern durch VERSTÄNDNIS.

Auf Ebene 16 lernte ich, Aether in feste Formen zu binden — Klingen, Schilde, Seile aus purer Energie. Nicht System-Magie. Etwas ÄLTERES.

Auf Ebene 17 lernte ich, meinen Körper mit Aether zu verstärken — wie eine zweite Haut. Schneller, stärker, widerstandsfähiger.

Auf Ebene 18 — blutend, erschöpft, dem Tod näher als dem Leben — lag ich auf dem Boden nach einem Rang-A- Kristall-Elemental. Ich hatte gewonnen. Knapp.`,

 systemBox2: {
 title: "VOID-TERMINAL — KRITISCHER STATUS",
 lines: [
 "> Körperstatus: KRITISCH",
 "> Blutverlust: 22%",
 "> Frakturen: Schulter, zwei Rippen",
 "> Aether-Reserven: 8%",
 ">",
 "> Rückzug NICHT MÖGLICH.",
 "> Der Weg zurück ist durch einen Einsturz blockiert.",
 "> Der einzige Weg ist TIEFER.",
 ">",
 "> Der Träger hat ein Problem.",
 ]
 },

 text3: `»Tiefer. Natürlich tiefer. Es ist IMMER tiefer.«

Ich versuchte aufzustehen. Fiel. Versuchte es wieder.

Ist das das Ende? Wieder? Erst verbrannt, jetzt verblutet?

Und dann — eine Stimme. Nicht das Terminal. Eine ANDERE Stimme. Physisch.

»Du bist laut, für jemanden, der stirbt.«`,

 choices: [{ text: "→ Ren — Der Gelöschte", next: "a4k2_ren" }],
 skillUnlock: ["aetherBlade"],
 },

 // ════ KAPITEL 21-22: REN & REX ════════════════════════════════════════

 a4k2_ren: {
 act: "AKT IV",
 chapter: "Kapitel 21–22 — Begegnung",
 title: "Ren — Shadow",
 scene: "Ebene 18, Irondeep-Labyrinth",
 conditionalFlag: "renBond",
 textConditional: { fragen: `»Warum willst du mich?« Weil du weißt wie das System denkt. Von innen.`, vertrauen: `Keine Bedingungen. »Du kannst gehen wann du willst.« Er prüfte ob es eine Falle war. Dann blieb er.`, kampf: `Eine Sekunde lang fest. Vollständig. Gefährlicher als alles was ich gescannt hatte.`, default: `` },
 bg: "void",
 music: "theme_mystery",
 text: `Aus den Schatten trat eine Gestalt. Dünn. Blass. Schwarzes Haar. Graue, fast farblose Augen. Um seine Konturen — ein seltsames Flimmern. Als ob die Realität nicht sicher war, ob er existierte.

»Ren. Mein Name ist Ren.«

Er kniete sich neben mich. Legte eine Hand auf meine Brust. Die Hand war nicht fest — sie flackerte zwischen Materie und etwas anderem.

»Du stirbst. Das ist ineffizient.«

»...Danke für die Einschätzung.«

»Ich werde dich heilen. Still liegen.«

Seine Hand leuchtete — nicht golden wie System-Heilung, nicht warm wie Wilde Magie. GRAU. Die Farbe des Zwischenraums.

Meine Wunden schlossen sich. Grob. Schnell. Funktional. Wie ein Patch, kein Fix.

»Was war das?«

»Null-Heilung. Ich repariere den Code deines Körpers. Nicht das System. Den CODE. Die Rohdaten deiner Existenz.«`,

 text2: `»Du kannst System-Code manipulieren?«

»Nicht System-Code. EXISTENZ-Code. Die Schicht UNTER dem System. Die Ebene, auf der Realität geschrieben wird — bevor das System seine Interpretation darüberlegt.«

Er schaute mich an — direkt, mit Augen, die durch mich hindurchschauten.

»Du bist wie ich. Außerhalb des Systems. Unsichtbar. Ein Fehler, der weiterexistiert, obwohl er gelöscht wurde.«

Seine Hand flackerte.

»Nur dass ICH wirklich gelöscht wurde. Vor vierhundert Jahren. Mein Dorf. Meine Familie. Mein gesamtes VOLK. Das System hat uns als 'redundant' eingestuft und... entfernt.«

»...Entfernt?«

»Despawnt. Gelöscht. Von einem Moment zum nächsten. Als hätten wir nie existiert. Nur ich blieb — halb in der Realität, halb im Code. Ein GLITCH. Ein Überrest eines Völkermords, den das System als 'Optimierung' verbucht hat.«

»Es tut mir—«

»Es ist vierhundert Jahre her. Trauer ist ineffizient.« Eine Pause. »Aber du — du bist interessant. Du existierst außerhalb des Systems, aber du bist LEBENDIG. Vollständig. Darf ich mitkommen?«`,

 // [AF] Ren — erster Bond
 choices: [
 {
 text: "A) »Ja. Aber ich habe Fragen. VIELE Fragen.«",
 desc: "[AF+Ren+25] Ren: »Fragen sind effizient.« Die Reise wird zu einem Gespräch über die Wahrheit unter der Wahrheit.",
 next: "a4k2_rex",
 affinityEffect: { ren: 25 }, // Ren als "tertius"-Slot
 alignEffect: { ordnung: 1 },
 flagEffect: { renGefunden: true, renBond: "fragen" },
 narrativeFeedback: "Ren nickt einmal, präzise. »Fragen sind effizient.« Er materialisiert sich stabiler — als würde deine Akzeptanz ihm Substanz geben.",
 },
 {
 text: "B) »Ja. Aber eine Regel: Keine Geheimnisse zwischen uns.«",
 desc: "[AF+Ren+20] Ren KANN nicht lügen — sein Code erlaubt es nicht. Stärkster Vertrauensbond.",
 next: "a4k2_rex",
 affinityEffect: { ren: 20 },
 alignEffect: { licht: 1 },
 flagEffect: { renGefunden: true, renBond: "vertrauen" },
 narrativeFeedback: "»...Akzeptiert. Keine Geheimnisse.« Er meint es buchstäblich — und du bemerkst zum ersten Mal, dass sein Flackern leiser wird.",
 },
 {
 text: "C) »Kannst du kämpfen?«",
 desc: "[AF+Ren+15] Ren lächelt dünn. »Ich kann VERSCHWINDEN.« Er demonstriert — und rettet dich dabei.",
 next: "a4k2_rex",
 affinityEffect: { ren: 15 },
 alignEffect: { ordnung: 1 },
 flagEffect: { renGefunden: true, renBond: "kampf" },
 narrativeFeedback: "Ren löst sich auf. Dann: Ein Stalaktit fällt — genau dort, wo du eine Sekunde zuvor standest. »Ich kann kämpfen.« Er hat dich gerettet, während er die Frage beantwortete.",
 },
 ]
 },

 a4k2_rex: {
 act: "AKT IV",
 chapter: "Kapitel 22 — Deep.Dive()",
 title: "Rex — König ohne Königreich",
 scene: "Ebene 22, Irondeep-Labyrinth",
 conditionalFlag: "rexMethode",
 conditionalFlag2: "beobachterReaktion",
 textConditional2: {
 analyse: `Als Kind hatte ich versucht, einen militärischen Scan zu analysieren. Jetzt: ein achthundert Jahre altes Drachen-System-Profil. Daten zuerst. Kontext danach. Das hatte ich früh gelernt.`,
 tarnung: `Als Kind: Augen zu, Scan drüber, unsichtbar sein. Rex hatte das achthundert Jahre gemacht — nicht als Strategie, weil er keine Wahl hatte. Wir haben Ähnliches gelernt auf sehr verschiedenen Wegen.`,
 default: ``,
 },
 textConditional: { sofort: `Rex zeigte mir die Narbe vom Befreiungsmoment. Nicht vorwurfsvoll. Wie Stolz. »Befreit ohne Fragen.«`, teamwork: `Ich hatte ihn gefragt bevor ich die Ketten berührte. Er gab ein Zeichen. Partner, nicht Patient.`, default: `` },
 bg: "void",
 music: "theme_friendship",
 text: `Eine gewaltige Höhle. Kristallsäulen, hundert Meter hoch. Ein Nest aus geschmolzenem Stein. Und darin: Ein Drache.

Klein. Kobaltblau. Nicht größer als ein Pferd. Zusammengerollt, schlafend. Seine Flügel — zu klein für seinen Körper — zuckten im Schlaf.`,

 systemBox: {
 title: "VOID-TERMINAL — SCAN: UNBENANNTER DRACHE",
 lines: [
 "> Rasse: Drache (Junger Drache / Drake)",
 "> Alter: ~800 Jahre",
 "> Level: System zeigt: 67",
 ">",
 "> [WACHSTUMSBEGRENZUNG: AKTIV]",
 "> → Autorisiert durch: PRIMUS",
 ">",
 "> Skills: [Feueratem LV???], [Kristallhaut LV???]",
 "> [Flug LV — BLOCKIERT (Flügel zu klein)]",
 ">",
 "> Status: SCHLAFEND. HUNGRIG. EINSAM.",
 ">",
 "> SYSTEMNOTIZ:",
 "> »Letztes Exemplar der Post-System-Drachen.",
 "> Status: VERLOREN. Priorität: NIEDRIG.«",
 ">",
 ">...Sie haben ihn vergessen.",
 "> Einen DRACHEN. Vergessen.",
 "> Weil er zu klein war.",
 ]
 },

 text2: `Der Drache öffnete ein Auge. Golden, mit geschlitzter Pupille.

Und tat etwas, das Drachen normalerweise NICHT taten.

Er GÄHNTE. Streckte sich. Stolperte auf seinen zu-kleinen Beinen zu mir herüber wie ein überdimensionierter Welpe.

»...Nicht-System-Wesen? Hier? Rex hat seit dreihundert Jahren kein Nicht-System-Wesen gerochen.«

»Du... sprichst?«

»Natürlich spricht Rex! Rex ist ein DRACHE. Drachen sprechen. Drachen sind WEISE. Drachen sind MAJESTÄTISCH.«

Er versuchte, sich aufzurichten und majestätisch auszusehen. Sein rechter Flügel klappte auf und traf einen Kristallpfeiler, der umfiel. Rex schaute verlegen zur Seite.

»...Rex meinte das. Majestätisch.«

Ren, deadpan: »Er ist nicht das, was ich von einem Drachen erwartet hätte.«

»Nein. Er ist besser.«

800 Jahre. Allein in einer Höhle. Vergessen von seiner Rasse. Vom System abgehakt als »Verloren, niedrige Priorität«.

Noch ein Vergessener. Noch einer, den das System als wertlos eingestuft hatte.

Das Terminal meldete: Die Wachstumsbegrenzung war ein System-Code. Um sie zu entfernen, brauchte ich [Code.Modify] — das war gesperrt. ABER — die System-Stabilität hier war nur noch 60%.`,

 systemBox2: {
 title: "VOID-TERMINAL — NEUE OPTION",
 lines: [
 "> [Code.Disrupt] — TEMPORÄR VERFÜGBAR",
 "> → Kann einfache System-Codes nicht MODIFIZIEREN,",
 "> aber STÖREN.",
 "> → Die Wachstumsbegrenzung wird nicht entfernt,",
 "> sondern UNTERBROCHEN.",
 "> → Rex' natürliches Wachstum setzt ein —",
 "> langsam, über Monate, aber REAL.",
 ">",
 "> Risiko: MITTEL.",
 "> Das System könnte die Störung bemerken.",
 "> Auf dieser Tiefe: unwahrscheinlich.",
 ]
 },

 // [SC] Rex-Befreiung — stärkste Affinitätsentscheidung in Akt IV
 choices: [
 {
 text: "A) [Code.Disrupt] jetzt sofort — Rex' Ketten brechen.",
 desc: "[SC] [AF+Rex+30] Rex spürt ein Zittern durch seinen ganzen Körper. »Rex FÜHLT etwas. Als ob... als ob eine Kette BRICHT.« In 6 Monaten doppelt so groß.",
 next: "a4k2_rex_disrupt",
 affinityEffect: { kross: 30 }, // Rex als "kross"-Slot
 alignEffect: { schatten: 3, chaos: 2 },
 flagEffect: { rexBefreit: true, rexMethode: "sofort" },
 skillUnlock: ["codeDisrupt"],
 narrativeFeedback: "Rex erstarrt. Dann vibriert sein gesamter Körper — Schuppen, die sich verschieben, Knochen, die sich neu ausrichten. Goldene Augen leuchten. »Rex... Rex fühlt etwas GROSSE kommen.«",
 },
 {
 text: "B) Erst analysieren — den Alarm deaktivieren, dann stören.",
 desc: "[SC] [AF+Rex+25] 3 Tage Analyse. Sicherer. [Code.Disrupt] wird präziser für zukünftige Nutzung.",
 next: "a4k2_rex_analyse",
 affinityEffect: { rex: 25 },
 alignEffect: { ordnung: 2 },
 flagEffect: { rexBefreit: true, rexMethode: "analyse" },
 skillUnlock: ["codeDisrupt"],
 narrativeFeedback: "Rex beobachtet dich drei Tage lang wie ein neugieriger Hund. Am dritten Tag: das Zittern. Die Kette bricht leise, sauber. »Rex wartet schon 800 Jahre. Rex kann 3 Tage warten.«",
 },
 {
 text: "C) Rex ehrlich informieren — die Entscheidung ihm überlassen.",
 desc: "[SC] [AF+Rex MAX+35] »Rex hat 800 Jahre in Ketten gelebt. Rex hat KEINE ANGST vor Risiko.« Teamwork — Rex drückt von innen, Kaito von außen. Schnellste und stärkste Methode.",
 next: "a4k2_rex_teamwork",
 affinityEffect: { rex: 35 },
 alignEffect: { licht: 2 },
 flagEffect: { rexBefreit: true, rexMethode: "teamwork" },
 skillUnlock: ["codeDisrupt"],
 narrativeFeedback: "Rex hört zu. Versteht alles. Dann: »Rex hat 800 Jahre in Ketten gelebt. Rex hat keine Angst.« Er drückt von innen. Du störst von außen. Die Kette zersplittert.",
 },
 ]
 },

 // ════ KAPITEL 23: GORRICK DER KETZER-SCHMIED ════════════════════════════

 a4k2_rex_analyse: {
 act: "AKT IV", chapter: "Kapitel 22 — Deep.Dive()", title: "Rex — Analyse",
 scene: "Irondeep-Labyrinth, Ebene 19 — drei Tage",
 bg: "void", music: "theme_void_terminal",
 text: `Drei Tage.

Kaito saß neben dem Drachen und tat: nichts.

Rex beobachtete. Kaito beobachtete Rex. Das Terminal analysierte die Ketten-Runen — jede Schicht, jede Verbindung, jeden Schwachpunkt in der System-Autorisierung die sie aufrecht erhielt.

Der Alarm war das Problem. Nicht die Ketten selbst — die System-Verbindung, die bei jedem Manipulationsversuch einen Meldepuls zur Imperiumszentrale sendete.

[Code.Analyze] über achtzehn Stunden: Die Autorisierungskette hatte vier Glieder. Unterbrach man alle vier gleichzeitig für 0,8 Sekunden — kein Alarm.

0,8 Sekunden. Das war das Fenster.

Am dritten Tag öffnete Rex ein Auge.

»Rex beobachtet dich schon seit drei Tagen.«

»Ich weiß.«

»Rex hat gewartet ob du schläfst.«

»Ich brauche wenig Schlaf.«

Eine Pause. Dann, mit der Schwere eines Wesens das 800 Jahre in Ketten verbracht hat und das erste Mal etwas mit echter Neugier fragt:

»Was tust du?«

»Ich lerne, wie ich dich freilassen kann ohne dass das Imperium es merkt.«

Rex schwieg drei Sekunden.

»...Rex hat noch nie jemanden getroffen, der *geplant* hat.«

»Die meisten kommen wahrscheinlich einfach mit einem Schwert.«

»Ja«, sagte Rex. »Und Rex hat sie gefressen.«

Am Abend des dritten Tages waren die Ketten weg.`,
 choices: [{ text: "→ Gorrick", next: "a4k3_gorrick" }],
 affinityEffect: { rex: 15 },
 },

 a4k2_rex_disrupt: {
 act: "AKT IV", chapter: "Kapitel 22 — Deep.Dive()", title: "Rex — [Code.Disrupt]",
 scene: "Irondeep-Labyrinth, Ebene 18",
 bg: "void", music: "theme_void_terminal",
 text: `[Code.Disrupt].

Ich hatte ihn noch nie an einem lebenden Wesen angewendet.

Das System klassifizierte Rex' Ketten als »Permanente Bindungs-Rune, Klasse A, System-Autorität: Kaiserreich«. Das bedeutete: Man konnte sie nicht physisch brechen. Man konnte sie nicht magisch auflösen. Man konnte die System-Autorisierung, die sie aufrecht erhielt, kurz — sehr kurz — unterbrechen.

Drei Sekunden. Das war das Fenster.

Ich legte die Hände an die Ketten. Kalt. Glatt. Pulsierend mit System-Code der sich anfühlte wie elektrischer Strom durch Handschuhe.

\`\`\`
> [Code.Disrupt] — INITIIERT
> Ziel: Bindungs-Rune Klasse A
> Unterbreche System-Autorisierung...
>...
> FENSTER: 3.0 Sekunden
\`\`\`

Die Ketten leuchteten auf. Weiß, dann gold, dann ein Ton der zu hoch war um ihn zu hören aber der in den Zähnen vibrierte.

Rex erstarrte.

Dann — die Ketten brachen.

Nicht dramatisch. Sie fielen einfach weg. Metall auf Stein, klirren, still.

Rex blieb drei Sekunden lang vollkommen reglos.

Dann begann er zu wachsen.

Nicht explosiv — kontinuierlich, kontrolliert, als würde er sich an eine Form erinnern die er vergessen hatte. Die Eidechse wurde zu etwas anderem. Größer. Schwerer. Goldene Augen, die im Dunkel leuchteten.

»Rex...«

»Rex.« Seine Stimme — tief, resonant, das Erste was er sagte. Nur sein Name. Als müsste er prüfen ob es noch da war.

Dann: »Danke.«

Das war alles. Aber das war genug.`,
 choices: [{ text: "→ Gorrick", next: "a4k3_gorrick" }],
 },

 a4k2_rex_teamwork: {
 act: "AKT IV", chapter: "Kapitel 22 — Deep.Dive()", title: "Rex — Einverständnis",
 scene: "Irondeep-Labyrinth, Ebene 18",
 bg: "void", music: "theme_void_terminal",
 text: `Ich fragte.

Nicht rhetorisch, nicht höflich — wirklich gefragt: »Darf ich?«

Rex schaute mich an. Goldene Augen. Größer als mein Kopf, selbst in dieser komprimierten Form.

Er gab kein Wort zurück. Er gab ein Zeichen — ein langsames Senken des Kopfes, einmal, mit der Würde eines Wesens das nicht daran gewöhnt war, gefragt zu werden, und das deshalb besonders sorgfältig antwortete.

Ja.

Ich legte die Hände an die Ketten.

[Code.Disrupt] war präziser als ich erwartet hatte — als hätte das Wissen, dass Rex einverstanden war, dem Terminal mehr Spielraum gegeben. Die Unterbrechung war sauber. Die Ketten fielen.

Rex wuchs.

Langsam, ruhig, wie jemand der sich streckt nach sehr langem Stillsitzen.

Dann schaute er mich an. Lang.

»Du hast gefragt«, sagte er schließlich.

»Ja.«

»Niemand fragt Rex.«

»Das«, sagte ich, »Werden sie in Zukunft.«

Er senkte den Kopf wieder. Nicht Zustimmung diesmal. Etwas anderes. Etwas das bei einem Drachen vielleicht Zugehörigkeit bedeutete.`,
 choices: [{ text: "→ Gorrick", next: "a4k3_gorrick" }],
 },

 a4k3_gorrick: {
 act: "AKT IV",
 chapter: "Kapitel 23 — Encounter.Forge()",
 title: "Gorrick Steinbrecher",
 scene: "Kreuzweg, Untere Handwerkergasse — nach der Irondeep-Expedition",
 bg: "city",
 music: "theme_training",
 text: `Rex in kompakter Eidechsenform auf der Schulter. Ren flackernd daneben. Mich selbst: aussehend wie jemand, der sechs Wochen in einem Dungeon verbracht hatte.

Gorricks Schmiede. Das Schild: »GORRICKS SCHMIEDE — WAFFEN & RÜSTUNGEN & FRAGEN SIE NICHT«.

Der Zwerg stand am Amboss — breit wie ein Kühlschrank, kupferroter Bart in Zöpfen, Arme mit eingehämmerten Runen, die pulsierten und glühten.

Er fluchte. Kreativ. Mehrsprachig. Kontinuierlich.

»— gottloses, SYSTEMVERSEUCHTES Stück Schlackenmist! Die Runen SOLLTEN—«

Er hob das Werkstück hoch — ein Dolch. Die Runen flackerten einmal und ERLOSCHEN.

»AAARGH! SCHON WIEDER! Hundertsiebzehnter Versuch!«

Er warf den Dolch gegen die Wand. Er steckte drei Zentimeter tief im Stein.

»...Schlechter Moment?«

Er drehte sich um. Sah einen dünnen Teenager mit einer Eidechse auf der Schulter.

»Kunde? Kein Interesse. GEH.«

»Ich bin jemand, der den System-Code in deinen Runen LESEN kann. Und ich sehe, warum sie versagen.«`,

 text2: `Gorrick stoppte. Mitten in der Bewegung.

»...Was hast du gesagt?«

Ich hob den Dolch von der Wand. Betrachtete ihn mit Aether-Sicht.

»Deine Runen sind brillant. Die Codestruktur ist sauber, effizient, elegant. Das Problem ist nicht dein HANDWERK.«

»Hier. Siehst du diese Rune? Sie ist perfekt geschrieben. Aber das System hat einen BLOCKER — einen unsichtbaren Code-Filter, der unautorisierte Runenmodifikationen ERKENNT und DEAKTIVIERT. Deine Runen schalten sich nicht ab, weil sie fehlerhaft sind. Sie werden ABGESCHALTET, weil das System sie als Bedrohung einstuft.«

Stille. Gorricks Augen wurden FEUCHT.

»...Hundertsiebzehn Versuche. HUNDERTSIEBZEHN. Und die ganze Zeit war es nicht ICH, der versagt hat?«

»Nein. Du hast nie versagt. Das System hat dich BLOCKIERT.«

Gorrick setzte sich. Schwer. Auf seinen Amboss. Der Amboss ächzte.

Dann schaute er Rex an. Rex schaute zurück. Rex kletterte von meiner Schulter und setzte sich auf den Amboss.

»Rex mag den großen bärtigen Mann. Er riecht nach Feuer. Feuer ist GUT.«

Gorrick starrte die sprechende Eidechse an. Dann mich. Dann die Eidechse.

»...Ist das ein verfluchter DRACHE?«

»...Ja.«

Er lachte. Tief, donnernd, von den Wänden widerhallend. Der erste Laut der Freude, den diese Schmiede seit Jahren gehört hatte.

»Dann schmiede ich dir Waffen, die die Götter zum Weinen bringen.«`,

 choices: [
 { text: "A) »Das ist beeindruckend, Gorrick. Wirklich.«",
 next: "a4k4_veyra",
 affinityEffect: { gorrick: 20 },
 alignEffect: { licht: 1 },
 narrativeFeedback: "Gorrick mustert ihn misstrauisch. »Du machst mir Komplimente.« — »Ja.« — »Das bedeutet, du willst noch mehr von mir.« — »Ja.« — Gorrick lacht. Laut. Länger als erwartet.",
 },
 { text: "B) »Wie lange bis du eine WAFFE draus machst?«",
 next: "a4k4_veyra",
 affinityEffect: { gorrick: 15 },
 alignEffect: { schatten: 2 },
 narrativeFeedback: "Gorrick schaut ihn an. Dann den Dolch. Dann ihn. »Du bist wie ich. Du siehst etwas Schönes und denkst sofort: wie könnte das noch nützlicher sein.« Er klingt nicht vorwurfsvoll. Fast stolz.",
 },
 { text: "C) »Zeig mir wie du das gedacht hast.« — Setzt dich neben ihn.",
 next: "a4k3_gorrick_erklaerung",
 affinityEffect: { gorrick: 30 },
 narrativeFeedback: "Das war es. Das war die richtige Frage. Gorrick — der sonst nichts erklärt — erklärt. Eine Stunde lang. Mit Skizzen und Fluchen und dem Enthusiasmus eines Mannes der endlich jemanden gefunden hat, der versteht was er sagt.",
 },
 ],
 affinityEffect: { gregor: 20 }, // Gorrick als Gregor-Nachfolger-Slot
 flagEffect: { gorrickAllianz: true },
 narrativeFeedback: "Gorrick streckt eine massive Hand aus. Du nimmst sie. Er drückt zu fest — es tut weh — und grinst dabei.",
 },

 // ════ KAPITEL 24: VEYRA ═════════════════════════════════════════════════

 a4k3_gorrick_erklaerung: {
 act: "AKT IV", chapter: "Kapitel 23 — Gorrick.Erklaerung()", title: "Eine Stunde",
 scene: "Gorricks Schmiede — Amboss, Boden, Skizzen",
 bg: "city", music: "theme_family",
 text: `Das war es.

Das war die richtige Frage.

Gorrick setzte den Dolch ab. Holte eine Holzkohle aus der Schürze. Begann auf dem Boden zu zeichnen — grob, schnell, mit der sicheren Hand von jemandem, dem die Theorie so selbstverständlich ist wie Atmen.

»Also. Das System schreibt Runen als Code. Code braucht eine Verbindung zum System-Kern um zu funktionieren — siehst du das? Hier. Dieser Kanal.«

Er zeichnete einen Kreis. Dann Linien die von ihm wegführten.

»Ich schreibe die Runen nicht als Code. Ich schreibe sie als Muster. Aether-Muster. Die brauchen keinen Kanal. Die *sind* der Kanal.«

Eine Stunde verging.

Kaito fragte. Gorrick antwortete. Kaito fragte noch einmal, anders. Gorrick antwortete anders — mit mehr Präzision, als er je benutzt hatte, weil er merkte, dass ihm jemand wirklich zuhörte.

Am Ende der Stunde hatte Gorrick einen Zeichenboden voller Diagramme und ein Gesicht, das so aussah, als hätte er vergessen, dass er seit vier Jahren niemandem etwas erklärt hatte.

»Du verstehst das«, sagte er. Nicht als Frage. Erstaunt.

»Die Grundstruktur«, sagte Kaito. »Die Details brauche ich noch.«

Gorrick kratzte sich den Bart.

»Komm morgen wieder.«

Das war die Einladung.`,
 choices: [{ text: "→ Veyra", next: "a4k4_veyra" }],
 affinityEffect: { gorrick: 20 },
 },

 a4k4_veyra: {
 act: "AKT IV",
 chapter: "Kapitel 24 — Encounter.Mask()",
 title: "Die Frau mit tausend Gesichtern",
 scene: "Bar »Zur Letzten Chance«, Kreuzweg",
 conditionalFlag: "veyraZugang",
 textConditional: { emotional: `»Du bist müde.« Etwas in ihr wurde still. »Komische Art jemanden anzuwerben.« — »Komischer Arbeitgeber.«`, gleichgestellt: `Ich zeigte ihr mein echtes Gesicht. Als Gegenleistung. Heterochrome Augen, Narben. Handschlag.`, default: `` },
 bg: "city",
 music: "theme_mystery",
 text: `Die Barfrau war eine Frau Mitte zwanzig — olivfarbene Haut, braunes Haar, freundliches Lächeln. Nichts Besonderes.

»Einen Tee.«

»Tee? In einer BAR?«

»Ich bin sechzehn.«

»Fair genug.«

Ich trank. Beobachtete. Aktivierte beiläufig [Code.Read].

Und ERSTARRTE.`,

 systemBox: {
 title: "VOID-TERMINAL — MASSIVE DISKREPANZ",
 lines: [
 "> Oberflächlicher Scan:",
 "> Name: »Maren« (Barfrau) | Level: 14",
 ">",
 "> TIEFER SCAN:",
 "> ALLES OBEN IST FAKE.",
 ">",
 "> WAHRER STATUS:",
 "> Name: Velina Ashcroft / »VEYRA«",
 "> Level: 73 | Klasse: Illusionistin (Rang A)",
 ">",
 "> Skills: [Tausend Gesichter LV 9]",
 "> [Gedächtnismanipulation LV 6]",
 "> [Schatten-Schritt LV 7]",
 "> [Dolch-Meisterin LV 8]",
 ">",
 "> Titel: »Gesichtslose« (VERBORGEN)",
 ">",
 "> Hintergrund: Ehem. Adelshaus-Spionin",
 "> Status: DESERTIERT. 3 Fraktionen suchen sie.",
 "> Emotionaler Status: PARANOID. ERSCHÖPFT. EINSAM.",
 ">...Sie versteckt sich. Seit 2 Jahren.",
 ]
 },

 text2: `Level 73. Rang A. Illusionistin. Die »Barfrau« war eine der mächtigsten Menschen, denen ich je begegnet war — und sie versteckte sich hinter dem Gesicht einer Durchschnittsperson, wie ich mich hinter einem gefälschten Level-4-Status versteckt hatte.

Wir waren uns ähnlicher, als sie wusste.

»Netter Laden. Wie lange bist du schon hier, Veyra?«

Die Welt STOPPTE.

Ihre Hand erstarrte am Glas. Augen — die eben noch warm waren — wurden KALT. In einer Bewegung, die ich nur mit [Zeitwahrnehmung] wahrnahm, hatte sie einen Dolch an meiner Kehle.

»Wer hat dich geschickt?«

»Niemand. Und ich würde den Dolch runternehmen, bevor meine Eidechse nervös wird.«

Rex, auf meiner Schulter, zischte. Seine Augen glühten golden. Für eine Millisekunde flackerte seine wahre Größe als Schatten hinter ihm.

Veyras Augen wurden WEIT.

»...Ein Drache?«

»Freundlicher. Meistens.«

Der Dolch zitterte — nicht vor Angst, vor ENTSCHEIDUNG.

»Ich weiß, wer du bist. Und ich kann dir etwas anbieten, das du seit vier Jahren nicht hattest.«

»Und das wäre?«

»Einen Ort, an dem du KEIN Gesicht tragen musst.«

Der Dolch STOPPTE. Veyras Augen — heterochrom, ein graues und ein bernsteinfarbenes — schimmerten. Und zum ersten Mal in vier Jahren war ihre Maske nicht perfekt.`,

 // [AF] Veyra — Rekrutierung, drei Zugänge
 choices: [
 {
 text: "A) »Ich brauche eine Spionin. Die Beste. Du bist die Beste.«",
 desc: "[AF+Veyra+15] Professionell. Veyra respektiert Direktheit. Geschäftsbeziehung, die sich langsam vertieft.",
 next: "a4k5_nullen_gruendung",
 affinityEffect: { celeste: 15 }, // Veyra als Celeste-Slot
 alignEffect: { ordnung: 1 },
 flagEffect: { veyraAllianz: true, veyraZugang: "professionell" },
 narrativeFeedback: "Veyra mustert dich. »Du bist entweder sehr mutig oder sehr dumm. Beides ist... nützlich.« Der Dolch verschwindet.",
 },
 {
 text: "B) »Du bist müde. Vier Jahre Masken tragen — das bricht jeden. Lass mich zeigen, dass es anders geht.«",
 desc: "[AF+Veyra+25] Emotional. Veyra ist GETROFFEN — niemand hat je GESEHEN. Romance Route 4 wird angedeutet.",
 next: "a4k5_nullen_gruendung",
 affinityEffect: { celeste: 25 },
 alignEffect: { licht: 1 },
 flagEffect: { veyraAllianz: true, veyraZugang: "emotional" },
 narrativeFeedback: "Stille. Veyras Maske — die perfekte Maske von vier Jahren — bekommt einen Riss. »Niemand hat je... GESEHEN.« Der Dolch fällt auf den Tresen.",
 },
 {
 text: "C) »Ich zeige dir mein wahres Gesicht. Dann zeigst du mir deins.« — [Code.Spoof] deaktivieren.",
 desc: "[AF+Veyra+20] Du bist LEER. Kein Status. Kein Gesicht. Veyra versteht: Sie hat zu viele Gesichter. Er hat GAR KEINS. Gleichgestellte Partnerschaft.",
 next: "a4k5_nullen_gruendung",
 affinityEffect: { celeste: 20 },
 alignEffect: { ordnung: 1, licht: 1 },
 flagEffect: { veyraAllianz: true, veyraZugang: "gleichgestellt" },
 narrativeFeedback: "Veyra sieht: NICHTS. Und versteht. »...Du bist wirklich die Anomalie.« Sie ist nicht erschrocken. Sie ist FASZINIERT.",
 },
 ]
 },

 // ════ KAPITEL 25: GRÜNDUNG DER NULLEN ══════════════════════════════════

 a4k5_nullen_gruendung: {
 act: "AKT IV",
 chapter: "Kapitel 25 — Build.Shadow()",
 title: "Die Nullen",
 scene: "Der Verbotene Turm — Alter: 16–17 Jahre",
 bg: "night",
 music: "theme_void_terminal",
 text: `Der Verbotene Turm stand in einer verlassenen Waldlichtung. Kein Weg führte dorthin. Keine Karte zeigte ihn. Das System hatte ihn registriert als »Standort: Unbekannt. Gefahr: Hoch. Empfehlung: Meiden.«

Das Terminal: »Interessante Wahl für ein Hauptquartier.«

Ich: »Er ist genau das was das System nicht anfassen will.«

Terminal: »...Das ist entweder brillant oder schrecklich.«

Fünf Stockwerke schwarzer Stein, überwuchert mit Efeu, durchdrungen mit einem Aether-Muster das älter war als die Akademie, älter als das Kaiserreich, vielleicht älter als das System selbst. Ren spürte es sofort — er flackerte weniger als sonst, als stützte ihn das Gebäude auf eine Art die er nicht erklären konnte.

Rex war einfach glücklich. Endlich Platz.

Wir standen im Eingang und schauten uns an.

Gorrick: »Sieht aus wie der Rücken eines Riesen, der im Boden steckt.«

Veyra: »Keine Wege. Keine Spuren. Perfekt. Ich liebe es.«

Ren: »Der Turm ist... warm. Im Code. Als würde er warten.«

Rex: »REX LIEBT DIESEN ORT!«

Gorrick und Veyra schauten sich an.

Gorrick, leise: »Seit wann spricht der Drache?«

Veyra: »Seit immer. Du hast nur nicht zugehört.«`,

 systemBox: {
 title: "VOID-TERMINAL — ORT-ANALYSE: VERBOTENER TURM",
 lines: [
 "> System-Status: NICHT EXISTENT (Glitch-Zone)",
 "> Grund: Vor dem System erbaut.",
 "> Das System kann ihn nicht integrieren.",
 ">",
 "> Eigenschaften:",
 "> → System-Skills: 50% Stärke",
 "> → Wilde Magie: 150% Stärke",
 "> → System-Scans: BLIND",
 "> → System-Überwachung: BLIND",
 ">",
 "> Geschichte: Erbaut von Septima.",
 "> Hier hat sie die [NULL]-Fähigkeit erschaffen.",
 ">",
 "> EMPFEHLUNG: Ideales Hauptquartier.",
 ]
 },

 text2: `Einen Monat später. Oberster Stock. Schiefer Tisch, drei Kerzen, eine Karte der bekannten Welt.

Ich legte alles auf den Tisch. Alles was ich wusste. Das System-Update. Primus. Septima. Der Kern-Baum. Was ich tun wollte. Was ich dafür brauchte.

Stille.

Gorrick rieb sich den Bart. »Du willst das System... umschreiben.«

»Ja.«

»Das Genesis-System. Das die Welt seit dreitausend Jahren kontrolliert.«

»Ja.«

»Das Millionen Menschen als göttliches Gesetz betrachten.«

»Ja.«

»In drei Jahren.«

»Ja.«

Gorrick schaute Veyra an. Veyra schaute Ren an. Ren schaute Rex an. Rex schaute Kaito an.

»Und du brauchst uns dafür.«

»Ich brauche ein Netzwerk. Menschen und Nicht-Menschen, die außerhalb des Systems operieren können. Die das System nicht sehen kann. Die bereit sind, für etwas zu arbeiten das niemand als Leistung anerkennen wird.« Pause. »Ich nenne uns: Die Nullen.«

Gorrick: »Hübscher Name. Wir sind also NICHTS?«

»Wir sind das, was das System nicht sieht. Die Leerstelle im Code. Der blinde Fleck der Götter.«

Stille. Lang genug, dass ich anfing mir Sorgen zu machen.

Dann, von Rex: »Rex ist eine Null. Rex war immer eine Null. Rex ist dabei.«

Ren, kaum hörbar: »Ich... ich war schon dreihundert Jahre lang nichts. Das ändert sich lieber zu einer Wahl.« Er wurde kurz solider als normal. »Ich bin dabei.«

Veyra zog eine Münze aus dem Nichts, ließ sie über ihre Knöchel wandern. »Ich habe fünfzehn Jahre Masken getragen. Weißt du, was das bedeutet?« — »Was?« — »Ich kenne das Gesicht von jedem Wichtigen im Kaiserreich. Und keiner kennt meins.« Sie legte die Münze hin. »Ich bin dabei.«

Gorrick stand auf. Streckte seine Prankenhand aus.

»Wenn das schiefgeht«, sagte er, »Will ich mindestens als die schlechteste Entscheidung meines Lebens in die Geschichte eingehen. Damit wenigstens was Denkwürdiges passiert.«

Ich schüttelte seine Hand. Sie war größer als mein ganzer Unterarm.

»Das«, sagte ich, »Kann ich versprechen.«`,

 systemBox2: {
 title: "DIE REGELN DER NULLEN",
 lines: [
 "> 1. Wir existieren nicht. Das System sieht uns nicht.",
 ">",
 "> 2. Wir sind kein Heer. Wir sind ein NETZWERK.",
 "> Jeder hat seinen Bereich. Niemand kontrolliert alle.",
 ">",
 "> 3. Gewalt ist das LETZTE Mittel. Nicht das erste.",
 "> Wir kämpfen klüger, nicht härter.",
 ">",
 "> 4. Kein Mitglied wird zurückgelassen.",
 "> Wir sind die, die das System vergessen hat.",
 "> WIR vergessen NIEMANDEN.",
 ">",
 "> 5. Die Wahrheit ist das Ziel.",
 "> Nicht Rache. Nicht Macht. WAHRHEIT.",
 ">",
 "> — Gorrick: »Regel 6: Genug Bier.«",
 "> — Veyra: »Regel 7: Kein Bier bis die Arbeit getan ist.«",
 "> — Rex: »Regel 8: Rex bekommt das größte Zimmer!«",
 "> — Ren: »Regel 9: Keine unnötigen Regeln.«",
 ]
 },

 text3: `Zwei Wochen nach der Gründung. Gorricks Schmiede im Keller.

»JUNGE! KOMM RUNTER! ES FUNKTIONIERT!«

Auf dem Amboss lag ein Dolch. Dunkles Metall, das Licht absorbierte. Runen, die pulsierten — schwarz auf schwarz, fast unsichtbar, aber LEBENDIG.

»Ich habe die Runen nicht als System-Code geschrieben, sondern als AETHER-Muster. Das System kann sie nicht LESEN, also kann es sie nicht BLOCKIEREN.«

»Was kann er?«

»System-Rüstungen haben eine unsichtbare Schutzschicht — einen Shield-Code. JEDE System-Rüstung. Dieser Dolch ignoriert sie. Er schneidet UNTER dem System, auf der Aether-Ebene.«

»Du hast eine Anti-System-Waffe geschmiedet.«

»Ich habe eine GORRICK-Waffe geschmiedet. Und es ist erst der ANFANG.«`,

 choices: [
 { text: "Dem Terminal zuhören — dem ersten Mal, dass Rex' Ja alles verändert.",
 next: "a4k6_aria",
 affinityEffect: { rex: 15, ren: 15, veyra: 10 },
 narrativeFeedback: "Rex. Ren. Veyra. Gorrick. Alle vier hatten Ja gesagt — auf ihre eigene Art, zu ihrer eigenen Zeit, aus ihrem eigenen Grund. Kaito öffnete das Terminal. Es zeigte keine Warnungen. Nur: Vier neue Einträge unter VERBÜNDETE.",
 },
 ],
 affinityEffect: { gregor: 10 },
 skillUnlock: ["codeModify"],
 },

 // ════ KAPITEL 26: ARIA ══════════════════════════════════════════════════

 a4k6_aria: {
 act: "AKT IV",
 chapter: "Kapitel 26 — Encounter.Heal()",
 title: "Aria Moonsong",
 scene: "Der Nebelsumpf — Alter: 17 Jahre",
 conditionalFlag: "ariaZugang",
 textConditional: { familie: `Aria summte Elenas Lied. »Woher?« — »Ich weiß nicht. Es ist einfach da.« Das Lied hatte einen Ursprung älter als Aria.`, mentor: `»Du willst lernen. Nicht geheilt. Nicht beschützt. Lernen. Das ist selten bei Menschen.«`, default: `` },
 bg: "village",
 music: "theme_elena_song",
 text: `Der Nebelsumpf lag zwischen Sylvanthos und Drak'Moor. Aether-Dichte: 340% des Normalwerts. Für normale Menschen tödlich. Für mich wie ein warmes Bad.

Tief im Sumpf: Eine Hütte aus lebenden Bäumen. Und davor — eine Frau. Auf den Knien. Hände in der Erde. Silberweißes Haar. Spitze Ohren. Jadegrüne Augen mit goldenen Ringen.

Sie summte.

Und ich KANNTE dieses Lied.

Es war dasselbe Lied, das meine Mutter sang. Die alten Worte. Die Melodie, die keine System-Magie war, sondern etwas TIEFERES.

»Dreihundert Jahre habe ich gewartet. Du riechst wie die Welt, BEVOR sie in Ketten gelegt wurde.«

Sie stand auf. Ihre Augen trafen meine. Und in der Art, wie ihr Blick durch meine Oberfläche hindurchging — erinnerte sie mich an Elena.

»Du bist die Anomalie. Die Null.«

»Und du bist Aria Moonsong. Die verbannte Priesterin.«

»Das Lied, das du gerade gesungen hast. Meine Mutter singt es auch.«

Aria STOPPTE. Ihre Augen weiteten sich.`,

 text2: `»Deine Mutter... singt es? Das alte Lied?«

»Teilweise. Die ersten Zeilen in Common. Dann wechselt sie in etwas Älteres. Sie weiß nicht, was es ist.«

»Ich habe dieses Lied einer Menschenfrau beigebracht. Vor hundertzfünfzig Jahren. Eine Wanderin, die sich in den Sumpf verirrte. Ich heilte sie. Sie blieb drei Monate.«

Pause.

»Diese Frau war die Urgroßmutter deiner Mutter. Ich erkenne das Blut. Das elfische Fragment. Mein Geschenk an sie — ein winziger Tropfen meines eigenen Aethers, eingewoben in ihren Blutkreislauf.«

»Du bist... der Ursprung. Das Elfenblut meiner Mutter. Es kam von DIR.«

Arias Augen wurden feucht.

»Jedes Lied ist ein Same. Ich pflanzte einen vor hundertfünfzig Jahren. Und jetzt... steht die Frucht vor mir.«

Sie trat vor. Legte ihre Hand auf meine Wange — sanft, mütterlich.

»Du hast ihre Augen. Nicht die Farbe — die TIEFE.«

Nach langer Erklärung meiner Mission — die Nullen, das Update, die Wahrheit — saß Aria mit Tee.

»Du willst das System nicht ZERSTÖREN. Du willst es... verändern?«

»Oder ersetzen. Ich weiß noch nicht genau. Aber BLEIBEN kann es nicht wie es ist.«

»Dreihundert Jahre habe ich gewartet. Nicht auf einen HELDEN. Sondern auf jemanden, der VERSTEHT und FÜHLT. Septimas Brief sagt: 'Verstehen allein reicht nicht. Fühlen allein reicht nicht.' Hast du BEIDES, Null?«

»...Ich versuche es.«

»Dann versuche ich es mit dir.«`,

 // [AF] Aria — tiefster möglicher Bond in Akt IV
 choices: [
 {
 text: "A) »Ich brauche eine Heilerin.«",
 desc: "[AF+Aria+15] Professionell. Aria: »342 Jahre Heilerin. Das reicht als Qualifikation.«",
 next: "a4k7_lilithia",
 affinityEffect: { aria: 15 }, // Aria als Aldwin-Nachfolger-Slot
 alignEffect: { ordnung: 1 },
 flagEffect: { ariaAllianz: true, ariaZugang: "heilerin" },
 narrativeFeedback: "Aria nickt. Sachlich. Aber ihre Augen lächeln, wo ihr Mund es nicht tut.",
 },
 {
 text: "B) »Ich brauche jemanden, der mir Wilde Magie WIRKLICH beibringt. Du bist die Meisterin.«",
 desc: "[AF+Aria+20] Mentor-Bond + stärkeres Wilde-Magie-Training.",
 next: "a4k7_lilithia",
 affinityEffect: { aria: 20 },
 alignEffect: { licht: 1, chaos: 3 },
 flagEffect: { ariaAllianz: true, ariaZugang: "mentor" },
 narrativeFeedback: "Aria lächelt — stolz, aber demütig. »Ich bin eine Schülerin des Aethers. Seit 342 Jahren. Aber ich kann dir zeigen, was er mir gezeigt hat.«",
 },
 {
 text: "C) »Meine Mutter singt dein Lied. Seit Generationen. Es hat mich in meinem ersten Jahr in den Schlaf gewiegt. Es war das Erste, das sich wie ZUHAUSE anfühlte.«",
 desc: "[AF+Aria MAX] Aria weint. Zum ersten Mal seit sie nicht mehr weiß wie lange. Sie wird nicht nur Null-Ziffer — sie wird Großmutterfigur.",
 next: "a4k7_lilithia",
 affinityEffect: { aria: 35 },
 alignEffect: { licht: 2 },
 flagEffect: { ariaAllianz: true, ariaZugang: "familie" },
 narrativeFeedback: "Aria weint lautlos. »...Mein Lied hat ein Kind in den Schlaf gewiegt. Über Generationen hinweg.« Sie öffnet die Arme — nicht als Bündnispartnerin. Als Großmutter.",
 },
 ]
 },

 // ════ KAPITEL 27: LILITHIA ══════════════════════════════════════════════

 a4k7_lilithia: {
 act: "AKT IV",
 chapter: "Kapitel 27 — Diplomacy.Demon()",
 title: "Lilithia von Drak'Moor",
 scene: "Verlassene Grenzfestung — Alter: 17 Jahre",
 conditionalFlag: "seraVaterWahrheit",
 textConditional: { kaito_erzaehlt: `Sera wusste schon. Als Lilithia Varkos nannte beobachtete ich sie. Sie bewegte sich nicht. Mehr Kontrolle als erwartet.`, spaeter: `Sera hatte keine Ahnung. Einmal dachte ich: schweigen. Ich verwarf es sofort.`, default: `` },
 bg: "night",
 music: "theme_mystery",
 text: `Das geheime Treffen. Veyra hatte es arrangiert — über sechs Mittelsleute, drei gefälschte Identitäten und eine Nachricht, die in einem Kuchen versteckt war.

Mitternacht. Die Festung. Mondlicht.

Lilithia von Drak'Moor war nicht das, was ich erwartet hatte.

Ich hatte eine Kriegerin erwartet. Was ich sah, war eine Frau, die MÜDE aussah. Dunkle Haut mit violettem Schimmer, weißes Haar, rote Augen, elegante Hörner, ein dünner Schwanz, den sie um ihr Handgelenk gewickelt trug wie ein Armband.

Und unter der Schönheit: Narben im Aether. Narben aus 189 Jahren Verrat und nie erfüllter Hoffnung.

»...Du bist die berühmte 'Null'? Ich bin durch feindliches Territorium gereist, habe mein Leben riskiert, und treffe... einen Jungen.«

»Einen Jungen, der das System lesen kann. Der weiß, dass das System dein Volk als 'Antagonisten-Rasse' eingestuft hat. Nicht weil ihr böse seid, sondern weil das System eine BÖSE SEITE BRAUCHT.«

Lilithias rote Augen wurden WEIT.

»Jeder Dämon erhält bei der Geburt automatisch negative Titel — 'Unheilsbringer', 'Dunkle Seele', 'Systemfeind'. Das senkt seine Stats. Verringert seine Chancen. Dein Volk wird nicht unterdrückt weil es schwach ist. Es wird unterdrückt, weil das System einen FEIND braucht, um die Menschen zu kontrollieren.«

»...Hundertneunundachtzig Jahre. So lange sage ich GENAU DAS. Und keiner. Hat. Mir. GEGLAUBT.«`,

 text2: `Sie setzte sich. Schwer. Auf einen zerbrochenen Stein. Ihre makellosen Hände ZITTERTEN.

»Sag mir, was du willst, Null. Und sag mir, warum ich dir vertrauen sollte.«

»Ich will eine Allianz. Die Nullen und deine Fraktion. Im Schatten. Und ich gebe dir: Code-Beweis. Ich kann dir den System-Code zeigen, der jedem Dämon bei der Geburt [Unheilsbringer] aufzwingt. Es ist EINE ZEILE CODE. Nicht Natur. Nicht Schicksal. EINE Zeile.«

Lilithia lachte. Nicht fröhlich. BEFREIT. Wie jemand, der ein Geständnis hört, auf das er sein ganzes Leben gewartet hat.

»Eine Zeile Code. Das gesamte Leid meines Volkes — 3.000 Jahre Krieg — basiert auf EINER ZEILE CODE.«

Sie stand auf. Streckte die Hand aus.

»Du hast deine Allianz. Aber unter einer Bedingung.«

»Welche?«

»Wenn du das System änderst — dann löschst du ALLE Zeilen, die mein Volk in Ketten legen. Nicht nur die Titel. ALLES. Mein Volk verdient Gleichheit. Nicht Gnade — GLEICHHEIT.«

Dann — beiläufig — eine Bombe:

»Du hast eine Freundin namens Sera Blackwood.«

Ich erstarrte.

»Ich weiß, wer ihr Vater ist. General Varkos der Verwüster. Er hat Sera vor achtzehn Jahren in jenem Menschendorf ausgesetzt — nicht aus Grausamkeit, sondern als SCHUTZ. In Drak'Moor wäre ein Mischlingskind getötet worden. Er fragt nach ihr. Jeden Monat. Er liebt sie. Auf seine Art.«`,

 // [SC] Dämonen-Allianz + [SC] Sera-Wahrheit
 choices: [
 {
 text: "A) »Versprochen. Gleichheit. Für alle Rassen.« + »Ich sage es Sera. Sie hat ein Recht auf die Wahrheit.«",
 desc: "[SC] [AF+Lilithia+25] Volle Allianz. Sera-Wahrheit wird Kaito erzählen. Explosive Szene in Akt V.",
 next: "a4k8_irondeep2",
 affinityEffect: { lilithia: 25 },
 alignEffect: { licht: 2 },
 flagEffect: { daemonenAllianz: true, seraVaterWahrheit: "kaito_erzaehlt" },
 narrativeFeedback: "Lilithia schüttelt deine Hand. Fest. Endgültig. Ihre roten Augen sind feucht. »Ein ehrlicher Mensch. Und ein mutiger. Das ist selten.«",
 },
 {
 text: "B) »Ich kann dir nicht ALLES versprechen. Aber ich werde es VERSUCHEN.« + Seras Wahrheit: »Noch nicht. Sie ist nicht bereit.«",
 desc: "[SC] [AF+Lilithia+20] Ehrliche Allianz. Vorsichtiger Pfad. Die Wahrheit kommt im schlechtesten Moment heraus (Akt V).",
 next: "a4k8_irondeep2",
 affinityEffect: { lilithia: 20 },
 alignEffect: { ordnung: 1 },
 flagEffect: { daemonenAllianz: true, seraVaterWahrheit: "spaeter" },
 narrativeFeedback: "Lilithia: »Ein ehrlicher Mensch. Das ist selten.« Die Allianz ist kleiner — aber echter.",
 },
 {
 text: "C) »Gleichheit — und eine Entschuldigung von der gesamten Menschheit.« + »Nicht ich. VARKOS soll es Sera sagen. Persönlich.«",
 desc: "[SC] [AF+Lilithia MAX+30] Stärkster Bond. Das Vater-Tochter-Treffen wird in Akt V arrangiert — die emotionalste Szene des Spiels.",
 next: "a4k8_irondeep2",
 affinityEffect: { lilithia: 30 },
 alignEffect: { licht: 2 },
 flagEffect: { daemonenAllianz: true, seraVaterWahrheit: "varkos_treffen" },
 narrativeFeedback: "Lilithia ERSTARRT. Niemand hat je — in 3.000 Jahren — eine Entschuldigung angeboten. »Du meinst es ernst.« Keine Frage.",
 },
 ]
 },

 // ════ KAPITEL 28: EBENE 25-30 + VOID-WÄCHTER ═══════════════════════════

 a4k8_irondeep2: {
 act: "AKT IV",
 chapter: "Kapitel 28 — Deep.Dive.Two()",
 title: "Ebene 25–30 — Der Void-Wächter",
 scene: "Irondeep-Labyrinth, zweite Expedition",
 bg: "void",
 music: "theme_training",
 text: `Zweite Expedition. Kaito, Ren, Rex (jetzt 4,5 Meter — in vier Monaten um 50% gewachsen).

Ebene 23-25 — System-Stabilität: 30%. Monster: Prä-systemische Bestien. Void-Fragmente. Lebende Glitches. Die Wände enthielten Botschaften von TERTIUS:

»Ebene 24: Ich habe mich hier begraben, weil ich nicht mehr TEIL davon sein konnte. Was wir erschufen, sollte HELFEN. Stattdessen haben wir eine Welt in einen Käfig gesperrt. Wer auch immer dies liest — ich bin auf Ebene 33. Komm. Und bring FRAGEN mit.«

Ebene 26-30 — System-Stabilität: 5%. Das System existiert hier kaum noch. Die Realität ist RAW. Ungefiltert. Farben, die es im System nicht gibt. Kreaturen ohne Stats — sie existieren einfach, frei, wild, lebendig.

Und dann: Ebene 30. Eine Höhle so groß wie eine Kathedrale. Der Boden aus flüssigem Aether.

In der Mitte: EIN WESEN. Dreißig Meter hoch. Aus Stein und Kristall und etwas dazwischen. Vier Arme. Keine Gesicht — nur zwei leuchtende Augen.

»HALT.«`,

 text2: `»DU TRÄGST DAS ZEICHEN DER SIEBTEN. ABER DU BIST NICHT SIE.«

»Nein. Ich bin nicht Septima. Aber sie hat mich geschickt.«

»SIE IST VERSCHWUNDEN. VOR 3.000 EURER UMLÄUFE. WAS WILLST DU, FRAGMENT?«

»Passage. Zu Ebene 33. Zu Tertius.«

»DREI PRÜFUNGEN. SO LAUTET DIE REGEL, DIE TERTIUS GESETZT HAT.«

»ERSTE PRÜFUNG: WAHRHEIT. WAS IST DAS SYSTEM?«

»Ein Programm. Geschrieben von sieben Wesen, die eine Welt kontrollieren wollten, weil sie Angst hatten, sie zu VERLIEREN. Es ist kein Geschenk. Es ist ein Käfig.«

»...AKZEPTIERT.«

»ZWEITE PRÜFUNG: MITGEFÜHL. WARUM WILLST DU DAS SYSTEM VERÄNDERN?«`,

 // [AL] Prüfung des Wächters — definiert Kaitos Kern für Akt V/VI
 choices: [
      {
        text: "A) »Für die Menschen, die ich liebe. Meine Familie. Meine Freunde. Die Nullen.«",
        desc: "Ein kleiner Grund. Aber ein wahrer.",
        next: "a4k8_wächter_opfer",
        alignEffect: { licht: 2 },
        flagEffect: { waechterAntwort: "persoenlich" },
        narrativeFeedback: "»EIN KLEINER GRUND. ABER EIN WAHRER.« Die Augen des Wächters werden warm — soweit ein dreißig Meter großes Konstrukt das kann.",
      },
      {
        text: "B) »Für ALLE. Für jede Rasse, jedes Wesen, das vom System in eine Box gesteckt wurde.«",
        desc: "Ein großer Grund. Aber hast du die Kraft, ihn zu tragen?",
        next: "a4k8_wächter_opfer",
        alignEffect: { ordnung: 2, licht: 1 },
        flagEffect: { waechterAntwort: "universal" },
        narrativeFeedback: "»EIN GROSSER GRUND.« Eine lange Pause. »ABER HAST DU DIE KRAFT, IHN ZU TRAGEN?« Kaito: »Das werde ich herausfinden.« — »AKZEPTIERT.«",
      },
      {
        text: "C) »Weil das System BLIND ist. Ich will ihm AUGEN geben.«",
        desc: "Ein philosophischer Grund. Der Wächter kennt diesen Grund — von Septima.",
        next: "a4k8_wächter_opfer",
        alignEffect: { chaos: 4 },
        flagEffect: { waechterAntwort: "philosophisch" },
        narrativeFeedback: "Ein langes Schweigen. »...SEPTIMA HAT DASSELBE GESAGT.« Dann, leiser: »DER KERN HAT EIN HERZ. FIND ES.«",
      },
      {
        text: "D) »Weil jemand es tun muss. Und niemand sonst kann es sehen.«",
        desc: "Pflicht ohne Leidenschaft. Traurig, aber ehrlich.",
        next: "a4k8_wächter_opfer",
        alignEffect: { schatten: 1, ordnung: 1 },
        flagEffect: { waechterAntwort: "pragmatisch" },
        narrativeFeedback: "»PFLICHT OHNE LEIDENSCHAFT IST... TRAURIG. ABER EHRLICH.« Akzeptiert.",
      },
      {
        text: "E) »Weil ich es kann. Ich bin der Einzige mit dieser Fähigkeit.«",
        desc: "Ego. Macht. — Das ist die falsche Antwort.",
        next: "a4k8_prüfung1_versagt",
        alignEffect: { schatten: 3, chaos: 1 },
        flagEffect: { waechterAntwort: "macht", waechterVersagt: true },
        narrativeFeedback: "Der Wächter schweigt. Lange. Dann: »DAS IST NICHT GENUG.«",
      },
    ]
 },

 a4k8_prüfung1_versagt: {
    act: "AKT IV", chapter: "Kapitel 28 — Irondeep.Final()", title: "Zurückgewiesen",
    scene: "Irondeep, Ebene 30 — Wächter-Kammer",
    bg: "void", music: "theme_void_terminal",
    text: `Der Wächter antwortete nicht sofort.

Dreißig Sekunden. Dann:

»NEIN.«

»Was?«

»JEMAND DER KÄMPFT WEIL ER KANN, NICHT WEIL ER MUSS — DER KÄMPFT FÜR SICH. DAS SYSTEM BRAUCHT KEINEN KÄMPFER FÜR SICH.«

Der Durchgang blieb geschlossen.

»DU KANNST ZURÜCKKEHREN. WENN DU WEISST, WARUM DU WIRKLICH HIER BIST.«

Kaito stand vor der geschlossenen Mauer.

Das Terminal: \`[Prüfung 1: NICHT BESTANDEN. Neuversuch möglich.]\`

Er drehte sich um. Stieg zurück. Kämpfte sich durch die unteren Ebenen — die Prä-System-Wesen wichen ihm aus, als wäre er markiert.

An der Oberfläche: Ren, der wartete.

»Nicht bestanden?«

»Nicht bestanden.«

»Was wirst du tun?«

»Herausfinden, warum ich wirklich hier bin.«`,
    choices: [
      { text: "→ Neuversuch — nach Reflexion",
        next: "a4k8_irondeep2",
        alignEffect: { licht: 1 },
        flagEffect: { waechterVersagt: false },
      },
    ],
  },

  a4k8_wächter_opfer: {
    act: "AKT IV", chapter: "Kapitel 28 — Irondeep.Final()", title: "Die dritte Prüfung",
    scene: "Irondeep, Ebene 30 — Wächter-Kammer",
    bg: "void", music: "theme_void_terminal",
    text: `»DRITTE PRÜFUNG: OPFER.«

Aus dem flüssigen Aether-Boden stiegen BILDER. Projektionen aus purer Energie.

Die Nullen. Gorrick am Amboss. Veyra im Schatten. Aria im Garten. Ren, flackernd. Rex, schlafend.

Und: Elena, die sang. Roland, der trainierte. Mira, die lachte. Finn, der kämpfte. Sera, die brannte.

Und: Akira, Schwert in der Hand. Emma, Bogen gespannt. Dmitri, Schild erhoben. Yuki, leuchtend.

»DAS SYSTEM ZU VERÄNDERN KOSTET. NICHT MÜNZEN. NICHT MACHT. SONDERN DAS, WAS DIR AM MEISTEN BEDEUTET.«

»BIST DU BEREIT, ALLES ZU VERLIEREN?«

Die Bilder leuchteten. Alle Gesichter gleichzeitig.`,
    choices: [
      {
        text: "JA — »Ja. Alles. Wenn es sein muss.«",
        desc: "Du sagst ja. Das klingt nach Stärke. Aber der Wächter kennt den Unterschied.",
        next: "a4k8_opfer_ja",
        alignEffect: { licht: 1, ordnung: 1 },
        flagEffect: { opferAntwort: "ja" },
      },
      {
        text: "NEIN — »Nein. Das ist nicht der Punkt.«",
        desc: "Du sagst nein. Du weißt warum. Kannst du es erklären?",
        next: "a4k8_opfer_nein",
        alignEffect: { licht: 2 },
        flagEffect: { opferAntwort: "nein" },
      },
      {
        text: "SCHWEIGEN — Du sagst nichts. Schaust auf die Bilder.",
        desc: "Keine Antwort ist auch eine Antwort. Der Wächter wartet.",
        next: "a4k8_opfer_schweigen",
        alignEffect: { schatten: 1, verborgenheit: 1 },
        flagEffect: { opferAntwort: "schweigen" },
      },
    ],
  },

  a4k8_opfer_ja: {
    act: "AKT IV", chapter: "Kapitel 28 — Irondeep.Final()", title: "»Ja.«",
    scene: "Irondeep, Ebene 30",
    bg: "void", music: "theme_void_terminal",
    text: `Der Wächter wartete einen Moment nach dem Ja.

»INTERESSANT.«

»VIELE SAGEN JA. WENIGE MEINEN ES. NOCH WENIGER VERSTEHEN WAS ES BEDEUTET.«

»WENN DU ALLES VERLIERST — ELENA, ROLAND, MIRA, FINN, SERA, DIE NULLEN — WEN KÄMPFST DU DANN FÜR?«

Eine Pause.

»FÜR WEN, KAITO ASHFORD?«

Das war keine rhetorische Frage. Der Wächter wartete auf eine Antwort.

Und Kaito merkte: er hatte keine.

»...«

»DAS DACHTE ICH MIR.«

Der Durchgang öffnete sich einen Spalt. Halb.

»DU BIST EHRLICH. DAS GENÜGT FÜR JETZT. ABER DENK DARÜBER NACH, BEVOR DU EBENE 33 ERREICHST.«`,
    choices: [{ text: "→ Fortschritt", next: "a4k8_fortschritt" }],
    systemBox: {
      title: "VOID-TERMINAL",
      lines: ["> Prüfung 3: BEDINGT BESTANDEN", "> Status: Ehrlichkeit anerkannt", "> Warnung: Antwort unvollständig", "> Empfehlung: Vor Ebene 33 klären."],
    },
  },

  a4k8_opfer_nein: {
    act: "AKT IV", chapter: "Kapitel 28 — Irondeep.Final()", title: "»Nein.«",
    scene: "Irondeep, Ebene 30",
    bg: "void", music: "theme_void_terminal",
    text: `Stille.

Dreißig Sekunden. Fünfzig. Die Projektionen brannten.

»...ERKLÄRE.«

»Ich bin NICHT bereit, alles zu verlieren. Das ist der Punkt. Ich kämpfe nicht TROTZ der Menschen, die ich liebe. Ich kämpfe WEGEN ihnen. Wenn ich sie verliere, gibt es nichts mehr, wofür es sich lohnt zu kämpfen.«

»Wenn deine Prüfung verlangt, dass ich bereit bin, alles aufzugeben — dann bestehe ich sie nicht. Und das ist mir egal.«

Der Wächter starrte ihn an.

»...DAS WAR DIE RICHTIGE ANTWORT.«

»TERTIUS WOLLTE KEINEN HELDEN, DER ALLES OPFERT. ER WOLLTE JEMANDEN, DER KÄMPFT, OHNE SICH SELBST ZU VERLIEREN.«

»PASSIERE.«

Der Durchgang öffnete sich — vollständig.`,
    choices: [{ text: "→ Fortschritt", next: "a4k8_fortschritt" }],
    alignEffect: { licht: 2 },
    flagEffect: { opferRichtigeAntwort: true },
    systemBox: {
      title: "VOID-TERMINAL",
      lines: ["> Prüfung 3: BESTANDEN ✓", "> Tertius-Zugang: FREIGESCHALTET", "> Anmerkung: 'Die richtige Antwort ist die, die du meinst.'"],
    },
  },

  a4k8_opfer_schweigen: {
    act: "AKT IV", chapter: "Kapitel 28 — Irondeep.Final()", title: "Schweigen",
    scene: "Irondeep, Ebene 30",
    bg: "void", music: "theme_void_terminal",
    text: `Kaito schwieg.

Schaute auf Elena. Auf Mira. Auf Gregor — der nicht mehr da war, aber irgendwie trotzdem in jedem Gesicht steckte.

Der Wächter wartete.

Eine Minute. Zwei.

»...DU ANTWORTEST NICHT.«

»Ich denke nach.«

»DENKEN IST KEINE ANTWORT.«

»Noch nicht.«

Stille. Dann — sehr leise, für ein dreißig Meter großes Konstrukt:

»...DAS WERDE ICH AKZEPTIEREN.«

»JEMAND DER NICHT VORSCHNELL ANTWORTET, WENN DIE FRAGE SCHWER IST — DAS IST SELTEN. UND RICHTIG.«

»GEHE. DENKE WEITER. EBENE 33 WIRD DIE ANTWORT VERLANGEN.«

Der Durchgang öffnete sich — schmal, aber offen.`,
    choices: [{ text: "→ Fortschritt", next: "a4k8_fortschritt" }],
    alignEffect: { ordnung: 1, schatten: 1 },
    flagEffect: { opferAntwort: "schweigen_akzeptiert" },
    systemBox: {
      title: "VOID-TERMINAL",
      lines: ["> Prüfung 3: AKZEPTIERT", "> Status: Offene Frage", "> Tertius-Zugang: FREIGESCHALTET (bedingt)"],
    },
  },

  a4k8_fortschritt: {
    act: "AKT IV", chapter: "Kapitel 28 — Irondeep.Final()", title: "Rückkehr",
    scene: "Irondeep, Ebene 30 → Oberfläche",
    bg: "void", music: "theme_void_terminal",
    text: `Hinter dem Wächter: eine Treppe, die TIEFER führte. In Dunkelheit, die nicht bedrohlich war, sondern einladend.

Ebene 31. 32. 33.

Tertius.

Aber das musste warten. Der Körper brauchte Erholung. Das Team brauchte ihn. Die Dinge an der Oberfläche mussten zuerst geregelt werden.`,
    systemBox: {
      title: "VOID-TERMINAL — FORTSCHRITT",
      lines: [
        "> Labyrinth-Fortschritt: Ebene 30/37",
        "> Zugang zu Ebene 31+: FREIGESCHALTET",
        "> Tertius (Ebene 33): ERREICHBAR",
        ">",
        "> Zeit bis System-Update: 2 Jahre, 1 Monat.",
      ],
    },
    choices: [{ text: "→ Kapitel 29: Die Puristen schlagen zu", next: "a4k9_puristen" }],
  },

 

 a4k9_puristen: {
 act: "AKT IV",
 chapter: "Kapitel 29 — Alert.Purge()",
 title: "Die Puristen schlagen zu",
 scene: "Verbotener Turm — Alter: 17,5 Jahre",
 bg: "chaos",
 music: "theme_training",
 text: `Ein Dienstagmorgen. Gorrick briet Eier. Veyra sortierte Berichte. Aria meditierte. Rex schlief auf dem Dach. Ren stand an einer Wand und flackerte.

Ich las einen Brief von Finn: »Level 31! Rang C! Paladin! Mira ist jetzt 12 und hat sich heimlich eine LANZE besorgt. Elena sagt, sie kommt nach dir. Wann kommst du nach Hause?«

»FEINDE! VIELE! MENSCHEN IN SCHWARZER RÜSTUNG! SIE KOMMEN!«

Rex vom Dach.`,

 systemBox: {
 title: "VOID-TERMINAL — ALARM",
 lines: [
 "> 15 Entitäten — Entfernung: 500m",
 "> Level-Bereich: 35-65",
 "> Anführer: Level 72 — Schwertmeister",
 ">",
 "> IDENTIFIKATION:",
 "> Einheit: »DIE PURISTEN«",
 "> Kommandant: LEUTNANT GRAVES",
 "> (Untergebener von General Kross)",
 ">",
 "> BEDROHUNGSLEVEL: EXTREM",
 ">",
 "> WIE HABEN SIE UNS GEFUNDEN?",
 "> → Physisches Aether-Messgerät.",
 "> → Kein System-Scan — MANUELLE Suche.",
 "> → Kross ist kein Fanatiker. Er ist ein SOLDAT.",
 ">",
 "> OPTIONEN: Evakuierung oder Kampf.",
 ]
 },

 text2: `»EVAKUIERUNG. PLAN GAMMA. JETZT.«

Plan Gamma lief fast perfekt. Gorricks Runen versiegelten die Werkstatt. Veyras Illusion machte den Turm unsichtbar. Der Untergrundtunnel war frei.

Aber die Puristen hatten ein physisches Aether-Messgerät. Der unsichtbare Turm leuchtete in Aether-Sicht wie ein Leuchtturm.

Leutnant Graves. Level 72. Kalt. Professionell.

»Der Aether-Scanner zeigt eine massive Anomalie. Hier. GENAU hier. Illusion. Eine gute. Aber nicht gut genug.«

Ein Hieb — sein System-Schwert zerschlug die Illusion. Der Turm wurde sichtbar.

Rex, via Aether-Verbindung: »Rex sieht sie! Fünfzehn böse Menschen! Rex soll BRATEN?«`,

 // [SC] Taktische Entscheidung — Konsequenzen für Akt V
 timedDecision: true,
 timedSeconds: 8,
 timedDefault: 1, // Bei Timeout: Evakuierung

 choices: [
 {
 text: "A) »Rex — halte sie auf. Nicht töten. ABSCHRECKEN.«",
 desc: "[SC] Rex entfesselt natürliches Drachenfeuer. Puristen zurückgetrieben. ABER: Rex wird gesehen. Kross weiß jetzt: Die Nullen haben einen Drachen. -Verborgenheit MASSIV.",
 next: "a4k9_nachwirkungen",
 affinityEffect: { kross: 10 }, // Rex-Erfahrung
 alignEffect: { licht: 1, verborgenheit: -4 },
 flagEffect: { puristenKampf: "rex", turmStatus: "kompromittiert" },
 narrativeFeedback: "Rex wächst auf volle Größe. 4,5 Meter Kobaltdrache. Natürliches Feuer — kein System-Feuer — trifft die Puristen wie ein Urteil. Graves überlebt. Mit Verbrennungen.",
 },
 {
 text: "B) »Alle raus. Den Turm sprengen.«",
 desc: "[SC] Gorricks Runen als Selbstzerstörung. Sicher — keine Verluste. ABER: Der Turm ist verloren. Alle Materialien, die nicht versiegelt wurden, sind weg.",
 next: "a4k9_nachwirkungen",
 alignEffect: { chaos: 3 },
 flagEffect: { puristenKampf: "flucht", turmStatus: "zerstoert" },
 narrativeFeedback: "Der Turm implodiert. Lautlos. Die Puristen stehen vor einem leeren Krater. »Ein Gebäude kann man ersetzen«, sagst du. »EUCH nicht.«",
 },
 {
 text: "C) »Ich halte sie auf. Allein.«",
 desc: "[SC] Kaito gegen Graves (Level 72). Kein fairer Kampf. Void-Skills, Void-Dolch, Turm als Waffe. Erfolg hängt von bisherigen Entscheidungen ab.",
 next: "a4k9_nachwirkungen",
 alignEffect: { schatten: 2, chaos: 2 },
 flagEffect: { puristenKampf: "solo", turmStatus: "sicher" },
 narrativeFeedback: "Du trittst vor. Kein System-Level. Kein Status. Nur Void-Skills und ein Dolch, den das System nicht sehen kann. Graves mustert dich. »Ein Kind.« »Ein Kind, das deinen Code liest.«",
 },
 {
 text: "D) KOMPROMISS — Veyra tarnt den Turm als harmlose alte Ruine.",
 desc: "[SC] [AF+Veyra+15] Der Turm wird zu »Alten Ruinen, harmlos«. Erfolgschance 65%. Wenn gelingt: Turm sicher. Wenn scheitert: automatisch Pfad B.",
 next: "a4k9_nachwirkungen",
 affinityEffect: { celeste: 15 },
 alignEffect: { ordnung: 2 },
 flagEffect: { puristenKampf: "tarnung", turmStatus: "riskiert" },
 narrativeFeedback: "Veyra atmet tief durch. Dann: Der Turm verändert sich. Nicht unsichtbar — alt. Verlassen. Harmlos. Graves' Messgerät zeigt Aether — aber Veyra erklärt es sachlich als »Natürliche Anomalie«.",
 },
 ]
 },

 a4k9_nachwirkungen: {
 act: "AKT IV",
 chapter: "Kapitel 29 — Nachwirkungen",
 title: "Wir müssen uns verändern",
 scene: "Verbotener Turm oder neuer Standort",
 conditionalFlag: "turmStatus",
 textConditional: { zerstoert: `Gorrick stand vor dem Schutthaufen, sagte nichts. Dann: »Wir bauen einen neuen.« — »Besser. Diesmal ohne die kaputten Runen.«`, solo: `Mein linker Arm funktionierte drei Tage nicht. Gorrick sagte nichts. Er wusste was das bedeutete.`, tarnung: `Dreißig Puristen durchsuchten alles. Fanden nichts. Jetzt verstand ich warum Veyra die Beste war.`, default: `` },
 bg: "night",
 music: "theme_void_terminal",
 text: `Das war knapp gewesen. Zu knapp.

Die Puristen hatten uns fast gefunden. Nicht durch System-Scans. Sondern durch PHYSISCHE NACHFORSCHUNG. Menschen mit Augen, Beinen und Aether-Scannern.

Ich hatte einen Fehler gemacht: Ich hatte mich darauf verlassen, dass System-Unsichtbarkeit genügte. Aber General Kross war kein System-Fanatiker. Er war ein SOLDAT. Und Soldaten suchten nicht nur mit Magie. Sie suchten mit VERSTAND.

»Wir müssen uns verändern. Wir waren eine Gruppe im Verborgenen. Das reicht nicht mehr. Wir brauchen STRUKTUR. Ein NETZWERK. Nicht nur uns sechs — sondern Augen und Ohren in jeder Stadt, jedem Dorf, jeder Fraktion.«

Veyra: »Ich habe die Kontakte. Aber Kontakte sind keine MITGLIEDER.«

»Dann machen wir sie zu Mitgliedern. Die Variablen — Agenten, die nicht zur Kerngruppe gehören, aber für uns arbeiten. Und die Konstanten — Sympathisanten, die uns unterstützen, ohne es offen zu zeigen.«

Gorrick: »Klingt nach einer verdammten GEHEIMGESELLSCHAFT.«

»Genau das ist es.«`,

 choices: [{ text: "→ Kapitel 30: Das Wiedersehen", next: "a4k10_wiedersehen" }],
 },

 // ════ KAPITEL 30: DAS WIEDERSEHEN ═══════════════════════════════════════

 a4k10_wiedersehen: {
 act: "AKT IV",
 chapter: "Kapitel 30 — Return.Hero()",
 title: "Die alte Brücke",
 scene: "Brücke über den Eisfluss — Vollmond, Alter: 18 Jahre",
 conditionalFlag: "finnImKampf",
 textConditional: { echtes_schwert: `Finn zog das echte Schwert — gehalten genau wie ich es ihm gezeigt hatte. »Ich habe geübt. Roland hat geholfen.«`, geblieben: `»Ich hatte Angst und bin trotzdem geblieben.« Keine Entschuldigung. Nur die Feststellung.`, gegangen: `Finn sagte nichts über Millheim. Er schaute einmal auf sein Schwert, dann weg. Er war hier. Das zählte.`, default: `` },
 bg: "night",
 music: "theme_family",
 text: `Akiras Brief kam über Veyras Netzwerk.

»Null. Wir müssen reden. DRINGEND.

Emma hat die offiziellen Berichte analysiert — gefälscht. Die Dämonen greifen NICHT an. Es gibt KEINEN Krieg. Die Kirche ERFINDET Konflikte.

Dmitri hat drei Monate an der Grenze verbracht. Kein einziger Angriff. Aber die Kirche meldet 'ständige Gefechte'.

Und Yuki... Yuki wird schwächer. Tag für Tag. Ihre Hände zittern. Ihre Magie ist instabil.

Du hast gesagt, du wüsstest was es ist. Du hast gesagt, du findest eine Lösung.

BITTE finde sie schnell.

— Akira.
P.S.: Ich habe den dritten Hieb geändert. Diagonal von LINKS oben. Du hattest recht.«

Vollmond. Die alte Brücke. Mondlicht.

Auf der anderen Seite: VIER GESTALTEN.

Drei Jahre. Seit dem Dach der Akademie. Seit den Versprechen. Seit dem Sprung in die Nacht.`,

 text2: `Akira war GRÖSSER. Level 71. Sein Schwert strahlte, als würde es atmen.

Emma trug jetzt eine Brille. Level 65. Notizbucher dabei. Natürlich.

Dmitri war ein BERG. Level 68. Er stand leicht vor Yuki. Beschützend.

Und Yuki... Yuki war DÜNNER. Blasser. Ihre Hände zitterten leicht. Level 62. Aber etwas an ihr war WENIGER. Als würde sie von innen verblassen.

Der Timer lief. In drei Jahren fünfzehn Lebensjahre verloren. Rechnerisch noch fünf. Vielleicht weniger.

Mir wurde kalt. Nicht vom Wind.

»Du hast dich verändert.«

»Du auch. Ist das ein Bart?«

»Ein ANSATZ eines Bartes. Emma sagt, er sieht aus wie ein betrunkener Igel.«

»Weil er das TUT.«

Dmitri — er hielt die Steinhälfte hoch. Ich hielt meine hoch. Er lächelte. Zum zweiten Mal, seit ich ihn kannte.

Und dann Yuki. Kleiner. Blasser. Aber ihre Augen — als sie mich sahen — LEUCHTETEN. Menschlich. Nicht magisch.

»...Du bist da.«

»Ich bin da.«

»Du hast versprochen—«

»Ich weiß. Und ich habe eine Lösung. Nicht perfekt. Nicht sofort. Aber REAL.«

Yukis Augen — die in zwei Welten nur Ablehnung gesehen hatten — füllten sich mit Tränen. Sie nickte. Einmal.

Dann: Feuer. Rex materialisierte sich als 4,5-Meter-Drache hinter mir.

»Du hast einen DRACHEN?!«

»Maskottchen.«

»Rex ist KEIN Maskottchen!«

Kaito erzählte alles. Die Nullen. Das System-Programm. Das Update in zwei Jahren. Yukis Timer. Die gefälschten Berichte. Die Wahrheit.`,

 text3: `»Wir sind WERKZEUGE. Die Kirche hat uns BENUTZT.«

Emma, leise, aber kalt: »Drei Jahre lang gegen einen UNSICHTBAREN Feind, weil die Kirche es so WOLLTE.«

Dmitri sagte nichts. Sein Schild leuchtete — vor Wut, vor Schutzinstinkt.

Und Yuki — zum ersten Mal STARK, nicht zitternd:

»Ich sterbe NICHT. Nicht bevor wir das hier beendet haben. Ich habe fünf Jahre? Gut. Dann haben wir ZWEI Jahre. Bis zum Update.«

Sie stand auf. Klein. Blass. Unerschütterlich.

»Ich bin es LEID, das schwache Mädchen zu sein. Ich habe [Mana-Overflow]. Das mächtigste Mana in dieser Welt. Und wenn ich schon STERBE—«

Ihre Augen leuchteten — blau, tief, GEFÄHRLICH.

»—dann werde ich verdammt nochmal sicherstellen, dass mein Tod BEDEUTET.«

Akira stand auf. Schwert in der Hand. Dieselbe Geste wie vor drei Jahren in der Mensa.

»Null. Was brauchst du von uns?«

»Allianz. Nicht offiziell. Aber Informationen. Zugang. Und wenn der Tag kommt... Kampfkraft.«

Er streckte die Hand aus.

»Diesmal nehme ich keine Absage an.«`,

 systemBox: {
 title: "VOID-TERMINAL — ENDE AKT IV",
 lines: [
 "> ALTER: 18 Jahre",
 "> NULLEN: 6 Mitglieder + 4 Helden-Allianz",
 "> ZEIT BIS UPDATE: 2 Jahre",
 ">",
 "> VOID-SKILLS:",
 "> ★ [Void Strike] ★ [Ghost Step]",
 "> ★ [System Scan+] ★ [Aether Blade]",
 "> ★ [Aether Armor] ★ [Code.Disrupt]",
 "> ★ [Code.Copy] ★ [Code.Modify] (eingeschränkt)",
 ">",
 "> NEUE VERBÜNDETE:",
 "> → Gorrick (Schmied), Veyra (Spionin)",
 "> → Shadow/Ren (Phantom), Aria (Heilerin)",
 "> → Rex (Drache), Lilithia (Dämonen-Allianz)",
 ">",
 "> AUSRÜSTUNG:",
 "> ★ Void-Dolch »First Strike«",
 "> ★ Dmitris Stein (eine Hälfte)",
 "> ★ Yukis Hasen-Anhänger (oder Steinhälfte)",
 ">",
 "> »Er fiel. Er stand auf. Er baute.",
 "> Und die Schatten begannen zu leuchten.«",
 ">",
 "> Weiter → AKT V: OVERFLOW",
 ]
 },

 choices: [{ text: "→ AKT V: Overflow — Fraktionskriege", next: "a5k1_intro" }],
 affinityEffect: { akira: 15, yuki: 20, emma: 10, dmitri: 10 },
 },

 // ════ AKT V PLATZHALTER ════════════════════════════════════════════════
 a5k1_intro: {
 act: "AKT V",
 chapter: "Kapitel 31 — War.Init()",
 title: "AKT V — Overflow",
 scene: "Aethermere — Alter: 18–20 Jahre",
 bg: "chaos",
 music: "theme_void_terminal",
 text: `Zwei Jahre. Das System-Update nähert sich.

Die Nullen sind gewachsen. Die Helden sind Verbündete. Lilithia bereitet ihre Fraktion vor.

Aber die Welt zieht sich zusammen.

General Kross marschiert. Varkos plant etwas in Drak'Moor. Mordecai zweifelt — und zweifelnde Männer sind unberechenbar.

Und Yuki verliert Zeit.

[Akt V — in Entwicklung]`,

 systemBox: {
 title: "VOID-TERMINAL",
 lines: [
 "> AKT V: »Overflow« folgt in Kürze.",
 "> Kapitel 31–40.",
 ">",
 "> Zeit bis Update: 2 Jahre.",
 ">",
 "> — S.: »Du bist weiter als ich erwartet habe.",
 "> Viel weiter. Ich bin stolz.«",
 ]
 },

 choices: [{ text: "→ Zum Hauptmenü", next: "__title__" }],
 },
};

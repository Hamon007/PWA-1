// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT III: RUNTIME
// Kapitel 12–20: Jugend-Phase, Alter 10–15
// ─── ENTSCHEIDUNGS-KATEGORISIERUNG ────────────────────
// [SC] = STORY-CRITICAL  → verändert Kapitel/Plot-Verlauf
// [AF] = AFFINITY        → verändert Beziehungswerte 0-100
// [AL] = ALIGNMENT       → verschiebt Licht/Schatten + Ordnung/Chaos
// Jede Wahl trifft MINDESTENS eine Kategorie.
// AF-Wahlen geben IMMER narratives Feedback.
// SC-Wahlen aus Akt I/II werden hier referenziert.
// ═══════════════════════════════════════════════════════

export const AKT_III = {

  // ════ ZEITSPRUNG: DIE DREI VERLORENEN JAHRE ════════════════════════════

  // ════ ZEITSPRUNG: DREI JAHRE IN KREUZWEG ════════════════════════════════

  a3k0_zeitsprung: {
    act: "AKT III",
    chapter: "Zeitsprung — Drei Jahre in Kreuzweg",
    title: "Die verlorenen Jahre",
    scene: "Kreuzweg, Valtheris — Alter: 7–10 Jahre",
    bg: "city",
    music: "theme_family",
    text: `Kreuzweg war die erste Station.

Dreißig Menschen, drei Karren, ein mürrischer Esel namens Herr Grummel. Roland fand Arbeit als Wachmann. Elena heilte Marktkunden für Kupfermünzen. Mira terrorisierte die Nachbarskinder mit unbegründetem Enthusiasmus.

Aldwins Kontaktin hieß Frau Voss — eine mürrische alte Alchemistin mit einem Keller voller verbotener Bücher und der Überzeugung, dass jeder Mensch unter sechzig Jahren prinzipiell zu laut war. Sie ließ Kaito lesen. Alles. Ohne Fragen.

In drei Jahren las er jedes Buch, das Frau Voss besaß. Dann die öffentliche Bibliothek. Dann fing er an, eigene zu schreiben: »Reverse-Engineering des Genesis-Systems.« Version 0.1.

Nebenbei: Informant bei der Abenteurer-Gilde. Dungeon-Analysen, anonym, präzise, übermenschlich genau. Niemand wusste, wer die »quellenlose Analyse« verfasste. Kaito war acht Jahre alt.

Finn trainierte täglich mit Roland. Sera zog sich zurück, trainierte allein im Wald. Wenn Kaito sie abends auf dem Dach fand, sagten sie manchmal stundenlang nichts — und das Schweigen war kein leeres.

Dann, an einem Dienstag im dritten Jahr: ein Brief. Versiegelt mit dem kaiserlichen Wappen. Adressiert an »Kaito Ashford, potenzieller Student«.

Die Kaiserliche Akademie für Helden in Aetheria Prime akzeptierte seine Bewerbung.

Elena weinte. Roland nickte. Mira schrie: »ICH WILL AUCH!« Aldwin erschien aus dem Nichts — wie er es immer tat — und legte seinen Brief auf den Tisch.

»Ich habe dafür gesorgt, dass die richtigen Leute deine Analysen gelesen haben. Die Gilde hat sie weitergeleitet. Die Akademie dachte, ein erwachsener Rang-B-Analytiker bewirbt sich. Als sie merkten, dass es ein Zehnjähriger ist — waren sie interessiert.«

»Das ist nicht gefährlich?«

»Alles ist gefährlich. Die Frage ist: Wo lernst du am meisten?«

Kaito schwieg. Dann: »Im Herzen des Systems.«

Aldwin lächelte — zum ersten Mal seit Millheim. »Dann geh.«`,
    systemBox: {
      title: "VOID-TERMINAL — STATUS (Alter 10)",
      lines: [
        "> [Code.Read] — Fortgeschritten",
        "> [Code.Analyze] — Fortgeschritten",
        "> [Code.Spoof] — Stabil (Rang B-)",
        "> [Aether.Resonance] — Kontrolle verbessert",
        ">",
        "> Handbuch: »Reverse-Engineering des Genesis-Systems« v0.3",
        ">",
        "> Nächstes Ziel: Kaiserliche Akademie, Aetheria Prime.",
        "> Aldwin: »In den Bauch der Bestie.«",
      ]
    },
    choices: [{ text: "→ Kapitel 12: Aetheria Prime", next: "a3k1_aetheria" }],
  },

  // ════ KAPITEL 12: LOGIN.ACADEMY() ══════════════════════════════════════

  a3k1_aetheria: {
    act: "AKT III",
    chapter: "Kapitel 12 — Login.Academy()",
    title: "Aetheria Prime",
    scene: "Kaiserliche Hauptstadt — Alter: 10 Jahre",
    bg: "city",
    music: "theme_mystery",
    text: `Aetheria Prime war... überwältigend.

In Millheim lebten fünfhundert Menschen. In Kreuzweg zehntausend. Aetheria Prime hatte über eine Million Einwohner, und JEDER EINZELNE hatte einen System-Status, der durch die Luft summte wie eine permanente Funkwelle.

Für mich — mit meiner Aether-Sicht und meinem Code.Read — war die Stadt ein STURM aus Daten. Hunderttausende System-Statusfenster, übereinander gelegt, blinkend, pulsierend, ein endloser Fluss aus Leveln, Klassen, Skills und Statistiken.

Mir wurde schlecht. Buchstäblich.`,

    systemBox: {
      title: "VOID-TERMINAL — SENSORISCHE ÜBERLASTUNG",
      lines: [
        "> Empfehlung: [Aether-Sicht] auf PASSIV stellen.",
        "> Anleitung: Stell dir einen Dimmer vor.",
        "> Dreh ihn herunter. Nicht aus — herunter.",
        ">",
        "> ...Besser?",
        ">",
        "> Der System-Nexus im Stadtzentrum =",
        "> ein RELAIS-PUNKT zum Kern.",
        "> Näher als 100 Meter NICHT herangehen.",
        "> Der Nexus ist im Grunde eine",
        "> Überwachungskamera der Architekten.",
        "> Lächeln nicht empfohlen.",
      ]
    },

    text2: `Die Stadt war in Ringen aufgebaut. Äußerer Ring: Märkte, Abenteuerergilde, Lärm. Mittlerer Ring: Adelsvillen, Handelshäuser, Kontrolle. Innerer Ring: Kaiserpalast, Große Kathedrale, Kaiserliche Akademie.

Über dem Haupttor der Akademie prangte der Leitspruch:

»DURCH DAS SYSTEM WERDEN WIR STARK. DURCH STÄRKE DIENEN WIR DEM SYSTEM.«

...Subtil.

Zweihundert neue Studenten versammelten sich im Großen Saal. Kaito stand zwischen ihnen — zehn Jahre alt, schlank, unauffällig. Sein gefälschter Status zeigte: Level 4, Klasse: keine, Status: NORMAL.

Level 4. Niedrig genug, um nicht aufzufallen. Hoch genug, um nicht bemitleidet zu werden. Der perfekte Mittelweg der Mittelmäßigkeit.

Der Dekan sprach — ein alter Mann mit einer Stimme wie Pergament:

»Willkommen an der Kaiserlichen Akademie. Hier werden die Verteidiger des Reichs geformt. Hier werden Helden GEBOREN. In fünf Jahren werden einige von euch Ritter sein. Andere Magier. Manche... nichts. Das System entscheidet.«

»Das System entscheidet.« Vier Worte, die die gesamte Philosophie dieser Welt zusammenfassten.

Ich ballte die Fäuste in meinen Taschen und lächelte höflich.`,

    choices: [{ text: "→ Leon und Meridia", next: "a3k1_leon" }],
  },

  a3k1_leon: {
    act: "AKT III",
    chapter: "Kapitel 12 — Login.Academy()",
    title: "Leon von Adlerstein",
    scene: "Gang zur Schlafsaal, Akademie",
    conditionalFlag: "leonBeziehung",
    textConditional: { ignoriert: `Ich wandte mich ab. Leon war keine Variable die ich berücksichtigen musste. Das kränkte ihn mehr als Widerspruch.`, antagonist: `Jemand der Macht braucht um zu existieren. Als Variable interessant.`, rivale: `In seinem Gesicht: Respekt. Er hatte niemanden erwartet der nicht zurückwich.`, default: `` },
    bg: "city",
    music: "theme_mystery",
    text: `Leon von Adlerstein stellte sich in den Weg, bevor Kaito seinen Schlafsaal erreichte.

Blond, arrogant, Level 12, goldene Uniform.

»Ashford? Nie gehört. Welches Haus?«

»Kein Haus. Dorf. Millheim.«

»Ein BAUER? An der Akademie? Was kommt als nächstes — Schweine in der Bibliothek?«

Er scannte Kaito. »Level VIER? Wie bist du überhaupt REINGEKOMMEN?«`,

    // [AF] Entscheidung — Leon-Beziehung + Verborgenheit
    choices: [
      {
        text: "A) »Durch die Tür, wie alle anderen.« [Neutral]",
        desc: "[AL+Ordnung] Leon schnaubt und geht. +Verborgenheit. Er ignoriert dich fortan — was in Ordnung ist. Keine Schwächung deiner Position.",
        next: "a3k1_meridia",
        alignEffect: { ordnung: 1, verborgenheit: 1 },
        flagEffect: { leonBeziehung: "ignoriert" },
        narrativeFeedback: "Leon schnaubt. Sein Blick gleitet über dich hinweg, als wärst du bereits vergessen. Das ist genau richtig.",
      },
      {
        text: "B) »Level ist nur eine Zahl. Wie dein IQ — niedrig und irrelevant.« [Provokant]",
        desc: "[AF-Leon] Leon wird Antagonist. -Verborgenheit. Aber: Andere Studenten kichern. Du wirst bekannt als »der Witzige«.",
        next: "a3k1_meridia",
        alignEffect: { chaos: 1, verborgenheit: -2 },
        flagEffect: { leonBeziehung: "antagonist" },
        narrativeFeedback: "Leon wird ROT. Sein Mund öffnet und schließt sich wie ein Fisch. Hinter ihm unterdrückt jemand ein Lachen. Das kostet dich Tarnung — aber es fühlt sich verdammt gut an.",
      },
      {
        text: "C) [Code.Read] — still scannen, dann leise: »Dein Schwertskill ist nur LV 2. Für Level 12... peinlich.«",
        desc: "[AF-Leon] [AL-Schatten] Leon erstarrt. Gerücht: »Der Bauernjunge kann Status lesen.« -Verborgenheit STARK.",
        next: "a3k1_meridia",
        alignEffect: { schatten: 1, verborgenheit: -4 },
        flagEffect: { leonBeziehung: "rivalität" },
        narrativeFeedback: "Leon wird weiß. »W-Woher—« Du gehst einfach weiter. Hinter dir hörst du, wie er hastig zu seinen Freunden flüstert. Das Terminal warnt: Verborgenheit gesunken.",
      },
    ]
  },

  a3k1_meridia: {
    act: "AKT III",
    chapter: "Kapitel 12 — Login.Academy()",
    title: "Professor Meridia",
    conditionalFlag: "rolandEchterName",
    textConditional: { true: `Kaito wusste, wer Meridia war — bevor sie ein Wort sagte. Roland hatte einmal einen silberhaarigen Elfen erwähnt. Meridia. Sie kannte Rolands echten Namen.`, default: `` },
    scene: "Meridias Büro, Akademie — nach dem Unterricht",
    bg: "city",
    music: "theme_gregor",
    text: `Die Professorin betrat den Raum — und das Raumgefühl VERÄNDERTE sich. Als würde die Luft selbst respektvoll zur Seite weichen.

Professor Meridia war eine Elfe. Nicht die Art Elfe, die man in Märchenbüchern sah. Sie war groß, schlank, mit silberweißem Haar, das bis zur Taille reichte, und Augen wie flüssiges Gold. Vierhundertdreiundzwanzig Jahre alt.

Mitten in der Vorlesung stoppte sie. Ihre goldenen Augen fixierten Kaito.

»Du. Der Junge in der dritten Reihe. Du hast mich gerade gescannt. Mit einem Skill, den ich nicht identifizieren kann.«`,

    systemBox: {
      title: "VOID-TERMINAL — WARNUNG",
      lines: [
        "> Scan von Professor Meridia BEMERKT.",
        "> Diese Entität hat extreme Wahrnehmung.",
        "> Sie WEISS, dass du sie gescannt hast.",
        ">",
        "> Level: 74  |  Klasse: Erzmagierin (Rang A)",
        "> Rasse: Hochelfe  |  Alter: 423",
        ">",
        "> ...Vorsicht empfohlen.",
      ]
    },

    text2: `Nach dem Unterricht. Meridias Büro — voll mit Büchern in Sprachen, die Kaito nicht kannte. An der Wand: ein Gemälde des Weltenbaums Yggdris.

»Ich werde direkt sein. Eine alte Elfe hat keine Zeit für Umwege.«

»Du hast keinen System-Status. Nicht wirklich. Was du zeigst, ist eine FÄLSCHUNG — geschickt, aber für jemanden mit meiner Erfahrung durchsichtig. Dein wahrer Status ist... leer. Wie ein unbeschriebenes Blatt.«

Kaito erstarrte. Sein Herz schlug schneller.

»Beruhige dich. Ich werde dich nicht melden.«

»...Warum nicht?«

»Weil ich vierhundert Jahre alt bin. Und in diesen vierhundert Jahren habe ich drei Dinge gelernt: Erstens, das System ist nicht göttlich. Zweitens, die Kirche lügt. Drittens, junge Menschen mit leeren Statusfenstern sind INTERESSANTER als solche mit vollen.«

Meridia erklärte: Sie war eine Chronistin. Wie Aldwin. Aldwin hatte sie geschickt. Und jetzt bot sie an:

Erstens — Zugang zur verbotenen Sektion der Bibliothek. Zweitens — privater Unterricht in wahrer Elementartheorie. Drittens — Schutz.

»Was willst du dafür?«

»Wenn du eines Tages die Wahrheit findest — die GANZE Wahrheit — dann erzähle sie weiter. Nicht mir. ALLEN.«`,

    // [AF] Meridia-Beziehung — drei Töne, alle gültig
    choices: [
      {
        text: "A) »Abgemacht. Aber ich entscheide, WANN und WIE.«",
        desc: "[AF+Meridia+15] Partnerschaft auf Augenhöhe. Meridia nickt anerkennend: »Klug. Nicht sofort vertrauen. Gut.«",
        next: "a3k2_akademiealltag",
        affinityEffect: { meridia: 15 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Meridias Mundwinkel heben sich minimal. Vierhundert Jahre Geduld erkennen Eigenständigkeit, wenn sie ihr begegnet.",
      },
      {
        text: "B) »Danke. Wirklich. Zum ersten Mal seit Millheim fühle ich mich... nicht allein.«",
        desc: "[AF+Meridia+20] Mentor-Schüler-Bond. »Du bist nicht allein, Kaito. Das warst du nie.«",
        next: "a3k2_akademiealltag",
        affinityEffect: { meridia: 20 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Für einen Moment schmelzen vierhundert Jahre Elfen-Contenance. Meridias Augen werden warm. »Du bist nicht allein, Kaito. Das warst du nie.«",
      },
      {
        text: "C) »Und wenn die Wahrheit die Welt zerstört?«",
        desc: "[AF+Meridia+10] Dunklerer philosophischer Ton. »Dann war die Welt es nicht wert, gerettet zu werden. Aber ich glaube nicht daran.«",
        next: "a3k2_akademiealltag",
        affinityEffect: { meridia: 10 },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Meridia schweigt lange. Dann: »Dann war die Welt es nicht wert, gerettet zu werden. Aber ich glaube nicht daran. Ich glaube an dich.«",
      },
    ]
  },

  // ════ KAPITEL 13: CLASS.UNDEFINED() — DIE AKADEMIE-JAHRE ══════════════

  a3k2_akademiealltag: {
    act: "AKT III",
    chapter: "Kapitel 13 — Class.Undefined()",
    title: "Vier Jahre Akademie",
    conditionalFlag: "kindheitsVerhalten",
    textConditional: { vorsichtig: `Vier Jahre Akademie — und Kaito hatte jeden Tag damit verbracht, unsichtbar zu sein. Beobachte zuerst, handele später. Das hatte er als Kind gelernt.`, neugierig: `Vier Jahre Akademie — und Kaito hatte jeden Kurs belegt den er konnte. Er hatte nie genug Fragen. Das hatte er als Kind gelernt.`, offen: `Vier Jahre Akademie — und Kaito kannte jeden Lehrer beim Namen. Menschen reden, wenn man zuhört. Das hatte er als Kind gelernt.`, default: `` },
    scene: "Kaiserliche Akademie — Alter: 10–14 Jahre",
    bg: "city",
    music: "theme_family",
    text: `Vier Jahre an der Akademie. Vier Jahre, die mich formten — nicht durch das System, sondern TROTZ des Systems.

Offizieller Unterricht: Elementarmagie (ich imitierte System-Zauber mit Wilder Magie — sieht gleich aus, funktioniert anders), Kampftraining (ich war »durchschnittlich« — absichtlich), Geschichte (System-Propaganda).

Taktik & Strategie: das einzige Fach, in dem ich GLÄNZTE. Denn Taktik hat kein Level.

Geheimer Unterricht bei Meridia: Wahre Elementartheorie. Verbotene Bücher. System-Architektur-Analyse.

Und dann: die Verbotene Bibliothek. Nächte lang. Gregors Tagebuch. Das Reverse-Engineering-Handbuch, Version 0.1 bis 0.4.

Vier Kernentdeckungen veränderten alles.`,

    systemBox: {
      title: "DIE VIER ENTDECKUNGEN (Verbotene Bibliothek)",
      lines: [
        "> ENTDECKUNG 1: DAS SYSTEM-UPDATE",
        "> → In 3 Jahren: Update verschärft alles permanent.",
        "> → Wilde Magie wird vollständig eliminiert.",
        "> → Anomalien werden automatisch gelöscht.",
        "> → ICH HABE EINE DEADLINE.",
        ">",
        "> ENTDECKUNG 2: DER HELDEN-TIMER",
        "> → [Mana-Overflow] kostet Lebensspanne.",
        "> → 5 Jahre Lebenszeit pro Jahr Aufenthalt.",
        "> → KEINER DER HELDEN WEISS DAS.",
        ">",
        "> ENTDECKUNG 3: DIE VOID-WALKER-KLASSE",
        "> → Im Code vorhanden — als GELÖSCHT markiert.",
        "> → Könnte reaktiviert werden.",
        "> → Nur von jemandem außerhalb des Systems.",
        ">",
        "> ENTDECKUNG 4: SEPTIMAS BRIEF",
        "> → Original-Handschrift. Alt-Aetherisch.",
        "> → »Verstehen allein reicht nicht.",
        ">   Fühlen allein reicht nicht.",
        ">   Du brauchst beides.«",
        "> → »Sei mehr als eine Anomalie.",
        ">   Sei ein Mensch.«",
      ]
    },

    text2: `Briefe von Zuhause kamen regelmäßig.

Elena: »Mira hat angefangen, 'Magie zu üben'. Sie steht im Garten und schreit 'FEUERBALL!' und nichts passiert. Roland hat ihr erklärt, dass man erst Level 10 erreichen muss. Sie hat geantwortet: 'Dann werde ich Level 10 bis MORGEN!' Sie ist acht.«

Roland, kurz, direkt, mit versteckter Wärme: »Trainiere. Schlaf genug. Vertraue nicht zu schnell.
Deine Mutter vermisst dich. Mira vermisst dich lauter.
Ich auch.
Papa.
P.S.: Dein 'Reverse-Engineering-Handbuch' — du hast eine Kopie unter deinem Bett vergessen. Ich habe es gelesen. Verstanden habe ich nichts. Aber es klang wichtig.«

Jeder Brief war ein Anker. Eine Erinnerung daran, WARUM ich an diesem Ort war. Für die Familie, die an einem Küchentisch saß, der zu klein war, und über einen Esel lachte, der Gewürze gefressen hatte.`,

    choices: [{ text: "→ Marcus Hale — Der neue Freund", next: "a3k2_marcus" }],
  },

  a3k2_marcus: {
    act: "AKT III",
    chapter: "Kapitel 13 — Class.Undefined()",
    title: "Marcus Hale",
    scene: "Mensa, Akademie — Alter: 11 Jahre",
    bg: "city",
    music: "theme_mystery",
    text: `Er erschien in Kaitos zweitem Jahr. Ein Stipendiat aus einer armen Familie, mit charmanten braunen Augen und einem Lächeln, das Vertrauen erzeugte wie ein Magnet Eisen anzog.

Marcus Hale war perfekt. Und NICHTS, das perfekt war, war vertrauenswürdig.`,

    systemBox: {
      title: "VOID-TERMINAL — SCAN: MARCUS HALE",
      lines: [
        "> Marcus Hale  |  Level: 9  |  Alter: 11",
        ">",
        "> Skills: [Schleichen LV 3], [Dolchkampf LV 2]",
        ">         [Überzeugung LV 4] (!!!)",
        ">",
        "> [Überzeugung LV 4]: Passiver Charisma-Boost.",
        "> Vertrauensbildung +40%.",
        ">",
        "> → HINWEIS: Dieser Skill-Level ist ungewöhnlich",
        ">   hoch für das Alter. Gezieltes Training?",
        ">",
        "> Keine offensichtlichen Anomalien.",
        "> Keine versteckten Flaggen.",
        ">",
        "> ...Aber das Fehlen von Flaggen bei einem",
        "> Stipendiaten mit [Überzeugung LV 4] ist",
        "> an sich eine Flagge.",
        ">",
        "> Empfehlung: Vorsicht. Beobachten.",
      ]
    },

    text2: `Marcus setzte sich in der Mensa neben Kaito — den einzigen, der immer allein saß.

»Du bist Ashford, oder? Der Taktik-Genius?«

»Ich bin der Typ, der allein isst.«

»Genau. Der mysteriöse Einzelgänger. Das SCHREIT nach einer interessanten Hintergrundgeschichte.«

»Ich bin ein Bauernsohn aus einem Dorf, das es nicht mehr gibt.«

»Tut mir leid. Wirklich.«

Dann, nach einer Pause: »Ich bin Marcus. Aus dem Ostbezirk von Kreuzweg. Mein Vater war Schuster. Meine Mutter ist tot. Meine Schwester ist krank. Ich bin hier, weil das Stipendium die einzige Möglichkeit war, genug Geld für ihre Medizin zu verdienen.«

Seine Geschichte war plausibel. Emotional. Perfekt dosiert — genug Tragik, um Sympathie zu erzeugen, nicht genug, um bemitleidet zu werden.

Entweder war es wahr, oder Marcus Hale war der beste Lügner, den ich je getroffen hatte.

Beides war beunruhigend.`,

    // [SC] + [AL] Entscheidung — Marcus-Verrat-Pfad wird hier gesetzt
    choices: [
      {
        text: "A) AKZEPTIEREN — Du lässt Marcus vorsichtig an dich heran.",
        desc: "[AF+Marcus+20] [AL-Licht] Vier Jahre gemeinsame Mahlzeiten und Gespräche. Er ist nützlich — kennt die sozialen Strömungen. Der Verrat in Kapitel 17 wird SCHMERZHAFTER.",
        next: "a3k3_summoning_vorbereitung",
        affinityEffect: { marcus: 20 },
        alignEffect: { licht: 1 },
        flagEffect: { marcusVertrauen: "hoch", marcusWissen: false },
        narrativeFeedback: "Marcus lächelt — das warme, echte Lächeln, das du noch nicht sicher einordnen kannst. Er rückt näher. Das Terminal registriert den Affinitätswechsel schweigend.",
      },
      {
        text: "B) MISSTRAUEN — Höflich, aber nie offen.",
        desc: "[AF+Marcus+5] [AL-Ordnung] Du gibst ihm keine echten Informationen. Der Verrat in Kapitel 17 ist weniger persönlich, aber du erkennst die Zeichen früher.",
        next: "a3k3_summoning_vorbereitung",
        affinityEffect: { marcus: 5 },
        alignEffect: { ordnung: 1 },
        flagEffect: { marcusVertrauen: "niedrig", marcusWissen: false },
        narrativeFeedback: "Marcus merkt es. Sein Lächeln bleibt, aber seine Augen rechnen. Ihr werdet Bekanntschaften, keine Freunde. Das ist sicherer.",
      },
      {
        text: "C) GEGENSPIONAGE — Akzeptieren, aber mit falschen Informationen füttern.",
        desc: "[AF+Marcus+5] [AL-Schatten] Katz-und-Maus-Spiel. Du ENTDECKST seinen Auftraggeber vor dem Verrat — wirst aber kälter dabei.",
        next: "a3k3_summoning_vorbereitung",
        affinityEffect: { marcus: 5 },
        alignEffect: { schatten: 1, ordnung: 1 },
        flagEffect: { marcusVertrauen: "gegenspionage", marcusWissen: false },
        narrativeFeedback: "Du nimmst seine Freundschaft an wie ein Programmierer eine Eingabe akzeptiert: mit Validierung. Er lächelt. Du lächelst zurück. Keiner zeigt die Karten.",
      },
    ]
  },

  a3k3_summoning_vorbereitung: {
    act: "AKT III",
    chapter: "Kapitel 14 — Import.Heroes()",
    title: "Das Summoning-Ritual",
    scene: "Großes Amphitheater, Aetheria Prime — Alter: 15 Jahre",
    bg: "city",
    music: "theme_mystery",
    text: `Das Summoning-Ritual der Systemkirche fand alle zwanzig Jahre statt — und diesmal war Kaito dabei.

Zwanzigtausend Zuschauer. Der Kaiser, die Kirche, das Militär, die Akademie — alle in ihren besten Gewändern. Erzbischof Mordecai stand im Zentrum des Ritualkreises, die Hände erhoben.

Ich aktivierte [Code.Read].

Was ich sah, ließ mich aufhören zu atmen.

Das Ritual war kein göttlicher Akt. Es war ein PROGRAMM. Eine Subroutine des Genesis-Systems, die Seelen aus benachbarten Dimensionen extrahierte und sie in neue Körper überführte.

Jemand hatte entschieden, Seelen zu STEHLEN und als Werkzeuge zu benutzen. Ohne ihr Wissen. Ohne ihre Zustimmung.`,

    systemBox: {
      title: "VOID-TERMINAL — RITUAL-ANALYSE",
      lines: [
        "> RITUAL: Seelen-Import (CLASSIFIED — ARCHITEKT-EBENE)",
        ">",
        "> Funktion: Extraktion fremder Seelen aus",
        ">           benachbarten Dimensionen",
        "> Ziel: Generierte Körper mit göttlichem Boost",
        ">",
        "> VERSTECKTER EFFEKT — [Mana-Overflow]:",
        "> → Kosten Lebensspanne des Trägers",
        "> → 5 Jahre Lebenszeit pro Jahr Aufenthalt",
        "> → KEINER DER HELDEN WURDE INFORMIERT",
        ">",
        "> MORALISCHE BEWERTUNG: NICHT NEUTRAL",
        "> Das System LÜGT die Helden an.",
        "> Aktiv und bewusst.",
      ]
    },

    text2: `Vier Lichtsäulen. Vier Gesichter, die ich sofort erkannte: der Schmerz der Desorientierung, der Schock der Fremde, der Versuch zu verstehen, was passiert ist.

Ich erkannte den Blick. Denselben Blick, den ich im Spiegel gesehen hatte, als ich als Baby aufgewacht war.

Akira Tanaka — energisch, ungeduldig, sofort kämpferisch.
Emma Wright — analysiert bereits ihre Umgebung mit dem Allsehenden Auge.
Dmitri Volkov — ruhig, methodisch, sagt nichts.
Yuki Nakamura — verloren. Ihre Magie unkontrolliert. Alle treten zurück.

Wie Sera am Fluss.

Geschichte wiederholte sich.`,

    choices: [{ text: "→ Die Heldenpartei — erste Begegnungen", next: "a3k4_helden_kontakt" }],
    wissenEffect: ["seraEltern"], // Parallele zu Sera — Yuki auch isoliert
  },

  // ════ KAPITEL 15: PARTY.FORMATION() ════════════════════════════════════

  a3k4_helden_kontakt: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Die vier Begegnungen",
    scene: "Akademie — Wochen nach dem Summoning",
    bg: "city",
    music: "theme_friendship",
    text: `In den Wochen nach dem Summoning beobachtete ich die Helden. Alle vier. Jeden Tag.

Akira Tanaka trainierte wie besessen. Level 25 nach einem Monat. Der [10x EXP-Boost] war unfair.

Emma Wright las. Jedes Buch in der Bibliothek. Schneller als ich. Sie analysierte die Welt wie ein Problem, das gelöst werden musste. Ihr [Allsehendes Auge] versagte nur bei mir — und ich sah, wie sie mich suchte, wenn sie dachte, niemand schaut.

Dmitri Volkov sprach wenig. Trainierte ruhig, methodisch. Aber er half dem Küchenpersonal beim Tragen schwerer Töpfe, und er brachte einem Erstklässler bei, wie man einen Schild richtig hielt. Leise. Ohne Erwartung.

Und Yuki... Yuki war verloren. Ihre Magie unkontrolliert, destruktiv. In der ersten Woche fror sie versehentlich die halbe Arena ein. Alle mieden sie.

Déjà vu. Sera am Fluss. Ein mächtiges Kind, das alle fürchteten.

Geschichte wiederholte sich.

Ich wählte wen ich ZUERST anspreche — der erste Kontakt prägt die Dynamik am stärksten.`,

    // [SC] Reihenfolge-Wahl — beeinflusst stärksten Affinitäts-Bond
    choices: [
      {
        text: "A) AKIRA — In der Arena beim Training.",
        desc: "[AF+Akira+25] Stärkster Kampf-Bond. »Zeig mir den richtigen dritten Hieb.« Führt in Akt V zu Akira-Allianz-Pfad.",
        next: "a3k4_akira",
        affinityEffect: { akira: 10 },
        flagEffect: { heldenErsterKontakt: "akira" },
        narrativeFeedback: "Akira schaut überrascht auf — er hatte niemanden erwartet. Dann grinst er, breit und echt. »Endlich jemand, der nicht einfach zuschaut.«",
      },
      {
        text: "B) EMMA — In der Bibliothek beim Recherchieren.",
        desc: "[AF+Emma+20] Intellektueller Bond. »Kapitel 3, Seite 47 ist erfunden.« — »Setz dich richtig hin.«",
        next: "a3k4_emma",
        affinityEffect: { emma: 10 },
        flagEffect: { heldenErsterKontakt: "emma" },
        narrativeFeedback: "Emma hebt den Kopf. Schaut ihn prüfend an, ohne Wärme. Dann: »Setz dich. Aber kommentiere nicht meine Notizen.«",
      },
      {
        text: "C) DMITRI — Im Hof beim Helfen.",
        desc: "[AF+Dmitri+20] Stille Stärke-Bond. Zwei Männer, die lieber handeln als reden.",
        next: "a3k4_dmitri",
        affinityEffect: { dmitri: 10 },
        flagEffect: { heldenErsterKontakt: "dmitri" },
        narrativeFeedback: "Dmitri nickt knapp. Reicht Kaito einen Eimer. Kein Wort. Aber nach einer Weile sagt er leise: »Du arbeitest sauber.«",
      },
      {
        text: "D) YUKI — Am Rand der Arena, allein.",
        desc: "[AF+Yuki+30] Tiefster emotionaler Bond. Geschichte wiederholt sich — wie Sera. Schaltet Romance Route 3 frei.",
        next: "a3k4_yuki",
        affinityEffect: { yuki: 10 },
        flagEffect: { heldenErsterKontakt: "yuki" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Yuki schaut auf — erschrocken. Dann, als sie merkt, dass er einfach neben ihr sitzt ohne etwas zu wollen, entspannt sie sich. Zentimeter für Zentimeter.",
      },
    ]
  },

  a3k4_akira: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Begegnung mit Akira",
    scene: "Arena, Akademie",
    bg: "city",
    music: "theme_training",
    text: `Akira trainierte allein. Schwerthiebe gegen einen Übungspfahl — schnell, stark, aber VORHERSEHBAR.

»Dein dritter Hieb ist immer diagonal. Von rechts oben nach links unten. Jeder Gegner, der zweimal gegen dich kämpft, weiß das.«

Akira drehte sich um. Scannte Kaito automatisch.

»Level VIER? Und du gibst MIR Kampftipps?«

»Level sagt, wie stark das System dich sieht. Es sagt nichts darüber aus, was du SIEHST.«

Akira starrte ihn an. Dann — ein Grinsen. Das erste echte, nicht-heldenhafte Grinsen.

»...Okay, Level-4-Junge. Zeig mir den richtigen dritten Hieb.«

Sie trainierten bis zum Abend. Akira lernte schnell — viel schneller als Kaito erwartet hatte. Und Kaito lernte, dass Akiras Lärm und Energie eine Präzision verbargen, die der Goldene Held sorgfältig hinter Enthusiasmus versteckte.

»Du tust so, als wärst du unbesorgt«, sagte Kaito irgendwann.

Akira pausierte. »Und du tust so, als wärst du Level 4.«

Stille.

»...Waffenstillstand?«

»Waffenstillstand.«`,

    choices: [{ text: "→ Alle vier Begegnungen abgeschlossen — Akiras Angebot", next: "a3k5_akiras_angebot" }],
    affinityEffect: { akira: 15 },
    narrativeFeedback: "Akira schlägt dir auf die Schulter — zu fest, wie immer. Sein Lachen füllt die leere Arena.",
  },

  a3k4_emma: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Begegnung mit Emma",
    scene: "Bibliothek, Akademie",
    bg: "city",
    music: "theme_void_terminal",
    text: `Emma saß in der Bibliothek, umgeben von Bücherstapeln. Ihr [Allsehendes Auge] war aktiv — ein leichtes Goldleuchten in ihren grünen Augen.

Kaito setzte sich an den Tisch gegenüber. Öffnete ein Buch. Las.

Fünf Minuten Stille.

»Du bist der Junge, den mein Skill nicht lesen kann.«

»Und du bist die Heldin, die alles analysiert, anstatt es zu ERLEBEN.«

Emma schaute auf. Scharfe grüne Augen.

»Das ist eine Beobachtung oder eine Beleidigung?«

»Ja.«

Stille. Dann — der Hauch eines Lächelns auf Emmas Lippen.

»...Ich mag dich nicht. Aber du bist interessant.«

»Interessanter als diese Bücher?«

»Bücher lügen nicht.«

»Diese schon. Kapitel 3, Seite 47. Die Beschreibung der Prä-System-Ära ist KOMPLETT erfunden.«

Emma schlug die Seite auf. Las. Dann schaute sie Kaito an — mit einem Ausdruck, der respektvoller war als jedes Kompliment.

»...Setz dich richtig hin. Wir haben viel zu besprechen.«`,

    choices: [{ text: "→ Akiras Angebot", next: "a3k5_akiras_angebot" }],
    affinityEffect: { emma: 15 },
    narrativeFeedback: "Emma schiebt wortlos einen Bücherstapel zu dir rüber. Das ist, auf ihre Art, eine Einladung.",
  },

  a3k4_dmitri: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Begegnung mit Dmitri",
    scene: "Hof, Akademie",
    bg: "village",
    music: "theme_training",
    text: `Dmitri trug einen Sack Mehl für die Küche. Allein. Die Diener hatten aufgehört zu helfen, weil er schneller war als sie.

Kaito hob den zweiten Sack auf.

»...Du bist klein.«

»Und du bist unnötig groß.«

»Der Sack wiegt 30 Kilo.«

»Ich weiß.«

»Du bist 15 und wiegst wahrscheinlich 50.«

»Ich WEISS.«

Dmitri nahm ihm den Sack ab. Mit einer Hand. Legte ihn auf seine eigene Schulter.

»Nächstes Mal: Hilf in der Küche. Kartoffeln schälen. Da braucht man keine 30 Kilo.«

»...Ist das ein Angebot?«

»Ja. Ich kann nicht kochen. Aber ich kann Kartoffeln schälen.«

»Kannst du WIRKLICH nicht kochen?«

»Mein letzter Versuch hat eine Pfanne geschmolzen.«

»...Wie schmilzt man eine PFANNE?«

»Talent.«

Sie schälten Kartoffeln und redeten wenig. Aber am Ende des Abends kannte Kaito mehr über Dmitri als nach einer Stunde Gespräch mit den meisten Menschen.

Dmitri war ein Mann, der durch Taten sprach. Das war eine Sprache, die Kaito verstand.`,

    choices: [{ text: "→ Akiras Angebot", next: "a3k5_akiras_angebot" }],
    affinityEffect: { dmitri: 15 },
    narrativeFeedback: "Dmitri gibt dir beim Gehen einen Kartoffelschäler. Keine Erklärung. Das ist, bei ihm, ein Freundschaftszeichen.",
  },

  a3k4_yuki: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Begegnung mit Yuki",
    scene: "Arena-Rand, Akademie",
    bg: "village",
    music: "theme_friendship",
    text: `Yuki saß am Rand der Arena. Allein. Ihr Stab lag neben ihr, mit einem Tuch abgedeckt, als schämte sie sich dafür. Die Arena war halb eingefroren — ihr letzter »Unfall«.

»...Kaito?«

Er setzte sich neben sie.

»Hey.«

»Ich habe heute... die Arena eingefroren. Wieder.«

»Ich hab's gesehen. Beeindruckend.«

»BEEINDRUCKEND?! Ich habe drei Übungspuppen ZERSTÖRT und einem Lehrer die Augenbrauen ABGEFROREN!«

»...Die Augenbrauen?«

»Es ist NICHT lustig!«

»Es ist ein BISSCHEN lustig.«

Yuki, nach einer Pause — ein widerwilliges Lächeln: »...Er sah aus wie ein überraschtes Ei.«

Sie lachten. Leise. Zusammen. Und das Eis auf der Arena begann zu schmelzen.

Kaito erinnerte sich an Sera. An den Felsen am Fluss. An das erste Mal, dass Sera lächelte.

Geschichte wiederholte sich.

»Deine Magie ist nicht kaputt, Yuki. Sie ist nur stärker als das System damit umgehen kann.«

Yuki schaute ihn an — lange. »...Du klingst, als hättest du das schon jemandem gesagt.«

»Einer Person. Sie heißt Sera. Und jetzt hat sie die kontrolliertesten Flammen, die ich je gesehen habe.«`,

    choices: [{ text: "→ Akiras Angebot", next: "a3k5_akiras_angebot" }],
    affinityEffect: { yuki: 20 },
    alignEffect: { licht: 1 },
    narrativeFeedback: "Yuki schaut dich an wie jemand, der nicht sicher ist, ob er dir vertrauen darf — aber es trotzdem will.",
  },

  // ════ KAPITEL 15: AKIRAS ANGEBOT ═══════════════════════════════════════

  a3k5_akiras_angebot: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Das Angebot",
    scene: "Mensa, Akademie — einen Monat nach dem Summoning",
    bg: "city",
    music: "theme_family",
    text: `Akira kam zu Kaito. In der Mensa, vor allen Leuten.

»Kaito. Ich habe mit den anderen gesprochen. Wir wollen dich in unserer Partei.«

Die Mensa wurde STILL.

»Den Level-4-Typen? In der HELDENPARTEI?«

Akira ignorierte das Geflüster.

»Ich brauche einen Taktiker. Du siehst Sachen, die ich nicht sehe. Emma sagt, du bist 'beunruhigend kompetent'. Dmitri sagt, du bist 'ehrlich'. Yuki sagt, du bist 'nett'. Das reicht mir.«

Er streckte seine Hand aus.

»Lass uns zusammen kämpfen.«

Zwanzigtausend Menschen beim Summoning hatten mich nicht gesehen. Und jetzt stand der strahlendste von allen vor mir — und bot mir seine Hand an. Vor allen Leuten.

Die Ironie war so dick, man hätte sie mit einem Schwert schneiden können.`,

    // [SC] Monumentale Wendepunkt-Entscheidung — Verborgenheit vs. Einfluss
    choices: [
      {
        text: "A) DU NIMMST AN — Öffentlich. Die Hand ergreifen.",
        desc: "[SC] [AF+Akira+20] [AL-Verborgenheit] Du bist jetzt das »fünfte Mitglied«. Mordecai BEMERKT dich. Kross BEMERKT dich. Größeres Risiko, aber größerer Einfluss.",
        next: "a3k6_marcus_verrat_setup",
        affinityEffect: { akira: 20, yuki: 10, dmitri: 10, emma: 10 },
        alignEffect: { licht: 2, verborgenheit: -5 },
        flagEffect: { heldenparteiStatus: "offen", sichtbarkeit: 60 },
        narrativeFeedback: "Die Mensa explodiert in Gemurmel. Akiras Grinsen ist breit wie ein Sonnenaufgang. Dein Terminal registriert: Verborgenheit deutlich gesunken.",
      },
      {
        text: "B) DU LEHNST AB — Höflich. »Ich kämpfe besser allein.«",
        desc: "[SC] [AF-Akira-5] [AL+Verborgenheit] Akira ist enttäuscht. Du unterstützt die Helden von AUSSEN — Informationen, Analysen. Eminence-in-Shadow-Pfad.",
        next: "a3k6_marcus_verrat_setup",
        affinityEffect: { akira: -5 },
        alignEffect: { schatten: 1, verborgenheit: 2 },
        flagEffect: { heldenparteiStatus: "aussen", sichtbarkeit: 20 },
        narrativeFeedback: "Akiras Hand bleibt ausgestreckt — einen Moment zu lang. Dann zieht er sie zurück. »Das Angebot steht.« Er meint es ernst.",
      },
      {
        text: "C) MIT BEDINGUNGEN — »Ich bin kein Held. Ich bin der Schatten. Kein Titel, keine Bekanntmachung.«",
        desc: "[SC] [AF+Akira+10] Inoffiziell Teil der Partei. In Berichten existierst du nicht. Verborgenheit bleibt, Einfluss steigt. Perfekter Mittelweg.",
        next: "a3k6_marcus_verrat_setup",
        affinityEffect: { akira: 10 },
        alignEffect: { ordnung: 1 },
        flagEffect: { heldenparteiStatus: "schatten", sichtbarkeit: 35 },
        narrativeFeedback: "Akira ist verwirrt — dann grinst er langsam. »Der mysteriöse fünfte Mann also.« Er mag die Idee.",
      },
      {
        text: "D) GEGENFRAGE — »Warum WIRKLICH, Akira? Die Kirche hat dir gesagt, du brauchst keinen fünften Mann.«",
        desc: "[SC] [AF+Akira+25] Akira: »Weil ich ein GEFÜHL habe, dass etwas nicht stimmt. Und du bist der Einzige, der dieselben Fragen stellt.« Tiefster Bond — Akira beginnt das System zu hinterfragen.",
        next: "a3k6_marcus_verrat_setup",
        affinityEffect: { akira: 25 },
        alignEffect: { licht: 1, ordnung: 1 },
        flagEffect: { heldenparteiStatus: "partnerschaft", sichtbarkeit: 40, akiraHinterfragt: true },
        narrativeFeedback: "Akiras Grinsen verschwindet. Was übrigbleibt ist echter: ein Mann, der Fragen stellt, für die er keine Antworten hat.",
      },
      { text: "D) IM SCHATTEN — »Ich helfe. Aber mein Name bleibt aus deinen Berichten.«",
        requires: { flag: { heldenparteiStatus: "schatten" } },
        next: "a3k6_marcus_verrat_setup",
        alignEffect: { verborgenheit: 3, schatten: 1 },
        flagEffect: { heldenparteiStatus: "schatten_bestaetigt", sichtbarkeit: 15 },
        narrativeFeedback: "Akira schaut ihn lange an. Dann: »Warum?« — »Weil ein Schwert das niemand sieht nicht pariert werden kann.« Akira nickt. Er versteht nicht alles. Aber er akzeptiert es.",
      },
    ]
  },

  // ════ KAPITEL 16: TROJAN.HORSE() — MARCUS' SPIEL ═══════════════════════

  a3k6_marcus_verrat_setup: {
    act: "AKT III",
    chapter: "Kapitel 16 — Trojan.Horse()",
    title: "Die Stille vor dem Sturm",
    scene: "Bibliothek, Akademie — spät abends",
    bg: "night",
    music: "theme_mystery",
    text: `Zwei Monate mit den Helden. Ich war sichtbarer geworden. Mein [Code.Spoof] hielt die meisten Scans ab, aber MENSCHEN brauchten keinen Scan. Gerüchte verbreiteten sich: »Der Level-4-Junge in der Heldenpartei.«

Und jemand ANDERES wurde ebenfalls sichtbar: Marcus Hale.

Marcus, der mich seit vier Jahren »befreundete«. Marcus, dessen [Überzeugung LV 4] Türen öffnete, die anderen verschlossen blieben. Marcus, der IMMER zur richtigen Zeit am richtigen Ort war.

Ich hätte es früher sehen müssen.

Spät abends. Bibliothek. Marcus setzte sich neben mich.

»Kaito... ich mache mir Sorgen um dich.«

»Warum?«

»Die Helden. Die Aufmerksamkeit. Mordecai hat NACH DIR GEFRAGT. Beim letzten Akademie-Rat. Er wollte wissen, wer der 'Berater' der Helden ist.«

»Was hast du gesagt?«

»Nichts. Natürlich nichts. Du bist mein Freund.«

Sein Lächeln war perfekt. Makellos. Vertrauenserweckend.

»Vielleicht solltest du dich zurückziehen? Weniger Zeit mit den Helden verbringen? Ich sage das als FREUND.«`,

    // [SC] TIMED — kritischer Moment, Marcus-Verrat-Pfad entscheidet sich jetzt
    timedDecision: true,
    timedSeconds: 8,
    timedDefault: 1, // Bei Timeout: Pfad B (Misstrauen)

    // [SC] + [AF] Entscheidung — determiert den gesamten Verrat in Kapitel 17
    choices: [
      {
        text: "A) VERTRAUEN — »Du hast recht. Danke, Marcus.«",
        desc: "[SC] Du ziehst dich zurück — was Mordecai GENAU in die Hände spielt. Der Verrat in Kapitel 17 kommt unvermittelt. Maximaler emotionaler Schaden.",
        next: "a3k7_verrat_alpha",
        affinityEffect: { marcus: 10 },
        flagEffect: { marcusWissen: false, verratPfad: "alpha" },
        narrativeFeedback: "Marcus entspannt sich sichtbar. Zu sichtbar. Dein Terminal bemerkt es — aber du hast bereits genickt.",
      },
      {
        text: "B) MISSTRAUEN — »Warum weiß Mordecai von mir? WER hat es ihm erzählt?«",
        desc: "[SC] [AF+Marcus] Marcus' Lächeln flackert — eine Millisekunde. Kaito bemerkt es. Alarm. Möglichkeit, dem Verrat zuvorzukommen.",
        next: "a3k7_verrat_alpha",
        affinityEffect: { marcus: 5 },
        alignEffect: { ordnung: 1 },
        flagEffect: { marcusWissen: false, verratPfad: "alpha_vorsicht" },
        narrativeFeedback: "Marcus' Lächeln flackert — eine Millisekunde lang. Du hast es gesehen. Das Terminal aktualisiert: Alarm-Level gestiegen.",
      },
      {
        text: "C) [Code.Read] TIEF — Marcus vollständig scannen. Jetzt. Während er spricht.",
        desc: "[SC] [AL+Ordnung] Du siehst ALLES: Level 34, Klasse Assassine, Kirchen-Agent, Iris als Geisel. Der Verrat kann vollständig verhindert werden. Aber Marcus sitzt direkt neben dir.",
        next: "a3k7_verrat_beta",
        alignEffect: { ordnung: 2, schatten: 1 },
        flagEffect: { marcusWissen: true, verratPfad: "beta" },
        wissenEffect: ["rolandFluch"], // Metapher: Du weißt jetzt, wie Systeme Menschen brechen
        narrativeFeedback: "Dein Terminal explodiert mit Daten. Level 34. Assassine. Iris Hale — krank, Geisel der Kirche. Marcus lächelt weiter. Er ahnt es nicht. Noch nicht.",
      },
    ]
  },

  // ════ KAPITEL 17: BETRAYAL.EXECUTE() ════════════════════════════════════

  a3k7_verrat_alpha: {
    act: "AKT III",
    chapter: "Kapitel 17 — Betrayal.Execute()",
    title: "Der Verrat",
    scene: "Katakomben unter der Akademie — Mitternacht",
    bg: "night",
    music: "theme_mystery",
    text: `Es würde HEUTE passieren. Ich wusste es.

Nicht durch einen Scan. Ich wusste es, weil Marcus gestern ANDERS war. Sein Lächeln war eine Nuance zu breit, sein Händedruck eine Sekunde zu lang, sein »Gute Nacht, Kaito« eine Note zu warm.

Menschen, die unwiderrufliche Dinge taten, wurden vorher immer FREUNDLICHER.

Mitternacht. Marcus erschien an der Tür. »Ich habe etwas gefunden. In der Verbotenen Bibliothek. Es muss JETZT sein.«

Jeder Instinkt sagte: Nein. NEIN.

Aber der Teil von mir, der noch WOLLTE, dass es nicht wahr war — der gewann. Für die letzten fünf Minuten, in denen ich noch naiv sein durfte.

Dann: die Katakomben. Tiefer als die Bibliothek. Eine Tür, die sich schloss.

Sechs Kirchen-Inquisitoren. In voller Rüstung.

Und hinter ihnen, in weißen Gewändern — ERZBISCHOF MORDECAI.

»Kaito Ashford. Oder sollte ich sagen... Anomalie Null.«

Kaito drehte sich zu Marcus. Dessen Gesicht war leer. Nicht triumphierend. Nicht grausam. Leer. Als hätte jemand alle Emotionen herausgeschnitten.

»...Wie lange?«

»...Seit dem ersten Tag.«

»Und deine Schwester? War das auch eine Lüge?«

Marcus' Maske brach. Nur einen Moment. Ein Zucken um die Augen. Schmerz.

»Nein. Iris ist echt. Und wenn ich das hier nicht tue... stirbt sie.«`,

    text2: `Mordecai trat vor. Sein Scan — [Göttliches Auge des Systems], Rang A+ — traf Kaitos [Code.Spoof] und ZERBRACH ihn wie Glas.

»Kein Level. Keine Klasse. Keine System-Registrierung. Du existierst nicht. Und doch stehst du vor mir. Wie?«

»Das würde ich Ihnen gerne erzählen, aber ich bin gerade etwas eingeschüchtert von den sechs Leuten mit Schwertern.«

»Humor. In deiner Situation. Bemerkenswert.«

Er trat näher. »Was BIST du, Kind? Ein Fehler? Ein Zufall? Oder etwas, das jemand ABSICHTLICH in unsere Welt gesetzt hat?«`,

    // [SC] Definiert den Ton des gesamten Falls + Mordecai-Redemption-Pfad
    choices: [
      {
        text: "A) DIE VOLLE WAHRHEIT — »Ich bin eine Anomalie. Erschaffen von der Siebten Architektin. Ich bin hier, um die Wahrheit aufzudecken.«",
        desc: "[SC] Mordecai wird bleich — dann wütend. Aber sein Zittern verrät: Er WEISS etwas. Sofortige Einkerkerung, Verhöre. Aber ein Riss in seiner Überzeugung.",
        next: "a3k7_kerker",
        alignEffect: { licht: 2, verborgenheit: -5 },
        flagEffect: { mordecaiWissen: "septima", mordecaiRiss: true },
        narrativeFeedback: "Mordecai erstarrt. »Die... Siebte? Unmöglich.« Dann: Wut. Aber seine Hände zittern. Er weiß es. Irgendwo tief in ihm — er weiß es.",
      },
      {
        text: "B) DIE HALBE WAHRHEIT — »Ich bin ein Fehler im System. Mehr nicht. Ein Glitch. Ungefährlich.«",
        desc: "[SC] Mordecai glaubt es nicht — aber moderate Einstufung. Weniger aggressive Einkerkerung.",
        next: "a3k7_kerker",
        alignEffect: { ordnung: 1 },
        flagEffect: { mordecaiWissen: "glitch", mordecaiRiss: false },
        narrativeFeedback: "Mordecais Augen verengen sich. »Ungefährlich?« Er glaubt dir nicht. Aber er hat keinen Beweis für mehr.",
      },
      {
        text: "C) SCHWEIGEN — Kein Wort. Du starrst Mordecai an.",
        desc: "[SC] [AL-Schatten] Mordecai wartet 30 Sekunden in Stille. »Du bist entweder sehr mutig oder sehr dumm.« Minimale Information preisgegeben — das gibt dir Macht.",
        next: "a3k7_kerker",
        alignEffect: { schatten: 1, ordnung: 1 },
        flagEffect: { mordecaiWissen: "nichts", mordecaiRiss: false },
        narrativeFeedback: "Die Stille dehnt sich aus. Mordecais Gesicht zeigt keine Emotion — aber seine Finger trommeln einmal auf seinen Mantel. Er ist unsicher. Das ist Macht.",
      },
      {
        text: "D) GEGENANGRIFF — »Ich weiß, was beim System-Update in drei Jahren passiert. Warum HELFEN Sie dabei, Mordecai?«",
        desc: "[SC] TIMED 6 Sekunden. Mordecai erstarrt. »Woher weißt du vom Update?« Öffnet Mordecai-Redemption-Pfad in Akt V. Gefährlich — aber potentiell wertvoll.",
        next: "a3k7_kerker",
        timedDecision: true,
        timedSeconds: 6,
        timedDefault: 2, // Bei Timeout: Pfad C
        alignEffect: { licht: 1, ordnung: 1 },
        flagEffect: { mordecaiWissen: "update", mordecaiRiss: true, mordecaiRedemptionMoeglich: true },
        narrativeFeedback: "Mordecai ERSTARRT. Sein Gesicht wird zur Maske. »...Woher weißt du vom Update?« Er will dich nicht einsperren — er will REDEN.",
      },
    ]
  },

  // Beta-Pfad: Verrat verhindert
  a3k7_verrat_beta: {
    act: "AKT III",
    chapter: "Kapitel 17 — Betrayal.Execute()",
    title: "Der verhinderte Verrat",
    scene: "Schlafsaal, Akademie — Mitternacht",
    bg: "night",
    music: "theme_friendship",
    text: `Marcus klopfte an meine Tür. Mitternacht. »Ich habe etwas gefunden.« Der klassische Köder.

Aber ich war vorbereitet.

»Hey Marcus. Lass mich raten — Verbotene Bibliothek? Etwas Dringendes? Nur wir zwei?«

»...Ja. Genau.«

»Und unten warten sechs Inquisitoren und Mordecai, richtig?«

Marcus ERSTARRTE. Sein Lächeln STARB.

»Ich weiß es, Marcus. Seit WOCHEN. Kirchen-Agent. Erzbischof Mordecai. Deine Schwester Iris. Alles.«

Marcus' Hand wanderte zum Dolch — Instinkt. Dann stoppte er. Weil Kaito nicht drohte. Kaitos Stimme war nicht wütend. Sie war... traurig.

»Ich werde nicht kämpfen. Und ich werde dich nicht verraten. Weil ich weiß, WARUM du es tust.«

»Du... VERSTEHST NICHT. Wenn ich nicht—«

»Iris stirbt. Ja. Ich verstehe. Besser als du denkst.«

Stille. Regen draußen.

»Ich biete dir einen Deal an, Marcus. Du gehst zurück zu Mordecai. Du sagst ihm, ich sei ahnungslos. Du kaufst mir ZEIT. Und ICH finde einen Weg, Iris zu befreien.«

»Du? Ein Fünfzehnjähriger ohne Level? Gegen die Systemkirche?«

»Ein Fünfzehnjähriger, der das System lesen kann wie ein Buch. Der seit fünf Jahren unter der Nase der Kirche lebt. Und der vier Helden hinter sich hat.«

Marcus starrte ihn an. Lang. Suchend.

»...Warum würdest du mir HELFEN? Ich habe dich VERRATEN.«

»Du hast es VERSUCHT. Aus Verzweiflung. Und Verzweiflung kann ich heilen.«`,

    // [SC] Marcus-Redemption wird hier definiert
    choices: [
      {
        text: "A) »Ich brauche etwas von DIR. Alles, was du über Mordecais Pläne weißt.«",
        desc: "[SC] [AF+Marcus+30] Doppelspion-Pfad beginnt. Marcus wird zum mächtigsten Asset der Nullen. +Wissen über Mordecais Pläne massiv.",
        next: "a3k8_exil_vorbereitung",
        affinityEffect: { marcus: 30 },
        alignEffect: { ordnung: 2 },
        flagEffect: { marcusStatus: "doppelspion", verratPfad: "beta_doppelspion" },
        narrativeFeedback: "Marcus zögert. Dann sackt etwas in ihm zusammen — nicht Niederlage, sondern Erleichterung. »...Alles. Ich erzähle dir alles.«",
      },
      {
        text: "B) »Geh. Sag Mordecai, was er hören will. Und wenn der Tag kommt — steh auf der richtigen Seite.«",
        desc: "[SC] [AF+Marcus+15] Verrat wird verschoben, nicht verhindert. Marcus bleibt Unsicherheitsfaktor — wird in Akt V getestet.",
        next: "a3k8_exil_vorbereitung",
        affinityEffect: { marcus: 15 },
        flagEffect: { marcusStatus: "unsicher", verratPfad: "beta_warten" },
        narrativeFeedback: "Marcus nickt. Langsam. Er dreht sich um. An der Tür bleibt er stehen — sagt nichts — und geht dann.",
      },
      {
        text: "C) »Wenn du mich nochmal verrätst — WIRKLICH verrätst — dann kann ich dich nicht mehr retten.«",
        desc: "[SC] [AF+Marcus+20] Marcus wird loyal, aber nervös. Permanent ein Schwert über der Beziehung.",
        next: "a3k8_exil_vorbereitung",
        affinityEffect: { marcus: 20 },
        alignEffect: { schatten: 3 },
        flagEffect: { marcusStatus: "warnung", verratPfad: "beta_warnung" },
        narrativeFeedback: "Marcus schluckt. »...Verstanden.« Zwei Worte. Aber er meint sie.",
      },
    ]
  },

  // ════ KAPITEL 18: DER KERKER ════════════════════════════════════════════

  a3k7_kerker: {
    act: "AKT III",
    chapter: "Kapitel 18 — Prison.Break()",
    title: "Die Zelle",
    scene: "Katakomben, Akademie — Tag 1–3",
    bg: "void",
    music: "theme_void_terminal",
    text: `Die Zelle war drei mal drei Meter. Steinboden, Steinwände, eine Holzpritsche, ein Eimer. Die System-Siegel an den Wänden leuchteten schwach blau — sie blockierten alles.`,

    systemBox: {
      title: "VOID-TERMINAL — EINGESCHRÄNKTER MODUS",
      lines: [
        "> System-Siegel erkannt.",
        "> Terminal-Funktionalität: 30%",
        ">",
        "> [Code.Read] — Stark eingeschränkt (Reichweite: 1m)",
        "> [Code.Analyze] — Verfügbar (nur eigene Entität)",
        "> [Code.Spoof] — BLOCKIERT",
        "> [Aether.Resonance] — BLOCKIERT",
        ">",
        "> Die Siegel blockieren Aether-Fluss.",
        "> Aber sie blockieren nicht GEDANKEN.",
        "> Der Träger kann immer noch DENKEN.",
        "> Das ist seine gefährlichste Waffe.",
      ]
    },

    text2: `Tag zwei. Mordecai kam.

»Hast du geschlafen?«

»Fantastisch. Das Kissen ist etwas hart, aber die Aussicht ist unschlagbar.«

»Humor als Verteidigungsmechanismus. Typisch für Menschen, die Angst haben.«

»Oder für Menschen, die in einem Keller sitzen und WIRKLICH ein Kissen bräuchten.«

Mordecai setzte sich auf einen Stuhl. Überraschend aufrichtig:

»Ich glaube an das System, Kaito. Nicht blind — BEWUSST. Ich kenne seine Fehler. Aber ich glaube trotzdem daran. Weil die Alternative SCHLIMMER ist.«

»Warum haben Sie dann Angst vor einem fünfzehnjährigen Jungen ohne Level?«

Mordecai ging. Die Tür schloss sich.

Kaito saß in der Stille. Und lächelte.

Mordecai hatte Zweifel. Tief, vergraben, bewacht — aber sie waren DA.

Tag drei. Akiras Deadline. Aber die Rettung kam nicht von Akira.

Sie kam von UNTEN.

Ein Geräusch. Unter dem Boden. Drei kurz. Drei lang. Drei kurz. Der Steinboden BRACH AUF.

Und aus dem Loch schaute — Sera Blackwood.

Achtzehn Jahre alt. Schwarzes Haar, rote Strähne, bernsteinfarbene Augen, die in der Dunkelheit leuchteten. Dreck im Gesicht. Und ein Grinsen, das GEFÄHRLICH war.

»Überraschung.«`,

    text3: `»Sera?! Wie— Was— Du bist in KREUZWEG!«

»War ich. Jetzt bin ich hier. In einem Tunnel unter der Akademie, den ich mit meinen Händen GEGRABEN habe.«

»Tunnel... GRABEN?«

»Feueraffinität, erinnerst du dich? Ich kann Stein SCHMELZEN.«

»Als ich gehört habe, was passiert ist...«

Ihr Grinsen verschwand. Ersetzt durch etwas, das BRANNTE.

»...war ich SEHR wütend.«

Die System-Siegel funktionierten an den WÄNDEN. Nicht am BODEN. Aldwin hatte das Versäumnis bemerkt.

Finn war oben. Irgendwo. Er lenkte die Wachen ab.

»HALT! IM NAMEN DER... ähm... DER GERECHTIGKEIT! JA! GERECHTIGKEIT!«

Sera seufzte. »Er lenkt ab.«

Kaito lachte — zum ersten Mal seit drei Tagen.

Sera Blackwood. Das Mädchen, dem ich einmal gesagt hatte, sie sei nicht komisch, sondern MÄCHTIG. Die Halbdämonin, die das System am liebsten gelöscht hätte.

Sie hatte sich durch STEIN GEBRANNT, um mich zu retten.

Manche Menschen zeigten Liebe mit Worten. Andere mit Geschenken.

Sera zeigte Liebe, indem sie Tunnel durch Felsen schmolz.`,

    choices: [{ text: "→ Exil — Der Umgang mit Mordecai", next: "a3k8_exil_vorbereitung" }],
    affinityEffect: { sera: 25, finn: 10 },
    narrativeFeedback: "Kaito ergreift Seras Hand. Die verbrannten Steine sind noch warm. Er sagt nichts. Sie auch nicht. Das ist genug.",
  },

  a3k7_aldwin_brief: {
    act: "AKT III",
    chapter: "Kapitel 18 — Prison.Break()",
    title: "Der Brief",
    scene: "Katakomben, Akademie — Nacht 2",
    bg: "void",
    music: "theme_void_terminal",
    text: `In der zweiten Nacht in der Zelle fand ich einen Brief.

Nicht unter der Tür. Im Code. Eine Nachricht die im System-Rauschen versteckt war — so fein, dass kein Inquisitor sie lesen konnte. Nur ich.

Nur jemand der Code so lesen konnte wie Musik.

\`\`\`
> NACHRICHT VON: [UNBEKANNT — ALT-AETHERISCH VERSCHLÜSSELT]
> INHALT:
>
> Du sitzt in einer Zelle. Das weißt du.
> Ich sitze 400 Kilometer entfernt und weiß
> dass du in einer Zelle sitzt.
> Das sollte dich beruhigen. Es tut es nicht.
>
> Ich kann nicht zurückkommen. Nicht jetzt.
> Wenn ich zurückkomme, bringen sie nicht nur
> dich weg — sie bringen ALLE weg.
>
> Aber ich kann dir sagen was ich weiß.
>
> Septima hat mir einen Namen gegeben.
> Nicht ihren. Einen anderen.
> TERTIUS. Dritter Architekt. Schläft.
> Irondeep. Ebene 33.
>
> Du weißt was damit anzufangen ist.
>
> Einer noch:
> Ich hätte Millheim nicht verlassen sollen.
> Das war falsch.
> Nicht taktisch — menschlich.
> Das wollte ich dir sagen, seit ich gegangen bin.
>
> — A.
\`\`\`

Aldwin.

Vierhundert Jahre alt. Rang S. Der mächtigste Wächter den ich je gesehen hatte.

Er entschuldigte sich in verschlüsselten System-Code-Nachrichten an Kinder in Verliesen.

Das war, dachte ich, die rührendste und absurdeste Sache die mir je passiert war.

Ich löschte die Nachricht. Speicherte ihren Inhalt.

Tertius. Irondeep. Ebene 33.

Ich hatte etwas zu tun, sobald ich hier rauskam.`,
    choices: [{ text: "→ Nacht 2 in der Zelle", next: "a3k7_aldwin_brief" }],
    affinityEffect: { aldwin: 25 },
    wissenEffect: [],
  },

  a3k8_exil_vorbereitung: {
    act: "AKT III",
    chapter: "Kapitel 18 — Prison.Break() / Pressure.Build()",
    title: "Der Umgang mit Mordecai",
    scene: "Akademie — nach Flucht oder Beta-Pfad",
    bg: "night",
    music: "theme_mystery",
    text: `Frei oder nie eingesperrt — Kaito stand vor derselben Frage: Mordecai wusste von ihm. Der Druck würde nicht aufhören.

Die Helden erfuhren davon. Akira wollte kämpfen. Emma wollte recherchieren. Dmitri sagte: »Sag uns, was wir tun sollen.« Yuki weinte still.

Meridia lieferte eine nüchterne Analyse: »Mordecai wird nicht aufhören. Du musst die Akademie verlassen. Aber du hast die Wahl, WIE.«`,

    // [SC] Exilform — definiert Kaitos Reputation für Akt IV
    choices: [
      {
        text: "A) ÖFFENTLICHER ABGANG — Du verlässt die Akademie mit einer Erklärung. Akira steht neben dir.",
        desc: "[SC] [AF+Akira+15] [AL-Verborgenheit] »Ich gehe freiwillig. Weil ich außerhalb eurer Mauern mehr erreichen kann.« Gerüchte: du bist mächtig. Mordecai hat Probleme, das zu widerlegen.",
        next: "a3k9_abschiede",
        affinityEffect: { akira: 15 },
        alignEffect: { licht: 1, verborgenheit: -3 },
        flagEffect: { exilForm: "oeffentlich", akademieRuf: "legende" },
        alignEffect: { licht: 1, ordnung: 1 },
        narrativeFeedback: "Akira stellt sich neben dich. Zwei Studenten gegen einen Erzbischof — und der Erzbischof blinzelt zuerst.",
      },
      {
        text: "B) VERHANDLUNG MIT MORDECAI — Du nutzt sein Wissen über das Update als Druckmittel.",
        desc: "[SC] [AL+Ordnung] Mordecai gewährt dir geordnetes Exil. Du gibst ihm nichts — aber du zeigst, dass du WEISST. Öffnet Mordecai-Redemption weiter.",
        next: "a3k9_abschiede",
        alignEffect: { ordnung: 2 },
        flagEffect: { exilForm: "verhandlung", akademieRuf: "unbekannt", mordecaiRedemptionMoeglich: true },
        narrativeFeedback: "Mordecai mustert dich lange. Dann: »Du weißt zu viel für dein Alter.« Es ist kein Kompliment. Aber er lässt dich gehen.",
      },
      {
        text: "C) VERSCHWINDEN IN DER NACHT — Spurlos. Leeres Bett. Keine Erklärung.",
        desc: "[SC] [AL+Schatten] Mordecai findet ein leeres Bett. Gerüchte explodieren — Phantom. Perfekt für Akt IV: Eminence-in-Shadow-Pfad.",
        next: "a3k9_abschiede",
        alignEffect: { schatten: 3 },
        flagEffect: { exilForm: "phantom", akademieRuf: "mythe" },
        alignEffect: { schatten: 2, verborgenheit: 2 },
        narrativeFeedback: "Der Morgen bricht an. Kaitos Bett ist leer und kalt. Mordecai steht davor und sagt lange nichts.",
      },
      { text: "D) MARCUS ALS ASSET — Wenn du seinen Verrat kennst, nutze ihn. Lass ihn glauben, er habe Erfolg.",
        desc: "[SC] Nur verfügbar wenn Marcus früh durchschaut. Marcus wird zum unwissenden Doppelspion.",
        requires: { flag: { verratPfad: "beta" } },
        next: "a3k9_abschiede",
        alignEffect: { verborgenheit: 2 },
        flagEffect: { marcusStatus: "doppelspion_kontrolliert", marcusVertrauen: true },
        alignEffect: { schatten: 2, verborgenheit: 1 },
        narrativeFeedback: "Kaito schreibt einen Brief. Nicht an die Helden. An Marcus. Was Marcus für einen Verrat hält, ist genau das, was Kaito ihm schicken wollte.",
      },
    ]
  },

  // ════ KAPITEL 19: EXILE.BEGIN() ════════════════════════════════════════

  a3k9_abschiede: {
    act: "AKT III",
    chapter: "Kapitel 19 — Exile.Begin()",
    title: "Die letzte Nacht — Abschiede",
    scene: "Dach der Akademie, Aetheria Prime",
    conditionalFlag: "yukiToken",
    textConditional: { hase: `Yuki hatte mir den Hasen gegeben. Ich hatte ihr Vertrauen gegeben — schwerer zu tragen als ein Anhänger.`, stein: `Dmitris Hälfte in meiner Tasche. Die andere bei Dmitri. Wer die Hälfte trägt, kommt zurück.`, default: `` },
    bg: "night",
    music: "theme_family",
    text: `Ich stand auf einem Dach. Über der Stadt. Unter den Sternen.

Fünf Jahre an der Akademie. Fünf Jahre des Lernens, des Planens, des Wartens. Und jetzt — rausgeworfen, gejagt, allein.

Nicht ganz allein. Hinter mir, auf dem Dach, kamen die Abschiede.

AKIRA: »Das ist Mist.«

»Eloquent.«

»Ich bin ein Schwertheld, kein Dichter. Und es IST Mist. Kaito — ich werde rausfinden, was die Kirche plant. Das System-Update. Die Wahrheit hinter dem Summoning. ALLES.«

»...dann finde ich dich.«

Faust gegen Faust.

EMMA: Sie reichte ihm ein Buch — dünn, handgebunden. Handgezeichnete Karten. Jeder Dungeon, den Emma mit ihrem [Allsehenden Auge] analysiert hatte.

»Die zehn gefährlichsten Dungeons in Valtheris. Für dein... 'Solo-Leveling'.«

»Emma... das ist...«

»Sag nicht DANKE. Sag 'Ich komme zurück'. Das ist nützlicher.«

»Ich komme zurück.«

»...Gut.«

DMITRI: Er zog etwas aus seiner Tasche — einen kleinen, rauen Stein. Grau, unscheinbar.

»In meiner Welt gibt es eine Tradition. Wenn ein Soldat in den Krieg zieht, gibt ihm sein Kamerad einen Stein. Man trägt ihn, bis man sich wiedersieht. Dann gibt man ihn zurück.«

Er legte den Stein in Kaitos Hand.

»Gib ihn mir zurück.«

»...Ja, Sir.«

»Nicht Sir. Dima. Meine Freunde nennen mich Dima.«`,

    text2: `YUKI: Sie stand am weitesten entfernt. Ihre Hände um ihren Stoffhier-Anhänger.

»Ich... ich will nicht, dass du gehst.«

»Yuki. Ich muss dir etwas sagen. Dein Skill. [Mana-Overflow]. Er... kostet etwas. Etwas, das die Kirche dir nicht gesagt hat.«

»...Was?«

»Er verkürzt deine Lebensspanne. Jedes Jahr hier — fünf Jahre deines Lebens.«

Stille. Der Wind.

»...Wie viel habe ich noch?«

»Wenn nichts passiert... zwanzig Jahre. Vielleicht weniger.«

Yuki sackte zusammen. Nicht vor Schock — vor RESIGNATION. Als hätte sie es gewusst. Irgendwo tief in ihr.

»Yuki. Ich WERDE einen Weg finden. Ich brauche Zeit. Und ich brauche, dass du LEBST. Nicht für die Welt. Nicht für das System. Für DICH.«

»...Versprichst du es?«

»Ich verspreche es.«`,

    // [AF] Yuki — emotionaler Höhepunkt, Romance-Pfad-Verstärkung
    choices: [
      {
        text: "A) Du nimmst den Hasen. Legst deine Stirn gegen ihre. Kein Wort.",
        desc: "[AF+Yuki MAX] Tiefster Moment des gesamten Akts. Romance Route 3 wird aktiviert. Kaito trägt den Hasen für den Rest des Spiels.",
        next: "a3k9_sprung",
        affinityEffect: { yuki: 30 },
        alignEffect: { licht: 2 },
        flagEffect: { yukiToken: "hase", yukiRomance: true },
        narrativeFeedback: "Stille. Wärme. Yukis Atem stockt kurz. Das Eis der Arena, das sie nie ganz loswerden konnte — schmilzt ein weiteres Stück.",
      },
      {
        text: "B) »Ich nehme ihn. Und ich bringe ihn dir zurück. Zusammen mit einer Lösung.«",
        desc: "[AF+Yuki+25] Retter-Bond. Der Hasen-Anhänger wird ein permanentes Story-Item.",
        next: "a3k9_sprung",
        affinityEffect: { yuki: 25 },
        alignEffect: { licht: 1 },
        flagEffect: { yukiToken: "hase", yukiRomance: false },
        narrativeFeedback: "Yuki nickt. Ein Lächeln — klein, zerbrechlich, aber echt. Sie drückt dir den Hasen in die Hand.",
      },
      {
        text: "C) Du brichst Dmitris Stein entzwei. Eine Hälfte für Yuki. Eine für dich.",
        desc: "[AF+Yuki+20] [AF+Dmitri+5] Poetisch. Dmitri sieht es und nickt anerkennend. »Wenn wir die Hälften zusammenlegen, ist der Stein wieder ganz.«",
        next: "a3k9_sprung",
        affinityEffect: { yuki: 20, dmitri: 5 },
        flagEffect: { yukiToken: "stein", yukiRomance: false },
        narrativeFeedback: "Dmitri sieht es von weitem. Er nickt einmal — langsam, schwer. Das ist, bei ihm, die höchste Form der Anerkennung.",
      },
    ]
  },

  a3k9_sprung: {
    act: "AKT III",
    chapter: "Kapitel 19 — Exile.Begin()",
    title: "»Null. Mein Name ist Null.«",
    scene: "Außerhalb der Mauern von Aetheria Prime — Regen",
    bg: "night",
    music: "theme_void_terminal",
    text: `»Wenn ihr jemanden trefft, der sich 'Null' nennt... wisst ihr, wer es ist.«

Er sprang. Nicht nach unten — NACH VORNE. Über die Dächergasse, auf das nächste Haus, weiter, weiter. Schatten zu Schatten. Unsichtbar. Wie immer.

Die vier Helden sahen ihm nach. Sein Schatten verschwand in der Nacht.

Akira, leise: »...Null.«

Dann: außerhalb der Mauern von Aetheria Prime. Eine leere Straße. Regen. Kalt.

Fünfzehn Jahre alt. Kein Level. Keine Klasse. Keine Armee.

Nur ein Tagebuch in Alt-Aetherisch, eine Karte zu einem Ort, den das System vergessen hat, und eine Liste von Versprechen.

Zwölf Versprechen. Jedes einzelne unmöglich.

Aber ich war ein Programmierer. Und Programmierer lösten unmögliche Probleme, indem sie sie in kleinere, MÖGLICHE Probleme zerlegten.

Ich holte tief Luft. Die kalte Nachtluft brannte in meinen Lungen. Der Regen lief über mein Gesicht.

Und dann — zum ersten Mal, seit ich in dieser Welt geboren wurde — gab ich mir selbst einen Namen.`,

    systemBox: {
      title: "VOID-TERMINAL — IDENTITÄTS-UPDATE",
      lines: [
        "> ...",
        ">",
        "> Identitäts-Update akzeptiert.",
        ">",
        "> Willkommen, NULL.",
        ">",
        "> Phase IV initialisiert.",
        ">",
        "> Ziel: In 3 Jahren bereit sein.",
        ">",
        "> Zeit: Beginnt JETZT.",
        ">",
        "> — S.: »Endlich.«",
      ]
    },

    choices: [{ text: "→ Kapitel 20: Reboot — Die Wiedergeburt im Schatten", next: "a3k10_reboot" }],
  },

  // ════ KAPITEL 20: REBOOT() ══════════════════════════════════════════════

  a3k10_reboot: {
    act: "AKT III",
    chapter: "Kapitel 20 — Reboot()",
    title: "Solo-Leveling beginnt",
    scene: "Goblin-Höhle »Grünschimmel«, Rang E",
    conditionalFlag: "gregorBuch",
    textConditional: { true: `Seite 47. »Die Siebte wartet auf denjenigen der lesen kann was kein System lesen kann.« Gregor hatte es gewusst. Ich stand auf.`, default: `` },
    bg: "void",
    music: "theme_training",
    text: `Die ersten Tage allein waren... demütigend.

Keine Akademie-Mensa. Kein warmes Bett. Ich schlief in verlassenen Scheunen, unter Brücken, einmal in einer hohlen Eiche, die nach nassem Hund roch.

Mein Essen: Was ich fand. Beeren, Pilze (danke, Aldwin). Einmal ein Kaninchen, das ich mit einer Wilden-Magie-Falle fing. Es schmeckte furchtbar. Ich aß alles.

Ich war wieder bei Null. Buchstäblich.

Drei Tage nach der Flucht: ein Rang-E-Dungeon am Straßenrand. Die Goblin-Höhle »Grünschimmel«. Empfohlenes Level: 11-20.

»Ein Goblin-Dungeon. Das Äquivalent eines Tutorial-Levels.«

Er trat ein. Und kämpfte wie ein HACKER.`,

    systemBox: {
      title: "KAITOS KAMPFSTIL — »System Exploit Combat«",
      lines: [
        "> METHODE 1: ANALYSE VOR ANGRIFF",
        "> → [Code.Read] auf jeden Gegner ZUERST",
        "> → Schwachstellen identifizieren",
        "> → Kämpfe nur mit vollständiger Analyse",
        ">",
        "> METHODE 2: UMGEBUNGS-EXPLOIT",
        "> → Dungeon selbst als Waffe nutzen",
        "> → Instabile Decken → Steinschlag",
        "> → Engstellen → kein Umzingeln möglich",
        ">",
        "> METHODE 3: WILDE-MAGIE-FEINARBEIT",
        "> → [Funke] → Goblin-Augen (Blendung)",
        "> → [Windhauch] → Sand aufwirbeln",
        "> → [Erdgespür] → Hinterhalte fühlen",
        ">",
        "> METHODE 4: TAKTISCHER RÜCKZUG",
        "> → Nicht jeden Kampf GEWINNEN müssen",
        "> → Goblins sind dumm → Ablenkungen wirken",
      ]
    },

    text2: `Der Goblin-Chef »Gurk«. Level 12. HP: 340. Schwäche: Licht.

»GURK ZERSCHMETTERN KLEINES MENSCHENKIND!«

»Natürlich tust du das, Gurk.«

Aether.Resonance. Bitte: LICHT.

Ein blindendes, weißes Licht — purer Aether — explodierte im Raum.

»AAAARGH! GURKS AUGEN!«

Kaito nutzte die Sekunde. Rennen. Sprint. Der Dolch — normal, 5 Silber — fuhr in Gurks ungeschützten Hals.

Gurk fiel.

Kein epischer Kampf. Kein dramatischer Showdown. Ein kurzer, schmutziger, EFFIZIENTER Kill.

Das war mein Kampfstil. Nicht glorreich. Nicht heldenhaft. Aber EFFEKTIV.

Und im Terminal erschien etwas, das ich nie zuvor gesehen hatte.`,

    systemBox2: {
      title: "VOID-TERMINAL — NEUE FÄHIGKEIT FREIGESCHALTET",
      lines: [
        "> [Code.Copy] — Rang: Rudimentär",
        "> → Kann System-Skills von besiegten Gegnern",
        ">   als FRAGMENTE kopieren",
        "> → Fragmente sind nicht vollständig — müssen",
        ">   vom Träger rekonstruiert werden",
        "> → Außerhalb des Systems. Nach eigenen Regeln.",
        ">",
        "> Verfügbare Kopie:",
        "> [Schwerer Hieb — FRAGMENT]",
        ">",
        "> ...Der Träger kann jetzt Skills STEHLEN.",
        "> Oder genauer: Skills VERSTEHEN und NEU BAUEN.",
        ">",
        "> Die Solo-Leveling-Phase beginnt.",
      ]
    },

    text3: `»...Ich kann Skills kopieren.«

Er schaute auf seine Hände. Dann auf den toten Goblin-Chef. Dann auf den Dungeon-Ausgang.

»Nein. Nicht kopieren. DEKOMPILIEREN. Und NEU ZUSAMMENSETZEN.«

Ein Grinsen. Das Grinsen eines Programmierers, der gerade realisiert hat, dass der gesamte Quellcode der Welt Open Source ist.

Gregors Tagebuch. Die letzte Seite — in Gregors eigener Handschrift, auf Common:

»An meinen Enkel, falls er das hier je liest:

Ich weiß nicht, WAS du bist. Aber ich weiß, WER du bist. Du bist ein Junge, der alte Männer Geschichten erzählen lässt. Der seine Schwester hält, wenn sie weint. Der einem einsamen Mädchen am Fluss sagt, sie sei nicht komisch.

Das System hat einen Namen für Menschen ohne Status. Es nennt sie 'Null'. Wertlos. Leer.

Aber meine Großmutter hat mir ein anderes Wort beigebracht: 'AELTHAR'.

In Alt-Aetherisch bedeutet es: 'Der, der ZWISCHEN den Dingen steht.'

Nicht leer. Nicht wertlos. FREI.

Mach uns stolz, Aelthar.

— Gregor«`,

    choices: [{ text: "→ AKT IV: Elevation — Die Nullen entstehen", next: "a4k1_intro" }],
    skillUnlock: ["codeCopy"],
    wissenEffect: ["nullZoneExistenz"],
  },

  // ════ AKT IV PLATZHALTER ═══════════════════════════════════════════════
  a4k1_intro: {
    act: "AKT IV",
    chapter: "Kapitel 21 — Elevation.Init()",
    title: "AKT IV — Die Nullen entstehen",
    scene: "Aethermere — Alter: 15–18 Jahre",
    bg: "night",
    music: "theme_void_terminal",
    text: `Drei Jahre. Das Update nähert sich.

In drei Jahren wird das Genesis-System ein Update durchführen, das jede Anomalie, jede Wilde Magie, jede Freiheit für immer auslöscht.

Kaito — jetzt bekannt als NULL — hat diese drei Jahre genutzt.

Er ist nicht mehr allein.

Die Nullen entstehen.

[Akt IV — in Entwicklung]`,

    systemBox: {
      title: "VOID-TERMINAL",
      lines: [
        "> AKT IV: »Elevation« folgt in Kürze.",
        "> Kapitel 21–30.",
        ">",
        "> — S.: »Du hast mehr Mut als erwartet.«",
      ]
    },

    choices: [{ text: "→ Zum Hauptmenü", next: "__title__" }],
  },
};

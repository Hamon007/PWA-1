// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT V: OVERFLOW
// Kapitel 31–40: Krieg & Enthüllungen, Alter 18–20
// ─── ENTSCHEIDUNGS-KATEGORISIERUNG ────────────────────
// [SC] STORY-CRITICAL  → verändert Plot/Kapitel-Routing
// [AF] AFFINITY        → 0–100 Beziehungswert, immer mit narrativeFeedback
// [AL] ALIGNMENT       → Licht/Schatten + Ordnung/Chaos
// ═══════════════════════════════════════════════════════

export const AKT_V = {
  a5k1_intro: {
    act: "AKT V",
    chapter: "Zeitsprung — Das Jahr des Feuers",
    title: "18",
    scene: "Aethermere — Ein Jahr vor dem Update",
    bg: "chaos",
    music: "theme_training",
    text: `Achtzehn.

Ich war achtzehn.

In meinem ersten Leben war ich mit achtzehn in die erste eigene Wohnung gezogen — ein Zimmer, ein Schreibtisch, eine Kaffeemaschine die zu laut war. Ich hatte gedacht, das sei Freiheit.

In diesem Leben war ich mit achtzehn der Anführer einer Schattenorganisation, die eine dreitausendjährige göttliche Ordnung zu stürzen versuchte. Ich hatte Rex, der nicht mehr in Räume passte. Ich hatte Gorrick, der im Keller System-Waffen schmiedete und dabei summte. Ich hatte Veyra, die jetzt ihr echtes Gesicht zeigte — manchmal, bei bestimmten Lichtverhältnissen, wenn sie dachte, niemand schaute. Ich hatte Ren, der täglich solider wurde, als würde die Welt endlich anfangen, an ihn zu glauben.

Und ich hatte ein Terminal, das mich täglich erinnerte:

\`\`\`
> COUNTDOWN: 398 TAGE
> STATUS: KRITISCH
> Das System-Update wird alle Möglichkeiten
> zur Veränderung permanent eliminieren.
> Träger: Du weißt was auf dem Spiel steht.
\`\`\`

Ich wusste es.

Dreihundertachtundneunzig Tage, um das Unmögliche möglich zu machen.

Ich hatte nie gelernt, auf Unmöglichkeit zu hören.`,
    text2: `Was in diesem Jahr passierte, passierte schnell.

Zu schnell, um es in Worte zu fassen — also nicht in Worte, sondern in Momente.

Der Moment, als General Kross zum ersten Mal vor uns stand, nicht als Feind.

Der Moment, als Yuki den Hasen-Anhänger durch die Luft warf und sagte: »Dann halte ihn, bis du zurückkommst.«

Der Moment, als Aria das Lied sang — Elenas Lied — und Kaito fror, weil er plötzlich verstand, wie alt diese Geschichte war.

Der Moment, als Mira ihm einen Brief schickte — handgeschrieben, mit einem Zeichnung von Rex drauf — und schrieb: »Ich train jetzt jeden Tag. Wenn das vorbei ist, kämpfe ich neben dir. Das ist kein Vorschlag.«

Er hatte zurückgeschrieben: »Das weiß ich.«

Dreihundertachtundneunzig Tage.

Dann dreihundert.

Dann hundert.

Dann drei.`,
    choices: [{ text: "→ Operation Reinigung beginnt", next: "a5k1_kriegsplan" }],
  },

  a5k1_kriegsplan: {
    act: "AKT V",
    chapter: "Kapitel 31 — War.Init()",
    title: "Operation Reinigung",
    scene: "Verbotener Turm — 398 Tage bis zum Update",
    bg: "night",
    music: "theme_void_terminal",
    conditionalFlag: "kriegsPrioritaet",
    textConditional: {
      militaerisch: `Akiras öffentliche Verweigerung war bereits geschehen bevor Veyras Bericht ankam. »Die Helden verweigern den Einsatz«, stand in der Meldung. »Mordecai hat keine Speerspitze mehr.« Manchmal ist das Beste früh genug angefangen zu haben.`,
      diplomatisch: `Lilithia hatte Varkos' Mobilisierung verlangsamt — drei Wochen. Mordecais Bedrohungsrhetorik stand ohne Fundament da.`,
      alle: `Drei Fronten gleichzeitig. Das Terminal: »Kein Druck.« Ich: »Danke, Terminal.«`,
      default: ``,
    },
    text: `Der Krieg begann nicht mit einem Schlachtruf.

Er begann mit einem Brief. Veyras Informant. Drei Seiten, keine Unterschrift. »Operation Reinigung — Beginn in 30 Tagen. Ziel: Präventivschlag gegen Drak'Moor.«

Ich las es dreimal.

Dann rollte ich die Karte aus.

»Wenn Operation Reinigung stattfindet«, sagte ich, »sterben Zehntausende. Lilithias Friedensangebot fällt. Der Krieg beginnt. Und Mordecai hat genau das, was er braucht: einen Kriegszustand, in dem das System-Update kein Thema mehr ist.«

Veyra: »Dreißig Tage.«

Gorrick: »Das ist nicht viel.«

»Nein.«

Ren, flackernd dann fest: »Was ist der Plan?«

Ich schaute die Karte an. Drei Fronten, drei Probleme, ein Fenster. Dreißig Tage.

»Wir trennen Mordecais Macht von seinen Unterstützern. Dafür brauchen wir drei Dinge gleichzeitig: Celeste frei. Die Helden auf unserer Seite. Und Varkos — stumm.«

Stille. Das Terminal: \`BERECHNE ERFOLGSWAHRSCHEINLICHKEIT...\` Pause. \`KEINE DATEN VORHANDEN. ZU VIELE VARIABLEN.\`

»Das Terminal gibt keine Erfolgswahrscheinlichkeit.«

Gorrick: »Das Terminal hat Angst.«

»Das Terminal hat Angst.« Ich schloss es. »Das ist eigentlich beruhigend.«`,
    text2: `Drei Stunden. Wir planten.

Gorrick kartografierte jeden Eingang des Kaiserpalastes. Veyra listete alle Identitäten auf die sie noch nicht verbraucht hatte. Ren skizzierte die System-Netzwerke zwischen den Kaiserlichen Rittern. Rex schlief, weil Rex immer schlief wenn geplant wurde, aber seine Ohren bewegten sich. Er hörte zu.

Irgendwann in der Nacht legte Aria eine Hand auf die Karte.

»Wir retten die Welt«, sagte sie. Kein Fragezeichen.

»Ja.«

»Gut.« Sie zog die Hand zurück. »Dann lasst uns nicht die ganze Nacht reden.«

Das war, in seiner Kürze, das Beste was jemand an diesem Abend gesagt hatte.`,
    choices: [
      { text: "A) POLITISCH — Celeste zuerst. Ohne Kaiserin kein Kaiserrat.",
        next: "a5k2_sera_varkos",
        flagEffect: { kriegsPrioritaet: "politisch" },
        alignEffect: { ordnung: 2 },
        narrativeFeedback: "Veyra nickt sofort. Das ist ihr Terrain. »Drei Wochen. Ich bahne den Weg.« Sie verschwindet in der Nacht bevor jemand antworten kann.",
      },
      { text: "B) DIPLOMATISCH — Lilithia und Varkos müssen schweigen. Kein Krieg ohne Vorwand.",
        next: "a5k2_sera_varkos",
        flagEffect: { kriegsPrioritaet: "diplomatisch" },
        alignEffect: { licht: 1, ordnung: 1 },
        narrativeFeedback: "Aria schaut auf die Karte. »Das heißt, Sera spricht mit ihrem Vater.« Stille. Alle wissen was das bedeutet.",
      },
      { text: "C) MILITÄRISCH — Die Helden. Öffentlich. Akira verweigert den Einsatz vor dem Volk.",
        next: "a5k2_sera_varkos",
        flagEffect: { kriegsPrioritaet: "militaerisch" },
        alignEffect: { chaos: 1 },
        narrativeFeedback: "Gorrick: »Riskant.« — »Ja.« — »Ich mag es.« Er sagt das mit dem Ton von jemandem der Risiken aus Prinzip schätzt.",
      },
      { text: "D) ALLE DREI — Dreißig Tage. Drei Fronten. Die Nullen teilen sich auf.",
        next: "a5k2_sera_varkos",
        flagEffect: { kriegsPrioritaet: "alle" },
        alignEffect: { chaos: 2, verborgenheit: 1 },
        narrativeFeedback: "Das Terminal: »WAHRSCHEINLICHKEIT: UNBERECHNET.« Gorrick: »Ich liebe das.« Rex öffnet ein Auge. Schließt es wieder. Er ist dabei.",
      },
    ],
  },

  a5k2_sera_varkos: {
    act: "AKT V", chapter: "Kapitel 32 — Confront.Father()", title: "Sera und Varkos",
    conditionalFlag: "seraKenntWahrheit",
    textConditional: {
      true: `Sera hatte es gewusst — zumindest ein Teil von ihr. Kaito hatte ihr die Wahrheit gesagt. Sie hatte drei Tage kein Wort gesprochen danach. Und dann: »Ich will ihn sehen.« Nicht aus Neugier. Aus einer Notwendigkeit, die tiefer saß als Verstand.`,
      default: `Sera saß auf Rex' Rücken und wusste nicht, was sie erwartete. Kaito hatte ihr die Wahrheit gesagt — vor zwei Wochen, am Flussufer. Eine Wahrheit, auf die sie sich nicht hatte vorbereiten können.`,
    },
    scene: "Altes Schlachtfeld zwischen Voidspire und der Grenze", bg: "chaos", music: "theme_family",
    text: `Sera saß auf Rex' Rücken, als wir über die Grenze flogen. Die rote Strähne leuchtete wie ein Faden aus Feuer.

Sie wusste es. Ich hatte es ihr vor zwei Wochen gesagt — am alten Flussufer.

»Wer ist er?«

»General Varkos. Anführer der Kriegsfraktion in Drak'Moor.«

»...Der KRIEGSHERR? Der 'Verwüster'? Mein Vater ist ein MONSTER—«

»Er ist auch der Mann, der dich versteckt hat, um dich vor seiner eigenen Rasse zu SCHÜTZEN. Der jeden Monat Spione schickt, um zu prüfen, ob du lebst.«

Die Flammen an Seras Händen erloschen. Langsam.

»...Er hat mich AUSGESETZT. Und gleichzeitig... hat er mich BESCHÜTZT?«

»Ja.«

»Wie kann man jemanden LIEBEN und AUSSETZEN gleichzeitig?«

»Indem man in einer Welt lebt, die KEINE guten Optionen hat.«

Lange Stille. Dann: »Ich will ihn sehen.«

Das schiefe Lächeln — seit dreizehn Jahren: »Dass du neben mir sitzt, wenn es schiefgeht.«`,
    text2: `Das Schlachtfeld. Mondlicht. Knochen im Gras.

General Varkos. 210 Zentimeter. Vier schwarze Hörner. Brennende orangefarbene Augen. Level 88. Rang S.

Und seine Augen schauten nicht MICH an.

Sie schauten SERA an. Und darin — Angst. Die Angst eines Vaters.

»...Du bist gewachsen.«

Sera stand starr. Hände brannten.

»ALSO HAST DU MICH WEGGEWORFEN! Achtzehn JAHRE, in denen ich dachte, ich sei so KAPUTT, dass nicht einmal meine EIGENE FAMILIE mich wollte!«

Flammen rasten über das Gras. Varkos TRAT NICHT ZURÜCK.

»JA! Ja, ich habe dich weggegeben! Und es war der SCHLIMMSTE Tag meines Lebens! Und JEDER TAG DANACH war der zweitschlimmste!«

Seine Stimme brach.

Er ging in die Knie. Der mächtigste Krieger der Dämonenrasse. Auf den KNIEN.

»...das war das Einzige, was mich jemals ZERBROCHEN hat.«

Seras Flammen erloschen sofort.

Sie ging zu ihm. Und schlug ihn. Hart. Mit der Faust. Ins Gesicht.

»Das ist für achtzehn Jahre.«

Eine einzige schwarze Träne.

Dann legte Sera ihre Hand auf seinen Kopf. Zwischen die Hörner.

»...Und das ist dafür, dass du mich am Leben gelassen hast.«

Varkos schloss die Augen. Und weinte.`,
    choices: [
      { text: "A) »Und noch etwas — der Void-Prophet. Wer ist er?«",
        affinityEffect: { varkos: 20 },
        desc: "[SC] [AL+Ordnung] Varkos gibt den Standort des Propheten. +Wissen. Folgt Lilithias defensivem Plan.",
        next: "a5k3_tertius", alignEffect: { ordnung: 2 }, flagEffect: { varkosErgebnis: "prophet_info", varkosVerteidigung: true },
        wissenEffect: ["nullZoneExistenz"],
        narrativeFeedback: "»...Er ist gefährlich. Er will das System VERBRENNEN.« Er gibt die Koordinaten." },
      { text: "B) »Ich will eine öffentliche Erklärung von dir: 'Die Dämonen wollen Frieden.'«",
        desc: "[SC] [AL+Licht] Lilithia erhält massive politische Macht. Größter Friedens-Fortschritt.",
        next: "a5k3_tertius", alignEffect: { licht: 2 }, flagEffect: { varkosErgebnis: "frieden_erklaerung", varkosVerteidigung: true },
        narrativeFeedback: "Varkos lacht — bitter. Dann schaut er Sera an. »...Für sie.« Er nickt." },
      { text: "C) »Wenn das System fällt — brauche ich jemanden, der DANACH Ordnung hält. Dich.«",
        desc: "[SC] [AL+Ordnung] Varkos-Redemption-Pfad. Beschützer statt Kriegsherr.",
        next: "a5k3_tertius", alignEffect: { ordnung: 1, licht: 1 }, flagEffect: { varkosErgebnis: "beschuetzer", varkosVerteidigung: true },
        narrativeFeedback: "»Ich weiß nicht, ob ich das KANN.« Sera: »Dann lerne es. So wie ich.« Varkos schaut seine Tochter an. Und nickt." },
      { text: "D) »Ich habe dich damals angelogen, Sera.« — Jetzt. Hier. Nach allem.",
        desc: "[SC] Nur wenn seraLuegeAusstehend=true. Kaito gesteht die Lüge bevor Varkos es tut.",
        requires: { flag: { seraLuegeAusstehend: "true" } },
        next: "a5k3_tertius",
        alignEffect: { licht: 2 },
        affinityEffect: { sera: 25 },
        flagEffect: { seraLuegeAusstehend: "false", seraKenntVoll: "true" },
        narrativeFeedback: "Sera schaut ihn an. Lange. Dann: »Ich weiß.« — »Du wusstest es schon?« — »Seit dem Kontrolltraining. Dein Gesicht beim Lügen ist anders als beim Sprechen.« Pause. »Danke, dass du es trotzdem sagst.«",
      },
    ]
  },

  a5k3_tertius: {
    act: "AKT V",
    chapter: "Kapitel 33 — Descent.Final()",
    title: "Tertius — Der schlafende Schmied",
    scene: "Irondeep-Labyrinth, Ebene 31–33",
    bg: "void",
    music: "theme_void_terminal",
    text: `Finn hatte bestanden mitzukommen.

»Bester. Freund. Für. Immer.«

»Finn, das ist Ebene 31. Der Dungeon-Rang ist—«

»ICH. KOMME. MIT.«

Es gab Diskussionen, die man nicht gewinnen konnte. Das war eine davon.

Also gingen sie zu zweit. Kaito und Finn. Das Terminal flimmerte mit jedem Schritt tiefer — auf Ebene 32 fiel das System fast vollständig aus. Kein Statusfenster. Kein Level. Keine Klasse. Nur Mensch und Stein und das schwache Leuchten uralter Runen.

Finn schaute auf seine Hände. »Mein Level ist... weg?«

»Hier unten existiert das System nicht. Sei einfach Finn.«

»Ich bin immer Finn.«

»Ich weiß. Ich meinte—«

»Ich weiß was du meinst.« Er grinste — das breite, unzerstörbare Grinsen. »Komm schon.«

Ebene 33 war kein Dungeon-Level. Es war eine Werkstatt.

Ein Amboss so groß wie ein Haus. Wände voller Blaupausen — die Genesis-System-Architektur, ausgebreitet wie die Eingeweide eines Gottes, jede Linie in einem Schriftzeichen das Kaito irgendwo zwischen Alt-Aetherisch und Maschinencode einordnete. Werkzeuge so massiv, dass ein Mensch sie nicht heben konnte.

Und in der Mitte — aufrecht stehend, Augen geschlossen, atmend: etwas das wie ein Mann aussah.

Drei Meter. Bronze-Haut, poliert wie ein Spiegel. Silberhaar das langsam — sehr langsam — im Aether schwebte.

Das Terminal: \`[PRÄ-SYSTEM ENTITÄT. TERTIUS. DRITTER ARCHITEKT. STATUS: SCHLAFEND — SEIT 2847 JAHREN]\`

Finn, flüsternd: »...Ist das ein Gott?«

»Einer von denen, die die Welt erschaffen haben. Ja.«

»Sollen wir ihn... wecken?«

»Ja.«

»Wie?«

Kaito öffnete das Terminal. Suchte. Fand eine Rune in Alt-Aetherisch — die Grundrune für Erwachen. Schrieb sie in die Luft, mit dem Finger, langsam. Er hatte es noch nie getan. Er wusste nicht ob es funktionieren würde.

Es funktionierte.

Das Licht änderte sich. Die Bronze-Haut begann zu glühen — sanft, warm, wie Metall das gerade aus der Esse kommt. Die Augen öffneten sich.

Gold. Komplett gold. Keine Pupillen. Nur Licht.

»...Jemand hat das Weckzeichen geschrieben.« Die Stimme war tief — nicht wie ein Mensch, wie ein Instrument das mit einem Haus resoniert. »In schlechtem Alt-Aetherisch.«

»Ich lerne noch.«

»Du lernst.« Tertius schaute ihn an. Lange. »Ein Mensch, der [NULL] trägt. Das habe ich nicht erwartet.« Pause. »Ich habe 2847 Jahre gewartet. Ich hätte früher aufhören sollen zu schlafen. Was ist passiert?«

»Das System ist fast fertig. Primus treibt ein Update an, das—«

»Ich weiß was das Update tut.« Seine Stimme war so ruhig, dass es erschreckend war. »Ich habe es geplant.«

Stille.

»Du hast ES geplant?«

»Vor 2000 Jahren. Als Sicherheitssystem. Damit niemand das Genesis-System missbrauchen kann. Primus hat... den ursprünglichen Plan übernommen. Und weiterentwickelt.« Tertius schloss kurz die goldenen Augen. »Was Primus daraus gemacht hat, ist nicht mehr das was ich entworfen hatte. Es ist etwas anderes geworden. Etwas das ich nicht gewollt hätte.«

Er schaute auf seine Hände. Die Hände die das System geschmiedet hatten.

»Ich habe 2847 Jahre geschlafen weil ich dachte, es wäre gut genug. Das war ein Fehler.«`,
    text2: `»Ich brauche deine Hilfe«, sagte Kaito.

Tertius schaute ihn an. Den Menschen der aus einer anderen Welt kam. Den Null-Träger. Den Programmierer.

»Du willst das System umschreiben.«

»Ja.«

»Weißt du was das bedeutet? Nicht theoretisch. Konkret. Wieviel Macht das braucht. Wieviel Wissen. Wieviel...« Er suchte nach dem Wort. »...Demut. Das System ist kein Werkzeug. Es ist ein Lebewesen. Wenn du es umschreibst ohne es zu VERSTEHEN — stirbt es.«

»Ich verstehe es.«

»Du kennst den Code.«

»Ich kenne den Code. Und ich kenne was er tut. Und ich kenne was er mit Menschen tut die in ihm leben. Ich habe es siebenzehn Jahre lang gelebt.«

Tertius schwieg lange.

Dann: »Finn.«

Finn, der ruhig hinter Kaito gestanden hatte — so ruhig wie Finn jemals war, was nicht sehr ruhig war, aber für diesen Moment: »Ja?«

»Du bist sein Freund.«

»Bester Freund.«

»Warum?«

Finn runzelte die Stirn. »Weil er der erste war, der mir gezeigt hat wie ich richtig kämpfe. Weil er bei Sera geblieben ist als alle anderen Angst hatten. Weil er—« Er hörte auf. Shrug. »Weil er Kaito ist. Das reicht.«

Tertius nickte einmal.

»Ein Mensch, für den andere sterben würden.« Er schaute Kaito an. »Das ist die Qualifikation die ich suchte. Nicht Macht. Nicht Wissen.« Pause. »Zeig mir deinen Plan.«`,
    systemBox: {
      title: "VOID-TERMINAL — TERTIUS ANALYSE",
      lines: [
        "> Tertius. Dritter Architekt.",
        "> Level: [NICHT MESSBAR]",
        "> Alter: 3.247 Jahre",
        ">",
        "> Rolle beim Genesis-System: SCHMIED",
        "> → Hat die physische Struktur des Systems geschmiedet",
        "> → Kennt jeden Code-Baustein von innen",
        "> → Einziger Architekt der noch EXISTIERT",
        ">    (Primus: Avatar. Secunda: Geist.)",
        ">    (Sextus: Echo. Septima: Fragment.)",
        ">",
        "> Status: KOOPERATIV",
        "> Bedingung: »Tu es richtig.«",
        ">",
        "> Terminal-Notiz: »Er hat 2847 Jahre",
        ">   auf jemanden gewartet der die",
        ">   richtige Frage stellt.",
        ">   Du hast sie gestellt.«",
      ]
    },
    choices: [{ text: "→ Kapitel 34: Yukis Timer", next: "a5k4_yuki" }],
  },

  a5k4_yuki: {
    act: "AKT V",
    chapter: "Kapitel 34 — Shield.Break()",
    title: "Yukis Timer brechen",
    scene: "Grenzfestung Eiswall — 11 Monate bis zum Update",
    bg: "night",
    music: "theme_elena_song",
    text: `Sie sah schlecht aus.

Dünner als vor zwei Jahren. Blass. Die grauen Strähnen im Haar hatten sich ausgebreitet — nicht viele, aber sichtbar, und an einer 18-Jährigen sah man sie sofort. Der Countdown über ihrem Kopf: 847 Tage, 14 Stunden, 33 Minuten.

Sekunde für Sekunde sinkend. Immer.

»Du siehst mich an wie ein Problem das gelöst werden muss«, sagte Yuki.

»Du bist kein Problem. Du bist mein Freund.«

Sie lachte — kurz, echt, das Lachen das sie hatte wenn sie nicht wusste dass sie lachte. »Das ist das Freundlichste was du je zu mir gesagt hast.«

»Ich bin kein freundlicher Mensch.«

»Nein.« Sie schaute auf den Countdown über ihrem Kopf. Kaito sah ihn. Sie wusste das er ihn sah. »Kannst du es wirklich?«

»[Code.Modify] ist jetzt teilweise freigeschaltet. Ich habe es dreimal geübt — an kleineren System-Konstrukten. Es hat funktioniert.«

»Dreimal.«

»Dreimal.«

»Das ist nicht viel.«

»Nein.«

Stille. Yuki schaute auf ihre Hände. Die Hände einer Magierin, die seit dem Summoning nichts Normales mehr erlebt hatten. Keine normale Schule, kein normales Zuhause, kein normaler Tag ohne System-Pflichten.

Und über allem der Countdown.

»Wenn es schiefgeht«, sagte sie, »stirbst du nicht daran?«

»Wahrscheinlich nicht.«

»Wahrscheinlich.«

»Ich werde ehrlich sein: Es könnte wehtun. Organschäden, möglicherweise. Das Terminal warnt mich jedes Mal.«

»Und trotzdem.«

»Ich habe es versprochen.«

Yuki schaute ihn an — lange, mit dem Blick einer Person die gelernt hat, Versprechen nicht zu glauben, weil zu viele gebrochen wurden. Dann:

»Wann?«

»Jetzt. Wenn du bereit bist.«

Sie nickte. Einmal. Keine große Geste — das war Yuki. Keine großen Gesten. Nur Entscheidungen.`,
    choices: [
      { text: "A) »Weil ich es versprochen habe.« — Nur das.",
        next: "a5k4_drain",
        affinityEffect: { yuki: 15 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Yuki schaut ihn lange an. Dann: »Das reicht.« Kein Lächeln. Aber ihre Schultern lockern sich — kaum merklich, aber real. Sie schließt die Augen.",
      },
      { text: "B) »Weil du mir den Hasen gegeben hast.« — Er hält den Anhänger hoch.",
        next: "a5k4_drain",
        affinityEffect: { yuki: 30 },
        flagEffect: { yukiRomanceVertieft: true },
        narrativeFeedback: "Yuki schaut den Hasen an. Schaut Kaito an. Ihre Augen werden sehr kurz sehr groß — dann schmal. »...Idiot«, sagt sie leise. Nicht als Beleidigung. Als das Wärmste was sie hat.",
      },
      { text: "C) »Weil du die Welt brauchst. Nicht als Heldin — als du selbst.«",
        next: "a5k4_drain",
        affinityEffect: { yuki: 25 },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Yuki sagt nichts. Aber ihre Hand findet seine — kurz, fest, dann losgelassen. Als ob sie etwas prüft. Als ob es real ist.",
      },
      { text: "D) »Weil du dasselbe für mich tun würdest.« — Stille. Das stimmt und beide wissen es.",
        next: "a5k4_drain",
        affinityEffect: { yuki: 20 },
        narrativeFeedback: "Yuki: »Ja.« Nur das. Das einfachste und vollständigste Ja das Kaito je gehört hat.",
      },
    ],
  },

  a5k4_drain: {
    act: "AKT V", chapter: "Kapitel 34 — Die Übertragung", title: "Das Versprechen wird gehalten",
    conditionalFlag: "yukiToken",
    textConditional: {
      hase: `Während ich arbeitete, lag der Hasen-Anhänger auf dem Boden zwischen uns — den Yuki mir vor Jahren gegeben hatte, den ich jeden Tag getragen hatte. Sie sah ihn. Sagte nichts. Aber ihre Hand, die zitterte, hörte auf zu zittern.`,
      stein: `Der Stein in meiner Tasche — Dmitris Hälfte — lag schwer gegen mein Bein während ich den Code manipulierte. Irgendwo hatte Dmitri die andere Hälfte. Ich arbeitete schneller.`,
      default: ``,
    },
    scene: "Grenzfestung Eiswall", bg: "void", music: "theme_void_terminal",
    conditionalFlag: "yukiToken",
    textConditional: { hase: `Der Hasen-Anhänger lag zwischen uns. Yuki sah ihn. Ihre zitternde Hand hörte auf zu zittern.`, stein: `Dmitris Stein schwer in meiner Tasche. Irgendwo hatte er die andere Hälfte. Ich arbeitete schneller.`, default: `` },
    text: `Es war nicht wie Programmieren. Es war wie CHIRURGIE. An einem Code, der LEBENDIG war.

Yukis Lebenskraft — warm, blau, fragil — floss durch den Code wie Blut durch Adern.

Ich schnitt den Drain. Und leitete ihn um — auf mich. Auf das unendliche Nichts zwischen System und Void.

Es tat weh. Nicht physisch — EXISTENZIELL.

Yuki schrie — kurz, scharf. Dann: Stille.

»...Ich fühle mich leichter. Als hätte jemand eine Last von meinen Schultern genommen.«

Farbe kehrt in Yukis Wangen zurück.

»Und DU?«

»Ich bin ein Programmierer. Ich kann mit ein paar Bugs umgehen.«

Das Versprechen war gehalten.

Drei Jahre, seit dem Dach der Akademie.`,
    systemBox: { title: "VOID-TERMINAL — DRAIN-UMLEITUNG: ERFOLGREICH", lines: [
      "> Yukis Lebensspanne: STABILISIERT", ">",
      "> Trägers Zustand: BELASTET", "> → Aether-Reserven: -15% permanent", "> → Regeneration: -20%", "> → Manageable.", ">",
      "> Der Drain bleibt aktiv, bis der Helden-Code", "> KOMPLETT umgeschrieben wird (System-Kern).", ">",
      "> Zeitrahmen: 11 Monate.", "> Der Träger muss ÜBERLEBEN. Mit einem Drain.", "> ...Kein Druck.",
    ]},
    choices: [{ text: "→ Kapitel 35: Celeste befreien", next: "a5k5_celeste" }],
    flagEffect: { yukiDrainUmgeleitet: true },
  },

  a5k5_celeste: {
    act: "AKT V",
    chapter: "Kapitel 35 — Celeste.Free()",
    title: "Die Prinzessin",
    scene: "Kaiserpalast, Aetheria Prime — 10 Monate bis zum Update",
    bg: "city",
    music: "theme_training",
    text: `Veyra hatte drei Monate gebraucht um den Weg zu bahnen.

Dreiundzwanzig gefälschte Identitäten. Neun verschiedene Informanten. Ein Paket das in einem Kuchen versteckt war und drei Palastwachen passierte, ohne dass eine von ihnen die Botschaft darin fand.

Kaito infiltrierte den Palast als Nachtpatrouille, Spoof-Level 9, Klasse: Kaiserlicher Wächter. Das System meldete ihm zurück: Bestätigt. Der Palast hatte so viele Wächter, dass niemand jeden kannte. Das war die Schwäche. Veyra hatte sie gefunden.

Celestes Zimmer: Vierte Etage, Westflügel. Vier Riegel, ein System-Siegel, eine Wache die alle zwei Stunden wechselte.

Er öffnete die Tür. Lautlos. [Code.Spoof] auf das Siegel — drei Sekunden.

Celeste saß am Schreibtisch.

Nicht schlafend. Nicht weinend. Schreibend. Fieberhaft, mit der Konzentration von jemandem der seit Monaten keine andere Aufgabe hatte als zu warten und diese Zeit sinnvoll zu nutzen.

Sie hörte die Tür. Schaute auf. Sah ihn.

Keine Überraschung in ihren Augen.

»Ich habe mich gefragt wann.«

»Du wusstest, dass jemand kommt?«

»Veyra's Paket. Die Botschaft in der dritten Schicht des Kuchens.« Ein kleines Lächeln. »Ich bin Prinzessin. Ich habe Zeit gehabt das zu lernen.«

Kaito schaute auf den Schreibtisch. Stapel voller Dokumente. Dichtbeschrieben.

»Was ist das?«

»Beweise.« Sie stand auf. Legte die Papiere in eine Tasche die offensichtlich seit Wochen gepackt und bereit war. »Jede Entscheidung die Mordecai in meinem Namen getroffen hat. Jeder Befehl. Jede Lüge.« Sie schaute ihn an. »Ich habe vier Monate gehabt um Beweise zu sammeln. Mordecai hat mir die Zeit gegeben, indem er mich eingesperrt hat.«

»Er hat dir einen Gefallen getan.«

»Das weiß er nicht. Sollen wir gehen?«`,
    text2: `Sie gingen.

Nicht panisch, nicht rennend — Celeste ging mit der Haltung einer Frau, die einen Palast verlässt der ihr gehört, nicht einer die flieht. Das war, merkte Kaito, klüger als er gedacht hatte.

Eine fliehende Prinzessin rief Aufmerksamkeit.

Eine Prinzessin, die durch den Westflügel spaziert als ob sie nachts schon immer spazieren gegangen wäre, nicht.

Drei Wachposten. Drei Spoofed Statusfenster. Drei Nicken.

Im Innenhof: Veyra. In der Uniform eines kaiserlichen Boten. Ein Pferd.

»Ich dachte ihr kommt nie«, sagte Veyra.

»Zehn Minuten.«

»Zehn Minuten ist spät.«

»Celeste hatte Gepäck.«

»Beweise«, korrigierte Celeste. »Nicht Gepäck.« Sie bestieg das Pferd mit einer Selbstverständlichkeit die zeigte, dass sie das öfter gemacht hatte als Hofzeremonien. »Wo geht es hin?«

»Irgendwo wo Mordecai nicht sofort sucht.«

»Habt ihr einen genauen Plan?«

Pause.

»...Wir arbeiten daran.«

Celeste schaute zwischen Kaito und Veyra hin und her. Dann, ganz leise: »Ich bin vier Monate lang eingesperrt gewesen und ich komme mit einer Gruppe die den Kaiserpalast für ihre Hochburg hält aber keinen Plan hat.«

»Wir haben einen Plan. Er ist nur nicht... fertig.«

»Mein Gott«, sagte Celeste. Aber sie ritt los.`,
    choices: [
      { text: "A) »Du bist mutig. Für eine Prinzessin.«",
        next: "a5k6_kaiserrat",
        affinityEffect: { celeste: 15 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Celeste: »Das sagst du als ob Prinzessinen normalerweise feige sind.« — »Statistisch gesehen...« — »Sag das nicht. Nicht weiter.« Sie reitet schneller.",
      },
      { text: "B) »Dein Zeitweber-Skill — wie weit kann er in die Zukunft schauen?«",
        next: "a5k6_kaiserrat",
        affinityEffect: { celeste: 20 },
        narrativeFeedback: "Celeste schaut ihn an mit dem Blick von jemandem der gerade realisiert, dass das die erste relevante Frage ist die ihm auffällt. »Drei bis fünf Sekunden. In Kampfsituationen. Länger mit Vorbereitung.« — »Das reicht.« — »Wofür?« — »Ich erkläre es dir.«",
      },
      { text: "C) »Vier Monate Beweise sammeln — du hast das geplant.«",
        next: "a5k6_kaiserrat",
        affinityEffect: { celeste: 25 },
        narrativeFeedback: "Celeste schaut geradeaus. »Von Anfang an. Mordecai hat mir die Zeit gegeben die ich brauchte, indem er dachte er bestraft mich.« Pause. »Das war sein größter Fehler.«",
      },
    ],
  },

  a5k6_kaiserrat: {
    act: "AKT V", chapter: "Kapitel 36 — Council.Override()", title: "Der Showdown",
    conditionalFlag: "mordecaiWissen",
    textConditional: {
      septima: `Als Mordecais Verbindung zu Secunda sichtbar wurde, geschah etwas das ich nicht erwartet hatte: Mordecai flüsterte einen Namen. »Septima.« Nur das. Als hätte er den Namen schon einmal gehört — in einem anderen Kontext, in einem anderen Leben — und jetzt verstand er endlich was er gehört hatte. Der Zusammenbruch war tiefer. Echter.`,
      update: `Als die goldene Verbindungslinie sichtbar wurde, sah ich etwas in Mordecais Augen: keine Überraschung. Er wusste es bereits. Hatte es vielleicht immer gewusst. Aber er hatte das System-Update trotzdem vorangetrieben. Das war schlimmer als Unwissenheit. Das war eine Entscheidung.`,
      default: ``,
    },
    scene: "Thronsaal, Kaiserpalast", bg: "city", music: "theme_family",
    conditionalFlag: "mordecaiWissen",
    textConditional: { septima: `Als die Linie sichtbar wurde flüsterte Mordecai: »Septima.« Er hatte den Namen gehört. Jetzt verstand er was. Der Zusammenbruch war tiefer. Echter.`, update: `Keine Überraschung in seinen Augen. Er hatte es gewusst. Und das Update trotzdem vorangetrieben. Das war schlimmer.`, default: `` },
    text: `Celeste trat ein. Allein. Kaiserliche Brosche leuchtend.

Mordecais Augen verengten sich.

»Prinzessin. Sie stehen unter HAUSARREST—«

»Ich stehe unter dem SCHUTZ der Krone.«

Die Beweise. Emmas Analysen. Veyras Material. Lilithias Friedensangebot.

Murmeln. Graf Alderson las genau.

Und dann — Kaito trat vor. Aus einer Nische. Gorricks Aether-Projektor in der Hand.

Das Hologramm explodierte. Mordecais System-Code — für ALLE sichtbar. Und die goldene, pulsierende Linie: Von Mordecais Kopf nach oben. Durch die Realität. In etwas DARÜBER.

Direkte Verbindung zu Secunda.

»Das ist ein Kommunikationskanal zu einer Architektin namens SECUNDA. Nicht eine Göttin — eine der sieben PROGRAMMIERER des Genesis-Systems. Sie BENUTZT Mordecai als Werkzeug.«

Mordecais Gesicht ZERBRACH. Leise. Die Maske fiel.

»...Das kann nicht... ich habe mein LEBEN... die Stimme war REAL...«

Kaiser Valdric III. stand auf. Die Autorität eines müden Königs.

»Operation Reinigung wird ABGESAGT. Es gibt keinen Krieg.«

Herzogin Valentine, kalt: »...Kross wird das nicht akzeptieren.«`,
    choices: [
      { text: "A) »Der Rat urteilt. Ich bin nicht sein Richter.« — Die Last weitergeben.",
        next: "a5k7_kross",
        flagEffect: { mordecaiSchicksal: "verhaftet" },
        alignEffect: { ordnung: 2 },
        affinityEffect: { celeste: 10 },
        narrativeFeedback: "Mordecai schaut ihn an. Wartet vielleicht auf Wut. Kaito gibt ihm keine. Das ist schwerer als Wut. Das weiß Mordecai.",
      },
      { text: "B) »Er hat geglaubt, es zu tun für das Richtige. Das ändert nichts — und alles.« — Die unmögliche Mitte.",
        next: "a5k7_kross",
        flagEffect: { mordecaiSchicksal: "barmherzig" },
        alignEffect: { licht: 2 },
        affinityEffect: { mordecai: 20 },
        narrativeFeedback: "Celeste schaut ihn an — überrascht, dann nachdenklich. Der Rat murmelt. Mordecai sagt nichts. Aber seine Hände öffnen sich. Zum ersten Mal.",
      },
      { text: "C) »Er tritt zurück. Still. Heute. Das ist das Angebot — nicht die Bitte.« — Macht statt Mitleid.",
        next: "a5k7_kross",
        flagEffect: { mordecaiSchicksal: "politisch" },
        alignEffect: { schatten: 2, verborgenheit: 1 },
        narrativeFeedback: "Mordecai hört den Unterschied. Zwischen Gnade und Kalkül. Er steht auf. Langsam. Ohne Würde. Aber er steht auf.",
      },
      { text: "D) »Mordecai.« — Nur sein Name. Dann: »Hören Sie mir zu. Einmal. Was Secunda Ihnen wirklich gesagt hat.«",
        requires: { flag: { mordecaiRedemptionMoeglich: "true" } },
        next: "a5k7_kross",
        flagEffect: { mordecaiSchicksal: "redemption", mordecaiRiss: "true" },
        alignEffect: { licht: 2 },
        affinityEffect: { mordecai: 25 },
        narrativeFeedback: "Der Raum wird still. Nicht weil Kaito laut spricht. Weil niemand diese Stille erwartet hat — dieses Angebot, zugehört zu werden. Mordecai sitzt. Wie ein Mann der aufgehört hat zu kämpfen. Nicht aus Schwäche. Aus Erschöpfung die zu ehrlich ist um weiter zu lügen.",
      },
    ],
  },

    a5k7_kross: {
    act: "AKT V", chapter: "Kapitel 37 — Boss.Kross()", title: "Die Eiserne Faust",
    conditionalFlag: "borisVersprechen",
    textConditional: {
      true: `Wir ritten in Kreuzweg ein und ich sah es sofort: Bäcker Boris' Laden. Das Licht brannte. Mitten in der Nacht, während Puristen die Stadt umzingelten — das Licht brannte. Er hatte gewartet. Ich hatte ihm versprochen zurückzukommen. Er hatte mir geglaubt.`,
      default: ``,
    },
    scene: "Kreuzweg — 8 Monate bis zum Update", bg: "chaos", music: "theme_training",
    conditionalFlag: "borisVersprechen",
    textConditional: { true: `Kreuzweg. Boris Bäckerei, Licht brannte mitten in der Nacht. Er hatte gewartet. Ich hatte versprochen zurückzukommen.`, default: `` },
    text: `General Kross ignorierte den kaiserlichen Befehl.

Veyras Notfall-Bericht: Er marschiert nach KREUZWEG. Sein Ziel: Kaitos FAMILIE. Geiseln.

»...Mama. Papa. Mira.«

Drei Worte. Leiser als ein Flüstern. Lauter als ein Schrei.

»Rex. Wie schnell kannst du fliegen?«

Sechs Stunden. Auf Rex' Rücken, durch die Nacht.

Zwanzig Puristen hatten das Ashford-Haus umstellt. Mira — zwölf, eine LANZE in der Hand. Elena. Roland — Schwert bereit.

Und auf dem Dach gegenüber: Sera Blackwood. Sie war in Kreuzweg geblieben. Hatte die Familie seit Monaten bewacht. Ohne es jemandem zu SAGEN.

Operation Heimkehr: Rex als Ablenkung. Sera auf der westlichen Flanke. Kaito im Osten. Finn von Norden.

Roland: »Für sie.« Kein Schlachtruf. Nur zwei leise Worte.

Sechs Minuten. Zwanzig Puristen. Erledigt.

Elena stürmt heraus: »KAITO ASHFORD! komm HER!«

Roland, im Türrahmen: »...Du bist gewachsen, Junge.«

Er umarmte seinen Sohn. Und flüsterte, so leise, dass nur Kaito es hörte:

»Ich bin stolz auf dich.«

Vier Worte. Die vier Worte, die ich in zwei Leben am meisten gebraucht hatte.`,
    text2: `Kross kam. Level 81. Rang S.

»Eisenhardt. Zwanzig Jahre.«

»Kross. Jede Nacht.«

Der Kampf. [System Scan+] analysierte: [Eiserne Disziplin LV MAX] — alle Emotionen unterdrückt. Schwachstelle: Verdrängte SCHULD. Rolands Regiment. Dreißig Tote.

Drei gegen einen — zu stark. Dann:

»Kross. Du hast auf Ebene 12 die Inschrift gelesen. Vor zwanzig Jahren. Du hast die WAHRHEIT gesehen. Und dann hast du den Befehl gegeben, alle Zeugen zu töten.«

Sein Schwert verlangsamte sich. Unmerklich.

»Rolands Regiment. Du hast sie in den Tod geschickt, um eine WAHRHEIT zu begraben.«

Roland trat vor — Schwert erhoben, aber NICHT angreifend.

»Du warst mein KOMMANDANT. Ich hätte für dich GESTORBEN. Und du hast mich verraten. Nicht aus Hass. Aus ANGST.«

»Kross. Ich VERGEBE dir.«

[Eiserne Disziplin] brach auf. Emotionen fluteten: Schuld, Trauer, und ganz tief — ERLEICHTERUNG.

Kaito: [Code.Disrupt] auf [Eiserne Disziplin]. Der Skill brach vollständig.

Kross kniete auf dem Pflaster.

»...Dreißig. Es waren dreißig. Und ich habe JEDEN getötet. Mit einem BEFEHL.«`,
    choices: [
      { text: "A) Rolands Fluch jetzt aufheben. Kross: »Steh auf. Kämpfe FÜR die Wahrheit.«",
        desc: "[SC] [AF+Roland MAX] Roland Level 34→52. Bein heilt. Kross-Redemption: 400 Puristen wechseln die Seite. Risiko: Primus bemerkt Systemstörung.",
        next: "a5k8_prophet", affinityEffect: { roland: 40 }, alignEffect: { licht: 2 },
        flagEffect: { rolandFluchGebrochen: true, krossSchicksal: "redemption" },
        narrativeFeedback: "Roland steht GERADE. Zum ersten Mal seit zwanzig Jahren. Eine Träne. Dann: »Gib mir mein Schwert.« Kross schaut ihn an. Und nickt." },
      { text: "B) Rolands Fluch nach dem Kampf. Kross: »Roland hat vergeben. Ich NICHT. Geh.«",
        desc: "[SC] [AF+Roland+20] Kross geht. Wandert. Taucht im Epilog allein auf. Puristen führerlos.",
        next: "a5k8_prophet", affinityEffect: { roland: 20 },
        flagEffect: { rolandFluchGebrochen: false, krossSchicksal: "exil" },
        narrativeFeedback: "Kross nimmt sein Schwert. Geht. Roland schaut ihm nach, bis er im Dunkel verschwindet." },
      { text: "C) Fluch teilweise. Kross: »Tertius braucht jemanden, der das System von INNEN kennt.«",
        desc: "[SC] [AF+Roland+15] Kross als Berater für Tertius. Der Soldat wird Gelehrter.",
        next: "a5k8_prophet", affinityEffect: { roland: 15 }, alignEffect: { ordnung: 1 },
        flagEffect: { rolandFluchGebrochen: false, krossSchicksal: "berater" },
        narrativeFeedback: "»Ein Soldat... als Gelehrter.« Kross lacht — kurz, trocken. »Vielleicht ist das die Buße.«" },
    ]
  },

  a5k8_prophet: {
    act: "AKT V", chapter: "Kapitel 38 — Prophet.Void()", title: "Martin Ashvale",
    scene: "Ruinen südlich von Voidspire — 6 Monate bis zum Update", bg: "void", music: "theme_mystery",
    text: `Der Void-Prophet kontaktierte mein VOID-TERMINAL. Von AUSSEN.

»Hallo, Nachfolger. Triff mich. Allein.«

Die Ruinen: halb in der Realität, halb im Void.

Unter dem zerrissenen Mantel: ein Körper, der nicht entscheiden konnte ob er existierte. Haut zwischen Fleisch und Code. Eine dreifache Stimme.

»Mein Name war Martin. Martin Ashvale. Vor 500 Jahren. Ich war ein Bibliothekar.«

»Ein Bibliothekar?«

»Kein Krieger. Ein BIBLIOTHEKAR, der zu viel gelesen hat. Der versuchte, das System zu ändern — wie du. Und SCHEITERTE.«

Das System hat ihn halb absorbiert. Halb im System, halb draußen. Nicht lebendig. Nicht tot. DAZWISCHEN.

»500 Jahre, Null. 500 Jahre im ZWISCHENRAUM. Ohne Körper. Ohne Zeit. Ohne JEMANDEN.«

»Das tut mir leid.«

Er war überrascht. Dann: »ZERSTÖRUNG. Das System kann nicht repariert werden. Hilf mir es zu ZERSTÖREN. Ja — Millionen werden sterben. Aber die Überlebenden werden FREI sein.«

»Meine MUTTER hat ein Level. Meine Schwester. FINN. Du willst sie ALLE töten — für eine IDEE?«

»Du verstehst nicht—«

»Doch. Du hast 500 Jahre gelitten, und du willst, dass es AUFHÖRT. Aber nicht so.«`,
    choices: [
      { text: "A) »Es gibt einen DRITTEN Weg, Martin — UMSCHREIBEN.«",
        desc: "[SC] [AL+Licht] Der Prophet hat diese Option nie betrachtet. Er hofft. Zum ersten Mal seit 500 Jahren. Kein Kampf. Prophet wird neutral.",
        next: "a5k9_convergence", alignEffect: { licht: 2 }, flagEffect: { prophetErgebnis: "umschreiben" },
        narrativeFeedback: "Alle drei Stimmen, zum ersten Mal im Einklang: »Umschreiben...« Er hofft. Und Hoffnung ist für ihn das terrierendste Gefühl seit Jahrhunderten." },
      { text: "B) »Du bist nicht mein Feind. Du bist mein VORGÄNGER.«",
        desc: "[SC] [AL+Ordnung] Prophet bleibt Wildcard. Könnte in Akt VI helfen oder stören.",
        next: "a5k9_convergence", alignEffect: { ordnung: 1 }, flagEffect: { prophetErgebnis: "wildcard" },
        narrativeFeedback: "»Ich war AUCH so sicher.« Bitterkeit. Dann: »Pass auf dich auf, Nachfolger.« Er löst sich auf. Geht aber nicht wirklich." },
      { text: "C) »Wenn du mir im Weg stehst, werde ich dich HEILEN.«",
        desc: "[SC] [AL+Licht] Niemand hat je versucht, ihn zu heilen. Prophet flieht — erschüttert. Heilung als Nebenquest in Akt VI möglich.",
        next: "a5k9_convergence", alignEffect: { licht: 2 }, flagEffect: { prophetErgebnis: "heilung_moeglich" },
        narrativeFeedback: "»Heilen? MICH?« Er flackert — nicht vor Wut, vor ERSCHÜTTERUNG. Verschwindet. Hoffnung ist das furchteinflößendste Gefühl der Welt." },
      { text: "D) KAMPF — Der Prophet lässt keine andere Wahl.",
        desc: "[SC] [AL+Schatten] Boss-Kampf. [Code.Modify] stabilisiert seinen Code. Martin Ashvale erwacht — 25, verwirrt, FREI.",
        next: "a5k9_convergence", alignEffect: { schatten: 3 }, flagEffect: { prophetErgebnis: "besiegt_befreit" },
        narrativeFeedback: "Er kämpft nicht gegen dich — gegen sich selbst. Als der Code stabilisiert ist: ein junger Mann auf dem Boden. 500 Jahre Schmerz. Erledigt." },
    ]
  },

  a5k9_convergence: {
    act: "AKT V", chapter: "Kapitel 39 — Convergence()", title: "Yukis Idee",
    conditionalFlag: "varkosErgebnis",
    textConditional: {
      frieden_erklaerung: `Lilithia trat in den Raum. Die erste Dämonin jemals in einer menschlichen Kriegssitzung. Niemand sagte etwas. Sie legte Varkos' unterzeichnetes Friedensangebot auf den Tisch. »Er hat es unterzeichnet«, sagte sie. »Für seine Tochter.« Alle schauten Sera an. Sera schaute auf den Tisch.`,
      prophet_info: `Ich hatte die Koordinaten des Void-Propheten. Ich teilte sie nicht sofort — aber ich hatte sie. Während die anderen planten, lag in meinem Kopf ein zweiter Plan. Einer der noch keinen Namen hatte.`,
      default: ``,
    },
    scene: "Verbotener Turm — 3 Monate bis zum Update", bg: "night", music: "theme_family",
    conditionalFlag: "varkosErgebnis",
    textConditional: { frieden_erklaerung: `Lilithia legte Varkos Unterschrift auf den Tisch. »Für seine Tochter.« Alle schauten Sera an. Sera schaute auf den Tisch.`, prophet_info: `Ich hatte die Koordinaten des Propheten. Noch kein Wort. Aber während die anderen planten lag in meinem Kopf ein zweiter Plan.`, default: `` },
    text: `Drei Monate. Alle Puzzleteile auf dem Tisch.

Alle versammelt. Nullen, Helden, Verbündete.

Die wichtigste Frage: WAS schreibst du?

Aria: »Die Welt ohne System — dann sterben alle, die auf Skills angewiesen sind.«

Gorrick: »Wer schreibt die neuen Regeln? Das wäre eine neue Diktatur.«

Und dann — Yuki. Leise, aber klar:

»Was wäre, wenn das System... FRAGT? Statt BEFIEHLT? Wenn es den Menschen OPTIONEN gibt, statt VORGABEN?«

Stille. Kaito schaute auf.

»Ein System, das fragt. 'Willst du eine Klasse?' 'Willst du Level?' 'Willst du frei sein?' Kein Zwang. WAHL.«

Kaito — langsam, als würde ein Programm compilieren:

»Ein optionales System. Nicht abgeschafft — FREIGESTELLT. Level als WERKZEUG, nicht als IDENTITÄT. Klassen als ANGEBOT, nicht als SCHICKSAL.«

Tertius, flüsternd: »...Das hat noch nie jemand vorgeschlagen.«

»Weil noch nie jemand das System sowohl VERSTEHT als auch FÜHLT. Ich bin ein Programmierer, der gelernt hat zu lieben. Das ist die einzige Qualifikation, die zählt.«

Er griff nach dem Stift. Und begann zu SCHREIBEN.`,
    systemBox: { title: "OPERATION: SYSTEM.REWRITE()", lines: [
      "> PHASE 1 — ABLENKUNG (3 Wochen vor Update):", "> → Akira: Öffentliche Verweigerung",
      "> → Celeste: Alle Beweise veröffentlichen", "> → Lilithia: Waffenstillstand deklarieren", ">",
      "> PHASE 2 — INFILTRATION (2 Wochen vor Update):", "> → Kaito + Ren + Rex → Ebene 37",
      "> → Gorrick + Aria → Support und Heilung", "> → Veyra → Kommunikation aller Fronten", ">",
      "> PHASE 3 — DER KERN (Tag des Updates):", "> → Kaito erreicht den System-Kern allein",
      "> → Konfrontation: Sextus' Echo + ggf. PRIMUS", "> → System-Code umschreiben", ">",
      "> DER NEUE CODE: OPTIONALES SYSTEM", "> → Yukis Idee. Die einzige, die funktioniert.",
    ]},
    choices: [
      { text: "→ Der letzte Abend beginnt",
        next: "a5k10_abschied",
        affinityEffect: { veyra: 20, gorrick: 10, ren: 10 },
        narrativeFeedback: "Veyra sagt etwas — leise, zu niemandem bestimmt, aber Kaito hört es: ihren echten Namen. Nicht die Maske. Den Namen den sie vor fünfzehn Jahren aufgehört hatte zu benutzen. Er sagt nichts. Aber er vergisst es nicht.",
      },
    ],
  },

  a5k10_abschied: {
    act: "AKT V",
    chapter: "Kapitel 40 — Launch.Sequence()",
    title: "Der letzte Abend",
    scene: "Verbotener Turm — Nacht vor dem Endgame",
    bg: "night",
    music: "theme_family",
    conditionalFlag: "ariaZugang",
    textConditional: {
      familie: `Aria summte Elenas Lied — ohne es zu wissen, ohne Erklärung, während Rex' Feuer blau brannte. Kaito erstarrte. Das Lied hatte einen Ursprung. Älter als Aria. Älter als alles was er verstand.`,
      default: ``,
    },
    text: `Feuer.

Rex hatte in der Mitte des Lagerplatzes einen blauen Feuerkreis gezogen — kein Angriff, nur Licht, warm und drachenhaft. Alle saßen darum. Kaito zählte.

Gorrick. Ren. Veyra. Aria. Roland. Elena. Finn. Sera. Mira — sie hatte es irgendwie geschafft hier zu sein, wie sie es immer irgendwie schaffte.

Elf Menschen und ein Drache.

Gorrick hob sein Bier. »Wenn die Welt morgen untergeht — dann wenigstens mit dem besten Bier aus Kreuzweg.«

Aria: »Die Welt geht nicht unter. Sie wird neu.«

Ren — fester als je zuvor, kaum noch flackernd, mit Augen die jeden Tag lebendiger wurden: »Wenn das System fällt... existiere ich dann wirklich? Richtig? Ohne zu flackern?«

»Ja, Ren.«

Er schaute auf seine Hand. Die Hand eines Jungen, der dreihundert Jahre alt war und nie wirklich jung gewesen war. »Ich habe nie gewusst wie das ist. Wirklich zu existieren.«

»Du wirst es lernen.«

»Ja.« Er schloss die Hand. »Das werde ich.«`,
    text2: `Veyra saß abseits. Nicht weit — aber charakteristisch für sie, am Rand, wo sie alle sehen konnte ohne mitten in etwas zu sein.

Kaito setzte sich neben sie.

»Du hast heute deinen echten Namen gesagt«, sagte er.

»Habe ich das?«

»Ja. Beim Planen. Ganz kurz. Du hast es selbst nicht gemerkt.«

Veyra schwieg. Schaute ins Feuer. Dann: »Nennst du ihn?«

»Nein.«

Sie nickte. Einmal. Das war ein Dankeschön.

Finn schlief bereits. Das Grinsen war auch im Schlaf da — das breite, unzerstörbare. Roland saß neben ihm, einer seiner großen Hände lose auf Finns Schulter. Der Krieger und der Ritter. Wie Vater und Sohn, fast, wenn man nicht wusste.

Elena sang leise. Nicht für jemanden — für den Abend. Für das Feuer.

Mira schlief mit dem Kopf auf Rex' Flanke, die sich mit jedem Atemzug des Drachen hob und senkte.

Kaito schaute.

Merkte, dass er nicht analysierte. Nicht zählte. Nicht das Terminal öffnete.

Er schaute einfach.

Das war, dachte er, das Seltenste was ihm je passiert war.`,
    choices: [
      { text: "A) Diese Nacht ist für Sera.",
        next: "a5k10_aufbruch",
        requires: { affinity: { sera: 40 } },
        affinityEffect: { sera: 20 },
        flagEffect: { finaleBeziehung: "sera" },
        narrativeFeedback: "Sie sitzen am Felsen — ihrem Felsen. Kein Wort zuerst. Dann wirft Sera einen Stein. Er landet weit. »Immer noch besser als du.« — »Ja.« Eine Pause. »Kaito.« — »Ja.« — »Komm zurück.« Nicht als Bitte. Als Tatsache die sie sicherstellt.",
      },
      { text: "B) Diese Nacht ist für Yuki.",
        next: "a5k10_aufbruch",
        requires: { affinity: { yuki: 40 } },
        affinityEffect: { yuki: 20 },
        flagEffect: { finaleBeziehung: "yuki" },
        narrativeFeedback: "Sie sitzen unter den Sternen, Yuki ohne Countdown über dem Kopf zum ersten Mal seit Jahren. Sie hält den Hasen-Anhänger. Kaito hält die andere Seite davon. Niemand sagt etwas. Das reicht.",
      },
      { text: "C) Diese Nacht ist für die Familie.",
        next: "a5k10_aufbruch",
        affinityEffect: { elena: 15, roland: 15, mira: 15 },
        flagEffect: { finaleBeziehung: "familie" },
        narrativeFeedback: "Elena singt das Schlaflied. Roland sagt nichts. Mira schläft schon. Kaito sitzt zwischen seinen Eltern wie mit vier Jahren, und denkt: Das hier ist der Grund. Nicht das System. Das hier.",
      },
      { text: "D) Diese Nacht ist für die Nullen — alle zusammen.",
        next: "a5k10_aufbruch",
        affinityEffect: { gorrick: 15, ren: 15, veyra: 15, rex: 10, aria: 10 },
        flagEffect: { finaleBeziehung: "familie" },
        narrativeFeedback: "Gorrick erzählt die Geschichte wie er zum ersten Mal eine Rune falsch schrieb — dreißig Jahre seiner Arbeit. Alle lachen. Rex pustet kurz blaues Feuer als er lacht. Das Feuer wirft Schatten die aussehen wie Tänzer. Kaito merkt: Das hier ist auch Familie.",
      },
      { text: "E) Diese Nacht gehört dir allein.",
        next: "a5k10_aufbruch",
        alignEffect: { verborgenheit: 2 },
        flagEffect: { finaleBeziehung: "allein" },
        narrativeFeedback: "Er geht auf das Dach. Allein. Das Terminal zeigt: 1 Tag, 4 Stunden, 22 Minuten. Er schließt es. Öffnet stattdessen Gregors Tagebuch. Seite 47. Liest sie ein letztes Mal. Legt sie dann weg. Er ist bereit.",
      },
    ],
  },

  a5k10_aufbruch: {
    act: "AKT V", chapter: "Kapitel 40 — Der Aufbruch", title: "»Dann geh.«",
    scene: "Irondeep-Labyrinth, Eingang — erstes Licht", bg: "void", music: "theme_void_terminal",
    text: `Letztes Licht des Mondes. Dann Dämmerung.

Kaito stand am Eingang des Irondeep-Labyrinths. Zum dritten und letzten Mal. Hinter ihm: Ren, der fester war als je zuvor. Rex, der seinen Kopf senkte und ein leises Grollen von sich gab — nicht Drohung, Versprechen. Roland, der keine Worte hatte und keine brauchte. Sera, die ihn einmal ansah, kurz, direkt, und dann geradeaus schaute. Finn, der grinte.

An der Oberfläche: Die Ablenkung begann. Akira trat vor die Öffentlichkeit. Celeste veröffentlichte die Beweise. Lilithia deklarierte den Waffenstillstand.

Das Terminal: \`COUNTDOWN: 14 TAGE\`.

Kaito schaute nicht zurück.

Er war achtzehn. Er hatte zwei Leben gelebt. Er hatte eine Familie verloren und eine neue gefunden. Er hatte Gregor geliebt und Aldwins Brief dreimal gelesen — jedes Mal mit der Stimme die er sich für »A.« vorstellte, ruhig, ein bisschen müde, 400 Jahre Erschöpfung in zwei Zeilen. Er hatte Sera beim ersten Feuerkontrollieren zugeschaut und gedacht: das ist stark.

Er öffnete das Terminal.

Schrieb eine Zeile hinein. Keine Funktion, keine Analyse. Nur:

\`WOFÜR. NICHT WOGEGEN.\`

Gregors Worte. Die einzigen die zählten.

Dann stieg er hinab.

Hinter ihm: Ren. Rex. Roland. Sera. Finn.

An der Oberfläche: Die Ablenkung begann. Akira trat vor die Öffentlichkeit. Celeste veröffentlichte alle Beweise. Lilithia deklarierte den Waffenstillstand.

Die WELT EXPLODIERTE in Fragen, Protesten, Umwälzungen.

Und in all dem Lärm — leise, unsichtbar, wie immer — stieg Kaito hinab.

»Septima. Wenn du mich hören kannst... ich bin bereit.«`,
    systemBox: { title: "VOID-TERMINAL — FINALE PHASE", lines: [
      "> ...", ">",
      "> Sie hört dich.", "> Sie hat dich IMMER gehört.", ">",
      "> — S.: »Dann geh. Und komm als der zurück,", ">         der du sein SOLLST.«", ">",
      "> PHASE FINAL INITIALISIERT.", "> AKT VI: »SYSTEM.EXIT()«", ">",
      "> Ziel: Den Kern erreichen.", "> Die Welt verändern.", ">",
      "> Viel Glück, Kaito.", "> Du hast es verdient.",
    ]},
    choices: [{ text: "→ AKT VI: System.Exit() — Das Endgame", next: "a6k1_intro" }],
  },

  // ════ AKT VI PLATZHALTER ════════════════════════════════════════════════
  a6k1_intro: {
    act: "AKT VI", chapter: "Kapitel 41 — Final.Descent()", title: "AKT VI — System.Exit()",
    scene: "Irondeep-Labyrinth, Ebene 31–37 — 14 Tage bis zum Update", bg: "void", music: "theme_void_terminal",
    text: `14 Tage bis zum System-Update.

Kaito steigt in die Null-Zone hinab. Tertius' Blaupause in der Hand. Den neuen Code im Kopf.

Septimas Zeichen trägt er seit seiner Geburt in diese Welt.

Jetzt ist es Zeit, es zu benutzen.

[Akt VI — in Entwicklung]`,
    systemBox: { title: "VOID-TERMINAL", lines: [
      "> AKT VI: »System.Exit()« folgt in Kürze.", "> Kapitel 41–46 + die 7 Enden.", ">",
      "> — S.: »Du bist weiter als ich erwartet habe.", ">   Viel weiter. Ich bin stolz.«",
    ]},
    choices: [{ text: "→ Zum Hauptmenü", next: "__title__" }],
  },
};

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
    act: "AKT V", chapter: "Zeitsprung — Das Jahr der Vorbereitung",
    title: "OVERFLOW", scene: "Aethermere — Alter: 18 Jahre", bg: "chaos", music: "theme_void_terminal",
    systemBox: { title: "COUNTDOWN", lines: [
      "> ZEIT BIS ZUM SYSTEM-UPDATE: 1 Jahr, 11 Monate", ">",
      "> Die Systemkirche verschärfte die Kontrolle.", "> »System-Skepsis« wurde zur strafbaren Handlung.", ">",
      "> In Drak'Moor: Varkos sammelt Truppen.", "> Der Void-Prophet gewinnt Anhänger.", ">",
      "> An der Grenzfestung Eiswall: Yuki wird schwächer.", "> Akira zweifelt.", ">",
      "> Die Nullen wuchsen. Nicht an Zahl — an EINFLUSS.", "> Rex ist jetzt 6 Meter groß. Und WÄCHST.", ">",
      "> Ich bereitete mich auf Ebene 33 vor.", "> Tertius. Der Architekt, der bereute.",
    ]},
    choices: [{ text: "→ Kapitel 31: Der Krieg beginnt", next: "a5k1_kriegsplan" }],
  },

  a5k1_kriegsplan: {
    act: "AKT V", chapter: "Kapitel 31 — War.Init()", title: "Operation Reinigung",
    scene: "Verbotener Turm — 1 Jahr, 4 Monate bis zum Update", bg: "night", music: "theme_mystery",
    text: `Der Krieg begann nicht mit einem Schlachtruf. Er begann mit einem BRIEF.

Veyras Informant meldete: »Operation Reinigung« — Präventivschlag gegen Drak'Moor. Begründung: »Wachsende Dämonenbedrohung«. Wahrer Grund: Varkos' Armee wird zu groß.

Wenn Operation Reinigung stattfindet: Zehntausende Tote. Lilithias Fraktion wird zermalmt. Der Krieg wird zur selbsterfüllenden Prophezeiung — die Kirche provoziert einen Krieg, um zu beweisen, dass Krieg nötig ist.

Mordecai will den Krieg VOR dem System-Update. Im Chaos wird niemand fragen, warum das Update passiert.

Aria: »Zehntausende Tote. Damit ein System aktualisiert werden kann.«

Gorrick: »Mein Hammer sagt: NEIN.«

Wir haben drei Fronten. Der Spieler setzt die Priorität.`,
    choices: [
      { text: "A) POLITISCH — Celeste befreien, Kaiser überzeugen.",
        desc: "[SC] [AL+Ordnung] Wenn der Kaiser den Krieg offiziell verweigert, hat Mordecai keine Armee. Risiko: Putsch.",
        next: "a5k2_sera_varkos", alignEffect: { ordnung: 2 }, flagEffect: { kriegsPrioritaet: "politisch" },
        narrativeFeedback: "Veyra nickt — sie kennt jeden Gang des Palasts bereits. In drei Nächten ist Celeste frei." },
      { text: "B) DIPLOMATISCH — Lilithia stärken, Varkos konfrontieren.",
        desc: "[SC] [AL+Licht] Sera MUSS involviert werden. Wenn Varkos nicht angreift, gibt es keinen Vorwand.",
        next: "a5k2_sera_varkos", alignEffect: { licht: 1 }, flagEffect: { kriegsPrioritaet: "diplomatisch" },
        narrativeFeedback: "Sera hört den Plan. Sie sagt nichts. Ihre Hand schließt sich fester um das Fensterbrett — bis das Holz knirscht." },
      { text: "C) MILITÄRISCH — Die Helden überzeugen, sich zu weigern.",
        desc: "[SC] [AL+Licht] Ohne Helden hat die Armee keine Speerspitze. Risiko: System-Override.",
        next: "a5k2_sera_varkos", alignEffect: { licht: 2 }, flagEffect: { kriegsPrioritaet: "militaerisch" },
        narrativeFeedback: "Gorrick hämmert dreimal auf den Tisch. Rex öffnet ein Auge. Beide bedeuten: gut." },
      { text: "D) ALLE DREI GLEICHZEITIG — Die Nullen teilen sich auf.",
        desc: "[SC] [AL+Ordnung+Chaos] Veyra→Palast. Kaito+Sera→Drak'Moor. Ren→Helden. Höchstes Risiko. Höchster Ertrag.",
        next: "a5k2_sera_varkos", alignEffect: { ordnung: 1, chaos: 1 }, flagEffect: { kriegsPrioritaet: "alle" },
        narrativeFeedback: "Veyra nickt. Ren flackert, wird fest. Rex öffnet ein Auge: »Rex fliegt.«" },
    ]
  },

  a5k2_sera_varkos: {
    act: "AKT V", chapter: "Kapitel 32 — Confront.Father()", title: "Sera und Varkos",
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
    ]
  },

  a5k3_tertius: {
    act: "AKT V", chapter: "Kapitel 33 — Descent.Final()", title: "Tertius — Der schlafende Schmied",
    scene: "Irondeep-Labyrinth, Ebene 31–33", bg: "void", music: "theme_void_terminal",
    text: `Das Labyrinth. Finn bestand darauf mitzukommen: »Bester. Freund. Für. Immer.«

Ebene 32 — System-Stabilität 0,5%: Ren ist FEST. Real. Zum ersten Mal seit 400 Jahren. »...Ich bin ganz. Hier unten bin ich GANZ.«

Ebene 33: Eine kolossale Werkstatt. Amboss so groß wie ein Haus. Blaupausen des Genesis-Systems, mit zunehmender Verzweiflung unleserlicher.

Und am Amboss — Tertius. Schlafend.

Drei Meter. Bronze-Haut. Alt wie die Welt. Sein Haar lag über den Amboss verteilt wie geschmolzenes Metall.

»Tertius.«

Die Augen öffneten sich — golden, tief wie Minen.

»...Wie lange?«

»Zweitausendachthundert Jahre.«

»...Kürzer als geplant.«

Das System hat einen KERN. In der Null-Zone. Lebendig — wie ein Herz, das Aether durch die Welt pumpt. Das Update kommt automatisch. Niemand muss es aktivieren.

»Wie halte ich es auf?«

»Du musst den Kern erreichen. Und nicht ZERSTÖREN — das würde die Welt zerreißen. VERÄNDERN.«

Drei Voraussetzungen: Physischer Zugang, [Code.Modify] vollständig, und eine VISION — was soll das System danach sein?`,
    systemBox: { title: "TERTIUS' GESCHENKE", lines: [
      "> 1. DER SCHLÜSSEL", ">    [Code.Modify] TEILWEISE freigeschaltet", ">    → Kann System-Titel entfernen (z.B. [Unheilsbringer])", ">    → Kann Limitierungen aufheben (z.B. Rex — PERMANENT)", ">",
      "> 2. DIE BLAUPAUSE", ">    Vollständige Karte des System-Kerns", ">    Wo der Kern ist, wie er geschützt ist", ">    Position von Sextus' Echo (der Wächter)", ">",
      "> 3. EIN VERSPRECHEN", ">    Tertius als Berater (er kann nicht kämpfen)", ">    »Ich kann nicht kämpfen. Aber ich kann ERKLÄREN.", ">    Und das ist manchmal mächtiger.«",
    ]},
    text2: `»Null. Eine letzte Sache.«

Seine goldenen Augen waren sanfter. Nicht die Augen eines Gottes. Die Augen eines müden alten Mannes.

»Wenn du vor der Entscheidung stehst, WAS das System werden soll — dann denk nicht an CODE. Denk an MENSCHEN.«

»Wir haben den Fehler gemacht, die Welt als DATEN zu sehen. Du bist ein Programmierer — das ist deine Stärke und deine GEFAHR. Vergiss nicht: Der Code beschreibt die Welt. Er IST nicht die Welt.«

»...Verstehen und fühlen.«

»Genau.«`,
    choices: [{ text: "→ Kapitel 34: Yukis Timer brechen", next: "a5k4_yuki" }],
    skillUnlock: ["codeModify"], wissenEffect: ["septimaIdentitaet"],
  },

  a5k4_yuki: {
    act: "AKT V", chapter: "Kapitel 34 — Shield.Break()", title: "Yukis Timer brechen",
    scene: "Grenzfestung Eiswall — 11 Monate bis zum Update", bg: "night", music: "theme_friendship",
    text: `Mit [Code.Modify] teilweise freigeschaltet konnte ich endlich tun, was ich Yuki vor drei Jahren versprochen hatte.

Ihren Timer BRECHEN.

Sie sah schlecht aus. Dünner. Blass. Graue Strähnen im Haar. Aber ihre Augen: klar. ENTSCHLOSSEN.

»Wie schlimm ist es?«`,
    systemBox: { title: "VOID-TERMINAL — SCAN: YUKI SAKAMOTO", lines: [
      "> Verbleibende Lebensspanne: 3 Jahre, 2 Monate", "> Mana-Overflow-Drain: 4,7 Jahre/Jahr", ">",
      "> Der Drain kann UMGELEITET werden.", "> Möglichkeit: Kaito SELBST.", "> → [NULL] hat theoretisch unbegrenzten Aether-Zugang", ">",
      "> [Code.Modify] kann den Drain umleiten.", "> Aber: SCHMERZHAFT. Für beide.",
    ]},
    text2: `»Drei Jahre. Vielleicht weniger.«

»Den Drain umleiten. Von deiner Seele auf mich. Nicht permanent — bis ich den Kern erreiche.«

»UNANGENEHM?! Du meinst, er schwächt dich?«

»Wahrscheinlich.«

»NEIN. Ich lasse nicht zu, dass du—«

»Yuki. Drei Optionen. Nichts tun — du stirbst. Nebelsumpf — für immer allein. Oder: ich nehme den Drain.«

Stille.

»Warum? Warum TUST du das?«`,
    choices: [
      { text: "A) »Weil ich es versprochen habe.«",
        desc: "[AF+Yuki+15] Einfach. Ehrlich. Der Bond wird durch AKTION definiert, nicht Worte.",
        next: "a5k4_drain", affinityEffect: { yuki: 15 },
        narrativeFeedback: "Yuki nickt. Tränen, aber kein Weinen. Sie hat gelernt, dass seine Versprechen keine leeren Worte sind." },
      { text: "B) »Weil du mir den Hasen gegeben hast.« — Er hält den Anhänger hoch.",
        desc: "[AF+Yuki+25] Romance Route 3 intensiviert. »Du hast ihn behalten?« »Jeden Tag.«",
        next: "a5k4_drain", affinityEffect: { yuki: 25 }, alignEffect: { licht: 1 },
        flagEffect: { yukiRomanceVertieft: true },
        narrativeFeedback: "Yuki schluchzt. »Jeden Tag?« »Jeden Tag.« Der Hasen-Anhänger liegt warm in seiner Hand." },
      { text: "C) »Weil die Welt dich BRAUCHT. Als Yuki. Nicht als Heldin.«",
        desc: "[AF+Yuki+20] Emanzipations-Moment. Niemand hat ihr je gesagt, dass die Welt sie als MENSCH braucht.",
        next: "a5k4_drain", affinityEffect: { yuki: 20 }, alignEffect: { licht: 1 },
        narrativeFeedback: "»Als... Yuki?« Sie sagt es leise — als würde sie ihren eigenen Namen zum ersten Mal WIRKLICH hören." },
      { text: "D) »Weil du dasselbe für mich tun würdest.«",
        desc: "[AF+Yuki+20] Gegenseitigkeit. Gleichberechtigung. Stärkste Basis.",
        next: "a5k4_drain", affinityEffect: { yuki: 20 },
        narrativeFeedback: "Yuki schaut ihn an. Und WEISS: Er hat recht. »...Ja. Das würde ich.«" },
    ]
  },

  a5k4_drain: {
    act: "AKT V", chapter: "Kapitel 34 — Die Übertragung", title: "Das Versprechen wird gehalten",
    scene: "Grenzfestung Eiswall", bg: "void", music: "theme_void_terminal",
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
    act: "AKT V", chapter: "Kapitel 35 — Celeste.Free()", title: "Die Prinzessin",
    scene: "Kaiserpalast, Aetheria Prime — 10 Monate bis zum Update", bg: "city", music: "theme_mystery",
    text: `Veyra hatte den Weg gebahnt. Drei Monate Vorbereitung.

Celeste — vier Monate unter Hausarrest, weil sie Mordecais Krieg abgelehnt hatte.

Kaito infiltrierte den Palast. [Code.Spoof] als »Nachtpatrouille« getarnt.

»Prinzessin Celeste?«

Sie saß am Schreibtisch. Unordentlich. Schrieb fieberhaft.

Drehte sich um. Keine Überraschung.

»Du bist spät. Veyra sagte, du kommst um Mitternacht. Es ist zwölf Minuten nach.«

»...Du wusstest—«

»Veyra und ich korrespondieren seit zwei Monaten. Durch die Dienerin. In einer Geheimschrift, die ich als Kind erfunden habe.«

Amethystaugen. Neunzehn Jahre alt. Zeitweber-Fähigkeit.

Der Rat: sechs Stimmen hat Mordecai gekauft. Drei weitere Valentine. Das lässt Valdric, einen alten General und Celeste.

Drei gegen neun.

»Dann ändern wir die Mathematik.«

Das System-Siegel. [Code.Modify]: Das Siegel sucht Celeste — findet NULL = niemand — deaktiviert sich.

»Zum Kaiser. JETZT.«`,
    choices: [
      { text: "A) »Du bist mutig. Für eine Prinzessin.«",
        desc: "[AF+Celeste+15] Celeste: »Ich bin mutig für einen MENSCHEN. Dass ich eine Prinzessin bin, ist Zufall.«",
        next: "a5k6_kaiserrat", affinityEffect: { celeste: 15 },
        narrativeFeedback: "Celeste lächelt — nicht das politische Lächeln, sondern das echte. Sie wurde gesehen." },
      { text: "B) »Dein Zeitweber-Skill glitcht in meiner Nähe, richtig?«",
        desc: "[AF+Celeste+20] Celeste lacht echt. Intellektuelle Verbindung. »Jede Berechnung ist in deiner Nähe... unscharf.«",
        next: "a5k6_kaiserrat", affinityEffect: { celeste: 20 },
        narrativeFeedback: "Sie lacht — echt, nicht politisch. Das erste Mal, seit sie eingesperrt ist." },
      { text: "C) »Wenn dein Vater nicht mitmacht — Plan B?«",
        desc: "[AF+Celeste+15] »Ich übernehme. Drei Sekunden Zeitmanipulation reichen für jede Verhandlung.« Pragmatische Allianz.",
        next: "a5k6_kaiserrat", affinityEffect: { celeste: 15 },
        narrativeFeedback: "»Das ist erschreckend und beeindruckend.« »Danke.«" },
    ]
  },

  a5k6_kaiserrat: {
    act: "AKT V", chapter: "Kapitel 36 — Council.Override()", title: "Der Showdown",
    scene: "Thronsaal, Kaiserpalast", bg: "city", music: "theme_family",
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
      { text: "A) GNADENLOS — »Der Rat soll urteilen.«",
        desc: "[SC] [AL+Schatten] Mordecai verhaftet. Machtvakuum — Extremisten übernehmen die Kirche.",
        next: "a5k7_kross", alignEffect: { schatten: 1, ordnung: 1 }, flagEffect: { mordecaiSchicksal: "verhaftet" },
        narrativeFeedback: "Mordecai geht schweigend. Zwei Wachen. Er dreht sich nicht um. Sieben zu fünf für den Frieden." },
      { text: "B) BARMHERZIG — »Mordecai ist ein OPFER. Er verdient eine Chance.«",
        desc: "[SC] [AL+Licht] Mordecai-Redemption-Pfad. Sein Wissen über das System ist unbezahlbar für Akt VI.",
        next: "a5k7_kross", alignEffect: { licht: 2 }, flagEffect: { mordecaiSchicksal: "redemption" },
        narrativeFeedback: "Mordecai schaut Kaito an. »Meine Überzeugungen waren echt. Aber meine Informationsquelle war... manipuliert.« Er sagt es laut. Vor dem Rat." },
      { text: "C) POLITISCH — »Mordecai tritt zurück. Freiwillig. Still.«",
        desc: "[SC] [AL+Ordnung] Keine Radikalisierung. Die Wahrheit bleibt verborgen. Pragmatischster Pfad.",
        next: "a5k7_kross", alignEffect: { ordnung: 2 }, flagEffect: { mordecaiSchicksal: "ruecktritt" },
        narrativeFeedback: "Mordecai unterschreibt. Er liest das Papier nicht. Er ist bereits woanders." },
    ]
  },

  a5k7_kross: {
    act: "AKT V", chapter: "Kapitel 37 — Boss.Kross()", title: "Die Eiserne Faust",
    scene: "Kreuzweg — 8 Monate bis zum Update", bg: "chaos", music: "theme_training",
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
        next: "a5k9_convergence", alignEffect: { schatten: 2 }, flagEffect: { prophetErgebnis: "besiegt_befreit" },
        narrativeFeedback: "Er kämpft nicht gegen dich — gegen sich selbst. Als der Code stabilisiert ist: ein junger Mann auf dem Boden. 500 Jahre Schmerz. Erledigt." },
    ]
  },

  a5k9_convergence: {
    act: "AKT V", chapter: "Kapitel 39 — Convergence()", title: "Yukis Idee",
    scene: "Verbotener Turm — 3 Monate bis zum Update", bg: "night", music: "theme_family",
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
    choices: [{ text: "→ Kapitel 40: Der letzte Abend", next: "a5k10_abschied" }],
  },

  a5k10_abschied: {
    act: "AKT V", chapter: "Kapitel 40 — Launch.Sequence()", title: "Der letzte Abend",
    scene: "Verbotener Turm — Nacht vor dem Endgame", bg: "night", music: "theme_elena_song",
    text: `Nacht. Die Nullen. Alle zusammen. Rex' Feuer — warm, blau, drachenhaft.

Gorrick: »Wenn die Welt morgen UNTERGEHT — dann mit dem besten BIER!«

Aria: »Die Welt geht nicht unter. Sie wird NEU.«

Ren, stabiler als je zuvor: »Wenn das System fällt... werde ich dann EXISTIEREN? Richtig? Ohne zu flackern?«

»Ja, Ren. Du wirst existieren. RICHTIG.«

Veyra, im Gras: »Brauche ich noch tausend Gesichter?«

»Eines reicht. Wenn es DEINS ist.«

Rex: »Rex wird so groß wie ein BERG!«

Gorrick: »WO SCHLÄFST du dann?«

Rex: »AUF dem Berg. Rex IST der Berg.«

Gelächter. Warm. Echt.

Roland: »Ich komme mit.«

Sera: »Ich auch.«

Finn: »ICH AUCH! Bester Freund für—«

ALLE: »—IMMER. Ja, Finn. Wir WISSEN.«`,
    choices: [
      { text: "A) SERA — Nacht am Fluss. Wie vor dreizehn Jahren.",
        desc: "[AF+Sera+20] Steine ins Wasser werfen. Wenn Romance Route 1: Der erste Kuss. Schmeckt nach Feuer und ZUHAUSE.",
        next: "a5k10_aufbruch", affinityEffect: { sera: 20 }, flagEffect: { finaleBeziehung: "sera" },
        narrativeFeedback: "Ihr Felsen. Derselbe wie damals. »Erinnerst du dich? Du hast gesagt, ich sei nicht komisch.« »Und du bist es immer noch.«" },
      { text: "B) YUKI — Unter den Sternen.",
        desc: "[AF+Yuki+20] »Du hast mir das Leben gerettet.« »Noch nicht ganz.« »Doch. An dem Tag, als du der Einzige warst, der mich GESEHEN hat.«",
        next: "a5k10_aufbruch", affinityEffect: { yuki: 20 }, flagEffect: { finaleBeziehung: "yuki" },
        narrativeFeedback: "Sie lehnt ihren Kopf an seine Schulter. Kein Kuss. Etwas TIEFERES. Die zwei Monde von Aethermere leuchten über ihnen." },
      { text: "C) EMMA — In der Bibliothek. Natürlich.",
        desc: "[AF+Emma+20] Emma zeigt sein Bild — drei Jahre lang gezeichnet. »Das erste Mal, dass jemand mich bat, zu ZEICHNEN statt zu analysieren.«",
        next: "a5k10_aufbruch", affinityEffect: { emma: 20 }, flagEffect: { finaleBeziehung: "emma" },
        narrativeFeedback: "»Komm zurück. Damit ich dich fertig zeichnen kann.« Die ehrlichste Bitte, die Emma je ausgesprochen hat." },
      { text: "D) VEYRA — Auf dem Turmdach. Masken fallen.",
        desc: "[AF+Veyra+20] Ihr echtes Gesicht. Heterochrome Augen. Narben. »Das bin ICH. Ohne Masken. Zum ersten Mal.«",
        next: "a5k10_aufbruch", affinityEffect: { celeste: 20 }, flagEffect: { finaleBeziehung: "veyra" },
        narrativeFeedback: "»Komm zurück. Zu MIR. Nicht zu einer Maske.«" },
      { text: "E) FAMILIE — Elenas Schlaflied.",
        desc: "[AF+Familie] Elena singt die alten Worte. Kaito singt mit. Wilde Magie verbindet Generationen. Mira schläft auf seinem Schoß.",
        next: "a5k10_aufbruch", affinityEffect: { roland: 15, elena: 15 }, alignEffect: { licht: 2 },
        flagEffect: { finaleBeziehung: "familie" },
        narrativeFeedback: "Das Lied vibriert — Wilde Magie durch Generationen. Elena weint. Roland hält ihre Hand. Keine Romanze nötig. FAMILIE ist genug." },
    ]
  },

  a5k10_aufbruch: {
    act: "AKT V", chapter: "Kapitel 40 — Der Aufbruch", title: "»Dann geh.«",
    scene: "Irondeep-Labyrinth, Eingang — erstes Licht", bg: "void", music: "theme_void_terminal",
    text: `Morgen. Erstes Licht. Kaito stand am Eingang des Irondeep-Labyrinths. Zum dritten und letzten Mal.

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

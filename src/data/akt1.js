// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT I: ERSTE BYTES
// Kapitel 1–4: Baby-Phase, Alter 0–3
// Vollständig texttreu nach PDF
// ═══════════════════════════════════════════════════════

export const AKT_I = {

  // ════ KAPITEL 1: NULL.INIT() — DAS ERWACHEN ══════════════════════════════

  a1_geburt: {
    act: "AKT I",
    chapter: "Kapitel 1 — Null.Init()",
    title: "Die Geburt",
    scene: "Dorf Millheim, Valtheris — Jahr 897 des Systems",
    bg: "light",
    music: "theme_family",
    text: `Licht.

Zu viel davon. Meine Augen — NEU, unbenutzt, nicht an diese Welt gewöhnt — konnten es nicht verarbeiten. Alles war ein verschwommener Strudel aus Formen und Farben.

Ich versuchte zu schreien. Nicht aus Angst — aus FRUSTRATION. Mein Körper gehorchte mir nicht. Meine Arme waren winzig, nutzlos, flatterten wie nasse Handtücher. Mein Kopf wackelte. Meine Beine—

Moment. Ich hatte Beine. Kleine, absurde Beine.

Ich war ein Baby.

Ich, Kaito Wake, 29 Jahre alt — mental — war ein verdammtes BABY.

Dann hörte er es. Eine Stimme. Warm, erschöpft, voller Liebe.

»Er ist da… Roland, er ist da… Sieh ihn dir an…«

»…Er ist perfekt. Elena, er ist perfekt.«`,

    text2: `Ich verstand kein Wort. Buchstäblich — die Sprache war fremd, melodisch, mit Lauten, die in keiner irdischen Sprache existierten. Aber den TON verstand ich. Liebe. Erleichterung. Freude.

Jemand hielt mich. Große, warme Hände, die zitterten. Ein Gesicht — verschwommen, aber ich konnte die Umrisse erkennen: ein kantiges Kinn, eine Narbe, braune Augen, die feucht glänzten.

Mein Vater. In dieser Welt hatte ich einen Vater.

Und er weinte.

Ich auch, ehrlich gesagt. Aber das war biologisch.`,

    systemBox: {
      title: "GENESIS-SYSTEM — REGISTRIERUNGSVERSUCH",
      lines: [
        "Neue Seele erkannt.",
        "Registrierung wird durchgeführt...",
        "",
        "Registrierung: ████████████████░ 97%",
        "",
        "FEHLER.",
        "REGISTRIERUNG FEHLGESCHLAGEN.",
        "",
        "Seelensignatur: NICHT ERKANNT",
        "Systemkompatibilität: 0%",
        "",
        "Maßnahme: IGNORIEREN.",
        "[Entität wird als NICHT EXISTENT vermerkt]",
        "Nächste Überprüfung: NIE",
      ]
    },

    text3: `Das System versuchte, mich zu registrieren. Und scheiterte.

Ich beobachtete — soweit ein Neugeborenes mit Götzenaugen etwas »beobachten« konnte — wie das Licht flackerte, sich verzerrte, und dann einfach... verschwand.

Bei mir: Nichts. Kein Status-Fenster. Keine Registrierung.

Die Hebamme Gerda runzelte die Stirn. »Hm... Das ist seltsam. Normalerweise zeigt das System...«

Elena sofort, beschützend: »Was? Was ist seltsam?«

»Sein Status. Er... ich kann ihn nicht sehen. Das passiert manchmal bei Frühgeburten — das System braucht ein paar Stunden. Macht euch keine Sorgen.«

Aber Gerda machte sich Sorgen. Ich konnte es an ihrem Gesicht sehen — selbst mit meinen nutzlosen Neugeborenen-Augen. Sie hatte das noch nie erlebt.

Willkommen in der Welt, Null.`,

    choices: [{ text: "→ Die erste Nacht", next: "a1_erste_nacht" }]
  },

  a1_erste_nacht: {
    act: "AKT I",
    chapter: "Kapitel 1 — Null.Init()",
    title: "Die erste Nacht",
    scene: "Haus der Familie Ashford, Millheim — Nacht",
    bg: "cottage",
    music: "theme_family",
    text: `Nacht. Das Haus war still. Elena schlief, erschöpft von der Geburt. Roland saß wach neben dem Bett, seine Hand auf dem Schwertgriff unter dem Kissen (alte Gewohnheit).

Ich konnte nicht schlafen. Nicht weil ich nicht müde war — mein Körper war ERSCHÖPFT. Aber mein Geist... 29 Jahre an Erinnerungen, Wissen, Erfahrungen, eingequetscht in einen Schädel, der kleiner war als eine Grapefruit.

Ich lag da, in einem Wollbündel, und dachte nach.

Punkt eins: Ich war tot. Definitiv tot. Server-Explosion, Feuer, Tod. Check.

Punkt zwei: Ich war wiedergeboren. In einer anderen Welt. Als Baby. In einem Holzhaus, das nach Heu und Kräutern roch. Check.

Punkt drei: Es gab ein System. Level, Status, all das RPG-Zeug. Und das System konnte mich nicht sehen. Check.

Punkt vier: Ich konnte den Code des Systems LESEN. Zumindest hatte ich vorhin etwas gesehen, das verdammt nach einem Interface aussah. Check.

Punkt fünf: Mein Körper war absolut nutzlos.`,

    text2: `Kaito konzentrierte sich. Er schloss seine winzigen Augen und DACHTE an das Terminal.`,

    systemBox: {
      title: "VOID-TERMINAL v0.01",
      lines: [
        "> ...",
        "> ...",
        "> Hallo.",
        ">",
        "> Körperstatus: Neugeborenes (2,8 kg)",
        "> Motorik: MINIMAL",
        "> Sehkraft: 14% (wird sich verbessern)",
        "> Sprachfähigkeit: 0% (wird sich verbessern)",
        "> Blase: VOLL (empfehle Maßnahme)",
        ">",
        "> Verfügbare Befehle:",
        "> [Code.Read] — VERFÜGBAR (Basis)",
        "> [Code.Analyze] — GESPERRT (Level: Säugling)",
        ">",
        "> Empfohlene Maßnahme für die nächsten",
        "> 6 Monate: Schlafen. Essen. Wachsen.",
        "> Nicht sterben.",
        ">",
        "> Viel Erfolg, Anomalie.",
      ]
    },

    text3: `»Blase: VOLL«? Ernsthaft?

...Verdammt. Es hatte recht.

Ich hasste diese Welt bereits.`,

    choices: [{ text: "→ Elenas Schlaflied", next: "a1_schlaflied" }]
  },

  a1_schlaflied: {
    act: "AKT I",
    chapter: "Kapitel 1 — Null.Init()",
    title: "Elenas Schlaflied",
    scene: "Haus der Familie Ashford — tiefe Nacht",
    bg: "cottage",
    music: "theme_elena_song",
    text: `Kurz darauf. Kaito hatte sich (unvermeidlich) bemerkbar gemacht. Elena wachte auf, wechselte die Windel mit schlaftrunken Routine, und hielt ihn dann an ihre Brust.

Und sang.

♪ Schlaf, mein Kind, im Mondenschein,
Die Sterne wachen über dein.
Die Welt ist weit, die Nacht ist still,
Du bist genau, wo ich dich will. ♪

♪ Ael'thira, ael'thira, shan...
Ael'thira, ael'thira, kaan... ♪

Und dann passierte etwas Seltsames.

Das Schlaflied änderte sich. Die ersten Zeilen waren in der Landessprache — Common. Aber dann glitt Elena in eine andere Sprache. Ältere Laute, weicher, mit einem Rhythmus, der nicht zu normaler Musik passte.

Und ich SPÜRTE es.

Nicht mit den Ohren. Mit etwas ANDEREM. Einem Sinn, den ich nicht benennen konnte. Die Worte — diese alten Worte — vibrierten. Sie hatten SUBSTANZ. Als trügen sie etwas in sich, das über Klang hinausging.`,

    systemBox: {
      title: "VOID-TERMINAL — EXTERNE ENERGIE ERKANNT",
      lines: [
        "> Typ: Unklassifiziert (NICHT System-Magie)",
        "> Quelle: Akustisch / Vocal",
        "> Analyse: [Code.Analyze GESPERRT]",
        ">",
        "> Vorläufige Einschätzung:",
        "> WILDE MAGIE — Fragment. Sehr schwach.",
        "> Die Trägerin ist sich nicht bewusst.",
        ">",
        "> Wirkung auf Anomalie:",
        "> ...beruhigend. Wirklich beruhigend.",
        "> ...Systemempfehlung: Schlafen.",
        ">",
        "> [Terminal geht in Ruhemodus]",
      ]
    },

    text2: `Wilde Magie. Meine Mutter sang Wilde Magie, ohne es zu wissen.

Das war... wichtig. Ich wusste es. Irgendwo in meinem übermüdeten, zusammengequetschten Erwachsenengehirn wusste ich, dass das WICHTIG war.

Aber Elenas Stimme war warm. Ihre Arme waren sicher. Und mein Körper — so klein, so neu — gehorchte der Magie, die keine Magie sein sollte.

Ich schlief ein.

Zum ersten Mal in meinem neuen Leben.

Zum ersten Mal seit langem... friedlich.`,

    choices: [{ text: "→ Kapitel 2: Die ersten Monate", next: "a2_familie_montage" }],
    skillUnlock: ["codeRead"],
    wissenEffect_on_arrival: ["elenaElfenblut"], // wird beim Erreichen dieses Nodes gesetzt
  },

  // ════ KAPITEL 2: FAMILIE.LOAD() — DIE ERSTEN MONATE ═════════════════════

  a2_familie_montage: {
    act: "AKT I",
    chapter: "Kapitel 2 — Familie.Load()",
    title: "Das Familienleben",
    scene: "Haus der Familie Ashford — Alter: 0–6 Monate",
    bg: "cottage",
    music: "theme_family",
    text: `Die ersten drei Monate meines neuen Lebens waren eine Übung in Demut.

Stellt euch vor: Ihr habt das Bewusstsein eines Erwachsenen, das Wissen eines Ingenieurs, die Erinnerungen von 29 Jahren — und euer größtes tägliches Accomplishment ist, euren eigenen Kopf gerade zu halten.

Ich konnte nicht sprechen. Konnte nicht laufen. Konnte kaum SEHEN. Mein Körper war ein Prototyp im Alphastadium, und das Universum hatte die Qualitätskontrolle übersprungen.

Aber ich war nicht untätig. Oh nein. Ich BEOBACHTETE.

Roland stand jeden Tag vor Sonnenaufgang auf. Er machte die Felder, versorgte die zwei Ziegen und die Hühner, und kam zum Frühstück zurück — schmutzig, verschwitzt, aber mit einem Lächeln, wenn er seinen Sohn sah. Dieser Mann — groß, stark, mit einer Narbe, die Geschichten erzählte — hielt mich mit einer Zartheit, die an Angst grenzte. Als hätte er Angst, mich zu zerbrechen.

Erst später verstand ich: Er HATTE Angst. Nicht davor, mich fallen zu lassen. Sondern davor, dass die Welt mich finden würde. Wie sie ihn gefunden hatte.`,

    text2: `Elena arbeitete als Dorteilerin. Frauen kamen mit Bauchschmerzen, Kinder mit Schürfwunden, gelegentlich ein Jäger mit einer ernsteren Verletzung. Sie legte die Hände auf und sprach leise Worte — System-Heilmagie, Level 2, kaum mehr als ein warmes Kribbeln.

Aber manchmal — wenn sie dachte, dass niemand hinsah — summte sie die alten Lieder. Und dann leuchteten ihre Hände anders. Nicht das standardisierte Blau der System-Heilung, sondern ein wärmeres, goldenes Licht, das aus einer tieferen Quelle kam.

Mein Void-Terminal registrierte es jedes Mal. WILDE MAGIE. Immer nur Fragmente. Aber echt.

Opa Gregor kam jeden Abend zum Abendessen. Er trug immer denselben abgewetzten Mantel, rauchte seine Pfeife, und erzählte Geschichten.

»Habe ich euch schon von dem Drachen erzählt, den ich im Nordwald gesehen habe? Klein war er, kaum größer als ein Pferd. Blau wie der Himmel. Hat mir ins Gesicht geschaut und... wisst ihr was? Er hat gelächelt. Drachen LÄCHELN, sage ich euch. Jeder, der etwas anderes behauptet, hat nie einen echten gesehen.«

Roland, trocken: »Vater, du hast diese Geschichte schon dreißig Mal erzählt.«

»Und sie wird jedes Mal besser! Außerdem — ich erzähle sie nicht für DICH, du humorloser Kerl. Ich erzähle sie für MEINEN Enkel.«`,

    text3: `Gregor hob mich hoch und schaute mir in die Augen.

»Du verstehst mich, oder, Kleiner? Ich sehe es in deinen Augen. Du HÖRST zu. Nicht wie andere Babys. Du... verstehst.«

Alter Fuchs. Er hatte recht. Ich verstand — nicht die Worte (noch nicht), aber die Intentionen. Und er sah es.

Opa Gregor würde mir noch viele Geschichten erzählen. Und jede einzelne würde sich als wahr herausstellen.`,

    choices: [{ text: "→ Das erste Wort", next: "a1_erstes_wort" }],
    affinityEffect_on_arrival: { gregor: 10 },
  },

  a1_erstes_wort: {
    act: "AKT I",
    chapter: "Kapitel 2 — Familie.Load()",
    title: "Das erste Wort",
    scene: "Küche der Familie Ashford — Alter: 6 Monate",
    bg: "cottage",
    music: "theme_family",
    text: `Sechs Monate intensives Zuhören. Sechs Monate, in denen ich jede Konversation analysierte wie ein Linguist auf Speed. Die Sprache — Common — war logisch aufgebaut, fast wie eine konstruierte Sprache. Natürlich war sie das: Das System hatte sie vor 3.000 Jahren als universelle Sprache implementiert.

Ich konnte sie jetzt verstehen. Nicht alles, aber genug. Und mein Mund — dieser winzige, unkontrollierbare Mund — war endlich koordiniert genug für...

Es war ein Dienstag. Elena kochte. Roland reparierte einen Zaun. Kaito lag in seiner Wiege und starrte an die Decke.

Dann sagte er:

»...Ma...ma.«

Elena ließ den Löffel fallen. Drehte sich um. Ihre Augen wurden so groß wie Untertassen.

»Roland. ROLAND! Er hat— Er hat gesprochen! Er hat 'Mama' gesagt!«

Roland kam hereingestürmt, den Hammer noch in der Hand, und starrte seinen Sohn an.

»...Pa...pa.«`,

    text2: `Rolands Ausdruck war... unbezahlbar. Dieser massive, vernarbte ehemalige Ritter — seine Unterlippe ZITTERTE.

Elena, weinend vor Freude: »Sechs Monate! Das ist so früh! Normalerweise dauert es ein Jahr!«

Ja, ich wusste, dass es zu früh war. Ein normales Baby sprach nicht mit sechs Monaten. Aber was sollte ich tun — noch sechs Monate WARTEN? Aus Höflichkeit? Ich hatte Fragen. Millionen von Fragen. Und ich brauchte diesen verdammten Mund, um sie zu stellen.

Natürlich hielt ich mich zurück. Ich sagte »Mama«, »Papa«, »mehr« (beim Essen) und »nein« (bei allem anderen). Grundvokabular eines Genies, das sich dümmer stellte als es war.

Was... im Grunde auch mein altes Leben beschrieb, wenn ich ehrlich bin.

Jetzt: Wie verhältst du dich in den nächsten Monaten?`,

    choices: [
      {
        text: "A) VORSICHTIG: Du spielst das normale Baby. Zeigst keine ungewöhnliche Intelligenz.",
        desc: "+Verborgenheit. Sicherer Pfad. Die Ashfords bemerken nichts Ungewöhnliches.",
        next: "a1_wanderhaendler",
        flagEffect: { kindheitsVerhalten: "vorsichtig" },
        alignEffect: { verborgenheit: 3 },
      },
      {
        text: "B) NEUGIERIG: Du zeigst subtile Zeichen — greifst nach Büchern statt Spielzeug.",
        desc: "Elena bemerkt es, erzählt Gregor. +Gregor-Affinität. Gregor beobachtet dich genauer.",
        next: "a1_wanderhaendler",
        flagEffect: { kindheitsVerhalten: "neugierig" },
        affinityEffect: { gregor: 15, elena: 5 },
        alignEffect: { ordnung: 1 },
      },
      {
        text: "C) OFFEN: Du zeigst deutlich übermenschliche Intelligenz. Sprichst zu früh, zu klar.",
        desc: "RISKANT. Alle bemerken es. Gerda erzählt Gerüchte weiter. -Verborgenheit massiv.",
        next: "a1_wanderhaendler",
        flagEffect: { kindheitsVerhalten: "offen" },
        alignEffect: { verborgenheit: -4, licht: 1 },
        affinityEffect: { elena: -5, roland: -5 },
      },
    ]
  },

  a1_wanderhaendler: {
    act: "AKT I",
    chapter: "Kapitel 2 — Familie.Load()",
    title: "Der Wanderhändler",
    scene: "Haus der Familie Ashford — Alter: 8 Monate",
    bg: "cottage",
    music: "theme_mystery",

    // Konditional-Text je nach kindheitsVerhalten
    textConditional: {
      vorsichtig: "Ein ruhiger Nachmittag. Ich lag auf meiner Decke, spielte das brave Baby, und wartete auf meinen Mittagsschlaf.",
      neugierig: "Gregor hatte mir gerade ein altes Buch gebracht — zu alt für ein Baby, sagte Elena, aber Gregor lächelte nur und sagte: »Lass ihn. Er weiß, was er will.« Ich war dabei, es mit meinen winzigen Händen aufzuschlagen, als es anklopfte.",
      offen: "Elena war nervös geworden nach meinen »zu klugen« Momenten. Sie schirmte mich stärker ab. Aber Besucher kamen trotzdem.",
    },

    text: `Ein regnerischer Nachmittag. Es klopfte an der Tür.

»Herein!«

Die Tür öffnete sich, und ein Mann trat ein, der nach Regen und Tee roch. Mittlere Größe, staubiger Reisemantel, freundliches Lächeln unter einem zerbeulten Hut.

»Guten Tag, gute Frau! Aldwin, Wanderhändler, zu Ihren Diensten. Ich habe Gewürze aus Kreuzweg, Stoffe aus Aetheria, und — ah! — einen besonders feinen Tee aus den Sylvanthos-Wäldern. Darf ich eintreten?«

Elena, lächelnd: »Kommen Sie rein, bevor Sie ertrinken. Kann ich Ihnen einen Tee anbieten? ...Ironischerweise.«

Der Wanderhändler war charmant, freundlich und harmlos.

Drei Eigenschaften, die bei mir SOFORT Alarmglocken auslösten.`,

    systemBox: {
      title: "VOID-TERMINAL — WARNUNG",
      lines: [
        "> Entität in Reichweite erkannt.",
        "> System-Status dieser Entität: MANIPULIERT",
        ">",
        "> Angezeigte Werte: Level 22, Klasse: Händler",
        "> Geschätzte ECHTE Werte: [KANN NICHT BERECHNET WERDEN]",
        "> Diskrepanz: MASSIV",
        ">",
        "> Diese Entität verbirgt ihre wahre Natur",
        "> vor dem System.",
        ">",
        "> Empfehlung: Beobachten. Nicht konfrontieren.",
        "> Der Träger ist ein Säugling.",
      ]
    },

    text2: `Der »Wanderhändler« war kein Wanderhändler. Sein angezeigtes Level 22 war eine MASKE — eine Art Status-Illusion, die ich dank meiner Void-Perspektive durchschauen konnte.

Ich konnte nicht sehen, WAS er wirklich war. Dafür fehlten mir die Fähigkeiten. Aber ich wusste: Er war MEHR.

Aldwin kaufte fast nichts und verkaufte fast nichts — ein Päckchen Tee, das er Elena fast schenkte. Aber als er ging, blieb er an der Wiege stehen und schaute nach unten.

»Ah...«

Seine braunen — nein, für einen Augenblick VIOLETTEN — Augen trafen Kaitos Blick.

Und in diesem Moment wusste ich: Er sah MICH. Nicht das Baby. MICH. Den Erwachsenen hinter den Babyaugen.

»Da bist du ja«, flüsterte er, so leise, dass nur ich es hören konnte.

Dann lächelte er, setzte seinen Hut auf und verschwand im Regen.

Mein Herz — mein kleines, neues, hastig klopfendes Herz — raste.

Wer zum Teufel war dieser Mann?`,

    choices: [{ text: "→ Kapitel 3: Code.Read — Erste Anwendung", next: "a3_code_read" }],
    affinityEffect: { aldwin: 5 },
  },

  // ════ KAPITEL 3: SYSTEM.SCAN() ════════════════════════════════════════════

  a3_code_read: {
    act: "AKT I",
    chapter: "Kapitel 3 — System.Scan()",
    title: "Code.Read — Erste Anwendung",
    scene: "Garten des Hauses Ashford — Alter: 14 Monate",
    bg: "village",
    music: "theme_void_terminal",
    text: `Vierzehn Monate. Ich konnte laufen — wackelig, unelegant, aber LAUFEN. Ich konnte sprechen — eingeschränkt, aber genug für Grundbedürfnisse.

Und ich konnte endlich mein erstes Void-Werkzeug wirklich benutzen.

Ein sonniger Tag. Kaito saß im Garten, umgeben von Gänseblümchen. Elena war im Haus. Roland auf dem Feld.

Er konzentrierte sich auf eine Blume.`,

    systemBox: {
      title: "VOID-TERMINAL — [Code.Read] AKTIV",
      lines: [
        "> Ziel: Organismus (Pflanze, Gänseblümchen)",
        ">",
        "> ERGEBNIS:",
        "> ╔══════════════════════════════════╗",
        "> ║ OBJEKT: Gänseblümchen           ║",
        "> ║ System-Klassifikation: Flora    ║",
        "> ║ Level: 0    HP: 3/3            ║",
        "> ║ Eigenschaften:                  ║",
        "> ║  - Photosynthese [LV 1]         ║",
        "> ║  - Wachstum [LV 1]              ║",
        "> ║  - Samenverteilung [LV 1]       ║",
        "> ║ System-Code: 0x4F2A_FLORA_BASIC ║",
        "> ║ origin: SYSTEM_GENERATED        ║",
        "> ╚══════════════════════════════════╝",
      ]
    },

    text2: `Oh mein Gott.

Es war CODE. Echter, lesbarer, VERSTÄNDLICHER Code. Die Sprache war nicht exakt wie etwas, das ich kannte — kein JavaScript, kein Python, kein C++ — aber die STRUKTUR war vertraut. Variablen, Werte, Eigenschaften, Referenzen.

Das System war... ein Programm. Ein verdammtes PROGRAMM. Und ich konnte den Quellcode lesen.

Zeile für Zeile.

Meine Hände — meine kleinen, nutzlosen Babyhände — zitterten. Nicht vor Kälte. Vor AUFREGUNG.

Ich war ein Programmierer in einer programmierten Welt.

Das war nicht der schlechteste Isekai-Start. Das war der BESTE.

In den folgenden Wochen übte Kaito [Code.Read] an allem. Steine, Tiere, Gebäude, Gegenstände.

Und dann, an einem Abend, als Roland ihn auf dem Arm hielt — wagte er es.`,

    choices: [{ text: "→ Familien-Scan", next: "a3_familie_scan" }],
    skillUnlock: ["codeRead"],
    wissenEffect: ["systemIstProgramm"],
  },

  a3_familie_scan: {
    act: "AKT I",
    chapter: "Kapitel 3 — System.Scan()",
    title: "Die Familie im Code",
    scene: "Haus der Familie Ashford — Alter: 14–16 Monate",
    bg: "cottage",
    music: "theme_void_terminal",
    text: `Ich richtete [Code.Read] auf meinen Vater.`,

    systemBox: {
      title: "VOID-TERMINAL — SCAN: ROLAND ASHFORD",
      lines: [
        "> NAME: Roland Ashford",
        "> [Systemnotiz: Alias. Echter Name in versiegelter Datei]",
        ">",
        "> Rasse: Mensch  |  Alter: 39",
        "> Level: 34  |  Klasse: Krieger (INAKTIV)",
        "> [Vorherige Klasse: Ritter, Rang B]",
        "> [Level-Verlust: -18 (Systemfluch)]",
        ">",
        "> STATUS-EFFEKTE:",
        "> ⚠ [Systemfluch: Gebrochener Krieger]",
        ">   → STR -30%, AGI -50%, Level-Cap: 40",
        ">   → Quelle: SYSTEM-ADMINISTRATOR",
        ">   → Autorisiert durch: [KLASSIFIZIERT]",
        ">   → Fluch-Typ: DAUERHAFT",
        ">",
        "> Scan-Tiefe erschöpft.",
        "> Weitere Daten: GESPERRT",
      ]
    },

    text2: `Mein Vater war VERFLUCHT.

Nicht von einem Monster. Nicht von schwarzer Magie. Vom SYSTEM SELBST. Ein »Systemfluch« — autorisiert von einem »System-Administrator«. Das bedeutete: Ein ARCHITEKT hatte Roland persönlich bestraft.

Sein Level war von 52 auf 34 gesenkt worden. Sein Körper war permanent geschwächt. Sein rechtes Bein — der Grund, warum er hinkte — war nicht durch einen Kampf verletzt. Es war eine SYSTEM-SANKTION.

Was hatte mein Vater getan, um die Aufmerksamkeit eines Gottes zu verdienen?

Und die Notiz — »Alias, echter Name in versiegelter Datei« — mein Vater lebte unter falschem Namen.

Tage später. Elena stillte ihn. Kaito nutzte die Gelegenheit.`,

    systemBox2: {
      title: "VOID-TERMINAL — SCAN: ELENA ASHFORD",
      lines: [
        "> NAME: Elena Ashford (geb. Sylvaine)",
        ">",
        "> Rasse: Mensch",
        "> [Systemnotiz: RASSENDATEN ANOMALIE]",
        "> [Fragment: 0x7E_ELF_12.5%]",
        "> [Status: UNERKANNT — Anteil zu gering]",
        ">",
        "> Alter: 36  |  Level: 14",
        "> Klasse: Heilerin (Rang E)",
        ">",
        "> VERSTECKTE FÄHIGKEITEN:",
        "> ⚠ [Wilde Magie — Stimme] (LATENT)",
        ">   → Nicht im System registriert",
        ">   → Wird durch elfisches Erbe aktiviert",
        ">   → Trägerin ist sich nicht bewusst",
        ">   → Potenzial: UNBEKANNT",
      ]
    },

    text3: `Elfenblut. Meine Mutter hatte Elfenblut. 12,5 Prozent — zu wenig für das System, um sie als Halbelfe zu registrieren, aber genug, um ihr Zugang zu etwas zu geben, das das System nicht kontrollieren konnte.

Wilde Magie. In ihren Liedern.

Und sie wusste es nicht.

Ich schaute zu meiner Mutter hoch. Sie lächelte mich an, strich mir über den Kopf, summte eine Melodie.

Diese Frau hat keine Ahnung, wie besonders sie ist.

In einer gerechten Welt wäre sie eine der mächtigsten Magierinnen gewesen. Aber das System — das System, das nur seine eigene Magie anerkannte — hatte sie als Level-14-Heilerin abgestempelt.

»Mama«, sagte ich.

Sie lächelte breiter. »Ja, mein Schatz?«

Ich wollte sagen: »Du bist mehr als du weißt.« Aber mein Mund formte: »...hübsch.«

Nah genug.`,

    choices: [{ text: "→ Kapitel 4: Miras Geburt", next: "a4_mira_geburt" }],
    wissenEffect: ["rolandFluch", "rolandEchterName", "elenaElfenblut"],
  },

  // ════ KAPITEL 4: ERROR.LOG() ══════════════════════════════════════════════

  a4_mira_geburt: {
    act: "AKT I",
    chapter: "Kapitel 4 — Error.Log()",
    title: "Geschwister",
    scene: "Millheim — Alter: 2 Jahre 9 Monate",
    bg: "cottage",
    music: "theme_family",
    text: `Mira Ashford wurde an einem Sturmabend geboren. Laut, fordernd, und mit einer Lunge, die für jemanden doppelt ihrer Größe dimensioniert war.

Ich mochte sie sofort.

Kaito stand neben Rolands Bein, als Gerda das Neugeborene brachte. Anders als bei seiner eigenen Geburt erschien bei Mira sofort ein Status-Fenster — für alle sichtbar, blau und klar.`,

    systemBox: {
      title: "GENESIS-SYSTEM — NEUE SEELE REGISTRIERT",
      lines: [
        "> Name: _____ Ashford",
        "> Rasse: Mensch",
        "> Level: 1",
        "> HP: 15/15",
        "> Status: GESUND",
        "> Klasse: (wird bei LV 10 zugewiesen)",
      ]
    },

    text2: `Bei Mira funktionierte alles. Das System erkannte sie, registrierte sie, gab ihr ein Level, einen HP-Balken, einen Platz in der großen kosmischen Datenbank.

Bei mir hatte es versagt. Null. Fehler. Existiert nicht.

Ich log nicht: Es stach. Ein kleines bisschen. Nicht weil ich neidisch war — was sollte ich mit einem Level-1-Status anfangen? — sondern weil es mich daran erinnerte, dass ich in dieser Welt ein Fremdkörper war. Ein Fehler im Code. Eine Anomalie, die das System lieber vergessen würde.

Aber dann schaute Mira mich an. Ihre winzigen, noch unfokussierten Augen trafen meine.

Und sie hörte auf zu weinen.

Einfach so. Mitten im Schrei. Stille.

Elena, erstaunt: »Das... Babys tun das normalerweise nicht.«

Roland, mit dem Hauch eines Lächelns: »Vielleicht mag sie ihren Bruder.«

Oder vielleicht — nur vielleicht — spürte sie etwas. Dasselbe »Bauchkribbeln«, das sie später beschreiben würde. Die Fähigkeit, System-Status zu FÜHLEN. Bei mir fühlte sie: Nichts. Leere. Stille. Und für ein überreiztes Neugeborenes... war Stille genau das, was sie brauchte.

Wie reagierst du auf Mira?`,

    choices: [
      {
        text: "A) Du streckst deine Hand aus und berührst ihre Wange. Sanft. Beschützend.",
        desc: "+Mira-Affinität MAX. Starker Geschwisterbond für die gesamte Story.",
        next: "a4_beobachter",
        flagEffect: { miraErstbegegnung: "beruehrung" },
        affinityEffect: { mira: 30, elena: 10, roland: 10 },
        alignEffect: { licht: 2 },
      },
      {
        text: "B) Du beobachtest sie analytisch. [Code.Read] auf ein Neugeborenes.",
        desc: "+Wissen über Miras Anomalie. Weniger emotionale Verbindung jetzt, aber nützliche Infos.",
        next: "a4_mira_scan",
        flagEffect: { miraErstbegegnung: "scan" },
        affinityEffect: { mira: 10 },
        alignEffect: { ordnung: 2 },
        wissenEffect: ["miraAnomalie"],
      },
      {
        text: "C) »Schwester.« — Dein erstes bewusstes Bekenntnis zu dieser Familie.",
        desc: "+Roland-Affinität +15, +Elena-Affinität +15. Roland sagt später zu Elena: »Er wusste es, bevor wir es ihm gesagt haben.«",
        next: "a4_beobachter",
        flagEffect: { miraErstbegegnung: "schwester" },
        affinityEffect: { mira: 20, roland: 15, elena: 15 },
        alignEffect: { licht: 1 },
      },
    ]
  },

  // Branch: Mira-Scan
  a4_mira_scan: {
    act: "AKT I",
    chapter: "Kapitel 4 — Error.Log()",
    title: "Miras Code",
    scene: "Geburtszimmer, Millheim",
    bg: "cottage",
    music: "theme_void_terminal",

    systemBox: {
      title: "VOID-TERMINAL — SCAN: MIRA ASHFORD (Neugeboren)",
      lines: [
        "> NAME: Mira Ashford",
        "> Rasse: Mensch  |  Level: 1",
        ">",
        "> [ANOMALIE ERKANNT]",
        "> Versteckte Eigenschaft:",
        "> [System-Empathie] — LATENT",
        ">   → Kann System-Status anderer FÜHLEN",
        ">   → Registriert Anomalien intuitiv",
        ">   → Besondere Reaktion auf [NULL]-Entitäten:",
        ">     Beruhigung statt Angst",
        ">",
        "> Systemkommentar: »Ungewöhnlich. Beobachten.«",
        "> Priorität: NIEDRIG (Säugling)",
      ]
    },

    text: `Interessant. Mira hatte eine Fähigkeit, die das System als »latent« eingestuft hatte — System-Empathie. Die Fähigkeit, Status anderer zu FÜHLEN.

Und bei mir — bei der Null — spürte sie keine Bedrohung. Nur Stille.

Das erklärte, warum sie aufgehört hatte zu weinen.

Ich streckte meine Hand aus und berührte ihre Wange. Sanft.

Sie schloss die Augen und schlief ein.`,

    choices: [{ text: "→ Die Beobachter", next: "a4_beobachter" }],
    affinityEffect: { mira: 15 },
  },

  a4_beobachter: {
    act: "AKT I",
    chapter: "Kapitel 4 — Error.Log()",
    title: "Die Beobachter",
    scene: "Millheim — Alter: 3 Jahre",
    bg: "village",
    music: "theme_mystery",
    text: `Drei Jahre. Kaito konnte laufen, rennen (stolpern), sprechen (mit dem Vokabular eines etwas fortgeschrittenen Dreijährigen — er hielt sich zurück), und seine motorischen Fähigkeiten verbesserten sich täglich.

Aber etwas beunruhigte ihn.

Ich wurde beobachtet.

Nicht von meinen Eltern. Von AUSSEN. Es begann subtil. Ein Reisender, der durch das Dorf kam und auffällig lange in unsere Richtung schaute. Ein Vogel — immer derselbe Vogel, ein Rabe mit einem unnatürlich fixierten Blick — der auf dem Dach unseres Hauses saß. Tag für Tag.

Und einmal, nachts, als ich nicht schlafen konnte: Ein Leuchten am Waldrand. Kein Feuer. Ein System-Leuchten. Als würde jemand einen hochleveligen Scan durchführen.`,

    systemBox: {
      title: "VOID-TERMINAL — WARNUNG",
      lines: [
        "> EXTERNE SCANS ERKANNT.",
        "> Häufigkeit: Zunehmend (3x in 30 Tagen)",
        "> Quelle: Unbekannt. Entfernung: ~500m",
        "> Scan-Typ: System-Überwachung (Rang A+)",
        ">",
        "> Status des Trägers bei Scans: NICHT ERKANNT",
        "> (Das System sieht den Träger nicht →",
        ">  Scans finden nichts Ungewöhnliches)",
        ">",
        "> ABER: Die Häufigkeit deutet darauf hin,",
        "> dass JEMAND weiß, dass hier etwas",
        "> Ungewöhnliches ist — auch wenn er",
        "> es nicht finden kann.",
        ">",
        "> Empfehlung: Vorsicht. Verborgenheit maximieren.",
      ]
    },

    text2: `Jemand suchte nach mir. Oder nach etwas in Millheim. Die Scans waren zu hochlevelig für Banditen oder gewöhnliche Soldaten — das war militärisch oder kirchlich.

Ich konnte nichts tun. Ich war DREI.

Aber ich konnte planen. Und beobachten. Und lernen.

Am selben Abend. Gregor kam zum Abendessen. Diesmal hatte er keine lustigen Drachengeschichten. Sein Blick war ernst.

»Soldaten an der Oststraße. Kaiserliche. Kein normaler Patrouillentrupp — Elite-Einheit. Fragen nach 'Anomalien'.«

Roland, sofort angespannt: »Wie viele?«

»Sechs. Angeführt von einem Offizier mit einem Wappen, das ich nicht erkenne. Aber die Art, wie sie sich bewegen... das sind keine Grenzwächter, Roland. Das sind JÄGER.«

Roland, Stimme wie Stein: »Mich?«

»Vielleicht. Vielleicht etwas anderes. Aber die Fragen, die sie stellen — 'ungewöhnliche Geburten', 'Kinder ohne Status', 'System-Anomalien'...«

Stille. Schwer. Bedrohlich.

Elena, bisher still, jetzt mit ruhiger Entschlossenheit: »Niemand berührt meine Kinder.«

Roland: »Niemand wird das. Ich schwöre es.«`,

    text3: `Ich lag im Dunkeln und hörte meinen Eltern zu, wie sie über Bedrohungen sprachen, die ich nicht verstand — und gleichzeitig GENAU verstand.

Das System hatte mich bei der Geburt nicht registrieren können. Irgendwo, in irgendeiner Datenbank, hatte das einen Fehler erzeugt. Und jetzt suchte jemand nach diesem Fehler.

Drei Jahre alt. Und die Welt kam bereits, um mich zu finden.

Ich schloss die Augen und rief mein Terminal auf.`,

    systemBox2: {
      title: "VOID-TERMINAL — UPDATE",
      lines: [
        "> ...",
        "> Neuer Befehl verfügbar:",
        "> (Freischaltung durch mentale Reife",
        ">  + akute Bedrohungserkennung)",
        ">",
        "> [Code.Analyze] — FREIGESCHALTET",
        ">   → Kann System-Strukturen analysieren",
        ">   → Ihre Funktionsweise verstehen",
        ">   → Voraussetzung für zukünftige Befehle",
        ">",
        "> Gratulation, Anomalie.",
        "> Du wächst schneller als erwartet.",
        "> Das ist gut.",
        "> Du wirst es brauchen.",
      ]
    },

    text4: `Code.Analyze. Endlich. Jetzt konnte ich nicht nur LESEN, sondern VERSTEHEN.

Ich hatte drei Jahre Zeit gehabt, ein Baby zu sein. Drei Jahre Frieden, Wärme, Familie.

Ich spürte, dass der Frieden bald enden würde.

Und ich schwor mir — in meiner Wiege, mit meinen kleinen Fäusten geballt — dass ich bereit sein würde.

Für sie. Für Mama. Für Papa. Für Mira.

Für die Familie, die ich im ersten Leben nie hatte.`,

    choices: [{ text: "→ AKT II: Kompilierung", next: "a2k1_morgenroutine" }],
    skillUnlock: ["codeAnalyze"],
    affinityEffect: { roland: 5, elena: 5, gregor: 5 },
  },
};

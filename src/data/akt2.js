// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT II: KOMPILIERUNG
// Kapitel 5–11: Kind-Phase, Alter 3–10
// Vollständig texttreu nach PDF, echte Verzweigungen
// ═══════════════════════════════════════════════════════

export const AKT_II = {

  // ════ KAPITEL 5: COMPILE.CHILDHOOD() ══════════════════════════════════════

  a2k1_morgenroutine: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Morgenroutine in Millheim",
    scene: "Millheim — Alter: 3–5 Jahre",
    bg: "cottage",
    music: "theme_family",
    text: `Es gibt Tage, an denen vergesse ich, dass ich einmal jemand anderes war.

Nicht oft. Nicht lange. Aber manchmal — wenn die Morgensonne durch unser Küchenfenster fällt und der Duft von Elenas Brot das Haus füllt und Mira an meinem Ärmel zieht und »Buda! Buda!« ruft, weil sie meinen Namen nicht aussprechen kann — manchmal fühle ich mich einfach wie ein Kind.

Drei Jahre alt. Vier. Fünf. Die Zeit vergeht anders, wenn man sie zum zweiten Mal lebt. Langsamer. Dichter. Jeder Tag hat Gewicht.

Ich bin Kaito Ashford. In dieser Welt. In diesem Leben. Und Millheim — dieses kleine, unbedeutende Dorf am Rand des Kaiserreichs — ist mein Zuhause.`,

    text2: `05:30 — Roland steht auf. Kaito hört ihn. Immer. Rolands Schritte sind leise — zu leise für einen Bauern, perfekt für einen ehemaligen Ritter. Aber sein rechtes Bein schleift leicht. Der Systemfluch. Jeden Morgen erinnert dieses Schleifen Kaito daran, dass sein Vater verflucht ist.

06:00 — Elena beginnt zu kochen. Der Geruch von warmem Brot und Kräutertee. Elena summt. Manchmal die System-Sprache, manchmal die alten Lieder. Kaitos Void-Terminal registriert den Unterschied.

06:30 — Mira wacht auf. Laut. Immer laut.

»BUDA! BUDA AUFSTEHEN!«

Sie kletterte auf mein Bett — ein kleines Holzgestell neben Elenas Bett — und landete auf meinem Bauch. Dreieinhalb Kilo konzentrierter Enthusiasmus, direkt in die Magengrube.

»Ich bin wach, Mira. Ich bin DEFINITIV wach.«

»BUDA SPIELEN!«

»Es ist sechs Uhr morgens.«

»SPIELEN!«

Mira verstand keine Uhrzeiten. Mira verstand SPIELEN, ESSEN und LAUT SEIN.`,

    text3: `07:00 — Frühstück. Die Familie saß zusammen. Warmes Brot, Ziegenkäse, manchmal ein Ei. Roland aß schweigend, aber sein Blick wanderte immer wieder zu seinen Kindern — prüfend, beschützend.

»Du bist wieder vor Mira aufgewacht.«

»Sie ist laut.«

Roland, ein halbes Lächeln: »Du hörst gut. Das ist gut. Ein Mann, der gut hört, lebt länger.«

Elena, warnender Blick: »Roland. Er ist DREI.«

»Und Mira ist eineinhalb und hat bereits einen Jäger-Instinkt. Sie hat gestern die Katze der Nachbarn gejagt. ERFOLGREICH.«

»...Die Katze ist traumatisiert.«

Meine Familie war... wunderbar. Nicht perfekt — Roland trug Geheimnisse wie Rüstung, Elena wich bestimmten Fragen aus, und Mira war ein kleiner, energiegeladener Naturkatastrophen-Simulator. Aber sie waren ECHT. Warm. Da.

In meinem alten Leben hatte ich das nie gehabt. Meine Mutter starb, als ich 12 war. Meinen Vater kannte ich nicht. Ich wuchs bei einem Onkel auf, der mich tolerierte, aber nie liebte.

Hier wurde ich GELIEBT.

Das war gleichzeitig das schönste und das gefährlichste Gefühl der Welt. Denn wer liebt, hat etwas zu verlieren.`,

    choices: [{ text: "→ Finn — Die erste Freundschaft", next: "a2k1_finn" }]
  },

  a2k1_finn: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Finn — Die erste Freundschaft",
    scene: "Dorfbrunnen, Millheim — Alter: 4 Jahre",
    bg: "village",
    music: "theme_friendship",
    text: `Kaito begegnete Finn zum ersten Mal am Dorfbrunnen.

Er war rund. Das war mein erster Gedanke. Nicht unfreundlich rund, sondern auf die Art rund, wie Kinder rund sind, die von einer Mutter großgezogen werden, die glaubt, jedes Problem lasse sich mit einer zweiten Portion Eintopf lösen.

Rotblondes Haar, Sommersprossen, ein Lächeln so breit wie sein Gesicht. Er hielt einen Stock in der Hand und prügelte damit auf einen Heuballen ein.

»NIMM DAS, GOBLIN! UND DAS! ICH BIN FINN DER GROSSE!«

Finn der Große war vier Jahre alt und trug einen Topf als Helm.

»Was machst du?«

»ABENTEURER SEIN! Ich trainiere! Mein Papa war ein Soldat, und wenn ich groß bin, werde ich der STÄRKSTE KRIEGER DER WELT!«

Er hob den Topf an und schaute Kaito mit großen, aufrichtigen blauen Augen an.

»Willst du auch trainieren?«`,

    choices: [
      {
        text: "A) »Okay.« Du nimmst einen Stock und machst mit.",
        desc: "Sofortige Freundschaft. Ihr prügelt gemeinsam auf Heuballen ein. +Finn-Affinität +20.",
        next: "a2k1_finn_konvergenz",
        affinityEffect: { finn: 20 },
        flagEffect: { finnErstbegegnung: "mitmachen" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Finn strahlt. Er holpert, fällt, steht auf — und grinst dabei so breit, dass es wehtun muss.",
      },
      {
        text: "B) »Du hältst den Stock falsch.« Du korrigierst seine Haltung.",
        desc: "Finn ist verblüfft, dann begeistert. »Du bist COOL!« Bewunderungsdynamik statt Gleichberechtigung. +Finn-Affinität +15.",
        next: "a2k1_finn_konvergenz",
        affinityEffect: { finn: 15 },
        flagEffect: { finnErstbegegnung: "korrigieren" },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Finn hält inne. Schaut auf seinen Stock. »...Du hast recht.« Er korrigiert die Haltung. Und macht es sofort besser.",
      },
      {
        text: "C) »Goblins greifen nicht frontal an. Du musst die Flanke schützen.«",
        desc: "Zu erwachsen für ein Kind. -Verborgenheit. Finn erzählt es seinem Vater, der es Roland erzählt. +Finn-Affinität +10.",
        next: "a2k1_finn_konvergenz",
        affinityEffect: { finn: 10, roland: -5 },
        flagEffect: { finnErstbegegnung: "taktisch" },
        alignEffect: { verborgenheit: -2 },
        narrativeFeedback: "Finn runzelt die Stirn — dann leuchten seine Augen auf. »Das ist TAKTIK!« Roland, der zuhört, nickt kaum merklich.",
      },
    ]
  },

  a2k1_finn_konvergenz: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Bester Freund für immer",
    scene: "Dorfbrunnen, Millheim",
    conditionalFlag: "finnErstbegegnung",
    textConditional: { taktisch: `»Du hast mir erklärt wie Goblins kämpfen beim allerersten Mal. Ich dachte: sehr klug oder sehr komisch. Beides.«`, korrigieren: `Finn hielt seinen Stock exakt so wie ich es ihm gezeigt hatte. Perfekt. Weil jemand ihm gezeigt hatte, wie.`, default: `` },
    bg: "village",
    music: "theme_friendship",
    text: `Die beiden Jungen verbrachten den Nachmittag zusammen. Finn redete genug für drei Personen. Kaito hörte zu — eine Fähigkeit, die Finn mit Begeisterung belohnte.

»Du bist mein bester Freund. Okay? Ab jetzt. Für immer.«

»...Wir kennen uns seit zwei Stunden.«

»BESTER. FREUND. FÜR. IMMER.«

Finn Müller. Vier Jahre alt. Beschloss innerhalb von 120 Minuten eine lebenslange Loyalität.

In meiner alten Welt hätte ich das als naiv abgetan. Hier, in diesem neuen Leben, in dem jeder Tag ein Geschenk war...

»...Okay. Für immer.«

Finns Grinsen war so breit, dass ich befürchtete, sein Gesicht könnte sich teilen. Er schlug mir auf die Schulter — ich fiel fast um, der Junge war STARK — und rannte dann nach Hause, um seiner Mutter von seinem »neuen besten Freund für immer« zu erzählen.

Ich stand am Brunnen. Allein. Und lächelte.

Ein echtes Lächeln. Vielleicht das erste seit... seit ich sterben musste, um es zu lernen.`,

    choices: [{ text: "→ Sera — Die Außenseiterin", next: "a2k1_sera" }],
    affinityEffect: { finn: 5 },
  },

  a2k1_sera: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Sera — Die Außenseiterin",
    scene: "Fluss am Waldrand, Millheim — Alter: 4,5 Jahre",
    bg: "village",
    music: "theme_mystery",
    text: `Drei Monate nach Finns Freundschaftserklärung. Kaito und Finn spielten am Waldrand, als sie SIE zum ersten Mal sahen.

Das Mädchen saß auf einem Felsen am Fluss, die Knie angezogen, und warf Steine ins Wasser. Pechschwarzes Haar mit einer einzelnen roten Strähne, die sich hartnäckig von der Masse abhob. Bernsteinfarbene Augen, die das Wasser beobachteten wie eine Katze, die einen Fisch studiert.

Sie war allein. Sie sah aus, als wäre sie IMMER allein.

Finn, flüsternd: »Das ist Sera. Die Seltsame.«

»Seltsam?«

»Sie hat keine Mama und keinen Papa. Die Dorfälteste kümmert sich um sie. Und manchmal, wenn sie wütend wird, werden Sachen HEISS. Letztes Jahr hat Leon sie geärgert und ihre Jacke hat GEBRANNT. Alle sagen, Sera ist verflucht.«

Mein Void-Terminal kribbelte. Subtil, aber spürbar.

Ich schaute zu Sera hinüber. Sie warf einen weiteren Stein. Er traf das Wasser — und dort, wo er eintauchte, stieg für einen kurzen Moment Dampf auf.

Ein normaler Stein hätte das nicht getan.

Ich aktivierte [Code.Read].`,

    systemBox: {
      title: "VOID-TERMINAL — SCAN: SERA BLACKWOOD",
      lines: [
        "> NAME: Sera Blackwood (KEIN GEBURTSNAME)",
        ">",
        "> Rasse: Mensch",
        "> [SYSTEMWARNUNG: RASSENINTEGRITÄT KOMPROMITTIERT]",
        "> [Versteckter Code: 0xDE_DEMON_50%]",
        "> [Status: UNTERDRÜCKT]",
        ">",
        "> Alter: 5  |  Level: 1  |  Klasse: —",
        ">",
        "> VERSTECKTE ATTRIBUTE:",
        "> ⚠ [Dämonisches Erbe: UNTERDRÜCKT]",
        "> ⚠ [Feueraffinität: LATENT — bricht bei",
        ">     emotionalem Stress durch]",
        "> ⚠ [Wahre Klassifikation: HALBDÄMONIN]",
        ">   50% Mensch, 50% Höherer Dämon",
        ">",
        "> Eltern: [DATEN ENTFERNT — STUFE: MAXIMAL]",
        ">",
        "> Systemkommentar: »Mischling. Beobachten.",
        "> Falls Unterdrückung versagt:",
        "> ELIMINIERUNGSPROTOKOLL einleiten.«",
      ]
    },

    text2: `Mein Atem stockte.

Halbdämonin. Dieses Mädchen — fünf Jahre alt, allein auf einem Felsen — war eine HALBDÄMONIN. Das System unterdrückte ihren dämonischen Anteil aktiv und hatte ein ELIMINIERUNGSPROTOKOLL für den Fall bereit, dass die Unterdrückung versagte.

Eliminierungsprotokoll. Für ein Kind.

Der Kommentar des Systems — kalt, technisch, gleichgültig: »Mischling. Beobachten.« Als wäre sie ein Fehler im Code, den man bei Bedarf löschen konnte.

Ich kannte dieses Gefühl. Ich WAR dieses Gefühl. Eine Anomalie. Ein Fehler. Etwas, das das System am liebsten ignorieren oder eliminieren würde.

In diesem Moment entschied ich.

»Ich gehe zu ihr rüber.«

»Was?! Aber sie ist— alle sagen—«

»Alle sagen viel. Komm mit oder warte hier.«`,

    choices: [
      {
        text: "A) Du gehst allein zu ihr. Ruhig, direkt.",
        desc: "Intimerer erster Kontakt. +Sera-Affinität +10.",
        next: "a2k1_sera_begegnung",
        affinityEffect: { sera: 10 },
        flagEffect: { seraErstbegegnung: "allein" },
        narrativeFeedback: "Sera schaut ihn an, als er sich nähert. Keine Begrüßung. Aber sie geht nicht weg. Das ist — bei Sera — das Äquivalent zu einer Einladung.",
      },
      {
        text: "B) Du überzeugst Finn mitzukommen.",
        desc: "Sera ist überrascht, dass ZWEI Kinder kommen. Dreiecksfreundschaft beginnt. +Sera +5, +Finn +5.",
        next: "a2k1_sera_begegnung",
        affinityEffect: { sera: 5, finn: 5 },
        flagEffect: { seraErstbegegnung: "mit_finn" },
        narrativeFeedback: "Sera sieht Finn kommen und verschränkt die Arme. Aber als Finn »Hallo!« ruft wie ein Kanonenschuss, zuckt ihr Mundwinkel — fast unmerklich — nach oben.",
      },
      {
        text: "C) Du bringst ihr ein Stück von Elenas Brot.",
        desc: "Sera schaut dich an, als hättest du den Verstand verloren. Nimmt das Brot. Isst es. Am nächsten Tag sitzt sie wieder dort — und wartet. +Sera-Affinität +15.",
        next: "a2k1_sera_begegnung",
        affinityEffect: { sera: 15 },
        flagEffect: { seraErstbegegnung: "brot" },
        narrativeFeedback: "Sera schaut das Brot an. Schaut Kaito an. Nimmt es. Sagt nichts. Aber sie isst es langsam — als würde sie Zeit kaufen, um ihre Reaktion zu verbergen.",
      },
    ]
  },

  a2k1_sera_begegnung: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Die erste Begegnung",
    scene: "Felsen am Fluss, Millheim",
    conditionalFlag: "seraErstbegegnung",
    textConditional: { brot: `Ich hatte ihr Brot gebracht, ohne Erklärung. Sie aß langsam — als müsste sie sich überzeugen dass es real war.`, allein: `Kein Finn. Keine Ablenkung. Sie sah mich kommen und floh nicht. Bei Sera war das eine Einladung.`, default: `` },
    bg: "village",
    music: "theme_friendship",
    text: `Kaito näherte sich dem Felsen. Sera sah ihn kommen. Ihre Augen verengten sich — misstrauisch, bereit zur Flucht, bereit zum Kampf. Ein fünfjähriges Raubtier.

»Geh weg.«

»Warum?«

»...Weil alle weggehen.«

»Ich bin nicht alle.«

»Du wirst es werden. Sobald du merkst, dass ich KOMISCH bin. Dass Sachen brennen, wenn ich wütend bin. Dass ich—«

»Du hast eine Feueraffinität. Eine starke. Deshalb brennen Sachen.«

Stille. Sera starrte ihn an.

»...Woher weißt du das?«

»Ich sehe Sachen, die andere nicht sehen.«

»...Was für Sachen?«

»Dass du nicht komisch bist. Du bist nur... anders. So wie ich.«

Lange Stille. Sera schaute ihn an. Prüfend. Intensiv. Dann:

»...Du bist auch komisch.«

»Ja.«

»...Gut.«

Sie rückte auf dem Felsen zur Seite. Genau genug Platz für einen schmalen Vierjährigen.

Das war keine Einladung. Das war eine Erlaubnis.

Ich setzte mich neben sie. Wir warfen Steine ins Wasser. Wir sagten nichts mehr.

Es war genug.`,

    choices: [{ text: "→ Die Drei vom Fluss", next: "a2k1_gruppe" }],
    affinityEffect: { sera: 10 },
  },

  a2k1_gruppe: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Die Drei vom Fluss",
    scene: "Fluss und Wald, Millheim — Alter: 5 Jahre",
    bg: "village",
    music: "theme_friendship",
    text: `In den folgenden Monaten formte sich etwas, das ich in meinem alten Leben nie gehabt hatte: eine Gruppe.

Finn, Sera und ich. Die drei Außenseiter von Millheim. Der Laute, die Wilde und der Stille.

Finn akzeptierte Sera, weil ICH sie akzeptiert hatte. So funktionierte Finns Logik: Wenn sein bester Freund jemanden mochte, mochte Finn diese Person auch. Einfach. Unkompliziert. Wunderbar.

Sera brauchte länger. Wochen, in denen sie Finn misstrauisch anstarrte, als würde er jeden Moment eine Falle zuschnappen lassen. Aber Finn war... Finn. Er bot ihr sein Essen an — für Finn das ultimative Vertrauenszeichen — erzählte ihr seine absurden Helden-Fantasien, und fiel einmal in den Fluss, als er versuchte, einen »Riesenbarsch« mit bloßen Händen zu fangen.

Als Sera zum ersten Mal LACHTE — ein echtes, überraschtes Lachen, das sie selbst erschreckte — wusste ich: Wir waren eine Gruppe.

»SEHT IHR?« Finn, triefend nass, hielt stolz einen kleinen Fisch hoch. »ICH HABE IHN! DEN RIESENFISCH!«

Sera: »Das ist eine Sardine.«

»Ein RIESEN-Sardine!«

»Das Wort ist 'riesige'. Und das ist ein Stichling.«

Finn, beleidigt: »Ihr seid beide schreckliche Freunde.«

Sera, fast lächelnd: »Du bist nass.«

»ICH BIN EIN HELD, HELDEN SIND NASS!«

Ich saß am Ufer, die Füße im Wasser, und beobachtete meine Freunde. Finn, der strahlende Idiot. Sera, die mit jedem Tag ein kleines bisschen mehr auftaute.

In meinem alten Leben hätte ich an einem Freitagabend allein vor dem Computer gesessen und Code geschrieben. Hier saß ich an einem Fluss mit zwei Kindern, die mich aus unerklindlichen Gründen mochten.

Seltsam, wie das funktionierte. Man musste sterben und in einer anderen Welt wiedergeboren werden, um zu lernen, wie Freundschaft sich anfühlte.`,

    choices: [{ text: "→ Gregors letzte Geschichten", next: "a2k1_gregor_geschichten" }],
  },

  a2k1_gregor_geschichten: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Gregors Geschichten",
    scene: "Kaminfeuer, Millheim — Winter, Alter: 5 Jahre",
    bg: "cottage",
    music: "theme_gregor",
    text: `Opa Gregor kam jeden Abend. Seine Geschichten wurden... spezifischer.

»Wisst ihr, warum die Sterne nachts leuchten?«

Mira, drei Jahre, laut: »WEIL SIE GLITZELN!«

»Nah dran, Wirbelwind. Aber ich erzähle euch die WAHRE Geschichte.«

Er senkte die Stimme. Kaito bemerkte: Gregor schaute zu Roland und Elena, die in der Küche waren, außer Hörweite.

»Vor langer, langer Zeit — bevor es das System gab — waren die Sterne FREI. Sie leuchteten, wie sie wollten. Manche hell, manche schwach, manche in Farben, die heute niemand mehr sieht.«

»Dann kamen die Sieben. Sie sagten: 'Die Sterne brauchen Ordnung. Wir geben jedem Stern einen Platz, eine Helligkeit, eine Aufgabe.' Und sie gaben den Sternen REGELN.«

»Die meisten Sterne akzeptierten es. Aber EINER nicht. Der siebte Stern — der kleinste, der unscheinbarste — sagte: 'Ich leuchte so, wie ich will. Nicht so, wie ihr es mir vorschreibt.'«

»Die Sieben waren wütend. Sie versuchten, den kleinen Stern zu fangen. Aber wisst ihr was? Man kann einen Stern nicht fangen, wenn er nicht leuchtet. Und der siebte Stern... hörte einfach auf zu leuchten.«

»Er verschwand. Die Sieben suchten und suchten, aber sie fanden ihn nie. Manche sagen, er ist noch da — versteckt zwischen den anderen Sternen, unsichtbar, frei.«

Mira: »Wo ist er?«

Gregor schaute direkt Kaito in die Augen.

»Überall. Nirgendwo. Genau da, wo man ihn am wenigsten erwartet.«`,

    text2: `Opa Gregor erzählte keine Märchen. Er erzählte GESCHICHTE — verschlüsselt in Kindersprache.

Der siebte Stern. Die Siebte Architektin. Septima.

Er WUSSTE etwas. Nicht alles — aber genug, um es in Geschichten zu verstecken.

Und er erzählte sie MIR. Nicht Mira, obwohl sie auf seinem Schoß saß. Mir. Weil er wusste — oder ahnte — dass ICH es verstehen würde.`,

    choices: [
      {
        text: "A) Du fragst Gregor später allein: »Opa... der siebte Stern. Wer ist er wirklich?«",
        desc: "Gregor schweigt lange. Dann: »Du bist klüger als gut für dich ist, Junge.« Er gibt dir einen echten Hinweis — ein Alt-Aetherisches Wort: 'Septima'. +Gregor +15, +Wissen.",
        next: "a2k2_rolands_training",
        affinityEffect: { gregor: 15 },
        wissenEffect: ["septimaIdentitaet", "architektenExistenz"],
        flagEffect: { gregorGespraech: "direkt" },
        narrativeFeedback: "Gregor schaut lange aus dem Fenster. »Der siebte Stern... ja. Ich erinnere mich an diese Geschichte.« Er sagt nicht, woher.",
      },
      {
        text: "B) Du sagst nichts. Du merkst dir jede Geschichte.",
        desc: "Sicher. Die Geschichten sammeln sich in deinem Gedächtnis. In Akt III wirst du sie als Puzzleteile zusammensetzen. +Verborgenheit.",
        next: "a2k2_rolands_training",
        alignEffect: { verborgenheit: 2, ordnung: 1 },
        flagEffect: { gregorGespraech: "passiv" },
      },
      {
        text: "C) Du erzählst Gregor von deinem Void-Terminal. Alles. Die Wahrheit.",
        desc: "RISKANT. Gregor ist fassungslos. Dann Tränen: »Sie hat es getan. Sie hat WIRKLICH jemanden geschickt.« Er erzählt dir ALLES was er weiß. +Gregor MAX, +massives Wissen, ABER: -Verborgenheit signifikant.",
        next: "a2k2_rolands_training",
        affinityEffect: { gregor: 30 },
        wissenEffect: ["septimaIdentitaet", "architektenExistenz", "elenaElfenblut", "rolandEchterName"],
        alignEffect: { verborgenheit: -4, licht: 1 },
        flagEffect: { gregorGespraech: "voll", gregorWeissAlles: true },
        narrativeFeedback: "Gregor hört zu. Alles. Ohne Unterbrechung. Als Kaito fertig ist, nickt er langsam. »Ich wusste, dass du anders bist. Ich wusste nur nicht wie weit.«",
      },
    ]
  },

  // ════ KAPITEL 6: RUNTIME.TRAINING() ══════════════════════════════════════

  a2k2_rolands_training: {
    act: "AKT II",
    chapter: "Kapitel 6 — Runtime.Training()",
    title: "Rolands Schwert",
    scene: "Waldrand, Millheim — Alter: 5 Jahre, Frühling",
    bg: "village",
    music: "theme_training",
    text: `Roland nahm Kaito zum ersten Mal mit zum Training.

Nicht offiziell. Nicht mit einem Schwert. Roland gab ihm einen Stock — einen sorgfältig ausgewählten, gerade gewachsenen Haselnussstock — und stellte sich ihm gegenüber.

»Du bist fünf. Normalerweise würde ich noch zwei Jahre warten. Aber...«

Er schaute zum Waldrand. Kaito wusste warum — die Beobachter. Sie waren immer noch da.

»...die Zeiten sind nicht normal.«

»Du willst mir Kämpfen beibringen?«

»Nein. Kämpfen kann jeder Dummkopf mit genug Level. Ich bringe dir bei, wie man ÜBERLEBT.«`,

    systemBox: {
      title: "ROLANDS LEKTIONEN (Alter 5–7)",
      lines: [
        "LEKTION 1: »Lerne, bevor du kämpfst.«",
        "→ Beobachte deinen Gegner. Wie bewegt er sich?",
        "  Wo sind seine Schwächen? Kämpfe erst wenn du",
        "  die Antwort kennst.",
        "",
        "LEKTION 2: »Dein Körper ist deine erste Waffe.«",
        "→ »Ein Schwert kann man dir nehmen. Deinen Körper nicht.«",
        "  Kondition. Balance. Körperkontrolle.",
        "",
        "LEKTION 3: »Jede Umgebung ist eine Waffe.«",
        "→ Training nie auf offenem Feld. Immer im Wald,",
        "  am Fluss, zwischen Gebäuden.",
        "",
        "LEKTION 4: »Angst ist nützlich. Panik nicht.«",
        "→ Roland erschreckte Kaito absichtlich während",
        "  des Trainings. »Angst macht dich aufmerksam.",
        "  Panik macht dich tot.«",
        "",
        "LEKTION 5: »Beschütze jemanden.«",
        "→ Eine Puppe hinter Kaito: »Das ist deine Schwester.",
        "  Wenn der Stock die Puppe trifft, hast du versagt.«",
        "→ Kaito verlor JEDES Mal. Monatelang.",
        "→ Bis er nicht mehr verlor.",
      ]
    },

    text2: `Nach dem Training, Roland und Kaito:

»Papa... warst du Soldat?«

Rolands Hände, die gerade den Stock aufhoben, erstarrten. Nur eine Sekunde.

»...Ja. Vor langer Zeit.«

»Was ist passiert?«

»Ich habe etwas gesehen, das ich nicht hätte sehen sollen. Und jemand hat dafür gesorgt, dass ich es nie jemandem erzählen kann.«

Er berührt sein rechtes Bein — unbewusst.

»...Dein Bein?«

Roland, überrascht: »Du bist zu klug für dein Alter, Junge.«`,

    choices: [
      {
        text: "A) »Papa... ich weiß, dass du einen falschen Namen trägst.«",
        desc: "Roland erstarrt. »Woher—« Er ringt mit sich. Muss erklären oder lügen. Potenziell +Roland MAX Affinität, ABER: Kaito muss vom Terminal erzählen oder lügen.",
        next: "a2k2_roland_reaktion_a",
        flagEffect: { rolandGeheimnis: "direkt" },
      },
      {
        text: "B) »Ich werde stärker. Damit du nicht allein beschützen musst.«",
        desc: "Roland ist bewegt. Legt die Hand auf Kaitos Schulter. Sagt nichts. +Roland-Affinität +20.",
        next: "a2k2_aldwin_unterricht",
        affinityEffect: { roland: 20 },
        flagEffect: { rolandGeheimnis: "indirekt" },
        narrativeFeedback: "Roland stoppt. Schaut seinen Sohn an — wirklich an. »...Das ist nicht deine Aufgabe.« Aber er sagt es nicht wütend. Fast erleichtert.",
      },
      {
        text: "C) »Es ist okay. Du musst es nicht erzählen.«",
        desc: "Roland atmet aus. »Eines Tages werde ich es dir erzählen.« +Roland-Affinität +10. Roland erzählt die Wahrheit in Akt III von selbst.",
        next: "a2k2_aldwin_unterricht",
        affinityEffect: { roland: 10 },
        flagEffect: { rolandGeheimnis: "verschwiegen" },
        narrativeFeedback: "Roland dreht sich weg. Aber sein Griff am Schwert lockert sich. Ein langer Moment. Dann dreht er sich zurück.",
      },
    ]
  },

  // Branch A: Roland konfrontiert
  a2k2_roland_reaktion_a: {
    act: "AKT II",
    chapter: "Kapitel 6 — Runtime.Training()",
    title: "Rolands Geheimnis",
    scene: "Waldrand, Millheim",
    conditionalFlag: "rolandGeheimnis",
    textConditional: { direkt: `»Du weißt mehr als du sagen solltest. Das macht mir Angst.« Er sagte es nicht wütend. Fast erleichtert.`, verschwiegen: `Er glaubte sein Geheimnis war sicher. Das gab ihm Ruhe zurück. Eine geborgte.`, default: `` },
    bg: "village",
    music: "theme_family",
    text: `Roland ERSTARRTE. Nicht eine Sekunde — eine EWIGKEIT.

»...Woher weißt du das?«

Kaito schwieg einen Moment. Dann: »Ich kann Sachen lesen, die andere nicht sehen können. Status. Code. Dein Fluch. Deinen echten Namen — verborgen hinter deinem Alias.«

»...Wie lange weißt du das?«

»Seit ich vierzehn Monate alt war.«

Rolands Hand — die Hand, die ein Schwert hielt, als wäre es ein Körperteil — senkte sich langsam. Er schaute seinen siebenjährigen Sohn an. Und zum ersten Mal sah er ihn wirklich.

Nicht als Kind. Als... was auch immer Kaito war.

»...Roland von Eisenhardt«, sagte Roland schließlich. Leise. »Das ist mein echter Name. Ich war Ritter. Rang B. Mitglied der Elften Klinge — die Leibgarde des Kaisers.«

»Was hast du gesehen?«

Lange Pause. Rolands Augen gingen in die Ferne.

»Ich habe gesehen, wie ein Architekt einem Menschen Befehle gab. Direkt. Als wären wir Spielfiguren.«

»Und dann haben sie dich verflucht.«

»Und dann haben sie mich verflucht.«`,

    text2: `Stille. Nur der Wind im Wald.

Dann — unerwartet — streckte Roland seine Hand aus und legte sie auf Kaitos Kopf. Grob, ein bisschen unbeholfen. Die Art, wie ein Mann Zärtlichkeit zeigt, der es nie wirklich gelernt hat.

»...Du bist mein Sohn«, sagte er. »Egal was sonst stimmt. Das ist das Einzige, was ich mit Sicherheit weiß.«

Kaito schluckte. »Ich weiß, Papa.«

»Gut.«

Roland stand auf. Nahm seinen Stock wieder auf. Und begann, ohne ein weiteres Wort, das Training fortzusetzen.

Aber er humpelte weniger. Oder vielleicht bildete Kaito sich das nur ein.`,

    choices: [{ text: "→ Aldwins Unterricht", next: "a2k2_aldwin_unterricht" }],
    affinityEffect: { roland: 30 },
    wissenEffect: ["rolandEchterName", "rolandFluch"],
  },

  a2k2_aldwin_unterricht: {
    act: "AKT II",
    chapter: "Kapitel 6 — Runtime.Training()",
    title: "Aldwins Rückkehr — Der wahre Unterricht",
    scene: "Aldwins Hütte, Millheim — Alter: 6 Jahre",
    bg: "cottage",
    music: "theme_mystery",
    text: `Der Wanderhändler kehrte zurück. Diesmal blieb er länger.

Er tauchte an einem Donnerstag auf — mit einem neuen Hut, einem Rucksack voller »Waren« (die er nie verkaufte), und einem Lächeln, das zu viel wusste.

Die Konfrontation fand hinter der Scheune statt, am zweiten Tag.

»Du bist kein Händler.«

»Und du bist kein normales Kind.«

»Dein Level ist gefälscht. Dein Status ist eine Maske.«

»Oh? Du kannst das sehen? Mit sechs?«

Aldwin nahm seinen Hut ab. Seine Illusion flackerte — nur für einen Moment. Kaito sah: jüngeres Gesicht, violette Augen, spitze Ohren.

»Mein Name ist Aldwin. Das zumindest ist echt. Ich bin ein Chronist — einer der letzten. Und ich habe dich gesucht, Kaito. Seit dem Tag deiner Geburt.«

»Die Siebte. Septima.«

Seine Augen weiteten sich. »...Du WEISST es?«

»Sie hat mit mir gesprochen. Bevor ich wiedergeboren wurde. Sie gab mir das Void-Terminal.«

Aldwin setzte sich auf einen Baumstamm. Er sah aus, als hätte ihm jemand den Boden unter den Füßen weggezogen.

»Zweihundertundsieben Jahre. So lange habe ich gesucht. Und hier bist du. Sechs Jahre alt. Mit Dreck an den Knien und einem Milchzahnlücken-Grinsen.«

Er lachte. Es klang nach Erleichterung und Erschöpfung.

»Gut. Dann lass uns reden, Kaito. Richtig reden. Ohne Masken.«`,

    text2: `Aldwin blieb. Er mietete eine kleine Hütte am Dorfrand, »als Warenlager«. In Wahrheit wurde die Hütte zum geheimen Klassenzimmer.

Aldwin unterrichtete mich in drei Fächern, die an keiner Schule der Welt gelehrt wurden:

1. Die wahre Geschichte von Aethermere.
2. Wilde Magie — Grundlagen.
3. System-Verständnis — wie man Code nicht nur LIEST, sondern VERSTEHT.

Aethermere existierte 7.000 Jahre ohne System. Keine Level. Keine Klassen. Magie war WILD — gefährlich, unberechenbar, aber FREI. Jeder konnte sie nutzen, auf seine eigene Art.

»Und dann kamen die Architekten.«

»Ja. Sieben Wesen aus einer sterbenden Dimension. Sie formten die Welt, aber sie konnten sie nicht KONTROLLIEREN. Also schufen sie das System — Regeln, Grenzen, Ordnung.«

»Wie ein Game-Designer, der die Balance-Patches schreibt.«

»...Was?«

»Metapher aus meiner alten Welt.«

Dann — nach Wochen der Theorie:

»Aldwin... die Sprache des Systems. Sie ist nicht MAGISCH. Sie ist TECHNISCH. Die Architekten haben keine Göttersprache benutzt. Sie haben... PROGRAMMIERT.«

Aldwin starrte mich an. »...Erkläre.«

»In meiner alten Welt gab es Menschen, die Welten in Computern erschufen. Mit Regeln, Systemen, Codes. Die Architekten haben dasselbe getan — aber nicht in einem Computer. In der REALITÄT.«

»Das System ist kein göttliches Geschenk. Es ist ein PROGRAMM. Und jedes Programm hat Bugs. Jedes Programm kann GEHACKT werden.«

Stille. Aldwin starrte mich an.

»...Zweihundert Jahre habe ich nach der Wahrheit gesucht. Und ein Sechsjähriger hat sie mir in dreißig Sekunden erklärt.«`,

    choices: [{ text: "→ Die erste Wilde Magie", next: "a2k2_wilde_magie" }],
    affinityEffect: { aldwin: 20 },
    wissenEffect: ["systemIstProgramm", "architektenExistenz"],
  },

  a2k2_wilde_magie: {
    act: "AKT II",
    chapter: "Kapitel 6 — Runtime.Training()",
    title: "Die erste Wilde Magie",
    scene: "Aldwins Hütte — Alter: 6,5 Jahre",
    bg: "cottage",
    music: "theme_void_terminal",
    text: `»Genug Theorie. Zeit für die Praxis.«

Aldwin stellte eine Kerze auf den Tisch. Unangezündet.

»Zünde sie an.«

»...Ich kann keine Feuermagie.«

»Richtig. Du kannst keine SYSTEM-Feuermagie. Aber das System ist nicht alles. Der Aether ist überall — in der Luft, im Holz, in DIR. Sprich mit ihm.«

»...Wie spricht man mit Luft?«

»Wie hat deine Mutter dich in den Schlaf gesungen?«

Ich erstarrte. Elenas Lieder. Die alten Worte. Die Vibration in der Luft.

»Wilde Magie ist keine Formel. Es ist eine Beziehung. Der Aether ist wie ein lebendes Wesen — alt, weise, manchmal launisch. Du kannst ihn nicht BEFEHLEN. Du musst ihn BITTEN.«

Kaito starrte die Kerze an. Schloss die Augen. Versuchte, den Aether zu spüren.

Nichts. Zehn Minuten. Nichts.

Frustration. Ich war in meinem alten Leben Programmierer gewesen. Ich dachte in BEFEHLEN. Eingabe → Ausgabe. Ursache → Wirkung. Kontrolle.

Aber Wilde Magie war nicht Kontrolle. Es war... Dialog.

Ich dachte an Elenas Stimme. An die Art, wie sie sang — nicht um zu ERZWINGEN, sondern um zu VERBINDEN. Wie eine Brücke zwischen ihr und dem Unsichtbaren.

Ich summte. Leise, ungeschickt, ohne Worte. Einfach ein Ton. Und ich DACHTE an Wärme. An das Feuer im Kamin zuhause. An Rolands Lagerfeuer-Geschichten. An Miras Lachen, das immer wärmer war als jede Flamme.

Und dort — irgendwo zwischen Gedanke und Wirklichkeit — ANTWORTETE etwas.

Kein System-Fenster. Kein Skill-Popup. Nur... ein Gefühl. Als würde die Luft um mich herum nicken.

Und die Kerze—`,

    text2: `Ein einzelner, zitternder Funke. Er tanzte auf dem Docht. Erlosch. Tanzte wieder. Und dann — eine kleine, wackelige Flamme. Nicht größer als ein Streichholz.

Aldwin, flüsternd, Augen weit: »...Du hast es geschafft.«

»Das war... das war nicht das System.«

»Nein. Das warst DU. Und der Aether. Zusammen.«`,

    systemBox: {
      title: "VOID-TERMINAL — NEUE FÄHIGKEIT ERKANNT",
      lines: [
        "> [Wilde Magie — Funke] (Rudimentär)",
        "> → Nicht systemregistriert",
        "> → Keine MP-Kosten (nutzt Aether direkt)",
        "> → Keine Cooldowns",
        "> → Stärke: MINIMAL (aktuell)",
        "> → Potenzial: UNBEGRENZT",
        ">",
        "> Das System ist sich dieser Fähigkeit",
        "> nicht bewusst.",
        ">",
        "> P.S.: Gut gemacht.",
        "> — S.",
      ]
    },

    text3: `Ich hatte Magie gewirkt. ECHTE Magie. Nicht die vorgefertigte, systemkontrollierte, in Ränge gepresste System-Magie. Sondern die rohe, ungezähmte, freie Magie, die existierte, bevor irgendjemand beschloss, der Welt Regeln aufzuzwingen.

Es war... wunderschön. Wie der Unterschied zwischen einem Synthesizer und einem echten Orchester. Beide machten Musik. Aber nur eines davon war lebendig.

Die Kerze brannte. Ich lächelte.

Und in meinem Terminal erschien ein Nachsatz, den ich vorher nicht gesehen hatte:

»P.S.: Gut gemacht. — S.«

S. Septima?

War sie... stolz auf mich?

Die Kerze flackerte im Abendwind. Aldwin machte Tee. Und ich — ein sechsjähriger Junge, der einmal ein 29-jähriger Programmierer gewesen war — fühlte mich zum ersten Mal in zwei Leben wie... genau da, wo ich hingehörte.`,

    choices: [{ text: "→ Kapitel 7: Sera und das Feuer", next: "a2k3_sera_feuer" }],
    skillUnlock: ["wildeMagie"],
  },

  // ════ KAPITEL 7: DEBUG.LIFE() ═════════════════════════════════════════════

  a2k3_sera_feuer: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Sera und das Feuer",
    scene: "Felsen am Fluss, Millheim — Alter: 7 Jahre, Sommer",
    bg: "village",
    music: "theme_friendship",
    text: `Die drei Freunde saßen auf ihrem üblichen Felsen am Fluss. Finn schlief — Kopf auf seinem »Schwert« (ein besonders guter Stock). Sera starrte ins Wasser. Kaito las ein Buch (Aldwins Leihgabe, getarnt als Märchenbuch).

»Es ist wieder passiert.«

Sera zeigte ihre Hände — die Fingerspitzen leicht gerötet, als hätte sie sie verbrannt.

»Das Feuer. Letzte Nacht. Ich habe schlecht geträumt und... meine Decke hat angefangen zu schwelen.«

Ihre Stimme war gleichmütig, aber ihre Hände zitterten.

»Die Dorfälteste sagt, ich soll AUFHÖREN, wütend zu sein. Als ob ich es KONTROLLIEREN könnte. Ich schlafe und es passiert trotzdem.«

Pause. Sera ballte die Fäuste.

»...Was stimmt nicht mit mir, Kaito?«

In diesem Moment hatte ich eine Entscheidung zu treffen. Ich wusste, was mit Sera los war — ich wusste es seit dem Tag am Fluss, als ich ihren Status gelesen hatte. Halbdämonin. Feueraffinität. Unterdrückte dämonische Kräfte, die bei Stress durch die System-Blockade brachen.

Ich konnte ihr die Wahrheit sagen. Oder einen Teil davon. Oder nichts.

Sie war sieben. War sie bereit für die Wahrheit?`,

    choices: [
      {
        text: "A) DIE HALBE WAHRHEIT: »Du hast eine Feueraffinität, Sera. Extrem stark. Du bist nicht kaputt. Du bist MÄCHTIG.«",
        desc: "+Sera-Affinität +25. Kaito bietet an, ihr Kontrolle zu lehren. Das Dämonengeheimnis bleibt — für jetzt.",
        next: "a2k3_sera_training",
        affinityEffect: { sera: 25 },
        flagEffect: { seraKenntWahrheit: true, seraKenntVoll: false },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Sera schaut auf ihre Hände. »Eine Affinität... ist das normal?« — »Nein.« — »Aber ich bin kein Monster?« — »Nein.« Sie atmet aus.",
      },
      {
        text: "B) DIE VOLLE WAHRHEIT: »Sera... du bist halb Dämonin. Dein Vater war ein Dämon.«",
        desc: "Sera EXPLODIERT. Die Steine um sie herum werden rotglühend. Kaito muss sie beruhigen. Wenn gelingt: Sera weint zum ersten Mal. +Sera-Affinität +30. ABER: Die Explosion wurde bemerkt — Dorfangriff wird früher ausgelöst.",
        next: "a2k3_sera_explosion",
        flagEffect: { seraKenntWahrheit: true, seraKenntVoll: true },
        alignEffect: { licht: 1, verborgenheit: -3 },
      },
      {
        text: "C) LÜGE: »Ich weiß nicht, Sera. Aber ich finde es heraus. Versprochen.«",
        desc: "Sera glaubt ihm. Kaito gewinnt Zeit, aber die Lüge wiegt schwer. Wenn die Wahrheit SPÄTER herauskommt: Sera fühlt sich doppelt verraten. -Sera-Affinität-Risiko in Akt III/IV.",
        next: "a2k3_sera_training",
        affinityEffect: { sera: 5 },
        flagEffect: { seraKenntWahrheit: false, seraLuegeAusstehend: true },
        narrativeFeedback: "Sera hält den Blick lang auf ihm. Sie glaubt ihm nicht ganz — das sieht man. Aber sie nickt. Als wäre das Versprechen selbst das Wichtigste.",
      },
      {
        text: "D) ABLENKUNG: »Was mit dir stimmt? Du bist stark, Sera. Stärker als alle anderen.«",
        desc: "Emotionale Validierung ohne direkte Antwort. +Sera-Affinität +15. Die Wahrheit kommt in Akt III von selbst.",
        next: "a2k3_sera_training",
        affinityEffect: { sera: 15 },
        flagEffect: { seraKenntWahrheit: false },
        narrativeFeedback: "Sera streckt eine Hand aus — Handfläche nach oben. Eine kleine Flamme entzündet sich. Sie schaut sie an wie etwas, das ihr gehört.",
      },
    ]
  },

  // Branch: Sera Explosion (Pfad B)
  a2k3_sera_explosion: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Die Explosion",
    scene: "Felsen am Fluss",
    bg: "chaos",
    music: "theme_void_terminal",
    text: `Sera erstarrte.

Eine halbe Sekunde. Dann EXPLODIERTE sie — buchstäblich.

Die Steine um sie herum wurden rotglühend. Finn wachte schreiend auf. Das Wasser um den Felsen begann zu dampfen. Seras Augen leuchteten vollständig bernsteinfarben — nicht mehr das kontrollierte Glimmen, sondern reines, unbändiges FEUER.

»ICH BIN EIN MONSTER!«

»SERA! HÖRST DU MICH?! SERA!«

Ich griff nach ihr — meine Handflächen verbrannten sich sofort. Hitze wie ein Schmiedeofen. Aber ich ließ nicht los.

»SERA. Ich. Bin. HIER.«

»LASS MICH LOS! ICH VERBRENNE DICH!«

»Ich weiß. Tu es trotzdem nicht.«

Stille — mitten in der Flammen. Seras Augen trafen meine. Sie sah die Verbrennungen auf meinen Händen.

Und die Flammen... sanken ab.

Nicht ganz. Aber genug.`,

    text2: `Sera weinte. Zum ersten Mal seit sie denken konnte.

Nicht laut, nicht dramatisch. Stille Tränen, die wie Funken leuchteten, bevor sie ihre Wangen trafen.

»...Ein Monster?« Meine Stimme war ruhig — ruhiger als ich mich fühlte. »Nein, Sera. Nicht du.«

»DEIN CODE sagt, ich bin ein Mischling. Ein Fehler. Das System will mich ELIMINIEREN—«

»Der Code hat keine Ahnung, wer du bist.«

Sie schaute mich an. Verbrannte Hände. Kein Schritt zurück.

»Sera Blackwood. Das bist du. Nicht der Code. Nicht das System. Nicht das, was dein Vater war oder deine Mutter. DU.«

Sie sagte nichts. Aber sie ließ meine verbrannte Hand nicht los.

Das Dorf hatte die Flammen gesehen. Jemand würde reden. Der Angriff würde früher kommen als geplant.

Aber in diesem Moment — dieser einen Stille — war das egal.`,

    choices: [{ text: "→ Das Kontrolltraining", next: "a2k3_sera_training" }],
    affinityEffect: { sera: 20 },
  },

  a2k3_sera_training: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Das Kontrolltraining",
    conditionalFlag: "seraKenntWahrheit",
    scene: "Am Fluss, nachts — Alter: 7 Jahre",
    bg: "night",
    music: "theme_training",

    // Konditional: Text ändert sich je nach Pfad
    textConditional: {
      halbe: `Kaito begann, Sera im Geheimen zu trainieren. Nicht Kampftraining — KONTROLLTRAINING. Basierend auf dem, was Aldwin ihm beigebracht hatte.

Am Fluss, nachts, damit niemand sie sah.`,
      voll: `Nach Seras Explosion war klar: Sie brauchte Kontrolle, und sie brauchte sie SCHNELL. Kaito begann das Training noch in der Nacht desselben Tages.`,
      default: `Kaito begann, Sera heimlich zu beobachten und ihr — ohne direkten Kontakt — Hinweise zu hinterlassen: Zettel mit Atemübungen, platziert an ihrem Lieblingsstein. Sera fand sie. Fragte nicht, woher sie kamen. Probierte sie aus.`,
    },

    text: `»Stell dir deine Kraft wie ein Feuer vor. Nicht ein System-Feuerball — ein ECHTES Feuer. In einem Kamin.«

»Okay...«

»Ein Feuer braucht drei Dinge: Brennstoff, Luft und einen Funken. Dein Brennstoff sind deine Gefühle. Deine Luft ist dein Atem. Und der Funke...«

Er berührte ihre Hand — und sein Void-Terminal reagierte. Er konnte die System-Unterdrückung auf Seras Dämonenerbe SEHEN — wie eine Kette aus Code, die ihre Kraft einschnürte.

Ich konnte die Unterdrückung nicht ENTFERNEN — dafür brauchte ich [Code.Modify], das noch gesperrt war. Aber ich konnte etwas anderes tun: Ich konnte Sera zeigen, wie sie INNERHALB der Unterdrückung kontrolliert arbeiten konnte. Wie ein Fluss, der durch einen Damm kanalisiert wird, statt unkontrolliert überzulaufen.

»...der Funke bist DU. Nicht das System. Nicht der Dämon. DU.«

Sera öffnete die Augen — und zum ersten Mal leuchteten sie kontrolliert bernsteinfarben.

»...Ich kann es fühlen. Es ist... warm. Nicht wütend. Nur... warm.«

»Das ist dein Feuer, Sera. DEINS. Nicht unkontrolliert. Nicht beängstigend. Deins.«

Sera hielt ihre Hand hoch. Auf ihrer Handfläche tanzte eine perfekte, kleine Flamme. Ruhig. Kontrolliert. Wunderschön.

Sera starrte die Flamme an. Dann Kaito. Ihre Augen waren feucht.

»...Danke.«

Es war das erste Mal, dass Sera Blackwood jemandem dankte.

Die Flamme auf ihrer Hand tanzte. Und ich dachte: DAS ist es, wofür ich hier bin. Nicht um ein Held zu sein. Nicht um das System zu stürzen. Sondern um Menschen zu zeigen, dass sie mehr sind als das, was das System aus ihnen macht.`,

    choices: [{ text: "→ Gregors Geschenk", next: "a2k3_gregor_geschenk" }],
    affinityEffect: { sera: 15 },
  },

  a2k3_gregor_geschenk: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Gregors Geschenk",
    scene: "Gregors Haus, Millheim — Herbst, Alter: 7 Jahre",
    conditionalFlag: "gregorWeissAlles",
    textConditional: { true: `»Seite 47. Lies sie zuerst.« Er tippte auf das Tagebuch. Es war der erste Hinweis auf etwas größer als Millheim.`, default: `` },
    bg: "cottage",
    music: "theme_gregor",
    text: `Gregor war krank geworden. Nicht dramatisch — ein hartnäckiger Husten, den Elenas Heilmagie linderte, aber nicht besiegte. Er war 74.

An einem Abend rief Gregor Kaito zu sich. Allein.

»Setz dich, Junge. Ich habe etwas für dich.«

Er zog unter seinem Bett eine Holzbox hervor. Alt, abgenutzt, aber solide. Auf dem Deckel eingravierte Symbole — Symbole, die Kaito ERKANNTE.

»Das ist... Alt-Aetherisch.«

»Von meiner Mutter. Und von deren Mutter. Und so weiter, weiter zurück als jeder zählen kann.«

Er öffnete die Box. Darin: ein Tagebuch, gebunden in Leder, das älter aussah als alles, was Kaito bisher gesehen hatte. Die Seiten beschrieben — in Alt-Aetherisch, in einer Handschrift, die sich über Generationen veränderte. Und eine Karte. Handgezeichnet, verblasst, aber lesbar.

»Ich kann es nicht lesen. Niemand in unserer Familie konnte es — seit meine Großmutter starb. Die Sprache ist... verloren.«

»...Ich kann es lesen.«

Stille. Gregor starrte ihn an.

»...Natürlich kannst du das.«`,

    systemBox: {
      title: "VOID-TERMINAL — OBJEKT-ANALYSE",
      lines: [
        "> OBJEKT: Tagebuch (prä-systemisch)",
        "> Alter: ~2.800 Jahre (älteste Einträge)",
        "> Sprache: Alt-Aetherisch",
        ">",
        "> Vorläufige Ergebnisse:",
        "> • Chronik einer Blutlinie",
        "> • Beschreibungen der Welt VOR dem System",
        "> • Anleitungen für Wilde Magie (fortgeschritten)",
        "> • Hinweise auf »Die Siebte« und ihre Mission",
        "> • Eine Karte zu einem »System-freien Ort«",
        ">",
        "> WARNUNG: Vollständige Analyse dauert WOCHEN.",
        ">",
        "> Dieses Buch ist möglicherweise das",
        "> wertvollste Objekt der WELT.",
      ]
    },

    choices: [
      {
        text: "A) Du umarmst Gregor. Wortlos. Fest.",
        desc: "Gregor ist überrascht, dann legt er seine alten Arme um dich. »Mach uns stolz, Junge.« +Gregor-Affinität MAX.",
        next: "a2k3_warnung",
        affinityEffect: { gregor: 25 },
        flagEffect: { gregorBuch: true },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Gregor hält die Umarmung. Er ist dünner als er war. »Pass auf dich auf, Junge. Du trägst mehr als du weißt.«",
      },
      {
        text: "B) »Opa... dieses Buch könnte alles verändern. Alles.«",
        desc: "Gregor nickt. »Deswegen habe ich so lange gewartet. Auf jemanden, der es LESEN kann.« +Gregor +20.",
        next: "a2k3_warnung",
        affinityEffect: { gregor: 20 },
        flagEffect: { gregorBuch: true },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Gregors Augen leuchten auf — dann werden sie ernst. »Dann sorge dafür, dass es das Richtige verändert.«",
      },
      {
        text: "C) »Warum jetzt? Warum nicht warten, bis ich älter bin?«",
        desc: "Gregor schweigt lange. »Weil ich nicht sicher bin, ob ich noch so lange Zeit habe, Junge.« +Gregor +15. Foreshadowing.",
        next: "a2k3_warnung",
        affinityEffect: { gregor: 15 },
        flagEffect: { gregorBuch: true },
        narrativeFeedback: "Gregor lächelt. »Weil die Zeit nicht wartet. Und weil du es jetzt brauchst — auch wenn du das noch nicht weißt.«",
      },
    ]
  },

  a2k3_warnung: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Die Warnung",
    scene: "Küche der Familie Ashford — der letzte friedliche Abend",
    bg: "night",
    music: "theme_mystery",
    text: `Aldwin kam zum Abendessen. Er lächelte — aber Kaito kannte sein echtes Lächeln inzwischen, und dieses war es nicht.

Nach dem Essen, als Elena die Kinder ins Bett brachte, blieb Aldwin mit Roland am Küchentisch.

Kaito lag im Bett, Augen geschlossen, Ohren offen.

»Roland. Wir müssen reden.«

»Du hast denselben Ton wie vor drei Jahren, als du sagtest, jemand sucht mich.«

»Diesmal suchen sie nicht DICH.«

Stille.

»...Kaito?«

»Nicht spezifisch. Sie suchen nach einer 'System-Anomalie' in dieser Region. Die Systemkirche hat ihre Inquisitoren ausgeschickt — eine Spezialeinheit unter General Kross.«

Roland STAND AUF. Sein Stuhl KRACHTE gegen die Wand.

»Kross.«

»Du kennst ihn.«

»Er ist der Mann, der mich verraten hat. Der mein Regiment töten ließ. Der mir DAS angetan hat.«

Er schlug auf sein rechtes Bein.`,

    text2: `Elena stand in der Tür — sie hatte alles gehört.

»Niemand. Berührt. Mein. Kind.«

Dann:

»Wie viel Zeit haben wir?«

»Tage. Vielleicht eine Woche. Sie kämmen die Region systematisch durch.«

Ich lag im Dunkeln und hörte zu, wie meine Welt sich veränderte.

General Kross. Der Mann, der meinen Vater verraten hatte. Er kam. Hierher. Nach Millheim. Nach MIR — auch wenn er es noch nicht wusste.`,

    systemBox: {
      title: "VOID-TERMINAL — BEDROHUNGSANALYSE",
      lines: [
        "> Bedrohungslevel: KRITISCH",
        ">",
        "> Empfohlene Maßnahmen:",
        "> 1. Fliehen (kurzfristige Lösung)",
        "> 2. Verstecken (unzuverlässig)",
        "> 3. Kämpfen (Träger ist 7 Jahre alt → NICHT EMPFOHLEN)",
        "> 4. Das System gegen sich selbst nutzen",
        ">   → [Code.Analyze] kann genutzt werden,",
        ">     um System-Scans umzuleiten",
        ">   → Risiko: HOCH",
        ">   → Erfolgswahrscheinlichkeit: 34%",
        ">   → Aber: Der Träger ist ein Programmierer.",
        ">     Programmierer improvisieren.",
        ">",
        "> ...Viel Glück, Anomalie.",
      ]
    },

    text3: `Neben mir schlief Mira. Vier Jahre alt, ein Engel mit schmutzigen Knien und wirrem Haar. Sie hatte ihre kleine Hand um meinen Finger geschlossen — wie sie es jede Nacht tat.

Ich schaute zur Decke.

Und schwor — nicht dem Universum, nicht einem Gott, nicht dem System — MIR SELBST:

»Ich werde sie beschützen. Alle von ihnen. Koste es, was es wolle.«`,

    choices: [{ text: "→ Kapitel 8: Die Jäger kommen", next: "a2k4_kriegsrat" }],
  },

  // ════ KAPITEL 8: FIREWALL.BREACH() ═══════════════════════════════════════

  a2k4_kriegsrat: {
    act: "AKT II",
    chapter: "Kapitel 8 — Firewall.Breach()",
    title: "Kriegsrat am Küchentisch",
    scene: "Küche der Familie Ashford — Morgen, 3 Tage nach Aldwins Warnung",
    bg: "cottage",
    music: "theme_family",
    text: `Morgen. Grau. Der erste Schnee des Jahres fiel — leicht, fast zaghaft, als wüsste selbst der Himmel, dass etwas Schlimmes kam.

Am Küchentisch saßen: Roland, Elena, Aldwin, Opa Gregor (hustend, aber stur anwesend) und — zum ersten Mal bei einer »Erwachsenen-Diskussion« — Kaito.

Elena hatte darauf bestanden.

»Er sitzt hier, weil IHR mir gestern Nacht erzählt habt, dass mein Sohn der Grund ist, warum eine Armee kommt. Also sitzt er hier. Und jemand erklärt mir ALLES. Von Anfang an.«

Aldwin nahm seinen Hut ab. Seine echte Erscheinung: jünger, violette Augen, halb-Elfenohren.

»Die kurze Version: Euer Sohn hat keine System-Registrierung. Er ist für das Genesis-System unsichtbar. Das macht ihn zu einer Anomalie — und die Systemkirche jagt Anomalien.«

Elena, blass, aber gefasst: »Warum? Er ist ein KIND.«

»Weil eine Anomalie das System in Frage stellt. Und das System darf NICHT in Frage gestellt werden.«

Gregor, hustend: »Sag ihr den REST, Halbelfe.«

Aldwin (zu Gregor): »Du WUSSTEST—«

»Dass du kein Händler bist? Ich bin alt, nicht blind. Deine 'braunen' Augen flackern violett, wenn du Tee trinkst.«

Elena: »Mein Sohn ist keine Waffe.«

Dann — Kaito, zum ersten Mal, ruhig:

»Mama. Es ist okay. Ich weiß es. Seit meiner Geburt. Ich bin... anders. Das System sieht mich nicht. Aber ich kann DAS SYSTEM sehen. Seinen Code. Seine Regeln. Seine Fehler.«

Elena presste die Hand auf den Mund. Roland wurde sehr, sehr still.`,

    choices: [
      {
        text: "A) ALLES erzählen — das alte Leben, Septima, das Void-Terminal, das System-Wissen.",
        desc: "Elena weint. Roland erschüttert, aber hält zusammen. Gregor nickt: »Ich wusste es.« Familie wird Unterstützungsnetzwerk. +Familie MAX. Elena kämpft damit: »Ist er wirklich MEIN Sohn?«",
        next: "a2k4_plan",
        affinityEffect: { elena: 20, roland: 15, gregor: 10, mira: 5 },
        flagEffect: { familieWeissAlles: true },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Elena schaut Roland an — dann Kaito. Ihre Hände zittern einen Moment, dann werden sie fest. »Gut. Dann wissen wir, was wir zu tun haben.«",
      },
      {
        text: "B) TEILWEISE — Die Anomalie und das System-Sehen, aber NICHT das frühere Leben.",
        desc: "Die Familie akzeptiert dich als »besonderes Kind«. Roland: »Ich habe immer gewusst, dass du anders bist.« +Familie-Affinität +15. Sicherer Pfad.",
        next: "a2k4_plan",
        affinityEffect: { elena: 15, roland: 10, gregor: 5 },
        flagEffect: { familieWeissAlles: false },
        narrativeFeedback: "Roland nickt langsam. »Das reicht.« Keine weiteren Fragen. Er beginnt sofort, den Tisch zur Seite zu schieben und eine Karte auszurollen.",
      },
      {
        text: "C) MINIMAL — »Ich kann das System sehen. Lasst mich euch beschützen.«",
        desc: "Roland erkennt den Soldaten in Kaitos Worten. Nickt. Elena ist verletzt: »Du bist SIEBEN, Kaito.« +Roland +10, -Elena -5.",
        next: "a2k4_plan",
        affinityEffect: { roland: 10, elena: -5 },
        flagEffect: { familieWeissAlles: false },
        alignEffect: { schatten: 1 },
        narrativeFeedback: "Elena atmet scharf ein. Dann: »Dann zeig uns.« Kein Zögern. Kein Zweifel. Nur Vertrauen.",
      },
    ]
  },

  a2k4_plan: {
    act: "AKT II",
    chapter: "Kapitel 8 — Firewall.Breach()",
    title: "Der erste Hack — Code.Spoof",
    scene: "Aldwins Hütte — die Nacht vor der Ankunft",
    bg: "void",
    music: "theme_void_terminal",
    text: `Die Familie und Aldwin schmiedeten einen Plan. Kaito brachte seine einzigartige Perspektive ein.

»Die Inquisitoren suchen nach System-Anomalien. Sie benutzen hochrangige Scan-Skills. Aber mein Void-Terminal zeigt mir, dass diese Scans BLINDE FLECKEN haben.«

Er griff nach einem Stück Kohle und zeichnete auf den Küchentisch. Elena protestierte, gab aber auf.

»Ich muss nicht meinen Status ändern. Ich muss nur dafür sorgen, dass der Scan-Skill des Inquisitors eine gefälschte Antwort erhält. In meiner alten Welt hätte man das 'Spoofing' genannt.«

Aldwin: »Du willst das System... TÄUSCHEN?«

»Nicht täuschen. Nur eine temporäre Illusion erzeugen. Wie dein Level-22-Fake, Aldwin. Nur von der anderen Seite.«

Was ich vorhatte, war theoretisch unmöglich. Mein [Code.Modify]-Befehl war GESPERRT. Aber es gab einen Unterschied zwischen CODE VERÄNDERN und EINE NACHRICHT FÄLSCHEN.

Kaito arbeitete die ganze Nacht. Er analysierte den System-Code, zerlegte die Struktur eines Standard-Status-Fensters in seine Bestandteile. Er übte — wieder und wieder — einen schwachen Aether-Impuls zu erzeugen, der AUSSAH wie eine System-Antwort.

Es war wie Programmieren ohne Tastatur. Ich schrieb Code in die Luft, mit Gedanken statt Fingern, mit Aether statt Elektrizität.

Um drei Uhr morgens hatte ich es.

Ein fragiles, wackeliges, hässliches Stück Code. Kein elegant programmierter Fake-Status. Eher ein... digitales Stottern. Eine Blase aus gefälschter Information, die sich für genau EINE SEKUNDE um mich legen konnte, bevor sie zusammenbrach.

Eine Sekunde. Das musste reichen. System-Scans dauerten eine halbe.`,

    systemBox: {
      title: "VOID-TERMINAL — NEUER BEFEHL ERSTELLT",
      lines: [
        "> [Code.Spoof] — Rang: Rudimentär",
        "> → Erzeugt temporäre Fake-System-Antwort",
        "> → Dauer: ~1 Sekunde",
        "> → Überzeugend gegen: Rang C oder niedriger",
        "> → NICHT überzeugend gegen: Rang B+",
        "> → Cooldown: 5 Minuten",
        ">",
        "> Terminal aktualisiert Einschätzung:",
        "> »beunruhigend vielversprechend«.",
        ">",
        "> — S.: »Wie der Code-Monkey, der er war.",
        ">   Immer improvisieren. Gut.«",
      ]
    },

    text2: `Ich hatte meinen ersten Hack. Primitiv, fragil, gerade gut genug.

Aber es war MEIN Werk. Keine göttliche Gabe, kein System-Skill, keine geschenkte Macht.

Nur ein Programmierer, der tat, was Programmierer am besten konnten: eine Lösung zusammenhacken, die kein QA-Tester je durchlassen würde, aber die FUNKTIONIERTE.

Jetzt musste sie nur noch den Praxistest bestehen.`,

    choices: [{ text: "→ Die Ankunft der Inquisitoren", next: "a2k4_inquisitor" }],
    skillUnlock: ["codeSpoof"],
  },

  a2k4_inquisitor: {
    act: "AKT II",
    chapter: "Kapitel 8 — Firewall.Breach()",
    title: "Inquisitor Vex",
    scene: "Dorfplatz, Millheim — Mittag",
    bg: "village",
    music: "theme_mystery",
    text: `Sie kamen bei Tageslicht. Zwölf Reiter in schwarzen Rüstungen mit dem Wappen der Systemkirche — ein goldenes Auge innerhalb eines Zahnrads.

Angeführt von einem einzelnen Mann in weißer Robe mit goldenen Stickereien. Die Kleidung eines Inquisitors.`,

    systemBox: {
      title: "VOID-TERMINAL — SCAN: INQUISITOR VEX",
      lines: [
        "> Name: Inquisitor Darius Vex",
        "> Level: 58  |  Klasse: System-Inquisitor (Rang B)",
        ">",
        "> Skills: [Göttlicher Scan LV 7]",
        ">         [Wahrheitszwang LV 5]",
        ">         [Heiliges Schwert LV 6]",
        ">         [System-Autorität LV 4]",
        ">",
        "> [Göttlicher Scan LV 7]:",
        "> → Kann System-Status JEDES Wesens lesen.",
        "> → Rang B Durchdringung.",
        ">",
        "> → Mein [Code.Spoof] ist überzeugend",
        ">   gegen Rang C oder niedriger.",
        "> → Rang B... ist GRENZWERTIG.",
        ">",
        "> Erfolgswahrscheinlichkeit: 29%",
        ">",
        "> ...Das ist weniger als erhofft.",
      ]
    },

    text2: `Das Dorf versammelte sich. Chief Boris trat den Reitern entgegen.

»Willkommen in Millheim, Herr Inquisitor. Was verschafft uns die Ehre?«

»Inquisitor Darius Vex. Im Namen der Heiligen Systemkirche führe ich eine Routineuntersuchung durch. Es wurden Anomalien in dieser Region gemeldet.«

»Anomalien? Hier? Das Aufregendste, was hier passiert, ist, wenn Herthas Kuh ausbricht.«

»System-Anomalien. Unregistrierte Entitäten.«

Er hob seine Hand. Sein Auge leuchtete golden.

»Ich werde jeden Bewohner dieses Dorfes scannen. Bitte versammeln Sie alle — Männer, Frauen, Kinder. Niemand ist ausgenommen.«

Kaito stand in der Schlange der Dorfbewohner. Zwischen Elena (ihre Finger zitterten nicht, aber ihr Griff war eisern) und Finn (der aufgeregt war, weil »echte Ritter« da waren).

Roland stand weiter hinten. Sein Schwert war im Haus. Sein Gesicht war eine Maske. Aber Kaito sah: Rolands rechte Hand zuckte.

Aldwin war verschwunden. Natürlich.

Sera stand am Rand der Menge. Allein, wie immer.

Vex ging die Reihe ab. Jeder Bewohner einzeln gescannt. Effizient. Kalt. Mechanisch.

Dann stand er vor Kaito.

»Name?«

Elena, schnell: »Kaito. Kaito Ashford. Er ist sieben.«

»Ich frage DAS KIND. Name?«

»Kaito. Sir.«

Das goldene Licht TRIFFT ihn.`,

    text3: `JETZT.

Ich spürte den Scan wie einen Suchscheinwerfer, der durch mein Inneres fegte. Er suchte meinen System-Status. Er fand: NICHTS.

Und in genau dieser Millisekunde — dem Moment zwischen »Suche« und »Ergebnis« — aktivierte ich [Code.Spoof].

Das gefälschte Paket EXPLODIERTE in meinem Geist. Nicht elegant. Nicht sauber. Aber der Scan war SCHNELL — er brauchte eine Antwort, IRGENDEINE Antwort, und mein Fake lieferte eine.

Vex: »Level 1. Keine Klasse. Kein—«

Er stockte. Runzelte die Stirn.

»...Moment.«

Mein Herz STOPPTE.

Er hatte etwas bemerkt. Sein Rang-B-Scan hatte eine Textur-Erkennung, die über bloße Datenlektüre hinausging. Er spürte, dass etwas UNSTIMMIG war.

ZWEITER SCAN. Tiefer. Intensiver. Mein [Code.Spoof] war noch in der Erholungsphase — fünf Minuten. Ich hatte keine fünf Minuten.

Also tat ich etwas, das ich nie geplant hatte.

Ich bat den Aether.

Nicht mit Worten. Mit GEFÜHL. Mit der puren, verzweifelten Bitte eines siebenjährigen Jungen, der seine Familie beschützen wollte: VERSTECK MICH. BITTE.

Und der Aether ANTWORTETE.

Für den Bruchteil einer Sekunde flackerte die Luft um ihn herum. Der Aether SCHOB sich zwischen ihn und den Scan. Nicht als Schild. Als TARNUNG.

»...Level 1. Keine Anomalien.«

Vex schaute Kaito nochmal an. Stirnrunzelnd. Aber sein Scan zeigte nichts.

»Weiter.«

Er ging weiter. Zum nächsten in der Reihe.

Ich stand da. Elenas Hand zerquetschte meine Finger. Meine Knie waren weich wie Pudding.

Es hatte funktioniert.`,

    systemBox2: {
      title: "VOID-TERMINAL — UPDATE",
      lines: [
        "> [Code.Spoof] — Vorgang ERFOLGREICH",
        "> Zusätzliche Unterstützung: WILDER AETHER",
        ">",
        "> NEUER BEFEHL ERKANNT (passiv):",
        "> [Aether.Resonance] — Rang: Instinktiv",
        "> → Kann Wilden Aether um Hilfe »bitten«",
        "> → Erfolg: Variabel (emotional abhängig)",
        "> → Keine Garantie. Aether ist kein Werkzeug.",
        ">   Er ist ein Partner.",
      ]
    },

    choices: [{ text: "→ Sera wird entdeckt", next: "a2k4_sera_entdeckt" }],
    skillUnlock: ["aetherResonance"],
  },

  // ════ KAPITEL 8–9: SERA & KAMPF ══════════════════════════════════════════

  a2k4_sera_entdeckt: {
    act: "AKT II",
    chapter: "Kapitel 8–9 — Firewall.Breach() / System.Crash()",
    title: "Sera wird entdeckt",
    scene: "Dorfplatz, Millheim — Nachmittag",
    bg: "chaos",
    music: "theme_mystery",
    text: `Vex scannte weiter. Person für Person. Und dann stand er vor SERA.

»Name?«

»Sera.«

»Nachname?«

»Blackwood.«

Scan. Eine halbe Sekunde. Und dann—

Vex trat zurück. Seine Hand LEUCHTETE — nicht mehr golden. ROT. Alarmfarbe.

»HALTET SIE FEST!«

»W-Was?! Was hab ich—«

»System-Flagge erkannt! Entität: Sera Blackwood. Rassenklassifikation: KOMPROMITTIERT. Dämonisches Erbe: LATENT. Unterdrückungsprotokoll: AKTIV.«

Er zog sein Schwert — ein dünnes, leuchtendes Ceremonialschwert.

»Gemäß Direktive 7 der Heiligen Systemkirche: Jede Entität mit dämonischem Erbe ist zu INHAFTIEREN und dem Tribunal zu übergeben.«

Sera, panisch, ihre Augen beginnen bernsteinfarben zu glühen: »ICH HAB NICHTS GETAN!«

»Das ist irrelevant. Ihr BLUT ist das Verbrechen.«

NEIN.

Das Wort war in meinem Kopf, bevor ich es dachte. Ein Reflex, älter als Logik, tiefer als Strategie.

NICHT. SIE.`,

    choices: [
      {
        text: "A) DU GREIFST EIN — ÖFFENTLICH. »LASST SIE LOS!«",
        desc: "Mutigster Pfad. Sera sieht es. Das Dorf sieht es. -Verborgenheit MASSIV. +Sera +30, +Finn +15. Das Dorf weiß jetzt, dass du besonders bist.",
        next: "a2k5_kampf",
        affinityEffect: { sera: 30, finn: 15 },
        alignEffect: { verborgenheit: -5, licht: 2 },
        flagEffect: { dorfVerteidigung: "oeffentlich" },
        narrativeFeedback: "Sera schaut Kaito an — kurz, direkt. Etwas in ihr entspannt sich, das lange angespannt war. Dann wendet sie sich den Soldaten zu.",
      },
      {
        text: "B) DU SABOTIERST IM VERBORGENEN. [Code.Spoof] auf Vex' Scan — Seras Flagge verschleiern.",
        desc: "Intellektueller Pfad. Schwieriger. Wenn gelingt: Vex' Scan 'aktualisiert' sich. Sera ist frei. ABER: Vex ist misstrauisch. Wenn fehlschlägt: Kaito bricht zusammen, Aufmerksamkeit auf ihn.",
        next: "a2k5_hack_versuch",
        flagEffect: { dorfVerteidigung: "verborgen" },
        alignEffect: { ordnung: 1, schatten: 1 },
      },
      {
        text: "C) ROLAND GREIFT EIN. Du bewegst dich nicht — dein Vater handelt.",
        desc: "Rolands Pfad. Er tritt vor mit seiner Ritterklinge. Vex erkennt sie. Rolands Vergangenheit wird enthüllt. Kampf zwischen Roland und den Soldaten.",
        next: "a2k5_kampf",
        affinityEffect: { roland: 15 },
        flagEffect: { dorfVerteidigung: "roland" },
        wissenEffect: ["rolandEchterName"],
        narrativeFeedback: "Roland schiebt Kaito sanft zur Seite. Er sagt kein Wort — aber er stellt sich so, dass Kaito hinter ihm ist.",
      },
      {
        text: "D) DU LÄSST SERA EIN SIGNAL. Du formst lautlos das Wort: »BRENNE.«",
        desc: "Dunkelster Pfad. Sera lässt los. Massives Feuer — die Soldaten werden zurückgeschleudert. Im Chaos könnt ihr fliehen. KONSEQUENZ: Seras Unterdrückung ist permanent gebrochen. Die Kirche wird sie aktiv jagen.",
        next: "a2k5_kampf",
        affinityEffect: { sera: -5 },
        flagEffect: { dorfVerteidigung: "signal", seraKontrolle: "gebrochen" },
        alignEffect: { schatten: 2, verborgenheit: -3 },
        narrativeFeedback: "Seras Augen finden seinen. Sie versteht. Und in diesem Moment beschließt sie etwas — man sieht es, wie ihre Haltung straffer wird.",
      },
    ]
  },

  // Branch B: Hack-Versuch
  a2k5_hack_versuch: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Der verborgene Eingriff",
    scene: "Dorfplatz — mitten im Chaos",
    bg: "chaos",
    music: "theme_void_terminal",
    text: `Kaito konzentrierte sich. Sein [Code.Spoof] war noch nicht erholt — 4 Minuten, 23 Sekunden Cooldown. Zu lang.

Aber [Code.Analyze] war frei.

Er richtete seinen ganzen Fokus auf Vex' Scan-Skill. Analysierte die Struktur. Und sah: Der Scan war keine Ein-Wege-Übertragung. Er war ein DIALOG — System sendet Anfrage, Status antwortet.

Wenn Kaito zwischen Anfrage und Antwort eintrat... nicht mit einem Fake-Status, sondern mit einem INTERRUPT...

Er bat den Aether. Diesmal gezielter. Präziser.

HIER. DIESER DATENSTROM. UNTERBRECHE IHN.

Ein Knall — unhörbar für alle außer Kaito.

Vex blinzelte. Schaute auf seine leuchtende Hand. Der Alarm-Scan-Zustand... flackerte.

»...Seltsam. Das System—«

Und dann: Seras Flagge verschwand aus Vex' Anzeige. Nicht gelöscht — temporär VERDECKT.

»Neueinordnung. Mensch. Keine... Anomalie.«

Vex trat von Sera zurück. Verwirrung auf seinem Gesicht.

»...Das System zeigt jetzt— Ich verstehe nicht. Es war—«

Er schaute Sera nochmal an. Dann Kaito. Dann die Menge.

»...Falschalarm. Weiter.«

Sera stand da, blass wie Kreide, Flammen hinter den Augen. Sie schaute zu Kaito.

Kaito nickte kaum merklich.

ABER — Vex' Augen hatten etwas bemerkt. Einen Schatten der Verzerrung in der Luft. Er wusste es nicht sicher. Aber er war misstrauisch.

»Wir bleiben heute Nacht im Dorf«, sagte er zu seinen Soldaten.

Das war nicht gut.`,

    choices: [{ text: "→ Die Eskalation", next: "a2k5_kampf" }],
    affinityEffect: { sera: 25 },
    alignEffect: { verborgenheit: -2, ordnung: 1 },
  },

  a2k5_kampf: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Die Verteidigung von Millheim",
    scene: "Dorfplatz und Wald, Millheim",
    bg: "chaos",
    music: "theme_training",
    text: `Der Konflikt eskalierte. Egal wie — ob Kaito eingriff, Roland kämpfte, oder Sera explodierte — Inquisitor Vex rief Verstärkung.

Ein Signalzauber schoss in den Himmel. Golden, pulsierend, unmissverständlich.

Und ich wusste: In weniger als einer Stunde würde eine ARMEE hier sein.

Roland übernahm das Kommando. Der ehemalige Ritter ERWACHTE — seine Stimme wurde Stahl, seine Haltung militärisch.

»Boris! Evakuierung. Frauen und Kinder zum Nordpfad — durch den Wald zum Eisfluss. Die Reiter können im Wald nicht folgen!«

»Roland. Nimm die Kinder. Geh.«

Elena: »Und du?«

»Jemand muss sie aufhalten.«

»NEIN. Nicht du allein. Nicht wieder.«

Roland fasste ihre Schultern, schaute ihr in die Augen.

»Elena. Meine Klinge. Mein Fluch. Meine Schuld, dass sie hier sind. LASS MICH DAS RICHTIGE TUN. Für einmal in meinem Leben.«

Elena starrte ihn an. Tränen. Aber kein Schluchzen.

»Du KOMMST ZURÜCK. Hörst du? Du. Kommst. Zurück.«

Roland, ein Lächeln — das erste echte, das Kaito je bei ihm gesehen hatte: »Versprochen.«

Dann trat Kaito vor.

»Ich bleibe.«`,

    text2: `»KAITO ASHFORD, DU GEHST MIT MIR. SOFORT.«

»Mama. Ich kann helfen. Ich kann Sachen, die—«

»Du bist SIEBEN!«

»Mama...«

Und zum ersten Mal ließ er seine Maske KOMPLETT fallen — die erwachsene Stimme, der erwachsene Blick.

»...ich bin mehr als sieben. Und du weißt es.«

Elena erstarrte. In ihren Augen: Erkenntnis. Schmerz. Angst. Und — unter allem — Stolz.`,

    choices: [
      {
        text: "A) »Ich verspreche, dass ich zurückkomme. Genau wie Papa.«",
        desc: "Elena schluckt. Nickt. »Dann halte dein Versprechen.« Sie küsst seine Stirn und geht. +Elena-Affinität +10.",
        next: "a2k5_taktik",
        affinityEffect: { elena: 10 },
        flagEffect: { elenaAbschied: "versprechen" },
        narrativeFeedback: "Elena drückt seine Hand einmal fest. Dann lässt sie los. »Ich weiß.« Sie glaubt ihm. Das ist das Schwerste daran.",
      },
      {
        text: "B) »Nimm Mira. Beschütze SIE. Das ist deine Aufgabe. MEINE Aufgabe ist hier.«",
        desc: "Elena sieht: Er hat einen PLAN. Sie nimmt Mira (die schreit nach »BUDA!«) und geht. +Roland-Affinität +10.",
        next: "a2k5_taktik",
        affinityEffect: { roland: 10 },
        flagEffect: { elenaAbschied: "aufgabe" },
        narrativeFeedback: "Roland schaut ihn an. Lang. Dann nickt er. »Gut.« Ein Wort. Mehr braucht es zwischen ihnen nicht.",
      },
      {
        text: "C) Du sagst nichts. Du drehst dich um und gehst zu Roland. Elena sieht deinen Rücken.",
        desc: "Kalt. Effektiv. Elena ist verletzt, versteht aber. Mira weint. -Elena -5, +Schatten-Alignment.",
        next: "a2k5_taktik",
        affinityEffect: { elena: -5 },
        flagEffect: { elenaAbschied: "schweigen" },
        alignEffect: { schatten: 1 },
        narrativeFeedback: "Elena versteht. Sie nimmt Mira auf den Arm. Dreht sich nicht um. Kaito weiß: das ist ihre Art, ihm zu sagen, dass sie ihm vertraut.",
      },
    ]
  },


  // FEHLENDE ENTSCHEIDUNG AUS PDF: Finn bleibt oder geht (Szene 9.4)
  a2k5_finn_entscheidung: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Bester Freund für immer",
    scene: "Dorfplatz, Millheim — Evakuierung",
    bg: "chaos",
    music: "theme_training",
    timedDecision: true,
    timedSeconds: 5,
    timedDefault: 1,
    text: `Finn stand plötzlich neben dir. Mit seinem Holzschwert. Sein Gesicht war bleich, aber entschlossen.

»Ich gehe nicht. Du bleibst, ich bleibe. Bester Freund. Für immer. Weißt du noch?«

Zwölf Kirchensoldaten. Ein Rang-B-Inquisitor. Und ein Junge mit einem Holzschwert.

Was sagst du?`,

    choices: [
      {
        text: "A) »Dann bleib. Aber hinter mir.«",
        desc: "+Finn-Affinität +20. Finn kämpft an deiner Seite. RISIKO: Finn kann verletzt werden.",
        next: "a2k5_taktik",
        affinityEffect: { finn: 20, roland: 5 },
        flagEffect: { finnImKampf: "geblieben" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Finn grinst — das breite, unzerstörbare Grinsen. »Versprochen!« Er bleibt hinter Kaito. Und hält es. Die ganze Zeit.",
      },
      {
        text: "B) »Finn... deine Mutter braucht dich. GEH.«",
        desc: "Finn geht. Sicher. Aber enttäuscht von sich selbst. -Finn-Affinität -5. Er ringt in Akt III damit.",
        next: "a2k5_taktik",
        affinityEffect: { finn: -5 },
        flagEffect: { finnImKampf: "gegangen" },
        narrativeFeedback: "Finn schluckt. Schaut kurz zu Roland. Dann nickt er — knapp. Er geht. Das kostet ihn mehr als er zeigt.",
      },
      {
        text: "C) »Du hast ein Holzschwert, Finn. Die haben echte.«",
        desc: "Brutal ehrlich. »Dann brauch ich ein ECHTES.« Roland gibt ihm ein Kurzschwert. +Finn-Affinität +25.",
        next: "a2k5_taktik",
        affinityEffect: { finn: 25, roland: 5 },
        flagEffect: { finnImKampf: "echtes_schwert" },
        narrativeFeedback: "Finn schaut sein Holzschwert an. Dann nickt er. »...Ruf mich, wenn du mich brauchst.« Er geht schnell — damit man seine Augen nicht sieht.",
      },
    ]
  },

  a2k5_taktik: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Kaitos Plan — Der Bug Exploit",
    scene: "Dorfzentrum, Millheim",
    bg: "chaos",
    music: "theme_void_terminal",
    text: `Ich war ein Programmierer. Und Programmierer lösten Probleme nicht mit Gewalt, sondern mit LOGIK.

Ich brauchte keinen Kampf. Ich brauchte einen BUG EXPLOIT.

»Papa. Wie viel Zeit brauchst du, um die Jäger in Position zu bringen?«

»Zehn Minuten. Was hast du vor?«

»Wie viele Fallen hat Boris im Wald aufgestellt?«

Boris, verblüfft: »Sechs Wolfsgruben. Drei Schlingenfallen.«

»Perfekt. Und die Brücke über den Ostbach — wie stabil ist sie?«

»...Wackelig. Warum?«

Kaito, ein Lächeln, das kein Siebenjähriger haben sollte: »Weil Soldaten in schwerer Rüstung nicht gut schwimmen.«`,

    systemBox: {
      title: "KAITOS TAKTIK — DER PLAN",
      lines: [
        "PHASE 1: TRENNUNG",
        "→ Die 11 Soldaten von Vex TRENNEN",
        "→ Vex allein ist Level 58 — EINE Person",
        "→ 11 Soldaten als Gruppe sind gefährlicher",
        "→ Lockt die Soldaten in den Wald",
        "",
        "PHASE 2: FALLEN",
        "→ Wolfsgruben + Schlingenfallen aktivieren",
        "→ Jäger kennen den Wald → Guerilla-Taktik",
        "→ Schwere Rüstungen = langsam im Unterholz",
        "",
        "PHASE 3: DIE BRÜCKE",
        "→ Soldaten werden zur Brücke getrieben",
        "→ Brücke bricht unter dem Gewicht",
        "→ Soldaten im Bach — schwere Rüstung = Problem",
        "",
        "PHASE 4: VEX",
        "→ Roland vs. Vex — 1 gegen 1",
        "→ Roland: Level 34, aber Rang-B-Erfahrung",
        "→ Vex: Level 58, aber Inquisitor, kein Frontkämpfer",
        "",
        "PHASE 5 (Kaitos Beitrag):",
        "→ [Code.Read] auf Vex während des Kampfes",
        "→ Schwachstellen in Echtzeit an Roland weitergeben",
        "→ Nicht kämpfen — den Kampf LESEN",
      ]
    },

    text2: `Die Ausführung begann. Boris und die Jäger gingen in den Wald — in ihrem Element.

Von elf Soldaten wurden sieben in den ersten fünf Minuten neutralisiert. Wolfsgruben, Schlingenfallen, und ein sehr kalter Bach erledigten den Rest.

Dann: Roland vs. Vex. Im Dorfzentrum.

»Dein Status... Level 34. Aber deine HALTUNG... Du bist kein Bauer. Du bist—«

Vex' Augen wurden weit.

»...Roland von Eisenhardt. Die 'Gebrochene Klinge'. Du lebst?«

»Überraschung.«

Während des Kampfes machte Kaito das, was er am besten konnte:`,

    systemBox2: {
      title: "VOID-TERMINAL — LIVE-KAMPFANALYSE: VEX",
      lines: [
        "> SKILL: [Heiliges Schwert LV 6]",
        "> → Cooldown zwischen Verstärkungen: 3 Sekunden",
        "> → SCHWACHSTELLE: Klinge ist NORMAL im Cooldown",
        "> → EMPFEHLUNG: Angriff in Cooldown-Fenstern",
        ">",
        "> SKILL: [System-Autorität LV 4]",
        "> → »HALT« → Gegner eingefroren für 1 Sek.",
        "> → Funktioniert NUR bei system-registrierten Entitäten",
        "> → KAITO: NICHT BETROFFEN (nicht registriert)",
        ">",
        "> PHYSISCHE SCHWÄCHE:",
        "> → Vex favorisiert rechtes Bein",
        "> → Linkes Knie: alte Verletzung",
        "> → EMPFEHLUNG: Angriff auf linke Seite",
      ]
    },

    text3: `»PAPA! Drei Sekunden nach dem Leuchten — dann ist sein Schwert NORMAL! Und sein linkes KNIE! LINKS!«

Roland hörte es. VERSTAND es. Und im nächsten Moment—

Vex' Schwert leuchtete. HIEB — Roland blockte. Das Licht erlosch. COOLDOWN. Roland trat vor — tief, links — und seine Klinge fegte gegen Vex' linkes Knie.

»ARGH—«

Vex strauchelte. Roland schlug zu — das Sword flog in den Schnee.

»Es ist vorbei.«

Vex, keuchend, auf dem Boden — aber lächelnd:

»Ist es das?«

Er hob seine andere Hand.

»HALT.«

Rolands Körper ERSTARRTE. Jeder Muskel eingefroren.

Kaito rannte. Kein Plan. Ein Kind, das seinen Vater nicht sterben sehen wollte.

Er stellte sich zwischen Vex und Roland. Sieben Jahre alt. Keine Waffe.

Vex scannte ihn — automatisch. Und dieses Mal—

Kaitos [Code.Spoof] war LEER. Verbraucht. Kein Fake-Status.

Vex sah: NICHTS. Leere.

»...Unmöglich. Du hast... KEINEN Status. Du existierst NICHT im System.«

»Ja.«

»DU bist die Anomalie. Nicht das Mädchen. DU.«

»Ja.«

»Dann muss ich dich—«`,

    choices: [{ text: "→ Die Rettung", next: "a2k5_rettung" }],
  },

  a2k5_rettung: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Die Rettung",
    scene: "Dorfzentrum, Millheim — entscheidender Moment",
    bg: "chaos",
    music: "theme_family",
    text: `Was als nächstes passierte, hing von den Göttern — oder dem Schicksal — oder dem Willen eines sehr alten Wesens ab.`,

    choices: [
      {
        text: "A) DER AETHER ANTWORTET. Kaito bittet — und die Realität schützt ihn.",
        desc: "Vex' Schwert prallt ab. Als hätte die Realität beschlossen, dass dieses Kind nicht sterben darf. Roland befreit sich. KONSEQUENZ: Vex berichtet über eine 'Aether-Anomalie'. General Kross kommt persönlich.",
        next: "a2k5_nachwirkungen",
        alignEffect: { licht: 1 },
        flagEffect: { inquisitorVex: "aether", krossKommt: true },
      },
      {
        text: "B) ALDWIN ERSCHEINT. Sein wahres Gesicht: Level 89, Rang S.",
        desc: "Aldwin hebt eine Hand. Vex wird zurückgeschleudert. »Genug.« KONSEQUENZ: Aldwins Tarnung ist gebrochen. Die Kirche weiß. Aldwin muss fliehen und hinterlässt einen Kontaktpunkt.",
        next: "a2k5_nachwirkungen",
        flagEffect: { inquisitorVex: "aldwin", aldwinGeflohen: true },
        affinityEffect: { aldwin: 10 },
        narrativeFeedback: "Aldwin hebt eine Hand. Das freundliche Lehrersgesicht ist verschwunden. Darunter: vierhundert Jahre Erschöpfung. Und Entschlossenheit.",
      },
      {
        text: "C) GREGOR. Der alte Mann tritt zwischen Vex und Kaito — unbewaffnet.",
        desc: "»Du willst ein Kind töten, Inquisitor? Vor dem ganzen Dorf?« Vex zögert. Aber er schlägt Gregor beiseite — zu hart für einen 74-jährigen. Roland bricht aus der System-Einfrierung durch pure Willenskraft. Roland gewinnt. KONSEQUENZ: Gregor wird schwer verletzt.",
        next: "a2k5_nachwirkungen",
        affinityEffect: { gregor: -50, roland: 20 }, // gregor verletzt
        flagEffect: { inquisitorVex: "gregor", gregorVerletzt: true },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Gregor tritt vor. Sein Körper ist der eines 74-Jährigen. Sein Rücken ist gerade. Sein Blick: die Ruhe eines Mannes, der mit sich im Reinen ist.",
      },
      {
        text: "D) VOID-TERMINAL NOTFALL. Kaito erzwingt [Code.Modify] — den gesperrten Befehl.",
        desc: "Das Terminal warnt. Kaito tut es trotzdem. [Code.Modify] für EINE Sekunde freigeschaltet. Vex' System-Magie bricht zusammen. Aber Kaito bezahlt den Preis — er bricht bewusstlos zusammen. Mira sitzt neben ihm als er aufwacht.",
        next: "a2k5_nachwirkungen",
        flagEffect: { inquisitorVex: "void", kaitoBewusstlos: true },
        alignEffect: { schatten: 2 },
      },
    ]
  },

  a2k5_nachwirkungen: {
    act: "AKT II",
    chapter: "Kapitel 9–10 — Nachwirkungen",
    title: "Der Morgen danach",
    scene: "Millheim — nach dem Kampf",
    conditionalFlag: "inquisitorVex",
    textConditional: { aether: `Irgendwo schrieb Vex: »Null-Entität. Weiterleitung an General Kross erbeten.« Der Bericht existierte. Kross las ihn.`, aldwin: `»Dein Lehrer ist weg.« — »Ich weiß.« Ich wusste es seit dem letzten Mal.`, gregor: `Gregor lag verletzt. Wegen mir. »Er hat es gewählt.« Das half. Nur wenig.`, void: `Mira saß neben mir, meine Hand in beiden ihren. »Buda wird gut.«`, default: `` },
    bg: "village",
    music: "theme_family",
    text: `Der Kampf war vorbei. Vex besiegt. Die Soldaten neutralisiert. Millheim stand noch.

Aber die Ruhe war FALSCH.

»Sein Signalzauber hat funktioniert. Die Kirche WEISS jetzt, was hier passiert ist. Sie werden wiederkommen. Mit einer ARMEE.«

Boris, Blut im Gesicht, aber aufrecht: »Dann KÄMPFEN wir—«

»Boris. Gegen eine Armee kannst du nicht kämpfen. Nicht mit Jägern und Wolfsgruben. Sie werden das Dorf NIEDERBRENNEN.«

Stille. Schreckliche Stille.

Elena, die aus dem Wald zurückgekehrt war, Mira an der Hand: »Dann gehen wir.«

Alle schauten sie an.

»Das Dorf ist Holz und Stein. WIR sind keine Dinge. Wir gehen. Alle. Jetzt.«`,

    text2: `Wir hatten eine Nacht. Eine einzige Nacht, bevor wir gehen mussten.

Ich stand in der Mitte des Dorfes und schaute mich um.

Das Haus, in dem ich geboren wurde. Der Brunnen, an dem ich Finn traf. Der Felsen am Fluss, wo Sera zum ersten Mal lächelte. Aldwins Hütte, wo ich meine erste Flamme entzündete.

Sieben Jahre. Mein ganzes zweites Leben. Hier.`,

    choices: [{ text: "→ Gregors Abschied", next: "a2k6_gregor_abschied" }],
  },

  // ════ KAPITEL 10: MEMORY.SAVE() ══════════════════════════════════════════

  a2k6_gregor_abschied: {
    act: "AKT II",
    chapter: "Kapitel 10 — Memory.Save()",
    title: "Abschied von Millheim",
    conditionalFlag: "gregorTod",
    scene: "Millheim — die letzte Nacht",
    bg: "night",
    music: "theme_gregor",

    // Konditional: Gregor gestorben oder verletzt vs. lebendig
    text: `Der Abschied von Gregor.`,

    textConditional: {
      gregor_verletzt: `Opa Gregor lag in seinem Bett. Elena hatte alles getan, was sie konnte. Aber sein Körper war 74 Jahre alt, und der Schlag des Inquisitors hatte etwas in ihm zerbrochen, das keine Magie heilen konnte.

Er wusste es. Wir alle wussten es.

»Komm her, Junge.«

Kaito setzte sich neben sein Bett. Mira saß auf der anderen Seite, ihre kleine Hand auf Gregors Arm.

»Das Buch. Hast du es?«

»Ja.«

»Und die Karte?«

»Ja.«

»Dann hast du alles, was ich dir geben kann.«

Ein Husten. Dünn, nass.

»Eines noch, Junge. Ein letztes Märchen.«

»...Ja, Opa.«

»Es war einmal ein kleiner Stern... der heller leuchtete als alle anderen... obwohl er der kleinste war... Die großen Sterne fragten: 'Wie machst du das?'... Und der kleine Stern sagte...«

Stille. Kaito wartete.

»...er sagte: 'Ich leuchte nicht für MICH. Ich leuchte für die, die im Dunkeln stehen.'«

Seine Hand wurde locker.

»Opa?«

Keine Antwort.

Mira, zog an Gregors Ärmel: »...Opa? Opa, die Geschichte ist noch nicht fertig. Opa?«`,

      default: `Gregor stand im Türrahmen. Hustend, aber lebendig. Seinen zerbeulten Hut auf dem Kopf.

»Ihr denkt, ihr könnt OHNE mich gehen? Ich bin alt, nicht nutzlos. Packt meinen Rucksack.«

»Vater, du bist krank—«

»Und ich werde KRANK GEHEN. Aber ich werde GEHEN. Versuch nicht, mich aufzuhalten, Tochter. Darin war ich schon immer besser als du.«

Er schaute Kaito an. Ein langer, wissender Blick.

»Die Geschichten gehen weiter, Junge. Das ist das Wichtigste.«`,
    },

    text2: `Gregor Sylvaine. Der Mann, der keine Märchen erzählt hatte — sondern GESCHICHTE, verschlüsselt in Kindersprache.

In meinem Terminal erschien, einmalig, eine Nachricht:`,

    systemBox: {
      title: "VOID-TERMINAL — EINGEHENDE NACHRICHT",
      lines: [
        "> ...",
        "> Er war ein guter Mensch.",
        ">",
        "> — S.",
      ]
    },

    choices: [{ text: "→ Der Abschied von Boris", next: "a2k6_boris_abschied" }],
  },

  a2k6_boris_abschied: {
    act: "AKT II",
    chapter: "Kapitel 10–11 — Abschied / Execute.Departure()",
    title: "Boris' Abschied",
    scene: "Dorftor, Millheim — Morgen",
    conditionalFlag: "familieWeissAlles",
    textConditional: { true: `Elena hielt meine Hand länger als nötig. »Ich weiß nicht was du bist. Aber ich weiß wer du bist.« Das war genug.`, default: `` },
    bg: "village",
    music: "theme_family",
    text: `Boris stand am Dorftor. Seinen enormen Schnurrbart hatte er frisch gekämmt — seine Art, Würde zu zeigen.

»Halt sie sicher, Eisenhardt.«

Roland, ein Nicken: »Es war eine Ehre, Boris.«

»Die Ehre war meinerseits. Du warst der schlechteste Bauer, den Millheim je hatte. Aber der beste Mann.«

Sie schüttelten Hände. Fest. Lang.

Dann kniete Boris vor Kaito nieder.

»Junge. Ich verstehe nicht, was du bist. Aber ich habe gesehen, was du TUST. Du hast dieses Dorf gerettet — mit dem Kopf, nicht mit dem Schwert. Das ist seltener als Gold.«

Er legte seine massive Hand auf Kaitos Schulter.

»Mach die Welt da draußen ein bisschen besser, ja?«`,

    choices: [
      {
        text: "A) »Ich komme zurück, Boris. Versprochen.«",
        desc: "Boris lächelt. »Dann halte ich dir einen Platz am Kamin frei.« +Boris-Affinität MAX. Diese Szene wird in Akt V gespiegelt.",
        next: "a2k7_wegscheide",
        affinityEffect: { gregor: 5 }, // Boris als Proxy
        flagEffect: { borisVersprechen: true },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Boris räuspert sich. »...Gut.« Er dreht sich um. Aber Kaito sieht, wie er kurz innehält — die breiten Schultern heben sich einmal tief.",
      },
      {
        text: "B) »Pass auf die auf, die bleiben.«",
        desc: "Boris nickt. »Das werde ich. Das ist mein Job.« Pragmatisch, respektvoll.",
        next: "a2k7_wegscheide",
        flagEffect: { borisVersprechen: false },
      },
      {
        text: "C) Du verneigst dich. Tief. Sagst nichts.",
        desc: "Boris ist überrascht. Eine tiefe Verbeugung — in dieser Welt die höchste Form des Respekts. Er erwidert sie. Wortlos. Das Dorf sieht es. Einige weinen.",
        next: "a2k7_wegscheide",
        flagEffect: { borisVersprechen: false },
        alignEffect: { licht: 1 },
      },
    ]
  },

  // ════ KAPITEL 11: EXECUTE.DEPARTURE() ════════════════════════════════════

  a2k7_wegscheide: {
    act: "AKT II",
    chapter: "Kapitel 11 — Execute.Departure()",
    title: "Die Wegscheide",
    scene: "Am Lagerfeuer, drei Tage von Millheim entfernt",
    conditionalFlag: "elenaAbschied",
    textConditional: { versprechen: `Elena hatte mich versprechen lassen. Am Feuer fragte ich mich: kann ich das halten? Antwort: Ich versuche es.`, schweigen: `Kein Wort beim Aufbruch. Manche Dinge sind zu groß für Sprache.`, default: `` },
    bg: "night",
    music: "theme_mystery",
    text: `Drei Tage auf der Straße. Die Gruppe war müde, kalt, und die Kinder quengelten.

Am dritten Abend, am Lagerfeuer, holte Roland eine Karte hervor.

»Kreuzweg ist noch zwei Tage entfernt. Wenn wir dort ankommen, haben wir drei Optionen.«

Er breitete die Karte aus.

»Erstens: Wir bleiben in Kreuzweg. Große Stadt, viele Menschen, einfacher sich zu verstecken. Aber: Die Kirche hat dort eine Kathedrale.«

»Zweitens: Wir gehen nach Norden, nach Sylvanthos. Die Elfen sind weniger systemtreu. Wir wären sicherer. Aber: Elfen mögen keine Menschen in ihren Wäldern.«

»Drittens: Wir gehen nach Osten, zu den Zwergen in Irondeep. Praktische Leute, stellen weniger Fragen. Aber: Es ist eine weite Reise.«

Aldwin tauchte aus den Schatten auf — als wäre er nie weg gewesen.

»Es gibt eine vierte Option.«

Alle zuckten zusammen. Finn schrie. Sera entzündete reflexartig eine Flamme.

»Ruhig. Ich bin's.«

Roland, knurrend: »Du bist VERSCHWUNDEN. Mitten im Kampf.«

»Ich weiß. Und ich werde den Rest meines Lebens damit leben. Aber ich bin hier, weil ich euch etwas anbieten kann, das sicherer ist als alles andere.«

»Die vierte Option: Kreuzweg — aber nicht um dort zu bleiben. Sondern um den Jungen einzuschreiben.«

»Einschreiben? Wo?«

»Die Kaiserliche Akademie für Helden. In Aetheria Prime.«`,

    text2: `Elena: »Du willst meinen siebenjährigen Sohn an eine MILITÄRAKADEMIE in der HAUPTSTADT schicken? Dem ORT, wo die Systemkirche ihren HAUPTSITZ hat?«

»Genau.«

»Du bist verrückt.«

»Vielleicht. Aber hört mich an. Die Akademie nimmt begabte Kinder ab ZEHN auf. In drei Jahren ist Kaito alt genug. Bis dahin kann er in Kreuzweg lernen.«

»Warum die Akademie? Weil es der LETZTE ORT ist, an dem die Kirche nach einer System-Anomalie suchen würde. Wer versteckt sich schon im Herzen der Feinde?«

»Und: In drei Jahren — wenn du zehn bist — wird die Kirche neue Helden beschwören. Und DU wirst dabei sein. Nicht als Zuschauer. Als BEOBACHTER. Um zu verstehen, was das System wirklich ist.«`,

    choices: [
      {
        text: "A) KREUZWEG → AKADEMIE: »In den Bauch der Bestie.«",
        desc: "Standard-Pfad. Kaito geht nach Kreuzweg, dann zur Akademie. Familie bleibt in Kreuzweg. Akt III beginnt an der Akademie.",
        next: "a2k7_letzter_blick",
        flagEffect: { reiseziel: "akademie" },
        alignEffect: { ordnung: 1 },
      },
      {
        text: "B) SYLVANTHOS → ELFEN: »Antworten über Wilde Magie sind bei den Elfen.«",
        desc: "Alternativer Pfad. Kaito trifft Aria Moonsong früher, lernt mehr Wilde Magie. Kein Zugang zur Akademie — trifft die Helden SPÄTER in Akt IV.",
        next: "a2k7_letzter_blick",
        flagEffect: { reiseziel: "sylvanthos" },
        alignEffect: { chaos: 1 },
      },
      {
        text: "C) IRONDEEP → ZWERGE: »Die Zwerge verstehen das System als Technologie.«",
        desc: "Alternativer Pfad. Kaito trifft Gorrick früher, lernt Runenmagie und System-Ingenieurswesen. Stärker technisch orientierter Pfad.",
        next: "a2k7_letzter_blick",
        flagEffect: { reiseziel: "irondeep" },
        alignEffect: { ordnung: 1 },
      },
      {
        text: "D) ALLEIN: »Ich gehe meinen eigenen Weg.«",
        desc: "Lone-Wolf-Pfad. Härtester Pfad. Schnelleres Void-Skill-Wachstum, aber KEINE Unterstützung. Elena: »Wenn du gehst... KOMM ZURÜCK.« +Schatten, -Familie-Affinität temporär.",
        next: "a2k7_letzter_blick",
        flagEffect: { reiseziel: "allein" },
        affinityEffect: { elena: -10, roland: -5 },
        alignEffect: { schatten: 2 },
        narrativeFeedback: "Elena schaut ihn lange an. Dann nickt sie. »Ich weiß.« Sie sagt nicht: bleib. Sie sagt nicht: geh nicht. Nur das.",
      },
    ]
  },

  a2k7_letzter_blick: {
    act: "AKT II",
    chapter: "Kapitel 11 — Execute.Departure()",
    title: "Der letzte Blick",
    scene: "Ein Hügel, nachts — Mondlicht",
    bg: "night",
    music: "theme_void_terminal",
    text: `In der Nacht, als alle schliefen, stand ich auf.

Dreißig schlafende Menschen. Mira, eingerollt wie eine Katze. Finn, der selbst im Schlaf sein Schwert hielt. Sera, die so tat als schliefe sie, aber deren Augen im Mondlicht glühten.

Ich ging ein Stück vom Lager weg. Auf einen Hügel, von dem aus man noch den Rauch von Millheims Kaminen sehen konnte.

Ich öffnete mein Terminal.`,

    systemBox: {
      title: "VOID-TERMINAL — STATUS: ENDE AKT II",
      lines: [
        "> Alter: 7 Jahre",
        ">",
        "> VOID-BEFEHLE:",
        "> [Code.Read] — Aktiv (Fortgeschritten)",
        "> [Code.Analyze] — Aktiv",
        "> [Code.Spoof] — Aktiv (rudimentär)",
        "> [Aether.Resonance] — Aktiv (instinktiv)",
        "> [Wilde Magie — Funke] — Aktiv",
        "> [Code.Modify] — GESPERRT",
        ">   (1 temporäre Nutzung protokolliert)",
        ">",
        "> EMOTIONALER STATUS:",
        "> Trauer. Wut. Entschlossenheit. Angst.",
        "> Und — darunter — etwas, das der Träger",
        "> in seinem ersten Leben nie hatte:",
        ">",
        "> ZUGEHÖRIGKEIT.",
        ">",
        "> Der Träger hat etwas zu verlieren.",
        "> Das macht ihn verletzlich.",
        "> Aber auch: unstoppbar.",
        ">",
        "> Hinweis von S.:",
        "> »Du hast deine ersten sieben Jahre gut",
        "> genutzt. Besser als ich gehofft hatte.",
        "> Aber das war die leichte Phase.",
        "> Was jetzt kommt... dafür gibt es",
        "> kein Tutorial.",
        "> Sei vorsichtig.",
        "> Und — was auch immer passiert —",
        "> vergiss nicht, WOFÜR du kämpfst.",
        "> Nicht gegen was. WOFÜR.«",
      ]
    },

    text2: `In meinem alten Leben hatte ich ein Spiel erschaffen, das niemand spielte.

In diesem Leben WAR ich im Spiel. Und die Regeln wurden von Göttern geschrieben, die keine Götter waren.

Aber ich hatte etwas, das kein System berücksichtigte. Etwas, das in keinem Code stand.

Ich hatte Menschen, die mich liebten. Und ich liebte sie zurück.

Das klingt simpel. Ist es nicht. Für jemanden, der im ersten Leben vergessen hatte, was Liebe überhaupt bedeutet... war es die mächtigste Entdeckung meines Lebens.

Stärker als [NULL]. Stärker als Wilde Magie. Stärker als jedes System.

Ich drehte mich um. Ging zurück zum Lager. Legte mich neben Mira, die sofort meine Hand suchte.

Morgen würde eine neue Reise beginnen.

Und ich würde bereit sein.`,

    choices: [{ text: "→ AKT III: Runtime — Drei Jahre später…", next: "a3k0_zeitsprung" }],
  },
};

// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — GAME ENGINE
// Vollständiges State-Management System
// ═══════════════════════════════════════════════════════

// ─── INITIAL STATE ──────────────────────────────────────────────────────────
export function createInitialState() {
  return {
    // Aktueller Knoten
    nodeId: "p0_buero",

    // Navigation
    history: [],

    // ── ALIGNMENT (beeinflusst welches der 7 Enden möglich ist) ──────────────
    alignment: {
      licht: 0,      // vs. Schatten
      schatten: 0,
      ordnung: 0,    // vs. Chaos
      chaos: 0,
      verborgenheit: 5, // startet bei 5 (relativ verborgen)
    },

    // ── AFFINITÄTEN (beeinflusst Szenen, Dialoge, Charakterverhalten) ────────
    affinity: {
      roland: 20,    // Vater — startet nicht bei 0
      elena: 20,     // Mutter
      mira: 0,       // Schwester (noch nicht geboren in Akt I)
      gregor: 10,
      aldwin: 0,
      finn: 0,
      sera: 0,
      hana: 0,
      celeste: 0,
      tertius: 0,
      meridia: 0,
      kross: 0,      // kann positiv werden bei Redemption
      mordecai: 0,
    },

    // ── STORY FLAGS (echte Konsequenzen über Akte hinweg) ────────────────────
    flags: {
      // Prolog-Flags
      prologTon: "standard",          // "standard" | "eigenstaendig" | "dunkel" | "vorsichtig"
      letzterGedanke: null,           // "reue" | "hingabe" | "einsamkeit" | "akzeptanz"
      serverReaktion: null,           // "humorvoll" | "analytisch" | "emotional"
      trait_todessehnsucht: false,    // wird zu "lebenswille" wenn Beziehungen aufgebaut

      // Akt I Flags
      kindheitsVerhalten: null,       // "vorsichtig" | "neugierig" | "offen"
      miraErstbegegnung: null,        // "beruehrung" | "scan" | "schwester"
      aldwinErstEindruck: true,       // immer true — er hat ihn gesehen

      // Akt II Flags
      seraKenntWahrheit: false,       // hat Kaito Sera von Dämonen-Erbe erzählt?
      seraKenntVoll: false,           // volle Wahrheit (nicht nur Feuer-Affinität)
      finnVertraut: false,            // hat Finn Kaitos Geheimnis erfahren?
      rolandGeheimnis: null,          // "direkt" | "indirekt" | "verschwiegen"
      gregorBuch: false,              // hat Kaito Gregors Tagebuch erhalten?
      gregorTod: null,                // "kampf" | "natuerlich" | null
      dorfverteidigung: null,         // wie wurde Millheim verteidigt?
      inquisitorVex: null,            // "aether" | "aldwin" | "gregor"

      // Akt III Flags
      akademieVerhalten: null,        // "neutral" | "provokativ" | "scan"
      leonBeziehung: "neutral",       // "ignoriert" | "antagonist" | "rivale"
      marcusVertrauen: false,         // Verräter — wurde er früh erkannt?
      meridiaAllianz: false,
      heroesWissen: "keiner",         // "keiner" | "einer" | "alle"
      akademieAbgang: null,           // wie verließ Kaito die Akademie?

      // Akt IV Flags  
      nullenAufbau: null,             // "netzwerk" | "sabotage" | "helden"
      rexBefreit: false,              // Drache Rex befreit?
      renGefunden: false,             // Ren (gelöschter Geist) gefunden?
      gorrickAllianz: false,
      ariaAllianz: false,
      veyraAllianz: false,

      // Akt V Flags
      mordecaiSchicksal: null,        // "verhaftet" | "barmherzig" | "politisch"
      rolandFluchAufgehoben: null,    // "jetzt" | "versprechen" | "teilweise"
      krossSchicksal: null,           // "redemption" | "vertrieben" | "berater"
      voidProphetSchicksal: null,     // "dritter_weg" | "neutral" | "heilung" | "kampf"
      kriegVerhindert: false,

      // Akt VI Flags
      sextusSchicksal: null,          // "ruhe" | "leben" | "wahl"
      primusUeberwunden: null,        // "kampf" | "dialog" | "hack"
      secundaBehandlung: null,

      // Finale
      finaleWahl: null,               // definiert welches der 7 Enden
    },

    // ── WISSEN (was Kaito weiß — beeinflusst verfügbare Dialogoptionen) ──────
    wissen: {
      rolandFluch: false,
      rolandEchterName: false,
      elenaElfenblut: false,
      miraAnomalie: false,
      aldwinWahreNatur: false,
      systemIstProgramm: false,
      architektenExistenz: false,
      septimaIdentitaet: false,
      nullZoneExistenz: false,
      seraEltern: false,
    },

    // ── VOID-SKILLS (freigeschaltet im Laufe der Story) ──────────────────────
    voidSkills: {
      codeRead: true,       // von Anfang an
      codeAnalyze: false,   // Akt I Ende
      codeSpoof: false,     // Akt II
      wildeMagie: false,    // Akt II
      ghostStep: false,     // Akt IV
      voidStrike: false,    // Akt IV
      codeModify: false,    // Akt III (eingeschränkt) → vollständig Akt VI
      codeCreate: false,    // nur Akt VI Kern
    },

    // UI-State
    textPhase: 1,
    showChoices: false,
    phasesDone: false,
    instant: false,
    transitioning: false,
  };
}

// ─── STATE REDUCER ──────────────────────────────────────────────────────────
export function applyChoice(state, choice) {
  const newState = deepClone(state);

  // Alignment-Effekte
  if (choice.alignEffect) {
    for (const [key, val] of Object.entries(choice.alignEffect)) {
      newState.alignment[key] = (newState.alignment[key] || 0) + val;
    }
  }

  // Affinitäts-Effekte
  if (choice.affinityEffect) {
    for (const [key, val] of Object.entries(choice.affinityEffect)) {
      newState.affinity[key] = Math.max(0, Math.min(100,
        (newState.affinity[key] || 0) + val
      ));
    }
  }

  // Flag-Effekte
  if (choice.flagEffect) {
    for (const [key, val] of Object.entries(choice.flagEffect)) {
      newState.flags[key] = val;
    }
  }

  // Wissens-Effekte
  if (choice.wissenEffect) {
    for (const key of choice.wissenEffect) {
      newState.wissen[key] = true;
    }
  }

  // Skill-Freischaltungen
  if (choice.skillUnlock) {
    for (const skill of choice.skillUnlock) {
      newState.voidSkills[skill] = true;
    }
  }

  // Navigation
  newState.history = [...state.history, state.nodeId];
  newState.nodeId = choice.next;
  newState.textPhase = 1;
  newState.showChoices = false;
  newState.phasesDone = false;
  newState.instant = false;

  return newState;
}

// ─── KONDITIONALE CHOICES ────────────────────────────────────────────────────
// Filtert Choices basierend auf State (manche Optionen nur verfügbar wenn Flags gesetzt)
export function getAvailableChoices(node, state) {
  if (!node.choices) return [];
  return node.choices.filter(choice => {
    if (!choice.requires) return true;
    return evaluateCondition(choice.requires, state);
  });
}

function evaluateCondition(condition, state) {
  if (condition.flag) {
    const [key, val] = Object.entries(condition.flag)[0];
    return state.flags[key] === val;
  }
  if (condition.flagSet) {
    return state.flags[condition.flagSet] !== null &&
           state.flags[condition.flagSet] !== false;
  }
  if (condition.wissen) {
    return state.wissen[condition.wissen] === true;
  }
  if (condition.affinity) {
    const [char, minVal] = Object.entries(condition.affinity)[0];
    return (state.affinity[char] || 0) >= minVal;
  }
  if (condition.alignment) {
    const [key, minVal] = Object.entries(condition.alignment)[0];
    return (state.alignment[key] || 0) >= minVal;
  }
  if (condition.skill) {
    return state.voidSkills[condition.skill] === true;
  }
  return true;
}

// ─── ENDING BERECHNUNG ───────────────────────────────────────────────────────
export function calculateEnding(state) {
  const { alignment, flags, affinity } = state;
  const finaleWahl = flags.finaleWahl;

  // Ending 6: Rückkehr — spezifische Wahl
  if (finaleWahl === "zurueck") return "ending_6_rueckkehr";

  // Ending 5: Void-Dämonenkönig — nur bei Max-Schatten + alle Beziehungen zerstört
  if (finaleWahl === "zerstoeren" && alignment.schatten >= 10) {
    return "ending_5_void_daemon";
  }

  // Ending 7: System Delete — alle Wahrheiten aufgedeckt + spezifische Wahl
  if (finaleWahl === "null_fuer_alle") return "ending_7_system_delete";

  // Ending 1: Der neue Gott — Verschmelzung mit System
  if (finaleWahl === "verschmelzen") {
    if (alignment.schatten >= 6 && alignment.ordnung >= 6) return "ending_1_neuer_gott";
    return "ending_1_neuer_gott"; // auch mit anderen Werten möglich
  }

  // Ending 2: Eminence in Shadow — [NULL] behalten + Schatten/Chaos
  if (finaleWahl === "null_behalten") {
    if (alignment.schatten >= 5 || alignment.chaos >= 5) return "ending_2_eminence";
    // Ending 4: Einsamer Wolf — Licht/Chaos
    if (alignment.licht >= 4) return "ending_4_einsamer_wolf";
    return "ending_2_eminence";
  }

  // Ending 3: Wahrer Held — Teil des Systems werden + Licht/Ordnung
  if (finaleWahl === "teil_werden") {
    if (alignment.licht >= 5 && alignment.ordnung >= 4) return "ending_3_wahrer_held";
    return "ending_3_wahrer_held";
  }

  // Fallback
  return "ending_3_wahrer_held";
}

// ─── HELPERS ────────────────────────────────────────────────────────────────
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function saveGame(state) {
  try {
    localStorage.setItem("reborn_save", JSON.stringify(state));
    return true;
  } catch(e) {
    return false;
  }
}

export function loadGame() {
  try {
    const saved = localStorage.getItem("reborn_save");
    return saved ? JSON.parse(saved) : null;
  } catch(e) {
    return null;
  }
}

export function deleteSave() {
  localStorage.removeItem("reborn_save");
}

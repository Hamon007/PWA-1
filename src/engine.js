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
      // Helden (Akt III+)
      akira: 0,
      emma: 0,
      dmitri: 0,
      yuki: 0,
      // Sonstige
      marcus: 0,     // Verräter — beginnt neutral
      veyra: 0,
      aria: 0,
      gorrick: 0,
      lilithia: 0,
      varkos: 0,
      elena_akt: 0,  // alias falls benötigt
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
      codeRead: true,         // von Anfang an
      codeAnalyze: false,     // Akt I Ende
      codeSpoof: false,       // Akt II
      wildeMagie: false,      // Akt II
      ghostStep: false,       // Akt IV
      voidStrike: false,      // Akt IV
      codeModify: false,      // Akt III (eingeschränkt) → vollständig Akt VI
      codeCreate: false,      // nur Akt VI Kern
      // Erweiterte Skills (Akt III-V)
      aetherResonance: false, // Akt II/III
      codeCopy: false,        // Akt III
      codeDisrupt: false,     // Akt IV
      aetherBlade: false,     // Akt IV
      systemScan: false,      // Akt III
      systemBackdoor: false,  // Akt VI
    },

    // UI-State
    textPhase: 1,
    showChoices: false,
    phasesDone: false,
    instant: false,
    transitioning: false,

    // Language
    language: 'en',  // 'de' | 'en'
  };
}

// ─── LANGUAGE HELPERS ────────────────────────────────────────────────────────
export function applyLanguage(node, lang, translations) {
  if (lang === 'de' || !translations) return node;
  const t = translations[node._id] || translations[Object.keys(node)[0]];
  if (!t) return node;
  const merged = { ...node };
  // Overlay all text fields
  ['text','text2','text3','text4','title','chapter','scene'].forEach(f => {
    if (t[f] !== undefined) merged[f] = t[f];
  });
  // Choices
  if (t.choices && node.choices) {
    merged.choices = node.choices.map((c, i) => {
      const tc = t.choices[i];
      if (!tc) return c;
      return { ...c,
        text: tc.text || c.text,
        narrativeFeedback: tc.narrativeFeedback || c.narrativeFeedback,
      };
    });
  }
  // textConditional
  if (t.textConditional) {
    merged.textConditional = { ...node.textConditional, ...t.textConditional };
  }
  // systemBox
  if (t.systemBox) {
    merged.systemBox = t.systemBox;
  }
  return merged;
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
  const { alignment, flags } = state;
  const w = flags.finaleWahl;  // "A"|"B"|"C"|"D"|"E"|"F"

  // ── WAHL-MAPPING ─────────────────────────────────────────────────────────
  // A = Teil des Systems werden  → Ending 3 oder 4
  // B = NULL behalten            → Ending 2 oder 1
  // C = NULL für alle            → Ending 7
  // D = Zurück                   → Ending 6
  // E = Verschmelzen             → Ending 1
  // F = Zerstören                → Ending 5

  // Ending 6: Rückkehr
  if (w === "D") return "ending_6";

  // Ending 5: Void-Dämonenkönig (nur bei hohem Schatten)
  if (w === "F") return "ending_5";

  // Ending 7: System Delete
  if (w === "C") return "ending_7";

  // Ending 1: Der neue Gott — Verschmelzung
  if (w === "E") return "ending_1";

  // Wahl B: NULL behalten → Schatten = Eminence, Licht = Einsamer Wolf
  if (w === "B") {
    if (alignment.licht > alignment.schatten) return "ending_4";
    return "ending_2";
  }

  // Wahl A: Teil des Systems → Licht+Ordnung = Wahrer Held, sonst Einsamer Wolf
  if (w === "A") {
    if (alignment.licht >= 4 && alignment.ordnung >= 3) return "ending_3";
    return "ending_4";
  }

  // Fallback — sollte nie erreicht werden
  return "ending_3";
}

// ─── HELPERS ────────────────────────────────────────────────────────────────
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// ─── MULTI-SLOT SAVE SYSTEM ─────────────────────────────────────────────────
const SAVE_PREFIX = "reborn_save_";
const AUTOSAVE_KEY = "reborn_autosave";
const MAX_SLOTS = 5;

export function saveGame(state, slot = 1) {
  try {
    const data = {
      state,
      timestamp: Date.now(),
      nodeTitle: state.nodeTitle || "",
      sceneCount: state.history?.length || 0,
    };
    localStorage.setItem(SAVE_PREFIX + slot, JSON.stringify(data));
    return true;
  } catch(e) { return false; }
}

export function loadGame(slot = 1) {
  try {
    const raw = localStorage.getItem(SAVE_PREFIX + slot);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return data.state || data; // backward compat
  } catch(e) { return null; }
}

export function autosave(state) {
  try {
    localStorage.setItem(AUTOSAVE_KEY, JSON.stringify({
      state, timestamp: Date.now(), auto: true,
      nodeTitle: state.nodeTitle || "", sceneCount: state.history?.length || 0,
    }));
  } catch(e) {}
}

export function loadAutosave() {
  try {
    const raw = localStorage.getItem(AUTOSAVE_KEY);
    return raw ? JSON.parse(raw).state : null;
  } catch(e) { return null; }
}

export function getAllSaves() {
  const slots = [];
  for (let i = 1; i <= MAX_SLOTS; i++) {
    try {
      const raw = localStorage.getItem(SAVE_PREFIX + i);
      if (raw) {
        const data = JSON.parse(raw);
        slots.push({ slot: i, timestamp: data.timestamp, nodeTitle: data.nodeTitle || "...",
          sceneCount: data.sceneCount || 0, exists: true });
      } else {
        slots.push({ slot: i, exists: false });
      }
    } catch(e) { slots.push({ slot: i, exists: false }); }
  }
  // Autosave
  try {
    const raw = localStorage.getItem(AUTOSAVE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      slots.unshift({ slot: 0, timestamp: data.timestamp, nodeTitle: data.nodeTitle || "...",
        sceneCount: data.sceneCount || 0, exists: true, auto: true });
    }
  } catch(e) {}
  return slots;
}

export function deleteSave(slot = null) {
  if (slot === null) {
    for (let i = 1; i <= MAX_SLOTS; i++) localStorage.removeItem(SAVE_PREFIX + i);
    localStorage.removeItem(AUTOSAVE_KEY);
  } else if (slot === 0) {
    localStorage.removeItem(AUTOSAVE_KEY);
  } else {
    localStorage.removeItem(SAVE_PREFIX + slot);
  }
}

export function hasSave() {
  for (let i = 1; i <= MAX_SLOTS; i++) {
    if (localStorage.getItem(SAVE_PREFIX + i)) return true;
  }
  return !!localStorage.getItem(AUTOSAVE_KEY);
}

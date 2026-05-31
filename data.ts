export interface VerbConjugation {
  pronounSp: string;
  pronounHy: string;
  conjugatedIr: string;
  exampleSp: string;
  exampleHy: string;
}

export interface ReadingSentence {
  id: number;
  spanish: string;
  armenian: string;
  grammarTip?: string;
}

export interface Game1MatchPair {
  id: string;
  pronoun: string;
  armenian: string;
  correctIrA: string;
}

export interface Game2ReadTranslate {
  id: number;
  spanishText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Game3FillInBlank {
  id: number;
  armenianPrompt: string;
  spanishTextBefore: string;
  spanishTextAfter: string;
  correctAnswer: string;
  options: string[];
}

export interface Game4Infinitive {
  id: number;
  armenian: string;
  spanish: string;
  options: string[];
}

export interface Game5TrueFalse {
  id: number;
  spanish: string;
  armenian: string;
  isCorrect: boolean;
  explanation: string;
}

export interface Game6FutureFinder {
  id: number;
  armenianPrompt: string;
  correctAnswer: string;
  options: string[];
}

// ----------------------------------------------------
// THEORY & CONJUGATION DATA
// ----------------------------------------------------
export const irConjugations: VerbConjugation[] = [
  {
    pronounSp: "Yo",
    pronounHy: "Ես",
    conjugatedIr: "voy",
    exampleSp: "Yo voy a estudiar.",
    exampleHy: "Ես սովորելու եմ։"
  },
  {
    pronounSp: "Tú",
    pronounHy: "Դու",
    conjugatedIr: "vas",
    exampleSp: "Tú vas a comer.",
    exampleHy: "Դու ուտելու ես։"
  },
  {
    pronounSp: "Él / Ella / Usted",
    pronounHy: "Նա (արական/իգական) / Դուք (հարգալից)",
    conjugatedIr: "va",
    exampleSp: "Él va a caminar / Usted va a descansar.",
    exampleHy: "Նա զբոսնելու է / Դուք հանգստանալու եք։"
  },
  {
    pronounSp: "Nosotros / Nosotras",
    pronounHy: "Մենք",
    conjugatedIr: "vamos",
    exampleSp: "Nosotros vamos a estudiar.",
    exampleHy: "Մենք սովորելու ենք։"
  },
  {
    pronounSp: "Vosotros / Vosotras",
    pronounHy: "Դուք",
    conjugatedIr: "vais",
    exampleSp: "Vosotros vais a ir al parque.",
    exampleHy: "Դուք գնալու եք այգի։"
  },
  {
    pronounSp: "Ellos / Ellas / Ustedes",
    pronounHy: "Նրանք / Դուք (հոգնակի, հարգալից)",
    conjugatedIr: "van",
    exampleSp: "Ellos van a escribir frases.",
    exampleHy: "Նրանք նախադասություններ են գրելու։"
  }
];

// ----------------------------------------------------
// READING TEXT SENTENCES
// ----------------------------------------------------
export const readingSentences: ReadingSentence[] = [
  {
    id: 1,
    spanish: "Mañana voy a tener un día especial.",
    armenian: "Վաղը ես հատուկ օր եմ ունենալու։",
    grammarTip: "voy a tener - ես ունենալու եմ (tener = ունենալ)"
  },
  {
    id: 2,
    spanish: "Mañana voy a levantarme a las siete.",
    armenian: "Վաղը ես արթնանալու եմ ժամը յոթին։",
    grammarTip: "voy a levantarme - ես արթնանալու եմ (levantar + me)"
  },
  {
    id: 3,
    spanish: "Después voy a desayunar con mi familia.",
    armenian: "Հետո ես նախաճաշելու եմ ընտանիքիս հետ։",
    grammarTip: "voy a desayunar - ես նախաճաշելու եմ (desayunar = նախաճաշել)"
  },
  {
    id: 4,
    spanish: "Voy a tomar té y voy a comer pan con queso.",
    armenian: "Ես թեյ եմ խմելու և հաց եմ ուտելու պանրով։",
    grammarTip: "voy a tomar / voy a comer - խմելու եմ / ուտելու եմ (tomar = խմել/վերցնել, comer = ուտել)"
  },
  {
    id: 5,
    spanish: "Luego voy a estudiar español en casa.",
    armenian: "Հետո ես իսպաներեն եմ սովորելու տանը։",
    grammarTip: "voy a estudiar - սովորելու եմ (estudiar = սովորել)"
  },
  {
    id: 6,
    spanish: "Voy a leer un texto fácil y voy a escribir frases nuevas.",
    armenian: "Ես կարդալու եմ հեշտ տեքստ և գրելու եմ նոր նախադասություններ։",
    grammarTip: "voy a leer / voy a escribir - կարդալու եմ / գրելու եմ (leer = կարդալ, escribir = գրել)"
  },
  {
    id: 7,
    spanish: "Por la tarde voy a ir al parque con Lucía.",
    armenian: "Կեսօրից հետո ես գնալու եմ այգի Լուսիայի հետ։",
    grammarTip: "voy a ir - գնալու եմ (ir = գնալ)"
  },
  {
    id: 8,
    spanish: "Vamos a caminar y vamos a hablar en español.",
    armenian: "Մենք զբոսնելու ենք և խոսելու ենք իսպաներեն։",
    grammarTip: "vamos a caminar / vamos a hablar - զբոսնելու ենք / խոսելու ենք (caminar = զբոսնել, hablar = խոսել)"
  },
  {
    id: 9,
    spanish: "Después vamos a comprar un helado.",
    armenian: "Հետո մենք պաղպաղակ ենք գնելու։",
    grammarTip: "vamos a comprar - գնելու ենք (comprar = գնել, helado = պաղպաղակ)"
  },
  {
    id: 10,
    spanish: "Por la noche voy a volver a casa.",
    armenian: "Երեկոյան ես վերադառնալու եմ տուն։",
    grammarTip: "voy a volver - վերադառնալու եմ (volver = վերադառնալ)"
  },
  {
    id: 11,
    spanish: "Voy a cenar, voy a descansar y voy a ver una película.",
    armenian: "Ես ընթրելու եմ, հանգստանալու եմ և ֆիլմ եմ դիտելու։",
    grammarTip: "voy a cenar / descansar / ver - ընթրելու եմ / հանգստանալու եմ / դիտելու եմ (cenar = ընթրել, descansar = հանգստանալ, ver = դիտել, տեսնել)"
  },
  {
    id: 12,
    spanish: "Creo que mañana va a ser un día muy bonito.",
    armenian: "Կարծում եմ՝ վաղը շատ գեղեցիկ օր է լինելու։",
    grammarTip: "va a ser - լինելու է (ser = լինել, bonito = գեղեցիկ)"
  }
];

// ----------------------------------------------------
// GAME 1: CONJUGATION MATCHING
// ----------------------------------------------------
export const game1Pronouns: Game1MatchPair[] = [
  { id: "p1", pronoun: "Yo (Ես)", armenian: "Ես", correctIrA: "voy a" },
  { id: "p2", pronoun: "Tú (Դու)", armenian: "Դու", correctIrA: "vas a" },
  { id: "p3", pronoun: "Él / Ella (Նա)", armenian: "Նա", correctIrA: "va a" },
  { id: "p4", pronoun: "Nosotros (Մենք)", armenian: "Մենք", correctIrA: "vamos a" },
  { id: "p5", pronoun: "Vosotros (Դուք)", armenian: "Դուք", correctIrA: "vais a" },
  { id: "p6", pronoun: "Ellos / Ellas (Նրանք)", armenian: "Նրանք", correctIrA: "van a" }
];

export const game1Targets = ["voy a", "vas a", "va a", "vamos a", "vais a", "van a"];

// ----------------------------------------------------
// GAME 2: READ AND TRANSLATE (A1 LEVEL)
// ----------------------------------------------------
export const game2ReadTranslate: Game2ReadTranslate[] = [
  {
    id: 1,
    spanishText: "Este fin de semana voy a visitar a mis abuelos. Vamos a comer una cena deliciosa juntos y luego vamos a ver una película interesante.",
    options: [
      "Այս հանգստյան օրերին ես պատրաստվում եմ այցելել տատիկիս ու պապիկիս։ Մենք միասին համեղ ընթրիք ենք ուտելու, իսկ հետո դիտելու ենք հետաքրքիր ֆիլմ։",
      "Վաղը ես գնալու եմ այգի տատիկիս հետ։ Մենք սուրճ ենք խմելու և խոսելու ենք ընտանիքի մասին և ֆիլմ ենք ընտրելու։",
      "Այս շաբաթ ես պետք է օգնեմ ծնողներիս։ Նրանք պատրաստվում են մեկնել Մադրիդ և հետաքրքիր ֆիլմ դիտել։"
    ],
    correctAnswer: "Այս հանգստյան օրերին ես պատրաստվում եմ այցելել տատիկիս ու պապիկիս։ Մենք միասին համեղ ընթրիք ենք ուտելու, իսկ հետո դիտելու ենք հետաքրքիր ֆիլմ։",
    explanation: "«Este fin de semana» = Այս հանգստյան օրերին, «voy a visitar» = պատրաստվում եմ այցելել, «vamos a comer» = ուտելու ենք, «vamos a ver» = դիտելու ենք։"
  },
  {
    id: 2,
    spanishText: "María va a viajar a España el próximo mes. Ella va a aprender español en una escuela de Madrid y va a vivir con una familia local.",
    options: [
      "Մարիան արդեն ապրում է Իսպանիայում։ Նա վաղուց սովորում է Մադրիդի դպրոցում իր ընտանիքի հետ։",
      "Մարիան պատրաստվում է վաճառել իր տունը Իսպանիայում և հաջորդ շաբաթ տեղափոխվելու է Մադրիդ։",
      "Մարիան հաջորդ ամիս մեկնելու է Իսպանիա։ Նա Մադրիդի դպրոցում իսպաներեն է սովորելու և ապրելու է տեղացի ընտանիքի հետ։"
    ],
    correctAnswer: "Մարիան հաջորդ ամիս մեկնելու է Իսպանիա։ Նա Մադրիդի դպրոցում իսպաներեն է սովորելու և ապրելու է տեղացի ընտանիքի հետ։",
    explanation: "«va a viajar» = մեկնելու է (ճանապարհորդելու է), «el próximo mes» = հաջորդ ամիս, «va a aprender» = սովորելու է, «va a vivir» = ապրելու է։"
  },
  {
    id: 3,
    spanishText: "Mis amigos van a jugar al fútbol esta tarde en el parque. Después van a comprar unas bebidas frías y van a descansar en la hierba.",
    options: [
      "Ընկերներս այսօր կեսօրից հետո ֆուտբոլ են խաղալու այգում։ Հետո նրանք սառը ըմպելիքներ են գնելու և հանգստանալու են խոտերի վրա։",
      "Ընկերներս այսօր առավոտյան ֆուտբոլ խաղացին և հետո հոգնած տուն վերադարձան։",
      "Ընկերներս պատրաստվում են պաղպաղակ գնել և այգու սրճարանում զբոսնել ամբողջ գիշեր։"
    ],
    correctAnswer: "Ընկերներս այսօր կեսօրից հետո ֆուտբոլ են խաղալու այգում։ Հետո նրանք սառը ըմպելիքներ են գնելու և հանգստանալու են խոտերի վրա։",
    explanation: "«van a jugar» = խաղալու են, «esta tarde» = այսօր կեսօրից հետո, «van a comprar» = գնելու են, «van a descansar» = հանգստանալու են։"
  },
  {
    id: 4,
    spanishText: "Mañana tengo un examen importante. Hoy por la noche voy a estudiar mucho, no voy a ver la televisión y voy a dormir temprano.",
    options: [
      "Հաջորդ շաբաթ իմ քննություններն են։ Այսօր ես հանգստանալու եմ, հեռուստացույց եմ դիտելու և ուշ եմ քնելու։",
      "Վաղը ես կարևոր քննություն ունեմ։ Այսօր երեկոյան ես շատ եմ սովորելու, չեմ դիտելու հեռուստացույց և վաղ եմ քնելու։",
      "Ես սիրում եմ քննություններ հանձնել։ Վաղը ես տանը իսպաներեն եմ սովորելու և հեռուստացույցով ֆիլմ եմ դիտելու։"
    ],
    correctAnswer: "Վաղը ես կարևոր քննություն ունեմ։ Այսօր երեկոյան ես շատ եմ սովորելու, չեմ դիտելու հեռուստացույց և վաղ եմ քնելու։",
    explanation: "«voy a estudiar» = սովորելու եմ, «no voy a ver» = չեմ դիտելու (ժխտում), «voy a dormir» = քնելու եմ։"
  },
  {
    id: 5,
    spanishText: "En verano nosotros vamos a ir a la playa. Yo voy a nadar en el mar caliente y mi hermano va a leer un libro fantástico.",
    options: [
      "Ամռանը մենք գնալու ենք սարեր։ Ես քայլելու եմ անտառում, իսկ եղբայրս գիրք է կարդալու։",
      "Մենք արդեն լողափում ենք։ Ես լողում եմ ծովում, իսկ եղբայրս նկարում է գեղեցիկ տեսարանը։",
      "Ամռանը մենք գնալու ենք լողափ։ Ես լողալու եմ տաք ծովում, իսկ եղբայրս կարդալու է ֆանտաստիկ մի գիրք։"
    ],
    correctAnswer: "Ամռանը մենք գնալու ենք լողափ։ Ես լողալու եմ տաք ծովում, իսկ եղբայրս կարդալու է ֆանտաստիկ մի գիրք։",
    explanation: "«vamos a ir» = գնալու ենք, «voy a nadar» = լողալու եմ (nadar = լողալ), «va a leer» = կարդալու է (leer = կարդալ)։"
  }
];

// ----------------------------------------------------
// GAME 3: FILL IN THE BLANK
// ----------------------------------------------------
export const game3Questions: Game3FillInBlank[] = [
  {
    id: 1,
    armenianPrompt: "Հետո ես նախաճաշելու եմ ընտանիքիս հետ։",
    spanishTextBefore: "Después ",
    spanishTextAfter: " a desayunar con mi familia.",
    correctAnswer: "voy",
    options: ["voy", "vas", "va", "vamos"]
  },
  {
    id: 2,
    armenianPrompt: "Մենք պաղպաղակ ենք գնելու։",
    spanishTextBefore: "Después vamos ",
    spanishTextAfter: " comprar un helado.",
    correctAnswer: "a",
    options: ["a", "de", "con", "en"]
  },
  {
    id: 3,
    armenianPrompt: "Կարծում եմ՝ վաղը շատ գեղեցիկ օր է լինելու։",
    spanishTextBefore: "Creo que mañana ",
    spanishTextAfter: " a ser un día muy bonito.",
    correctAnswer: "va",
    options: ["va", "voy", "van", "vamos"]
  },
  {
    id: 4,
    armenianPrompt: "Ես կարդալու եմ հեշտ տեքստ։",
    spanishTextBefore: "Voy a ",
    spanishTextAfter: " un texto fácil.",
    correctAnswer: "leer",
    options: ["leer", "escribir", "comer", "caminar"]
  },
  {
    id: 5,
    armenianPrompt: "Դուք գնալու եք այգի։",
    spanishTextBefore: "Vosotros ",
    spanishTextAfter: " a ir al parque.",
    correctAnswer: "vais",
    options: ["vais", "van", "vamos", "vas"]
  }
];

// ----------------------------------------------------
// GAME 4: INFINITIVES VOCAB MATCH
// ----------------------------------------------------
export const game4Questions: Game4Infinitive[] = [
  {
    id: 1,
    armenian: "Մաքուր անորոշ բայ՝ արթնանալ",
    spanish: "levantarse",
    options: ["levantarse", "despertarse", "desayunar", "cenar"]
  },
  {
    id: 2,
    armenian: "նախաճաշել",
    spanish: "desayunar",
    options: ["desayunar", "comer", "cenar", "tomar"]
  },
  {
    id: 3,
    armenian: "խմել / վերցնել",
    spanish: "tomar",
    options: ["tomar", "comer", "escribir", "leer"]
  },
  {
    id: 4,
    armenian: "կարդալ",
    spanish: "leer",
    options: ["leer", "escribir", "ver", "estudiar"]
  },
  {
    id: 5,
    armenian: "գրել",
    spanish: "escribir",
    options: ["escribir", "leer", "hablar", "caminar"]
  },
  {
    id: 6,
    armenian: "զբոսնել",
    spanish: "caminar",
    options: ["caminar", "ir", "volver", "descansar"]
  },
  {
    id: 7,
    armenian: "գնել",
    spanish: "comprar",
    options: ["comprar", "comer", "ser", "ver"]
  },
  {
    id: 8,
    armenian: "վերադառնալ",
    spanish: "volver",
    options: ["volver", "ir", "estudiar", "desayunar"]
  },
  {
    id: 9,
    armenian: "հանգստանալ",
    spanish: "descansar",
    options: ["descansar", "cenar", "ser", "caminar"]
  },
  {
    id: 10,
    armenian: "դիտել / տեսնել",
    spanish: "ver",
    options: ["ver", "leer", "estudiar", "hablar"]
  }
];

// ----------------------------------------------------
// GAME 5: TRUE OR FALSE
// ----------------------------------------------------
export const game5Questions: Game5TrueFalse[] = [
  {
    id: 1,
    spanish: "Mañana voy a levantarme a las siete.",
    armenian: "Վաղը ես արթնանալու եմ ժամը յոթին։",
    isCorrect: true,
    explanation: "՛Voy a levantarme՛ նշանակում է ՛ես արթնանալու եմ՛, իսկ ՛a las siete՛՝ ՛ժամը յոթին՛։"
  },
  {
    id: 2,
    spanish: "Después voy a desayunar con mi familia.",
    armenian: "Հետո ես ընթրելու եմ ընկերներիս հետ։",
    isCorrect: false,
    explanation: "Սխալ է։ ՛desayunar՛ նշանակում է ՛նախաճաշել՛ (ոչ թե ընթրել), իսկ ՛con mi familia՛՝ ՛ընտանիքիս հետ՛։"
  },
  {
    id: 3,
    spanish: "Vamos a caminar y vamos a hablar en español.",
    armenian: "Մենք զբոսնելու ենք և խոսելու ենք իսպաներեն։",
    isCorrect: true,
    explanation: "Ճիշտ է։ ՛Vamos a caminar՛ = ՛մենք զբոսնելու ենք՛, ՛hablar en español՛ = ՛խոսել իսպաներեն՛։"
  },
  {
    id: 4,
    spanish: "Por la noche voy a volver a casa.",
    armenian: "Կեսօրին ես գնալու եմ այգի։",
    isCorrect: false,
    explanation: "Սխալ է։ ՛Por la noche՛ նշանակում է ՛երեկոյան՛, իսկ ՛volver a casa՛՝ ՛վերադառնալ տուն՛։"
  },
  {
    id: 5,
    spanish: "Creo que mañana va a ser un día muy bonito.",
    armenian: "Կարծում եմ՝ վաղը շատ գեղեցիկ օր է լինելու։",
    isCorrect: true,
    explanation: "Ճիշտ է։ ՛va a ser՛ = ՛լինելու է՛, ՛día muy bonito՛ = ՛շատ գեղեցիկ օր՛։"
  },
  {
    id: 6,
    spanish: "Luego voy a estudiar español en casa.",
    armenian: "Հետո ես թեյ եմ խմելու և հաց եմ ուտելու։",
    isCorrect: false,
    explanation: "Սխալ է։ ՛Voy a estudiar español en casa՛ նշանակում է ՛Հետո ես իսպաներեն եմ սովորելու տանը՛։"
  }
];

// ----------------------------------------------------
// GAME 6: SPEED CHANGER / FUTURE FINDER
// ----------------------------------------------------
export const game6Questions: Game6FutureFinder[] = [
  {
    id: 1,
    armenianPrompt: "Ես իսպաներեն եմ սովորելու։",
    correctAnswer: "Voy a estudiar español",
    options: [
      "Voy a estudiar español",
      "Voy estudiar español",
      "Vas a estudiar español",
      "Vamos a estudiar español"
    ]
  },
  {
    id: 2,
    armenianPrompt: "Մենք խոսելու ենք իսպաներեն։",
    correctAnswer: "Vamos a hablar en español",
    options: [
      "Vamos a hablar en español",
      "Vamos hablar en español",
      "Voy a hablar en español",
      "Vais a hablar en español"
    ]
  },
  {
    id: 3,
    armenianPrompt: "Դու արթնանալու ես ժամը յոթին։",
    correctAnswer: "Vas a levantarte a las siete",
    options: [
      "Vas a levantarte a las siete",
      "Voy a levantarme a las siete",
      "Vas levantarme a las siete",
      "Va a levantarse a las siete"
    ]
  },
  {
    id: 4,
    armenianPrompt: "Նրանք պաղպաղակ են գնելու։",
    correctAnswer: "Ellos van a comprar un helado",
    options: [
      "Ellos van a comprar un helado",
      "Ellos vamos a comprar un helado",
      "Ellos van comprar un helado",
      "Él va a comprar un helado"
    ]
  },
  {
    id: 5,
    armenianPrompt: "Դուք (հարգալից) հանգստանալու եք։",
    correctAnswer: "Usted va a descansar",
    options: [
      "Usted va a descansar",
      "Ustedes van a descansar",
      "Usted vas a descansar",
      "Tú vas a descansar"
    ]
  }
];

// ----------------------------------------------------
// MULTIPLAYER DUAL BATTLE QUESTIONS
// ----------------------------------------------------
export interface DuelQuestion {
  id: number;
  armenianPrompt: string;
  correctAnswer: string;
  options: string[];
}

export const duelQuestions: DuelQuestion[] = [
  {
    id: 1,
    armenianPrompt: "Ես նախաճաշելու եմ։",
    correctAnswer: "Voy a desayunar",
    options: ["Voy a desayunar", "Vamos a desayunar", "Vas a desayunar", "Voy desayunar"]
  },
  {
    id: 2,
    armenianPrompt: "Մենք պաղպաղակ ենք գնելու։",
    correctAnswer: "Vamos a comprar un helado",
    options: ["Vamos a comprar un helado", "Voy a comprar un helado", "Van a comprar un helado", "Vamos comprar un helado"]
  },
  {
    id: 3,
    armenianPrompt: "Նրանք վերադառնալու են տուն։",
    correctAnswer: "Ellos van a volver a casa",
    options: ["Ellos van a volver a casa", "Ellos va a volver a casa", "Ellos vamos a volver a casa", "Ustedes van volver a casa"]
  },
  {
    id: 4,
    armenianPrompt: "Վաղը լավ օր է լինելու։",
    correctAnswer: "Mañana va a ser un buen día",
    options: ["Mañana va a ser un buen día", "Mañana voy a ser un buen día", "Mañana van a ser un buen día", "Mañana va ser un buen día"]
  },
  {
    id: 5,
    armenianPrompt: "Դու ընթրելու ես։",
    correctAnswer: "Tú vas a cenar",
    options: ["Tú vas a cenar", "Yo voy a cenar", "Él va a cenar", "Tú vas cenar"]
  },
  {
    id: 6,
    armenianPrompt: "Մենք զբոսնելու ենք այգում։",
    correctAnswer: "Vamos a caminar en el parque",
    options: ["Vamos a caminar en el parque", "Vosotros vais a caminar en el parque", "Van a caminar en el parque", "Voy a caminar al parque"]
  },
  {
    id: 7,
    armenianPrompt: "Ես կարդալու եմ հեշտ տեքստ։",
    correctAnswer: "Voy a leer un texto fácil",
    options: ["Voy a leer un texto fácil", "Vas a leer un texto fácil", "Va a leer un texto fácil", "Voy leer unas textos fáciles"]
  },
  {
    id: 8,
    armenianPrompt: "Դուք (հոգնակի) իսպաներեն եք սովորելու։",
    correctAnswer: "Vosotros vais a estudiar español",
    options: ["Vosotros vais a estudiar español", "Ustedes van a estudiar español", "Nosotros vamos a estudiar español", "Vosotros vais estudiar español"]
  }
];

export interface TicTacToeQuestion {
  id: number;
  armenianPrompt: string;
  correctAnswer: string;
  options: string[];
}

export const ticTacToeQuestions: TicTacToeQuestion[] = [
  {
    id: 1,
    armenianPrompt: "Ես արթնանալու եմ (levantarme)",
    correctAnswer: "Voy a levantarme",
    options: ["Voy a levantarme", "Vas a levantarme", "Va a levantarme", "Voy levantarme"]
  },
  {
    id: 2,
    armenianPrompt: "Դու սովորելու ես (estudiar)",
    correctAnswer: "Vas a estudiar",
    options: ["Vas a estudiar", "Voy a estudiar", "Va a estudiar", "Vas estudiar"]
  },
  {
    id: 3,
    armenianPrompt: "Նա գրելու է (escribir)",
    correctAnswer: "Él va a escribir",
    options: ["Él va a escribir", "Él van a escribir", "Él vas a escribir", "Él va escribir"]
  },
  {
    id: 4,
    armenianPrompt: "Մենք ուտելու ենք (comer)",
    correctAnswer: "Vamos a comer",
    options: ["Vamos a comer", "Vais a comer", "Van a comer", "Vamos comer"]
  },
  {
    id: 5,
    armenianPrompt: "Դուք (Vosotros) խմելու եք (tomar)",
    correctAnswer: "Vosotros vais a tomar",
    options: ["Vosotros vais a tomar", "Vosotros van a tomar", "Vosotros vamos a tomar", "Vosotros vais tomar"]
  },
  {
    id: 6,
    armenianPrompt: "Նրանք տեսնելու են (ver)",
    correctAnswer: "Ellos van a ver",
    options: ["Ellos van a ver", "Ellos va a ver", "Ellos vamos a ver", "Ellos van ver"]
  },
  {
    id: 7,
    armenianPrompt: "Ես գնելու եմ (comprar)",
    correctAnswer: "Voy a comprar",
    options: ["Voy a comprar", "Vas a comprar", "Vamos a comprar", "Voy comprar"]
  },
  {
    id: 8,
    armenianPrompt: "Մենք հանգստանալու ենք (descansar)",
    correctAnswer: "Vamos a descansar",
    options: ["Vamos a descansar", "Vais a descansar", "Voy a descansar", "Vamos descansar"]
  },
  {
    id: 9,
    armenianPrompt: "Դու վերադառնալու ես (volver)",
    correctAnswer: "Vas a volver",
    options: ["Vas a volver", "Va a volver", "Voy a volver", "Vas volver"]
  }
];

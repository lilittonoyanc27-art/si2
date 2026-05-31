import React, { useState, useEffect } from "react";
import {
  game1Pronouns,
  game1Targets,
  game2ReadTranslate,
  game3Questions,
  game4Questions,
  game5Questions,
  game6Questions,
  Game1MatchPair,
  Game2ReadTranslate,
  Game3FillInBlank,
  Game4Infinitive,
  Game5TrueFalse,
  Game6FutureFinder,
} from "./data";
import {
  ArrowLeft,
  Trophy,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Award,
  Zap,
  Check,
  ShieldAlert,
} from "lucide-react";

export default function GamesList() {
  const [activeGameId, setActiveGameId] = useState<number | null>(null);

  // List of games metadata
  const gamesList = [
    {
      id: 1,
      title: "1. Կոնյուգացիայի միակցիչ",
      desc: "Միացրեք անձնական դերանունն իր համապատասխան 'ir a' ձևի հետ:",
      badge: "Հեշտ",
      color: "from-blue-500 to-cyan-500",
      icon: "🔗",
    },
    {
      id: 2,
      title: "2. Ընթերցանություն և Թարգմանություն",
      desc: "Կարդացեք A1 մակարդակի կարճ տեքստերն իսպաներենով և ընտրեք դրանց ճշգրիտ հայերեն թարգմանությունը:",
      badge: "Հեշտ",
      color: "from-purple-500 to-indigo-500",
      icon: "📖",
    },
    {
      id: 3,
      title: "3. Լրացրու բացթողումները",
      desc: "Ընտրեք ճիշտ բառը՝ նախադասության դատարկ վանդակը լրացնելու համար:",
      badge: "Հեշտ",
      color: "from-teal-500 to-emerald-500",
      icon: "✍️",
    },
    {
      id: 4,
      title: "4. Բայի անորոշ ձևերի վիկտորինա",
      desc: "Գտեք հայերեն ապառնի բայի համապատասխան իսպաներեն անորոշ (infinitive) ձևը:",
      badge: "Միջին",
      color: "from-pink-500 to-rose-500",
      icon: "📖",
    },
    {
      id: 5,
      title: "5. Ճիշտ է, թե Սխալ",
      desc: "Ստուգեք, թե արդյոք թարգմանությունը համապատասխանում է տրված իսպաներեն նախադասությանը:",
      badge: "Հեշտ",
      color: "from-amber-500 to-orange-500",
      icon: "⚖️",
    },
    {
      id: 6,
      title: "6. Ապառնիի Որոնում / Արագ վիկտորինա",
      desc: "Ընտրեք միակ ճիշտ քերականական կառույցը 4 տարբերակներից:",
      badge: "Փորձագետ",
      color: "from-red-500 to-rose-600",
      icon: "🚀",
    },
  ];

  if (activeGameId !== null) {
    return (
      <div>
        <button
          onClick={() => setActiveGameId(null)}
          className="flex items-center gap-2 mb-6 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm rounded-xl shadow-sm transition-all float-left"
          id="btn-back-to-games"
        >
          <ArrowLeft size={16} /> Վերադառնալ խաղերի ցանկ
        </button>
        <div className="clear-both" />

        {activeGameId === 1 && <Game1Conjugation />}
        {activeGameId === 2 && <Game2ReadAndTranslate />}
        {activeGameId === 3 && <Game3FillInBlankView />}
        {activeGameId === 4 && <Game4Infinitives />}
        {activeGameId === 5 && <Game5TrueFalseView />}
        {activeGameId === 6 && <Game6FutureFinderView />}
      </div>
    );
  }

  return (
    <div id="games-selection-container" className="space-y-6 max-w-5xl mx-auto p-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            🏆 Ինքնաստուգման Անհատական 6 Խաղեր
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Յուրաքանչյուր խաղ կօգնի ձեզ կատարելագործել իսպաներենի ապառնի ժամանակաձևի տարբեր կողմերը։
          </p>
        </div>
      </div>

      {/* Grid List of Games */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gamesList.map((game) => (
          <div
            key={game.id}
            id={`game-selection-card-${game.id}`}
            onClick={() => setActiveGameId(game.id)}
            className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">{game.icon}</span>
                <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                  {game.badge}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                {game.title}
              </h3>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                {game.desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-150 flex items-center justify-between text-xs font-semibold text-slate-600 animate-pulse">
              <span>Սկսել խաղալ</span>
              <span className="text-indigo-600 group-hover:translate-x-1.5 transition-transform">
                ➡️
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// GAME 1: CONJUGATION LINKER
// ============================================================================
function Game1Conjugation() {
  const [selectedLeft, setSelectedLeft] = useState<Game1MatchPair | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [completedPairs, setCompletedPairs] = useState<string[]>([]); // stores match left ID matches
  const [score, setScore] = useState(0);
  const [wrongAnimation, setWrongAnimation] = useState<boolean>(false);
  const [isWon, setIsWon] = useState(false);

  // Keep static randomized right options on load
  const [shuffledTargets, setShuffledTargets] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle Target array
    const shuffled = [...game1Targets].sort(() => Math.random() - 0.5);
    setShuffledTargets(shuffled);
    resetGame();
  }, []);

  const resetGame = () => {
    setCompletedPairs([]);
    setSelectedLeft(null);
    setSelectedRight(null);
    setIsWon(false);
    setScore(0);
  };

  const handleLeftClick = (item: Game1MatchPair) => {
    if (completedPairs.includes(item.id)) return;
    setSelectedLeft(item);

    // If both are selected, process match
    if (selectedRight) {
      checkMatch(item, selectedRight);
    }
  };

  const handleRightClick = (target: string) => {
    // Check if target is already used by a completed pair
    const targetUsed = game1Pronouns.some(
      (p) => completedPairs.includes(p.id) && p.correctIrA === target
    );
    if (targetUsed) return;

    setSelectedRight(target);

    // If both are selected, process match
    if (selectedLeft) {
      checkMatch(selectedLeft, target);
    }
  };

  const checkMatch = (left: Game1MatchPair, right: string) => {
    if (left.correctIrA === right) {
      // CORRECT MATCH
      setCompletedPairs([...completedPairs, left.id]);
      setScore(score + 15);
      setSelectedLeft(null);
      setSelectedRight(null);

      if (completedPairs.length + 1 === game1Pronouns.length) {
        setIsWon(true);
      }
    } else {
      // INCORRECT MATCH
      setWrongAnimation(true);
      setScore(Math.max(0, score - 5));
      setTimeout(() => {
        setWrongAnimation(false);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 800);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-1 rounded">Կոնյուգացիա</span>
          <h3 className="text-lg font-bold text-slate-800 mt-1">Conjugation Connector</h3>
        </div>
        <div className="text-right">
          <span className="text-slate-500 text-xs">Միավորներ՝</span>
          <div className="text-lg font-bold text-slate-800">{score}</div>
        </div>
      </div>

      <p className="text-xs text-slate-600 mb-6 bg-slate-50 p-2.5 rounded-lg border border-slate-150">
        📌 <b>Ինչպե՞ս խաղալ.</b> Կտտացրեք ձախ սյունակի դերանվան վրա, ապա աջ սյունակի համապատասխան <b>ir a</b> խոնարհման վրա:
      </p>

      {isWon ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
            <Trophy size={36} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">Շնորհավորո՛ւմ ենք: 🎉</h4>
          <p className="text-sm text-slate-600">
            Դուք հաջողությամբ վերականգնեցիք ապառնի բայի բոլոր խոնարհումները:
          </p>
          <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg max-w-xs mx-auto text-sm font-semibold text-slate-700">
            Վաստակած միավորներ՝ <span className="text-sky-600 text-base">{score}</span>
          </div>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-sm font-medium transition-all shadow-sm"
          >
            Խաղալ նորից
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 relative">
          {/* Left Column - Pronouns */}
          <div className="space-y-3">
            <div className="text-center text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
              Դերանուններ
            </div>
            {game1Pronouns.map((item) => {
              const isMatched = completedPairs.includes(item.id);
              const isSelected = selectedLeft?.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLeftClick(item)}
                  disabled={isMatched}
                  className={`w-full p-3 text-left rounded-xl border text-sm font-medium transition-all h-[52px] flex items-center justify-between ${
                    isMatched
                      ? "bg-emerald-50 border-emerald-300 text-emerald-800 cursor-not-allowed opacity-80"
                      : isSelected
                      ? "bg-sky-500 border-sky-600 text-white shadow-md transform translate-x-1"
                      : wrongAnimation && isSelected
                      ? "bg-rose-100 border-rose-400 text-rose-800 animate-shake"
                      : "bg-slate-50 hover:bg-white border-slate-250 hover:border-sky-300 text-slate-700 hover:shadow-sm"
                  }`}
                >
                  <span className="truncate">{item.pronoun}</span>
                  {isMatched && <Check size={16} />}
                </button>
              );
            })}
          </div>

          {/* Right Column - Conjugated ir a */}
          <div className="space-y-3">
            <div className="text-center text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
              Ir + A Ձևերը
            </div>
            {shuffledTargets.map((target) => {
              const matchedPair = game1Pronouns.find(
                (p) => p.correctIrA === target && completedPairs.includes(p.id)
              );
              const isMatched = !!matchedPair;
              const isSelected = selectedRight === target;

              return (
                <button
                  key={target}
                  onClick={() => handleRightClick(target)}
                  disabled={isMatched}
                  className={`w-full p-3 font-mono text-center rounded-xl border text-sm font-bold transition-all h-[52px] flex items-center justify-center ${
                    isMatched
                      ? "bg-emerald-50 border-emerald-300 text-emerald-800 cursor-not-allowed opacity-80"
                      : isSelected
                      ? "bg-sky-500 border-sky-600 text-white shadow-md transform -translate-x-1"
                      : "bg-slate-50 hover:bg-white border-slate-250 hover:border-sky-300 text-slate-700 hover:shadow-sm"
                  }`}
                >
                  <span>{target}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// GAME 2: READ AND TRANSLATE (A1 LEVEL)
// ============================================================================
function Game2ReadAndTranslate() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuest: Game2ReadTranslate = game2ReadTranslate[currentIdx];

  const handleOptionClick = (opt: string) => {
    if (checked) return;
    setSelectedOpt(opt);
  };

  const handleCheck = () => {
    if (!selectedOpt) return;
    setChecked(true);
    if (selectedOpt === currentQuest.correctAnswer) {
      setScore(score + 20);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setChecked(false);
    if (currentIdx + 1 < game2ReadTranslate.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOpt(null);
    setChecked(false);
    setIsFinished(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">A1 Ընթերցանություն</span>
          <h3 className="text-lg font-bold text-slate-800 mt-1">Read & Translate</h3>
        </div>
        <div className="text-right">
          <span className="text-slate-500 text-xs">Փուլ՝</span>
          <span className="text-slate-705 font-bold text-sm block">
            {currentIdx + 1} / {game2ReadTranslate.length}
          </span>
        </div>
      </div>

      {isFinished ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto">
            <Award size={36} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">Շրջափուլն ավարտվեց:</h4>
          <p className="text-sm text-slate-600">
            Դուք փայլուն կերպով թարգմանեցիք բոլոր իսպաներեն A1 հատվածները:
          </p>
          <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg max-w-xs mx-auto text-sm font-semibold text-slate-700">
            Վերջնական միավորներ՝ <span className="text-purple-600 text-base">{score}</span> / 100
          </div>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm"
          >
            Կրկնել խաղը
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Spanish A1 Text Card */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-indigo-150/80 relative space-y-2">
            <span className="text-[10px] text-indigo-500 font-bold uppercase block tracking-wider">
              🇪🇸 Իսպաներեն Տեքստ (A1 մակարդակ)՝
            </span>
            <p className="text-md font-mono font-medium text-slate-800 leading-relaxed bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
              « {currentQuest.spanishText} »
            </p>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">
              Ընտրեք ճիշտ հայերեն թարգմանությունը՝
            </span>
            <div className="space-y-2.5">
              {currentQuest.options.map((opt, idx) => {
                const isSelected = selectedOpt === opt;
                const isCorrectOpt = opt === currentQuest.correctAnswer;

                let btnBg = "bg-white border-slate-200 text-slate-750 hover:bg-slate-50 hover:border-slate-350";
                if (isSelected) {
                  btnBg = "bg-purple-600 border-purple-700 text-white shadow-md font-medium";
                }
                if (checked) {
                  if (isCorrectOpt) {
                    btnBg = "bg-emerald-100 border-emerald-400 text-emerald-800 font-semibold";
                  } else if (isSelected) {
                    btnBg = "bg-rose-100 border-rose-300 text-rose-800 line-through opacity-90";
                  } else {
                    btnBg = "bg-white border-slate-150 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    disabled={checked}
                    className={`w-full p-3.5 text-left text-xs md:text-sm rounded-xl border transition-all leading-relaxed ${btnBg}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation Alert Box */}
          {checked && (
            <div
              className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
                selectedOpt === currentQuest.correctAnswer
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-rose-50 border-rose-220 text-rose-800"
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {selectedOpt === currentQuest.correctAnswer ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
              </div>
              <div className="space-y-1">
                <p className="font-bold text-sm">
                  {selectedOpt === currentQuest.correctAnswer ? "Հրաշալի՛ է, լիովին ճիշտ է։ (+20 միավոր)" : "Սխալ թարգմանություն է։"}
                </p>
                <div className="text-xs space-y-1.5 leading-relaxed">
                  <p className="font-semibold text-slate-700">Բառապաշարի և քերականության վերլուծություն՝</p>
                  <p className="bg-white/80 p-2 rounded-lg border border-slate-100 italic">{currentQuest.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Action trigger footer */}
          <div className="flex justify-between items-center pt-2">
            <span className="text-slate-500 text-xs">
              Միավորներ՝ <b>{score}</b>
            </span>
            {!checked ? (
              <button
                onClick={handleCheck}
                disabled={!selectedOpt}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-xl text-sm font-semibold shadow-md transition-all active:scale-[0.98]"
              >
                Ստուգել
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-sm font-semibold shadow-md transition-all active:scale-[0.98]"
              >
                {currentIdx + 1 === game2ReadTranslate.length ? "Ավարտել" : "Հաջորդը ➡️"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// GAME 3: FILL IN THE BLANKS
// ============================================================================
function Game3FillInBlankView() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuest: Game3FillInBlank = game3Questions[currentIdx];

  const handleOptionClick = (opt: string) => {
    if (checked) return;
    setSelectedOpt(opt);
  };

  const handleCheck = () => {
    if (!selectedOpt) return;
    setChecked(true);
    if (selectedOpt === currentQuest.correctAnswer) {
      setScore(score + 20);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setChecked(false);
    if (currentIdx + 1 < game3Questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOpt(null);
    setChecked(false);
    setIsFinished(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Բացթողումներ</span>
          <h3 className="text-lg font-bold text-slate-800 mt-1">Fill in the Blanks</h3>
        </div>
        <div className="text-right">
          <span className="text-slate-500 text-xs">Փուլ՝</span>
          <span className="text-slate-700 font-bold text-sm block">
            {currentIdx + 1} / {game3Questions.length}
          </span>
        </div>
      </div>

      {isFinished ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <Trophy size={36} />
          </div>
          <h4 className="text-xl font-bold text-slate-800 font-sans">Փայլո՛ւն ավարտ։</h4>
          <p className="text-sm text-slate-600">
            Դուք լիարժեք տիրապետում եք նախադասություններում բաց թողնված դերերին։
          </p>
          <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg max-w-xs mx-auto text-sm font-semibold text-slate-700">
            Միավորների հանրագումարը՝ <span className="text-emerald-600 text-base">{score}</span> / 100
          </div>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm"
          >
            Կրկնել խաղը
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Armenian meaning hint */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-150 text-slate-755 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Թարգմանական հուշում՝</span>
            <p className="text-base font-semibold">{currentQuest.armenianPrompt}</p>
          </div>

          {/* Main Spanish Sentence with underscore blank space */}
          <div className="text-center py-6 border border-slate-150 bg-slate-50/20 rounded-xl">
            <div className="text-lg font-mono tracking-wide inline-flex items-center gap-1.5 flex-wrap justify-center">
              <span>{currentQuest.spanishTextBefore}</span>
              <span className="px-3.5 py-1 bg-amber-50 rounded-md border-b-2 border-dashed border-amber-400 font-bold text-amber-800 min-w-[70px] text-center">
                {selectedOpt ? selectedOpt : "___"}
              </span>
              <span>{currentQuest.spanishTextAfter}</span>
            </div>
          </div>

          {/* Selection buttons */}
          <div className="grid grid-cols-2 gap-3">
            {currentQuest.options.map((opt) => {
              const isSelected = selectedOpt === opt;
              const isCorrectOpt = opt === currentQuest.correctAnswer;

              let btnBg = "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300";
              if (isSelected) {
                btnBg = "bg-emerald-600 border-emerald-700 text-white shadow-md";
              }
              if (checked) {
                if (isCorrectOpt) {
                  btnBg = "bg-emerald-100 border-emerald-400 text-emerald-800 font-bold";
                } else if (isSelected) {
                  btnBg = "bg-rose-100 border-rose-300 text-rose-800 line-through";
                } else {
                  btnBg = "bg-white border-slate-150 text-slate-400 opacity-60";
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleOptionClick(opt)}
                  disabled={checked}
                  className={`p-3 text-center font-mono text-sm font-semibold rounded-xl border transition-all ${btnBg}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Verification Box */}
          {checked && (
            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              selectedOpt === currentQuest.correctAnswer
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-rose-50 border-rose-200 text-rose-800"
            }`}>
              <div className="mt-0.5">
                {selectedOpt === currentQuest.correctAnswer ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
              </div>
              <div>
                <p className="font-bold text-sm">
                  {selectedOpt === currentQuest.correctAnswer ? "Լիովին ճիշտ է։ (+20 միավոր)" : "Ոչ, սխալ տարբերակ է։"}
                </p>
                <p className="text-xs mt-1">
                  Ճիշտ պատասխանն է՝ <strong className="font-mono">{currentQuest.correctAnswer}</strong>.
                </p>
              </div>
            </div>
          )}

          {/* Footer Area */}
          <div className="flex justify-between items-center pt-2">
            <span className="text-slate-500 text-xs">
              Միավորներ՝ <b>{score}</b>
            </span>
            {!checked ? (
              <button
                onClick={handleCheck}
                disabled={!selectedOpt}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white rounded-xl text-sm font-semibold shadow-md transition-all"
              >
                Ստուգել
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-5 py-2 bg-slate-850 hover:bg-slate-900 text-white rounded-xl text-sm font-semibold shadow-md"
              >
                {currentIdx + 1 === game3Questions.length ? "Ավարտել" : "Հաջորդը ➡️"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// GAME 4: INFINITIVES VOCAB MATCH
// ============================================================================
function Game4Infinitives() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuest: Game4Infinitive = game4Questions[currentIdx];

  const handleOptionClick = (opt: string) => {
    if (checked) return;
    setSelectedOpt(opt);
  };

  const handleCheck = () => {
    if (!selectedOpt) return;
    setChecked(true);
    if (selectedOpt === currentQuest.spanish) {
      setScore(score + 10);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setChecked(false);
    if (currentIdx + 1 < game4Questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOpt(null);
    setChecked(false);
    setIsFinished(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded">Բայախաղ</span>
          <h3 className="text-md font-bold text-slate-800 mt-1 mt-0.5">Verb Infinitive Quiz</h3>
        </div>
        <div className="text-right">
          <span className="text-slate-500 text-xs">Հարց՝</span>
          <span className="text-slate-700 font-bold text-sm block">
            {currentIdx + 1} / {game4Questions.length}
          </span>
        </div>
      </div>

      {isFinished ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto">
            <Sparkles size={28} />
          </div>
          <h4 className="text-lg font-bold text-slate-800">Գերազանց ավարտ։</h4>
          <p className="text-xs text-slate-600">
            Դուք հիանալի կերպով տիրապետում եք հիմնական դերբայների իսպաներեն ձևերին։
          </p>
          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg text-sm font-semibold text-slate-700">
            Միավորներ՝ <span className="text-rose-600 text-base">{score}</span> / 100
          </div>
          <button
            onClick={resetGame}
            className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-medium transition-all"
          >
            Կրկնել
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="text-center p-5 bg-gradient-to-r from-rose-50/50 to-pink-50/50 rounded-xl border border-rose-200">
            <span className="text-[10px] text-rose-500 font-bold uppercase tracking-wider block mb-1">
              Գտեք տրված բայի իսպաներեն տարբերակը՝
            </span>
            <p className="text-xl font-bold text-slate-800">{currentQuest.armenian}</p>
          </div>

          <div className="space-y-2">
            {currentQuest.options.map((opt) => {
              const isSelected = selectedOpt === opt;
              const isCorrectOpt = opt === currentQuest.spanish;

              let btnBg = "bg-white border-slate-205 text-slate-700 hover:bg-slate-50";
              if (isSelected) {
                btnBg = "bg-rose-500 border-rose-600 text-white shadow-sm font-bold";
              }
              if (checked) {
                if (isCorrectOpt) {
                  btnBg = "bg-emerald-100 border-emerald-400 text-emerald-800 font-bold";
                } else if (isSelected) {
                  btnBg = "bg-rose-100 border-rose-300 text-rose-800 line-through";
                } else {
                  btnBg = "bg-white border-slate-150 text-slate-400 opacity-60";
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleOptionClick(opt)}
                  disabled={checked}
                  className={`w-full p-2.5 text-left pl-4 font-mono text-sm rounded-lg border transition-all flex items-center justify-between ${btnBg}`}
                >
                  <span>{opt}</span>
                  {checked && isCorrectOpt && <Check size={14} className="text-emerald-600" />}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-slate-500 text-xs">
              Միավորներ՝ <b>{score}</b>
            </span>
            {!checked ? (
              <button
                onClick={handleCheck}
                disabled={!selectedOpt}
                className="px-4 py-1.5 bg-rose-500 hover:bg-rose-600 disabled:opacity-40 text-white rounded-lg text-xs font-semibold shadow-sm"
              >
                Ստուգել
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold shadow-sm"
              >
                {currentIdx + 1 === game4Questions.length ? "Ավարտել" : "Հաջորդը"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// GAME 5: TRUE OR FALSE
// ============================================================================
function Game5TrueFalseView() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState<boolean | null>(null);
  const [checked, setChecked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuest: Game5TrueFalse = game5Questions[currentIdx];

  const handleDecision = (ans: boolean) => {
    if (checked) return;
    setChosenAnswer(ans);
    setChecked(true);

    if (ans === currentQuest.isCorrect) {
      setScore(score + 15);
    }
  };

  const handleNext = () => {
    setChosenAnswer(null);
    setChecked(false);
    if (currentIdx + 1 < game5Questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setChosenAnswer(null);
    setChecked(false);
    setIsFinished(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">Ճիշտ թե Սխալ</span>
          <h3 className="text-lg font-bold text-slate-800 mt-1">Verdad o Falso</h3>
        </div>
        <div className="text-right">
          <span className="text-slate-500 text-xs">Հարց՝</span>
          <span className="text-slate-700 font-bold text-sm block">
            {currentIdx + 1} / {game5Questions.length}
          </span>
        </div>
      </div>

      {isFinished ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-amber-100 text-amber-650 rounded-full flex items-center justify-center mx-auto">
            <Award size={36} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">Խաղն ավարտվեց։</h4>
          <p className="text-sm text-slate-600">
            Դուք հիանալի կողմնորոշվում եք հայերեն և իսպաներեն թարգմանությունների ճշգրտության մեջ։
          </p>
          <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg max-w-xs mx-auto text-sm font-semibold text-slate-700">
            Ձեզ հաջողվեց վաստակել՝ <span className="text-amber-600 text-base">{score}</span> / 90
          </div>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-medium transition-all shadow-sm"
          >
            Խաղալ նորից
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Card comparison layout */}
          <div className="bg-slate-50 rounded-xl border border-slate-150 divide-y divide-slate-150 overflow-hidden">
            <div className="p-4 bg-amber-50/20">
              <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mb-1">🇪🇸 Իսպաներեն`</span>
              <p className="text-lg font-mono font-semibold text-slate-800 italic">“{currentQuest.spanish}”</p>
            </div>
            <div className="p-4">
              <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mb-1">🇦🇲 Առաջարկվող թարգմանություն`</span>
              <p className="text-base font-semibold text-slate-700">“{currentQuest.armenian}”</p>
            </div>
          </div>

          {!checked ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleDecision(true)}
                className="py-4 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 hover:border-emerald-450 text-emerald-800 font-bold text-lg rounded-xl flex flex-col items-center justify-center gap-1 shadow-sm transition-all"
                id="btn-choice-true"
              >
                <span>👍 Ճիշտ է</span>
                <span className="text-[10px] font-normal font-sans opacity-80">(Verdadero)</span>
              </button>
              <button
                onClick={() => handleDecision(false)}
                className="py-4 bg-rose-50 border border-rose-300 hover:bg-rose-100 hover:border-rose-450 text-rose-850 font-bold text-lg rounded-xl flex flex-col items-center justify-center gap-1 shadow-sm transition-all"
                id="btn-choice-false"
              >
                <span>👎 Սխալ է</span>
                <span className="text-[10px] font-normal font-sans opacity-80">(Falso)</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Feedback box */}
              {chosenAnswer === currentQuest.isCorrect ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm">Ճիշտ պատասխան։ (+15 միավոր)</h5>
                    <p className="text-xs mt-1 leading-relaxed">{currentQuest.explanation}</p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-rose-50 border border-rose-250 text-rose-800 rounded-xl flex items-start gap-3">
                  <XCircle size={18} className="mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm">Ցավոք, սխալվեցիք։</h5>
                    <p className="text-xs mt-1 leading-relaxed">{currentQuest.explanation}</p>
                  </div>
                </div>
              )}

              <button
                onClick={handleNext}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-sm font-semibold shadow-md transition-all"
              >
                Հաջորդ հարցը ➡️
              </button>
            </div>
          )}

          <div className="text-center text-xs text-slate-400">
            Միավորների հաշիվ՝ <b>{score}</b>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// GAME 6: SPEED FUTURE FINDER
// ============================================================================
function Game6FutureFinderView() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuest: Game6FutureFinder = game6Questions[currentIdx];

  const handleOptionClick = (opt: string) => {
    if (checked) return;
    setSelectedOpt(opt);
  };

  const handleCheck = () => {
    if (!selectedOpt) return;
    setChecked(true);
    if (selectedOpt === currentQuest.correctAnswer) {
      setScore(score + 20);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setChecked(false);
    if (currentIdx + 1 < game6Questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setSelectedOpt(null);
    setChecked(false);
    setIsFinished(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded">Քերականական Որոնում</span>
          <h3 className="text-[17px] font-bold text-slate-800 mt-1">Ապառնիի Որոնում</h3>
        </div>
        <div className="text-right">
          <span className="text-slate-500 text-xs">Հարց՝</span>
          <span className="text-slate-700 font-bold text-sm block">
            {currentIdx + 1} / {game6Questions.length}
          </span>
        </div>
      </div>

      {isFinished ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-red-100 text-red-650 rounded-full flex items-center justify-center mx-auto">
            <Trophy size={36} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">Փառահեղ ավարտ։ 🎉</h4>
          <p className="text-sm text-slate-600 font-sans">
            Դուք կարողանում եք անմիջապես նկատել ճշգրիտ իսպաներեն ապառնի նախադասությունները։
          </p>
          <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg max-w-xs mx-auto text-sm font-semibold text-slate-700">
            Ձեռք բերված միավորներ՝ <span className="text-red-600 text-base">{score}</span> / 100
          </div>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-medium transition-all shadow-sm"
          >
            Կրկնել խաղը
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-slate-800 space-y-1">
            <span className="text-[10px] text-red-600 font-bold uppercase tracking-wider block">Գտեք ճիշտ թարգմանությունը՝</span>
            <p className="text-lg font-bold font-sans">“ {currentQuest.armenianPrompt} ”</p>
          </div>

          <div className="space-y-2.5">
            {currentQuest.options.map((opt) => {
              const isSelected = selectedOpt === opt;
              const isCorrectOpt = opt === currentQuest.correctAnswer;

              let btnBg = "bg-white border-slate-205 text-slate-700 hover:bg-slate-50 hover:border-slate-300";
              if (isSelected) {
                btnBg = "bg-red-600 border-red-700 text-white shadow-md font-semibold";
              }
              if (checked) {
                if (isCorrectOpt) {
                  btnBg = "bg-emerald-100 border-emerald-400 text-emerald-800 font-bold";
                } else if (isSelected) {
                  btnBg = "bg-rose-100 border-rose-300 text-rose-800 line-through opacity-90";
                } else {
                  btnBg = "bg-white border-slate-150 text-slate-400 opacity-60";
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleOptionClick(opt)}
                  disabled={checked}
                  className={`w-full p-3.5 text-left pl-5 font-mono text-sm rounded-xl border transition-all flex items-center justify-between ${btnBg}`}
                >
                  <span>{opt}</span>
                  {isSelected && !checked && <span className="text-xs bg-slate-100 text-slate-650 px-2 py-0.5 rounded">Ընտրված</span>}
                </button>
              );
            })}
          </div>

          {checked && (
            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              selectedOpt === currentQuest.correctAnswer
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-rose-50 border-rose-220 text-rose-800"
            }`}>
              <div className="mt-0.5">
                {selectedOpt === currentQuest.correctAnswer ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
              </div>
              <div className="space-y-1">
                <p className="font-bold text-sm">
                  {selectedOpt === currentQuest.correctAnswer ? "Ճիշտ է։ (+20 միավոր)" : "Ոչ, սխալ ընտրություն է։"}
                </p>
                <p className="text-xs leading-relaxed">
                  Ճշգրիտ տարբերակն է՝ <strong className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">{currentQuest.correctAnswer}</strong>.
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-2">
            <span className="text-slate-500 text-xs">
              Միավորներ՝ <b>{score}</b>
            </span>
            {!checked ? (
              <button
                onClick={handleCheck}
                disabled={!selectedOpt}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl text-sm font-semibold shadow-md transition-all"
              >
                Ստուգել
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-5 py-2 bg-slate-850 hover:bg-slate-900 text-white rounded-xl text-sm font-semibold shadow-md transition-all"
              >
                {currentIdx + 1 === game6Questions.length ? "Ավարտել" : "Հաջորդը ➡️"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

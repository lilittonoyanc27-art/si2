import React, { useState, useEffect } from "react";
import { duelQuestions, ticTacToeQuestions, DuelQuestion, TicTacToeQuestion } from "./data";
import { Users, Zap, Award, RotateCcw, Play, CheckCircle2, XCircle, ArrowLeft, ShieldAlert, Trophy } from "lucide-react";

export default function MultiplayerGames() {
  const [activeGame, setActiveGame] = useState<"menu" | "duel" | "ttt">("menu");

  if (activeGame === "duel") {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setActiveGame("menu")}
          className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs rounded-xl shadow-sm transition-all"
          id="btn-quit-multiplayer"
        >
          <ArrowLeft size={14} /> Վերադառնալ երկու խաղացողի մենյու
        </button>
        <SpeedDuelGame />
      </div>
    );
  }

  if (activeGame === "ttt") {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setActiveGame("menu")}
          className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs rounded-xl shadow-sm transition-all"
          id="btn-quit-multiplayer-ttt"
        >
          <ArrowLeft size={14} /> Վերադառնալ երկու խաղացողի մենյու
        </button>
        <TicTacToeGame />
      </div>
    );
  }

  return (
    <div id="multiplayer-hub-container" className="max-w-4xl mx-auto space-y-6 p-2">
      <div className="text-center space-y-3">
        <div className="inline-flex p-3 bg-indigo-100 text-indigo-600 rounded-2xl shadow-lg shadow-indigo-100">
          <Users size={32} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">👥 Մրցակցային Խաղեր (2 Խաղացող)</h2>
        <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
          Խաղացեք ձեր ընկերոջ հետ նույն էկրանի վրա։ Ստուգեք, թե ով է ավելի լավ տիրապետում իսպաներենի ապառնի ժամանակին։
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Game Card 1 */}
        <div
          id="card-game-duel"
          onClick={() => setActiveGame("duel")}
          className="bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer transition-all space-y-4 group"
        >
          <div className="flex justify-between items-start">
            <span className="text-3xl">☄️</span>
            <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-md uppercase tracking-wider">
              Ռեակցիա և Արագություն
            </span>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg text-slate-850 group-hover:text-indigo-600 transition-colors">
              Ապառնիի Մենամարտ (Speed Duel)
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Բաժանված էկրանով արագության մրցույթ: Հայտնվում է հայերեն նախադասությունը, և երկու խաղացողները զուգահեռ փորձում են առաջինը սեղմել ճիշտ իսպաներեն թարգմանությունը:
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs font-semibold text-indigo-650">
            <span>Մեկնարկել մենամարտը</span>
            <span className="group-hover:translate-x-1.5 transition-transform">➡️</span>
          </div>
        </div>

        {/* Game Card 2 */}
        <div
          id="card-game-ttt"
          onClick={() => setActiveGame("ttt")}
          className="bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer transition-all space-y-4 group"
        >
          <div className="flex justify-between items-start">
            <span className="text-3xl">❌⭕</span>
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-805 text-[10px] font-bold rounded-md uppercase tracking-wider">
              Ռազմավարություն
            </span>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg text-slate-850 group-hover:text-indigo-600 transition-colors">
              Քերականական Խաչեր-Զրոներ (Grammar Tic-Tac-Toe)
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              3x3 դասական խաղը, որտեղ ամեն վանդակում թաքնված է ապառնիի թարգմանական առաջադրանք։ Վանդակը զբաղեցնելու համար պետք է ճիշտ պատասխանել հարցին։
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs font-semibold text-indigo-650">
            <span>Բացել Խաչեր-Զրոները</span>
            <span className="group-hover:translate-x-1.5 transition-transform">➡️</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MULTIPLAYER GAME 1: SPEED DUEL
// ============================================================================
function SpeedDuelGame() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);

  // States to track locks or errors in current round
  const [p1Locked, setP1Locked] = useState(false);
  const [p2Locked, setP2Locked] = useState(false);

  const [roundFeedback, setRoundFeedback] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuest: DuelQuestion = duelQuestions[currentIdx];

  // Helper arrays for options
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    if (currentQuest) {
      // Keep static or shuffle options
      setOptions([...currentQuest.options].sort(() => Math.random() - 0.5));
      setP1Locked(false);
      setP2Locked(false);
      setRoundFeedback(null);
    }
  }, [currentIdx]);

  const handleP1Click = (answer: string) => {
    if (p1Locked || roundFeedback) return;

    if (answer === currentQuest.correctAnswer) {
      setP1Score((s) => s + 10);
      setRoundFeedback("Խաղացող 1-ը (Կապույտ) առաջինը ճիշտ պատասխանեց: 🚀 (+10)");
      setTimeout(nextQuestion, 2000);
    } else {
      setP1Score((s) => Math.max(0, s - 5));
      setP1Locked(true); // Lock player for remainder of this round
    }
  };

  const handleP2Click = (answer: string) => {
    if (p2Locked || roundFeedback) return;

    if (answer === currentQuest.correctAnswer) {
      setP2Score((s) => s + 10);
      setRoundFeedback("Խաղացող 2-ը (Կարմիր) առաջինը ճիշտ պատասխանեց: 🔥 (+10)");
      setTimeout(nextQuestion, 2000);
    } else {
      setP2Score((s) => Math.max(0, s - 5));
      setP2Locked(true);
    }
  };

  const nextQuestion = () => {
    if (currentIdx + 1 < duelQuestions.length) {
      setCurrentIdx((idx) => idx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetGame = () => {
    setP1Score(0);
    setP2Score(0);
    setCurrentIdx(0);
    setIsFinished(false);
    setP1Locked(false);
    setP2Locked(false);
    setRoundFeedback(null);
  };

  return (
    <div id="duel-game-arena" className="max-w-4xl mx-auto space-y-6">
      {/* Global Arena Status Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 flex justify-between items-center shadow-lg border border-slate-800">
        {/* Player 1 Stat */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
          <div>
            <div className="text-xs text-slate-400 font-bold">ԽԱՂԱՑՈՂ 1 (Կապույտ)</div>
            <div className="text-2xl font-black text-cyan-400">{p1Score} <span className="text-xs text-slate-500">միավոր</span></div>
          </div>
        </div>

        {/* Central Round indicator */}
        <div className="text-center px-4 py-1.5 bg-slate-800/100 rounded-xl border border-slate-700">
          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">ԴԵՄԱԴՐՈՒԹՅՈՒՆ</span>
          <span className="text-sm font-extrabold font-mono text-orange-400">ՓՈՒԼ {currentIdx + 1} / {duelQuestions.length}</span>
        </div>

        {/* Player 2 Stat */}
        <div className="flex items-center gap-3 text-right">
          <div>
            <div className="text-xs text-slate-400 font-bold">ԽԱՂԱՑՈՂ 2 (Կարմիր)</div>
            <div className="text-2xl font-black text-rose-400">{p2Score} <span className="text-xs text-slate-500">միավոր</span></div>
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
        </div>
      </div>

      {isFinished ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center space-y-6">
          <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
            <Award size={48} />
          </div>
          <h3 className="text-2xl font-black text-slate-800">Մենամարտը Ավարտվեց:</h3>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-2xl">
              <span className="text-xs font-bold text-cyan-800">Խաղացող 1</span>
              <p className="text-2xl font-extrabold text-cyan-900">{p1Score}</p>
            </div>
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl">
              <span className="text-xs font-bold text-rose-800">Խաղացող 2</span>
              <p className="text-2xl font-extrabold text-rose-900">{p2Score}</p>
            </div>
          </div>

          <div className="text-xl font-bold text-slate-800 mt-2">
            🏆 ՀԱՂԹՈՂ՝{" "}
            {p1Score === p2Score ? (
              <span className="text-amber-600">Ոչ-ոքի (Հավասար) 🤝</span>
            ) : p1Score > p2Score ? (
              <span className="text-cyan-600">Խաղացող 1-ը (Կապույտ) 🎉</span>
            ) : (
              <span className="text-rose-600">Խաղացող 2-ը (Կարմիր) 🎉</span>
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={resetGame}
              className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold shadow-md transition-all flex items-center gap-2 mx-auto"
            >
              <RotateCcw size={16} /> Խաղալ Սկզբից
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Central Target Question Card */}
          <div className="bg-white border border-slate-205 rounded-2xl p-6 text-center space-y-2 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-cyan-500 via-orange-500 to-rose-500" />
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
              ԱՐԱԳ ԹԱՐԳՄԱՆԵՔ ԻՍՊԱՆԵՐԵՆ (RACE TO TAP!)
            </span>
            <p className="text-2xl font-black text-slate-800">“ {currentQuest.armenianPrompt} ”</p>

            {/* Instant Round result feedback overlay */}
            {roundFeedback && (
              <div className="mt-3 py-2 px-4 bg-amber-500/10 text-amber-900 rounded-lg text-sm font-bold border border-amber-300">
                {roundFeedback}
              </div>
            )}
          </div>

          {/* TWO PLAYERS SIDE-BY-SIDE INTERFACES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Player 1 Panel (Cyan) */}
            <div id="p1-duel-panel" className="bg-cyan-50/40 border border-cyan-200/60 rounded-3xl p-5 space-y-4 flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-cyan-100 pb-2">
                <span className="text-sm font-extrabold text-cyan-800">👥 ԽԱՂԱՑՈՂ 1</span>
                {p1Locked ? (
                  <span className="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold">ԿՈՂՊՎԱԾ (Սխալվել եք)</span>
                ) : (
                  <span className="text-xs bg-cyan-100 text-cyan-900 px-2 py-0.5 rounded font-bold">ՍՊԱՍՈՒՄ Է...</span>
                )}
              </div>

              <div className="space-y-2.5">
                {options.map((opt, i) => (
                  <button
                    key={`p1-opt-${i}`}
                    onClick={() => handleP1Click(opt)}
                    disabled={p1Locked || !!roundFeedback}
                    className={`w-full p-3 font-mono text-xs md:text-sm font-semibold rounded-2xl border text-left pl-5 transition-all flex items-center justify-between ${
                      p1Locked
                        ? "bg-slate-100 border-slate-205 text-slate-450 cursor-not-allowed"
                        : "bg-white border-cyan-150 hover:bg-white hover:border-cyan-500 hover:shadow-md text-slate-700 pointer-events-auto"
                    }`}
                  >
                    <span>{opt}</span>
                    <span className="text-[10px] bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-full font-sans">Ընտրել</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Player 2 Panel (Rose) */}
            <div id="p2-duel-panel" className="bg-rose-50/40 border border-rose-200/60 rounded-3xl p-5 space-y-4 flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-rose-100 pb-2">
                <span className="text-sm font-extrabold text-rose-800">👥 ԽԱՂԱՑՈՂ 2</span>
                {p2Locked ? (
                  <span className="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold">ԿՈՂՊՎԱԾ (Սխալվել եք)</span>
                ) : (
                  <span className="text-xs bg-rose-100 text-rose-900 px-2 py-0.5 rounded font-bold">ՍՊԱՍՈՒՄ Է...</span>
                )}
              </div>

              <div className="space-y-2.5">
                {options.map((opt, i) => (
                  <button
                    key={`p2-opt-${i}`}
                    onClick={() => handleP2Click(opt)}
                    disabled={p2Locked || !!roundFeedback}
                    className={`w-full p-3 font-mono text-xs md:text-sm font-semibold rounded-2xl border text-left pl-5 transition-all flex items-center justify-between ${
                      p2Locked
                        ? "bg-slate-100 border-slate-205 text-slate-450 cursor-not-allowed"
                        : "bg-white border-rose-150 hover:bg-white hover:border-rose-500 hover:shadow-md text-slate-700 pointer-events-auto"
                    }`}
                  >
                    <span>{opt}</span>
                    <span className="text-[10px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full font-sans">Ընտրել</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-slate-400 text-[10px] font-sans">
            Հուշում՝ Սխալ պատասխանի դեպքում խաղացողից պակասում է 5 միավոր և նա կողպվում է մինչև տվյալ փուլի ավարտը:
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MULTIPLAYER GAME 2: TIC-TAC-TOE
// ============================================================================
function TicTacToeGame() {
  // Board cells index: 0 to 8
  // Store 'X' (Player 1), 'O' (Player 2) or null (empty)
  const [board, setBoard] = useState<( "X" | "O" | null )[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X"); // X starts

  // Focus modal cell index (when answering a question)
  const [activeChallengeIdx, setActiveChallengeIdx] = useState<number | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [gameResult, setGameResult] = useState<string | null>(null);

  // Initialize options for selected challenge
  useEffect(() => {
    if (activeChallengeIdx !== null) {
      const q = ticTacToeQuestions[activeChallengeIdx];
      setShuffledOptions([...q.options].sort(() => Math.random() - 0.5));
      setFeedback(null);
    }
  }, [activeChallengeIdx]);

  // Check victory condition on board update
  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      setGameResult(`հաղթող՝ Խաղացող ${winner === "X" ? "1 (X)" : "2 (O)"}`);
    } else if (board.every((cell) => cell !== null)) {
      // Board is full, count who has more cells
      const xCount = board.filter((c) => c === "X").length;
      const oCount = board.filter((c) => c === "O").length;
      if (xCount > oCount) {
        setGameResult("Խաղացող 1-ը (X) հաղթեց ձայների մեծամասնությամբ։");
      } else if (oCount > xCount) {
        setGameResult("Խաղացող 2-ը (O) հաղթեց ձայների մեծամասնությամբ։");
      } else {
        setGameResult("Հավասար՝ Ոչ-ոքի։ 🤝");
      }
    }
  }, [board]);

  const handleCellClick = (idx: number) => {
    if (board[idx] || gameResult || activeChallengeIdx !== null) return;
    setActiveChallengeIdx(idx);
  };

  const handleAnswerSubmit = (option: string) => {
    if (activeChallengeIdx === null || feedback) return;

    const q = ticTacToeQuestions[activeChallengeIdx];
    const isCorrect = option === q.correctAnswer;

    if (isCorrect) {
      setFeedback({
        isCorrect: true,
        message: `Ճիշտ պատասխան: Դուք զբաղեցրիք այս վանդակը:`,
      });
      // Set board symbol
      const newBoard = [...board];
      newBoard[activeChallengeIdx] = currentPlayer;
      setBoard(newBoard);
    } else {
      setFeedback({
        isCorrect: false,
        message: `Սխալ պատասխան: Ճիշտ տարբերակն էր ՛${q.correctAnswer}՛. Դուք կորցնում եք ձեր հերթը:`,
      });
    }
  };

  const closeChallenge = () => {
    setActiveChallengeIdx(null);
    setFeedback(null);
    // Alternate turn
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setActiveChallengeIdx(null);
    setFeedback(null);
    setGameResult(null);
  };

  // Helper patterns to find Tic-Tac-Toe lines
  function calculateWinner(squares: ( "X" | "O" | null )[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div id="ttt-game-container" className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
        <div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Խաչեր-Զրոներ</span>
          <h3 className="text-lg font-black text-slate-800 mt-1">Grammar Tic-Tac-Toe</h3>
        </div>
        <div className="flex items-center gap-2">
          {gameResult ? (
            <span className="text-sm font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full uppercase">Խաղն ավարտվեց</span>
          ) : (
            <div className="flex items-center gap-1.5 text-sm">
              <span className="text-slate-500">Ակտիվ հերթ՝</span>
              <span className={`px-2.5 py-0.5 rounded-full font-bold text-xs ${
                currentPlayer === "X"
                  ? "bg-sky-100 text-sky-800 border border-sky-300"
                  : "bg-orange-100 text-orange-850 border border-orange-300"
              }`}>
                Խաղացող {currentPlayer === "X" ? "1-ի (X)" : "2-ի (O)"} հերթը
              </span>
            </div>
          )}
        </div>
      </div>

      {gameResult ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
            <Trophy size={32} />
          </div>
          <h4 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Արդյունք</h4>
          <p className="text-md text-slate-600 font-semibold">{gameResult}</p>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow"
          >
            Խաղալ Նորից
          </button>
        </div>
      ) : activeChallengeIdx !== null ? (
        /* CELL CHALLENGE INNER WORK */
        <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-150 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              ՎԱՆԴԱԿԻ ԱՊԱՌՆԻԻ ԱՌԱՋԱԴՐԱՆՔ (CELL #{activeChallengeIdx + 1})
            </span>
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
              currentPlayer === "X" ? "bg-sky-100 text-sky-800" : "bg-orange-100 text-orange-800"
            }`}>
              ԽԱՂԱՑՈՂ {currentPlayer === "X" ? "1 (X)" : "2 (O)"}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 font-bold block uppercase">Ինչպե՞ս կասեք իսպաներեն`</span>
            <p className="text-lg font-bold text-slate-800">
              “ {ticTacToeQuestions[activeChallengeIdx].armenianPrompt} ”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {shuffledOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswerSubmit(opt)}
                disabled={!!feedback}
                className={`p-3 text-left pl-4 font-mono text-sm font-semibold rounded-xl border transition-all ${
                  feedback
                    ? opt === ticTacToeQuestions[activeChallengeIdx].correctAnswer
                      ? "bg-emerald-100 border-emerald-400 text-emerald-800"
                      : "bg-white text-slate-300 border-slate-100 opacity-50"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-350 hover:bg-slate-50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {feedback && (
            <div className="space-y-3 pt-2">
              <div className={`p-4 rounded-xl border flex items-start gap-2.5 ${
                feedback.isCorrect
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-rose-50 border-rose-225 text-rose-800"
              }`}>
                {feedback.isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                <p className="text-xs leading-relaxed font-semibold">{feedback.message}</p>
              </div>
              <button
                onClick={closeChallenge}
                className="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium text-xs rounded-xl shadow transition-all"
              >
                Անցնել հաջորդ հերթին ➡️
              </button>
            </div>
          )}
        </div>
      ) : (
        /* MAIN 3X3 GRID VIEW */
        <div className="space-y-6">
          <p className="text-xs text-slate-500 text-center bg-slate-50 rounded-lg p-2">
            💡 <b>Ինչպես հաղթել.</b> Կտտացրեք ցանկացած ազատ վանդակի վրա, ճիշտ թարգմանեք ապառնիի բանաձևը, և զբաղեցրեք վանդակը:
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto p-2 bg-slate-100 rounded-3xl border border-slate-200">
            {board.map((cell, idx) => (
              <button
                key={idx}
                onClick={() => handleCellClick(idx)}
                disabled={cell !== null || !!gameResult}
                className={`aspect-square rounded-2xl border text-3xl font-black font-sans flex items-center justify-center transition-all ${
                  cell === "X"
                    ? "bg-sky-100 border-sky-300 text-sky-600 shadow-inner"
                    : cell === "O"
                    ? "bg-orange-100 border-orange-300 text-orange-600 shadow-inner"
                    : "bg-white hover:bg-slate-50 border-slate-150 hover:shadow-md cursor-pointer pointer-events-auto"
                }`}
              >
                {cell ? cell : <span className="text-slate-200 text-xs font-mono font-normal">#{idx + 1}</span>}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-sky-400 rounded-full inline-block" /> Խաղացող 1 (X)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-orange-400 rounded-full inline-block" /> Խաղացող 2 (O)</span>
          </div>
        </div>
      )}
    </div>
  );
}

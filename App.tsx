import React, { useState } from "react";
import TheoryView from "./TheoryView";
import ReadingView from "./ReadingView";
import GamesList from "./GamesList";
import MultiplayerGames from "./MultiplayerGames";
import { BookOpen, BookText, Trophy, Users, Star, ChevronRight, GraduationCap } from "lucide-react";

type ActiveTab = "theory" | "reading" | "games" | "multiplayer";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("theory");

  return (
    <div id="app-wrapper" className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex flex-col justify-between">
      {/* Visual top bar header with Flags representation */}
      <header id="main-app-header" className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo Brand info */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-semibold tracking-wide text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                  🇪🇸 Իսպաներեն (Español)
                </span>
                <span className="text-slate-400 text-xs">➡️</span>
                <span className="text-xs font-semibold tracking-wide text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                  🇦🇲 Հայերեն (Armenio)
                </span>
              </div>
              <h1 className="text-lg md:text-xl font-extrabold text-slate-800 tracking-tight mt-1">
                Linguis <span className="text-indigo-600">Futuro</span> — Իսպաներենի Ապառնի Ժամանակ
              </h1>
            </div>
          </div>

          {/* Stats quick panel */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-amber-400 flex items-center justify-center text-[9px] font-bold shadow-sm text-slate-900">ESP</div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-rose-450 flex items-center justify-center text-[9px] font-bold shadow-sm text-white">ARM</div>
            </div>
            <div className="h-6 w-px bg-slate-200"></div>
            <span className="text-xs font-bold bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg border border-indigo-100 flex items-center gap-1.5 shadow-sm">
              <Star size={12} className="text-indigo-600 fill-indigo-600" /> Futuro con "ir a"
            </span>
          </div>
        </div>

        {/* Global Navigation Tabs Bar */}
        <div className="bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto gap-2.5 py-3 no-scrollbar">
            {/* Tab 1: Theory */}
            <button
              id="tab-btn-theory"
              onClick={() => setActiveTab("theory")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                activeTab === "theory"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <BookOpen size={16} /> 📖 Տեսություն (Gramática)
            </button>

            {/* Tab 2: Reading text */}
            <button
              id="tab-btn-reading"
              onClick={() => setActiveTab("reading")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                activeTab === "reading"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <BookText size={16} /> 📘 Ընթերցանության Տեքստ
            </button>

            {/* Tab 3: 6 Games */}
            <button
              id="tab-btn-games"
              onClick={() => setActiveTab("games")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                activeTab === "games"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Trophy size={16} /> 🏆 6 Ինքնաստուգման Խաղեր
            </button>

            {/* Tab 4: 2 Players Games */}
            <button
              id="tab-btn-multiplayer"
              onClick={() => setActiveTab("multiplayer")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                activeTab === "multiplayer"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Users size={16} /> 👥 2 Խաղացողների Խաղեր
            </button>
          </div>
        </div>
      </header>

      {/* Main Dynamic Viewport Container */}
      <main id="main-content-area" className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
        <div>
          {activeTab === "theory" && <TheoryView />}
          {activeTab === "reading" && <ReadingView />}
          {activeTab === "games" && <GamesList />}
          {activeTab === "multiplayer" && <MultiplayerGames />}
        </div>
      </main>

      {/* Footer Area with nice academic context */}
      <footer id="app-footer" className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-400 space-y-1.5 shadow-xs">
        <p className="font-semibold text-slate-600">“El español es fácil y divertido con Futuro App”</p>
        <p>Linguis Futuro — Իսպաներենի Ապառնի Ժամանակի Ուսուցման Ինտերակտիվ Հարթակ © 2026</p>
      </footer>
    </div>
  );
}

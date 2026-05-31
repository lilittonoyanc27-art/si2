import React, { useState } from "react";
import { readingSentences } from "./data";
import { HelpCircle, Eye, EyeOff, BookOpen, Volume2, Sparkles } from "lucide-react";

export default function ReadingView() {
  // Store expanded state per sentence ID
  const [expandedIds, setExpandedIds] = useState<number[]>([1]); // start with first sentence expanded for tutorial feel

  const toggleSentence = (id: number) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((item) => item !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const showAll = () => {
    setExpandedIds(readingSentences.map((s) => s.id));
  };

  const hideAll = () => {
    setExpandedIds([]);
  };

  return (
    <div id="reading-view-parent" className="max-w-3xl mx-auto space-y-6 p-2">
      {/* Introduction Card */}
      <div id="reading-intro-card" className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-10 -mt-10" />
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-100 rounded-xl text-indigo-800">
            <BookOpen size={24} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-800">📘 Ինտերակտիվ Ընթերցանություն</h3>
            <p className="text-slate-650 text-sm leading-relaxed">
              Կարդացեք ստորև բերված տեքստը իսպաներենով։ <span className="font-semibold text-indigo-600 underline decoration-wavy">Կտտացրեք ցանկացած նախադասության վրա</span>, որպեսզի ներքևում բացվի դրա հայերեն թարգմանությունն ու քերականական հուշումը։
            </p>
          </div>
        </div>

        {/* Action controllers */}
        <div className="flex gap-2.5 mt-5 pt-4 border-t border-slate-100 justify-end">
          <button
            id="btn-show-all-translations"
            onClick={showAll}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-all cursor-pointer"
          >
            <Eye size={14} /> Ցուցադրել բոլոր թարգմանությունները
          </button>
          <button
            id="btn-hide-all-translations"
            onClick={hideAll}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-800 bg-transparent rounded-lg hover:bg-slate-100 transition-all cursor-pointer"
          >
            <EyeOff size={14} /> Թաքցնել
          </button>
        </div>
      </div>

      {/* Main Text Content Column */}
      <div id="main-reading-document" className="bg-slate-50/50 rounded-2xl p-6 md:p-8 border border-slate-200 space-y-4">
        {/* Document Header */}
        <div className="border-b border-slate-200 pb-4 text-center">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Ինքնուրույն Ընթերցում</span>
          <h2 className="text-xl md:text-2xl font-bold font-serif text-slate-800 mt-1">
            Futuro con “ir a + infinitivo”
          </h2>
          <p className="text-xs text-slate-500 italic mt-0.5">Mañana voy a tener un día especial</p>
        </div>

        {/* Interactive sentences list */}
        <div className="space-y-4 pt-2">
          {readingSentences.map((sentence, index) => {
            const isExpanded = expandedIds.includes(sentence.id);
            return (
              <div
                key={sentence.id}
                id={`reading-sentence-item-${sentence.id}`}
                className={`group rounded-xl transition-all duration-200 border cursor-pointer ${
                  isExpanded
                    ? "bg-indigo-50/60 border-indigo-200 shadow-sm"
                    : "bg-white hover:bg-slate-50 border-slate-150 hover:border-slate-300"
                }`}
              >
                {/* Sentence clickable area */}
                <button
                  onClick={() => toggleSentence(sentence.id)}
                  className="w-full text-left p-4 flex justify-between items-start gap-3 focus:outline-none cursor-pointer"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 font-mono">#{index + 1}</span>
                      <p className="text-base md:text-lg font-semibold text-slate-700 font-sans tracking-wide leading-relaxed group-hover:text-indigo-800 transition-colors">
                        {sentence.spanish}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                      isExpanded
                        ? "bg-indigo-200 text-indigo-900 font-semibold"
                        : "bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-800"
                    } transition-colors shrink-0`}
                  >
                    {isExpanded ? "Թարգմանված" : "Արտածել թարգմանությունը"}
                  </span>
                </button>

                {/* Expanded translation content */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-indigo-200/60 bg-indigo-50/35 rounded-b-xl space-y-3">
                    {/* Armenian Translation */}
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">🇦🇲 Հայերեն թարգմանություն`</span>
                      <p className="text-base font-semibold text-indigo-950 font-sans">
                        {sentence.armenian}
                      </p>
                    </div>

                    {/* Grammar analysis tooltip breakdown */}
                    {sentence.grammarTip && (
                      <div className="bg-white/80 p-2.5 rounded-lg border border-indigo-100 flex items-start gap-2 text-xs text-slate-700">
                        <Sparkles size={14} className="text-indigo-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-indigo-900">Հուշում.</span> {sentence.grammarTip}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Summary Tip */}
      <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-slate-650 text-xs text-center">
        💡 <b>Փորձառուներին.</b> Փորձեք բարձրաձայն կարդալ նախադասությունը, ենթադրել հայերեն իմաստը, և հետո սեղմել ստուգելու համար։
      </div>
    </div>
  );
}

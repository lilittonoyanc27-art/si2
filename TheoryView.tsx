import React, { useState } from "react";
import { irConjugations } from "./data";
import { BookOpen, Smile, Info, CheckCircle2, ChevronRight } from "lucide-react";

export default function TheoryView() {
  const [activeTab, setActiveTab] = useState<"formula" | "conjugation" | "examples">("formula");
  const [practicedVerbs, setPracticedVerbs] = useState<{ [key: string]: string }>({
    comer: "",
    estudiar: "",
    escribir: "",
  });
  const [practiceStatus, setPracticeStatus] = useState<{ [key: string]: boolean | null }>({
    comer: null,
    estudiar: null,
    escribir: null,
  });

  const checkPractice = (verb: "comer" | "estudiar" | "escribir", correct: string) => {
    const userAns = practicedVerbs[verb].trim().toLowerCase();
    if (userAns === correct.toLowerCase()) {
      setPracticeStatus((prev) => ({ ...prev, [verb]: true }));
    } else {
      setPracticeStatus((prev) => ({ ...prev, [verb]: false }));
    }
  };

  return (
    <div id="theory-view-container" className="space-y-6 max-w-4xl mx-auto p-2">
      {/* Hero Header */}
      <div id="theory-hero-banner" className="bg-gradient-to-r from-indigo-500/10 via-indigo-600/15 to-violet-500/10 rounded-2xl p-6 border border-indigo-200/50 relative overflow-hidden transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <BookOpen size={120} />
        </div>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-850 text-xs font-semibold rounded-full uppercase tracking-wider">
          Քերականություն (Gramática)
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-2 tracking-tight">
          Իսպաներենի Ապառնի Ժամանակը
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base leading-relaxed">
          Իսպաներենում մոտակա և պլանավորված ապառնի ժամանակը կազմվում է շատ հեշտությամբ՝ օգտագործելով <strong className="text-indigo-600 font-bold">ir a + infinitivo (անորոշ դերբայ)</strong> բանաձևը։ Սա համարժեք է հայերենի «պատրաստվում եմ անել» կամ «անելու եմ» ձևերին։
        </p>
      </div>

      {/* Tabs Menu */}
      <div id="theory-tabs-menu" className="flex border-b border-slate-200 gap-2">
        <button
          id="btn-tab-formula"
          onClick={() => setActiveTab("formula")}
          className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all cursor-pointer ${
            activeTab === "formula"
              ? "border-indigo-600 text-indigo-600 font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
          }`}
        >
          ⚙️ Բանաձևը (La Fórmula)
        </button>
        <button
          id="btn-tab-conjugation"
          onClick={() => setActiveTab("conjugation")}
          className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all cursor-pointer ${
            activeTab === "conjugation"
              ? "border-indigo-600 text-indigo-600 font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
          }`}
        >
          👥 Խոնարհում (Conjugación)
        </button>
        <button
          id="btn-tab-examples"
          onClick={() => setActiveTab("examples")}
          className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all cursor-pointer ${
            activeTab === "examples"
              ? "border-indigo-600 text-indigo-600 font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
          }`}
        >
          💡 Օրինակներ (Ejemplos)
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === "formula" && (
        <div id="tab-content-formula" className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="text-indigo-600">⚡</span> Ինչպե՞ս կառուցել ապառնի նախադասություն
          </h3>
          <p className="text-slate-650 text-sm">
            Բանաձևը բաղկացած է երեք պարզ մասից՝
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <span className="block text-xs uppercase text-indigo-600 font-bold mb-1">Մաս 1</span>
              <div className="text-xl font-mono font-bold text-indigo-800">ir բայը</div>
              <span className="text-xs text-slate-500 block mt-1">(ներկա ժամանակով խոնարհված՝ voy, vas, va...)</span>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 flex flex-col justify-center items-center">
              <span className="block text-xs uppercase text-emerald-600 font-bold mb-1">Մաս 2</span>
              <div className="text-2xl font-mono font-bold text-emerald-800">+ a +</div>
              <span className="text-xs text-slate-500 block mt-1">(նախդիրը, որը միշտ պարտադիր է)</span>
            </div>
            <div className="p-4 bg-rose-50 rounded-lg border border-rose-200">
              <span className="block text-xs uppercase text-rose-600 font-bold mb-1">Մաս 3</span>
              <div className="text-xl font-mono font-bold text-rose-800">Infinitivo</div>
              <span className="text-xs text-slate-500 block mt-1">(ցանկացած բայի անորոշ ձևը՝ comer, estudiar...)</span>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <h4 className="text-xs font-semibold text-slate-500 uppercase">Օրինակ՝</h4>
            <div className="flex flex-wrap items-center gap-2 text-lg font-mono">
              <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Voy</span>
              <span className="text-slate-400 font-bold">+</span>
              <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded">a</span>
              <span className="text-slate-400 font-bold">+</span>
              <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded">comer</span>
              <span className="text-slate-500 text-sm font-sans block ml-2">→ Ես պատրաստվում եմ ուտել / ես ուտելու եմ։</span>
            </div>
          </div>

          <div className="p-5 bg-indigo-50/40 rounded-2xl border border-indigo-150 text-slate-700 space-y-4 text-sm">
            <p className="font-bold text-indigo-950 flex items-center gap-2 text-base">
              <Info size={18} className="text-indigo-600" /> 💡 Լրացուցիչ Քերականական Մանրամասներ
            </p>
            
            <div className="divide-y divide-indigo-100/60 space-y-3">
              <div className="pt-2 text-xs md:text-sm">
                <strong className="text-indigo-900 block font-bold text-[14px] mb-1">1. Մոտակա ապառնի (Futuro Próximo) vs Պարզ ապառնի (Futuro Simple)</strong>
                <p className="text-slate-600 leading-relaxed">
                  Իսպաներենում ապագայում սպասվող գործողությունները նկարագրվում են երկու հիմնական ձևով՝
                </p>
                <ul className="list-disc pl-5 mt-1 text-slate-500 space-y-1 text-xs">
                  <li><strong className="text-indigo-600">ir a + infinitivo</strong> (Մոտակա ապառնի)՝ օգտագործվում է պլանավորված, անմիջական, կամ հստակ մտադրված գործողությունների համար (օրինակ՝ <em>Voy a estudiar español</em> - Ես պատրաստվում եմ սովորել / սովորելու եմ)։ Սա չափազանց հաճախակի է կիրառվում խոսակցականում։</li>
                  <li><strong className="text-rose-600">Futuro Simple</strong> (Պարզ ապառնի՝ <em>estudiaré, viajarás</em>)՝ օգտագործվում է ավելի հեռավոր, տեսական ապագայի կամ կանխատեսումների համար։</li>
                </ul>
              </div>

              <div className="pt-3 text-xs md:text-sm">
                <strong className="text-indigo-900 block font-bold text-[14px] mb-1">2. Ժխտական նախադասություններ (La Negación)</strong>
                <p className="text-slate-600 leading-relaxed">
                  Ժխտում կազմելու համար ժխտական <strong className="text-rose-600 font-semibold">«no»</strong> մասնիկը միշտ տեղադրվում է խոնարհված <strong>ir</strong> բայից <strong>առաջ</strong> (երբեք անորոշ բայից առաջ չի դրվում)։
                </p>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-150 font-mono text-[13px] text-slate-700 mt-1.5">
                  Բանաձև՝ <span className="text-rose-600 font-bold">No</span> + [ir] a + [infinitivo]
                  <br />
                  <span className="text-slate-500 text-xs">Օրինակ՝</span> <span className="font-bold">No voy a comprar</span> comida. (Ես ուտելիք չեմ գնելու։)
                </div>
              </div>

              <div className="pt-3 text-xs md:text-sm">
                <strong className="text-indigo-900 block font-bold text-[14px] mb-1">3. Հարցական նախադասություններ (Las Preguntas)</strong>
                <p className="text-slate-600 leading-relaxed">
                  Հարցում կատարելիս բառերի հերթականությունը չի փոխվում։ Գրավոր խոսքում օգտագործվում են իսպաներենի երկկողմանի հարցական նշանները՝ <strong className="text-indigo-650">¿ ... ?</strong>, իսկ բանավոր խոսքում պարզապես բարձրացվում է տոնայնությունը։
                </p>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-150 font-mono text-[13px] text-slate-700 mt-1.5">
                  <span className="text-slate-500 text-xs">Օրինակ՝</span> <span className="font-bold">¿Vas a viajar mañana?</span> (Վաղը ճանապարհորդելո՞ւ ես։)
                </div>
              </div>

              <div className="pt-3 text-xs md:text-sm">
                <strong className="text-indigo-900 block font-bold text-[14px] mb-1">4. Անդրադարձ բայերի դերանունների դիրքը (Pronombres Reflexivos)</strong>
                <p className="text-slate-600 leading-relaxed">
                  Եթե գործողությունը անդրադարձ է (օրինակ՝ <em>levantarse</em> — արթնանալ/կենալ, <em>ducharse</em> — լողանալ), անդրադարձ դերանունները (<strong className="text-indigo-650">me, te, se, nos, os, se</strong>) կարող են գրվել երկու տարբեր տեղերում՝
                </p>
                <ul className="list-disc pl-5 mt-1.5 text-slate-500 space-y-1 text-xs">
                  <li><strong>Անորոշ դերբային կից՝ վերջում</strong> (մեկ միասնական բառով)՝ <br /><span className="font-mono text-slate-700 font-bold">Voy a levantar<span className="text-indigo-650">me</span> a las siete.</span></li>
                  <li><strong>Խոնարհված «ir» բայից առաջ</strong> (առանձին բառով)՝ <br /><span className="font-mono text-slate-700 font-bold"><span className="text-indigo-650">Me</span> voy a levantar a las siete.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "conjugation" && (
        <div id="tab-content-conjugation" className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">
              📋 IR բայի խոնարհումը ներկա ժամանակում
            </h3>
            <span className="text-xs text-slate-500 font-mono">(իր բանաձևի հիմքը)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {irConjugations.map((item, index) => (
              <div
                key={index}
                id={`conjugation-card-${index}`}
                className="p-4 bg-slate-50 rounded-xl border border-slate-150 flex flex-col justify-between hover:border-indigo-300 transition-all hover:bg-indigo-50/10"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-500 text-sm">
                    {item.pronounSp} <span className="text-xs text-slate-400 font-normal">({item.pronounHy})</span>
                  </span>
                  <span className="font-mono text-xs bg-indigo-100 text-indigo-850 px-2.5 py-0.5 rounded-full font-bold">
                    {item.conjugatedIr} a
                  </span>
                </div>
                <div className="border-t border-slate-200/60 pt-2 mt-1 space-y-1">
                  <p className="text-slate-800 text-sm font-mono font-medium">👉 {item.exampleSp}</p>
                  <p className="text-slate-600 text-xs">🇦🇲 {item.exampleHy}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick interactive sandbox */}
          <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-200/60 space-y-4">
            <h4 className="text-sm font-bold text-indigo-800 flex items-center gap-1.5">
              <Smile size={18} /> Կարճ Ինքնաստուգում
            </h4>
            <p className="text-xs text-slate-600">
              Փորձեք ինքնուրույն գրել հարմար տարբերակը (օրինակ՝ <code className="font-mono bg-slate-200/60 px-1 rounded">voy a comer</code>, <code className="font-mono bg-slate-200/60 px-1 rounded">vamos a estudiar</code>)
            </p>

            <div className="space-y-3">
              {/* Box 1 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200 gap-2">
                <span className="text-sm font-medium text-slate-700">1. Ես պատրաստվում եմ ուտել: Yo ___ ___ ___</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={practicedVerbs.comer}
                    onChange={(e) => setPracticedVerbs({ ...practicedVerbs, comer: e.target.value })}
                    placeholder="voy a comer"
                    className="border border-slate-300 rounded px-2.5 py-1 text-sm font-mono focus:outline-none focus:border-indigo-500 w-36"
                  />
                  <button
                    onClick={() => checkPractice("comer", "voy a comer")}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded transition-all font-medium cursor-pointer"
                  >
                    Ստուգել
                  </button>
                  {practiceStatus.comer === true && <span className="text-emerald-600 text-sm">✅</span>}
                  {practiceStatus.comer === false && <span className="text-rose-600 text-sm">❌</span>}
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200 gap-2">
                <span className="text-sm font-medium text-slate-700">2. Մենք սովորելու ենք: Nosotros ___ ___ ___</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={practicedVerbs.estudiar}
                    onChange={(e) => setPracticedVerbs({ ...practicedVerbs, estudiar: e.target.value })}
                    placeholder="vamos a estudiar"
                    className="border border-slate-300 rounded px-2.5 py-1 text-sm font-mono focus:outline-none focus:border-indigo-500 w-36"
                  />
                  <button
                    onClick={() => checkPractice("estudiar", "vamos a estudiar")}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded transition-all font-medium cursor-pointer"
                  >
                    Ստուգել
                  </button>
                  {practiceStatus.estudiar === true && <span className="text-emerald-600 text-sm">✅</span>}
                   {practiceStatus.estudiar === false && <span className="text-rose-600 text-sm">❌</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "examples" && (
        <div id="tab-content-examples" className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-800">
            📖 Օգտակար արտահայտություններ ու բառապաշար
          </h3>
          <p className="text-slate-600 text-sm">
            Ապառնի ժամանակը հաճախ օգտագործվում է ժամանակի ցուցիչ բառերի հետ։ Ահա դրանցից հիմնականները՝
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-xs tracking-wider uppercase font-bold text-slate-400 block mb-2">Ժամանակի Ցուցիչներ (Expresiones de tiempo)</span>
              <ul className="space-y-2 text-sm text-slate-700 font-mono">
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span>Mañana</span>
                  <span className="font-sans text-slate-600">Վաղը</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span>Después</span>
                  <span className="font-sans text-slate-600">Հետո / Հետագայում</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span>Luego</span>
                  <span className="font-sans text-slate-600">Հետո / Ավելի ուշ</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span>Mas tarde</span>
                  <span className="font-sans text-slate-600">Ավելի ուշ</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Por la tarde / noche</span>
                  <span className="font-sans text-slate-600">Կեսօրից հետո / Երեկոյան</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-xs tracking-wider uppercase font-bold text-slate-400 block mb-2">Հաճախակի օգտագործվող Անորոշ բայեր (Infinitivos populares)</span>
              <ul className="space-y-2 text-sm text-slate-700 font-mono">
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span>hacer (տանել / անել)</span>
                  <span className="font-sans text-slate-600">անել</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span>comer</span>
                  <span className="font-sans text-slate-600">ուտել</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span>estudiar</span>
                  <span className="font-sans text-slate-600">սովորել</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span>viajar</span>
                  <span className="font-sans text-slate-600">ճանապարհորդել</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>comprar</span>
                  <span className="font-sans text-slate-600">գնել</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

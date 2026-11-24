import { useNavigate } from 'react-router-dom';

export default function NombreComponente() {
  const navigate = useNavigate();

  return (
    <>
        <div  className="min-h-screen w-full bg-background flex flex-col justify-center items-center px-6 py-8 relative overflow-hidden">
                            <div className="text-center mt-3">
                    <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    EXAM RESULTS
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium">
                    Prueba de Clasificación de Idiomas
                    </p>
                </div>
                {/* BEGIN: Avatar Mascot Section */}
                <section
                    className="mt-2 text-center relative flex justify-center items-center"
                    data-purpose="mascot-display"
                >
                    <div className="relative group cursor-pointer">
                    <div className="absolute -inset-2 bg-gradient-to-t from-blue-100/40 to-transparent rounded-full blur-md" />
                    <img
                        alt="Mascota Búho UNAL con hoodie vino tinto"
                        className="w-44 h-52 object-contain mx-auto drop-shadow-lg relative transition-transform duration-300 hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_1w7AzkXugZ3LrRiQ4LbZuzKcBIXXuUqjvuEM4hLLapSRGYt1oNErgpmNxqIN_s8Ravsi2RYdqilRCCb3Tat2R432L3uu5F3xX-DoBRIO9IiaxCQDAT_JImlTELZH-V9RP3G7TSKeTHWCdhIZa8gYmQD4_HT__pfflwxNUC2r4_qMbRaU4lx33Zrjwi3eMduqJOxKYbsUMK_gT51bo9UfIflOeawZinKiGlcbftmtX4hdYb6a5GI1"
                    />
                    </div>
                </section>
                {/* END: Avatar Mascot Section */}
                {/* BEGIN: CEFR Level Badge & Title */}
                <section
                    className="text-center -mt-1"
                    data-purpose="competency-level"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-800 text-[11px] font-bold tracking-wide uppercase mb-0.5">
                    <svg
                        className="w-3 h-3 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                        clipRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        fillRule="evenodd"
                        />
                    </svg>
                    <span className="">Nivel Alcanzado</span>
                    </div>
                    <h3 className="text-3xl font-black text-unal-blue tracking-tight leading-none mt-1">
                    LEVEL B1
                    </h3>
                    <span className="text-[11px] font-extrabold text-slate-500 tracking-widest uppercase mt-1 block">
                    ACHIEVED
                    </span>
                </section>
                {/* END: CEFR Level Badge & Title */}
                {/* BEGIN: Overall Progress Bar */}
                <div
                    className="mt-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100"
                    data-purpose="overall-progress-bar"
                >
                    <div className="flex justify-between items-center mb-1 text-[11px] font-bold text-slate-700">
                    <span className="text-slate-500 uppercase tracking-wide">
                        PROGRESO HACIA B2
                    </span>
                    <span className="text-unal-blue font-extrabold">85% Global</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-unal-blue to-blue-500 h-2 rounded-full w-[85%] transition-all duration-500" />
                    </div>
                </div>
                {/* END: Overall Progress Bar */}
                {/* BEGIN: 5 Disciplines Breakdown */}
                <section
                    className="mt-3 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm"
                    data-purpose="skills-breakdown"
                >
                    <div className="flex justify-between items-center mb-2 px-1">
                    <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                        Desglose de Competencias
                    </h4>
                    <span className="text-[10px] font-semibold text-unal-blue bg-blue-50 px-2 py-0.5 rounded-full">
                        5 Áreas
                    </span>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5 text-center">
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100 flex flex-col justify-between items-center">
                        <span className="text-[9px] font-medium text-slate-500 block truncate w-full">
                        Grammar
                        </span>
                        <span className="text-xs font-black text-slate-800 my-1">
                        82%
                        </span>
                        <div className="w-full bg-slate-200 rounded-full h-1">
                        <div className="bg-unal-blue h-1 rounded-full w-[82%]" />
                        </div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100 flex flex-col justify-between items-center">
                        <span className="text-[9px] font-medium text-slate-500 block truncate w-full">
                        Reading
                        </span>
                        <span className="text-xs font-black text-slate-800 my-1">
                        90%
                        </span>
                        <div className="w-full bg-slate-200 rounded-full h-1">
                        <div className="bg-emerald-600 h-1 rounded-full w-[90%]" />
                        </div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100 flex flex-col justify-between items-center">
                        <span className="text-[9px] font-medium text-slate-500 block truncate w-full">
                        Vocab
                        </span>
                        <span className="text-xs font-black text-slate-800 my-1">
                        88%
                        </span>
                        <div className="w-full bg-slate-200 rounded-full h-1">
                        <div className="bg-unal-blue h-1 rounded-full w-[88%]" />
                        </div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100 flex flex-col justify-between items-center">
                        <span className="text-[9px] font-medium text-slate-500 block truncate w-full">
                        Speaking
                        </span>
                        <span className="text-xs font-black text-slate-800 my-1">
                        85%
                        </span>
                        <div className="w-full bg-slate-200 rounded-full h-1">
                        <div className="bg-blue-600 h-1 rounded-full w-[85%]" />
                        </div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100 flex flex-col justify-between items-center">
                        <span className="text-[9px] font-medium text-slate-500 block truncate w-full">
                        Listening
                        </span>
                        <span className="text-xs font-black text-slate-800 my-1">
                        80%
                        </span>
                        <div className="w-full bg-slate-200 rounded-full h-1">
                        <div className="bg-unal-blue h-1 rounded-full w-[80%]" />
                        </div>
                    </div>
                    </div>
                </section>
                {/* END: 5 Disciplines Breakdown */}
                {/* BEGIN: Primary Action Button */}
                <div className="mt-4 pt-1" data-purpose="primary-action-container">
                    <button
                    className="w-full py-3 px-4 bg-gradient-to-r from-unal-blue via-[#12497d] to-unal-blue hover:from-blue-900 hover:to-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    type="button"
                    >
                    <svg
                        className="w-4 h-4 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    <span className="">Realizar examen</span>
                    </button>
                </div>

        </div>

    </>
  );
}
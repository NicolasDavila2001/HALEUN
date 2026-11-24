import { useNavigate } from 'react-router-dom';

export default function NombreComponente() {
  const navigate = useNavigate();

  return (
    <>
            <div className="min-h-screen w-full bg-background flex flex-col justify-center items-center px-6 py-8 relative overflow-hidden">
                {/* ================= HALEUN UI HEADER (Idéntico a Menú Principal) ================= */}
                <header className="w-full bg-white border-b border-slate-200/80 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-sm z-20">
                {/* Left: Official Logos (UNAL + HALEUN) */}
                <div className="flex items-center gap-3">
                    {/* UNAL Shield Logo */}
                    <div className="h-11 w-11 flex-shrink-0 flex items-center justify-center p-0.5 rounded-lg bg-slate-50 border border-slate-200/70 hover:scale-105 transition-transform">
                    <img
                        alt="Escudo Universidad Nacional de Colombia"
                        className="h-full w-full object-contain"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuACRyWQ4z2XWARS_4uLJ_FE4VJercoN6LWIbPfJWmmGfirxH6B3edJzwkl-79vgmxJdRisZ7q_G6w3dxRbed5_C-AzQmdNrtXKH9zx9YmnFZ0aX777rvedGMJmoABwPSvGpB7FJffaJOsk_A9JrziBF6u60UkD0hEpc4LBbfaq0ZzwRkRBwCG0nTYLLNguaIq2yLPtd3NlyTF0OiU9Sc6KfEm2dt1S3bEF9aJRC1YTDa1YvRvEgmfrflplBgH8ZiOaGKw"
                    />
                    </div>
                    <div className="h-7 w-[1px] bg-slate-200" />
                    {/* HALEUN Official Logo Badge */}
                    <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0d3b66] to-[#176c3f] flex items-center justify-center text-white shadow-xs">
                        <span className="material-symbols-outlined text-[20px]">
                        translate
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                        <span className="font-display font-bold text-lg text-[#0d3b66] tracking-tight leading-none">
                            HALEUN
                        </span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#94b43b] text-white tracking-wider uppercase leading-none">
                            UNAL
                        </span>
                        </div>
                        <span className="text-[11px] font-medium text-slate-500 leading-tight">
                        Aprendizaje de Lenguas Extranjeras
                        </span>
                    </div>
                    </div>
                </div>
                {/* Center: User Level Indicator Badge (Institutional Green #94b43b) */}
                <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f7ea] border border-[#94b43b]/40 shadow-xs">
                    <span className="material-symbols-outlined text-[#7b982d] text-[18px]">
                    verified
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-700">
                    <span className="font-semibold text-slate-600">
                        Nivel Actual:
                    </span>
                    <span className="font-bold text-[#0d3b66] bg-white px-2 py-0.5 rounded-full shadow-2xs border border-[#94b43b]/30">
                        B1 Intermedio
                    </span>
                    </div>
                </div>
                {/* Right: User Information & Logout */}
                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end text-right">
                    <span className="font-bold text-xs md:text-sm text-[#0d3b66] leading-tight">
                        Laura C. Méndez
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight">
                        Facultad de Ciencias Humanas
                    </span>
                    <button
                        className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#73182C] hover:text-[#551020] hover:underline transition-colors cursor-pointer group"
                        type="button"
                    >
                        <span className="material-symbols-outlined text-[13px] group-hover:-translate-x-0.5 transition-transform">
                        logout
                        </span>
                        <span className="">Cerrar sesión</span>
                    </button>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#0d3b66] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#94b43b]/40 shadow-xs">
                    LM
                    </div>
                </div>
                </header>
                {/* Subheader / Utility Filter Bar */}
                <div className="w-full bg-white/60 border-b border-slate-200/70 px-4 sm:px-8 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-[#0d3b66]">
                    Selecciona una lección
                    </h2>
                    <p className="text-xs text-slate-500">
                    Elige la unidad temática que deseas practicar
                    </p>
                </div>
                {/* Interactive Skill Category Pills */}
                <div
                    className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-fit border border-slate-200/80"
                    id="categoryFilter"
                >
                    <button
                    className="filter-btn active-tab px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#176c3f] shadow-xs transition-all flex items-center gap-1.5"
                    data-cat="all"
                    onclick="setFilter('all')"
                    >
                    <span className="material-symbols-outlined text-[15px]">
                        auto_stories
                    </span>
                    Todos
                    </button>
                    <button
                    className="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#0d3b66] hover:bg-white/70 transition-all flex items-center gap-1.5"
                    data-cat="lectura"
                    onclick="setFilter('lectura')"
                    >
                    <span className="material-symbols-outlined text-[15px]">
                        menu_book
                    </span>
                    Lectura
                    </button>
                    <button
                    className="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#0d3b66] hover:bg-white/70 transition-all flex items-center gap-1.5"
                    data-cat="vocabulario"
                    onclick="setFilter('vocabulario')"
                    >
                    <span className="material-symbols-outlined text-[15px]">
                        spellcheck
                    </span>
                    Vocabulario
                    </button>
                    <button
                    className="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#0d3b66] hover:bg-white/70 transition-all flex items-center gap-1.5"
                    data-cat="gramatica"
                    onclick="setFilter('gramatica')"
                    >
                    <span className="material-symbols-outlined text-[15px]">
                        rule
                    </span>
                    Gramática
                    </button>
                    <button
                    className="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-[#0d3b66] hover:bg-white/70 transition-all flex items-center gap-1.5 cursor-pointer"
                    data-cat="unidad"
                    type="button"
                    >
                    <span className="material-symbols-outlined text-[15px]">
                        folder
                    </span>
                    Unidad
                    </button>
                </div>
                </div>
                {/* Lessons Gallery Grid (Simplified Cards) */}
                <div className="w-full flex-1 px-4 sm:px-8 py-5 overflow-y-auto">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    id="lessonsGrid"
                >
                    {/* Card 1: Lectura */}
                    <div
                    className="lesson-card bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    data-category="lectura"
                    >
                    <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold tracking-wide uppercase mr-1.5">
                        Unidad 1
                        </span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#176c3f] border border-emerald-200 text-[11px] font-bold tracking-wide uppercase">
                        Lectura
                        </span>
                        <h3 className="font-display font-bold text-[16px] text-[#0d3b66] mt-2.5 leading-snug">
                        Lectura Crítica: Avances Científicos y Sociedad
                        </h3>
                        <div className="flex items-center gap-4 text-slate-500 text-xs font-medium mt-3">
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            schedule
                            </span>{" "}
                            15 min
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            assignment
                            </span>{" "}
                            4 ejercicios
                        </span>
                        </div>
                    </div>
                    <button className="mt-4 w-full py-2 px-4 rounded-lg bg-[#176c3f] hover:bg-[#125732] active:scale-[0.99] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer">
                        Continuar
                        <span className="material-symbols-outlined text-[15px]">
                        arrow_forward
                        </span>
                    </button>
                    </div>
                    {/* Card 2: Vocabulario */}
                    <div
                    className="lesson-card bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    data-category="vocabulario"
                    >
                    <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold tracking-wide uppercase mr-1.5">
                        Unidad 2
                        </span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0d3b66] border border-blue-200 text-[11px] font-bold tracking-wide uppercase">
                        Vocabulario
                        </span>
                        <h3 className="font-display font-bold text-[16px] text-[#0d3b66] mt-2.5 leading-snug">
                        Vocabulario Técnico: Expresiones Académicas UNAL
                        </h3>
                        <div className="flex items-center gap-4 text-slate-500 text-xs font-medium mt-3">
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            schedule
                            </span>{" "}
                            10 min
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            assignment
                            </span>{" "}
                            5 ejercicios
                        </span>
                        </div>
                    </div>
                    <button className="mt-4 w-full py-2 px-4 rounded-lg bg-[#176c3f] hover:bg-[#125732] active:scale-[0.99] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer">
                        Continuar
                        <span className="material-symbols-outlined text-[15px]">
                        arrow_forward
                        </span>
                    </button>
                    </div>
                    {/* Card 3: Gramática */}
                    <div
                    className="lesson-card bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    data-category="gramatica"
                    >
                    <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold tracking-wide uppercase mr-1.5">
                        Unidad 3
                        </span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold tracking-wide uppercase">
                        Gramática
                        </span>
                        <h3 className="font-display font-bold text-[16px] text-[#0d3b66] mt-2.5 leading-snug">
                        Gramática Aplicada: Estructuras Condicionales y Reportadas
                        </h3>
                        <div className="flex items-center gap-4 text-slate-500 text-xs font-medium mt-3">
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            schedule
                            </span>{" "}
                            20 min
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            assignment
                            </span>{" "}
                            6 ejercicios
                        </span>
                        </div>
                    </div>
                    <button className="mt-4 w-full py-2 px-4 rounded-lg bg-[#176c3f] hover:bg-[#125732] active:scale-[0.99] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer">
                        Continuar
                        <span className="material-symbols-outlined text-[15px]">
                        arrow_forward
                        </span>
                    </button>
                    </div>
                    {/* Card 4: Lectura */}
                    <div
                    className="lesson-card bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    data-category="lectura"
                    >
                    <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold tracking-wide uppercase mr-1.5">
                        Unidad 4
                        </span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#176c3f] border border-emerald-200 text-[11px] font-bold tracking-wide uppercase">
                        Lectura
                        </span>
                        <h3 className="font-display font-bold text-[16px] text-[#0d3b66] mt-2.5 leading-snug">
                        Lectura Rápida: Artículos Universitarios Internacionales
                        </h3>
                        <div className="flex items-center gap-4 text-slate-500 text-xs font-medium mt-3">
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            schedule
                            </span>{" "}
                            25 min
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            assignment
                            </span>{" "}
                            6 ejercicios
                        </span>
                        </div>
                    </div>
                    <button className="mt-4 w-full py-2 px-4 rounded-lg bg-[#176c3f] hover:bg-[#125732] active:scale-[0.99] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer">
                        Continuar
                        <span className="material-symbols-outlined text-[15px]">
                        arrow_forward
                        </span>
                    </button>
                    </div>
                    {/* Card 5: Vocabulario */}
                    <div
                    className="lesson-card bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    data-category="vocabulario"
                    >
                    <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold tracking-wide uppercase mr-1.5">
                        Unidad 5
                        </span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0d3b66] border border-blue-200 text-[11px] font-bold tracking-wide uppercase">
                        Vocabulario
                        </span>
                        <h3 className="font-display font-bold text-[16px] text-[#0d3b66] mt-2.5 leading-snug">
                        Vocabulario Coloquial y Modismos en Contexto
                        </h3>
                        <div className="flex items-center gap-4 text-slate-500 text-xs font-medium mt-3">
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            schedule
                            </span>{" "}
                            15 min
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            assignment
                            </span>{" "}
                            4 ejercicios
                        </span>
                        </div>
                    </div>
                    <button className="mt-4 w-full py-2 px-4 rounded-lg bg-[#176c3f] hover:bg-[#125732] active:scale-[0.99] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer">
                        Continuar
                        <span className="material-symbols-outlined text-[15px]">
                        arrow_forward
                        </span>
                    </button>
                    </div>
                    {/* Card 6: Gramática */}
                    <div
                    className="lesson-card bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                    data-category="gramatica"
                    >
                    <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-bold tracking-wide uppercase mr-1.5">
                        Unidad 6
                        </span>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold tracking-wide uppercase">
                        Gramática
                        </span>
                        <h3 className="font-display font-bold text-[16px] text-[#0d3b66] mt-2.5 leading-snug">
                        Gramática Práctica: Conectores Lógicos y Cohesión Textual
                        </h3>
                        <div className="flex items-center gap-4 text-slate-500 text-xs font-medium mt-3">
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            schedule
                            </span>{" "}
                            18 min
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px] text-slate-400">
                            assignment
                            </span>{" "}
                            8 ejercicios
                        </span>
                        </div>
                    </div>
                    <button className="mt-4 w-full py-2 px-4 rounded-lg bg-[#176c3f] hover:bg-[#125732] active:scale-[0.99] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer">
                        Continuar
                        <span className="material-symbols-outlined text-[15px]">
                        arrow_forward
                        </span>
                    </button>
                    </div>
                </div>
                </div>
                {/* ================= INSTITUTIONAL FOOTER (Idéntico a SCREEN_13) ================= */}
                <footer className="w-full bg-white border-t border-slate-200/90 px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 z-20">
                <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#94b43b]" />
                    <span className="font-medium text-slate-700">
                    Universidad Nacional de Colombia
                    </span>
                    <span className="hidden md:inline text-slate-300">·</span>
                    <span className="hidden md:inline text-slate-500">
                    Guía Estudiante / Portal de Aprendizaje de Lenguas Extranjeras
                    (HALEUN)
                    </span>
                </div>
                <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-600">
                    <a className="hover:text-[#94b43b] transition-colors" href="#">
                    Guía del Estudiante
                    </a>
                    <span className="text-slate-300">|</span>
                    <a className="hover:text-[#94b43b] transition-colors" href="#">
                    Mesa de Ayuda
                    </a>
                    <span className="text-slate-300">|</span>
                    <a className="hover:text-[#94b43b] transition-colors" href="#">
                    Términos y Privacidad
                    </a>
                </div>
                </footer>
            </div>


    </>
  );
}
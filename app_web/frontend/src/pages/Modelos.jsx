import { useNavigate } from 'react-router-dom';

export default function NombreComponente() {
  const navigate = useNavigate();

  return (
    <>
        <main className="w-full flex justify-center items-center">
        <div className="flex flex-col w-full items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Tablet Physical Chassis Frame (iPad Aesthetic) */}
            <div className="relative w-full max-w-[1040px] bg-slate-900 rounded-[3rem] p-3.5 sm:p-5 shadow-2xl transition-all duration-300">
            {/* Camera Sensor on Top Bezel */}
            <div className="absolute top-2.5 sm:top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-slate-800" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            </div>
            {/* Tablet Inner Screen Display */}
            <div className="relative w-full bg-background rounded-[2.25rem] overflow-hidden flex flex-col min-h-[780px] max-h-[90vh]">
                {/* iPadOS Top Status Bar */}
                <div className="w-full bg-surface-container-low px-8 py-2.5 flex items-center justify-between text-on-surface text-label-sm font-label-sm select-none z-20">
                <div className="flex items-center gap-2">
                    <span className="font-headline-sm text-label-md tracking-tight font-bold">
                    9:41
                    </span>
                    <span className="text-label-sm text-outline font-normal">
                    UNAL Wi-Fi
                    </span>
                </div>
                <div className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-[16px]">
                    signal_cellular_alt
                    </span>
                    <span className="material-symbols-outlined text-[17px]">wifi</span>
                    <div className="flex items-center gap-1">
                    <span className="text-label-sm font-label-sm">100%</span>
                    <span className="material-symbols-outlined text-[20px]">
                        battery_full
                    </span>
                    </div>
                </div>
                </div>
                {/* Integrated Browser App Navigation Bar */}
                <div className="w-full bg-surface-container-lowest px-4 sm:px-6 py-2.5 flex items-center gap-3 shadow-sm z-20">
                {/* Navigation Controls */}
                <div className="flex items-center gap-1.5">
                    <button
                    aria-label="Regresar"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-primary hover:bg-surface-container transition-colors"
                    id="browser-back"
                    title="Regresar al panel de cursos"
                    >
                    <span className="material-symbols-outlined text-[22px]">
                        arrow_back
                    </span>
                    </button>
                    <button
                    aria-label="Avanzar"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-outline-variant hover:bg-surface-container transition-colors cursor-not-allowed"
                    title="Avanzar"
                    >
                    <span className="material-symbols-outlined text-[22px]">
                        arrow_forward
                    </span>
                    </button>
                    <button
                    aria-label="Recargar"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                    id="browser-refresh"
                    title="Recargar página"
                    >
                    <span className="material-symbols-outlined text-[20px]">
                        refresh
                    </span>
                    </button>
                </div>
                {/* Smart Omnibox / URL Field */}
                <div className="flex-1 flex items-center justify-between bg-surface-container-low rounded-xl px-4 py-1.5 transition-all">
                    <div className="flex items-center gap-2 min-w-0">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                        lock
                    </span>
                    <span className="font-label-md text-label-md text-primary font-bold truncate">
                        haleun.unal.edu.co
                    </span>
                    <span className="font-label-md text-label-md text-outline truncate hidden sm:inline">
                        /plataforma/seleccion-ia
                    </span>
                    </div>
                    <div className="flex items-center gap-2 text-outline">
                    <span className="text-label-sm bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-label-sm font-semibold hidden md:inline-flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> UNAL
                        SSL
                    </span>
                    <span className="material-symbols-outlined text-[19px] cursor-pointer hover:text-on-surface">
                        star
                    </span>
                    </div>
                </div>
                {/* Window & App Actions */}
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <button
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container hover:text-primary transition-colors"
                    title="Compartir"
                    >
                    <span className="material-symbols-outlined text-[20px]">
                        ios_share
                    </span>
                    </button>
                    <button
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container hover:text-primary transition-colors"
                    title="Pestañas"
                    >
                    <span className="material-symbols-outlined text-[20px]">
                        filter_none
                    </span>
                    </button>
                </div>
                </div>
                {/* Scrollable Web View Content */}
                <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-6 sm:py-8 flex flex-col justify-between">
                {/* Header / Institutional Identity Block */}
                <div>
                    <div className="flex items-center justify-start pb-2">
                    <button
                        onclick="window.history.back()"
                        className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-primary hover:bg-surface-container transition-colors font-label-md text-label-md font-semibold"
                        title="Regresar"
                    >
                        <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">
                        arrow_back
                        </span>
                        <span className="">Regresar</span>
                    </button>
                    </div>
                    {/* Main Directive Headline (Matches visual style in reference) */}
                    <div className="mt-3 mb-8">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                        Selecciona el modelo de IA que desea usar hoy
                    </h1>
                    </div>
                    {/* LLM Cards Grid Container */}
                    <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                    id="llm-options-container"
                    >
                    {/* Left Column: Friendly Owl Mascot Avatar Waving Hello */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center p-2">
                        <div className="relative flex items-center justify-center max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
                        <img
                            src="https://lh3.googleusercontent.com/aida/AEtjO1UVobOoMGEI9W24AXm0Mumw_TY_jNgCGRjWlu1je_4i3qTcdYc2Z_sFpp0HGZH2QG3UWRUC9ql_9JFZZpwI4nMNaObOwFOn1bKfWXPmyZPZsxGj9212ZR9WiUWy80RRg5GYWGl-jlI7PpREEZXmBWrL-GNO0AxFKcE7932Eg8h38MfmTSI89_A0uRVEstMrYXl2KFkYyvBfT7x8WRVN6ihsmOe6LwhvJ6V3MNgLEXGKnD4lH9AOr7ci04s"
                            alt="Mascota Búho UNAL saludando"
                            className="w-full h-auto object-contain select-none hover:scale-105 transition-transform duration-300 mix-blend-multiply bg-transparent"
                            style={{
                            mixBlendMode: "multiply",
                            filter: "contrast(1.02)"
                            }}
                        />
                        </div>
                    </div>
                    {/* Right Column: AI LLM Selection Cards */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Option 1: ChatGPT-4o (Active Default) */}
                        <div
                        className="model-card group relative rounded-2xl p-4 sm:p-5 hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col justify-between bg-surface-container-low shadow-md"
                        data-model="chatgpt-4o"
                        >
                        <div className="flex items-center gap-4 py-2">
                            <div className="w-16 h-16 rounded-2xl bg-secondary-container/70 flex items-center justify-center shrink-0 text-on-secondary-container shadow-sm group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-[36px]">
                                forum
                            </span>
                            </div>
                            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight truncate">
                            Chat GPT-4o
                            </h2>
                        </div>
                        </div>
                        {/* Option 2: Claude 3.5 Sonnet */}
                        <div
                        className="model-card group relative bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col justify-between"
                        data-model="claude-3-5"
                        >
                        <div className="flex items-center gap-4 py-2">
                            <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed flex items-center justify-center shrink-0 text-on-tertiary-fixed-variant shadow-sm group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-[36px]">
                                psychology_alt
                            </span>
                            </div>
                            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight truncate">
                            Claude 3.5 Sonnet
                            </h2>
                        </div>
                        </div>
                        {/* Option 3: Gemini 1.5 Pro */}
                        <div
                        className="model-card group relative bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col justify-between"
                        data-model="gemini-1-5"
                        >
                        <div className="flex items-center gap-4 py-2">
                            <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary-container shadow-sm group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-[36px]">
                                auto_awesome
                            </span>
                            </div>
                            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight truncate">
                            Gemini 1.5 Pro
                            </h2>
                        </div>
                        </div>
                        {/* Option 4: GPT-5 Preview */}
                        <div
                        className="model-card group relative bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col justify-between"
                        data-model="gpt-5"
                        >
                        <div className="flex items-center gap-4 py-2">
                            <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center shrink-0 text-primary shadow-sm group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-[36px]">
                                neurology
                            </span>
                            </div>
                            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight truncate">
                            GPT-5 Preview
                            </h2>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Bottom Action Bar / Session Confirmation */}
                <div className="mt-8 pt-5 bg-surface-container-lowest -mx-6 sm:-mx-10 px-6 sm:px-10 -mb-6 sm:-mb-8 py-5 flex items-center justify-center shadow-sm">
                    <button
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary px-10 py-3 rounded-xl font-label-lg text-label-lg font-bold shadow-md hover:shadow-lg transition-all active:translate-y-0.5"
                    id="confirm-selection"
                    >
                    <span className="">Continuar</span>
                    <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                    </span>
                    </button>
                </div>
                </div>
                {/* iPadOS Home Indicator Gesture Bar */}
                <div className="w-full py-2 flex items-center justify-center bg-surface-container-lowest">
                <div className="w-36 h-1 rounded-full bg-slate-400" />
                </div>
            </div>
            </div>
        </div>
        </main>

    </>
  );
}
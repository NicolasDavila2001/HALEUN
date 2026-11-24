import { useNavigate } from 'react-router-dom';
import nachoHome from '../assets/Nacho_Home.png';

export default function NombreComponente() {
  const navigate = useNavigate();

  return (
    <>
        <>
        <div className="min-h-screen w-full bg-background flex flex-col justify-center items-center px-6 py-8 relative overflow-hidden">
                <header className="w-full bg-white border-b border-slate-200/80 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-sm z-20">
                {/* Left: Official Logos (UNAL + HALEUN) */}
                <div className="flex items-center gap-3">
                    {/* UNAL Shield Logo */}
                    <div className="h-11 w-11 flex-shrink-0 flex items-center justify-center p-0.5 rounded-lg bg-slate-50 border border-slate-200/70 hover:scale-105 transition-transform">
                    <img
                        alt="Escudo Universidad Nacional de Colombia"
                        className="h-full w-full object-contain"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoOtDMlWpTpgGFOEAH6_g7EsiymDrKlsnwpukBI429tWoPMWG0EsfVqs4nBi1Lng5md8kKdKiNmHIeUQ-trmYqYSl-LW7deNAiBJaJBOnZ4V4iyAwW5Dg8jThWhYXHtRbMSA43qIL9k3ixhe9yL_07ytjyGTdcy72y_Mw0alheGXuC_L3MaR6p1LSloD4fz-V1UEBn8iSryC0GV421nd_9ffeJ9jwY_fwobi0OzjQcuy6xPv4d9vcesXJ2Dw2YRsoFDQ"
                    />
                    </div>
                    <div className="h-7 w-[1px] bg-slate-200" />
                    {/* HALEUN Official Logo Badge */}
                    <div className="flex items-center gap-2">
                    <img
                        alt="HALEUN Logo"
                        className="h-10 w-10 object-contain drop-shadow-sm"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVQZJbsrXrOENKM5MQOp-07wTYe-_vtgTLLE_Xrvrenw8nx_YB8O4hCRPCsNMSc4Pht3fx6GxBqW5pxc9-aRokxaNgAbpDMVt029lUZmrOrcwF6MT34TGTmO31QuLO51o1lrJE9xd3yuMsnuS_hj_dgpNRAxOI8aM8KImLKIj5vzAZtI3O7E_Q_XJrsj8x9-r4FnjkPUQpr-kNjyHu6172z1B1dCqpAqrA72Wa6EvjUugTHuAszArqT2hgmH553iKTMQ"
                    />
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                        <span className="font-display font-bold text-lg text-unal-navy tracking-tight leading-none">
                            HALEUN
                        </span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-unal-green text-white tracking-wider uppercase leading-none">
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
                <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-unal-green-light border border-unal-green/30 shadow-xs">
                    <span className="material-symbols-outlined text-unal-green text-[18px]">
                    verified
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-700">
                    <span className="font-semibold text-slate-600">
                        Nivel Actual:
                    </span>
                    <span className="font-bold text-unal-navy bg-white px-2 py-0.5 rounded-full shadow-2xs border border-unal-green/20">
                        B1 Intermedio
                    </span>
                    </div>
                </div>
                {/* Right: User Information & Logout */}
                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end text-right">
                    <span className="font-bold text-xs md:text-sm text-unal-navy leading-tight">
                        Camilo Torres
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight">
                        Facultad de Ciencias Humanas
                    </span>
                    <button
                        className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold text-unal-maroon hover:text-unal-maroon-dark hover:underline transition-colors cursor-pointer group"
                        type="button" onClick={() => navigate('/')}
                    >
                        <span className="material-symbols-outlined text-[13px] group-hover:-translate-x-0.5 transition-transform">
                        logout
                        </span>
                        <span>Cerrar sesión</span>
                    </button>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-unal-navy text-white flex items-center justify-center font-bold text-xs ring-2 ring-unal-green/40 shadow-xs">
                    CT
                    </div>
                </div>
                </header>
                {/* ================= MAIN CONTENT BODY ================= */}
                <main className="flex-1 bg-gradient-to-b from-[#f8fafc] via-[#f0f7ea]/35 to-[#f8fafc] px-4 sm:px-8 py-4 sm:py-5 flex flex-col items-center justify-between relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-unal-green/5 blur-3xl pointer-events-none" />
                <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-unal-navy/5 blur-3xl pointer-events-none" />
                {/* Headline Greeting */}
                <div className="text-center max-w-xl mx-auto z-10 pt-1">
                    <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-[32px] text-unal-navy tracking-tight leading-tight">
                    ¡Bienvenido a{" "}
                    <span className="text-unal-green inline-block">HALEUN</span>!
                    </h1>
                    <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 font-medium mt-0.5">
                    ¿Qué deseas hacer hoy?
                    </p>
                </div>
                {/* 3 Compact Interactive Option Cards */}
                <div className="w-full max-w-[820px] grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5 my-3 z-10">
                    {/* Option 1: Lecciones (Institutional Green & UNAL Navy Accents) */}
                    <button
                    className="group relative bg-white hover:bg-slate-50/80 rounded-xl p-3.5 sm:p-4 border-2 border-transparent hover:border-unal-green/50 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer"
                    type="button" onClick={() => navigate('/Lecciones')}
                    >
                    {/* Top color bar indicator */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-unal-green to-emerald-500 rounded-t-xl" />
                    {/* Icon Container */}
                    <div className="w-13 h-13 rounded-xl bg-unal-green/15 text-unal-green flex items-center justify-center mb-2 group-hover:scale-105 group-hover:bg-unal-green group-hover:text-white transition-all shadow-inner">
                        <span className="material-symbols-outlined text-[28px]">
                        menu_book
                        </span>
                    </div>
                    <h2 className="font-display font-bold text-base sm:text-lg text-unal-navy group-hover:text-unal-green-dark transition-colors">
                        Lecciones
                    </h2>
                    </button>
                    {/* Option 2: Conversación (Mic/Audio with Blue/Navy theme) */}
                    <button
                    className="group relative bg-white hover:bg-slate-50/80 rounded-xl p-3.5 sm:p-4 border-2 border-transparent hover:border-unal-navy/40 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer"
                    type="button" onClick={() => navigate('/Conversacion')}
                    >
                    {/* Top color bar indicator */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-unal-navy to-sky-500 rounded-t-xl" />
                    {/* Icon Container */}
                    <div className="w-13 h-13 rounded-xl bg-unal-navy/10 text-unal-navy flex items-center justify-center mb-2 group-hover:scale-105 group-hover:bg-unal-navy group-hover:text-white transition-all shadow-inner">
                        <span className="material-symbols-outlined text-[28px]">
                        mic
                        </span>
                    </div>
                    <h2 className="font-display font-bold text-base sm:text-lg text-unal-navy group-hover:text-blue-700 transition-colors">
                        Conversación
                    </h2>
                    </button>
                    {/* Option 3: Examen (Trophy / Assessment with Maroon/Gold Accents) */}
                    <button
                    className="group relative bg-white hover:bg-slate-50/80 rounded-xl p-3.5 sm:p-4 border-2 border-transparent hover:border-unal-maroon/40 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer"
                    type="button" onClick={() => navigate('/Examen')}
                    >
                    {/* Top color bar indicator */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-unal-maroon to-amber-500 rounded-t-xl" />
                    {/* Icon Container */}
                    <div className="w-13 h-13 rounded-xl bg-unal-maroon/10 text-unal-maroon flex items-center justify-center mb-2 group-hover:scale-105 group-hover:bg-unal-maroon group-hover:text-white transition-all shadow-inner">
                        <span className="material-symbols-outlined text-[28px]">
                        emoji_events
                        </span>
                    </div>
                    <h2 className="font-display font-bold text-base sm:text-lg text-unal-navy group-hover:text-unal-maroon transition-colors">
                        Examen
                    </h2>
                    </button>
                </div>
                {/* Mascot Section: Búho UNAL pointing enthusiastically at the 3 options */}
                <div className="w-full flex flex-col items-center justify-center relative mt-0 sm:mt-1">
                    {/* Ambient Glow */}
                    <div className="absolute w-44 h-44 rounded-full bg-unal-green/20 blur-2xl -z-10" />
                    {/* Owl mascot seamlessly integrated */}
                    <div className="h-44 sm:h-52 md:h-56 select-none flex items-center justify-center">
                    <img
                        alt="Búho Mascota Universidad Nacional con alas levantadas señalando las opciones"
                        className="h-full w-auto object-contain [mix-blend-mode:multiply] drop-shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                        src={nachoHome}
                    />
                    </div>
                </div>
                </main>
                {/* ================= INSTITUTIONAL FOOTER ================= */}
                <footer className="w-full bg-white border-t border-slate-200/90 px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 z-20">
                <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-unal-green" />
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
                    <a className="hover:text-unal-green transition-colors" href="#">
                    Guía del Estudiante
                    </a>
                    <span className="text-slate-300">|</span>
                    <a className="hover:text-unal-green transition-colors" href="#">
                    Mesa de Ayuda
                    </a>
                    <span className="text-slate-300">|</span>
                    <a className="hover:text-unal-green transition-colors" href="#">
                    Términos y Privacidad
                    </a>
                </div>
                </footer>
        </div>
        </>

    </>
  );
}
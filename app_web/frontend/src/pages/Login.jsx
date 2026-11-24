import { useNavigate } from 'react-router-dom';

export default function NombreComponente() {
  const navigate = useNavigate();

  return (
    <>
        <div className="min-h-screen w-full bg-background flex flex-col justify-center items-center px-6 py-8 relative overflow-hidden">
                <header className="w-full max-w-lg flex items-center justify-between mb-4 px-1">
                    <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-surface-container text-primary font-headline-sm">
                        <span className="material-symbols-outlined text-[16px]">
                        public
                        </span>
                    </span>
                    <span className="font-label-sm uppercase tracking-wider text-outline font-bold text-[10px] sm:text-[11px]">
                        Portal Académico Multilingüe
                    </span>
                    </div>
                    {/* Language Switcher */}
                    <div className="relative group">
                    <button
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm hover:bg-surface-container text-on-surface text-label-md font-label-md transition-all cursor-pointer"
                        type="button"
                    >
                        <span className="material-symbols-outlined text-[15px] text-secondary">
                        translate
                        </span>
                        <span id="current-lang-label" className="">
                        Español (ES)
                        </span>
                        <span className="material-symbols-outlined text-[15px] text-outline transition-transform group-hover:rotate-180">
                        expand_more
                        </span>
                    </button>
                    <div className="absolute right-0 mt-1.5 w-44 rounded-xl bg-surface-container-lowest shadow-xl py-1.5 z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <button
                        className="w-full text-left px-3.5 py-1.5 font-label-md text-label-md text-primary flex items-center justify-between hover:bg-surface-container-low transition-colors"
                        onclick="selectLang('Español (ES)')"
                        type="button"
                        >
                        <span className="">Español</span>
                        <span className="text-secondary text-[10px] font-bold">
                            ES
                        </span>
                        </button>
                        <button
                        className="w-full text-left px-3.5 py-1.5 font-label-md text-label-md text-on-surface-variant flex items-center justify-between hover:bg-surface-container-low transition-colors"
                        onclick="selectLang('English (EN)')"
                        type="button"
                        >
                        <span className="">English</span>
                        <span className="text-outline text-[10px] font-bold">EN</span>
                        </button>
                        <button
                        className="w-full text-left px-3.5 py-1.5 font-label-md text-label-md text-on-surface-variant flex items-center justify-between hover:bg-surface-container-low transition-colors"
                        onclick="selectLang('Français (FR)')"
                        type="button"
                        >
                        <span className="">Français</span>
                        <span className="text-outline text-[10px] font-bold">FR</span>
                        </button>
                        <button
                        className="w-full text-left px-3.5 py-1.5 font-label-md text-label-md text-on-surface-variant flex items-center justify-between hover:bg-surface-container-low transition-colors"
                        onclick="selectLang('Deutsch (DE)')"
                        type="button"
                        >
                        <span className="">Deutsch</span>
                        <span className="text-outline text-[10px] font-bold">DE</span>
                        </button>
                        <button
                        className="w-full text-left px-3.5 py-1.5 font-label-md text-label-md text-on-surface-variant flex items-center justify-between hover:bg-surface-container-low transition-colors"
                        onclick="selectLang('中文 (ZH)')"
                        type="button"
                        >
                        <span className="">中文</span>
                        <span className="text-outline text-[10px] font-bold">ZH</span>
                        </button>
                    </div>
                    </div>
                </header>
                {/* Card Container */}
                <div className="w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-xl shadow-primary/5 p-6 sm:p-8 relative z-10 flex flex-col">
                    {/* Sede Badge */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-label-sm text-[10px]">
                        SEDE BOGOTÁ • MEDELLÍN • MANIZALES • PALMIRA
                    </span>
                    </div>
                    {/* HALEUN Branding & Logo */}
                    <div className="flex flex-col items-center text-center mb-5">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-1 flex items-center justify-center rounded-2xl overflow-hidden p-1">
                        <img
                        alt="Logotipo oficial de HALEUN"
                        className="w-full h-full object-contain filter drop-shadow-sm transition-transform hover:scale-105 duration-300"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE1lsn4i7fjh8N-y2QMdr2_iLc1O03FNOz2AbEfKZ3TA8BvXdhlfJx7yhzDxDmQnqUBKuDoez3bVgwLccZ7d2iQX0EQpgmJ_DDV_TyULcCCHEi6Sj-lPDxHFDS5KuD6RVUxR7nM2oq_7wekjRxrGh4hnqJVBLuQPuaE12I55-rhOU7kBcD9otYBWp2pjMYKADV6ynDDXSrW6Sb_4bzBy92cszdv3i4tiXT6BOsQbm5-sGAuCcAiuQyVjzcN1rFXjW3wg"
                        />
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="font-label-md text-label-md text-secondary font-bold tracking-wide uppercase">
                        Sistema de Lenguas UNAL
                        </span>
                    </div>
                    <p className="mt-1.5 text-on-surface-variant font-body-sm text-body-sm text-[13px] max-w-sm">
                        Ingresa con tus credenciales institucionales para acceder a tus
                        rutas pedagógicas, evaluaciones y clubes de conversación.
                    </p>
                    </div>
                    {/* Single-Sign-On */}
                    {/* Visual Divider */}
                    {/* Form */}
                    <form className="space-y-3.5" id="haleun-login-form" onSubmit={(e) => { e.preventDefault(); navigate('/inicio'); }}>
                    <div>
                        <label
                        className="block font-label-md text-label-md text-primary mb-1"
                        htmlFor="email-input"
                        >
                        Correo electrónico institucional
                        </label>
                        <div className="relative rounded-xl bg-surface-container-low transition-all focus-within:bg-surface-container-lowest focus-within:shadow-md">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-primary">
                            <span className="material-symbols-outlined text-[18px]">
                            alternate_email
                            </span>
                        </div>
                        <input
                            className="block w-full pl-10 pr-10 py-2.5 bg-transparent text-on-surface font-body-sm text-[14px] placeholder:text-outline/70 focus:outline-none"
                            id="email-input"
                            name="email"
                            oninput="validateEmailField(this)"
                            placeholder="usuario@unal.edu.co"
                            required=""
                            type="email"
                        />
                        <div
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none opacity-0 text-secondary transition-opacity"
                            id="email-valid-indicator"
                        >
                            <span className="material-symbols-outlined text-[18px]">
                            check_circle
                            </span>
                        </div>
                        </div>
                        <p
                        className="mt-1 font-label-sm text-[11px] text-outline pl-1"
                        id="email-helper"
                        >
                        Usa tu usuario de correo oficial @unal.edu.co
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-1">
                        <label
                            className="block font-label-md text-label-md text-primary"
                            htmlFor="password-input"
                        >
                            Contraseña
                        </label>
                        <a
                            className="font-label-sm text-[12px] text-secondary hover:text-on-secondary-container transition-colors"
                            href="#"
                        >
                            ¿Olvidaste tu contraseña?
                        </a>
                        </div>
                        <div className="relative rounded-xl bg-surface-container-low transition-all focus-within:bg-surface-container-lowest focus-within:shadow-md">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-primary">
                            <span className="material-symbols-outlined text-[18px]">
                            lock
                            </span>
                        </div>
                        <input
                            className="block w-full pl-10 pr-10 py-2.5 bg-transparent text-on-surface font-body-sm text-[14px] placeholder:text-outline/70 focus:outline-none"
                            id="password-input"
                            name="password"
                            placeholder="••••••••••••"
                            required=""
                            type="password"
                        />
                        <button
                            aria-label="Alternar visibilidad de contraseña"
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-outline hover:text-primary transition-colors cursor-pointer"
                            onclick="togglePasswordVisibility()"
                            type="button"
                        >
                            <span
                            className="material-symbols-outlined text-[18px]"
                            id="password-toggle-icon"
                            >
                            visibility
                            </span>
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-0.5">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                            className="w-4 h-4 rounded text-secondary bg-surface-container focus:ring-secondary accent-secondary cursor-pointer"
                            id="remember-me"
                            type="checkbox"
                        />
                        <span className="font-body-sm text-[13px] text-on-surface-variant">
                            Recordar sesión en este equipo
                        </span>
                        </label>
                        <div className="flex items-center gap-1 text-outline">
                        <span className="material-symbols-outlined text-[15px]">
                            verified_user
                        </span>
                        <span className="font-label-sm text-[11px]">SSL Seguro</span>
                        </div>
                    </div>
                    <button
                        className="w-full mt-1 py-3 px-6 rounded-xl bg-primary text-on-primary font-headline-sm text-[17px] tracking-wide shadow-md hover:bg-primary-container active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer group"
                        id="login-button"
                        type="submit"
                    >
                        <span className="">Iniciar sesión</span>
                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                        arrow_forward
                        </span>
                    </button>
                    </form>
                    {/* Feedback */}
                    <div
                    className="mt-3 p-2.5 rounded-xl bg-secondary-container/40 text-on-secondary-container font-label-md text-label-md flex items-center gap-2 hidden"
                    id="login-feedback"
                    >
                    <span className="material-symbols-outlined text-[16px]">
                        info
                    </span>
                    <span id="login-feedback-text" className="">
                        Autenticando con el servidor UNAL...
                    </span>
                    </div>
                    {/* Register footer in card */}
                    <div className="mt-6 pt-4 border-t-0 bg-surface-container-low/50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-4 rounded-b-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-2">
                    <div className="text-left">
                        <p className="font-label-sm text-label-sm font-semibold text-on-surface">
                        ¿No tienes una cuenta aún?
                        </p>
                        <p className="font-body-sm text-[12px] text-outline">
                        Solicita acceso o regístrate con tu cuenta institucional
                        </p>
                    </div>
                    <a
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-surface-container text-primary hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors font-label-sm text-label-sm font-bold"
                        href="#"
                    >
                        <span className="">Registrar cuenta</span>
                        <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                        </span>
                    </a>
                    </div>
                </div>
                {/* Secondary Bottom Footer Links inside tablet */}
                <footer className="w-full max-w-lg mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left px-1">
                    <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-surface-container text-primary font-label-sm text-[10px] font-bold">
                        Inglés
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-surface-container text-secondary font-label-sm text-[10px] font-bold">
                        Francés
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-surface-container text-on-tertiary-container font-label-sm text-[10px] font-bold">
                        Alemán
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-surface-container text-error font-label-sm text-[10px] font-bold">
                        Chino
                    </span>
                    </div>
                    <div className="flex items-center gap-3 text-outline font-label-sm text-[11px]">
                    <a className="hover:text-primary transition-colors" href="#">
                        Términos
                    </a>
                    <span className="">•</span>
                    <a className="hover:text-primary transition-colors" href="#">
                        Privacidad DNINFO
                    </a>
                    <span className="">•</span>
                    <a className="hover:text-primary transition-colors" href="#">
                        Mesa de Ayuda
                    </a>
                    </div>
                </footer>
            </div>


    </>
  );
}
import { useNavigate } from 'react-router-dom';

export default function NombreComponente() {
  const navigate = useNavigate();

  return (
    <>
            <div className="min-h-screen w-full bg-background flex flex-col justify-center items-center px-6 py-8 relative overflow-hidden">
                {/* BEGIN: ScreenTopArea */}
                <header className="w-full pt-3 px-6 relative z-20 flex flex-col items-center">
                </header>
                {/* END: ScreenTopArea */}
                {/* BEGIN: MascotSection */}
                {/* Prominent Mascot Image in the Center */}
                <div
                className="flex-1 flex items-center justify-center px-2 py-0 relative overflow-visible z-10"
                data-purpose="mascot-display"
                >
                <img
                    alt="Mascota Búho UNAL"
                    className="w-full object-contain mx-auto block mix-blend-multiply drop-shadow-sm select-none pointer-events-none"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvZioJ-AuK76aq7uVm3pszWeRIrUlZLNlrVt3bjQj1iPgceCJ3yo0JQwmRIPZtLHPH-AXJQcpkGH2uQ_U-I_1h7XvSs9EHv7c63yLZ-lJGi1d4IMiem6jhpwAQ0btmI6Y8CO0GirOja3uiJTvpP3QcMxmoo7xAKWccHPEbfvImIQ6vm4fZXUdv0PhmRT5U8I3FXBVuNpIM807biNfBOCoIl-ZbFUN2x4VGYFk0KRrSAoKOi0ySZbUOm890LnnRE8EmwQ"
                    style={{
                    width: "100%",
                    maxWidth: 380,
                    height: 440,
                    maxHeight: 480,
                    objectFit: "contain",
                    margin: "-20px auto -30px",
                    display: "block",
                    mixBlendMode: "multiply",
                    transform: "scale(1.15)"
                    }}
                />
                </div>
                {/* END: MascotSection */}
                {/* BEGIN: SpeechInteractionArea */}
                <footer className="w-full px-5 pb-7 flex flex-col items-center relative z-20 space-y-3">
                {/* Transcribed Text Box with Audio Wave Indicator */}
                <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-neutral-200/80 flex flex-col items-center text-center">
                    <p className="text-[13px] leading-relaxed text-neutral-700 font-medium tracking-normal select-none">
                    «Hola, actualmente estudio Ingeniería en la UNAL y me gustaría
                    practicar mi pronunciación para el examen de clasificación...»
                    </p>
                    {/* Subtle audio waves indicator below transcript */}
                    <div
                    aria-hidden="true"
                    className="flex items-center justify-center space-x-1 mt-3"
                    >
                    <span className="w-0.5 h-2 bg-[#94b43b] rounded-full opacity-60" />
                    <span className="w-0.5 h-3.5 bg-[#94b43b] rounded-full opacity-80" />
                    <span className="w-0.5 h-5 bg-[#94b43b] rounded-full" />
                    <span className="w-0.5 h-2.5 bg-[#94b43b] rounded-full opacity-70" />
                    <span className="w-0.5 h-4 bg-[#94b43b] rounded-full" />
                    <span className="w-0.5 h-6 bg-[#94b43b] rounded-full" />
                    <span className="w-0.5 h-3 bg-[#94b43b] rounded-full opacity-75" />
                    <span className="w-0.5 h-5 bg-[#94b43b] rounded-full" />
                    <span className="w-0.5 h-2 bg-[#94b43b] rounded-full opacity-60" />
                    </div>
                </div>
                {/* Circular Microphone Action Button */}
                <div className="flex justify-center items-center pt-1">
                    <button
                    aria-label="Grabar voz"
                    className="w-16 h-16 rounded-full bg-[#94b43b] hover:bg-[#85a334] text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 focus:outline-none mic-pulse"
                    type="button"
                    >
                    {/* Microphone Icon */}
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                    </button>
                </div>
                {/* Phone Home Indicator Bar */}
                <div className="w-32 h-1 bg-neutral-300 rounded-full mt-2" />
                </footer>
                {/* END: SpeechInteractionArea */}
            </div>

    </>
  );
}
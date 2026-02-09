import type { EventData } from "@/types/EventData";
import { useEffect, useState } from "react";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import MusicButton from "@/components/MusicButton";
import guerreraspop from "@/assets/pictures/guerreras-pop.png";
import guerreraspop2 from "@/assets/pictures/guerreras-pop-2.png";
import guerreraspop3 from "@/assets/pictures/guerreras-pop-name.png";

interface Sofia10TemplateProps {
  data: EventData;
}

export default function Sofia10Template({ data }: Sofia10TemplateProps) {
  const [opened, setOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [stars] = useState(() => 
    Array.from({ length: 20 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }))
  );

  const [circles] = useState(() =>
    Array.from({ length: 15 }, () => ({
      width: 50 + Math.random() * 100,
      height: 50 + Math.random() * 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
      colorIndex: Math.floor(Math.random() * 4),
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }))
  );

  const [hearts] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({
      top: 10 + i * 10,
      left: Math.random() * 100,
      delay: i * 0.3,
      duration: 2 + Math.random(),
      emojiIndex: Math.floor(Math.random() * 4),
    }))
  );

  const message = `Hola 👋\nConfirmo mi asistencia a la fiesta de cumpleaños\n¡Gracias por la invitación!`;
  const encodedMessage = encodeURIComponent(message);

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);

  return (
    <>
      {!opened && (
        <div
          className={`fixed inset-0 z-50 bg-linear-to-br from-pink-600 via-purple-600 to-blue-600 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
            isOpening ? "opacity-0 scale-150" : "opacity-100 scale-100"
          }`}
        >
          {/* Estrellas flotantes */}
          <div className="absolute inset-0">
            {stars.map((star, i) => (
              <div
                key={i}
                className="absolute text-2xl animate-pulse"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  animationDelay: `${star.delay}s`,
                }}
              >
                ⭐
              </div>
            ))}
          </div>

          <div className="text-center px-6 relative z-10 flex flex-col justify-center items-center">
            <img
              src={guerreraspop2}
              alt="Guerreras pop"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-2xl "
            />

            <h2 className="text-7xl font-bold mb-4 bg-linear-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(236,72,153,0.6)]">
              ¡Guerrera Pop!
            </h2>
            <h3 className="text-5xl font-bold text-white mb-4">{data.name}</h3>
            <p className="text-3xl font-bold text-pink-200 mb-12">
              Cumple {data.age} años
            </p>

            <button
              onClick={() => {
                setIsOpening(true);
                setTimeout(() => setOpened(true), 1000);
              }}
              className="
                relative px-14 py-5
                bg-linear-to-r from-pink-500 to-purple-500
                text-white
                rounded-full
                font-bold
                text-xl
                shadow-[0_0_40px_rgba(236,72,153,0.6)]
                hover:shadow-[0_0_60px_rgba(236,72,153,0.9)]
                hover:scale-110
                active:scale-95
                transition-all duration-300
                cursor-pointer
                border-2 border-pink-300
              "
            >
              <span className="relative z-10">¡Abrir Invitación!</span>
            </button>

            <p className="mt-8 text-pink-200 text-sm tracking-[0.3em] animate-pulse">
              ¡PREPÁRATE PARA LA AVENTURA!
            </p>
          </div>
        </div>
      )}

      <article className="bg-linear-to-br from-fuchsia-200 via-pink-200 to-purple-200 min-h-screen relative overflow-hidden">
        {/* Círculos decorativos flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          {circles.map((circle, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${circle.width}px`,
                height: `${circle.height}px`,
                top: `${circle.top}%`,
                left: `${circle.left}%`,
                background: `radial-gradient(circle, ${
                  [
                    "rgba(236, 72, 153, 0.2)",
                    "rgba(168, 85, 247, 0.2)",
                    "rgba(59, 130, 246, 0.2)",
                    "rgba(244, 114, 182, 0.2)",
                  ][circle.colorIndex]
                }, transparent)`,
                animationDelay: `${circle.delay}s`,
                animationDuration: `${circle.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Corazones flotantes */}
        <div className="absolute inset-0">
          {hearts.map((heart, i) => (
            <div
              key={i}
              className="absolute text-3xl opacity-30 animate-bounce"
              style={{
                top: `${heart.top}%`,
                left: `${heart.left}%`,
                animationDelay: `${heart.delay}s`,
                animationDuration: `${heart.duration}s`,
              }}
            >
              {["💖", "💜", "💙", "✨"][heart.emojiIndex]}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto px-6 py-10 text-center relative z-10">
          {/* Header */}
          <div className="mb-10 relative">
            <div className="relative mb-10">
              <img
                src={guerreraspop3}
                alt="Guerreras pop"
                className="w-full max-w-md mx-auto mb-4 h-auto object-contain"
              />
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-700 wrap-break-word">
                Cumple {data.age} años
              </p>
            </div>

            <div className="bg-linear-to-r from-pink-400 via-purple-400 to-fuchsia-400 rounded-full p-8 mb-8 shadow-2xl">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white drop-shadow-lg wrap-break-word">
                ¡PODER MÁGICO!
              </h1>
            </div>

            <div className="flex justify-center gap-3 mb-6 text-5xl">
              <span className="animate-bounce">💖</span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                💜
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                💙
              </span>
            </div>
            {/* 
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-fuchsia-700 mb-4 break-words">
              {data.name}
            </h2> */}

            {/* Varitas mágicas */}
            <div className="flex justify-center items-center gap-4 mt-8 text-6xl">
              <span className="animate-pulse">🌟</span>
              <span
                className="animate-pulse"
                style={{ animationDelay: "0.3s" }}
              >
                ✨
              </span>
              <span
                className="animate-pulse"
                style={{ animationDelay: "0.6s" }}
              >
                🌟
              </span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-16">
            <div className="bg-linear-to-r from-pink-300 to-purple-300 rounded-3xl p-6 shadow-xl">
              <div className="text-fuchsia-800">
                <h3 className="text-4xl font-bold text-fuchsia-700">
                  ¡Preparate!
                </h3>
                <CountDown data={data} />
              </div>
            </div>
          </div>

          {/* Detalles del evento */}
          <div className="relative mb-16">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-4 border-fuchsia-400">
              <h3 className="text-4xl font-bold text-fuchsia-700 mb-10">
                ¡Detalles Mágicos!
              </h3>

              <div className="space-y-8 text-left">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 bg-linear-to-br from-fuchsia-500 to-pink-600 rounded-full flex items-center justify-center shrink-0 shadow-lg text-4xl">
                    📅
                  </div>
                  <div>
                    <p className="font-bold text-fuchsia-900 text-2xl mb-1">
                      Fecha
                    </p>
                    <p className="text-fuchsia-700 text-xl">{data.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 bg-linear-to-br from-fuchsia-500 to-pink-600 rounded-full flex items-center justify-center shrink-0 shadow-lg text-4xl">
                    ⏰
                  </div>
                  <div>
                    <p className="font-bold text-fuchsia-900 text-2xl mb-1">
                      Hora
                    </p>
                    <p className="text-fuchsia-700 text-xl">{data.hour}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 bg-linear-to-br from-fuchsia-500 to-pink-600 rounded-full flex items-center justify-center shrink-0 shadow-lg text-4xl">
                    📍
                  </div>
                  <div>
                    <p className="font-bold text-fuchsia-900 text-2xl mb-1">
                      Lugar
                    </p>
                    <p className="text-fuchsia-700 text-xl mb-3">
                      {data.direction}
                    </p>
                    <a
                      href={data.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-fuchsia-600 hover:text-fuchsia-700 font-bold text-xl"
                    >
                      Ver ubicación
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Galería */}
          {data.images && (
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-fuchsia-700 mb-10">
                Momentos Mágicos
              </h3>
              <Gallery images={data.images} />
              <p className="text-center text-sm text-fuchsia-600 mt-6 font-bold">
                Desliza para ver más →
              </p>
            </div>
          )}

          {/* Código de vestimenta */}
          {data.vestimentCode && (
            <div className="relative mb-16">
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-4 border-fuchsia-400">
                <h3 className="text-4xl font-bold text-fuchsia-700 mb-8">
                  Código de Vestimenta
                </h3>
                {data.vestimentCodeImg && (
                  <img
                    src={data.vestimentCodeImg}
                    alt="Código de vestimenta"
                    className="mx-auto mb-4 rounded-2xl"
                  />
                )}
                <p className="text-2xl text-fuchsia-700 font-bold">
                  {data.vestimentCode}
                </p>
              </div>
            </div>
          )}

          {/* RSVP */}
          <div className="text-center">
            <p className="text-4xl font-bold text-fuchsia-900 mb-10">
              ¡Únete a la Magia!
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${data.phone}&text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-16 py-6
               bg-linear-to-r from-fuchsia-500 via-pink-500 to-purple-500
                text-white
                rounded-full
                font-bold
                text-2xl
                shadow-[0_10px_40px_rgba(217,70,239,0.5)]
                hover:shadow-[0_15px_60px_rgba(217,70,239,0.7)]
                hover:scale-110
                active:scale-95
                transition-all duration-300
                border-4 border-white
              "
            >
              Confirmar Asistencia
            </a>
          </div>

          {/* Decoración inferior */}
          <div className="mt-12 relative">
            <div className="flex justify-center items-center gap-3 mb-8 flex-wrap text-6xl">
              <img className="mb-4" src={guerreraspop} alt="Guerreras pop" />
              <span className="animate-bounce" style={{ animationDelay: "0s" }}>
                🌟
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                💖
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                🎀
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.6s" }}
              >
                💜
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.8s" }}
              >
                🌟
              </span>
            </div>
          </div>
        </div>
      </article>

      {data.music && <MusicButton src={data.music} />}
    </>
  );
}

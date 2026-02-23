import { useEffect, useRef, useState } from "react";

interface Props {
  src: string; // ruta del mp3
}

export default function MusicButton({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [src]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }

    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggleMusic}
      className="
        fixed bottom-6 right-6 z-[60]
        w-10 h-10 rounded-full
        flex items-center justify-center
        bg-black/70 backdrop-blur
        border border-white/20
        shadow-lg
        hover:scale-110 transition
        cursor-pointer
      "
      aria-label="Control de música"
    >
      {/* Ícono música */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>

      {/* Línea de mute */}
      {!playing && (
        <span className="absolute w-10 h-0.5 bg-red-500 rotate-45" />
      )}
    </button>
  );
}

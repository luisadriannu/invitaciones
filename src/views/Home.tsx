import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface DropdownItem {
  name: string;
  url?: string;
  subcategories?: DropdownItem[];
}

interface DropdownCategoryProps {
  title: string;
  items: DropdownItem[];
}

function DropdownCategory({ title, items }: DropdownCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubcategory, setOpenSubcategory] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl border border-white/30 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-white font-medium text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="border-t border-white/20">
          {items.map((item, index) => (
            <div key={index}>
              {item.subcategories ? (
                <div>
                  <button
                    onClick={() =>
                      setOpenSubcategory(
                        openSubcategory === item.name ? null : item.name,
                      )
                    }
                    className="w-full px-8 py-3 text-white/90 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${openSubcategory === item.name ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openSubcategory === item.name && (
                    <div className="bg-white/5">
                      {item.subcategories.map((sub, subIndex) => (
                        <a
                          key={subIndex}
                          href={sub.url}
                          className="block px-12 py-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.url}
                  className="block px-8 py-3 text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const message = `Hola 👋
Quiero más información acerca de las invitaciones.`;

  const encodedMessage = encodeURIComponent(message);
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <div className="inline-block animate-bounce">
            <svg
              className="w-20 h-20 mx-auto text-pink-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Bienvenido a
            <span className="block bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Invitaciones Digitales
            </span>
          </h1>

          <p className="text-white/90 text-lg">
            Las muestras ahora están en{" "}
            <a
              href="https://invitaciones-muestra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 underline font-semibold flex justify-center gap-1 items-center"
            >
              invitaciones-muestra.vercel.app <ExternalLink />
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://api.whatsapp.com/send?phone=522206283499&text=${encodedMessage}`}
              className="text-white text-sm flex items-center justify-center gap-1 cursor-pointer"
            >
              📞 Contáctanos por WhatsApp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                <path d="M11 13l9 -9" />
                <path d="M15 4h5v5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

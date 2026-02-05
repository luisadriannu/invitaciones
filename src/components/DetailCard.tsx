export default function DetailCard({
  title,
  accent,
  children,
}: {
  title: string;
  accent: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`
        bg-white rounded-3xl p-6 shadow-sm
        ${accent === "left" ? "border-l-8" : "border-r-8"}
        border-pink-300
      `}
    >
      <h3 className="font-['Dancing_Script'] text-2xl text-pink-500 mb-2">
        {title}
      </h3>
      {children}
    </div>
  );
}

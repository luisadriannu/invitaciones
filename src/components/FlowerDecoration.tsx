export default function FlowerDecoration({
  position,
}: {
  position: "left" | "right";
}) {
  return (
    <svg
      className={`absolute w-36 opacity-80 ${
        position === "left"
          ? "right-[-75px] top-[20%]"
          : "left-[-75px] bottom-[20%]"
      }`}
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="20" fill="#f8bbd0" />
      <circle cx="30" cy="30" r="15" fill="#f48fb1" />
      <circle cx="70" cy="30" r="15" fill="#f48fb1" />
      <circle cx="30" cy="70" r="15" fill="#f48fb1" />
      <circle cx="70" cy="70" r="15" fill="#f48fb1" />
    </svg>
  );
}

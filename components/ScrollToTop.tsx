
"use client";

export default function ScrollToTop() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 rounded-full border px-4 py-2"
    >
      ↑
    </button>
  );
}
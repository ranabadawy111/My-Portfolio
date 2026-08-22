import { useEffect, useState } from "react";

export default function TypedCode({ lines, speed = 22 }) {
  const [display, setDisplay] = useState(() => lines.map(() => ""));
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const done = lineIdx >= lines.length;

  useEffect(() => {
    if (done) return;
    const currentLine = lines[lineIdx];

    if (charIdx < currentLine.length) {
      const t = setTimeout(() => {
        setDisplay((d) => {
          const next = [...d];
          next[lineIdx] = currentLine.slice(0, charIdx + 1);
          return next;
        });
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 240);
    return () => clearTimeout(t);
  }, [charIdx, lineIdx, lines, speed, done]);

  return (
    <pre className="font-mono text-[13px] leading-relaxed text-bone-200 whitespace-pre-wrap">
      {display.map((line, i) => (
        <div key={i} className="min-h-[1.6em]">
          {line}
          {i === lineIdx && !done && (
            <span className="inline-block w-[7px] h-[15px] bg-periwinkle-400 ml-0.5 align-middle animate-pulse" />
          )}
        </div>
      ))}
    </pre>
  );
}

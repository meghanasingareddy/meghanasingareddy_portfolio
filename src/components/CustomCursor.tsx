import { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const dotRef  = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId   = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.15);
    ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.15);

    if (dotRef.current) {
      dotRef.current.style.left = `${pos.current.x}px`;
      dotRef.current.style.top  = `${pos.current.y}px`;
    }
    if (ringRef.current) {
      ringRef.current.style.left = `${ringPos.current.x}px`;
      ringRef.current.style.top  = `${ringPos.current.y}px`;
    }
    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dotEl  = document.createElement("div");
    const ringEl = document.createElement("div");
    dotEl.className  = "c-dot";
    ringEl.className = "c-ring";
    document.body.appendChild(dotEl);
    document.body.appendChild(ringEl);
    dotRef.current  = dotEl;
    ringRef.current = ringEl;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterLink = () => ringEl.classList.add("expand");
    const onLeaveLink = () => ringEl.classList.remove("expand");

    document.addEventListener("mousemove", onMove);

    const attachHover = () => {
      document
        .querySelectorAll("a, button, [role=button], .btn-primary, .btn-ghost, .mob-nav-item, .proj-item")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnterLink);
          el.addEventListener("mouseleave", onLeaveLink);
        });
    };

    const mutationObserver = new MutationObserver(attachHover);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    attachHover();

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("mousemove", onMove);
      mutationObserver.disconnect();
      if (document.body.contains(dotEl)) dotEl.remove();
      if (document.body.contains(ringEl)) ringEl.remove();
    };
  }, [animate]);

  return null;
};

export default CustomCursor;

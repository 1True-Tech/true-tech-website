import useGSAP from "@/lib/hooks/UseGsap";
import gsap from "gsap";
import React, { createContext, useContext, useRef, useState } from "react";
interface screenView {
  section?: string;
  setSection: (val: string) => void;
  setStartEnd: React.Dispatch<React.SetStateAction<{
    s: string;
    e: string;
}>>;
  ref?: React.RefObject<HTMLDivElement | null>;
}
const ScrollContext = createContext<screenView>({
  section: "",
  setSection(val) {},
  setStartEnd(val) {
      
  },

});

export const useScrollView = () => {
  const scrollView = useContext(ScrollContext);

  if (!scrollView)
    throw new Error("useScrollView must be in scrollview provider");
  return scrollView;
};

export const ScrollViewProvider = ({ children }: { children?: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [section, setSection] = useState<string>();
  const [startEnd, setStartEnd] = useState<{s:string, e:string}>({e:"bottom", s:"top"});

  useGSAP(() => {
    const card = containerRef.current;
    if (!card) return;
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: `${startEnd.s} 150px`,
        end: `${startEnd.e} top`,
        toggleActions: "play reverse play reverse",
        onEnter() {
          setSection(containerRef.current?.id);
        },
        onLeave() {
          setSection(undefined);
        },
        onEnterBack() {
          setSection(containerRef.current?.id);
        },
        onLeaveBack() {
          setSection(undefined);
        },
      },
      ease: "none",
    });
  });

  return (
    <ScrollContext.Provider
      value={{
        setSection,
        section,
        ref: containerRef,
        setStartEnd
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

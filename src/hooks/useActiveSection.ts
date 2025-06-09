// hooks/useActiveSection.ts
"use client";
import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    break;
                }
            }
        };

        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.4, // 60% visível já conta
        });

        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeSection;
};

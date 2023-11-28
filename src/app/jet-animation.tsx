"use client";

import { useRef } from "react";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */

import jetAnimationStyles from "./jet-animation.module.css";

import jetBackground from "../../public/projects/jet-animation/background.png";
import jetPanel from "../../public/projects/jet-animation/panel.png";

export const JetAnimation = () => {
  const originalBackgroundWidth = 904;
  const originalBackgroundHeight = 525;

  const originalPanelWidth = 200;
  const originalPanelHeight = 323;

  const targetPanelXOffset = 670;
  const targetPanelYOffset = 184;

  const scale = 390 / 904;

  const backgroundRef = useRef<HTMLImageElement | null>(null);
  const panelRef = useRef<HTMLImageElement | null>(null);

  const positionPanel = () => {
    if (!panelRef.current || !backgroundRef.current) return;
    const rect = backgroundRef.current.getBoundingClientRect();
    if (!rect) {
      return;
    }

    panelRef.current.style.top = `${
      rect.top + window.scrollY + targetPanelYOffset * scale
    }px`;
    panelRef.current.style.left = `${
      rect.left + window.scrollX + targetPanelXOffset * scale
    }px`;

    const scrollMove = panelRef.current.animate(
      [{ transform: "translateX(+80%)" }, { transform: "translateX(0)" }],
      {
        fill: "forwards",
        easing: "ease",
        duration: 3000,
      }
    );
    scrollMove.pause();
    scrollMove.currentTime = (window.innerHeight - rect.top - 250) * 10;

    window.document.addEventListener("scroll", (ev: Event) => {
      if (!scrollMove.currentTime) return;
      const rect = backgroundRef.current?.getBoundingClientRect();
      if (!rect) return;
      if (window.innerHeight - rect.top < 250 || rect.top < 0) return;

      console.log(window.innerHeight - rect.top);

      scrollMove.currentTime = (window.innerHeight - rect.top - 250) * 10;
      if (scrollMove.currentTime > 3000) {
        console.log("finished");
        scrollMove.currentTime = 3000;
        scrollMove.commitStyles();
      }
    });
  };

  return (
    <>
      <Image
        onLoad={positionPanel}
        src={jetBackground}
        alt=""
        width={scale * originalBackgroundWidth}
        height={scale * originalBackgroundHeight}
        ref={backgroundRef}
      />
      <Image
        onLoad={positionPanel}
        src={jetPanel}
        alt=""
        width={scale * originalPanelWidth}
        height={scale * originalPanelHeight}
        className={jetAnimationStyles.panel}
        ref={panelRef}
      />
    </>
  );
};

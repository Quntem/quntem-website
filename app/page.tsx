"use client";

import Image from "next/image";
import { useEffect } from "react";
// @ts-ignore
import './style.css';

export default function Home() {
  async function loadBuildVer() {
    try {
      const res = await fetch('/build.txt');
      const txt = await res.text();

      const cleanTxt = txt.replace(/[^\x20-\x7E]/g, '').trim();

      const buildVerEl = document.getElementById('build-ver')
      if (buildVerEl) {
        buildVerEl.textContent = cleanTxt.slice(0, 6)
      }
    } catch {
      console.error("Something went wrong whilst fetching build version!")
    }
  }

  useEffect(() => {
    loadBuildVer();
  }, []);

  return (
    <div>
      <header>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px", marginRight: "auto", alignItems: "center" }}>
          <Image
            src="/quntem_logo.svg"
            alt="Quntem logo"
            width={32}
            height={0}
            style={{ height: 'auto' }}
          />
          <p style={{ fontSize: "20px" }}>
            Quntem
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px", marginLeft: "auto", alignItems: "center" }}>
          <p>
            Build <span id="build-ver"></span><span className="bold small-font"> (v0.1)</span>
          </p>
        </div>
      </header>
      <div className="hero-section">
        <h1 className="heading">Building the future for software</h1>
      </div>
    </div>
  );
}
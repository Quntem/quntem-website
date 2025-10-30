import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header style={{ display: "flex", flexDirection: "row", "margin": "2rem 10dvw 2rem 10dvw" }}>
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
            Build <span className="bold">(v0.1)</span>
          </p>
        </div>
      </header>
    </div>
  );
}

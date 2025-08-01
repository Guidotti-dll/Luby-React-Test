// src/components/ReactSimpleParallaxDemo.tsx
import SimpleParallax from "simple-parallax-js";
import foto from "../public/foto.png";

export default function Parallax() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-400 text-center">
        Parallax
      </h1>

      <SimpleParallax
        scale={1.4}
        transition="cubic-bezier(0,0,0,1)"
        orientation="up"
        delay={0.2}
      >
        <img
          src={foto}
          alt="Imagem Parallax"
          className="rounded-xl shadow-xl w-full"
        />
      </SimpleParallax>
    </section>
  );
}

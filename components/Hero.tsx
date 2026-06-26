"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

      <div>

        <h1 className="text-6xl md:text-8xl font-bold">
          Prakalp
        </h1>

        <TypeAnimation
          sequence={[
            "Data Analyst",
            2000,
            "Data Science Student",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          repeat={Infinity}
          className="text-cyan-400 text-2xl mt-4"
        />

        <p className="mt-6 max-w-xl text-gray-400">
          Building analytics and machine learning
          solutions using Python, SQL, Power BI,
          and Scikit-Learn.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <a
            href="#projects"
            className="bg-cyan-500 px-6 py-3 rounded-xl"
          >
            Projects
          </a>

          <a
            href="/ds_katla.pdf"
            className="border px-6 py-3 rounded-xl"
          >
            Resume
          </a>
        </div>

      </div>

    </section>
  );
}
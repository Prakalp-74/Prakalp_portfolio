const resumeFile = "ds_katla.pdf";

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-gray-950 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Download My Resume
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          Download my latest resume to learn more about my skills,
          projects, and experience.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          {/* View Resume */}
          <a
            href={`/${resumeFile}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-600"
          >
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href={`/${resumeFile}`}
            download
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
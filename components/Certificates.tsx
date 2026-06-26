import { certificates } from "@/data/certificates";

export default function Certificates() {
  console.log(certificates); // Check data in browser console

  return (
    <section
      id="certificates"
      className="bg-gray-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-cyan-400 font-semibold uppercase tracking-[0.3em]">
            Certifications
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            My Certificates
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Professional certifications that strengthen my skills in Python,
            SQL, Data Analytics, and Data Science.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition hover:-translate-y-2 hover:border-cyan-500"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-cyan-400">
                  {certificate.issuer} • {certificate.platform}
                </p>

                <p className="mt-4 text-gray-400">
                  {certificate.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-600"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
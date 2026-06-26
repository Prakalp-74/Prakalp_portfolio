export default function About() {
  return (
    <section id="about" className="bg-gray-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-blue-400 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl font-bold">
            Turning Data into Meaningful Insights
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left side text */}
          <div>
            <p className="text-lg leading-8 text-gray-300">
              Hello! I'm <span className="font-semibold text-white">Prakalp</span>,
              a final-year B.E. student specializing in Artificial Intelligence
              and Data Science. I enjoy analyzing data, building dashboards,
              and developing machine learning solutions that solve real-world
              business problems.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              I have hands-on experience with Python, SQL, Pandas, NumPy,
              Matplotlib, Power BI, Excel, and Scikit-learn.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              I'm currently looking for opportunities as a Data Analyst or
              Data Science Intern where I can apply my skills and grow.
            </p>
          </div>

          {/* Right side stats */}
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-3xl font-bold text-blue-400">
                Deloitte
              </h3>
              <p className="mt-2 text-gray-300">
                Virtual Internship – Data Analytics
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-3xl font-bold text-blue-400">
                8+
              </h3>
              <p className="mt-2 text-gray-300">
                Technical Skills
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-3xl font-bold text-blue-400">
                Final Year
              </h3>
              <p className="mt-2 text-gray-300">
                AI & Data Science Student
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-3xl font-bold text-blue-400">
                 Smart India Hackathon 
              </h3>
              <p className="mt-2 text-gray-300">
                clg Winner – SMARTKRISHI IoT Project
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
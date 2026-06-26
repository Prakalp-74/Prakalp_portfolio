"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="bg-black py-24 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-[0.3em]">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            What I Do
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
            I specialize in Data Analytics, Machine Learning, and Python
            development to transform raw data into meaningful business insights.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Card 1 */}
          <motion.div
            className="rounded-3xl border border-gray-800 bg-gray-900 p-8"
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3 className="text-3xl font-bold">Data Analytics</h3>

            <p className="mt-6 leading-8 text-gray-400">
              I enjoy transforming raw datasets into meaningful insights through
              data cleaning, visualization, and dashboard creation.
            </p>

            <h4 className="mt-8 text-blue-400 font-semibold">
              Work Area
            </h4>

            <ul className="mt-3 space-y-2 text-gray-300">
              <li>• Data Cleaning</li>
              <li>• Exploratory Data Analysis</li>
              <li>• Dashboard Development</li>
              <li>• Business Analytics</li>
            </ul>

            <h4 className="mt-8 text-blue-400 font-semibold">
              Technologies
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Python",
                "SQL",
                "Pandas",
                "NumPy",
                "Excel",
                "Power BI",
                "Matplotlib",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-800 px-3 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="rounded-3xl border border-gray-800 bg-gray-900 p-8"
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3 className="text-3xl font-bold">Machine Learning</h3>

            <p className="mt-6 leading-8 text-gray-400">
              I build predictive models using machine learning algorithms and
              continuously improve my understanding of feature engineering and
              model evaluation.
            </p>

            <h4 className="mt-8 text-blue-400 font-semibold">
              Areas I Work With
            </h4>

            <ul className="mt-3 space-y-2 text-gray-300">
              <li>• Classification</li>
              <li>• Regression</li>
              <li>• Data Preprocessing</li>
              <li>• Model Evaluation</li>
            </ul>

            <h4 className="mt-8 text-blue-400 font-semibold">
              Libraries
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Scikit-learn", "Pandas", "NumPy", "Matplotlib"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-800 px-3 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="rounded-3xl border border-gray-800 bg-gray-900 p-8"
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3 className="text-3xl font-bold">Development & Tools</h3>

            <p className="mt-6 leading-8 text-gray-400">
              I use modern development tools to build projects, collaborate with
              Git, and create reproducible data science workflows.
            </p>

            <h4 className="mt-8 text-blue-400 font-semibold">
              Development Stack
            </h4>

            <ul className="mt-3 space-y-2 text-gray-300">
              <li>• Python</li>
              <li>• Git</li>
              <li>• GitHub</li>
              <li>• Jupyter Notebook</li>
            </ul>

            <h4 className="mt-8 text-blue-400 font-semibold">
              Tools
            </h4>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "VS Code",
                "Power BI",
                "Excel",
                "Google Colab",
                "PyCharm",
                "Kaggle",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-gray-800 px-3 py-2 text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

      <p className="mb-6 text-gray-600">
        I’m open to internships, freelance work, and collaborations in Data Science / AI.
      </p>

      <div className="flex flex-col gap-4 items-center">
        <a
          href="mailto:yourmail@gmail.com"
          className="text-blue-600 hover:underline"
        >
          📧 prakalpkatla@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/prakalpkatla/"
          
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 LinkedIn
        </a>

        <a
          href="https://github.com/prakalp-74"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          💻 GitHub
        </a>
      </div>
    </section>
  );
}
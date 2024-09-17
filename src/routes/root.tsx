import {
  IoDocument,
  IoLink,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Root() {
  const sections = [
    {
      name: "Academics",
      posts: [
        {
          name: "Northeastern University, Boston",
          tag: "Master of Science in Computer Science"
        },
        {
          name: "NMIMS, Mumbai",
          tag: "Bachelor of Technology in Computer Science & Engineering (Cybersecurity)",
        },
      ],
    },
    {
      name: "Work",
      posts: [
        {
          name: "Oneture",
          tag: "Software Engineering Intern",
        },
        {
          name: "University of Auckland (Signal Corp.)",
          tag: "Research Intern",
        },
      ],
    },
  ];

  const links = [
    {
      icon: <IoLogoGithub />,
      name: "Github",
      link: "https://github.com/yburshe",
    },
    {
      icon: <IoLogoLinkedin />,
      name: "Linkedin",
      link: "https://linkedin.com/in/yash-burshe",
    },
  ];

  return (
    <main className="bg-stone-100 dark:bg-neutral-900 dark:text-neutral-300 h-screen">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <section className="flex flex-col md:flex-row gap-8 items-center md:justify-between mb-12">
          <h1 className="text-2xl font-light">Yash Burshe</h1>
          <nav className="w-full md:w-auto">
            <ul className="w-full md:w-auto flex justify-evenly md:gap-4">
              {links.map((link, id) => (
                <li key={id}>
                  <Link
                    to={link.link}
                    className="flex items-center gap-1 hover:underline"
                    target="_blank"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  className="flex items-center gap-1 hover:underline"
                  href="/Yash_Burshe_Resume.pdf"
                >
                  <IoDocument />
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <p className="flex gap-1">
          Current hobby project: 
          <Link
            className="flex items-center gap-1 hover:underline underline-offset-2"
            target="_blank"
            to="https://steam2csv.xyz"
          >
            Steam2csv
            <IoLink />
          </Link>
        </p>
        {sections.map((i, id) => (
          <section key={id} className="my-4">
            <h2 className="text-lg font-medium border-b mb-2 dark:border-b-neutral-700">
              {i.name}
            </h2>
            <ul className="flex flex-col gap-2">
              {i.posts.map((j, id) => (
                <li key={id}>
                  <h3 className="font-light">{j.name}</h3>
                  <p className="italic">{j.tag}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

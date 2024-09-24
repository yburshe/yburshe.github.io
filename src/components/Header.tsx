import {
  IoDocument,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWebComponent,
} from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
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
    <div className="bg-stone-100 dark:bg-neutral-900 dark:text-neutral-300 min-h-screen">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <section className="flex flex-col md:flex-row gap-8 items-center md:justify-between mb-12">
          <h1 className="text-2xl font-light">
            <Link to="/">Yash Burshe</Link>
          </h1>
          <nav className="w-full md:w-auto">
            <ul className="w-full md:w-auto flex justify-evenly md:gap-4">
              <li>
                <Link
                  to="/projects"
                  className="flex items-center gap-1 hover:underline"
                >
                  <IoLogoWebComponent />
                  Projects
                </Link>
              </li>
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
        <Outlet />
      </div>
    </div>
  );
}

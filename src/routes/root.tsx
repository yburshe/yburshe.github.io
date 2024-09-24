import { IoLink } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Root() {
  const sections = [
    {
      name: "Academics",
      posts: [
        {
          name: "Northeastern University, Boston",
          tag: "Master of Science in Computer Science",
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

  return (
    <div>
      <p className="flex gap-1 p-2 border rounded-md bg-neutral-50">
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
  );
}

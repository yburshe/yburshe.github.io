import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col gap-2 items-center mt-32">
      <h1 className="font-semibold text-2xl">404</h1>
      <p className="font-light">The page you are looking for does not exist</p>
      <Link to="/" className="underline">
        <IoHome />
      </Link>
    </div>
  );
}

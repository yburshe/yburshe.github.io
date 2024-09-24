import { IoLink } from "react-icons/io5";
import { Link } from "react-router-dom";

import steam2csv1 from "../assets/steam2csv/steam2csv1.png";
import steam2csv2 from "../assets/steam2csv/steam2csv2.png";
import steam2csv3 from "../assets/steam2csv/steam2csv3.png";
import steam2csv4 from "../assets/steam2csv/steam2csv4.png";

import ezmp1 from '../assets/ezmp/ezmp1.png';
import ezmp2 from '../assets/ezmp/ezmp2.png';
import ezmp3 from '../assets/ezmp/ezmp3.png';

export default function Projects() {
  return (
    <div>
      <h1 className="text-xl font-medium">Projects</h1>
      <p className="text-sm">All my project source code can be found on my GitHub</p>
      <section className="flex flex-col gap-4 mt-8 mb-8">
        <h2 className="text-lg font-semibold">Steam2csv</h2>

        <h3 className="flex gap-1 items-center underline">
          <Link to="https://steam2csv.xyz">Steam2csv</Link>
          <IoLink />
        </h3>
        <p>
          A hobby project to see any public user's Steam library and their play
          time and download their library in CSV format.
        </p>
        <div className="flex flex-col gap-6">
          <img
            className="rounded-sm shadow-md border border-slate-900"
            src={steam2csv1}
          />
          <img
            className="rounded-sm shadow-md border border-slate-900"
            src={steam2csv2}
          />
          <img
            className="rounded-sm shadow-md border border-slate-900"
            src={steam2csv3}
          />
          <img
            className="rounded-sm shadow-md border border-slate-900"
            src={steam2csv4}
          />
        </div>
      </section>
      <div className="border-b  my-8"></div>
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">EZ Meal Planner</h2>

        {/* <h3 className="flex gap-1 items-center underline">
          <Link to="https://steam2csv.xyz">Steam2csv</Link>
          <IoLink />
        </h3> */}
        <p>
          Conveniently plan your meals for the week and generate a shopping list
        </p>
        <div className="flex flex-col gap-6">
          <img
            className="rounded-sm shadow-md border border-slate-400"
            src={ezmp1}
          />
          <img
            className="rounded-sm shadow-md border border-slate-400"
            src={ezmp2}
          />
          <img
            className="rounded-sm shadow-md border border-slate-400"
            src={ezmp3}
          />
        </div>
      </section>
    </div>
  );
}

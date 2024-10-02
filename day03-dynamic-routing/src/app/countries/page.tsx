import CountryData from "@/components/DataCountry";
import Link from "next/link";

export default function Countries() {
  return (
    <div className="flex flex-col justify-center items-center my-20 mx-6">
      <h1 className="text-2xl font-bold uppercase">Countries</h1>
      <div className="flex flex-wrap justify-center items-center my-4 gap-6 p-8">
        {CountryData.map((e) => (
          <div key={e.code} className="text-center cursor-pointer ">
            <Link
              href={`/countries/${e.code.toLowerCase()}`}
              className="font-medium text-sm uppercase text-slate-900"
            >
              {e.name}
              <img
                src={e.url}
                alt={`${e.name} Flag`}
                className="w-36 h-24 border-2 border-solid rounded-lg shadow-md"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

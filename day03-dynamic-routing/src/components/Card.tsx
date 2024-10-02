import Link from "next/link";
export default function Card({
  url,
  name,
  fullName,
  nameInNativeLang,
  capitalCity,
  largestCity,
  officialLanguages,
  religion,
  population,
  rankByPopulation,
  independence,
  area,
  currency,
}: {
  url: string;
  name: string;
  fullName: string;
  nameInNativeLang: string;
  capitalCity: string;
  largestCity: string;
  officialLanguages: string;
  religion: string;
  population: string;
  rankByPopulation: string;
  independence: string;
  area: string;
  currency: string;
}) {
  return (
    <div>
      <div className="flex justify-center text-center my-4">
        <img
          className="w-36 border-2 border-solid rounded-lg"
          src={url}
          alt="Pakistan Flag"
        />
        <h1 className="font-bold text-8xl px-6 text-slate-900">{name}</h1>
      </div>
      <div className="result">
        <p>
          Full Name: <span>{fullName}</span>
        </p>
        <p>
          Name in Native Language: <span>{nameInNativeLang}</span>
        </p>

        <p>
          Capital City: <span>{capitalCity}</span>
        </p>
        <p>
          Largest City: <span>{largestCity}</span>
        </p>
        <p>
          Official Languages: <span>{officialLanguages}</span>
        </p>
        <p>
          Religion: <span>{religion}</span>
        </p>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Rank by Population: <span>{rankByPopulation}</span>
        </p>
        <p>
          Independence: <span>{independence}</span>
        </p>
        <p>
          Area:{" "}
          <span>
            {area} km<sup>2</sup>
          </span>
        </p>
        <p>
          Currency: <span>{currency}</span>
        </p>
      </div>
    </div>
  );
}

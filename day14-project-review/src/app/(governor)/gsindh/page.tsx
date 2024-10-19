import Kamran from "../../../../image/Kamran.png";
import House from "../../../../image/bg_house.jpg";
import Image from "next/image";
export default function GSindh() {
  return (
    <div className="flex justify-between items-center overflow-hidden relative h-[90vh]">
      <Image
        src={House}
        alt="Governor Sindh House"
        className="absolute bg-cover opacity-25 w-full -z-50 top-0"
      />
      <div className="pt-20 pl-10">
        <h1 className="font-black text-[#044E83] text-6xl">Governor Sindh</h1>
        <h1 className=" text-[#044E83] text-5xl pt-1">Kamran Khan Tessori</h1>
        <h2 className="font-black text-[#2EB6E8] text-4xl pt-4">
          Certified Cloud <br />
          Applied Generative AI <br />
          Engineer (GenEng)
        </h2>
        <h2 className="font-bold text-[#044E83] text-2xl pt-4">
          Earn up to $5,000 / month
        </h2>
        <h2 className="font-extrabold text-[#044E83] text-2xl pt-4">
          Now admissions are open in <br />
          Hyderabad
        </h2>
        <div className="flex justify-start items-center gap-20 mt-6">
          <button className="bg-[#044E83] uppercase px-12 py-4 font-bold text-white rounded-md">
            Apply Now
          </button>
          <div className="">
            <p className="font-extrabold text-[#044E83] text-3xl tracking-widest text-center">
              562,143
            </p>
            <p className="text-[#044E83]">Accepted Applications</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={Kamran}
          alt="Governor Sindh Logo"
          className="w-[900px] -z-40 bottom-0 absolute -right-60"
        />
      </div>
    </div>
  );
}

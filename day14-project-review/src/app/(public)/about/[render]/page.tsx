"use client";
import Typewriter from "typewriter-effect";
import renData from "../../../../components/Method";

const Render = ({ params }: { params: { dataOfRender: string } }) => {
  const { dataOfRender } = params;
  const renderMethods = renData.find(
    (c) => c.headings.toLowerCase() === dataOfRender.toLowerCase()
  );
  console.log(renderMethods);

  if (!renderMethods) {
    return (
      <div className="max-w-96 m-auto my-20 px-8 py-4 rounded-2xl bg-red-500 text-center shadow-lg">
        <h1 className="py-2 text-white font-bold text-2xl">
          Rendering Method not found
        </h1>
        <hr />
        <p className="text-white pt-4 text-lg">
          Please choose a rendering method from the list above.
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="mx-auto mt-6 w-[500px] shadow-lg bg-red-500 pt-4 rounded-xl text-white overflow-hidden">
        <h2 className="font-medium text-6xl text-center pb-2">
          {renderMethods.headings}
        </h2>
        <p className="text-center bg-gray-900 py-2">
          <Typewriter
            options={{
              strings: [`${renderMethods.fullForm}`],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <div className="mx-auto mt-2 w-[500px] shadow-lg bg-white p-8 rounded-xl">
        <p className="text-left">{renderMethods.english}</p>
        <p className="text-right mt-6">{renderMethods.urdu}</p>
      </div>
    </div>
  );
};

export default Render;

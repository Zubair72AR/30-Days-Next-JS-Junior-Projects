import Typewriter from "typewriter-effect";
import renData from "../../../../components/RenderingMethod";

const Render = ({ params }: { params: { data: string } }) => {
  const { data } = params;
  const renderData = renData.find(
    (e) => e.headings.toLowerCase() === data.toLowerCase()
  );

  if (!renderData) {
    return (
      <div className="max-w-96 m-auto my-20 px-8 py-4 rounded-2xl bg-red-700 text-center">
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
      <h1 className="text-center text-lg font-bold mt-6">
        Methods of Rendering Web Applications
      </h1>
      <div className="mx-auto mt-6 w-[500px] shadow-lg bg-red-500 pt-4 rounded-xl text-white overflow-hidden">
        <h2 className="font-medium text-6xl text-center pb-2"></h2>
        <p className="text-center bg-gray-900 py-2">
          <Typewriter
            options={{
              strings: ["Client Side Rendering"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <div className="mx-auto mt-2 w-[500px] shadow-lg bg-white p-8 rounded-xl">
        <p className="text-left">
          In CSR, the browser downloads a minimal HTML page and a JavaScript
          bundle that renders the content. This can result in slower initial
          loading but provides a dynamic user experience after loading.
        </p>
        <p className="text-right mt-6">
          CSR میں، براؤزر ایک کم سے کم HTML صفحہ اور ایک جاوا اسکرپٹ بنڈل ڈاؤن
          لوڈ کرتا ہے جو مواد کو ظاہر کرتا ہے۔ اس کے نتیجے میں ابتدائی لوڈنگ میں
          سستی ہو سکتی ہے لیکن اس کے بعد ایک متحرک صارف کے تجربے کی پیشکش ہوتی
          ہے۔
        </p>
      </div>
    </div>
  );
};

export default Render;

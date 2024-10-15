interface RenderData {
  id: number;
  headings: string;
  fullForm: string;
  english: string;
  urdu: string;
}

const renData: RenderData[] = [
  {
    id: 1,
    headings: "CSR",
    fullForm: "Client Side Rendering",
    english:
      "In CSR, the browser downloads a minimal HTML page and a JavaScript bundle that renders the content. This can result in slower initial loading but provides a dynamic user experience after loading.",
    urdu: "مقدCSR میں، براؤزر ایک کم سے کم HTML صفحہ اور ایک جاوا اسکرپٹ بنڈل ڈاؤن لوڈ کرتا ہے جو مواد کو ظاہر کرتا ہے۔ اس کے نتیجے میں ابتدائی لوڈنگ میں سستی ہو سکتی ہے لیکن اس کے بعد ایک متحرک صارف کے تجربے کی پیشکش ہوتی ہے۔",
  },
  {
    id: 2,
    headings: "SSR",
    fullForm: "Server Side Rendering",
    english:
      "SSR generates HTML content on the server for each request, resulting in a fully rendered page sent to the browser. This improves initial load times and is good for SEO, but can increase server load.",
    urdu: "SSR ہر درخواست کے لیے سرور پر HTML مواد پیدا کرتا ہے، جس کے نتیجے میں ایک مکمل طور پر ظاہر کردہ صفحہ براؤزر کو بھیجا جاتا ہے۔ یہ ابتدائی لوڈنگ کے وقت کو بہتر بناتا ہے اور SEO کے لیے اچھا ہے، لیکن سرور کے بوجھ میں اضافہ کر سکتا ہے۔",
  },
  {
    id: 3,
    headings: "SSG",
    fullForm: "Static Site Generation",
    english:
      "SSG generates static HTML pages at build time. This means content is pre-rendered and served directly, leading to fast load times and excellent SEO. However, it’s not ideal for frequently changing content.",
    urdu: "SSG تعمیر کے وقت سٹیٹک HTML صفحات پیدا کرتا ہے۔ اس کا مطلب ہے کہ مواد پہلے سے تیار کیا جاتا ہے اور براہ راست فراہم کیا جاتا ہے، جس سے تیز لوڈنگ کے اوقات اور بہترین SEO حاصل ہوتا ہے۔ تاہم، یہ اکثر تبدیل ہونے والے مواد کے لیے موزوں نہیں ہے۔",
  },
  {
    id: 4,
    headings: "ISR",
    fullForm: "Incremental Static Regeneration",
    english:
      "ISR allows for static generation at build time with the ability to update pages incrementally. This means you can have fresh content without a complete site rebuild.",
    urdu: "ISR تعمیر کے وقت سٹیٹک نسل کو ممکن بناتا ہے جس کے ساتھ صفحات کو بتدریج اپ ڈیٹ کرنے کی صلاحیت ہوتی ہے۔ اس کا مطلب ہے کہ آپ بغیر کسی مکمل سائٹ کی تعمیر کے تازہ مواد حاصل کر سکتے ہیں۔",
  },
];

export default renData;

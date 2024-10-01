export let getStaticProps = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();

  return {
    props: { binJan: data },
  };
};

let myFunc = ({ binJan }) => {
  return (
    <div>
      <h1>Static Props Data</h1>
      {binJan.map((link) => (
        <div key={link.id}>
          <a>{link.name}</a>
        </div>
      ))}
    </div>
  );
};

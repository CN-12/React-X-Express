import data from "../data/data";

function Illustration({ name, image }) {
  return (
    <div>
      <img src={image} alt="뱅드림 사진" />
      <h2>{name}</h2>
    </div>
  );
}

export default function Illust() {
  return (
    <div>
      {data.map((data, index) => (
        <Illustration key={index} name={data.name} image={data.image} />
      ))}
    </div>
  );
}

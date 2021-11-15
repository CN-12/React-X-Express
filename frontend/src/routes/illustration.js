// import Perfect from "../image/사복아야.png";
import data from "../data/data.json";

export default function illustration() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <ul className="list_day">
        {data.images.map(
          (
            images // 맵함수를 이용해 dummy 안의 days 그룹 내의 원소를 검색한다.
          ) => (
            <img src={data.images} alt="dlalwl" />
          )
        )}
      </ul>
    </main>
  );
}

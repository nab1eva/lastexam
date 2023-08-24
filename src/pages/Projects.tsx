import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WorksP = () => {
  const [portfolios, setData] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await await fetch(
        "https://ap-portfolio-backend.up.railway.app/api/v1/portfolios?limit=24&user=64e4bb1259f21d00144a30fc"
      );
      let actualData = await data.json();
      if (actualData.data) setData(actualData.data);
    };
    dataFetch().then();
  }, []);
  return (
    <div className="works-list">
      {portfolios?.map((item) => (
        <div>
          <div className="work-card">
            <h3 key={item.name}>{item.name}</h3>
            <p key={item.description}>{item.description}</p>
            <button className="link">
              <Link target="blank" to={item.url}>
                Click here
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksP;

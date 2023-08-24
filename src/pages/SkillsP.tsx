import { useEffect, useState } from "react";

const SkillsP = () => {
  const [skills, setData] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await await fetch(
        "https://ap-portfolio-backend.up.railway.app/api/v1/skills?limit=12&user=64e4bb1259f21d00144a30fc"
      );
      let actualData = await data.json();
      if (actualData.data) setData(actualData.data);
    };
    dataFetch().then();
  }, []);
  return (
    <div className="skills-list">
      {skills?.map((item) => (
        <div>
          <div className="skill-card">
            <h3 key={item.name}>{item.name}</h3>
            <p key={item.percent}>
              Awareness percentage: <br />
              <span>{item.percent}%</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsP;

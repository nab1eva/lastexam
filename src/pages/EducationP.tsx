import { useEffect, useState } from "react";

const EducationP = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const monthNumber = date.getMonth();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = months[monthNumber];
    return `${monthName}, ${year}`;
  };

  const [education, setData] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await await fetch(
        "https://ap-portfolio-backend.up.railway.app/api/v1/education?user=64e4bb1259f21d00144a30fc"
      );
      let actualData = await data.json();
      if (actualData.data) setData(actualData.data);
    };
    dataFetch().then();
  }, []);
  return (
    <div className="education-list">
      {education?.map((item) => (
        <div>
          <div className="education-card">
            <h3 key={item.name}>
              Name: <span>{item.name}</span>
            </h3>
            <p key={item.level}>
              Level: <span>{item.level}</span>
            </p>
            <p key={item.description}>
              Field of education: <span>{item.description}</span>
            </p>
            <div className="education-date">
              {" "}
              <p key={item.startDate}>
                from: <span>{formatDate(item.startDate)}</span>
              </p>
              <p key={item.endDate}>
                to: <span>{formatDate(item.endDate)}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationP;

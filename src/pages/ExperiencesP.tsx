import { useEffect, useState } from "react";

const ExperiencesP = () => {
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

  const [experiences, setData] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const data = await await fetch(
        "https://ap-portfolio-backend.up.railway.app/api/v1/experiences?user=64e4bb1259f21d00144a30fc"
      );
      let actualData = await data.json();
      if (actualData.data) setData(actualData.data);
    };
    dataFetch().then();
  }, []);
  return (
    <div className="education-list">
      {experiences?.map((item) => (
        <div>
          <div className="education-card">
            <h3 key={item.workName}>
              Worked as: <span>{item.workName}</span>
            </h3>
            <p key={item.companyName}>
              Company name: <span>{item.companyName}</span>
            </p>
            <p key={item.description}>
             Description: <span>{item.description}</span>
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

export default ExperiencesP;

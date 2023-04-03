import ISHOF from "./assets/ISHOF.png";
import WWF_logo from "./assets/WWF_logo.svg.png";

export default function Experience() {
  let data = [
    {
      image: ISHOF,
      alt: "logo of International Swimming Hall of Fame",
      height: 399,
      width: 436,
      datefrom: "2023-02-01",
      datefrom_text: "Feb 2023",
      dateto: "2023-03-31",
      datetotext: "Current",
      title: "Swim Coach",
      about:
        "Taught humans of all ages to swim for rehabilitation, competitive sports and stress relief",
    },
    {
      image: WWF_logo,
      alt: "logo of WWF",
      height: 177,
      width: 120,
      datefrom: "2022-02-01",
      datefrom_text: "Feb 2022",
      dateto: "2020-03-31",
      datetotext: "March 2020",
      title: "Wildlife Conservationist",
      about:
        "Used my knowledge of animal behavior and habitats to protect endangered species and promote conservation efforts.",
    },
  ];

  return (
    <div className="experiences">
      <h2>Experience</h2>
      {data.map((role, index) => (
        <div className="experience" key={index}>
          <img
            className="logo"
            src={role.image}
            alt={role.alt}
            height={role.height}
            width={role.width}
          />
          <div className="exp-container">
            <div className="period">
              <time dateTime={role.datefrom}>{role.datefrom_text}</time> -
              <time dateTime={role.dateto}>{role.datetotext}</time>
            </div>
            <div className="role">{role.title}</div>
            <div className="role-about">{role.about}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

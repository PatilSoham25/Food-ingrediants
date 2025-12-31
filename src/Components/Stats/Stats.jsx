import "./Stats.css";

const statsData = [
  {
    value: "10",
    label: "Total exhibitions\nglobally",
  },
  {
    value: "7K+",
    label: "F&B ingredients\nexhibitors",
  },
  {
    value: "60K+",
    label: "Social media reach",
  },
  {
    value: "250K+",
    label: "Unique visitors to\nour events",
  },
  {
    value: "800K+",
    label: "Ingredients Network\nunique visitors",
  },
];

const Stats = () => {
  return (
    <section className="stats">
      <span className="stats-subtitle">Fi Global in numbers</span>
      <h2>Source, learn and connect</h2>

      <div className="stats-grid">
        {statsData.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.value}</h3>
            <p>
              {item.label.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

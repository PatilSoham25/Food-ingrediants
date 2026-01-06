import { useEffect, useState } from "react";
import "./Stats.css";

const statsData = [
  { value: "10", label: "Total exhibitions\nglobally" },
  { value: "7K+", label: "F&B ingredients\nexhibitors" },
  { value: "60K+", label: "Social media reach" },
  { value: "250K+", label: "Unique visitors to\nour events" },
  { value: "800K+", label: "Ingredients Network\nunique visitors" },
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((item, index) => {
      const target = parseInt(item.value.replace(/\D/g, ""));
      let current = 0;
      const duration = 1500;
      const stepTime = Math.max(Math.floor(duration / target), 20);

      return setInterval(() => {
        current += Math.ceil(target / 60);
        if (current >= target) {
          current = target;
          clearInterval(intervals[index]);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const formatValue = (original, count) => {
    if (original.includes("K+")) return `${count}K+`;
    if (original.includes("+")) return `${count}+`;
    return count;
  };

  return (
    <section className="stats" data-aos="fade-down">
      <span className="stats-subtitle">
        Fi Global in numbers
      </span>

      <h2>Source, learn and connect</h2>

      <div
        className="stats-grid"
      >
        {statsData.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{formatValue(item.value, counts[index])}</h3>
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

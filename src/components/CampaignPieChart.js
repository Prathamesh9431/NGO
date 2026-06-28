import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function CampaignPieChart() {
  const data = {
    labels: [
      "🎓 Education",
      "🍲 Food Distribution",
      "🏥 Healthcare",
      "👩 Women Empowerment",
    ],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: [
          "#4F46E5",
          "#10B981",
          "#F59E0B",
          "#EC4899",
        ],
        borderColor: "#1e1e1e",
        borderWidth: 5,
        hoverOffset: 20,
        cutout: "60%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#fff",
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="campaign-chart">
      <h3 className="text-center mb-4">
        Our Campaign Distribution
      </h3>

      <Doughnut data={data} options={options} />
    </div>
  );
}

export default CampaignPieChart;
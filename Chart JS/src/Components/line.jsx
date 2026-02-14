import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
);

import { LineChartData } from "../charts/linechartdata";

const LineChartComponent = () => {
    const options = {};

    return (
        <>
            <div>Line Chart</div>
            <Line options={options} data={LineChartData} />
        </>
    );
};

export default LineChartComponent;

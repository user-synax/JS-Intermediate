import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    BarController,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    BarController,
    BarElement,
    Tooltip,
    Tooltip,
    Legend,
);

import { barchart } from "../charts/barchart";

const Barchart = () => {
    const options = {};

    return (
        <>
            <h1>barchart</h1>
            <Bar options={options} data={barchart} />
        </>
    );
};

export default barchart;

import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function ChartPieBeverly({ data }) {
    return (
        <div style={{
            width: "70%",
            margin: "50px auto",
            color: "red"
        }}>
            <Pie data={data} />
        </div>
    )
}

export default ChartPieBeverly;
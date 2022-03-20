import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function ChartBarBeverly({ data }) {
    return (
        <div style={{
            margin: "100px auto"  
        }}>
            <Bar options={data.options} data={data.data} />
        </div>
    )
}

export default ChartBarBeverly;
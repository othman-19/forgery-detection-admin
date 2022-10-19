import { Component, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {
  constructor() {}

  imagesData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Matching',
        data: [1000, 1200, 1050, 2000, 500],
        tension: 0.5,
      },
      { label: 'Falsified', data: [200, 100, 400, 50, 90], tension: 0.5 },
      { label: 'Non-coherent', data: [500, 400, 350, 450, 650], tension: 0.5 },
    ],
  };

  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Images Data',
      },
    },
  };
}

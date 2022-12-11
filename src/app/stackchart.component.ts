import { Component, Input, OnInit, ElementRef } from '@angular/core';

import * as echarts from 'echarts';
// var echarts = require('echarts')

import $ from 'jquery';
@Component({
  selector: 'stack-chart',
  template: `<div class="mGraph-wrapper">
  <div class="mGraph" id="mGraph_sale"></div>
</div>`,
  styles: [
    `
  .mGraph-wrapper{
    width: 100%;
    height: 239px;
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mGraph-wrapper .mGraph{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }`,
  ],
})
export class StackchartComponent implements OnInit {
  // data Structure for Series
  data = [
    {
      legend: 'HABITANTES (Millones)',
      dataPoints: [
        32.97, 19.12, 212.6, 50.88, 28.44, 17.64, 45.38, 3.474, 7.133, 0.107,
      ],
    },
  ];
  // @Input() name: string;
  // @Input() data:any;
  series = [];
  legends = [];
  constructor(private elm: ElementRef) {}
  ngOnInit() {
    let stackchart = echarts.init(
      $(this.elm.nativeElement).find('#mGraph_sale')[0]
    );
    this.data.forEach((x) => {
      this.series.push({
        name: x.legend,
        type: 'line',
        stack: 'Total Amount',
        areaStyle: { normal: {} },
        data: x.dataPoints,
      });

      this.legends.push(x.legend);
    });

    stackchart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: { backgroundColor: '#6a7985' },
        },
      },
      //    title: {
      //     left: 'center',
      //     text: 'Stack Chart',
      // },
      legend: { data: this.legends },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '5%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [
            'Perú/Lima',
            'Chile/Santiago de Chile',
            'Brasil/Brasilia',
            'Colombia/Bogotá',
            'Venezuela/Caracas',
            'Ecuador/Quito',
            'Argentina/Buenos Aires',
            'Uruguay/Montevideo',
            'Paraguay/Asunción',
            'Aruba/Oranjestad',
          ],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: this.series,
    });
  }
}

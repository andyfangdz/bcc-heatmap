import React from 'react';
import { Group } from '@vx/group';

import { scaleBand, scaleLinear } from '@vx/scale';
import { HeatmapCircle, HeatmapRect } from '@vx/heatmap';
import { extent, min, max } from 'd3-array';

// accessors
const x = d => d.bin;
const y = d => d.bins;
const z = d => d.count;

export default function HeatMap({
  events = false,
  margin = {
    top: 10,
    left: 20,
    right: 20,
    bottom: 110,
  },
  data,
  cellSize = 8,
}) {
  const numRows = max(data, d => d.bins.length);
  const numCols = data.length;
  // bounds
  const width = margin.left + numCols * cellSize + margin.right;
  const height = margin.top + numRows * cellSize + margin.bottom;
  const xMax = margin.left + numCols * cellSize;
  const yMax = margin.top + numRows * cellSize;
  const dMin = min(data, d => min(y(d), x));
  const dMax = max(data, d => max(y(d), x));
  const dStep = dMax / numRows;
  const bWidth = xMax / data.length;
  const bHeight = yMax / numRows;
  const colorMax = max(data, d => max(y(d), z));

  // scales
  const xScale = scaleLinear({
    range: [0, xMax],
    domain: extent(data, x),
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [dMin, dMax],
  });

  const colorScale = scaleLinear({
    range: ['#fff', '#f00'],
    domain: [0, colorMax],
  });
  const opacityScale = scaleLinear({
    range: [0.1, 1],
    domain: [0, colorMax],
  });

  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        <HeatmapRect
          data={data}
          xScale={xScale}
          yScale={yScale}
          colorScale={colorScale}
          opacityScale={opacityScale}
          binWidth={bWidth}
          binHeight={bWidth}
          step={dStep}
          gap={0}
          onClick={data => event => {
            if (!events) return;
            alert(`clicked: ${JSON.stringify(data.bin)}`);
          }}
        />
      </Group>
    </svg>
  );
}

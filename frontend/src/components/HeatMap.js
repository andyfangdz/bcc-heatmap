import React from 'react';
import { Group } from '@vx/group';

import { scaleLog, scaleLinear } from '@vx/scale';
import HeatmapRect from './HeatmapRect';
import { extent, max } from 'd3-array';

// accessors
const x = d => d.date;
const y = d => d.bins;
const z = d => d.count;

export default function HeatMap({
  events = false,
  margin = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  data,
  cellSize = 16,
}) {
  const numRows = max(data, d => d.bins.length);
  const numCols = data.length;
  // bounds
  const width = margin.left + (numCols + 1) * cellSize + margin.right;
  const height = margin.top + (numRows + 1) * cellSize + margin.bottom;
  const xMax = margin.left + numCols * cellSize;
  const colorMax = max(data, d => max(y(d), z));

  // scales
  const xScale = scaleLinear({
    range: [0, xMax],
    domain: extent(data, x),
  });
  const colorScale = scaleLog({
    range: ['#e0ecf4', '#8856a7'],
    domain: [1, colorMax],
  }).clamp(true);
  const opacityScale = scaleLinear({
    range: [1, 1],
    domain: [0, colorMax],
  });

  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        <HeatmapRect
          data={data}
          bin={x}
          xScale={xScale}
          colorScale={colorScale}
          opacityScale={opacityScale}
          binWidth={cellSize}
          binHeight={cellSize}
          step={cellSize}
          gap={0}
          onClick={data => event => {
            if (!events) return;
            alert(`clicked: ${JSON.stringify(data)}`);
          }}
        />
      </Group>
    </svg>
  );
}

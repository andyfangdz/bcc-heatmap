import React from 'react';
import cx from 'classnames';

import { Bar } from '@vx/shape';
import { Group } from '@vx/group';
import { AxisBottom, AxisLeft } from '@vx/axis';
import { cityTemperature } from '@vx/mock-data';
import { scaleBand, scaleLinear, scaleOrdinal } from '@vx/scale';
import { timeParse, timeFormat } from 'd3-time-format';
import { LegendOrdinal } from '@vx/legend';
import { extent, max } from 'd3-array';
import { Spring, animated as a } from 'react-spring'

const Bars =
  ({
    data,
    width,
    height,
    events = false,
    margin = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  }) => {
    if (width < 10) return null;

    // accessors
    const y = d => d.start;
    const x = d => d.count;

    // bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    // // scales
    const xScale = scaleLinear({
      rangeRound: [0, xMax],
      domain: [0, max(data, x)],
      nice: true,
    });
    const yScale = scaleBand({
      rangeRound: [yMax, 0],
      domain: data.map(y),
      padding: 0.2,
    });
    return (
      <div style={{ position: 'relative' }}>
        <svg width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            {data.map((d, i) =>
              <Spring native key={`bar-${i}`} to={{width: xScale(x(d))}}>
                {tweened => <a.rect x={0} width={tweened.width} y={yScale(y(d))} height={5} fill="#a44afe"/>}
              </Spring>
            )}
          </Group>
        </svg>
      </div>
    );
  };

export default function Histogram({data}) {
  return <Bars width={500} height={500} data={data} />;
}

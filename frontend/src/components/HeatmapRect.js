import React from 'react';
import cx from 'classnames';
import { Group } from '@vx/group';
import { additionalProps } from '../util';

export default function HeatmapRect({
  className,
  data,
  binWidth,
  binHeight,
  x = 0,
  gap = 1,
  step = 0,
  xScale,
  yScale,
  colorScale,
  opacityScale = d => 1,
  bin = d => d.bin,
  bins = d => d.bins,
  count = d => d.count,
  yFunc = d => d.start,
  ...restProps
}) {
  const width = binWidth - gap;
  const height = binHeight - gap;
  return (
    <Group>
      {data.map((d, i) => {
        return (
          <Group
            key={`heatmap-${i}`}
            className="vx-heatmap-column"
            left={(data.length - i - 1) * binWidth + gap}
          >
            {bins(d).map((b, j) => {
              return (
                <rect
                  key={`heatmap-tile-rect-${j}`}
                  className={cx('vx-heatmap-rect', className)}
                  fill={colorScale(count(b))}
                  width={width}
                  height={height}
                  x={x}
                  y={(bins(d).length - j - 1) * binHeight}
                  fillOpacity={opacityScale(count(b))}
                  {...additionalProps(restProps, {
                    bin: b,
                    index: j,
                    datum: d,
                    datumIndex: i,
                    data,
                  })}
                />
              );
            })}
          </Group>
        );
      })}
    </Group>
  );
}

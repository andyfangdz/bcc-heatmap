import { Group } from '@vx/group';
import cx from 'classnames';
import { observer } from 'mobx-react';
import React from 'react';

import appState from '../store';

class HeatmapCells extends React.PureComponent {
  render() {
    const {
      binHeight,
      colorScale,
      opacityScale,
      className,
      bins,
      count,
      width,
      height,
    } = this.props;
    return bins.map((b, j) => {
      return (
        <rect
          key={`heatmap-tile-rect-${j}`}
          className={cx('vx-heatmap-rect', className)}
          fill={colorScale(count(b))}
          width={width}
          height={height}
          y={(bins.length - j - 1) * binHeight}
          fillOpacity={opacityScale(count(b))}
        />
      );
    });
  }
}

class HeatmapColumn extends React.PureComponent {
  _updateHighlightId = () => {
    appState.updateSelect(this.props.i, this.props.d);
  };

  render() {
    const {
      binWidth,
      binHeight,
      gap,
      colorScale,
      opacityScale,
      className,
      d,
      i,
      dataLength,
      bins,
      count,
      width,
      height,
    } = this.props;

    console.log('render');
    const renderBins = bins(d);
    return (
      <Group
        className={cx('vx-heatmap-column')}
        left={(dataLength - i - 1) * binWidth + gap}
        onMouseEnter={this._updateHighlightId}
      >
        <HeatmapCells
          bins={renderBins}
          binHeight={binHeight}
          colorScale={colorScale}
          opacityScale={opacityScale}
          className={className}
          count={count}
          width={width}
          height={height}
        />

      </Group>
    );
  }
}

const defaultBins = d => d.bins;
const defaultCount = d => d.count;

@observer
export default class HeatmapRect extends React.Component {
  render() {
    const {
      className,
      data,
      binWidth,
      binHeight,
      gap = 1,
      colorScale,
      opacityScale = d => 1,
      bins = defaultBins,
      count = defaultCount,
    } = this.props;
    const width = binWidth - gap;
    const height = binHeight - gap;

    return (
      <Group onMouseLeave={() => appState.updateSelect(null, null)}>
        {data.map((d, i) => (
          <HeatmapColumn
            key={`heatmap-column-${d.date}`}
            colorScale={colorScale}
            opacityScale={opacityScale}
            bins={bins}
            count={count}
            width={width}
            height={height}
            d={d}
            i={i}
            gap={gap}
            dataLength={data.length}
            className={className}
            binHeight={binHeight}
            binWidth={binWidth}
          />
        ))}
      </Group>
    );
  }
}

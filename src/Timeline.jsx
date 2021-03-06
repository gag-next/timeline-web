import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TimelineItem from './TimelineItem';

class Timeline extends React.Component {
  static Item: PropTypes.node;
  render() {
    const { prefixCls, children, pending, className, ...restProps } = this.props;
    const pendingNode = typeof pending === 'boolean' ? null : pending;
    const classString = classNames(prefixCls, {
      [`${prefixCls}-pending`]: !!pending,
    }, className);
    const items = React.Children.map(children, (ele: React.ReactElement<any>, idx) =>
      React.cloneElement(ele, {
        last: idx === children.length - 1,
      }),
    );
    const pendingItem = (!!pending) ? (
      <TimelineItem pending={!!pending}>{pendingNode}</TimelineItem>
    ) : null;
    return (
      <ul {...restProps} className={classString}>
        {items}
        {pendingItem}
      </ul>
    );
  }
}
Timeline.defaultProps = {
  prefixCls: 'ant-timeline',
};
Timeline.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  /** 指定最后一个幽灵节点是否存在或内容 */
  pending: PropTypes.node,
};
Timeline.displayName = "Timeline";
module.exports=Timeline;

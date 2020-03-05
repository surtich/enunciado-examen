import React, { Component } from "react";

type SliderProps = {
  size?: number;
  initialPos?: number;
  items: JSX.Element[];
};

type SliderState = {
  pos: number;
  transitioningRight: boolean;
  transitioningLeft: boolean;
};

export default class SliderFeatured extends Component<
  SliderProps,
  SliderState
> {
  constructor(props: SliderProps) {
    super(props);

    this.size =
      !props.size || props.size > props.items.length
        ? Math.floor(props.items.length / props.items.length)
        : props.size;

    this.state = {
      pos:
        !props.initialPos || props.initialPos > props.items.length - 1
          ? 0
          : props.initialPos,
      transitioningRight: false,
      transitioningLeft: false
    };
  }
  size: number = 0;

  render() {
    const { items } = this.props;
    const { pos, transitioningRight, transitioningLeft } = this.state;

    const size =
      !this.props.size || this.props.size > items.length
        ? Math.floor(items.length / 2)
        : this.props.size;

    const showItems = [
      items[pos > 0 ? pos - 1 : items.length - 1],
      ...items.slice(pos, pos + size + 1),
      ...(pos + size + 1 > items.length
        ? items.slice(0, pos + size + 1 - items.length)
        : [])
    ];
    return (
      <div
        data-testid="slider"
        className={`slider ${
          transitioningRight ? "slider-transitioning-right" : ""
        } ${transitioningLeft ? "slider-transitioning-left" : ""}`}
      >
        <div
          className="row"
          onLoad={() => {
            this.setState({
              transitioningLeft: true
            });
            setTimeout(() => {
              this.setState({
                pos: pos < items.length - 1 ? pos + 1 : 0
              });
            }, 2500);
          }}
        >
          <div className="slider-center">
            {showItems.map((item, i) => {
              return (
                <div
                  className={`col-1-of-${size} ${
                    i === showItems.length - 2 ? "col-without-margin" : ""
                  }`}
                  key={`item-${i}`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

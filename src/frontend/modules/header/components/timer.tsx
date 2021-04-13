import * as React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export class Timer extends React.Component<Record<string, unknown>> {
  public state = {
    seconds: 60,
  };

  public componentDidMount() {
    setInterval(() => {
      if (this.state.seconds <= 0) {
        this.setState({
          ...this.state,
          seconds: 60,
        });
      }
      this.setState({
        ...this.state,
        seconds: this.state.seconds - 1,
      });
    }, 1000);
  }

  public render() {
    return (
      <section className="timer" style={{ width: 36, height: 36 }}>
        <CircularProgressbar
          text={`${this.state.seconds}`}
          value={this.state.seconds}
          maxValue={60}
          minValue={0}
          styles={buildStyles({
            textSize: 44,
            textColor: '#3dc6c1',
            pathColor: '#3dc6c1',
          })}
        />
      </section>
    );
  }
}

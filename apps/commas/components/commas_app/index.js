import React from 'react';
import { connect } from 'react-redux';
import { selector } from '../../selectors';
import { setStory } from '../../actions';
import { colors, symbols, mockStory1, mockStory2, mockStory3, mockStory4 } from '../../constants';
import style from './style.css';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class SimpleBarChart extends React.Component {
  render () {
    const { data } = this.props;
    return (
      <BarChart width={640} height={200} data={data}
        margin={{top: 30, right: 30, left: 30, bottom: 0}}>
        <XAxis dataKey="label"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Bar isAnimationActive={false} dataKey="знаков" fill="#87CEEB" />
      </BarChart>
    );
  }
}

const Button = (props) => {
  return <button className={style.button} onClick={props.onClick}>{props.label}</button>;
};

const Dots = (props) => {
  return (
    <div className={style.dots}>
      {props.data.map(
        (x, i) => <div key={i} className={style.letter} style={{backgroundColor: colors[x]}}></div>)}
    </div>
  );
};

const Legend = (props) => {
  return (
    <div className={style.legend}>
    {props.data.map((x, i) =>
      <span key={i} className={style.legend_item} style={{borderColor: colors[x]}}>
        {x}
      </span>)}
    </div>
  );
};

class CommasApp extends React.Component {
  render() {
    const { stats, dots } = this.props;
    return (
      <div>
        <Button onClick={this.setStory1} label="Платонов. Сокровенный человек" />
        <Button onClick={this.setStory4} label="Пушкин. Капитанская дочка" />
        <Button onClick={this.setStory2} label="Андреев. Красный смех" />
        <Button onClick={this.setStory3} label="Грин. Алые паруса" />
        <SimpleBarChart data={stats} />
        <Dots data={dots} />
        <Legend data={symbols} />
      </div>
    );
  }

  setStory1 = () => {
    this.props.setStory(mockStory1);
  }

  setStory2 = () => {
    this.props.setStory(mockStory2);
  }

  setStory3 = () => {
    this.props.setStory(mockStory3);
  }

  setStory4 = () => {
    this.props.setStory(mockStory4);
  }
}

export default connect(selector, { setStory })(CommasApp);

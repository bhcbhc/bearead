/**
 * Created by ninghai on 2018/7/12.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

export  default class Annotation extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {level, count, number} = this.props;
        function getLevel(level) {
            if(level === '1') return '一等奖';
            else if(level === '2') return '二等奖';
            else if(level === '3') return '三等奖';
            else return '最佳人气奖';
        }

        function getRMB(level) {
            if(level === '1') return 10000;
            else if(level === '2') return 5000;
            else if(level === '3') return 3000;
            else  return 3000
        }

        return (
            <div className={style.container}>
                <h2>{`${getLevel(level)} ${number}名`}</h2>
                <div className={style.border} />
                <p className={style.award_two}>奖金</p>
                <div className={style.award_three}>
                    <p>{`${getRMB(level)}元`}</p>
                </div>
            </div>
        )
    }
}
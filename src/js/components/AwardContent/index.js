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
        const {level, count} = this.props;
        return (
            <div className={style.container}>
                <h2>{`${level} 1名`}</h2>
                <div className={style.award_two}>
                    <p>奖金</p>
                </div>
                <div className={style.award_three}>
                    <p>{`${count}元`}</p>
                </div>
            </div>
        )
    }
}
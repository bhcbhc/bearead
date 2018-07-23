/**
 * Created by ninghai on 2018/7/12.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

export default class Annotation extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {level, count, content , number} = this.props;
        return (
            <div className={style.container}>
                <h2>{`${level} ${number}名`}</h2>
                <div className={style.border} />
                <p className={style.award_two}>奖金</p>
                <div className={style.award_three}>
                    <p>{`${count}元`}</p>
                </div>
                <div className={style.award_four}>
                    <p>{`${content}`}</p>
                </div>
            </div>
        )
    }
}
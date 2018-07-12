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
        const {level, count, content} = this.props;
        return (
            <div className={style.container}>
                <div className={style.award_one}>
                    <h2>{`${level} 1名`}</h2>
                </div>
                <div>
                    <hr/>
                </div>
                <div className={style.award_two}>
                    <p>奖金</p>
                </div>
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
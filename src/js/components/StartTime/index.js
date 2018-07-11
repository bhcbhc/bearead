/**
 * Created by ninghai on 2018/7/11.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

const img = require('../../../assets/game_time.png');

export default class JoinCondition extends Component {
    render () {
        return (
            <div>
                <img src={img}/>
                <div className={style.condition}></div>
            </div>
        )
    }
}
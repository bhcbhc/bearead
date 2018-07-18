/**
 * Created by ninghai on 2018/7/12.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

const bearead = require('../../../assets/img_bearead.png');
const aurora = require('../../../assets/img_aurora.png');

export  default class LayerIcon extends Component {
    render () {
        return (
            <div className={style.sign}>
                <img className={style.bearead} src={bearead} />
                <div className={style.border} />
                <img className={style.aurora} src={aurora}/>
            </div>
        )
    }
}
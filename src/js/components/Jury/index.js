/**
 * Created by ninghai on 2018/7/12.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

export  default class Jury extends Component {
    constructor(props){
        super(props)
    }

    render () {
        const { juryUrl, name, introduce} = this.props;
        return (
            <div className={style.jury}>
                <img src={juryUrl} alt="评委头像"/>
                <p className={style.name}>{name}</p>
                <p className={style.introduce}>{introduce}</p>
            </div>
        )
    }
}
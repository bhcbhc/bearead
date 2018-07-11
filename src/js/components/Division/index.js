/**
 * Created by ninghai on 2018/7/11.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

const img = require('../../../assets/condition.png');

export default class Division extends Component {
    constructor(props){
        super(props)
    }

    handleClick () {}

    render () {
        const { imgUrl, alt, gameId} = this.props;
        return (
            <a href="javascript:void (0)">
                <img src={imgUrl} alt={alt} />
            </a>
        )
    }
}
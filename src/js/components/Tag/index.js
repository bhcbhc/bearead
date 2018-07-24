/**
 * Created by ninghai on 2018/7/25.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

export default class Tag extends Component {
    render() {
        const {content} = this.props;
        return (
            <div className={style.container}>
                <span className={style.content}>{content}</span>
            </div>
        )
    }
}
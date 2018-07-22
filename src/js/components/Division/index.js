/**
 * Created by ninghai on 2018/7/11.
 *
 */
import React, {Component} from 'react';
import style from './index.scss';

export default class Division extends Component {
    constructor(props){
        super(props);
        this.state = {
            basicUrl: this.props.imgUrl
        }
    }

    handleMouserOver  (url) {
        this.setState({basicUrl: url});
    }

    handleMouseOut (url) {
        this.setState({basicUrl: url});
    }


    render () {
        const { basicUrl }= this.state;
        const {
            imgUrl,
            holdImg,
            selectedImg,
            alt,
            isActived
        } = this.props;
        return (
            <a
                href="javascript:void (0)"
                onMouseOver={this.handleMouserOver.bind(this, holdImg)}
                onMouseOut={this.handleMouseOut.bind(this, imgUrl)}
                className={style.division}
            >
                <img src={`${ isActived ? selectedImg: basicUrl }`} alt={alt} />
            </a>
        )
    }
}
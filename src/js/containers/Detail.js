/**
 * Created by ninghai on 2018/7/24.
 *
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Download from '../components/Download'
import Tag from '../components/Tag';
import style from './detail.scss';

const log_24 = require('../../assets/detail/3x/logo_24.png');
const log_44 = require('../../assets/detail/3x/logo_44.png');

class Detail extends Component {

    constructor(){
        super();
        this.state = {
            isOpen: false
        }
    }

    openDownLoad(){
        this.setState({isOpen: true})
    }

    closeDownLoad(){
        this.setState({isOpen: false})
    }

    toRead(bid){
        this.props.router.push(`/detail/${bid}`);
    }

    componentDidMount(){
        console.log(this.props.book)
    }

    render() {
        const {
            app_url,
            wap_url,
            web_url,
            author_name,
            bid,
            desc,
            book_name,
            cover,
            icon,
            tags
        } = this.props.book;

        const {isOpen} = this.state;

        return (
            <div>
                <div className={style.container}>
                    <div className={style.title}>
                        <img src={log_24}/>
                    </div>
                    <div className={style.bookImg}>
                        <img src={cover} />
                    </div>
                    <div className={style.detailContainer}>
                        <span className={style.bookName}>{book_name}</span>
                        <p className={style.authorContainer}>
                            <img src={icon} className={style.author}/>
                            <span className={style.authorName}>{author_name}</span>
                        </p>
                        <div className={style.content}>
                            {desc}
                        </div>
                        <div className={style.tags}>
                            {tags.map((item,index) => (<Tag key={index} content={item}/>))}
                        </div>
                    </div>
                    <div className={style.read}>
                        <button onClick={this.toRead.bind(this,bid)}>立即阅读</button>
                    </div>
                    <div className={style.foot}>
                        <div className={style.footerLeft}>
                            <img src={log_44}/>
                            <div>
                                <p className={style.bearead}>白熊阅读</p>
                                <p className={style.sign}>爱和脑洞， 缺一不可</p>
                            </div>
                        </div>
                        <button onClick={this.openDownLoad.bind(this)} className={style.browser}>在App内浏览</button>
                    </div>
                </div>
                { isOpen ? (<Download  closeDownLoad={this.closeDownLoad.bind(this)}/>) : null}
            </div>
    )
    }
}


const mapStateToProps = state => ({
    book: state.book
});

export default connect(
    mapStateToProps
)(Detail)
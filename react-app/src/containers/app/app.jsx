import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentAdd from "../../components/comment-add/comment-add";
import CommentList from "../../components/comment-list/comment-list";

// connect 包装 APP 暴露三个参数入口
import {connect} from 'react-redux'
// 引入
import {addComment, deleteComment, getComments} from '../../redux/action'
import '../../bootstrap.css'

class App extends Component {

    // 外部传入参数
    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getComments()
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         const comments=[
    //             {username:'Tom',content:'React挺好的！'},
    //             {username:'Jack',content:'React太难了！'}
    //         ]
    //         this.setState({comments})
    //     }, 1000)
    // }
    //
    // addComment = (comment) => {
    //     const {comments} = this.state
    //     comments.unshift(comment)
    //     // 更新状态
    //     this.setState({comments})
    // }
    //
    // // 删除指定评论
    // deleteComment = (index) => {
    //     const {comments} = this.state
    //     comments.splice(index, 1)
    //     // 更新状态
    //     this.setState({comments})
    // }

    render() {
        // debugger
        const {comments,addComment,deleteComment} = this.props
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <CommentAdd addComment={addComment}/>
                        <CommentList comments={comments} deleteComment={deleteComment}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    //state:comments数组
    state =>({comments:state}),
    {addComment,deleteComment,getComments}
)(App)


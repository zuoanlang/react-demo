import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './comment-list.css'
import CommentItem from "../comment-item/comment-item";

export default class CommentList extends Component{

    //给组件类指定属性
    static proTypes={
        comments:PropTypes.array.isRequired,
        deleteComment:PropTypes.func.isRequired
    }
    render() {

        const {comments,deleteComment} = this.props
        const display = comments.length === 0 ? 'block':'none'
        // debugger
        return (
            <div className="col-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment,index) => <CommentItem comment={comment} key={index} deleteComment={deleteComment} index={index}/>)
                    }
                </ul>
            </div>
        );
    }
}

// CommentList.protoType = {
//     comments:PropTypes.array.isRequired
// }


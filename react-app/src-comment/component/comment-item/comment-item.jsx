import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentItem extends Component{

    //定义约束
    static propTypes ={
        comment:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }


    handleDelete = () => {
        const {comment,deleteComment,index} = this.props
        // 提示
        if (window.confirm(`确定删除${comment.username}的评论吗？`)){
            deleteComment(index)
        }
        // 删除
    }
    render() {
        // 取数据
        const {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <button className="btn btn-danger" onClick={this.handleDelete}>删除</button>
                </div>
                <p className="user"><span>{comment.username}</span>说：</p>
                <p className="centence">{comment.content}</p>
            </li>
        );
    }
}


import React,{Component} from 'react'
import PropsTypes from 'prop-types'

export default class CommentAdd extends Component{

    static propsTypes={
        addComment:PropsTypes.func.isRequired
    }

    state = {
        username:'',
        content:''
    }

    handleSubmit = (event) => {
        //1. 收集数据
        const comment = this.state
        //2. 更新状态
        this.props.addComment(comment)
        //3.清除数据
        this.setState({
            username:'',
            content:''
        })
        // 阻止事件的默认行为(提交)
        event.preventDefault()
        //数据在那个组件，更新数据的行为就应该在那个组件

    }
    handleNameChange = (event) =>{
        const username = event.target.value
        this.setState({username})
    }

    handleContentChange = (event) =>{
        const content = event.target.value
        this.setState({content})
    }

    render() {
        const {username,content} = this.state
        return (
            <div className="col-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" name="username"
                               value={username} onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" name="content"
                                  value={content} onChange={this.handleContentChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-primary pull-right" onClick={this.handleSubmit}>提&nbsp;&nbsp;交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

export class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state = {comment:''};
    }

    handleChange(event){
        this.setState({comment: event.target.value});
    }

    submitComment(event){
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment:''});
    }

    render(){
        return(
            <form className="comment-form" onSubmit={this.submitComment.bind(this)}>
                <h1>Add a Comment</h1>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange.bind(this)}
                />
                <button>Add Comment</button>
            </form>
        );
    }
}

export default connect(null, actions)(CommentForm);
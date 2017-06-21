import React,{Component} from 'react';
import {connect} from 'react-redux';

export class CommentList extends Component{
    renderComments(){
        const { comments } = this.props;
        return comments.map((comment)=>{
            return <li key={comment}>{comment}</li>
        });
    }

    render(){
        return (
            <ul className="comment-list">
                {this.renderComments()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        comments: state.comments
    };
}

export default connect(mapStateToProps)(CommentList);
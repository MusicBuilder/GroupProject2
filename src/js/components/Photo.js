import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
  render() {
    const { post, i, comments } = this.props;
    return(
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          


          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
           
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0 }
              </span>
            
          </div>
        </figcaption>
      </figure>
    )
  }
}

export default Photo;

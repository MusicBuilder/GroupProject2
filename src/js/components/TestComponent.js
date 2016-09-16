import React from 'react';

class TestComponent extends React.Component {

  render() {
    return(
      <div className="photo-grid" >
        {this.props.name}
      </div>
    )
  }
}

export default TestComponent;

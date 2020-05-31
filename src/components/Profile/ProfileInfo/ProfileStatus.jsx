import React from "react";


class ProfileStatus extends React.Component {

  state = {
    editMode: true
  }

  activateEditMode = () => {
    this.setState({editMode: false})
  }

  deactivateEditMode = () => {
    this.setState({editMode: true})
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <span
            onDoubleClick={this.activateEditMode}
          >{this.props.status}</span>
          : <input
            type="text"
            autoFocus={true}
            value={this.props.status}
            onBlur={this.deactivateEditMode}
          />
        }
      </div>
    )
  }
}

export default ProfileStatus;
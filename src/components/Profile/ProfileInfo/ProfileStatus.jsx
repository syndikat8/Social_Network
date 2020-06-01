import React from "react";


class ProfileStatus extends React.Component {

  state = {
    status: this.props.status,
    editMode: true
  }

  activateEditMode = () => {
    this.setState({editMode: false})
  }

  deactivateEditMode = () => {
    this.setState({editMode: true})
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({status: e.currentTarget.value})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({status: this.props.status})
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <span
            onDoubleClick={this.activateEditMode}
          >{this.props.status || "Нет статуса"}</span>
          : <input
            type="text"
            onChange={this.onStatusChange}
            autoFocus={true}
            value={this.state.status}
            onBlur={this.deactivateEditMode}
          />
        }
      </div>
    )
  }
}

export default ProfileStatus;
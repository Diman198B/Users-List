import React from "react"
import AddUser from "./AddUser"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }    
    user = this.props.user
    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit-icon"/>
                <img src={this.user.avatar} alt="Загрузите изображение" width="80" height="80"/>
                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <p>{this.user.email}</p>
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>
        )
    }
}

export default User
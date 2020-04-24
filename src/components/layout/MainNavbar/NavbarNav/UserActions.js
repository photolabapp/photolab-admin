import React, { useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
    NavItem,
    NavLink
} from "shards-react";

const UserActions = () => {
    const [visible, setVisible] = useState(false)
    const user = useSelector(state => state.user);

    const toggleUserActions = () => {
        setVisible(!visible)
    }

    return (
        <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
            <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
                <img
                    className="user-avatar rounded-circle mr-2"
                    src={require("./../../../../images/avatars/0.jpg")}
                    alt="User Avatar"
                />{" "}
                <span className="d-none d-md-inline-block">{user.name}</span>
            </DropdownToggle>
            <Collapse tag={DropdownMenu} right small open={visible}>
                <DropdownItem tag={Link} to="edit-user-profile">
                    <i className="material-icons">&#xE7FD;</i> Editar Perfil
            </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/" className="text-danger">
                    <i className="material-icons text-danger">&#xE879;</i> Logout
            </DropdownItem>
            </Collapse>
        </NavItem>
    );
}

export default UserActions
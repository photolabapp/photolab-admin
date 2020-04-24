import React from "react";
import { FormInput } from "shards-react";

const PlabFormInput = (props) => {
    return (
        <>
            <label htmlFor="fe">{props.title}</label>
            <FormInput
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                autoComplete={props.autoComplete}
            />
            {props.error ?
                <label style={{ color: "red", fontSize: 10 }}>{props.error}</label>
                : null
            }
        </>
    )
}

export default PlabFormInput

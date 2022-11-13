import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckBox, toggleShowName } from "../../store/profile/actions";

function Profile() {
    const { checked, showName, name } = useSelector((state) => state.checked);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleCheckBox)
    };
    const setShowName = () => {
        dispatch(toggleShowName);
    };

    return (
        <>

            <h3>This is Profile page</h3>
            <input
                type="checkbox"
                checked={checked}
                name={showName}
                value={showName}
                onChange={setShowName}
                onClick={handleClick}
            />

            <span>Show Name & click checkbox</span>
            {showName && <div>{name}</div>}


            {/* <div>
                <input type="checkbox" id="scales" name="scales" checked={checked} />

            </div>
            <button onClick={handleClick}>ChangeClick</button> */}
        </>
    )
}

export default Profile;



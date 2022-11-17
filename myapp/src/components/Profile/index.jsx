import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckBox } from "../../store/profile/actions";
import { selectorProfile } from '../../store/profile/selectors';
import { shallowEqual } from "react-redux";


function Profile() {
    const { checked } = useSelector(selectorProfile, shallowEqual);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleCheckBox)
    };
    // const setShowName = () => {
    //     dispatch(toggleShowName);
    // };

    return (
        <>

            <h3>This is Profile page</h3>
            <div>
                <input type="checkbox" id="scales" name="scales" readOnly checked={checked} />
                <button onClick={handleClick}>Change store state</button>
            </div>



        </>
    )
}

export default Profile;
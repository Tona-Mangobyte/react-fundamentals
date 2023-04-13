import React from "react";

function Profile(props) {
    const [profile, setProfile] = React.useState({username: 'Tona'});

    const onChangeProfileData = React.useCallback((field, value) => {
        const newData = {};
        newData[field] = value;
        setProfile({ ...profile, ...newData });
        console.log(`onChangeProfileData `, profile);
    }, [profile]);

    const onChangeProfileData2 = React.useCallback((field, value, event = null) => {
        console.log(event);
        const isDefaultPrevented = event.isDefaultPrevented();
        console.log(isDefaultPrevented);
        setProfile((data) => {
            data[field] = value;
            // React.useDebugValue(`Simple Data `);
            return data;
        });
        console.log(`onChangeProfileData `, profile);
    }, []);

    return (
        <React.Fragment>
            <h1>Hello: { profile?.username ?? '' }</h1>
            <h1>Tel: { profile?.phone ?? '' }</h1>
            <h1>{ profile?.bio ?? '' }</h1>
            <input type={"text"} name={`username`} defaultValue={profile?.username} onChange={(e) => onChangeProfileData2('username', e.target.value, e)}/>
            <input type={"text"} name={`phone`} defaultValue={profile?.phone} onChange={(e) => onChangeProfileData2('phone', e.target.value, e)}/>
            <textarea name="bio" onChange={(e) => onChangeProfileData2('bio', e.target.value, e)} />
        </React.Fragment>
    );
}

export default Profile;
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import User from "../components/User";
import UserCourse from "../components/UserCourse";

function UserPage() {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        loadUser()
    }, []);

    async function loadUser() {
        API.getUsers()
            .then(res => {
                setUsers(res.data[0]);
                console.log(res.data[0]);
                // API.getEnrolled(res.data[0]._id)
                //     .then( response => {
                //             console.log("1");
                //             console.log(response.data);
                //         }
                //     )
                    console.log("3");
                }
                
            )
            .catch(err =>
                console.log(err));
    };

    return (
        <div>
            <User />
            <UserCourse
                userId={user._id}
                userName={user.userName}
                userBrief={user.userBrief}
                userCourse={user.userCourse}
                userEnrolledTime={user.userEnrolledTime}
            />
        </div>
    );
}

export default UserPage;

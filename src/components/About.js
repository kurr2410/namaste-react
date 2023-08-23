import User from "./User";
import UserClass from "./UserClass"
const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h4>This is about page</h4>
            <User name={"Ankur"} location={"bangalore"}/>
            <UserClass name={"Ankit"} location={"bangalore"}/>
        </div>
    )
}

export default About;
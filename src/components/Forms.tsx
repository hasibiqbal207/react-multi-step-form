export function Personal () {
    return (
        <div className="form-container">
            <h2>Personal Information</h2>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Mobile Number" />
            </form>
        </div>
    )
}

export function Signup () {
    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <form>
                <input type="email" placeholder="Enter Email address" />
                <input type="password" placeholder="Enter Password" />
                <input type="password" placeholder="Confirm Password" />
            </form>
        </div>
    )
}

export function SocialLinks () {
    return (
        <div className="form-container">
            <h2>Social Links</h2>
            <form>
                <input type="text" placeholder="Facebook URL" />
                <input type="text" placeholder="Twitter URL" />
                <input type="text" placeholder="Pinterest" />
            </form>
        </div>
    )
}
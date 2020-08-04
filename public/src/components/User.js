const User = (props) => (
    <div>
        <div>
            <h3>{props.user.userName}</h3>
        </div>
        <div>
            <p>{props.user.bio}</p>
        </div>
    </div>
);

export default User;
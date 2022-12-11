import PropTypes from "prop-types";
import css from "./FriendList.module.css";
import FriendList from "./FriendList";

export default function Friend(props) {
    const {friends} = props
    return(
        <div className={css.friends}>
            <ul className={css.friends__list}>
                {friends.map(friend => (
                    <FriendList 
                    key = {friend.id}
                    isOnline = {friend.isOnline}
                    avatar = {friend.avatar}
                    name = {friend.name}
                    />
                ))}

            </ul>
        </div>
    )
}

Friend.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}


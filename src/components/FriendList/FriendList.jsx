import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./FriendList.module.css";



export default function FriendList(props) {
    const { isOnline, avatar, name } = props

    return (
        <li className={css.friend__item}>
            <span className={clsx(css.friends__status, isOnline ? css.friend__online : css.friend__offline)}></span>
            <img className={css.friend__avatar} src={avatar} alt={name} width="50"/>
            <p className={css.friends__name}>{name}</p>
        </li>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
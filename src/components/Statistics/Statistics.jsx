import PropTypes from "prop-types";
import css from "./Statistics.module.css";

function bgColor() {
    const randomColor = Math.floor(Math.random() * 16777).toString(16)
    return `#${randomColor}`
}

export default function Statistics(props) {
    const {stats, title} = props
    return (
        <section className={css.statistics}>
        <div className={css.stats__container}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stats__list}>
                {stats.map((stat => {
                    const background = bgColor();
                    return <li className={css.item} style={{backgroundColor: background}} key={stat.id}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percent}>{stat.percentage}%</span>
                </li>
                }))}
            </ul>
        </div>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const bgColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      <div className={css.stats__container}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.stat__list}>
          {stats.map(stat => {
            return (
              <li
                className={css.item}
                style={{ backgroundColor: bgColor() }}
                key={stat.id}
              >
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;

import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './Ticker.module.scss';

const cx = classnames.bind(style);

function Ticker({ title, color, top, right }) {
    return (
        <div
            className={cx('wrapper')}
            style={{
                backgroundColor: `${color}`,
                top: `${top}`,
                right: `${right}`,
            }}
        >
            <span className={cx('tick-title')}>{title}</span>
        </div>
    );
}

Ticker.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
};

export default Ticker;

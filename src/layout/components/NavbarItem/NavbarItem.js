import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames/bind';
import style from './NavbarItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(style);

function NavbarItem({ title, icon, link, ticker, playTick, small }) {
    return (
        <NavLink
            to={link}
            end
            className={(nav) => cx('nav-item', { active: nav.isActive })}
        >
            <span className={cx('nav-icon')}>{icon}</span>
            <span className={cx('nav-title', { small })}>
                {title} {ticker}
            </span>
            {playTick && (
                <span className={cx('nav-play-tick')}>
                    <FontAwesomeIcon icon={faPlay} />
                </span>
            )}
        </NavLink>
    );
}

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    link: PropTypes.string.isRequired,
    ticker: PropTypes.node,
    playTick: PropTypes.bool,
    small: PropTypes.bool,
};

export default NavbarItem;

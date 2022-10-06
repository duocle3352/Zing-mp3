import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './Navbar.module.scss';

const cx = classnames.bind(style);

function Navbar({ children, control, mark }) {
    return (
        <div className={cx('nav-box', { control }, { mark })}>{children}</div>
    );
}

Navbar.propTypes = {
    children: PropTypes.node.isRequired,
    control: PropTypes.bool,
    mark: PropTypes.bool,
};

export default Navbar;

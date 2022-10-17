import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './MenuWrapper.module.scss';

const cx = classNames.bind(style);

function MenuWrapper({ children, className }) {
    return <ul className={cx('wrapper', className)}>{children}</ul>;
}

MenuWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default MenuWrapper;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import style from './HeaderTool.module.scss';

const cx = classNames.bind(style);

function HeaderTool({ icon }) {
    return <button className={cx('toll-item', 'br-999')}>{icon}</button>;
}

HeaderTool.propTypes = {
    icon: PropTypes.node.isRequired,
};

export default HeaderTool;

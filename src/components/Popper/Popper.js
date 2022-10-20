import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import style from './Popper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Popper({ title, link, children }) {
    return (
        <section className={cx('wrapper', 'row')}>
            <div className={cx('header', 'col')}>
                <h2 className={cx('title')}>{title}</h2>
                <Link className={cx('link')} to={link}>
                    TẤT CẢ
                    <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                </Link>
            </div>
            {children}
        </section>
    );
}

Popper.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default memo(Popper);

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import style from './Popper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Popper({
    title,
    supTitle,
    link,
    image,
    showAll = false,
    imgTitle = false,
    classes,
    children,
}) {
    return (
        <section className={cx('wrapper', 'row', classes)}>
            <div className={cx('header', 'col')}>
                {/* text title */}
                {!imgTitle && <h2 className={cx('title')}>{title}</h2>}

                {/* image title */}
                {imgTitle && (
                    <div className={cx('img-title')}>
                        <Link to="./" className={cx('title-link', 'img-title-link')}>
                            <img className={cx('image')} src={image} alt={title} />
                        </Link>
                        <div className={cx('content')}>
                            <span className={cx('sup-title')}>{supTitle}</span>
                            <Link to="./" className={cx('title', 'title-link')}>
                                {title}
                            </Link>
                        </div>
                    </div>
                )}

                {/* show all link */}
                {showAll && (
                    <Link className={cx('link')} to={link}>
                        TẤT CẢ
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                    </Link>
                )}
            </div>
            {children}
        </section>
    );
}

Popper.propTypes = {
    title: PropTypes.string.isRequired,
    supTitle: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    showAll: PropTypes.bool,
    imgTitle: PropTypes.bool,
    classes: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default memo(Popper);

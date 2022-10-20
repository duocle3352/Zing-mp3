import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay, faHeart as faReHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { MenuWrapper } from '../MenuWrapper';
import { MenuContent } from '../MenuContent';
import { listMenu } from '~/dataOther/listMenu';
import style from './Playlist.module.scss';

const cx = classNames.bind(style);

function Playlist({ data, twoLine }) {
    const [isLiked, setIsLiked] = useState(false);
    const [showOtherMenu, setShowOtherMenu] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const toggleShowOtherMenu = () => {
        setShowOtherMenu(!showOtherMenu);
    };
    return (
        <div className={cx('wrapper')}>
            <Link to={data.link} className={cx('link')}>
                {/* image */}
                <div className={cx('img-box')}>
                    <img className={cx('img')} src={data.image} alt={data.title} />
                </div>
                <div className={cx('control')}>
                    {/* like */}
                    {isLiked ? (
                        <Tippy content="Xóa khỏi thư viện">
                            <button
                                className={cx('s-icon__btn', 's-icon__btn-primary')}
                                onClick={toggleLike}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </Tippy>
                    ) : (
                        <Tippy content="Thêm vào thư viện">
                            <button className={cx('s-icon__btn')} onClick={toggleLike}>
                                <FontAwesomeIcon className={cx('s-icon')} icon={faReHeart} />
                            </button>
                        </Tippy>
                    )}

                    {/* play */}
                    <button className={cx('l-icon__btn')}>
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </button>

                    {/* other menu*/}
                    <div>
                        <HeadlessTippy
                            visible={showOtherMenu}
                            interactive
                            placement="bottom-start"
                            offset={[20, 0]}
                            onClickOutside={() => setShowOtherMenu(false)}
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <MenuWrapper>
                                        <MenuContent listItem={listMenu} smallSize />
                                    </MenuWrapper>
                                </div>
                            )}
                        >
                            <Tippy content="Khác">
                                <button className={cx('s-icon__btn')} onClick={toggleShowOtherMenu}>
                                    <FontAwesomeIcon icon={faEllipsis} />
                                </button>
                            </Tippy>
                        </HeadlessTippy>
                    </div>
                </div>
            </Link>

            {/* title */}
            <Link to={data.link} className={cx('title', twoLine ? 'two-line' : 'one-line')}>
                {data.title}
            </Link>
            <>
                {data?.sings &&
                    data.sings.map((sing, index) => (
                        <Link to="./" className={cx('sing-link')} key={index}>
                            {sing}
                            {data?.sings?.length > 1 && <span>, </span>}
                        </Link>
                    ))}
                {data?.sings?.length > 1 && <span className={cx('sing-dot')}>...</span>}
            </>
        </div>
    );
}

Playlist.propTypes = {
    data: PropTypes.object.isRequired,
    twoLine: PropTypes.bool,
};

export default memo(Playlist);

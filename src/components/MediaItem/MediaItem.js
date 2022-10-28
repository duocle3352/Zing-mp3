import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Ticker } from '~/components/Ticker';
import { listMenu } from '~/dataOther';
import images from '~/assets/images';
import style from './MediaItem.module.scss';
import { MenuWrapper } from '../MenuWrapper';
import { MenuContent } from '../MenuContent';
import { useState } from 'react';

const cx = classNames.bind(style);

function MediaItem({
    item,
    rate,
    rateNumber,
    isSing = false,
    isPlaylist = false,
    isTimeLine = false,
    isPlayIcon = false,
    isTick = false,
    isMenu = false,
    // size
    medium = false,
    large = false,
}) {
    const newFollow = (item.totalFollow / 1000).toFixed(0);
    const [showOtherMenu, setShowOtherMenu] = useState(false);
    let rateNumberColor;

    if (rateNumber === 1) {
        rateNumberColor = '#4a90e2';
    } else if (rateNumber === 2) {
        rateNumberColor = '#50e3c2';
    } else {
        rateNumberColor = '#e35050';
    }

    const toggleShowOtherMenu = () => {
        setShowOtherMenu(!showOtherMenu);
    };

    // allowAudioAds
    return (
        <div
            className={cx(
                'wrapper',
                isPlayIcon ? 'wrapper__sup' : '',
                medium ? 'medium' : '',
                large ? 'large' : '',
                rate ? 'wrapper__bg' : '',
            )}
        >
            {/* ratings number*/}
            {rateNumber && (
                <span
                    className={cx('rate-number')}
                    style={{ WebkitTextStroke: `1px ${rateNumberColor}` }}
                >
                    {rateNumber}
                </span>
            )}

            {/* image */}
            <div className={cx('img-box')}>
                <img
                    className={cx('image', isSing ? 'br-999' : '')}
                    src={item.thumbnail}
                    alt={item.title || item.name}
                />

                <img className={cx('image-disk')} src={images.albumDisk} alt="album-disk" />

                {isPlayIcon && (
                    <span className={cx('play-icon')}>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                )}
            </div>
            {/* body */}
            <div className={cx('body')}>
                <div className={cx('title-box')}>
                    <h3 className={cx('title')}>{item.title || item.name}</h3>
                    {!item.allowAudioAds && isTick && (
                        <Ticker
                            title="VIP"
                            color="#8b7512"
                            top="unset"
                            right="unset"
                            subClass={cx('sing-tick')}
                        />
                    )}
                </div>
                {/* follow */}
                {item.totalFollow ? (
                    <h3 className={cx('subtitle')}>{`Nghệ sĩ • ${newFollow}K quan tâm`}</h3>
                ) : (
                    <h3 className={cx('subtitle')}>
                        {isPlaylist ? `Playlist • ${item.artistsNames}` : item.artistsNames}
                    </h3>
                )}

                {/* time line */}
                {isTimeLine && <h3 className={cx('subtitle')}>0 giờ trước</h3>}
            </div>

            {/* ratings % */}
            {rate && <span className={cx('rate')}>{rate}</span>}

            {/* other menu*/}
            {isMenu && (
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
                            <button className={cx('menu__btn')} onClick={toggleShowOtherMenu}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </button>
                        </Tippy>
                    </HeadlessTippy>
                </div>
            )}
        </div>
    );
}

MediaItem.propTypes = {
    item: PropTypes.object.isRequired,
    isSing: PropTypes.bool,
    isPlaylist: PropTypes.bool,
    isTimeLine: PropTypes.bool,
    isPlayIcon: PropTypes.bool,
    isTick: PropTypes.bool,
    isMenu: PropTypes.bool,
    rate: PropTypes.string,
    rateNumber: PropTypes.number,
    medium: PropTypes.bool,
    large: PropTypes.bool,
};

export default MediaItem;

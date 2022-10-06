import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAudioDescription,
    faHeadphonesSimple,
    faIcons,
    faMusic,
    faPencil,
    faPlus,
    faPodcast,
    faRadio,
    faRecordVinyl,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import { Navbar } from '../Navbar';
import { NavbarItem } from '../NavbarItem';
import { MusicsIcon, PlayListIcon, HistoryIcon } from '~/components/Icons';
import { Button } from '~/components/Button';
import { Ticker } from '~/components/Ticker';
import { configs } from '~/configs';
import images from '~/assets/images';
import style from './LeftBar.module.scss';

const cx = classnames.bind(style);

function LeftBar() {
    return (
        <div className={cx('wrapper')}>
            {/* logo */}
            <div className={cx('logo-box')}>
                <Link to={configs.router.home}>
                    <img
                        className={cx('logo-img')}
                        src={images.bigLogo}
                        alt="Zing-Mp3"
                    />
                </Link>
            </div>

            {/* first navbar */}
            <Navbar>
                <NavbarItem
                    title="Cá Nhân"
                    icon={<FontAwesomeIcon icon={faHeadphonesSimple} />}
                    link={configs.router.myMusic}
                    playTick
                />
                <NavbarItem
                    title="Khám Phá"
                    icon={<FontAwesomeIcon icon={faRecordVinyl} />}
                    link={configs.router.home}
                />
                <NavbarItem
                    title="Zing Chart"
                    icon={<FontAwesomeIcon icon={faPodcast} />}
                    link={configs.router.zingChart}
                    playTick
                />
                <NavbarItem
                    title="Radio"
                    icon={<FontAwesomeIcon icon={faRadio} />}
                    link={configs.router.radio}
                    playTick
                    ticker={
                        <Ticker
                            title="Live"
                            color="red"
                            top="50%"
                            right="-40px"
                        />
                    }
                />
                <NavbarItem
                    title="Theo Dõi"
                    icon={<FontAwesomeIcon icon={faSoundcloud} />}
                    link={configs.router.follow}
                />
            </Navbar>

            {/* separate */}
            <div className={cx('separate')} />

            {/* second navbar */}
            <Navbar control mark>
                <div className={cx('nav-cover')}>
                    <NavbarItem
                        title="Nhạc Mới"
                        icon={<FontAwesomeIcon icon={faMusic} />}
                        link={configs.router.newMusics}
                        playTick
                    />
                    <NavbarItem
                        title="Thể Loai"
                        icon={<FontAwesomeIcon icon={faIcons} />}
                        link={configs.router.category}
                    />
                    <NavbarItem
                        title="Top 100"
                        icon={<FontAwesomeIcon icon={faStar} />}
                        link={configs.router.top100}
                    />
                    <NavbarItem
                        title="MV"
                        icon={<FontAwesomeIcon icon={faAudioDescription} />}
                        link={configs.router.MV}
                    />
                </div>

                {/* left bar banner */}
                <div className={cx('vip-banner')}>
                    <div className={cx('banner-title')}>
                        Nghe nhạc không quảng cáo cùng kho nhạc VIP
                    </div>
                    <Button vip large>
                        NÂNG CẤP VIP
                    </Button>
                </div>

                {/* library */}
                <div className={cx('sub-nav__content')}>
                    <h2 className={cx('sub-nav__title')}>THƯ VIỆN</h2>
                    <span className={cx('sub-nav__icon')}>
                        <FontAwesomeIcon icon={faPencil} />
                    </span>

                    <NavbarItem
                        small
                        title="Bài hát"
                        icon={<MusicsIcon />}
                        link={configs.router.myMusic}
                        playTick
                    />
                    <NavbarItem
                        small
                        title="Playlist"
                        icon={<PlayListIcon />}
                        link={configs.router.myPlaylist}
                    />
                    <NavbarItem
                        small
                        title="Gần Đây"
                        icon={<HistoryIcon />}
                        link={configs.router.history}
                    />
                </div>
            </Navbar>

            {/* create playlist */}
            <div className={cx('create-playlist')}>
                <button className={cx('create-playlist__btn')}>
                    <FontAwesomeIcon icon={faPlus} />
                    <span className={cx('create-playlist__title')}>
                        Tạo playlist mới
                    </span>
                </button>
            </div>
        </div>
    );
}

export default LeftBar;

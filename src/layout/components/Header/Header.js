import classnames from 'classnames/bind';
import { useState } from 'react';
import {
    faArrowLeftLong,
    faArrowRightLong,
    faArrowUpFromBracket,
    faGear,
    faGem,
    faShirt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Search from '../Search/Search';
import images from '~/assets/images';
import { MenuWrapper } from '~/components/MenuWrapper';
import { MenuContent } from '~/components/MenuContent';
import { firstSettingMenu, secondSettingMenu, userMenu, logOutMenu } from './listMenu';
import style from './Header.module.scss';

const cx = classnames.bind(style);

function Header() {
    const [showSettingMenu, setShowSettingMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-tool')}>
                {/* header control */}
                <button className={cx('page-control__btn')}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>
                <button className={cx('page-control__btn', 'disable')}>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </button>

                {/* search */}
                <Search />
            </div>
            <div className={cx('header-tool')}>
                <Tippy content="Chủ đề">
                    <button className={cx('toll-item', 'br-999')}>
                        <FontAwesomeIcon icon={faShirt} />
                    </button>
                </Tippy>

                <Tippy content="Nâng cấp Vip">
                    <button className={cx('toll-item', 'br-999')}>
                        <FontAwesomeIcon icon={faGem} />
                    </button>
                </Tippy>

                <Tippy content="Tải lên">
                    <button className={cx('toll-item', 'br-999')}>
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </button>
                </Tippy>

                {/* setting place */}
                <div className={cx('toll-item', 'br-999')}>
                    {/* Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.  */}
                    <HeadlessTippy
                        visible={showSettingMenu}
                        interactive
                        placement="bottom-end"
                        offset={[10, 20]}
                        onClickOutside={() => setShowSettingMenu(false)}
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <MenuWrapper>
                                    <div className={cx('menu-box')}>
                                        <MenuContent listItem={firstSettingMenu} />
                                    </div>
                                    <MenuContent listItem={secondSettingMenu} />
                                </MenuWrapper>
                            </div>
                        )}
                    >
                        <Tippy content="Cài đặt">
                            <button
                                className={cx('toll-item__btn')}
                                onClick={() => setShowSettingMenu(true)}
                            >
                                <FontAwesomeIcon icon={faGear} />
                            </button>
                        </Tippy>
                    </HeadlessTippy>
                </div>

                {/* user place */}
                <div className={cx('toll-item', 'br-999')}>
                    {/* Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.  */}
                    <HeadlessTippy
                        visible={showUserMenu}
                        interactive
                        placement="bottom-end"
                        offset={[10, 10]}
                        onClickOutside={() => setShowUserMenu(false)}
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <MenuWrapper>
                                    <div className={cx('menu-box')}>
                                        <MenuContent listItem={userMenu} />
                                    </div>
                                    <MenuContent listItem={logOutMenu} />
                                </MenuWrapper>
                            </div>
                        )}
                    >
                        <Tippy content="Tài khoản">
                            <button
                                className={cx('toll-item__btn')}
                                onClick={() => setShowUserMenu(true)}
                            >
                                <img
                                    className={cx('header-avatar', 'br-999')}
                                    src={images.avatar}
                                    alt={'avatar'}
                                />
                            </button>
                        </Tippy>
                    </HeadlessTippy>
                </div>
            </div>
        </div>
    );
}

export default Header;

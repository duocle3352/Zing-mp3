import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';
import style from './MenuContent.module.scss';
import { MenuWrapper } from '~/components/MenuWrapper';
const cx = classNames.bind(style);

function MenuContent({ listItem = [], smallSize }) {
    const [hightQuality, setHightQuality] = useState(true);

    const mainMenu = (item) => {
        return (
            <>
                <span className={cx('menu-left-icon')}>{item.leftIcon}</span>
                <span className={cx('menu-item__title')}>{item.title}</span>
                <span className={cx('menu-right-icon')}>{item.rightIcon}</span>
            </>
        );
    };

    return (
        <>
            {listItem.map((item) => (
                <li className={cx('menu-item')} key={item.id}>
                    <button
                        className={cx(
                            'menu-item__btn',
                            item.other ? 'menu-item__btn-other' : '',
                            smallSize ? 'small' : '',
                        )}
                    >
                        {/* main menu */}
                        {mainMenu(item)}

                        {/* sub menu */}
                        {item.submenu && (
                            <MenuWrapper className={cx('sub-menu', 'right-place')}>
                                {item.submenu.map((subItem) => (
                                    <li
                                        className={cx('menu-item', 'submenu-item')}
                                        key={subItem.subId}
                                        onClick={() => {
                                            if (subItem.isQuality) {
                                                if (subItem.lowQuality) {
                                                    setHightQuality(false);
                                                } else {
                                                    setHightQuality(true);
                                                }
                                            }
                                            return;
                                        }}
                                    >
                                        {/* option case */}
                                        {subItem.isQuality && (
                                            <>
                                                <div className={cx('sub-menu__body')}>
                                                    <h3 className={cx('sub-menu__title')}>
                                                        {subItem.subTitle}
                                                    </h3>
                                                    <p className={cx('sub-menu__desc')}>
                                                        {subItem.subDescription}
                                                    </p>
                                                </div>

                                                {/* set hight quality */}
                                                {!hightQuality && subItem.lowQuality && (
                                                    <span className={cx('sub-menu__icon')}>
                                                        {subItem.subIcon}
                                                    </span>
                                                )}
                                                {hightQuality && subItem.hightQuality && (
                                                    <span className={cx('sub-menu__icon')}>
                                                        {subItem.subIcon}
                                                    </span>
                                                )}
                                            </>
                                        )}

                                        {/* link case */}

                                        {subItem.isLink && (
                                            <div
                                                className={cx(
                                                    'menu-item__btn',
                                                    'submenu-item__btn',
                                                )}
                                            >
                                                {mainMenu(subItem)}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </MenuWrapper>
                        )}
                    </button>
                </li>
            ))}
        </>
    );
}

MenuContent.propTypes = {
    listItem: PropTypes.array.isRequired,
    smallSize: PropTypes.bool,
};

export default MenuContent;

import {
    faArrowRightFromBracket,
    faAudioDescription,
    faBan,
    faCheck,
    faChevronRight,
    faCircleExclamation,
    faCirclePlay,
    faFileLines,
    faGem,
    faMoneyCheckDollar,
    faPhone,
    faRectangleAd,
    faShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const firstSettingMenu = [
    {
        id: 1,
        leftIcon: <FontAwesomeIcon icon={faBan} />,
        rightIcon: false,
        title: 'Danh sach chặn',
        link: './',
    },
    {
        id: 2,
        leftIcon: <FontAwesomeIcon icon={faAudioDescription} />,
        rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
        title: 'Chất lượng nhạc',
        link: './',
        submenu: [
            {
                subId: 2.1,
                subTitle: 'SQ • 128',
                subDescription: 'Giảm sử dụng dữ liệu cho các kết nối chậm hơn.',
                subIcon: <FontAwesomeIcon icon={faCheck} />,
                isQuality: true,
                lowQuality: true,
            },
            {
                subId: 2.2,
                subTitle: 'HQ • 320',
                subDescription:
                    'Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng âm thanh.',
                subIcon: <FontAwesomeIcon icon={faCheck} />,
                isQuality: true,
                hightQuality: true,
            },
        ],
    },
    {
        id: 3,
        leftIcon: <FontAwesomeIcon icon={faCirclePlay} />,
        rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
        title: 'Giao diện',
        link: './',
    },
];

export const secondSettingMenu = [
    {
        id: 4,
        leftIcon: <FontAwesomeIcon icon={faCircleExclamation} />,
        rightIcon: false,
        title: 'Giới thiệu',
        link: './',
        other: true,
    },
    {
        id: 5,
        leftIcon: <FontAwesomeIcon icon={faPhone} />,
        rightIcon: false,
        title: 'Liên hệ',
        link: './',
        other: true,
    },
    {
        id: 6,
        leftIcon: <FontAwesomeIcon icon={faRectangleAd} />,
        rightIcon: false,
        title: 'Quảng cáo',
        link: './',
        other: true,
    },
    {
        id: 7,
        leftIcon: <FontAwesomeIcon icon={faFileLines} />,
        rightIcon: false,
        title: 'Thỏa thuận sử dụng',
        link: './',
        other: true,
    },
    {
        id: 8,
        leftIcon: <FontAwesomeIcon icon={faShield} />,
        rightIcon: false,
        title: 'Chính sách bảo mật',
        link: './',
        other: true,
    },
];

export const userMenu = [
    {
        id: 9,
        leftIcon: <FontAwesomeIcon icon={faGem} />,
        title: 'Nâng cấp Vip',
        link: './',
    },
    {
        id: 10,
        leftIcon: <FontAwesomeIcon icon={faMoneyCheckDollar} />,
        title: 'Mua code Vip',
        link: './',
    },
];

export const logOutMenu = [
    {
        id: 11,
        leftIcon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
        link: './',
    },
];

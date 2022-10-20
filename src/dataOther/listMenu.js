import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import {
    faChevronRight,
    faCode,
    faDownload,
    faLink,
    faPlus,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const listMenu = [
    {
        id: 1,
        leftIcon: <FontAwesomeIcon icon={faPlus} />,
        rightIcon: false,
        title: 'Thêm vào danh sách phát',
        link: './',
    },
    {
        id: 2,
        leftIcon: <FontAwesomeIcon icon={faComment} />,
        rightIcon: false,
        title: 'Bình luận',
        link: './',
    },
    {
        id: 3,
        leftIcon: <FontAwesomeIcon icon={faDownload} />,
        rightIcon: false,
        title: 'Tải xuống',
        link: './',
    },
    {
        id: 4,
        leftIcon: <FontAwesomeIcon icon={faLink} />,
        rightIcon: false,
        title: 'Sao chép link',
        link: './',
    },
    {
        id: 5,
        leftIcon: <FontAwesomeIcon icon={faShare} />,
        rightIcon: <FontAwesomeIcon icon={faChevronRight} />,
        title: 'Chia sẻ',
        link: './',
        submenu: [
            {
                subId: 5.1,
                leftIcon: <FontAwesomeIcon icon={faFacebook} />,
                rightIcon: false,
                title: 'Facebook',
                isLink: true,
                link: './',
            },
            {
                subId: 5.2,
                leftIcon: <FontAwesomeIcon icon={faTwitter} />,
                rightIcon: false,
                title: 'Twitter',
                isLink: true,
                link: './',
            },
            {
                subId: 5.3,
                leftIcon: <FontAwesomeIcon icon={faCode} />,
                rightIcon: false,
                title: 'Mã nhúng',
                isLink: true,
                link: './',
            },
        ],
    },
];

export default listMenu;

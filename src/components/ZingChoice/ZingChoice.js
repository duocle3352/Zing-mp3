import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { listZingChoice } from '~/dataOther';
import style from './ZingChoice.module.scss';

const cx = classNames.bind(style);

function ZingChoice() {
    const [choiceWidth, setChoiceWidth] = useState(0);
    const [count, setCount] = useState(0);
    const choiceRef = useRef();
    const controlRight = useRef();
    const controlLeft = useRef();

    useEffect(() => {
        setChoiceWidth(choiceRef.current.offsetWidth);
    }, [count]);

    const handleControl = (options) => {
        if (options === 'right') {
            // 7 is elements render in a window
            setCount(listZingChoice.length - 7);

            controlRight.current.classList.add(cx('control__disable'));
            controlLeft.current.classList.remove(cx('control__disable'));
        } else {
            setCount(0);
            controlRight.current.classList.remove(cx('control__disable'));
            controlLeft.current.classList.add(cx('control__disable'));
        }
    };
    return (
        <div className={cx('wrapper', 'row')}>
            <div
                className={cx('container')}
                style={{ transform: `translateX(calc(-${count} * ${choiceWidth}px))` }}
            >
                {listZingChoice.map((item) => (
                    <div key={item.id} className={cx('col', 'l-1-7')} ref={choiceRef}>
                        <a href="./" className={cx('link')}>
                            <img className={cx('img')} src={item.image} alt={item.keyName} />
                        </a>
                    </div>
                ))}
            </div>

            <button
                className={cx('control', 'control__disable', 'br-999')}
                onClick={() => handleControl('left')}
                ref={controlLeft}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
                className={cx('control', 'control__right', 'br-999')}
                onClick={() => handleControl('right')}
                ref={controlRight}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}

export default ZingChoice;

import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { homeService } from '~/services';
import { Button } from '~/components/Button';
import { MediaItem } from '~/components/MediaItem';
import { Popper } from '~/components/Popper';
import style from './NewRelease.module.scss';

const cx = classNames.bind(style);

function NewRelease() {
    const [isNewSong, setIsNewSong] = useState(true);
    const [newRelease, setNewRelease] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            const result = await homeService();

            setNewRelease(result.items[3]);
        };

        fetchApi();
    }, []);

    let newSong;
    let newAlbum;

    if (newRelease?.items) {
        newSong = newRelease?.items[0]?.song.slice(0, 12);
        newAlbum = newRelease?.items[0]?.album.slice(0, 9);
    }

    const choseNewRelease = (option) => {
        option === 'song' ? setIsNewSong(true) : setIsNewSong(false);
    };

    return (
        <Popper title="Mới Phát Hành" link="./" showAll>
            <div className={cx('option-new', 'col', 'l-12')}>
                <Button
                    primary={isNewSong}
                    outline={!isNewSong}
                    onClick={() => choseNewRelease('song')}
                >
                    BÀI HÁT
                </Button>
                <Button outline={isNewSong} primary={!isNewSong} onClick={() => choseNewRelease()}>
                    ALBUM
                </Button>
            </div>
            {newSong &&
                isNewSong &&
                newSong.map((song) => (
                    <div className={cx('col', 'l-4')} key={song.encodeId}>
                        <MediaItem item={song} isPlayIcon isTimeLine isTick isMenu medium />
                    </div>
                ))}

            {newAlbum &&
                !isNewSong &&
                newAlbum.map((song) => (
                    <div className={cx('col', 'l-4')} key={song.encodeId}>
                        <MediaItem item={song} isPlayIcon isTimeLine isMenu large />
                    </div>
                ))}
        </Popper>
    );
}

export default NewRelease;

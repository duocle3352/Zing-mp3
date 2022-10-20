import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import { historyData } from './historyData';
import { suggestionData } from './suggestionData';
import { homeService } from '~/services';
import { SliderBox } from '~/components/SliderBox';
import { Popper } from '~/components/Popper';
import { Playlist } from '~/components/Playlist';
import { Button } from '~/components/Button';
import { MediaItem } from '~/components/MediaItem';
import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    const [isNewSong, setIsNewSong] = useState(true);
    const [banners, setBanners] = useState({});
    const [newRelease, setNewRelease] = useState({});
    // const [playlist, setPlaylist] = useState({});

    // get new list song with length = 12
    // get new list album with length = 9
    let newSong;
    let newAlbum;

    if (newRelease?.items) {
        newSong = newRelease?.items[0]?.song.slice(0, 12);
        newAlbum = newRelease?.items[0]?.album.slice(0, 9);
    }
    // .._..

    useEffect(() => {
        const fetchApi = async () => {
            const result = await homeService();

            setBanners(result.items[0]);
            setNewRelease(result.items[3]);
            // setPlaylist(result.items[4]);
        };

        fetchApi();
    }, []);

    const choseNewRelease = (option) => {
        option === 'song' ? setIsNewSong(true) : setIsNewSong(false);
    };

    return (
        <section>
            {/* banner */}
            {banners?.items ? <SliderBox data={banners} /> : <h1>Loading...</h1>}

            {/* history */}
            <Popper title="Gần đây" link="./">
                {historyData.map((item) => (
                    <div className={cx('history-item', 'col', 'l-1-7')} key={item.id}>
                        <Playlist twoLine data={item} />
                    </div>
                ))}
            </Popper>

            {/* Suggestion */}
            <Popper title="Có Thể Bạn Muốn Nghe" link="./">
                {suggestionData.map((item) => (
                    <div className={cx('suggestion-item', 'col', 'l-2-4')} key={item.id}>
                        <Playlist twoLine data={item} />
                    </div>
                ))}
            </Popper>

            {/* new Release */}
            <Popper title="Mới Phát Hành" link="./">
                <div className={cx('option-new', 'col', 'l-12')}>
                    <Button
                        primary={isNewSong}
                        outline={!isNewSong}
                        onClick={() => choseNewRelease('song')}
                    >
                        BÀI HÁT
                    </Button>
                    <Button
                        outline={isNewSong}
                        primary={!isNewSong}
                        onClick={() => choseNewRelease()}
                    >
                        ALBUM
                    </Button>
                </div>
                {newSong &&
                    isNewSong &&
                    newSong.map((song) => (
                        <div className={cx('new-release', 'col', 'l-4')} key={song.encodeId}>
                            <MediaItem item={song} isPlayIcon isTimeLine isTick isMenu medium />
                        </div>
                    ))}

                {newAlbum &&
                    !isNewSong &&
                    newAlbum.map((song) => (
                        <div className={cx('new-release', 'col', 'l-4')} key={song.encodeId}>
                            <MediaItem item={song} isPlayIcon isTimeLine isMenu large />
                        </div>
                    ))}
            </Popper>
        </section>
    );
}

export default Home;

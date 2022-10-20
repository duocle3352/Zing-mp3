import classnames from 'classnames/bind';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { useDebounce } from '~/hook';
import { searchService } from '~/services';
import { SearchResultTitle } from '~/components/SearchResultTitle';
import { SearchSuggestionsItem } from '~/components/SearchSuggestionsItem';
import { MediaItem } from '~/components/MediaItem';
import style from './Search.module.scss';

const cx = classnames.bind(style);

function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [artistsResult, setArtistsResult] = useState([]);
    const [songsResult, setSongsResult] = useState([]);
    const [playlistsResult, setPlaylistsResult] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const debounceValue = useDebounce(searchValue, 800);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchValue('');
            setArtistsResult([]);
            setSongsResult([]);
            setPlaylistsResult([]);
            return;
        }

        const fetchApi = async () => {
            setShowLoading(true);

            const result = await searchService(debounceValue);

            setShowLoading(false);
            setArtistsResult(result.artists.slice(0, 4));
            setSongsResult(result.songs.slice(0, 4));
            setPlaylistsResult(result.playlists.slice(0, 4));
        };

        fetchApi();
    }, [debounceValue]);

    const handleInput = (value) => {
        setSearchValue(value);
    };

    const handleClear = () => {
        setSearchValue('');
        setArtistsResult([]);
        setSongsResult([]);
        setPlaylistsResult([]);
        inputRef.current.focus();
    };

    const handleShowResult = (value) => {
        setShowResult(value);
    };

    return (
        <div>
            <Tippy
                visible={showResult}
                interactive={true}
                placement="auto-end"
                offset={[0, 0]}
                onClickOutside={() => handleShowResult(false)}
                render={(attrs) => (
                    <div className={cx('search-result-content')} tabIndex="-1" {...attrs}>
                        <div className={cx('search-result-box')}>
                            {/* search title */}
                            <SearchResultTitle title="Từ khóa liên quan" />

                            {/* search suggestions */}
                            <SearchSuggestionsItem title="Hà Anh Tuấn" />
                            <SearchSuggestionsItem title="Bùi Anh Tuấn" />
                            <SearchSuggestionsItem title="Đen Vâu" />
                            <SearchSuggestionsItem main title={searchValue} />

                            <div className={cx('search-result')}>
                                {/* search title */}
                                <SearchResultTitle title="Gợi ý kết quả" />

                                {/* loading */}
                                {showLoading && (
                                    <div className={cx('search-loading')}>
                                        <span>Loading...</span>
                                    </div>
                                )}

                                {/* search result */}
                                <ul>
                                    {/* artistsResult */}
                                    {artistsResult.length > 0 &&
                                        // eslint-disable-next-line array-callback-return
                                        artistsResult.map((artist) => {
                                            if (
                                                artist.thumbnail !==
                                                'https://photo-zmp3.zmdcdn.me/artist_default_2.png'
                                            ) {
                                                return (
                                                    <li
                                                        className={cx('result-item')}
                                                        key={artist.id}
                                                    >
                                                        <MediaItem item={artist} isSing />
                                                    </li>
                                                );
                                            }
                                        })}

                                    {/* songsResult */}
                                    {songsResult.length > 0 &&
                                        songsResult.map((song) => (
                                            <li className={cx('result-item')} key={song.encodeId}>
                                                <MediaItem item={song} isPlayIcon />
                                            </li>
                                        ))}

                                    {/* playlistsResult */}
                                    {playlistsResult.length > 0 &&
                                        playlistsResult.map((playlists) => (
                                            <li
                                                className={cx('result-item')}
                                                key={playlists.encodeId}
                                            >
                                                <MediaItem item={playlists} isPlaylist />
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            >
                <div className={cx('wrapper')}>
                    <button className={cx('search-icon')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        className={cx('search-input')}
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát,..."
                        onChange={(e) => handleInput(e.target.value)}
                        onFocus={() => handleShowResult(true)}
                    />
                    <button className={cx('search-clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;

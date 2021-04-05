import { getUserId, getVideos } from '../lib/api';
import React, { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Lists from '@/components/Lists';
import List from '@/components/List';
import Link from 'next/link';

export type TwitchType = {
    id: string;
    userId: string;
    title: string;
    thumbail: string;
    url: string;
};

export default function Search() {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [wish, setWish] = useState<TwitchType[]>([]);
    const [flag, setFlag] = useState(false);

    const onSubmit = useCallback(
        async (event) => {
            event.preventDefault();
            setLoading(true);
            const userId = await getUserId(value)
                .then((res) => {
                    return res;
                })
                .then((data) => data.data);

            await getVideos(userId[0]['id'])
                .then((res) => {
                    setLoading(false);
                    return res;
                })
                .then((data) => setResult(data.data));
        },
        [value],
    );

    const setIdWishList = useCallback((id) => {
        const prev = localStorage.getItem('list');

        if (prev) {
            const prevArray = prev!.split(';');
            if (!prevArray.includes(id))
                localStorage.setItem('list', `${prev};${id}`);
        } else {
            localStorage.setItem('list', `${id}`);
        }
        setFlag((value) => !value);
    }, []);

    const setWishList = useCallback((id, event) => {
        localStorage.setItem(id, event);
    }, []);

    const removeIdWish = useCallback((id) => {
        localStorage.removeItem(id);
        let lists: string[] = [];
        const valueStorage = localStorage.getItem('list');
        valueStorage ? (lists = valueStorage.split(';')) : lists;

        const filtered = lists.filter((el) => id !== el);
        localStorage.setItem('list', filtered.toString());
        setFlag((value) => !value);
    }, []);

    const getWishList = () => {
        let lists: string[] = [];
        const valueStorage = localStorage.getItem('list');
        valueStorage ? (lists = valueStorage.split(';')) : lists;

        for (let i = 0; i < lists.length; i++) {
            const idElement = lists[i];
            const value = localStorage.getItem(idElement);
            if (value) {
                const wishData: string[] = value!.split(';');

                const [id, userId, title, thumbail, url] = wishData;
                const obj = {
                    id,
                    userId,
                    title,
                    thumbail,
                    url,
                };
                const valueWish = wish.map((el: TwitchType) => el.id);
                if (!valueWish.includes(idElement))
                    setWish((old: TwitchType[]) => [...old, obj]);
            }
        }
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
    };

    useEffect(() => {
        getWishList();
    }, [flag, wish, removeIdWish]);

    return (
        <>
            <Header>
                <form className="search" onSubmit={onSubmit}>
                    <label className="search-label" htmlFor="input">
                        Введите название канала
                    </label>
                    <input
                        className="search-input"
                        id="input"
                        type="text"
                        autoComplete="off"
                        onChange={onChange}
                    />
                    <button
                        className="btn btn-success search-btn"
                        type="submit"
                    >
                        Отправить
                    </button>
                </form>
            </Header>
            {loading ? (
                <div className="pt-85">Loading...</div>
            ) : (
                <Lists>
                    {result.map(
                        ({
                            id,
                            user_id,
                            user_login,
                            title,
                            thumbnail_url,
                            url,
                        }) => (
                            <List
                                key={id + user_id + user_login}
                                title={title}
                                thumbnail={thumbnail_url}
                                url={url}
                                onWishList={() => {
                                    setIdWishList(id);
                                    setWishList(
                                        id,
                                        `${id};${user_id};${title};${thumbnail_url};${url}`,
                                    );
                                }}
                            />
                        ),
                    )}
                </Lists>
            )}
            <div>
                <input type="checkbox" id="nav-toggle" hidden />
                <nav className="nav">
                    <label htmlFor="nav-toggle" className="nav-toggle" />
                    <h2 className="logo">Избранное</h2>

                    <ul className="list-group">
                        {wish.map(({ id, userId, title, thumbail, url }) => (
                            <li key={id + userId} className="list-group-item">
                                <div className="d-flex flex-nowrap align-content-center justify-content-center">
                                    <img
                                        className="nav_img mr-3"
                                        src={thumbail.replace(
                                            /%{width}x%{height}/,
                                            '50x50',
                                        )}
                                        alt={title}
                                    />
                                    <Link href={url}>
                                        <a className="list-group-item-action">
                                            {title}
                                        </a>
                                    </Link>
                                    <button onClick={() => removeIdWish(id)}>
                                        Удалить
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}

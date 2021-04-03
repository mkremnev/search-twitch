import { getUserId, getVideos } from '../lib/api';
import { useCallback, useState } from 'react';
import { data } from 'browserslist';

export default function Search() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);

    const onSubmit = useCallback(
        async (event) => {
            event.preventDefault();
            const userId = await getUserId(value)
                .then((res) => res)
                .then((data) => data.data);

            await getVideos(userId[0]['id'])
                .then((res) => res)
                .then((data) => setResult(data.data));
        },
        [value],
    );

    const onChange = (event) => {
        const value = event.target.value;

        setValue(value);
    };
    console.log(result);
    return (
        <form className="search" onSubmit={onSubmit}>
            <input
                className="search-input"
                id="input"
                type="text"
                autoComplete="off"
                onChange={onChange}
            />
            <label className="search-label" htmlFor="input" />
            <button type="submit">Отправить</button>
        </form>
    );
}

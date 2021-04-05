import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export type ListsType = {
    title: string;
    thumbnail: string;
    url: string;
    onWishList: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Lists({
    title,
    thumbnail,
    url,
    onWishList,
}: ListsType) {
    const imageSrc = (thumbnail as string).replace(
        /%{width}x%{height}/,
        '300x300',
    );

    return (
        <li className="list-group-item w-300 p-0 mx-1 mb-2">
            <div className="w-300 bg-dark h-100 wrapper-list">
                {thumbnail ? (
                    <img src={imageSrc} width="300" height="300" alt={title} />
                ) : (
                    <Image
                        src="/assets/twitch_PNG53.png"
                        width={300}
                        height={300}
                    />
                )}
                <div className="description-list d-flex justify-content-center align-content-center">
                    <div className="d-flex justify-content-center align-content-center flex-wrap o-0">
                        <Link href={url}>
                            <a className="list-group-item-action text-center text-decoration-none list-action">
                                {title}
                            </a>
                        </Link>
                        <button
                            className="btn btn-primary"
                            onClick={onWishList}
                        >
                            Добавить в избранное
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

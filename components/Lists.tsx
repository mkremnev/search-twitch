import React from 'react';

export default function Lists({ children }: React.PropsWithChildren<{}>) {
    return (
        <ul className="d-flex flex-wrap list-group list-group-horizontal pt-85 justify-content-center">
            {children}
        </ul>
    );
}

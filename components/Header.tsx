import React from 'react';

export default function Header({ children }: React.PropsWithChildren<{}>) {
    return <header className="container mx-auto px-5">{children}</header>;
}

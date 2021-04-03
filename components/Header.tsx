import React from 'react';

export default function Header({ children }: React.PropsWithChildren<{}>) {
    return <header className="container-fluid header-main">{children}</header>;
}

import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>CGU Todo list</h1>
        </header>
    )
}

const headerStyle = {
    background: '#5F9EA0',
    color: '#FFFFE0',
    textAlign: 'center',
    padding: '10px',
    fontsize:'xx-large',
}


export default Header;
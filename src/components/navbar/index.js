import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
                <Link to={'/'} className='navbar-brand'>
                    {' '}
                    MovieLinkBrowser
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarCollapse'
                    aria-controls='navbarCollapse'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarCollapse'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link to={'/'} className='nav-link'>
                                {' '}
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/'} className='nav-link'>
                                {' '}
                                Search
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/'} className='nav-link'>
                                {' '}
                                History
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

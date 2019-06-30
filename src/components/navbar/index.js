import React from 'react';
// import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
                <a className='navbar-brand' href='/'>
                    Top navbar
                </a>
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
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#'>
                                Home <span className='sr-only'>(current)</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Link
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className='nav-link disabled'
                                href='#'
                                tabindex='-1'
                                aria-disabled='true'
                            >
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function footer() {
    return (
        <footer className='footer mt-auto py-3 fixed-bottom bg-secondary'>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-md-12'>
                        <Link
                            to={'/'}
                            className='text-info'
                            style={{
                                textDecoration: 'none',
                                fontSize: '1rem'
                            }}
                        >
                            {' '}
                            &copy; 2019 EntOfMD
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

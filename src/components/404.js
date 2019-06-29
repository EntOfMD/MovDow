import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='jumbotron text-center'>
                        <i className='fas fa-unlink h2' />{' '}
                        <span className='h1'>Page Not Found</span>
                        <br />
                        <br />
                        <Link to={'/'}>
                            <h6 className='text-warning btn btn-secondary'>
                                <i className='fas fa-long-arrow-alt-left' />{' '}
                                Take Me Back Home!
                            </h6>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

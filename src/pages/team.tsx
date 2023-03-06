import Image from 'next/image';
import React from 'react';

export default function Team() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='text-center'>Team</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <h2 className='text-center'>Meet the Team</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <div className='card'>
            <Image
              src='https://avatars.githubusercontent.com/u/81497590?v=4'
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>Issam</h5>
              <p className='card-text'>Software Engineer</p>
              <a
                href='www.com'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'>
                Github
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <Image
              src='https://avatars.githubusercontent.com/u/81497590?v=4'
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>Issam</h5>
              <p className='card-text'>Software Engineer</p>
              <a
                href='www.com'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'>
                Github
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <Image
              src='https://avatars.githubusercontent.com/u/81497590?v=4'
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>Issam</h5>
              <p className='card-text'>Software Engineer</p>
              <a
                href='www.com'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'>
                Github
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <Image
              src='https://avatars.githubusercontent.com/u/81497590?v=4'
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>Issam</h5>
              <p className='card-text'>Software Engineer</p>
              <a
                href='www.com'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

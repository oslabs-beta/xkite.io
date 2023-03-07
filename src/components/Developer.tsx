import React from 'react';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

export default function Developer(props: {
  name: string;
  img: string;
  github: string;
  linkedin?: string;
}) {
  return (
    <>
      <div className='d-flex flex-column align-items-center developer'>
        <Image
          src={props.img}
          alt={`image of ${props.name}`}
          width={200}
          height={200}
          className='profile-pic'
        />
        <h3>{props.name}</h3>
        <h4>Software Engineer</h4>
        <Container className='d-flex justify-content-evenly links'>
          <a href={`http://www.github.com/${props.github}`} target='_blank'>
            <Image
              src='/github-mark.svg'
              alt='github'
              width={24}
              height={24}
            ></Image>
          </a>
          <a
            href={`http://www.linkedin.com/in/${props.linkedin}`}
            target='_blank'
          >
            <Image
              src='/linkedin.svg'
              alt='linkedin'
              width={24}
              height={24}
            ></Image>
          </a>
        </Container>
      </div>
    </>
  );
}

import Developer from '@/components/Developer';
import Container from 'react-bootstrap/Container';

export default function Team() {
  return (
    <>
      <h2>Meet the Team!</h2>
      <hr />
      <Container className='d-flex justify-content-evenly'>
        <Developer
          name='John Hamlin'
          img='/John.png'
          github='johnhamlin'
          linkedin='hamlinjohn'
        />
        <Developer
          name='Issam Eljitan'
          img='/Issam.png'
          github='issam-eljitan'
          linkedin='issam-eljitan'
        />
        <Developer
          name='Irina Khafizova'
          img='/Irina.png'
          github='khafizka'
          linkedin='irina-khafizova'
        />
        <Developer
          name='Mark Krasner'
          img='/Mark.png'
          github='mzkrasner'
          linkedin='krasnermark'
        />
        <Developer
          name='Zahara Aviv'
          img='/Zahara.png'
          github='zahara-aviv'
          linkedin='zahara'
        />
      </Container>
    </>
  );
}

/*
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
        src='/John.png'
        className='card-img-top'
        alt='...'
        width={100}
        height={100}
      />
      <div className='card-body'>
        <h5 className='card-title'>Issam</h5>
        <p className='card-text'>Software Engineer</p>
        <a
          href='www.com'
          className='btn btn-primary'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
    </div>
  </div>
        <div className='col-sm-4'>
          <div className='card'>
            <Image
              src='/Issam.jpg'
              className='card-img-top'
              alt='...'
              width={100}
              height={100}
            />
            <div className='card-body'>
              <h5 className='card-title'>Issam</h5>
              <p className='card-text'>Software Engineer</p>
              <a
                href='www.com'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <Image
              src='/Irina.jpg'
              className='card-img-top'
              alt='...'
              width={100}
              height={100}
            />
            <div className='card-body'>
              <h5 className='card-title'>Issam</h5>
              <p className='card-text'>Software Engineer</p>
              <a
                href='www.com'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <Image
              src='/Mark.jpg'
              className='card-img-top'
              alt='...'
              width={100}
              height={100}
            />
            <div className='card-body'>
              <h5 className='card-title'>Issam</h5>
              <p className='card-text'>Software Engineer</p>
              <a
                href='www.com'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <Image
              src='/Zahara.jpg'
              className='card-img-top'
              alt='...'
              width={100}
              height={100}
            />
            <div className='card-body'>
              <h5 className='card-title'>Issam</h5>
              <p className='card-text'>Software Engineer</p>
              <a
                href='www.com'
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
*/

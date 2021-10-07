import { Button, Card as BootsrapCard } from 'react-bootstrap';

const Card = ({ coverImage, description, link, name }) => {
  return (
    <BootsrapCard className='mx-auto my-2'>
      <BootsrapCard.Img variant='top' src={coverImage} width='246' height='246' />
      <BootsrapCard.Body>
        <BootsrapCard.Title style={{ whiteSpace: 'nowrap' }}>{name}</BootsrapCard.Title>
        <BootsrapCard.Text>{description}</BootsrapCard.Text>
        <Button variant='primary' href={link}>
          看更多
        </Button>
      </BootsrapCard.Body>
    </BootsrapCard>
  );
};

export default Card;

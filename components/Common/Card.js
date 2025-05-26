import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardsCustom = ({title , description , image , alt , link}) => {
  return (
    <a href={link} className='text-decoration-none'>

   <div class="card" style={{}}>
  <img src={image} class="card-img-top" alt={alt} />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    {/* <a href="#" class="btn btn-primary">Read More</a> */}
  </div>
</div>
    </a>
  );
}

export default CardsCustom;
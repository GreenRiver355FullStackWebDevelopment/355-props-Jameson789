//renders a restruant using props passed from container
function Restaurant(props) {
  const { image, name, address, phone, cuisine, rating} = props.restaurant;
  return (
    <div className="restaurant">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <ul>
        <li>{address}</li>
        <li>{phone}</li>
        <li>{cuisine}</li>
        <li>⭐ {rating}</li>
      </ul>
    </div>
  );
}

export default Restaurant;

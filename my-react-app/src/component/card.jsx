function Card(props){
  return(
    <div className="card">
      <h2>
        {props.name}
      </h2>
      <p><strong>ID:</strong>{props.id}</p>
      <p><strong>Phone:</strong>{props.phone}</p>
      <p><strong>Brach:</strong>{props.brach}</p>
    </div>
  );
}
export default Card;
import Button from  "./Button";
function Card({
    image,
    title,
    price,
    buttonText
}){
    return(
        <div className="crad">
        <img
            src={image}
            alt={title}
        />
        <h3>{title}</h3>
        <p>{price}</p>
        <Button text={buttonText}/>


        </div>
    );
}
export default Card;
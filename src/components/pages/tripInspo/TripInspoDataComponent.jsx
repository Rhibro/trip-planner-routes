export default function TripInspoComponent({image, tripTitle, tripDates, ideas}) {
    return (
        <li>
            <img className="inspoImg" src={image}/>
            <h2>{tripTitle}</h2>
            <p>{tripDates}</p>
            <p>{ideas}</p>
        </li>
    )
}
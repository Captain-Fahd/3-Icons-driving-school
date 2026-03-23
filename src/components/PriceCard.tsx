export interface CardData  {
    title: string,
    subtitle: string,
    price: number,
    hours: number,
}

const PriceCard = (cardData: CardData) => {
    return (
      <div className="card rounded-4 shadow" style={{width: "13vw", height: "20vh"}}>
          <div className="card-body">
              <h5 className="card-title fw-bold">{cardData.title}</h5>
              <h6 className="card-subtitle" style={{color: "darkgray"}}>{cardData.subtitle}</h6>
          </div>
      </div>
    );
};

export default PriceCard;
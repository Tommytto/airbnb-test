import React, {useEffect, useState} from 'react';
import './style.scss';
import Card from '../Card';
import Api from '../../services/Api';

const CardGrid = () => {
    const [cardList, setCardList] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await Api.getPageInfo();
            console.log(response);
            setCardList(response);
        })();
    }, []);

    function renderCardList() {
        console.log(cardList);
        return cardList.map((cardInfo) => (
            <div className="card-grid__card-wrapper" key={cardInfo.id}>
                <Card {...cardInfo} />
            </div>
        ));
    }

    return <div className="card-grid">{renderCardList()}</div>;
};

export default CardGrid;

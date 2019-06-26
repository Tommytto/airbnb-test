import React, {useEffect, useState, useRef} from 'react';
import './style.scss';
import Card from '../Card';
import Api from '../../services/Api';
import InfiniteScroll from 'react-infinite-scroller';

const CardGrid = () => {
    const [cardList, setCardList] = useState([]);
    const lazyCheckerRef = useRef(null);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        const response = await Api.getPageInfo();
        const modified = response.map((item) => ({...item, id: Date.now() * Math.random()}));
        setCardList([...cardList, ...modified]);
    }

    function renderCardList() {
        return cardList.map((cardInfo) => (
            <div className="card-grid__card-wrapper" key={cardInfo.id}>
                <Card {...cardInfo} />
            </div>
        ));
    }

    return (
        <InfiniteScroll hasMore={true} loadMore={loadData} pageStart={0}>
            <div className="card-grid" ref={lazyCheckerRef}>
                {renderCardList()}
            </div>
        </InfiniteScroll>
    );
};

export default CardGrid;

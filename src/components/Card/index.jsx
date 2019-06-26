import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
        display_rating: PropTypes.number,
        display_text: PropTypes.string,
        kicker_text: PropTypes.string,
        kicker_text_color: PropTypes.string,
        poster_pictures: PropTypes.array,
        price_string: PropTypes.string,
        review_count: PropTypes.number,
        star_rating_color: PropTypes.string,
        summaries: PropTypes.arrayOf(PropTypes.string),
    };

    state = {
        carouselPictureIndex: -1,
    };

    handleStartHover = () => {
        setInterval(() => {
            const {carousel_collection_multimedia} = this.props;
            this.setState(({carouselPictureIndex: oldIndex}) => {
                const newIndex = (oldIndex + 1) % carousel_collection_multimedia.length;
                return {
                    carouselPictureIndex: newIndex,
                };
            });
        }, 2000);
    };

    handleStopHover = () => {
        console.log('leave');
    };

    render() {
        const {kicker_text, display_text, kicker_text_color} = this.props;
        return (
            <section className="card" onMouseEnter={this.handleStartHover} onMouseLeave={this.handleStopHover}>
                {this.renderPoster()}
                <div className="card__title" style={{color: kicker_text_color}}>
                    {kicker_text}
                </div>
                <div className="card__description">{display_text}</div>
                {this.renderInfo()}
                {this.renderRating()}
            </section>
        );
    }

    renderSummaries() {
        const {summaries} = this.props;
        return summaries.map((summary, i) => (
            <span key={i}>
                <span>·</span>
                {summary}
            </span>
        ));
    }

    isHovered() {
        return 0 <= this.state.carouselPictureIndex;
    }

    renderRating() {
        const {display_rating, review_count, star_rating_color} = this.props;
        if (!display_rating) {
            return null;
        }
        const finalRating = display_rating === Math.round(display_rating) ? `${display_rating}.0` : display_rating;
        return (
            <div className="card__rating" style={{color: star_rating_color}}>
                {finalRating}
                <div className="card__star" />
                <div className="card__review-count">({review_count})</div>
            </div>
        );
    }

    // renderCarousel() {
    //     const {carouselPictureIndex} = this.state;
    //     const {carousel_collection_multimedia} = this.props;
    //
    //     if (!this.isHovered()) {
    //         return null;
    //     }
    //
    //     const picture = carousel_collection_multimedia[carouselPictureIndex].picture.poster;
    //     return carousel_collection_multimedia.map(({picture: {poster}}, index) => {
    //         const classNameList = ['card__poster', 'card__poster_type_carousel'];
    //
    //         if (index === carouselPictureIndex) {
    //             classNameList.push('card__poster_type_active');
    //         }
    //
    //         return <img alt="carousel item" className={classNameList.join(' ')} key={index} src={picture} />;
    //     });
    // }

    renderPoster() {
        const {poster_pictures} = this.props;
        return (
            <div className="card__poster-wrapper">
                <img alt="poster" className="card__poster" src={poster_pictures[0].poster} />
                {/*{this.renderCarousel()}*/}
                <div className="card__poster-overlay" />
            </div>
        );
    }

    renderInfo() {
        const {price_string} = this.props;
        return (
            <div className="card__info">
                <span className="card__price">{price_string}</span>
                {this.renderSummaries()}
            </div>
        );
    }
}

export default Card;

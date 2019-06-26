import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import CardPoster from '../CardPoster/index';
import heartSvg from './heart.svg';

class Card extends React.Component {
    static propTypes = {
        carousel_collection_multimedia: PropTypes.array,
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
        isHovered: false,
    };

    handleStartHover = () => {
        this.setState({
            isHovered: true,
        });
    };

    handleStopHover = () => {
        this.setState({
            isHovered: false,
        });
    };

    render() {
        const {kicker_text, display_text, poster_pictures, kicker_text_color, carousel_collection_multimedia} = this.props;
        return (
            <section className="card" onMouseEnter={this.handleStartHover} onMouseLeave={this.handleStopHover}>
                <CardPoster
                    carousel_collection_multimedia={carousel_collection_multimedia}
                    isHovered={this.state.isHovered}
                    poster_pictures={poster_pictures}
                />
                <div className="card__title" style={{color: kicker_text_color}}>
                    {kicker_text}
                </div>
                <div className="card__description">{display_text}</div>
                {this.renderInfo()}
                {this.renderRating()}
                {this.renderLikeButton()}
            </section>
        );
    }

    renderLikeButton() {
        return (
            <div className="card__like-icon-wrapper">
                <img alt="heart" className="card__like-icon" src={heartSvg} />
            </div>
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

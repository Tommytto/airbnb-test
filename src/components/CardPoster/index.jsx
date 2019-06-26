import React from 'react';
import {Transition} from 'react-transition-group';
import PropTypes from 'prop-types';
import './style.scss';

export default class CardPoster extends React.Component {
    static propTypes = {
        carousel_collection_multimedia: PropTypes.array,
        isHovered: PropTypes.bool,
        poster_pictures: PropTypes.array,
    };
    state = {
        carouselPictureIndex: -1,
        isHovered: false,
    };

    carouselInterval = null;
    carouselTimeout = null;

    renderCarousel() {
        const {carouselPictureIndex} = this.state;
        const {carousel_collection_multimedia} = this.props;

        return (
            carousel_collection_multimedia &&
            carousel_collection_multimedia.map(({picture: {poster}}, index) => {
                return (
                    <Transition in={carouselPictureIndex === index} key={index} timeout={0}>
                        {(state) => {
                            return (
                                <img
                                    alt="carousel item"
                                    className={`card-poster__carousel-item card-poster__carousel-item_state_${state}`}
                                    src={poster}
                                />
                            );
                        }}
                    </Transition>
                );
            })
        );
    }

    componentDidUpdate(prevProps) {
        const {isHovered, carousel_collection_multimedia} = this.props;

        if (carousel_collection_multimedia && carousel_collection_multimedia.length) {
            if (!prevProps.isHovered && isHovered) {
                this.startCarousel();
            } else if (prevProps.isHovered && !isHovered) {
                this.stopCarousel();
            }
        }
    }

    startCarousel() {
        this.stopCarousel();
        this.carouselTimeout = setTimeout(() => {
            this.setState({
                carouselPictureIndex: 0,
            });
            this.runInterval();
        }, 500);
    }

    componentWillUnmount() {
        this.stopCarousel();
    }

    stopCarousel() {
        this.setState({
            carouselPictureIndex: -1,
        });
        clearInterval(this.carouselInterval);
        clearTimeout(this.carouselTimeout);
    }

    runInterval() {
        this.carouselInterval = setInterval(() => {
            const {carousel_collection_multimedia} = this.props;
            this.setState(({carouselPictureIndex: oldIndex}) => {
                const newIndex = (oldIndex + 1) % carousel_collection_multimedia.length;
                return {
                    carouselPictureIndex: newIndex,
                };
            });
        }, 2400);
    }

    render() {
        const {poster_pictures, isHovered} = this.props;

        if (!poster_pictures) {
            return null;
        }

        return (
            <div className="card-poster">
                <div className="card-poster__wrapper">
                    <Transition in={isHovered} timeout={{enter: 0, exit: 0}}>
                        {(state) => {
                            return (
                                <img alt="poster" className={`card-poster__img card-poster__img_state_${state}`} src={poster_pictures[0].poster} />
                            );
                        }}
                    </Transition>
                    {this.renderCarousel()}
                </div>
                <div className={`card-poster__overlay ${isHovered ? 'active' : ''}`} />
            </div>
        );
    }
}

import React from 'react';
import Parser from 'html-react-parser';
import Slider from 'react-slick';
import Modal from '../../components/modal';
import WordCloud from '../../components/wordCloud';
import Data from '../../data/resources/wordclouds';
import './style.scss';

class Resources extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isWordCloudModalOpen: false,
      activeSlide: 1,
    };
    this.toggleWordCloudModal = this.toggleWordCloudModal.bind(this);
  }

  toggleWordCloudModal(event) {
    const { isWordCloudModalOpen } = this.state;
    const clickedIndex = event.target.dataset.index;

    this.setState({
      isWordCloudModalOpen: !isWordCloudModalOpen,
      activeSlide: clickedIndex,
    });
    this.slider.slickGoTo(clickedIndex);
  }

  render() {
    const { isWordCloudModalOpen, activeSlide } = this.state;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: activeSlide,
      className: 'resources-content-slider',
      arrows: false,
    };

    return (
      <div className="resources-wrap">
        <div className="container">
          <h2>Resources</h2>
          <div className="wordclouds-wrap">
            {
              Data.map((wordCloud, index) =>
                (<WordCloud
                  index={index}
                  toggleWordCloudModal={this.toggleWordCloudModal}
                  key={wordCloud.title}
                  words={wordCloud}
                />))
            }
          </div>
          <Modal
            isModalOpen={isWordCloudModalOpen}
            closeModal={this.toggleWordCloudModal}
          >
            <Slider ref={slider => (this.slider = slider)} {...settings}> {/* eslint-disable-line */}
              {
                Data.map((slide, index, array) => {
                  const prevItemIndex = index - 1 === -1 ? array.length - 1 : index - 1;
                  const nextItemIndex = index + 1 === array.length ? 0 : index + 1;

                  return (
                    <div key={slide.title}>
                      <div className="slide-inner">
                        <div className="slide-header">
                          <div className="slide-arrow" role="button" tabIndex="0" onClick={() => this.slider.slickGoTo(prevItemIndex)}> {/* eslint-disable-line */}
                            &lt; <span>{ array[prevItemIndex].title }</span>
                          </div>
                          <h3>{ slide.title }</h3>
                          <div className="slide-arrow" role="button" tabIndex="0" onClick={() => this.slider.slickGoTo(nextItemIndex)}> {/* eslint-disable-line */}
                            <span>{ array[nextItemIndex].title }</span> &gt;
                          </div>
                        </div>
                        <div className="slide-content">
                          { Parser(slide.slideContent) }
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </Slider>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Resources;

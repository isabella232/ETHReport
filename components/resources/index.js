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
      activeSlide: 0,
    };
    this.openWordCloudModal = this.openWordCloudModal.bind(this);
    this.closeWordCloudModal = this.closeWordCloudModal.bind(this);
  }

  openWordCloudModal(event) {
    /*
    /* Check if clicked element is a child and doesn't have a data-index,
    /* then go get data-index from the parentNode
     */
    let clic  kedElement = event.target;
    while (clickedElement.dataset.index === undefined) {
      clickedElement = clickedElement.parentNode;
    }
    const clickedIndex = clickedElement.dataset.index;

    this.setState({
      isWordCloudModalOpen: true,
      activeSlide: clickedIndex,
    });
    this.slider.slickGoTo(clickedIndex);
  }

  closeWordCloudModal() {
    this.setState({ isWordCloudModalOpen: false });
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
                  openWordCloudModal={this.openWordCloudModal}
                  key={wordCloud.title}
                  words={wordCloud}
                />))
            }
          </div>
          <Modal
            isModalOpen={isWordCloudModalOpen}
            closeModal={this.closeWordCloudModal}
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

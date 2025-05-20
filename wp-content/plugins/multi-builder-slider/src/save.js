
import { Icons} from './common';
const {useBlockProps} = wp.blockEditor;

const { __ } = wp.i18n;
    export default function Save({ attributes }) {
        // Define the swiper settings in an object
        const swiperSettings = {
            loop: true,
            spaceBetween: attributes.slidegap,
            autoplay: attributes.autoplay ? {
                delay: attributes.autoplayDelay || 2500,
                disableOnInteraction: false,
            } : false,

            slidesPerView: attributes.slidesPerView,
            speed: attributes.sliderSpeed,
            pauseOnHover: attributes.pauseOnHover || false,
            pagination: {
                type: attributes.paginationtype,

                clickable: true,
                el: `#swiper-id${attributes.currentblockId} .aios-pagination`, // Custom pagination class
            },
            navigation: {
                nextEl: `#swiper-id${attributes.currentblockId} .aios-button-next`, // Custom next button class
                prevEl: `#swiper-id${attributes.currentblockId} .aios-button-prev`, // Custom previous button class
            },
            breakpoints:{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                    slidesPerView: attributes.slidesPerView,
                    spaceBetween:attributes.slidegap,
                },
                1024: {
                  slidesPerView: attributes.slidesPerView,
                  spaceBetween:attributes.slidegap,
                },
              }
        };
        return (
            <div {...useBlockProps.save()}>
                {attributes.slides.length > 0 ? (
                    <div className='swiper-container-wraper' id={`swiper-id${attributes.currentblockId}`}>
                        <div className="swiper-container" data-settings={JSON.stringify(swiperSettings)}>
                            <div className="swiper-wrapper">
                                {attributes.slides.map((slide, index) => (
                                    <div className="swiper-slide" key={index}>
                                  
                                        {slide.imageUrl && <div className="slider-image"><img src={slide.imageUrl} alt={slide.title} /></div>}
                                        <div className="slider-content" style={{justifyContent:attributes.verticalAlign,alignItems:attributes.textAlign}}>
                                            {(slide.titleUrl) ? (<a href={slide.titleUrl} target='_blank'> <h3 className="aios-title" style={{color:attributes.color,fontSize:attributes.fontSize}}>{slide.title}</h3></a>) : (<h3 className="aios-title" style={{color:attributes.color,fontSize:attributes.fontSize}}>{slide.title}</h3>)}
                                            {/* {slide.rating?.size != 0 && <div>Rating:{slide.rating?.size}</div>}
                                            {slide.mostly_booked && <div>Mostly Booked</div>} */}
                                            {(slide.datetime) && <div className='aios-date-time' style={{color:attributes.color,fontSize:attributes.fontSize}}>{slide.datetime}</div>}
                                            {slide.content && <div className="slide-content" style={{color:attributes.color,fontSize:attributes.fontSize}}>{slide.content}</div>}
                                            {slide.showButton &&
                                                    slide.buttonText &&
                                                    slide.buttonText.length >
                                                    0 && (
                                                        <>
                                                            <a
                                                                href={
                                                                    slide.buttonUrl
                                                                        ? slide.buttonUrl
                                                                        : "#"
                                                                }
                                                                className="aios-slider-button"
                                                                target={
                                                                    slide.openNewTab
                                                                        ? "_blank"
                                                                        : "_self"
                                                                }
                                                                rel="noopener"
                                                                style={{color:attributes.color,fontSize:attributes.fontSize}}
                                                            >
                                                                {slide.buttonText}
                                                            </a>
                                                        </>
                                                    )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {(attributes.arrowsEnable || attributes.dotsEnable)&&(
                        <div className='aios-navigation-pagi-wrap'>
                            {attributes.arrowsEnable&&(
                            <div className='aios-navigation-wrap'>
                                <div className="aios-button-next aios-navigation-btn" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-d642b4d7931f46a0" >
                                    <div className="aios-link aios-link--arrowed" dangerouslySetInnerHTML={{ __html: Icons(attributes.arrowColor)[attributes.nextPrevarrow]['next'] }}></div>
                                </div>
                                <div className="aios-button-prev aios-navigation-btn" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-d642b4d7931f46a0">
                                    <div className="aios-link aios-link--arrowed" dangerouslySetInnerHTML={{ __html: Icons(attributes.arrowColor)[attributes.nextPrevarrow]['prev'] }}></div>
                                </div>
                            </div>
                            )}
                            {attributes.dotsEnable&&(
                            <div className="aios-pagination"></div>
                            )}
                        </div>
                        )}
                        </div>
                ) : (
                    <p>No slides added yet.</p>
                )}
            </div>
        );
    }
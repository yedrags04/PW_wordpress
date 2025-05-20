import './editor.scss';
import './style.scss';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import placeholderImage from '../images/placeholder-image.webp';

import { Icons, TEXT_ALIGN, VERTICAL_ALIGN } from './common';
import { TextareaControl, SVG, PanelRow, ButtonGroup, TabPanel, PanelBody, TextControl, RangeControl, ToggleControl, Button, ComboboxControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    AlignmentMatrixControl
} from '@wordpress/components';

import { InspectorControls, MediaUpload, useBlockProps, ColorPaletteControl, FontSizePicker } from '@wordpress/block-editor';

const { __ } = wp.i18n;
export default function Editors(props) {
    const { attributes, setAttributes, clientId } = props;

    const [swiperInstance, setSwiperInstance] = useState(null);

    // console.log(wp.components)
    //console.log(wp.blockEditor)
    useEffect(() => {
        setAttributes({ currentblockId: clientId });

    }, []);
    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.update();
        }
    }, [attributes.slides]);

    const handleAddSlide = () => {
        const newSlide = {
            title: "Lorem Ipsum",
            rating: { size: 5 },
            buttonText: "Readmore",
            imageUrl: placeholderImage,
            content: "Lorem Ipsum is simply dummy text of the printing",         
          
            showDateLink: false,
        };
        const updatedSlides = [...attributes.slides, newSlide];
        setAttributes({ slides: updatedSlides });
    };
    // Remove a slide
    const handleRemoveSlide = (index) => {
        const updatedSlides = attributes.slides.filter((_, i) => i !== index);
        setAttributes({ slides: updatedSlides });
    };
    const handleDuplicateSlide = (index) => {
        // Get the slide at the specified index
        const slideToDuplicate = attributes.slides[index];

        // Create a new array of slides, duplicating the selected slide
        const updatedSlides = [
            ...attributes.slides.slice(0, index), // Keep all slides before the duplicated slide
            slideToDuplicate,                    // Add the duplicated slide
            slideToDuplicate,                    // Add the slide again to duplicate
            ...attributes.slides.slice(index + 1) // Keep all slides after the duplicated slide
        ];

        // Update the state with the new slides array
        setAttributes({ slides: updatedSlides });
    };



    // Update slide title
    const handleTitleChange = (value, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], title: value };
        setAttributes({ slides: updatedSlides });
    };
    // Update slide url
    const handleUrlChange = (value, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], titleUrl: value };
        setAttributes({ slides: updatedSlides });
    };
    // Update slide title
    const handleButtonURL = (value, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], buttonUrl: value };
        setAttributes({ slides: updatedSlides });
    };
    // Update slide button hide show
    const handleShowButton = (value, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], showButton: value };
        setAttributes({ slides: updatedSlides });
    };
    // Update slide button hide show
    const handleShowDateLink = (value, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], showDateLink: value };
        setAttributes({ slides: updatedSlides });
    };

    // Update slide title
    const handleButtonText = (value, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], buttonText: value };
        setAttributes({ slides: updatedSlides });
    };
    // Update slide title
    const handleOpenNewTab = (value, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], openNewTab: value };
        setAttributes({ slides: updatedSlides });
    };

    // Update slide rating
    const handleRatingChange = (value, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], rating: { size: value } };
        setAttributes({ slides: updatedSlides });
    };

    // Select an image for the slide
    const handleImageSelect = (image, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], imageUrl: image.url };
        setAttributes({ slides: updatedSlides });
    };

    // Toggle 'Mostly Booked' status for the slide
    const handleToggleChange = (value, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], mostly_booked: value }; // Fixed typo here
        setAttributes({ slides: updatedSlides });
    };
    const handleContentChange = (value, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], content: value };
        setAttributes({ slides: updatedSlides });
    };
    const handleDateTimeChange = (event, index) => {
        const updatedSlides = [...attributes.slides];
        updatedSlides[index] = { ...updatedSlides[index], datetime: event.target.value };
        setAttributes({ slides: updatedSlides });
    };


    return (

        <div className="slider-block">
            <InspectorControls>
                <TabPanel
                    className="parent-tab-panel"
                    activeClass="active-tab"
                    // onSelect={onSelect}
                    tabs={[
                        {
                            name: "SlidesList",
                            title: "Slides List",
                            className: "SlidesList",
                        },
                        {
                            name: "SliderSettings",
                            title: "Settings",
                            className: "SliderSettings",
                        },
                        {
                            name: "SliderStyle",
                            title: "Style",
                            className: "SliderStyle",
                        }

                    ]}
                >
                    {(tab) => (
                        <div className={"eb-tab-controls" + tab.name}>

                            {tab.name === "SlidesList" && (
                                <PanelBody title={__('SLide', 'multi-builder-slider')} initialOpen={true}>
                                    {attributes.slides.length > 0 && attributes.slides.map((slide, index) => (
                                        <PanelBody
                                            className='slides-list-body'
                                            key={index}
                                            title={`${__('Slide', 'multi-builder-slider')} #${index + 1} `}
                                            initialOpen={false}

                                            icon={
                                                <SVG onClick={() => handleDuplicateSlide(index)} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" transform="scale(0.8)"></path></SVG>

                                            }

                                            variant="secondary"


                                        >
                                            <div className="slide-settings">
                                                <TextControl
                                                    label={__('Title', 'multi-builder-slider')}
                                                    value={slide.title}
                                                    onChange={(value) => handleTitleChange(value, index)}
                                                />
                                                <TextareaControl
                                                    label={__('Content', 'multi-builder-slider')}
                                                    value={slide.content}
                                                    rows={2}
                                                    onChange={(value) => handleContentChange(value, index)}
                                                    placeholder={__('Enter slide content here...', 'multi-builder-slider')}
                                                />
                                                <ToggleControl
                                                    label={__("Show Date/Title link Field", "aios")}
                                                    checked={slide.showDateLink}
                                                    onChange={(value) => handleShowDateLink(value, index)}

                                                />
                                                {slide.showDateLink && (
                                                    <>
                                                        <label htmlFor="slideDate">Date</label>
                                                        <input value={slide.datetime}
                                                            onChange={(value) => handleDateTimeChange(value, index)} type="datetime-local" id="slideDate" name="slideDate" />
                                                        <TextControl
                                                            label={__('Title link URl', 'multi-builder-slider')}
                                                            value={slide.titleUrl}
                                                            onChange={(value) => handleUrlChange(value, index)}
                                                            placeholder={__('https://www.google.co.in/', 'multi-builder-slider')} />

                                                    </>
                                                )}
                                                <ToggleControl
                                                    label={__("Show Button", "aios")}
                                                    checked={slide.showButton}
                                                    onChange={(value) => handleShowButton(value, index)}

                                                />
                                                {slide.showButton && (
                                                    <>
                                                        <TextControl
                                                            label={__("Button Text", "aios")}
                                                            value={slide.buttonText}
                                                            onChange={(value) => handleButtonText(value, index)}

                                                        />
                                                        <TextControl
                                                            label={__("Button URL", "aios")}
                                                            value={slide.buttonUrl}
                                                            onChange={(value) => handleButtonURL(value, index)}

                                                        />

                                                        <ToggleControl
                                                            label={__(
                                                                "Open in New Tab",
                                                                "aios"
                                                            )}
                                                            checked={slide.openNewTab}
                                                            onChange={(value) => handleOpenNewTab(value, index)}

                                                        />
                                                    </>
                                                )}
                                                {/* <RangeControl
                                                        label={__('Rating', 'multi-builder-slider')}
                                                        value={slide.rating?.size}
                                                        onChange={(value) => handleRatingChange(value, index)}
                                                        min={0}
                                                        max={10}
                                                    />
                                                    <ToggleControl
                                                        label={__('Mostly Booked', 'multi-builder-slider')}
                                                        checked={slide.mostly_booked}
                                                        onChange={(value) => handleToggleChange(value, index)}
                                                    /> */}
                                                <div className="media-upload-wrap">
                                                    {slide.imageUrl ? (
                                                        <img src={slide.imageUrl} alt={slide.title} width="100" />
                                                    ) : (
                                                        <span>{__('No Image', 'multi-builder-slider')}</span>
                                                    )}
                                                    <MediaUpload

                                                        onSelect={(image) => handleImageSelect(image, index)}
                                                        allowedTypes={['image']}
                                                        value={slide.imageUrl}
                                                        render={({ open }) => (
                                                            <Button
                                                                size="small"
                                                                iconSize={15}
                                                                icon={<SVG viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path></SVG>}
                                                                onClick={open} isSecondary>
                                                                {__('Upload Image', 'multi-builder-slider')}
                                                            </Button>
                                                        )}
                                                    />
                                                </div>
                                                <div className='components-button-group dup-delete-media'>
                                                    <Button
                                                        size="small"
                                                        iconSize={15}
                                                        icon={<SVG viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></SVG>}
                                                        variant="secondary"
                                                        onClick={() => handleRemoveSlide(index)}
                                                        className="remove-slide-button"
                                                    >
                                                        {__('Remove', 'multi-builder-slider')}
                                                    </Button>
                                                    <Button
                                                        size="small"
                                                        iconSize={15}
                                                        variant="secondary"
                                                        icon={<SVG viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path></SVG>}

                                                        onClick={() => handleDuplicateSlide(index)}
                                                        className="duplicate-slide-button"
                                                    >
                                                        {__('Duplicate', 'multi-builder-slider')}
                                                    </Button>
                                                </div>
                                            </div>
                                        </PanelBody>
                                    ))}
                                    <div className='add_newslide'>
                                        <Button onClick={handleAddSlide}
                                            size="compact"
                                            iconSize={15}
                                            variant="primary"
                                            icon={<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2C11.448 2 11 2.448 11 3V11H3C2.448 11 2 11.448 2 12C2 12.552 2.448 13 3 13H11V21C11 21.552 11.448 22 12 22C12.552 22 13 21.552 13 21V13H21C21.552 13 22 12.552 22 12C22 11.448 21.552 11 21 11H13V3C13 2.448 12.552 2 12 2Z" /></SVG>}
                                        >
                                            {__('Add New Slide', 'multi-builder-slider')}
                                        </Button>
                                    </div>
                                </PanelBody>
                            )}
                            {tab.name === "SliderSettings" && (
                                <PanelBody title={__('Settings', 'multi-builder-slider')} initialOpen={true}>

                                    <ToggleControl
                                        label={__('Show Arrows', 'multi-builder-slider')}
                                        checked={attributes.arrowsEnable}
                                        onChange={(value) => setAttributes({ arrowsEnable: value })}
                                    />
                                    <ToggleControl
                                        label={__('Show dots', 'multi-builder-slider')}
                                        checked={attributes.dotsEnable}
                                        onChange={(value) => setAttributes({ dotsEnable: value })}
                                    />
                                    <ToggleControl
                                        label={__('Autoplay', 'multi-builder-slider')}
                                        checked={attributes.autoplay}
                                        onChange={(value) => setAttributes({ autoplay: value })}
                                    />
                                    {attributes.autoplay &&
                                        <RangeControl
                                            label={__('Autoplay Delay (ms)', 'multi-builder-slider')}
                                            value={attributes.autoplayDelay}
                                            onChange={(value) => setAttributes({ autoplayDelay: value })}
                                            min={100}
                                            max={10000}
                                            step={100}
                                        />
                                    }
                                    <RangeControl
                                        label={__('Slides Per View', 'multi-builder-slider')}
                                        value={attributes.slidesPerView}
                                        onChange={(value) => setAttributes({ slidesPerView: value })}
                                        min={1}
                                        max={5}
                                    />
                                    <RangeControl
                                        label={__('Slides Gap', 'multi-builder-slider')}
                                        value={attributes.slidegap}
                                        onChange={(value) => setAttributes({ slidegap: value })}
                                        min={1}
                                        max={30}
                                    />
                                    <RangeControl
                                        label={__('Slider Speed (ms)', 'multi-builder-slider')}
                                        value={attributes.sliderSpeed}
                                        onChange={(value) => setAttributes({ sliderSpeed: value })}
                                        min={200}
                                        max={2000}
                                        step={100}
                                    />
                                    {attributes.arrowsEnable&&(
                                    <ToggleGroupControl
                                        __next40pxDefaultSize
                                        __nextHasNoMarginBottom
                                        isBlock
                                        label="Next/Prev Arrow"
                                        value={attributes.nextPrevarrow}
                                        onChange={(value) => setAttributes({ nextPrevarrow: value })}
                                    >
                                        <ToggleGroupControlOptionIcon
                                            label="arrow"
                                            icon={<SVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">  <g fill="none" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10"><circle cx="16" cy="16" r="15.12"></circle><path d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98" /></g></SVG>}
                                            value="arrow1"
                                        />
                                        <ToggleGroupControlOptionIcon
                                            label="arrow"
                                            icon={<SVG viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">  <g>
                                                <g>
                                                    <path d="M441.773,240.915L207.106,6.248C203.106,2.248,197.679,0,192.021,0H85.355C66.349,0,56.831,22.979,70.27,36.418
                                L289.852,256L70.27,475.582C56.831,489.021,66.349,512,85.355,512h106.667c5.658,0,11.084-2.248,15.085-6.248l234.667-234.667
                                C450.104,262.754,450.104,249.246,441.773,240.915z M183.185,469.333h-46.327l198.248-198.248c8.331-8.331,8.331-21.839,0-30.17
                                L136.858,42.667h46.327L396.518,256L183.185,469.333z"/>
                                                </g>
                                            </g></SVG>}
                                            value="arrow2"
                                        />
                                        <ToggleGroupControlOptionIcon
                                            label="arrow"
                                            value="arrow3"
                                            icon={<SVG viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"> <g>
                                                <g>
                                                    <path d="M256,0C114.51,0,0,114.496,0,256c0,141.49,114.496,256,256,256c141.49,0,256-114.496,256-256C512,114.51,397.504,0,256,0z
                                    M256,478.39c-122.626,0-222.39-99.764-222.39-222.39S133.374,33.61,256,33.61S478.39,133.374,478.39,256
                                    S378.626,478.39,256,478.39z"/>
                                                </g>
                                            </g>
                                                <g>
                                                    <g>
                                                        <path d="M359.974,218.832l-86.716-86.72c-20.542-20.543-53.794-20.545-74.339,0c-20.544,20.543-20.545,53.794,0,74.339
                                    L248.468,256l-49.549,49.549c-20.543,20.542-20.545,53.794,0,74.339c20.54,20.542,53.795,20.546,74.337,0l86.717-86.717
                                    c9.929-9.927,15.396-23.128,15.396-37.169S369.903,228.76,359.974,218.832z M336.209,269.403l-86.718,86.718
                                    c-7.407,7.407-19.398,7.408-26.806,0c-7.408-7.409-7.408-19.397,0-26.807l61.432-61.432c6.563-6.563,6.563-17.203,0-23.766
                                    l-61.432-61.432c-7.408-7.409-7.408-19.397,0-26.807c7.408-7.408,19.398-7.408,26.805,0l86.717,86.717
                                    C343.599,249.987,343.599,262.013,336.209,269.403z"/>
                                                    </g>
                                                </g></SVG>}
                                        />
                                        <ToggleGroupControlOptionIcon
                                            label="arrow"
                                            value="arrow4"
                                            icon={<SVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M25.468,14.508l-20.967,-0.008c-0.828,-0 -1.501,0.672 -1.501,1.499c-0,0.828 0.672,1.501 1.499,1.501l21.125,0.009c-0.107,0.159 -0.234,0.306 -0.377,0.439c-3.787,3.502 -9.68,8.951 -9.68,8.951c-0.608,0.562 -0.645,1.511 -0.083,2.119c0.562,0.608 1.512,0.645 2.12,0.083c-0,0 5.892,-5.448 9.68,-8.95c1.112,-1.029 1.751,-2.47 1.766,-3.985c0.014,-1.515 -0.596,-2.968 -1.688,-4.018l-9.591,-9.221c-0.596,-0.574 -1.547,-0.556 -2.121,0.041c-0.573,0.597 -0.555,1.547 0.042,2.121l9.591,9.221c0.065,0.063 0.127,0.129 0.185,0.198Z" /><g id="Icon" /></SVG>}
                                        />
                                    </ToggleGroupControl>
                                    )}
                                    {attributes.dotsEnable&&(
                                    <ToggleGroupControl
                                        __next40pxDefaultSize
                                        __nextHasNoMarginBottom
                                        isBlock
                                        label="Pagination Type"
                                        value={attributes.paginationtype}
                                        onChange={(value) => setAttributes({ paginationtype: value })}
                                    >
                                        <ToggleGroupControlOptionIcon
                                            label="Bullets"
                                            icon={<SVG viewBox="0 0 36 12" xmlns="http://www.w3.org/2000/svg">  <circle cx="6" cy="6" r="3" fill="currentColor" />
                                                <circle cx="18" cy="6" r="3" fill="currentColor" />
                                                <circle cx="30" cy="6" r="3" fill="currentColor" /></SVG>}
                                            value="bullets"
                                        />
                                        <ToggleGroupControlOptionIcon
                                            label="Fraction"
                                            icon={<SVG viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">   <text x="0" y="15" fontFamily="Arial" fontSize="14" fill="currentColor">1</text>
                                                <text x="18" y="15" fontFamily="Arial" fontSize="20" fill="currentColor">/</text>
                                                <text x="30" y="15" fontFamily="Arial" fontSize="20" fill="currentColor">2</text></SVG>}
                                            value="fraction"
                                        />
                                    </ToggleGroupControl>
                                    )}
                                </PanelBody>
                            )}
                            {tab.name === "SliderStyle" && (
                                <>
                                    <PanelBody title={__('Font color', 'multi-builder-slider')} initialOpen={true}>
                                        <ColorPaletteControl

                                            value={attributes.color}
                                            onChange={(value) => setAttributes({ color: value })}

                                        />

                                    </PanelBody>
                                    <PanelBody title={__('Arrow color', 'multi-builder-slider')} initialOpen={false}>
                                        <ColorPaletteControl

                                            value={attributes.arrowColor}
                                            onChange={(value) => setAttributes({ arrowColor: value })}

                                        />

                                    </PanelBody>
                                    <PanelBody title={__('Contetn Alignment', 'multi-builder-slider')} initialOpen={false}>

                                        <PanelRow>Text Align</PanelRow>
                                        <ButtonGroup>
                                            {TEXT_ALIGN.map((item, index) => (
                                                <Button
                                                    key={index}
                                                    isPrimary={attributes.textAlign === item.value}
                                                    isSecondary={attributes.textAlign !== item.value}
                                                    onClick={() =>
                                                        setAttributes({
                                                            textAlign: item.value,
                                                        })
                                                    }
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>


                                        <PanelRow>Vertical Align</PanelRow>
                                        <ButtonGroup>
                                            {VERTICAL_ALIGN.map((item, index) => (
                                                <Button
                                                    key={index}
                                                    isPrimary={attributes.verticalAlign === item.value}
                                                    isSecondary={attributes.verticalAlign !== item.value}
                                                    onClick={() =>
                                                        setAttributes({
                                                            verticalAlign: item.value,
                                                        })
                                                    }
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>

                                    </PanelBody>
                                    <PanelBody title={__('Font Size', 'multi-builder-slider')} initialOpen={false}>

                                        <FontSizePicker
                                            label="Font Size"
                                            fontSizes={[
                                                {
                                                    name: __('Small'),
                                                    slug: 'small',
                                                    size: 12,
                                                },
                                                {
                                                    name: __('Big'),
                                                    slug: 'big',
                                                    size: 26,
                                                },
                                            ]}
                                            value={attributes.fontSize}
                                            fallbackFontSize={12}
                                            onChange={(value) => setAttributes({ fontSize: value })}
                                            withSlider
                                        />
                                    </PanelBody>

                                </>
                            )}
                        </div>
                    )}
                </TabPanel>
            </InspectorControls>

            <div className="slider-content" {...useBlockProps()}>

                {attributes.slides.length > 0 ? (
                    <div className='swiper-container-wraper' id={`swiper-id${clientId}`}>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            loop={true}

                            spaceBetween={attributes.slidegap}
                            slidesPerView={attributes.slidesPerView}
                            autoplay={attributes.autoplay ? {
                                delay: attributes.autoplayDelay || 2500,
                                disableOnInteraction: false,
                            } : false}
                            speed={attributes.sliderSpeed}
                            pagination={{
                                clickable: true,
                                type: attributes.paginationtype,
                                el: `#swiper-id${clientId} .aios-pagination`, // Custom pagination class
                            }}
                            navigation={{
                                nextEl: `#swiper-id${clientId} .aios-button-next`, // Custom next button class
                                prevEl: `#swiper-id${clientId} .aios-button-prev`, // Custom previous button class
                            }}
                            breakpoints={{
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
                              }}
                            onSwiper={setSwiperInstance}
                        >
                            {attributes.slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slide-preview">

                                        {slide.imageUrl && <div className="slider-image"><img src={slide.imageUrl} alt={slide.title} /></div>}
                                        <div className="slider-content" style={{ justifyContent: attributes.verticalAlign, alignItems: attributes.textAlign }}>
                                            {(slide.titleUrl) ? (<a href={slide.titleUrl} target='_blank'> <h3 className="aios-title" style={{ color: attributes.color, fontSize: attributes.fontSize }}>{slide.title}</h3></a>) : (<h3 className="aios-title" style={{ color: attributes.color, fontSize: attributes.fontSize }}>{slide.title}</h3>)}

                                            {/* {slide.rating?.size != 0 && <div>{__('Rating: ', 'multi-builder-slider')} {slide.rating?.size}</div>}
                                                {slide.mostly_booked && <div>{__('Mostly Booked', 'multi-builder-slider')}</div>} */}
                                            {(slide.datetime) && <div className='aios-date-time' style={{color:attributes.color,fontSize:attributes.fontSize}}>{slide.datetime}</div>}
                                            {slide.content && <div className="slide-content" style={{ color: attributes.color, fontSize: attributes.fontSize }}>{slide.content}</div>}
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
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
                            
                            <div className="aios-pagination" style={{display:(attributes.dotsEnable)?'flex':'none'}}></div>
                            
                        </div>
                        )}
                        </div>
                ) : (
                    <p>{__('No slides added yet.', 'multi-builder-slider')}</p>
                )}
            </div>
        </div>

    );
}



import './editor.scss';
import './style.scss';
import 'swiper/css';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

import {attributesObject,MainIcons} from './common';

const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n;

registerBlockType(metadata.name, {
    title: __('Multi Builder Slider', 'multi-builder-slider'),
    icon: MainIcons,
    category: 'widgets',
    attributes: attributesObject(),
    edit:Edit,
    save:Save,  
});

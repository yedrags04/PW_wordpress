<?php

namespace ElementorAiosSlider\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Text_Stroke;
use Elementor\Group_Control_Image_Size;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Css_Filter;
use Elementor\Repeater;


use ElementorAiosSlider\Traits\Aios_Widget_Controls;

if (!defined('ABSPATH')) exit; // Exit if accessed directly

class Aios_widget_slider extends Widget_Base {

	use Aios_Widget_Controls;

	public function get_name() {
		return 'mbs-slider';
	}

	public function get_title() {
		return esc_html__( 'Multi Builder Slider', 'aios' );
	}

	public function get_icon() {
		return 'eicon-slider-album';
	}

	public function get_categories() {
		return ['general'];
	}

	public function get_keywords() {
		return ['mbs', 'slider', 'content slider'];
	}

	public function get_style_depends() {
		return ['aiso-style','swiper','e-swiper'];
	}

	public function get_script_depends() {
		
			return ['aios-script'];
		
	}
 

	protected function is_dynamic_content(): bool {
		return false;
	}

	protected function register_controls() {
		

		$this->start_controls_section(
			'section_content_sliders',
			[
				'label' => esc_html__('Sliders', 'aios'),
			]
		);

		$repeater = new Repeater();

		$repeater->start_controls_tabs('tabs_slider_item_content');

        $repeater->start_controls_tab(
            'tab_slider_content',
            [
                'label' => __('Content', 'aios'),
            ]
        );

		/**
         * Repeater Title Controls
         */
        $this->register_repeater_title_controls($repeater);
		// $repeater->add_control(
		// 	'rating',
		// 	[ 
		// 		'label'   => __( 'Rating', 'aios' ),
		// 		'type'    => Controls_Manager::SLIDER,
		// 		'default' => [ 
		// 			'size' => 0,
		// 		],
		// 		'range'   => [ 
		// 			'px' => [ 
		// 				'min'  => 1,
		// 				'max'  => 5,
		// 				'step' => 0.5,
		// 			],
		// 		],
		// 	]
		// );
		// $repeater->add_control(
		// 	'review',
		// 	[ 
		// 		'label'       => esc_html__( 'Reviews', 'aios' ),
		// 		'type'        => Controls_Manager::NUMBER,
		// 		'label_block' => true,		
				
		// 	]
		// );
		// $repeater->add_control(
		// 	'mostyl_booked',
		// 	[ 
		// 		'label'       => __( 'Mostly booked', 'aios' ),
		// 		'description' => __( 'Enable this option show Booked tag.', 'aios' ),
		// 		'type'        => Controls_Manager::SWITCHER,
		// 	]
		// );

		/**
         * Repeater Image Controls
         */
        $this->register_repeater_image_controls($repeater);

		$repeater->end_controls_tab();

        $repeater->start_controls_tab(
            'tab_slider_optional',
            [
                'label' => __('Optional', 'aios'),
            ]
        );

		/**
         * Repeater Title Link Controls
         */
        $this->register_repeater_title_link_controls($repeater);

		/**
         * Repeater Text Controls
         */
        $this->register_repeater_text_controls($repeater);

		$repeater->end_controls_tab();
        $repeater->end_controls_tabs();

		$this->add_control(
			'slides',
			[
				'label'   => esc_html__('Items', 'aios'),
				'type'    => Controls_Manager::REPEATER,
				'fields'  => $repeater->get_controls(),		
				'default' => [
					[
						'title'     => esc_html__('Item One', 'aios'),
						'text'     => esc_html__('Multi Builder Slider Addons for elementor!', 'aios'),
						'image'     => ['url' =>  ELEMENTOR_ASSETS_URL . 'images/placeholder.png'],
						
					],
					[
						'title'     => esc_html__('Item Two', 'aios'),
						'text'     => esc_html__('Multi Builder Slider Addons for elementor!', 'aios'),
						'image'     => ['url' =>  ELEMENTOR_ASSETS_URL . 'images/placeholder.png'],
					
					],
					[
						'title'     => esc_html__('Item Three', 'aios'),
						'text'     => esc_html__('Multi Builder Slider Addons for elementor!', 'aios'),
						'image'     => ['url' =>  ELEMENTOR_ASSETS_URL . 'images/placeholder.png'],
						
					],
					[
						'title'     => esc_html__('Item Four', 'aios'),
						'text'     => esc_html__('Multi Builder Slider Addons for elementor!', 'aios'),
						'image'     => ['url' =>  ELEMENTOR_ASSETS_URL . 'images/placeholder.png'],
						
					],
				],		
				'title_field' => '{{{ title }}}',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_content_layout',
			[
				'label' => esc_html__('Additional Options', 'aios'),
			]
		);

		$this->add_responsive_control(
			'slider_slider_height',
			[
				'label' => esc_html__('Slider Height', 'aios'),
				'type'  => Controls_Manager::SLIDER,
				'size_units' => ['px', 'vh'],
				'range' => [
					'px' => [
						'min' => 50,
						'max' => 1024,
					],
					'vh' => [
						'min' => 10,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'slider_image_height',
			[
				'label' => esc_html__('Image Height', 'aios') ,
				'type'  => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 50,
						'max' => 1024,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-image-wrap .aios-img' => 'height: {{SIZE}}{{UNIT}};',
				],
				
			]
		);

		/**
		 * Show Title Controls
		 */
		$this->register_show_title_controls();

		/**
		 * Show text Controls
		 */
		$this->register_show_text_controls();

		/**
		 * Show Navigation Controls
		 */
		$this->register_show_navigation_controls();

		/**
		 * Show Pagination Controls
		 */
		$this->register_show_pagination_controls();

		$this->add_responsive_control(
            'content_alignment',
            [
                'label'   => esc_html__( 'Alignment', 'aios' ),
                'type'    => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__( 'Left', 'aios' ),
                        'icon'  => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__( 'Center', 'aios' ),
                        'icon'  => 'eicon-text-align-center',
                    ],
                    'right' => [
                        'title' => esc_html__( 'Right', 'aios' ),
                        'icon'  => 'eicon-text-align-right',
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .aios-slider-widget .aios-content' => 'text-align: {{VALUE}};',
                ],
				'separator' => 'before'
            ]
		);

		/**
		 * Thumbnail Size Controls
		 */
		$this->register_thumbnail_size_controls();
		
		$this->end_controls_section();

		$this->start_controls_section(
			'section_carousel_settings',
			[
				'label' => __( 'Slider Settings', 'aios' ),
			]
		);

		/**
		 * Autoplay Controls
		 */
		$this->register_autoplay_controls();
		$this->add_responsive_control(
            'columns',
            [
                'type'      => Controls_Manager::SELECT,
                'label'     => esc_html__('Slides per view', 'aios'),
                'default'        => 1,
                'tablet_default' => 1,
                'mobile_default' => 1,
                'options'   => [
                    1 => '1',
                    2 => '2',
                    3 => '3',
                    4 => '4'                   
                ],
            ]
        );

		/**
		 * Centered Slides Controls
		 */
		$this->register_centered_slides_controls();

		/**
		 * Grab Cursor Controls
		 */
		$this->register_grab_cursor_controls();

		/**
		 * Loop Controls
		 */
		$this->register_loop_controls();

		/**
		 * Speed & Observer Controls
		 */
		$this->register_speed_observer_controls();

		$this->end_controls_section();


		

		//style
		$this->start_controls_section(
			'section_style_layout',
			[
				'label'     => __( 'Sliders', 'aios' ),
				'tab'       => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'background',
				'selector' => '{{WRAPPER}} .aios-slider-widget',
			]
		);

		$this->add_responsive_control(
			'content_padding',
			[
				'label'      => __( 'Content Padding', 'aios' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style_image',
			[
				'label'     => __( 'Image', 'aios' ),
				'tab'       => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'overlay_background',
				'label' => esc_html__('Background', 'aios'),
				'types' => ['classic', 'gradient'],
				'exclude' => ['image'],
				'selector' => '{{WRAPPER}} .aios-slider-widget .aios-item.swiper-slide-active .aios-image-wrap::before',
				'fields_options' => [
					'background' => [
						'label' => esc_html__('Overlay Color', 'aios'),
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'        => 'image_border',
				'selector'    => '{{WRAPPER}} .aios-slider-widget .aios-image-wrap',
				'separator' => 'before'
			]
		);

		$this->add_responsive_control(
			'image_border_radius',
			[
				'label'      => __( 'Border Radius', 'aios' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .aios-slider-widget .aios-image-wrap' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Css_Filter::get_type(),
			[
				'name' => 'custom_css_filters',
				'selector' => '{{WRAPPER}} .aios-slider-widget .aios-image-wrap .aios-img',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style_title',
			[
				'label'     => __( 'Title', 'aios' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => [
					'show_title' => 'yes',
				],
			]
		);

		$this->add_control(
			'title_color',
			[
				'label'     => __( 'Color', 'aios' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-item.swiper-slide-active .aios-title-wrap .aios-title, 
					{{WRAPPER}}  .aios-slider-widget .aios-item.swiper-slide-active .aios-title-wrap .aios-title a' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'title_hover_color',
			[
				'label'     => __( 'Hover Color', 'aios' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-item.swiper-slide-active .aios-title-wrap .aios-title:hover, {{WRAPPER}} .aios-slider-widget .aios-item.swiper-slide-active .aios-title-wrap .aios-title a:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'title_padding',
			[
				'label'      => __( 'Padding', 'aios' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-title-wrap .aios-title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'title_margin',
			[
				'label'      => __( 'Margin', 'aios' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-title-wrap' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'title_typography',
				'selector' => '{{WRAPPER}} .aios-slider-widget .aios-title-wrap .aios-title',
			]
		);

		$this->add_group_control(
            Group_Control_Text_Stroke::get_type(),
            [
                'name' => 'title_text_stroke',
				'label'    => esc_html__('Text Stroke', 'aios'),
                'selector' => '{{WRAPPER}} .aios-slider-widget .aios-title-wrap .aios-title',
            ]
        );

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'title_text_shadow',
				'label' => __( 'Text Shadow', 'aios'),
				'selector' => '{{WRAPPER}} .aios-slider-widget .aios-title-wrap .aios-title',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style_text',
			[
				'label'     => __( 'Text', 'aios' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => [
					'show_text' => 'yes',
				],
			]
		);

		$this->add_control(
			'text_color',
			[
				'label'     => __( 'Color', 'aios' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-text' => 'color: {{VALUE}};',
				],
				'default'=>'#000',
			]
		);


		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'text_typography',
				'selector' => '{{WRAPPER}} .aios-slider-widget .aios-text',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'text_shadow',
				'label' => __( 'Text Shadow', 'aios'),
				'selector' => '{{WRAPPER}} .aios-slider-widget .aios-text',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style_navigation',
			[
				'label'     => __('Navigation', 'aios'),
				'tab'       => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'pagi_nav_margin',
			[
				'label'      => __( 'Spacing', 'aios' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-navigation-pagi-wrap' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'arrows_heading',
			[
				'label'     => __('Arrows', 'aios'),
				'type'      => Controls_Manager::HEADING,
				'condition' => [
					'show_navigation_arrows' => ['yes'],
				],
				'separator' => 'before'
			]
		);

		$this->add_control(
			'navigation_color',
			[
				'label'     => __('Color', 'aios'),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-navigation-btn .aios-link, 
					 {{WRAPPER}} .aios-slider-widget .aios-navigation-btn .aios-link--arrowed g' => 'color: {{VALUE}}',
				],
				'condition' => [
					'show_navigation_arrows' => ['yes'],
				],
			]
		);

		$this->add_control(
			'navigation_hover_color',
			[
				'label'     => __('Hover Color', 'aios'),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-navigation-btn .aios-link:hover, 
					 {{WRAPPER}}  .aios-slider-widget .aios-navigation-btn .aios-link--arrowed:hover g' => 'color: {{VALUE}}',
				],
				'condition' => [
					'show_navigation_arrows' => ['yes'],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'navigation_typography',
				'selector' => '{{WRAPPER}} .aios-slider-widget .aios-navigation-btn .aios-link',
			]
		);
		
		$this->add_control(
			'pagination_heading',
			[
				'label'     => __('Dots', 'aios'),
				'type'      => Controls_Manager::HEADING,
				'condition' => [
					'show_navigation_dots' => ['yes'],
				],
				'separator' => 'before'
			]
		);

		$this->start_controls_tabs(
			'pagination_tabs'
		);
		
		$this->start_controls_tab(
			'pagination_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'aios' ),
			]
		);

		$this->add_control(
			'pagination_color',
			[
				'label'     => __('Color', 'aios'),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-pagination .swiper-pagination-bullet' => 'background: {{VALUE}}',
				],
				'condition' => [
					'show_navigation_dots' => ['yes'],
				],
			]
		);

		$this->add_responsive_control(
			'pagination_width',
			[
				'label' => esc_html__('Width', 'aios') ,
				'type'  => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-pagination .swiper-pagination-bullet' => 'width: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'show_navigation_dots' => ['yes'],
				],
				
			]
		);

		$this->add_responsive_control(
			'pagination_height',
			[
				'label' => esc_html__('Height', 'aios') ,
				'type'  => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-pagination .swiper-pagination-bullet' => 'height: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'show_navigation_dots' => ['yes'],
				],
				
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'        => 'pagination_border',
				'selector'    => '{{WRAPPER}} .aios-slider-widget .aios-pagination .swiper-pagination-bullet',
			]
		);

		$this->add_responsive_control(
			'pagination_border_radius',
			[
				'label'      => __( 'Border Radius', 'aios' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .aios-slider-widget .aios-pagination .swiper-pagination-bullet' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);
		
		$this->end_controls_tab();

		$this->start_controls_tab(
			'pagination_active_tab',
			[
				'label' => esc_html__( 'Active', 'aios' ),
			]
		);


		$this->add_control(
			'pagination_active_color',
			[
				'label'     => __('Color', 'aios'),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active' => 'background: {{VALUE}}',
				],
				'condition' => [
					'show_navigation_dots' => ['yes'],
				],
			]
		);

		$this->add_responsive_control(
			'pagination_width_active',
			[
				'label' => esc_html__('Width', 'aios'),
				'type'  => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active' => 'width: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'show_navigation_dots' => ['yes'],
				],
			]
		);

		$this->add_responsive_control(
			'pagination_height_active',
			[
				'label' => esc_html__('Height', 'aios'),
				'type'  => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .aios-slider-widget .aios-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active' => 'height: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'show_navigation_dots' => ['yes'],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'        => 'pagination_border_active',
				'selector'    => '{{WRAPPER}} .swiper-pagination-bullet.swiper-pagination-bullet-active',
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();
	}

	protected function render_header() {
		$settings   = $this->get_settings_for_display();
		$id         = 'aios-slider-' . $this->get_id();

		if ($settings['show_text'] == 'yes') {
			$targets[2] = '.aios-text';
		}
		$elementor_vp_lg = get_option('elementor_viewport_lg');
        $elementor_vp_md = get_option('elementor_viewport_md');
        $viewport_lg     = !empty($elementor_vp_lg) ? $elementor_vp_lg - 1 : 1023;
        $viewport_md     = !empty($elementor_vp_md) ? $elementor_vp_md - 1 : 767;
	

		$this->add_render_attribute( 'aios-slider-elysium', 'id', $id );
		$this->add_render_attribute( 'aios-slider-elysium', 'class', [ 'aios-slider-widget', 'elementor-swiper' ] );

		$this->add_render_attribute(
			[
				'aios-slider-elysium' => [
					'data-settings' => [
						wp_json_encode(array_filter([
							"autoplay"       => ( "yes" == $settings["autoplay"] ) ? [ "delay" => $settings["autoplay_speed"] ] : false,
							"loop"           => ($settings["loop"] == "yes") ? true : false,
							"speed"          => $settings["speed"]["size"],
							"pauseOnHover"   => ("yes" == $settings["pauseonhover"]) ? true : false,
							"slidesPerView"  => isset($settings["columns_mobile"]) ? (int)$settings["columns_mobile"] : 1,
							"spaceBetween"   => !empty($settings["item_gap_mobile"]["size"]) ? (int)$settings["item_gap_mobile"]["size"] : 0,
							"centeredSlides" => ($settings["centered_slides"] === "yes") ? true : false,
							"grabCursor"     => ($settings["grab_cursor"] === "yes") ? true : false,
							"effect"         => 'slide',
                            "parallax"       => true,
							"observer"       => ($settings["observer"]) ? true : false,
							"observeParents" => ($settings["observer"]) ? true : false,
							"initialSlide" => 2,
							"breakpoints"    => [
                                (int) $viewport_md => [
                                    "slidesPerView"  => isset($settings["columns_tablet"]) ? (int) $settings["columns_tablet"] : 3,
                                    "spaceBetween"     => !empty($settings["item_gap_tablet"]["size"]) ? (int) $settings["item_gap_tablet"]["size"] : 20,
                                    
                                ],
                                (int) $viewport_lg => [
                                    "slidesPerView"  => isset($settings["columns"]) ? (int) $settings["columns"] : 3,
                                    "spaceBetween"   => !empty($settings["item_gap"]["size"]) ? (int) $settings["item_gap"]["size"] : 20,
                                    
                                ]
                            ],
								

							"navigation"         => [
								"nextEl" => "#" . $id . " .aios-button-next",
								"prevEl" => "#" . $id . " .aios-button-prev",
							],
							"pagination"         => [
								"el"             => "#" . $id . " .aios-pagination",
								"clickable"      => "true",
							],
            ]))
					]
				]
			]
		);
		

		$this->add_render_attribute( 'aios-slider', 'class', 'aios-slider' );

		?>
		<div <?php $this->print_render_attribute_string( 'aios-slider' ); ?>>
		<div <?php $this->print_render_attribute_string( 'aios-slider-elysium' ); ?>>
			<div class="aios-slider-continer">
				<div class="swiper-wrapper">
		<?php
	}

	public function render_navigation_arrows() {
		$settings = $this->get_settings_for_display();
	
		?>

        <div class="aios-navigation-pagi-wrap reveal-muted">
			<?php if ($settings['show_navigation_arrows']) : ?>
				<div class="aios-navigation-wrap">
					<div class="aios-button-next aios-navigation-btn">
						<div class="aios-link aios-link--arrowed">
							<span><?php echo esc_html_x('next slide', 'Frontend', 'aios'); ?></span>
							<svg class="aios-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
								<g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
								<circle class="aios-arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
								<path class="aios-arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
								</g>
							</svg>
					</div>
					</div>
					<div class=" aios-button-prev aios-navigation-btn">
						<div class="aios-link aios-link--arrowed">
							<span><?php echo esc_html_x('prev slide', 'Frontend', 'aios'); ?></span>
							<svg class="aios-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
								<g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
								<circle class="aios-arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
								<path class="aios-arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
								</g>
							</svg>
						</div>

					</div>
				</div>
			<?php endif; ?>

			<?php if ($settings['show_navigation_dots']) : ?>
			    <div class="aios-pagination"></div>
		    <?php endif; ?>
        </div>
		<?php
	}

	public function render_footer() {
		$settings = $this->get_settings_for_display();
		
		?>
				</div>
			</div>
			
			<?php $this->render_navigation_arrows(); ?>
		</div>
		</div>

		<?php
	}

	public function rendar_item_image($slide) {
		$settings = $this->get_settings_for_display();
		
		?>
		<div class="aios-image-wrap">
			<?php
			$thumb_url = Group_Control_Image_Size::get_attachment_image_src($slide['image']['id'], 'thumbnail_size', $settings);
			if (!$thumb_url) {
				printf('<img src="%1$s" alt="%2$s" class="aios-img">', esc_url($slide['image']['url']), esc_html($slide['title']));
			} else {
				print(wp_get_attachment_image(
					$slide['image']['id'],
					$settings['thumbnail_size_size'],
					false,
					[
						'class' => 'aios-img',
						'alt' => esc_html($slide['title'])
					]
				));
			}
			?>
		</div>
		<?php
	}

	public function render_slides_loop() {
        $settings = $this->get_settings_for_display();

        foreach ($settings['slides'] as $slide) : 
        	if ($slide['title']) {
        		$this->add_link_attributes('title_link', $slide['title_link'], true);
        	}
			
			?>
            <div class="aios-item swiper-slide">
					<?php $this->rendar_item_image($slide);
					
					?>

					<div class="aios-content">
					
						<?php if ($slide['title'] && ('yes' == $settings['show_title'])) : ?>
							<div class="aios-title-wrap"> 
							<<?php echo esc_attr($settings['title_html_tag']); ?> class="aios-title" data-reveal="reveal-active">
									<?php if ('' !== $slide['title_link']['url']) : ?>
										<a <?php $this->print_render_attribute_string('title_link'); ?>>
										<?php endif; ?>
											<?php echo esc_html($slide['title']); ?>
											<?php if ('' !== $slide['title_link']['url']) : ?>
										</a>
									<?php endif; ?>
								</<?php echo esc_attr($settings['title_html_tag']); ?>>
							</div>
						<?php endif; ?>
						
						<?php if ($slide['text'] && ('yes' == $settings['show_text'])) : ?>
							<div class="aios-text" data-reveal="reveal-active">
								<?php echo wp_kses_post($slide['text']); ?>
							</div>
						<?php endif; ?>

					</div>
			</div>

        <?php endforeach;
    }

	public function render() {
		$this->render_header();
		$this->render_slides_loop();
		$this->render_footer();
	}

}

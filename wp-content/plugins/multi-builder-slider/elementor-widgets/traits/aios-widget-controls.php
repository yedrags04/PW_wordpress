<?php

namespace ElementorAiosSlider\Traits;

use Elementor\Controls_Manager;

use Elementor\Group_Control_Image_Size;


defined( 'ABSPATH' ) || die();
trait Aios_Widget_Controls {
		/**
	 * Repeater Title Controls
	 */
	protected function register_repeater_title_controls( $repeater ) {
		$repeater->add_control(
			'title',
			[ 
				'label'       => esc_html__( 'Title', 'aios' ),
				'type'        => Controls_Manager::TEXT,
				'label_block' => true,
				'dynamic'     => [ 'active' => true ],
			]
		);
	}

	/**
	 * Repeater Image Controls
	 */
	protected function register_repeater_image_controls( $repeater ) {
		$repeater->add_control(
			'image',
			[ 
				'label'   => esc_html__( 'Image', 'aios' ),
				'type'    => Controls_Manager::MEDIA,
				'default' => [ 
					'url' => ELEMENTOR_ASSETS_URL . 'images/placeholder.png',
				],
				'dynamic' => [ 'active' => true ],
			]
		);
	}


	/**
	 * Repeater Title Link Controls
	 */
	protected function register_repeater_title_link_controls( $repeater ) {
		$repeater->add_control(
			'title_link',
			[ 
				'label'         => esc_html__( 'Title Link', 'aios' ),
				'type'          => Controls_Manager::URL,
				'default'       => [ 'url' => '' ],
				'show_external' => false,
				'dynamic'       => [ 'active' => true ],
				'condition'     => [ 
					'title!' => '',
				],
			]
		);
	}

	/**
	 * Repeater Text Controls
	 */
	protected function register_repeater_text_controls( $repeater ) {
		$repeater->add_control(
			'text',
			[ 
				'label'       => esc_html__( 'Text', 'aios' ),
				'default'     => esc_html__( 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae vitae dicta sunt explicabo.', 'aios' ),
				'type'        => Controls_Manager::WYSIWYG,
				'label_block' => true,
				'dynamic'     => [ 'active' => true ],
			]
		);
	}

	/**
	 * Show Title controls
	 */
	protected function register_show_title_controls() {
		$this->add_control(
			'show_title',
			[ 
				'label'     => esc_html__( 'Show Title', 'aios' ),
				'type'      => Controls_Manager::SWITCHER,
				'default'   => 'yes',
				'separator' => 'before'
			]
		);

		$this->add_control(
			'title_html_tag',
			[ 
				'label'     => __( 'Title HTML Tag', 'aios' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => 'h1',
				'options'   => [ 
					'h1'   => esc_html__( 'H1', 'aios' ),
					'h2'   => esc_html__( 'H2', 'aios' ),
					'h3'   => esc_html__( 'H3', 'aios' ),
					'h4'   => esc_html__( 'H4', 'aios' ),
					'h5'   => esc_html__( 'H5', 'aios' ),
					'h6'   => esc_html__( 'H6', 'aios' ),
					'div'  => esc_html__( 'div', 'aios' ),
					'span' => esc_html__( 'span', 'aios' ),
					'p'    => esc_html__( 'p', 'aios' ),
				],
				'condition' => [ 
					'show_title' => 'yes'
				]
			]
		);
	}

	/**
	 * Show Text controls
	 */
	protected function register_show_text_controls() {
		$this->add_control(
			'show_text',
			[ 
				'label'     => esc_html__( 'Show Text', 'aios' ),
				'type'      => Controls_Manager::SWITCHER,
				'default'   => 'yes',
				'separator' => 'before',				
			]
		);
	}

	/**
	 * Show Navigation controls
	 */
	protected function register_show_navigation_controls() {
		$this->add_control(
			'show_navigation_arrows',
			[ 
				'label'   => esc_html__( 'Show Navigation', 'aios' ),
				'type'    => Controls_Manager::SWITCHER,
				'default'   => 'yes',
				
			]
		);
	}

	/**
	 * Show Pagination controls
	 */
	protected function register_show_pagination_controls() {
		$this->add_control(
			'show_navigation_dots',
			[ 
				'label'   => esc_html__( 'Show Pagination', 'aios' ),
				'type'    => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);
	}

	/**
	 * Thumbnail Size controls
	 */
	protected function register_thumbnail_size_controls() {
		$this->add_group_control(
			Group_Control_Image_Size::get_type(),
			[ 
				'name'      => 'thumbnail_size',
				'label'     => esc_html__( 'Image Size', 'aios' ),
				'exclude'   => [ 'custom' ],
				'default'   => 'full',
				'separator' => 'before'
			]
		);
	}

	/**
	 * Autoplay controls
	 */
	protected function register_autoplay_controls() {
		$this->add_control(
			'autoplay',
			[ 
				'label'   => __( 'Autoplay', 'aios' ),
				'type'    => Controls_Manager::SWITCHER,				
			]
		);

		$this->add_control(
			'autoplay_speed',
			[ 
				'label'     => esc_html__( 'Autoplay Speed', 'aios' ),
				'type'      => Controls_Manager::NUMBER,
				'default'   => 5000,
				'condition' => [ 
					'autoplay' => 'yes',
				],
			]
		);

		$this->add_control(
			'pauseonhover',
			[ 
				'label' => esc_html__( 'Pause on Hover', 'aios' ),
				'type'  => Controls_Manager::SWITCHER,
			]
		);
	}
	/**
	 * Centered Slides controls
	 */
	protected function register_centered_slides_controls() {
		$this->add_control(
			'centered_slides',
			[ 
				'label'       => __( 'Center Slide', 'aios' ),
				'description' => __( 'Use even items from Layout > Columns settings for better preview.', 'aios' ),
				'type'        => Controls_Manager::SWITCHER,
			]
		);
	}

	/**
	 * Grab Cursor controls
	 */
	protected function register_grab_cursor_controls() {
		$this->add_control(
			'grab_cursor',
			[ 
				'label' => __( 'Grab Cursor', 'aios' ),
				'type'  => Controls_Manager::SWITCHER,
			]
		);
	}
	/**
	 * loop controls
	 */
	protected function register_loop_controls() {
		$this->add_control(
			'loop',
			[ 
				'label'   => __( 'Loop', 'aios' ),
				'type'    => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);
	}
	/**
	 * Speed & Observer controls
	 */
	protected function register_speed_observer_controls() {
		$this->add_control(
			'speed',
			[ 
				'label'   => __( 'Animation Speed (ms)', 'aios' ),
				'type'    => Controls_Manager::SLIDER,
				'default' => [ 
					'size' => 900,
				],
				'range'   => [ 
					'px' => [ 
						'min'  => 100,
						'max'  => 5000,
						'step' => 50,
					],
				],
			]
		);

		$this->add_control(
			'observer',
			[ 
				'label'       => __( 'Observer', 'aios' ),
				'description' => __( 'When you use carousel in any hidden place (in tabs, accordion etc) keep it yes.', 'aios' ),
				'type'        => Controls_Manager::SWITCHER,
			]
		);
	}

}

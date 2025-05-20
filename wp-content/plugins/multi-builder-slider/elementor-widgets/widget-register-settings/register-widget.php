<?php

namespace ElementorAiosSlider;

// Security Note: Blocks direct access to the plugin PHP files.
defined( 'ABSPATH' ) || die();

class Register_AIOS_Widget {

	private static $instance = null;

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function include_widgets_files() {
	

		require plugin_dir_path( ELEMENTOR_AIOS_SLIDER ) . 'elementor-widgets/traits/aios-widget-controls.php';
		
		require plugin_dir_path( ELEMENTOR_AIOS_SLIDER ) . 'elementor-widgets/aios-slider.php';
		
	}


	public function register_frontend_scripts() {	
		wp_register_script( 'aios-script', plugins_url( 'elementor-widgets/assets/js/aios-script.js', ELEMENTOR_AIOS_SLIDER ), array(), '1.0.0' );
	}
	
	public function register_frontend_styles() {		
		wp_register_style( 'aiso-style', plugins_url( 'elementor-widgets/assets/css/aiso-style.css', ELEMENTOR_AIOS_SLIDER ), array(), '1.0.0' );
		
	}

	public function register_widgets() {
		// It's now safe to include Widgets files.
		$this->include_widgets_files();

		// Register the plugin widget classes.
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new Widgets\Aios_widget_slider() );
	}

	public function __construct() {
		// Register the widgets.
		add_action( 'elementor/widgets/widgets_registered', array( $this, 'register_widgets' ) );

		add_action( 'elementor/frontend/after_register_scripts', array( $this, 'register_frontend_scripts' ), 10 );

		add_action( 'elementor/frontend/after_register_styles', array( $this, 'register_frontend_styles' ), 10 );
	}
}

// Instantiate the Widgets class.
Register_AIOS_Widget::instance();

<?php
/**
 * Plugin Name:       Multi Builder Slider
 * Description:       This plugin allows you to easily create and manage image sliders within your content. With a simple, intuitive interface, this block enables you to display multiple images.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.1
 * Plugin URI: https://craftedbyaman.rf.gd/
 * Author: sahniaman94 
 * Author URI: https://craftedbyaman.rf.gd/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       multi-builder-slider
 *
 * @package           create-block
 */

/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as
published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
define( 'ELEMENTOR_AIOS_SLIDER', __FILE__ );

/**
 * Include the ELEMENTOR_AIOS_SLIDER class.
 */
require plugin_dir_path( ELEMENTOR_AIOS_SLIDER ) . 'elementor-widgets/widget-register-settings/activate-widget.php';
add_action( 'init', function () {
	register_block_type( __DIR__ . '/build' );
});

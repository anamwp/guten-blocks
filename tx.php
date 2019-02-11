<?php
/*
Plugin Name: TX Gutenberg
Description: A core plugin for gutenberg blocks
Plugin URI: https://themexpert.com
Author: themexpert
Author URI: https://themexpert.com
Version: 1.0.0
License: GPL2
Text Domain: tx
*/

/* If this file is called directly, abort. */
if ( ! defined( 'WPINC' ) ) {
    die;
}

/**
 * Define core path for plugin
 */
define( 'TX_CORE_ROOT', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

require_once TX_CORE_ROOT . '/inc/init.php';

/**
 * Enable shortcode in widget
 */
add_filter( 'widget_text', 'do_shortcode');

/**
 * Flush rewrite rules on
 * plugin activation/deactivation
 */
if(! function_exists('tx_core_flush')){
    function tx_core_flush() {
        flush_rewrite_rules();
    }
}
register_activation_hook( __FILE__, 'tx_core_flush' );
register_deactivation_hook( __FILE__, 'tx_core_flush' );


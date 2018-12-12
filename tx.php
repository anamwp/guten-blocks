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

require_once TX_CORE_ROOT . '/inc/blocks.php';
// require TX_CORE_ROOT . '/inc/custom-post-type/post-meta-field.php';

// require_once TX_CORE_ROOT . '/inc/shortcode/social-share.php';
// require_once TX_CORE_ROOT . '/inc/shortcode/admin-details.php';
// require_once TX_CORE_ROOT . '/inc/shortcode/featured-tab.php';
// require_once TX_CORE_ROOT . '/inc/shortcode/featured-post.php';


/**
 * tgx core class load
 * Short code class init
 */
// function tgx_core_load(){
//     Nitrous_Admin_Details::init();
//     TG_Social_Share::init();
//     Nitrous_SC_featured_Tabs::init();
//     Nitrous_featured_Post::init();
// }
// add_action('plugins_loaded', 'tgx_core_load');

/**
 * Enable shortcode in widget
 */
add_filter( 'widget_text', 'do_shortcode');

/**
 * Flush rewrite rules or plugin activation/deactivation
 */
if(! function_exists('tx_core_flush')){
    function tx_core_flush() {
        flush_rewrite_rules();
    }
}
register_activation_hook( __FILE__, 'tx_core_flush' );
register_deactivation_hook( __FILE__, 'tx_core_flush' );

/**
 * Load the javascript
 * That is depends on shortcode or metabox
 */
if(! function_exists('tx_plugin_js')){
    function tx_plugin_js() {
//        wp_enqueue_script('tgx_count_to', plugin_dir_url(__FILE__) . 'assets/js/jquery.countTo.js', array('jquery'), '1.20010');
    }
}
// add_action( 'wp_enqueue_scripts', 'tx_plugin_js');

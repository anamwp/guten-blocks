<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function single_block_cgb_block_assets() {
	// Styles.
	wp_enqueue_style(
		'single_block-cgb-style-css', // Handle.
		plugins_url( '/dist/frontend.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'single_block_cgb_block_assets' );

function single_block_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'single_block-cgb-block-js', // Handle.
		plugins_url( '/dist/app.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ) // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/bundle.js' ) // Version: File modification time.
	);
	// Styles.
	wp_enqueue_style(
		'single_block-cgb-block-editor-css', // Handle.
		plugins_url( '/dist/editor.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'single_block_cgb_editor_assets' );


?>
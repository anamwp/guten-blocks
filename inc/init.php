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
function tx_block_assets() {
	// frontend style
	wp_enqueue_style(
		'single_block-cgb-style-css', // Handle.
		plugins_url( '/dist/frontend.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
	// uikit css
	wp_enqueue_style(
		'tx-uikit',
		plugins_url( '/dist/resources/css/uikit.min.css', dirname( __FILE__ ) ),
		array( 'wp-editor' )
	);
	// uikit js
	wp_enqueue_script(
		'tx-uikit-js',
		plugins_url( '/dist/resources/js/uikit.min.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
	);

}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'tx_block_assets' );

function tx_block_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'single_block-cgb-block-js', // Handle.
		plugins_url( '/dist/app.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ) // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/bundle.js' ) // Version: File modification time.
	);
	// editor css
	wp_enqueue_style(
		'single_block-cgb-block-editor-css', // Handle.
		plugins_url( '/dist/editor.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
	// uikit js
	wp_enqueue_script(
		'tx-uikit-js',
		plugins_url( '/dist/resources/js/uikit.min.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
	);

}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'tx_block_editor_assets' );

/**
 * Register themexpert custom category
 */
function tx_category($categories){
	return array_merge(
		$categories,
		array(
				array(
						'slug'  => 'tx',
						'title' => __('Themexpert', 'tx'),
				),
		)
	);
}
add_filter( 'block_categories', 'tx_category', 10, 2 );

?>
<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function single_block_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'single_block-cgb-block-js', // Handle.
		plugins_url( '/dist/bundle.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ) // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/bundle.js' ) // Version: File modification time.
	);

}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'single_block_cgb_editor_assets' );


?>

  const { __ } = wp.i18n; // Import __() from wp.i18n
  const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

  /**
   * Register: aa Gutenberg Block.
   *
   * Registers a new block provided a unique name and an object defining its
   * behavior. Once registered, the block is made editor as an option to any
   * editor interface where blocks are implemented.
   *
   * @param  {string}   name     Block name.
   * @param  {Object}   settings Block settings.
   * @return {?WPBlock}          The block, if it has been successfully
   *                             registered; otherwise `undefined`.
   */
  registerBlockType( 'cgb/block-single-block2', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __( 'TX Block 2', 'CGB' ), // Block title.
    icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
      __( 'create-guten-block2' ),
    ],

    // The "edit" property must be a valid function.
    edit: function( props ) {
      // Creates a <p class='wp-block-cgb-block-single-block'></p>.
      return (
        <div className={ 'editor ' + props.className }>
          <p>This is block 2 in editor</p>
        </div>
      );
    },

    // The "save" property must be specified and must be a valid function.
    save: function( props ) {
      return (
        <div className={ props.className }>
          <p>this is block 2 in fronted</p>
        </div>
      );
    },
  } );


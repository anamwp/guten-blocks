
  const { __ } = wp.i18n; // Import __() from wp.i18n
  const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
  const { URLInputButton } = wp.editor; // Import registerBlockType() from wp.blocks

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
  registerBlockType( 'tx/button', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __( 'button', 'tx' ), // Block title.
    icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'tx', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
      __( 'button', 'tx' ),
    ],
    attributes: {
      url: {
        type: 'string',
        default:'google.com'
      },
      text: {
        type: 'string',
        default:__('Hellow')
      },
    },

    // The "edit" property must be a valid function.
    edit( { className, attributes, setAttributes } ) {
      // Creates a <p class='wp-block-cgb-block-single-block'></p>.
      console.log({attributes, setAttributes});
      return (
      <URLInputButton
				url={ attributes.url }
				onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || 'Click here' } ) }
			/>
      );
    },

    // The "save" property must be specified and must be a valid function.
    save( { attributes } ) {
      return (
        <div>
          <a href={ attributes.url }>{ attributes.text }</a>
        </div>
      );
    },
  } );



  const { __ } = wp.i18n; // Import __() from wp.i18n
  const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
  const { Fragment } = wp.element;

  const { Button } = wp.components;
  const { withState } = wp.compose;



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
    title: __( 'button', 'tx' ),
    icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'tx',
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
    supports:{
      align: true,
      anchor:true,
      customClassName: true,
      className:true,
      html: false,
      // inserter:false,
      // multiple:false,
      // reusable:false,
    },

      edit( props ) {
      // edit( { className, attributes, setAttributes } ) {
        // Creates a <p class='wp-block-cgb-block-single-block'></p>.
        console.log(props);
        return (
          <Fragment>
              <p>Hellow button</p>
          </Fragment>
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


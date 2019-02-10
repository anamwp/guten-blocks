  const { __ } = wp.i18n; // Import __() from wp.i18n
  const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
  const { PlainText, InspectorControls } = wp.editor;
  const {PanelBody, Button , TextControl, ColorPalette} = wp.components;
  const { Fragment } = wp.element;
  const {withState} = wp.compose;

  const MyColorPalette = withState( {
    color: '#f00',
  } )( ( { color, setState } ) => {
    const colors = [
      { name: 'red', color: '#f00' },
      { name: 'white', color: '#fff' },
      { name: 'blue', color: '#00f' },
    ];

    return (
      <ColorPalette
        colors={ colors }
        value={ color }
        onChange={ ( color ) => setState( { color } ) }
      />
    )
  } );
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
      content: {
        type: 'string',
        default:__('Click Me', 'tx')
      }
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

    edit( { className, attributes, setAttributes, isSelected } ) {
      const {content, url } = attributes;
      return (
        <Fragment>
            <InspectorControls>
              <PanelBody
                title={__('Options', 'tx')}
                initialOpen={ true }>
                <TextControl
                  label="Link"
                  value={ className }
                  onChange={ ( url ) => setState( { url } ) }
                />
                <MyColorPalette/>
              </PanelBody>
            </InspectorControls>

          <div className="editor-panel">
            <Button className="g-button" isDefault>
              {
                isSelected
                ?
                <TextControl
                  className={ className }
                  value={ content }
                  onChange={ ( content ) => setAttributes( { content } ) }
                />
                : content
              }
            </Button>
          </div>
        </Fragment>
      );
    },

    // The "save" property must be specified and must be a valid function.
    save( { attributes } ) {
      console.log('save', attributes);
      const {content, url } = attributes;
      return (
        <div>
          <a href={url}>{content}</a>
        </div>
      );
    }

  } );


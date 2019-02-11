  const { __ } = wp.i18n; // Import __() from wp.i18n
  const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
  const { PlainText, InspectorControls } = wp.editor;
  const {PanelBody, Button , TextControl, ColorPalette, SelectControl} = wp.components;
  const {withState} = wp.compose;
  const { Fragment } = wp.element;

  import {TYPES, SIZE} from './helper'

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
      type: {
        type: 'string',
        default:'default'
      },
      size: {
        type: 'string',
        default:'small'
      },
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
      const {content, url, type, size } = attributes;
      return (
        <Fragment>
            <InspectorControls>

              <PanelBody
                title={__('Options', 'tx')}
                initialOpen={ true }>
                <TextControl
                  label="Link"
                  value={ url }
                  onChange={ ( url ) => setAttributes( { url } ) }
                />
                <SelectControl
                    label="Type"
                    value={ type }
                    options={ TYPES }
                    onChange={  type  => { setAttributes( { type } ) } }
                />
                <SelectControl
                    label="Size"
                    value={ size }
                    options={ SIZE }
                    onChange={  size  => { setAttributes( { size } ) } }
                />
              </PanelBody>

            </InspectorControls>

          <div className="editor-panel">
            <button className={`${className} uk-button uk-button-${type} uk-button-${size}` } >
              {
                isSelected
                ?
                <TextControl
                  value={ content }
                  onChange={ ( content ) => setAttributes( { content } ) }
                />
                : content
              }
            </button>
          </div>
        </Fragment>
      );
    },

    // The "save" property must be specified and must be a valid function.
    save( { attributes } ) {
      console.log('save', attributes);
      const {content, url, type, size } = attributes;
      return (
        <div>
          <a className={`uk-button uk-button-${type} uk-button-${size}`} href={url}>{content}</a>
        </div>
      );
    }

  } );


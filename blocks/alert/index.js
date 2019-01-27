  const { __ } = wp.i18n; // Import __() from wp.i18n
  const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
  const { RichText , InspectorControls} = wp.editor;
  const { PanelBody , SelectControl} = wp.components;
  const { Fragment } = wp.element;

  import {TYPES} from './helper'

  /**
   * Register: Create Gutenberg Block.
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
  registerBlockType( 'tx/alert', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __( 'Alert', 'tx' ), // Block title.
    icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
    category: 'tx', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
      __( 'alert', 'tx' )
    ],
    // Register block styles.
    // styles: Styles,
    attributes: {
      type:{
        type:'string',
        default:'primary'
      },
      content: {
        source: 'html',
        selector: '.uk-alert',
        default:__('I am alert component', 'tx')
      },
    },

    edit({ className, attributes, setAttributes, isSelected }){
      const {content, type } = attributes;
      return (
          <Fragment>
            <InspectorControls>
              <PanelBody
                title={__('Options', 'tx')}
                initialOpen={ true }>
                <SelectControl
                    label="Alert Type"
                    value={ type }
                    options={ TYPES}
                    onChange={  type  => { setAttributes( { type } ) } }
                />
              </PanelBody>
            </InspectorControls>
            <div className={`${className} uk-alert uk-alert-${type}` }>
              {
                isSelected
                ?
                <RichText
                  placeholder={__('I am placeholder', 'tx')}
                  tagName="div"
                  className={ className + ' uk-input'}
                  value={ content }
                  onChange={ ( content ) => setAttributes( { content } ) }
                  multiline={false}
                />
                : content
              }
            </div>
          </Fragment>
        );
    },

    // The "save" property must be specified and must be a valid function.
    save({attributes}){
      const {content, type } = attributes;
      return (
          <RichText.Content tagName="div" className={`uk-alert uk-alert-${type}`} uk-alert value={ content } />
      );
    }

  } );


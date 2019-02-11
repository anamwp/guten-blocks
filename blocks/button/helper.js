const { __ } = wp.i18n; // Import __() from wp.i18n

export const TYPES = [
  // Mark style as default.
  {
      value: 'default',
      label: __( 'Default' ),
  },
  {
      value: 'primary',
      label: __( 'Primary' ),
  },
  {
      value: 'secondary',
      label: __( 'Secondary' )
  },
  {
      value: 'danger',
      label: __( 'Danger' )
  },
  {
      value: 'text',
      label: __( 'Text' )
  },
  {
      value: 'link',
      label: __( 'Link' )
  },
]

export const SIZE = [
  {
      value: 'small',
      label: __( 'Small' ),
  },
  {
      value: 'large',
      label: __( 'Large' ),
  },

]
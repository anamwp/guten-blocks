const { __ } = wp.i18n; // Import __() from wp.i18n

export const TYPES = [
  // Mark style as default.
  {
      value: 'primary',
      label: __( 'Primary' ),
  },
  {
      value: 'success',
      label: __( 'Success' )
  },
  {
      value: 'warning',
      label: __( 'Warning' )
  },
  {
      value: 'danger',
      label: __( 'Danger' )
  },

]

const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#a2513c',
              '@link-color': '#ff2400',
              '@font-size-base': '18px',
              '@text-color': 'fade(#fff, 85%)',
              'text-color-secondary': 'fade(@primary-color, 45%)',
              '@item-hover-bg': '#a76758',
              '@component-background': '#49231a',
              '@layout-body-background': '#00000000',
              '@layout-header-background': '#000000',
              '@dropdown-menu-submenu-disabled-bg': '@layout-header-background',
              '@menu-inline-submenu-bg': '@layout-header-background',
              '@menu-popup-bg': '#000000',
              '@menu-bg': '#000000',
              '@border-color-split': '@layout-header-background',
              '@disabled-color': '#ffdbb0',
              '@border-color-base': '@primary-color',
              '@menu-dark-color': '#000000',
              '@menu-dark-item-active-bg': '#000000',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
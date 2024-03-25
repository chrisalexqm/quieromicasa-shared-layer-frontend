export const quieromicasa_blueprint = {
  defaults: {
    VAppBar: {
      flat: true
    },
    VAutocomplete: {
      variant: 'filled'
    },
    VBanner: {
      color: 'primary'
    },
    VBtn: {
      color: 'primary',
      variant: 'flat',
      rounded: 'lg'
    },
    VBtnGroup: {
      rounded: 'xl',
      VBtn: {
        rounded: null
      }
    },
    VCard: {
      rounded: 'lg'
    },
    VCheckbox: {
      color: 'primary'
    },
    VChip: {},
    VCombobox: {
      variant: 'outlined',
      color: 'primary'
    },
    VNavigationDrawer: {
      // VList: {
      //   nav: true,
      //   VListItem: {
      //     rounded: 'xl',
      //   },
      // },
    },
    VBottomNavigation: {},
    VSelect: {
      variant: 'filled'
    },
    VSlider: {
      color: 'primary'
    },
    VTabs: {
      color: 'primary'
    },
    VTextarea: {
      color: 'primary'
    },
    VTextField: {
      color: 'primary'
    }
  },
  //   icons: {
  //     defaultSet: 'mdi',
  //     sets: {
  //       mdi
  //     }
  //   },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#4A6800',
          secondary: '#121416',
          tertiary: '#7d5260',
          error: '#b3261e',
          surface: '#F6F6F6',
          'surface-container': '#efeee6',
          'surface-container-high': '#eae8e1',
          'secondary-container': '#caef86'
        }
      }
    }
  }
}

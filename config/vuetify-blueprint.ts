export const quieromicasa_blueprint = {
  defaults: {
    VAppBar: {
      flat: true,
    },
    VAutocomplete: {
      variant: "filled",
    },
    VBanner: {
      color: "primary",
    },
    VBtn: {
      color: "primary",
      variant: "flat",
      rounded: "lg",
    },
    VBtnGroup: {
      rounded: "xl",
      VBtn: {
        rounded: null,
      },
    },
    VCard: {
      rounded: "lg",
    },
    VCheckbox: {
      color: "primary",
    },
    VChip: {},
    VCombobox: {
      variant: "outlined",
      color: "primary",
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
      variant: "filled",
    },
    VSlider: {
      color: "primary",
    },
    VTabs: {
      color: "primary",
    },
    VTextarea: {
      color: "primary",
    },
    VTextField: {
      color: "primary",
    },
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
          primary: "#506527",
          secondary: "#506528",
          tertiary: "#236488",
          error: "#ba1a1a",
          surface: "#fafaee",
          "surface-container": "#eeefe3",
          "surface-container-high": "#e9e9dd",
          "secondary-container": "#d2ec9f",
        },
      },
    },
  },
};

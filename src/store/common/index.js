export const common = {
  namespaced: true,
  state: {
    menuItems: [
      { label: 'Home', to: '/' },
      { label: 'What we do', to: '/' },
      { label: 'The digital divide', to: '/' },
      { label: 'Get involved', to: '/' },
      { label: 'Our network', to: '/' },
      { label: 'Insights', to: '/' },
    ]
  },
  getters: {
    getMenuItems: (state) => {
      return state.menuItems;
    }
  }
};
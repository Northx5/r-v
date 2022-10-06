export const common = {
  namespaced: true,
  state: {
    menuItems: [
      { label: 'Home', to: '/' },
      { label: 'What we do', to: '/what-we-do' },
      { label: 'The digital divide', to: '/the-digital-divide' },
      { label: 'Get involved', to: '/get-involved' },
      { label: 'Our network', to: '/our-network' },
      { label: 'Insights', to: '/insights' },
    ]
  },
  getters: {
    getMenuItems: (state) => {
      return state.menuItems;
    }
  },
  actions: {

  },
  mutations: {

  }
};
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import colors from 'vuetify/lib/util/colors';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
      theme: {
        themes: {
          light: {
            primary: '#3f51b5',
            secondary: '#b0bec5',
            anchor: '#8c9eff',
          },
          dark: {
            primary: colors.blue.lighten3,
          },
        },
      },
});

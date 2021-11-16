const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    container: {
			center: true,
			padding: '1.5rem'
		  }
  },

  plugins: []
};

module.exports = config;
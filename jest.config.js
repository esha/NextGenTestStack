module.exports = {
  automock: false,
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",

  transform: {
    "^.+\\.vue$": "vue-jest",
  },
}

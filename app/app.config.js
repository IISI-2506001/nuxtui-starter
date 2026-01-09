export default defineAppConfig({
  ui: {
    colors: {
      primary: "green",
      neutral: "slate",
    },
    button: {
      base: `
        cursor-pointer
        aria-disabled:false:cursor-pointer
        aria-disabled:true:cursor-not-allowed
      `,
    },
  },
});

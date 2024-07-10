export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addFilter('debugger', (jsonData) => {
    console.log(jsonData);
  });
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
}

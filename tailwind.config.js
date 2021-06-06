module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'matchmaker-byu': "url('../website-assets/matchmakerbyu/matchmaker-byu_auto_x2.png')",
        'ai-spy': "url('../website-assets/aispy/home-screen.png')",
        'dti-model': "url('../website-assets/dti-super-res/dti-image.png')",
        'set-game': "url('../website-assets/set/set-start.png')",
        'wall-scraper': "url('../website-assets/Wallscraper/EastEndofRundle67204480 copy.png')",
        'influencer-marketplace': "url('../website-assets/influencer-marketplace/my-follows copy.png')",
        'turing-logo': "url('https://pbs.twimg.com/profile_images/1252441105771065344/l5uUw6WZ_400x400.jpg')",
        'safexai': "url('data:image/jpeg;base64,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')",
        'english-connect': "url('data:image/png;base64,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')",
        'stanford-logo': "url('data:image/png;base64,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')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

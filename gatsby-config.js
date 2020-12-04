module.exports = {
  siteMetadata: {
    title: `Play Marin`,
    description: `Find Everything you need to know about PlayMarin here at PlayMarin.org`,
    author: `@OFFTHELANDSOFTWARE`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `babel-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-jss",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "video",
        path: `${__dirname}/src/video/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        path: `${__dirname}/src/gallery-images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery-images`,
        path: `${__dirname}/src/gallery-images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-breakpoints`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    
    {
      resolve: `gatsby-plugin-browser-dependencies`,
      options: {
        dependencies: [`auth-js`, `browser-only-module`],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      resolve: "gatsby-remark-embed-youtube",
      options: {
        width: 800,
        height: `auto`,
        preload: "auto",
      },
    },

    {
      resolve: `gatsby-transformer-video`,
      options: {
        profiles: {
          sepia: {
            extension: `mp4`,
            converter: function ({ ffmpegSession, videoStreamMetadata }) {
              const { currentFps } = videoStreamMetadata

              const outputOptions = [
                `-crf 31`,
                `-preset slow`,
                `-movflags +faststart`,
                `-profile:v high`,
                `-bf 2	`,
                `-g ${Math.floor(currentFps / 2)}`,
                `-coder 1`,
                `-pix_fmt yuv420p`,
              ].filter(Boolean)

              return ffmpegSession
                .videoCodec(`libx264`)
                .videoFilters(
                  `colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131`
                )
                .outputOptions(outputOptions)
                .noAudio()
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-remark-videos`,
      options: {
        pipelines: [
          {
            name: "vp9",
            transcode: chain =>
              chain
                .videoCodec("libvpx-vp9")
                .noAudio()
                .outputOptions(["-crf 20", "-b:v 0"]),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: "webm",
          },
          {
            name: "h264",
            transcode: chain =>
              chain
                .videoCodec("libx264")
                .noAudio()
                .addOption("-profile:v", "main")
                .addOption("-pix_fmt", "yuv420p")
                .outputOptions(["-movflags faststart"])
                .videoBitrate("1000k"),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: "mp4",
          },
        ],
      },
    },
  ],
}

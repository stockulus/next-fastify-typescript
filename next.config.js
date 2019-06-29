const withTypescript = require('@zeit/next-typescript')

// const isProd = process.env.NODE_ENV === 'production'

module.exports = withTypescript({
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60, // 1h
    pagesBufferLength: 10
  }
})

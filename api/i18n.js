const { lookup } = require('accept-language-negotiator')

module.exports = (req, res) => {
    const supportedLang = ['pt-BR', 'en']
    const defaultLang = 'en'
    const lang = lookup(req.headers['accept-language'], supportedLang, defaultLang)
    res.setHeader('Location', `/${lang.toLowerCase()}${req.url}`)
    res.status(308).send()
}
import Header from './common/head'

module.exports = (props) => {
    const { site, config, page, body } = props
    const language = page.lang || page.language || config.language

    return (<html lang={language ? language.substr(0, 2) : ''}>
        <Header site={site} config={config} page={page} />
        <body>
            <div v-html={body}></div>
        </body>
    </html>)
}

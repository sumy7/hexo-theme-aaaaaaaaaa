
module.exports = (props) => {
    console.log(props)
    const { site, config, page } = props

    return (<head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Hello World</title>
    </head>)
}

adk.cmd.push(() => {
    const { publisherId, publisherRoot } = window.advisible

    adk.config()
        .addBreakpoint('xs', 250)
        .addBreakpoint('sm', 768)
        .addBreakpoint('md', 1020)
        .addBreakpoint('lg', 1200)
        .addBreakpoint('xl', 1340)

        .addTemplate('com.advisible.native.article', adk.template.config()
            .url(`${publisherRoot}/template.html`))

        .addContainer('native-article', adk.container.config()
            .provider('adk.native.article')
            .params({
                itemId: window.location.hash.slice(1),
                afterLoad: ({ err, item }) => {
                    if (!err && item) {
                        window.document.title = item.headline
                    }
                },
            }))

        .init(publisherId)

    adk.container.attach()
})

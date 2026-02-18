adk.cmd.push(() => {
    const { publisherId, publisherRoot } = window.advisible

    adk.config()
        .addBreakpoint('xs', 250)
        .addBreakpoint('sm', 768)
        .addBreakpoint('md', 1020)
        .addBreakpoint('lg', 1200)
        .addBreakpoint('xl', 1340)

        .addTemplate('com.advisible.native.teaser', adk.template.config()
            .url(`${publisherRoot}/template.html`))

        .addContainer('native-teaser-desktop', adk.container.config()
            .params({
                adapters: {
                    'com.advisible.content-display': {
                        render: 'com.advisible.native.teaser',
                        target: '_blank',
                    },
                },
            }))

        .init(publisherId)

    adk.container.attach()
})

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

        .addContainer('native-group', adk.container.config()
            .abstract()
            .params({
                forceGroup: true,
                adapters: {
                    'com.advisible.content-display': {
                        render: 'com.advisible.native.teaser',
                        target: '_blank',
                    },
                },
            }))

        .addContainer('native-group-desktop-article', adk.container.config()
            .extends('native-group')
            .breakpoints('sm', 'md', 'lg', 'xl'))

        .addContainer('native-group-mobile-article', adk.container.config()
            .extends('native-group')
            .breakpoints('xs'))

        .init(publisherId)

    adk.container.attach()
})

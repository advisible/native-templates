adk.cmd.push(() => {
    const { publisherId, publisherRoot } = window.advisible

    const contentDisplayConfig = {
        render: 'com.advisible.native.teaser',
        target: '_blank',
    }

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
                adapters: {
                    'com.advisible.content-display': contentDisplayConfig,
                },
            }))

        .addContainer('native-group-desktop', adk.container.config()
            .extends('native-group')
            .breakpoints('sm', 'md', 'lg', 'xl'))

        .addContainer('native-group-mobile', adk.container.config()
            .extends('native-group')
            .breakpoints('xs'))

        .init(publisherId)

    adk.container.attach()
})

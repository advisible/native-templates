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

        .addContainer('native-scroll', adk.container.config()
            .abstract()
            .margin(30, 0)
            .params({
                adapters: {
                    'com.advisible.native.article': {
                        afterLoad: ({ err, item, elem }) => {
                            if (!err && item) {
                                const { pathname } = new URL(item.url)
                                elem.dataset.pathname = pathname
                                elem.dataset.title = item.headline
                            }
                        },
                    },
                },
            }))

        .addContainer('native-scroll-desktop', adk.container.config()
            .breakpoints('sm', 'md', 'lg', 'xl')
            .extends('native-scroll'))

        .addContainer('native-scroll-mobile', adk.container.config()
            .breakpoints('xs')
            .extends('native-scroll'))

        .init(publisherId)

    adk.container.attach()
})

module.exports = {
    title: 'Softna CMS',
    description: 'Softna CMS documenatation, guidelines & tutorials',
    base: "/",
	head: [
		['link', { rel: 'icon', href: './_assets/logo-dark.png'}]
	],

    themeConfig: {

        nav: [
            { text: 'softna.com', link: 'http://softna.com' },
            { text: 'pwthemes.com', link: 'http://pwthemes.com' },
        ],
        
        sidebar: [

            ['/', 'Intro'],

            // BASIC 
            {
                title: 'Basics',
                collapsable: true,
                children: [
                   // '/'
                ]
            },

            // ADVANCED
            {
                title: 'Advanced',
                collapsable: true,
                children: [
                    ['/advanced/', 'Folder Structure'],
                    ['/advanced/theme/', 'Theme Folder'],
                    ['/advanced/less/', 'Less'],
                    ['/advanced/layouts/', 'Layouts'],
                    ['/advanced/widgets/', 'Widgets'],
                ]
            },

            // GUIDELINES
            ['/guidelines/', 'Guidelines'],

        ]

    }
}

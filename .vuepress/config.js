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

        sidebar: {

            // if u ned sidebar for specific item only
            // add it like this (before main sidebar)

            /*
            '/basics/': [
                '',
            ],
            */

            // main page fallback, must be last
            '/': [
                ['/', 'Intro'],
                ['/start/', 'Getting Started'],
                ['/basics/', 'Basics'],
                ['/theme/', 'Theme'],
                ['/less/', 'Less'],
                ['/layouts/', 'Layouts'],
                ['/widgets/', 'Widgets']
            ],
        }

    }
}

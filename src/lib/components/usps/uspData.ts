type Usp = {
    title: string,
    snippet: string,
    image: string,
    link: string,
}

export const usps: Usp[] = [
    {
        title: 'Natural Colours',
        snippet:
            'Our cellulose particles are highly functional, 100% natural plant-based and can be used in a wide range of formulations.',
        image: '/natural-colours.png',
        link: '/'
    },
    {
        title: 'Responsible',
        snippet:
            'Our products are biodegradable, produced responsibly and do not cause harm to people, society or the environment.',
        image: '/responsible.png',
        link: '/'
    },
    {
        title: 'Climate Action',
        snippet:
            'Our production avoids carbon emissions compared to existing material processing such as titanium dioxide production.',
        image: '/climate-action.png',
        link: '/'
    }
];
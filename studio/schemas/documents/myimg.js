export default {
    name: 'myimg',
    title: 'Myimg',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'My Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}
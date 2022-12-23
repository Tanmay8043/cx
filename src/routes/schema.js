export const mySchema = {
    title: 'human schema',
    version: 0,
    primaryKey:"id",
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 100 // <- the primary key must have set maxLength
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        }
    },
    required: ['firstName', 'lastName', 'id']
}

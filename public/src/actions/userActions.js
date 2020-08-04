export const createUser = ({user}) => ({
    type: 'CREATE_USER',
    ...user
});

export const editUser = ({user, updates}) => ({
    type: 'EDIT_USER',
    ...user,
    ...updates
});

export const removeUser = ({user}) => ({
    type: 'REMOVE_USER',
    ...user
});

export const setUser = ({userName}) => ({
    type: 'SET_USER',
    userName
})

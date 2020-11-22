import authReducer from '../../reducers/auth';

test('Should set up auth with user data', () => {
    const user = {
        uid: '1',
        displayName: 'User Foo',
        email: 'user.foo@gmail.com'
    }
    const state = authReducer({}, {type: 'LOGIN', ...user});
    expect(state).toEqual({
        ...user
    })
});

test('Should clear auth from user data on logout', () => {
    const initialState = {
        uid: 1,
        displayName: 'User Foo',
        email: 'user.foo@gmail.com'
    }
    const state = authReducer(initialState, { type: 'LOGOUT', initialState});
    expect(state).toEqual({});
});
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, startLogIn, startLogOut } from '../../actions/auth';

const middlewares = [thunk];
const createMockStore = configureMockStore(middlewares);

test('Should set login action object with given parameters', () => {
    const user = {
        uid: 'kh56',
        displayName: 'User Foo',
        email: 'user.foo@gmail.com'
    }
    expect(login(user)).toEqual({
        type: 'LOGIN',
        ...user
    })
});

test('Should setup logout action object', () => {
    expect(logout()).toEqual({
        type: 'LOGOUT'
    })
});

test('Should display a sign in Google popup on startLogIn', () => {
    const store = createMockStore({});
    store.dispatch(startLogIn()).then(() => {
        const actions = store.getActions();
    })
});
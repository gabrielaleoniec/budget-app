const moment = jest.requireActual('moment');

export default (timestamp = 0) => {
    const date = moment(timestamp);
    return date;
}
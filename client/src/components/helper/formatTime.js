import moment from 'moment';

const formatTime = (dateNow) => {
    const now = moment();
    const givenDate = moment(dateNow);
    const duration = moment.duration(now.diff(givenDate));

    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();

    if (duration.asHours() > 8) {
        return `${days}d ${hours}h`;
    } else {
        return `${days}d ${hours}h ${minutes}m`;
    }
}

export default formatTime;
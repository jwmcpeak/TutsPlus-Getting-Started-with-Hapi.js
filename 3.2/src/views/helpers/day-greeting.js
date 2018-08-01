module.exports = () => {
    let time = (new Date()).getHours();

    if (time < 12) {
        return 'Good morning';
    }

    if (time < 17) {
        return 'Good afternoon';
    }

    return 'Good evening';
};
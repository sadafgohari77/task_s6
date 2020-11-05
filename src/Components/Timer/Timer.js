import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.countDownId = null;
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            expired: false
        };
    }

    componentDidMount() {
        this.countDownId = setInterval(this.timerInit, 1000);
    }

    componentWillUnmount() {
        if (this.countDownId) {
            clearInterval(this.countDownId);
        }
    }

    timerInit = () => {
        const { startDate } = this.props;
        console.log(startDate);
        const now = new Date().getTime();
        if (!startDate) {
            this.setState({ expired: true });
            return;
        }
        const countDownStartDate = new Date(startDate).getTime();
        const distance = countDownStartDate - now;
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // For countdown is finished
        if (distance < 0) {
            clearInterval(this.countDownId);
            this.setState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                expired: true
            });
            return;
        }
        this.setState({ hours, minutes, seconds, expired: false });
    };

    render() {
        const { hours, minutes, seconds, expired } = this.state;
        if (expired) {
            return <div className="expired">Expired :(</div>;
        }
        return (
            <div className="timer">

                <div>
                    {hours}
                    <span>:</span>
                </div>
                <div>
                    {minutes}
                    <span>:</span>
                </div>
                <div>
                    {seconds}
                    <span>:</span>
                </div>
            </div>
        );
    }
}
export default Timer;
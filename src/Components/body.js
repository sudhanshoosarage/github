import { Component } from 'react'
//import unirest from 'unirest'
import { HashLoader } from 'react-spinners'
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"

class body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ticker: "",
            symbol: "",
            stockPrice: null,
            shortTerm: "",
            midTerm: "",
            longTerm: "",
            h: '',
            i: false
        }
    }
    callApi(S) {
        /*var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials");
        req.query({
            "symbol":""+S+"",
            "region": "US"
        });
        req.headers({
            "x-rapidapi-key": "57890e7e78msh97f441a0858c392p14a653jsn62fc0de6afe3",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        });
        req.end((res,error) => {
            if (error){
            } 
            try{
            this.setState({
                stockPrice: res.body.price.regularMarketPrice.fmt,
                Ticker: res.body.price.shortName,
                symbol:res.body.price.symbol,
                shortTerm:res.body.pageViews.shortTermTrend,
                midTerm:res.body.pageViews.midTermTrend,
                longTerm:res.body.pageViews.longTermTrend,
                i: true,
                stockPrice: "$110",
                Ticker: "AMAZON",
                symbol:"AMZN",
                shortTerm:"UP",
                midTerm:"DOWN",
                longTerm:"UP",
                i: true,
            })
        }catch(Exception){
            alert("You must search the company symbol For ex(AMZN,MSFT)")
        }
        finally{
            this.callApi("tsla")
        }
        });*/
        this.setState({
            stockPrice: "110",
            Ticker: S,
            symbol: "AMZN",
            shortTerm: "UP",
            midTerm: "DOWN",
            longTerm: "UP",
            i: true,
        })
    }
    componentDidMount() {
        if (this.state.h === '')
            this.callApi("TSLA");
        else
            this.callApi(this.state.h);
    }

    render() {
        var obj = {
            backgroundImage: "url(background.jpg)",
            position: 'absolute',
            top: '2%',
            left: '5%',
            right: '5%',
            bottom: '2%'
        }

        var box = {
            backgroundColor: 'rgba(1, 1, 1, 0.1)',
            width: "30%",
            border: '1px solid black',
            padding: '10px',
            margin: '30px',
            borderRadius: '10px',
            position: 'relative',
        }

        let isLog = this.state.i;
        if (isLog) {
            return (
                <>
                    <meta charset="utf-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

                    <div class="container">
                        <div style={obj}>
                            <input type="text" placeholder="search ticker" onChange={(event) => {
                                this.setState({
                                    h: event.target.value
                                })
                            }}></input>
                            <input type="submit" onClick={(event) => {
                                this.setState({
                                    i: false
                                })
                                this.callApi(this.state.h)
                            }}></input>
                            <div style={box}>
                                <div style={{ position: 'relative', textAlign: 'left', left: "5%" }}>
                                    <h1 style={{ color: 'black' }}>{this.state.Ticker}</h1>
                                    <h5 style={{ color: 'black', position: 'relative', left: '1%' }}>{this.state.symbol}</h5>
                                    <h3 style={{ color: 'green', position: 'relative', left: '1%' }}>{"$" + this.state.stockPrice}</h3>
                                    <h3 style={{ color: 'black', position: 'relative', left: '1%' }}>Short Term Trend</h3>
                                    <h3 style={{ color: 'green', position: 'relative', left: '1%' }}>{this.state.shortTerm === 'UP' ? <BsFillCaretUpFill /> : <h3 style={{ color: 'red' }}><BsFillCaretDownFill /></h3>}</h3>
                                    <h3 style={{ color: 'black', position: 'relative', left: '1%' }}>Mid Term Trend</h3>
                                    <h3 style={{ color: 'green', position: 'relative', left: '1%' }}>{this.state.midTerm === 'UP' ? <BsFillCaretUpFill /> : <h3 style={{ color: 'red' }}><BsFillCaretDownFill /></h3>}</h3>
                                    <h3 style={{ color: 'black', position: 'relative', left: '1%' }}>Long Term Trend</h3>
                                    <h3 style={{ color: 'green', position: 'relative', left: '1%' }}>{this.state.longTerm === 'UP' ? <BsFillCaretUpFill /> : <h3 style={{ color: 'red' }}><BsFillCaretDownFill /></h3>}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <meta charset="utf-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

                    <div class="container">
                        <div style={obj}>
                            <div style={{ position: 'relative', top: '40%' }}>
                                <HashLoader size={100} ></HashLoader>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}
export default body;
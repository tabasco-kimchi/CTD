const { Component } = React;
const { Router, Route, IndexRoute, Link } = ReactRouter;
 
class Main extends Component {
  render() {
    return (
      <div>
        <h1>BlockChain Study</h1>
        <ul className="header">
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/bitcoin">Bitcoin</Link>
          </li>
          <li>
              <Link to="/bitcoin2">Bitcoin2</Link>
          </li>
        </ul>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Hello~ </h2>
      </div>
    );
  }
}


class Bitcoin extends Component {
  state = {
    blockNumber: 0,
    acc1_balance: 0,
    acc2_balance: 0
  };
  connect = () => {
    axios
      .get("/bit_network/connect")
      .then(res => {
        console.log(res);
        this.setState({
          blockNumber: res.data.blockNumber,
          acc1_balance: res.data.acc1_balance,
          acc2_balance: res.data.acc2_balance
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
  send = () => {
    alert(this.amount.value);
    axios
      .post("/bit_network/send", { amount: this.amount.value })
      .then(res => {
        console.log(res);
        this.setState({
          blockNumber: res.data.blockNumber,
          acc1_balance: res.data.acc1_balance,
          acc2_balance: res.data.acc2_balance
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    return (
      <div>
        <h2>bitcoin </h2>
        <button onClick={this.connect}>connect</button>
        <br />
        blockNumber : {this.state.blockNumber} <br />
        acc1_balance : {this.state.acc1_balance} <br />
        acc2_balance : {this.state.acc2_balance} <br />
        <br /> from acc1 to acc2{" "}
        <input ref={ref => (this.amount = ref)}></input> BTC
        <button onClick={this.send}>SEND</button>
      </div>
    );
  }
}

class Bitcoin2 extends Component {
    state = {
        blockNumber: 0,
        acc2_balance: 0,
        acc1_balance: 0
    };
    connect = () => {
        axios
            .get("/bit_network/connect")
            .then(res => {
                console.log(res);
                this.setState({
                    blockNumber: res.data.blockNumber,
                    acc2_balance: res.data.acc2_balance,
                    acc1_balance: res.data.acc1_balance
                });
            })
            .catch(e => {
                console.log(e);
            });
        };
    send = () => {
        alert(this.amount.value);
        axios
            .post("/bit_network/send2", { amount: this.amount.value })
            .then(res => {
                console.log(res);
                this.setState({
                    blockNumber: res.data.blockNumber,
                    acc2_balance: res.data.acc2_balance,
                    acc1_balance: res.data.acc1_balance
                });
            })
            .catch(e => {
                console.log(e);
            });
    };
    render() {
        return (
            <div>
                <h2>Bitcoin2</h2>
                <button onClick={this.connect}>connect</button>
                <br/>
                blockNumber : {this.state.blockNumber} <br/>
                acc2_balance : {this.state.acc2_balance}
                <br/>
                acc1_balance : {this.state.acc1_balance} <br/>
                from acc2 to acc1
                <input ref={ref => (this.amount = ref)}> </input> BTC
                <button onClick={this.send}>SEND</button>
                <br/>
            </div>
        );
    }
}


 
ReactDOM.render(
  <Router>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="bitcoin" component={Bitcoin} />
      <Route path="bitcoin2" component={Bitcoin2} />  
    </Route>
  </Router>,
  document.getElementById("root")
);

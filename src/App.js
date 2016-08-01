import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Search from 'material-ui/svg-icons/action/search';

import getGithubInfo from './utils/github.js';
import Echarts from './components/echarts.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      bio:{},
      repos:[]
    }
  }
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  handleSubmit(e){
    e.preventDefault();
    let account = this.refs.account.getValue();
    getGithubInfo(account)
      .then((data) => {
        // console.log(data)
        this.setState({
          bio:data.bio,
          repos:data.repos
        })
      });
  }
  render () {
    let styles={
      root:{
        width:'90%',
        margin:'20px auto',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
        padding:'10px',
        textAlign:'center'
      }
    }
    return(
      <div style={styles.root}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField hintText="Search Github" ref="account"/>
          <FlatButton label="GitHub Link" secondary={true} icon={<Search />} type="submit" />
        </form>
        {this.state.bio.name}&nbsp;{this.state.bio.login}&nbsp;{this.state.bio.email}&nbsp;{this.state.bio.location}<br/>
        <img src={this.state.bio.avatar_url}/>
        <Echarts />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;

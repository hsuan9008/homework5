import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import $ from  'jquery'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
}));

const HW4=()=>{
    const classes = useStyles();
    class UserGithub extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            username: '',
            githubtUrl: '',
            avatarUrl: '',
            id: '',
            location: '',
            follower: '',
            following: '',
        }
    } 

    componentDidMount() {
        $.get(this.props.source, (result) => {
            console.log(result);
            const data = result;
            if (data) {
                this.setState({
                    username: data.name,
                    githubtUrl: data.html_url,
                    avatarUrl: data.avatar_url,
                    id: data.id,
                    follower: data.follower,
                    following: data.following,
                });
            }
        });
    } 
    render() {
        return (
    <div className={classes.paper}>
        <img src={this.state.avatarUrl} />
        <h3>Name:{this.state.username}</h3>
        <h3>Login:{this.state.login}</h3>
        <h3>ID:{this.state.id}</h3>
        <h3>follower:{this.state.follower}</h3>
        <h3>following:{this.state.following}</h3>  
        <a href={this.state.githubtUrl}>Github Link</a>.
        </div>
        );
    }
    }
ReactDOM.render(
    <UserGithub source="https://api.github.com/users/cjwu" />,
    document.getElementById('root')
);
var output=[];
    output.push(<UserGithub/>)
    return output
}
    export default HW4;

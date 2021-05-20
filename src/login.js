import TextField from '@material-ui/core/TextField';//hw3

const Login=()=>{
    return (
        <div>
        <TextField
                  id="outlined-password-input"
                  label="Email"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
        <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
        </div>
        
    )
}
export default Login;
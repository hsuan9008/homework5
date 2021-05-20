import TextField from '@material-ui/core/TextField';

const HW3=()=>{
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
        <button>sign in</button>
        </div>
        
    )
}
export default HW3;

import React,{Component} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class Createroompage extends Component{ 

    defaultVotes=2
    constructor(props){
        super(props);
        this.state={
          GuestCanPause: true,
          VotesToSkip:this.defaultVotes,
        };

        this.HandleRoomBottonPressed=this.HandleRoomBottonPressed.bind(this);
        this.HandleGuestCanPauseChange=this.HandleGuestCanPauseChange.bind(this);
        this.HandleVotesChange=this.HandleVotesChange.bind(this);
      }


      HandleVotesChange(e){
        this.setState({
          VotesToSkip:e.target.value,
        });
      }

      HandleGuestCanPauseChange(e){
        this.setState({
          GuestCanPause:e.target.value ==="true" ? true : false,
        });
      }

      HandleRoomBottonPressed(){
        const requestOptions = {
          method:'POST',
          headers: { 'Content-Type':'application/json'},
          body : JSON.stringify({
            votes_to_skip:this.state.VotesToSkip,
            guest_can_pause:this.state.GuestCanPause
          }),
        };
        fetch("/api/create-room/",requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
      }



    render() {
      return  <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Create A Room
        </Typography>
        </Grid> 
        <Grid item xs={12} align="center">
           <FormControl>
            <FormHelperText>
              <div
              align="center">
                Guest Control of Playback State
                </div>
              <RadioGroup 
              row 
              defaultValue="true" 
              onChange={this.HandleGuestCanPauseChange
              }>
                <FormControlLabel
                value="true"
                control={<Radio color="primary"/>}
                label="Play/Pause"
                labelPlacement="bottom"
                />
                <FormControlLabel
                value="false"
                control={<Radio color="secondary"/>}
                label="No Control"
                labelPlacement="bottom"
                />
              </RadioGroup>
            </FormHelperText>
           </FormControl>
        </Grid> 
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
            required={true}
            type="number"
            defaultValue={this.defaultVotes}
            inputProps={{
              min:1,
              style: {textAlign:"center"}
            }}
            onChange={this.HandleVotesChange}
            />
            <FormHelperText>
              <div align="center">Votes required To Skip Song</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="primary" variant="contained" onClick={this.HandleRoomBottonPressed}>
            Create A Room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
    </Grid>
    }
}

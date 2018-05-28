import React from 'react';
import ReactDOM from 'react-dom';

import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import NotebookPreview from '@nteract/notebook-preview';


class JupyterProblem extends React.PureComponent {

  state = {
    collapses: {
      provided: false,
      problem: true,
    },
    problemJson: null
  };
  

  loadProblem = () => {
    this.setState({ problemJson: (<NotebookPreview notebook={window.problemJsonFile} />)})
  }

  render() {

    return (

        <Paper style={{ margin: '24px 2px' }}>
          <Typography style={{ position: 'relative' }} variant="headline">
            <span>Problem</span>
            <IconButton
              onClick={() => this.onSwitchCollapse('problem')}
              style={{
                position: 'absolute',
                right: 0,
              }}
            >
              {this.state.collapses.problem ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Typography>
          <Collapse collapsedHeight="10px" in={this.state.collapses.problem}>
            <div
              style={{
                textAlign: 'left',
              }}
            >
              <div id="NotebookPreview">{this.state.problemJson}</div>
              <button style={ {visibility:'hidden'} } onClick={this.loadProblem} >Load Problem</button>
            </div>
          </Collapse>
        </Paper>
    );
  }
}

ReactDOM.render(<JupyterProblem />, document.getElementById('root'));
ReactDOM.render(<JupyterProblem />, document.getElementById('root1'));

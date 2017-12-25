import React, { PropTypes } from 'react';
import alertify from 'alertify.js';
alertify.logPosition('top right');
import Codemirror from 'react-codemirror';
import 'codemirror/mode/xml/xml';

class PlistParser extends React.Component {
  constructor(props) {
    super(props);
    this.updateCode = this.updateCode.bind(this);
    this.state = {
      code: props.plistXmlString,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      code: nextProps.plistXmlString,
    });
  }

  updateCode(newVal) {
    this.setState({
      code: newVal,
    });
    this.props.handleChangeFromParent(newVal);
  }

  render() {
    const codeMirrorOptions = {
      lineNumbers: true,
      mode: 'xml',
      lineWrapping: true,
    };
    return (
      <div style={{ height: '100%' }}>
        <Codemirror value={this.state.code} onChange={this.updateCode} options={codeMirrorOptions} />
      </div>
    );
  }
}

PlistParser.propTypes = {
  plistXmlString: PropTypes.string.isRequired,
  handleChangeFromParent: PropTypes.func.isRequired,
};

export default PlistParser;

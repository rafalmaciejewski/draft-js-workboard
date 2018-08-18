import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';
import {stateFromHTML, stateToHTML} from './utils';

const Title = styled.h1`
  color: red;
`;

const EditorWrapper = styled.div`
  margin: 20px;
`;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            html: '',
        };
    }

    handleEditorStateChange = (editorState) => {
        this.setState({
            editorState,
            html: stateToHTML(editorState),
        });
    };

    handleHTMLChange = (e) => {
        const html = e.target.value;
        this.setState({
            editorState: stateFromHTML(this.state.editorState, html),
            html: e.target.value,
        });
    };

    render() {
        const {editorState} = this.state;
        return (
            <EditorWrapper>
                <Title>draft-js-workboard</Title>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.handleEditorStateChange}
                    toolbar={{
                        options: ['link'],
                        link: {
                            inDropdown: false,
                            component: undefined,
                            showOpenOptionOnHover: false,
                            defaultTargetOption: '_blank',
                            options: ['link', 'unlink'],
                        },
                    }}
                />
                <textarea
                    onChange={this.handleHTMLChange}
                    value={this.state.html}
                />
            </EditorWrapper>
        )
    }
}

export default App;

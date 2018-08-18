import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';

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
        };
    }

    onEditorStateChange = (editorState) => this.setState({editorState});

    render() {
        const {editorState} = this.state;
        return (
            <EditorWrapper>
                <Title>draft-js-workboard</Title>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
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
            </EditorWrapper>
        )
    }
}

export default App;

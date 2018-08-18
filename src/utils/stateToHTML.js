import {convertToRaw} from 'draft-js';
import draftToHTML from 'draftjs-to-html';

export function stateToHTML(editorState) {
    return draftToHTML(convertToRaw(editorState.getCurrentContent()));
}

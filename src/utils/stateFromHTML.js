import {EditorState, ContentState} from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

export function stateFromHTML(editorState, html) {
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        return EditorState.createWithContent(contentState);
    }
}

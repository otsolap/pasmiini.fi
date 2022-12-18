import React from 'react'
import Markdown from 'markdown-to-jsx'

const MarkdownBlock = ({ markdown }) => {
    return (
        <div className="markdownBody">
            <Markdown options={{ forceBlock: true, wrapper: 'article' }}>
                {markdown.body}
            </Markdown>
        </div>
    )
}

export default MarkdownBlock;
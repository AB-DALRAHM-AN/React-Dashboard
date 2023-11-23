import React from 'react'
import { Header } from '../components'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, Toolbar, RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'


const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 md: p-10 bg-white rounded-3xl'>
      <Header title='Editor' category='Page' />
      <div>
        <RichTextEditorComponent>
          <EditorData />
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    </div>
  )
}

export default Editor
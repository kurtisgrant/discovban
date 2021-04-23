import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Core Content')
        .child(
          S.document()
            .schemaType('coreContent')
            .documentId('coreContent')
        ),
      ...S.documentTypeListItems().filter(listItem => !['coreContent'].includes(listItem.getId()))
    ])
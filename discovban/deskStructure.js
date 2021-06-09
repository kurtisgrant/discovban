import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
      .title('Directory')
      .child(
        S.list()
        .title('Directory')
        .items([
          ...S.documentTypeListItems().filter(listItem => ['listing', 'listingCategory'].includes(listItem.getId()))
        ])
        ),
      S.listItem()
      .title('Attractions')
      .child(
        S.documentTypeList('attraction')
      ),
      S.listItem()
      .title('Blog')
      .child(
        S.documentTypeList('post')
      ),
      S.listItem()
      .title('Updates')
      .child(
        S.documentTypeList('update')
      ),
      S.listItem()
        .title('Additional Options')
        .child(
          S.list()
          .title('Site Options')
          .items([
            S.listItem()
            .title('Site Options')
            .child(
              S.document()
              .schemaType('siteOptions')
              .documentId('siteOptions')
              ),
              S.listItem()
              .title('Other Content')
              .child(
                S.documentTypeList('contentPiece')
              ),
              ...S.documentTypeListItems().filter(listItem => ['locale'].includes(listItem.getId())),
          ])
        ),
    ])
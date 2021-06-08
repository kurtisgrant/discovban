import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Page Content')
        .child(
          S.documentTypeList('page')
        ),
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
        .title('Additional Settings')
        .child(
          S.list()
          .title('Additional Settings')
          .items([
            ...S.documentTypeListItems().filter(listItem => ['locale'].includes(listItem.getId())),
            S.listItem()
              .title('Site Options')
              .child(
                S.document()
                  .schemaType('siteOptions')
                  .documentId('siteOptions')
              )
          ])
        ),
    ])
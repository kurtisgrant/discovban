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
      S.listItem()
      .title('COVID-19 Content')
      .child(
        S.document()
          .schemaType('covidContent')
          .documentId('covidContent')
      ),
      S.listItem()
      .title('Businesses')
      .child(
        S.list()
        .title('Businesses')
        .items([
          ...S.documentTypeListItems().filter(listItem => ['business', 'businessCategory'].includes(listItem.getId()))
        ])
      ),
      S.listItem()
      .title('Attractions')
      .child(
        S.list()
        .title('Attractions')
        .items([
          ...S.documentTypeListItems().filter(listItem => ['attraction', 'attractionCategory'].includes(listItem.getId()))
        ])
      ),
      S.listItem()
      .title('Blog')
      .child(
        S.list()
        .title('Blog')
        .items([
          ...S.documentTypeListItems().filter(listItem => ['post', 'blogCategory', 'author'].includes(listItem.getId()))
        ])
      ),
      S.listItem()
        .title('Locales')
        .child(
          S.documentTypeList('locale')
        )
    ])
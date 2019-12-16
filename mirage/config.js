import Mirage from 'ember-cli-mirage';

export default function() {
  this.get('/comics', ({comics}, request) => {
    let slug = request.queryParams.slug;

    if (slug) {
      let foundComic = comics.where({title: slug.classify()}).models[0];
      if (foundComic) {
        return foundComic;
      } else {
        return new Mirage.Response(404, {}, "No comic found with slug: " + slug);
      }

    } else {
      return comics.all();
    }
  });

  this.patch('/comics/:id', ({comics}, request) => {
    save(comics, request);
  });

  this.put('/comics/:id', ({comics}, request) => {
    save(comics, request);
  });

  this.post('/comics', ({comics}, request) => {
    save(comics, request);
  });

  function save(comics, request) {
    const attrs = JSON.parse(request.requestBody);
    attrs.albumsId = attrs.albums;
    delete attrs.albums;
    return comics.create(attrs);
  }

  this.get('/albums/:id', ({comics}, request) => {
    return comics.find(request.params.id);
  });

}
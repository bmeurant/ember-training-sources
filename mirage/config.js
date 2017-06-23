import Mirage from 'ember-cli-mirage';

export default function() {
  
  this.get('/comics', ({comics}, request) => {
    const slug = request.queryParams.slug;

    if (slug) {
      const foundComic = comics.where({title: slug.classify()}).models[0];
      if (foundComic) {
        return foundComic;
      } else {
        return new Mirage.Response(404, {}, "No comic found with slug: " + slug);
      }

    } else {
      return comics.all();
    }
  });

  this.put('/comics/:id');
  this.post('/comics');

  this.get('/albums/:id');
}

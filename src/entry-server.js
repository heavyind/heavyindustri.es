import { createApp } from "./app";


export default context => {

  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();

    if (context.cookies) {
      console.log("There are cookies:", context.cookies);
      if (context.cookies.language) {
        store.state.bi18n.language = context.cookies.language;
      }
    }

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store: store,
            route: router.currentRoute
          });
        }
      })).then(() => {
        context.state = store.state;
        resolve(app);
      }).catch(function(e) {
        console.log(e);
      });

    }, reject);
  });
};

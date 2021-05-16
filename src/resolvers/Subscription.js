const Subscription = {
  count: {
    subscribe(parent, args, { pubsub }, info) {
      let count = 0;

      setInterval(() => {
        count++;
        pubsub.publish("count", { count });
      }, 2000);

      return pubsub.asyncIterator("count");
    },
  },

  comment: {
    subscribe(parent, { postId }, { pubsub, db }, info) {
      const post = db.posts.find(
        (post) => post.id === postId && post.published
      );

      if (!post) {
        throw new Error("Post not found");
      }

      return pubsub.asyncIterator(`comment ${postId}`);
    },
  },
  post: {
    subscribe(parent, args, { pubsub, db }, info) {
      return pubsub.asyncIterator("post");
    },
  },
};

export { Subscription as default };

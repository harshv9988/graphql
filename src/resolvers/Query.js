const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },

  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(args.query.toLowerCase()) ||
        post.body.toLowerCase().includes(args.query.toLowerCase())
      );
    });
  },

  comments(parent, args, { db }, info) {
    return db.comments;
  },

  post() {
    return {
      id: "123abc",
      title: "aloha",
      body: "blah",
      published: false,
    };
  },
  me() {
    return {
      id: "123abc",
      name: "Mike",
      email: "mike@gmail.com",
    };
  },
};

export { Query as default };

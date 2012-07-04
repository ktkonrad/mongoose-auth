module.exports = {
  fb: {
      id: String
    , accessToken: String
    , expires: Date
    , name: String
    , fbAlias: String
    , gender: String
    , email: String
//      , email: Email // TODO Try to add Email type back in
                     //      Broken because of require behavior
    , timezone: String
    , locale: String
    , verified: Boolean
    , updatedTime: String
    , phone: String
  }
};

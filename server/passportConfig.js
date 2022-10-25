const User = require("./src/models/user.schema");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;



const passportConfig = (passport)=> {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, callBack) => {
    callBack(null, user.id);
    console.log('Serialize ' + user.id)
  });
  passport.deserializeUser(
    (id, done)=>{
      console.log('Deserialize')
        User.findById(id,(err, user)=>{
            if(err){
                done(err);
            }
            done(null, user);
        });
});
};
module.exports= passportConfig
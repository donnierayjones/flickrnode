var People= function People(request) {
  this._request= request;
};

var getInfoMapper = function(person) {
  return {
    nsid: person.nsid,
    username: person.username._content,
    realname: person.realname._content,
    mbox_sha1sum: person.mbox_sha1sum._content,
    location: person.location._content,
    photosurl: person.photosurl._content,
    profileurl: person.profileurl._content
  };
};

People.prototype.findByUsername= function(username, callback){
  this._request.executeRequest("flickr.people.findByUsername",
                               {"username": username}, false, null, callback);
};

People.prototype.getPublicPhotos = function(user_id, callback){
  this._request.executeRequest("flickr.people.getPublicPhotos",
                               {"user_id": user_id}, false, null, callback);
};

People.prototype.getInfo = function(user_id, callback){
  this._request.executeRequest("flickr.people.getInfo",
                               {"user_id": user_id}, false, getInfoMapper, callback);
};

exports.People= People;

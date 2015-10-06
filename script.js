var Babelfish = new function() {
  var self = this;
  this.invite = false;

  this.init = function init() {
    document.getElementById('ifrm').setAttribute('onload', 'if(Babelfish.invite) {Babelfish.inviteSent();}');
  };

  this.inviteSent = function inviteSent() {
    document.getElementById('send_invite').dataset.sent = true;
    document.getElementById('send_invite').setAttribute('disabled', true);
  };
};
window.onload = Babelfish.init;

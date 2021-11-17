function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  send: function (msg, toMember) {
    this.chatroom.send(msg, this, toMember);
  },

  receive: function (msg, fromMember) {
    console.log(`${fromMember.name} to ${this.name} : ${msg}`);
  },
};

function Chatroom() {
  this.members = {};
}

Chatroom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    this.chatroom = this;
  },

  send: function (msg, fromMember, toMember) {
    toMember.receive(msg, fromMember);
  },
};

const chat = new Chatroom();

const patrick = new Member("Patrick");
const john = new Member("John");
const tim = new Member("Tim");

chat.addMember(patrick);
chat.addMember(patrick);

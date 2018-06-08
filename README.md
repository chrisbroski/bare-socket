# Bare Socket

Current versions of all major web browsers (Chrome, Firefox, Edge, IE, Opera, and Safari) have standard RFC 6455 support for the web socket protocol, so there is little need for the backward-compatibility in the socket.io library. In the spirit of making node apps as lean as possible (and reducing the gratuitous npm library bloat) you can use the basic [websocket](https://www.npmjs.com/package/websocket) server library and no client library.

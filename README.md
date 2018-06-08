# Bare Socket

Simple socket applications don't need many of the features in the socket.io library. Current versions of all major web browsers (Chrome, Firefox, Edge, IE, Opera, and Safari) have standard RFC 6455 support for the web socket protocol, so there is little need for the backward-compatibility either.

In the spirit of making node apps as lean as possible (and reducing gratuitous npm library bloat) you can use the basic [websocket](https://www.npmjs.com/package/websocket) server library and no client library.

I cleaned up the npm/websocket example to make it clearer to me for a reference to be used in my other applications.
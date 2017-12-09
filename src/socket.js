import {EventEmitter} from 'events';

class Socket {
  constructor(ws = new WebSocket("ws://demos.kaazing.com/echo"), ee = new EventEmitter()){
    this.ws = ws;
    this.ee = ee;
    ws.onmessage = this.message.bind(this);
    ws.onopen = this.open.bind(this);
    ws.close = this.close.bind(this);
  }

  message(e){
    try {
      const message = JSON.parse(e.data);
      this.ee.emit(message.name, message.data);
    }
    catch(err){
      this.ee.emit('error', err);
    }
  }
  on(name, fn) {
    this.ee.on(name, fn);
  }
  off(name, fn) {
    this.ee.removeListener(name, fn);
  }
  emit(name, data) {
    console.log(name);
    console.log(data);
    const message = JSON.stringify({name, data});
    console.log(message);
    this.ws.send(message);
  }
  open(e){
    this.ee.emit('connect');
  }
  close(e){
    this.ee.emit('disconnect');
  }
}

export default Socket;

'use strict';
importScripts('js/dexie.min.js');
var db = new Dexie('Db');
db.version(4).stores({
  ordini: '++id, negozio, articoli, data',
  queue: 'request, data'
});
console.log("DEFERRED REQUETS");

self.addEventListener('fetch', function(evt) {
  if (evt.request.method === 'POST') 
    evt.respondWith(
      fetch(evt.request)
      .then(function(res) {
        if (res.status >= 500) {
          console.log('RESPONSE: error');
          return Response.error();
        } else {
          console.log('RESPONSE: success');
          replayQueuedRequests();
		  console.log('qui si replayano i request falliti');
          return res;
        }
      }).catch(function() {
        queueFailedRequest(evt.request);
      })
    );
});

function replayQueuedRequests() {
    db.queue.each(function(req) {
		fetch(req).then(function(response) {
			if (response.status >= 500) {
				console.log('RESPONSE: error');
				return Response.error();
        }
        console.log('DELETE: queue');
        db.queue.delete(req);
    }).catch(function() {
        // if (time > expiration)
            db.queue.delete(req);
            console.log('DELETE: expired queue');
		});
	});
}	

function queueFailedRequest(request) {
    let req = {
        request: request.data,
		data: Date.now()
    }
	console.log(req);
    db.queue.add(req);
	console.log('Qui si loggano i request falliti');
    console.log('QUEUED: failed request');
}
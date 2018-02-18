export default function() {

	this.namespace = '/api';

	let details = [{
		id: '1',
		type: 'details',
		attributes: {
			title: 'Inventor of Programming',
			name: 'Jane Peng',
			city: 'Toronto',
			dates: '1815 - 1852',
			image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg',
			description: 'Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage\'s proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.'
		}
	},{
		id: '2',
		type: 'details',
		attributes: {
			title: 'Inventor of the Compiler',
			name: 'Rob Withers',
			city: 'New York City',
			dates: '1905 - 1992',
			image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg',
			description: 'Grace Brewster Murray Hopper (née Murray; December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral.[1] One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL, an early high-level programming language still in use today.'
		}
	},{
		id: '3',
		type: 'details',
		attributes: {
      title: 'Inventor of the Web',
      name: 'Darren Wong',
      city: 'London',
      dates: '1952 - present',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg',
      description: 'Sir Timothy John Berners-Lee OM KBE FRS FREng FRSA FBCS (born 8 June 1955), also known as TimBL, is an English engineer and computer scientist, best known as the inventor of the World Wide Web. He is currently a Professor of Computer Science at the University of Oxford. He made a proposal for an information management system in March 1989, and he implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the internet in mid-November the same year.'
		}
	}];

	this.get('/details', function(db, request) {
		if (request.queryParams.city !== undefined) {
      let filteredDetails = details.filter(function (i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredDetails };
    } else {
      return { data: details };
    }
  });

	this.get('/details/:id', function (db, request) {
		return {
			data: details.find((detail)=> request.params.id === detail.id)
		};
	});


  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}

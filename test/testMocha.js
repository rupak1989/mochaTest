var assert 	= require('assert'),
	chai 	= require('chai'),
	fs 		= require('fs'),
	server 	= require('../app.js'),
	chaiHttp = require('chai-http'),
	expect 	= chai.expect;


chai.use(chaiHttp);

//mocha testing


describe('/GET testMocha', function() {
		it('test mocha successfully', function(done){ 
			chai.request(server).get('/testMocha').end(function(err, res){
				assert.equal(res.body.success, true);
				done();
			});
		});

		setTimeout(function(){
			it('match output result', function(done){
				chai.request(server).get('/testMocha').end(function(err, res){
					console.log('lines 48');
					assert.equal(res.body.info, "mocha testing");
					done();
				});
			});
		});
		it('test expect ', function(done){
			chai.request(server).get('/testMocha').end(function(err, res){
					expect(res.body).to.have.a.property("success", true);
           			expect(res.body).to.have.a.property("info", "mocha testing");
           			done();
			});
		});


});

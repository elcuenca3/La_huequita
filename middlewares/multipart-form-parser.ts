import  formidable  from  'formidable';
import { NextApiRequest, NextApiResponse } from 'next';

const  form = formidable({ multiples:  false }); // multiples means req.files will be an array

interface Request extends NextApiRequest{
    files : any
}

export  default  async  function  parseMultipartForm(req:Request, res:NextApiResponse, next:Function) {
	const  contentType = req.headers['content-type']
	if (contentType && contentType.indexOf('multipart/form-data') !== -1) {
		form.parse(req, (err, fields, files) => {
            console.log(err);
            
		if (!err) {
			req.body = fields; // sets the body field in the request object
			req.files = files; // sets the files field in the request object
		}
			next(); // continues to the next middleware or to the route
		})
	} else {
		next();
	}
}
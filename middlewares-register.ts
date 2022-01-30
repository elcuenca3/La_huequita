import  nextConnect  from  'next-connect';
import parseMultipartForm from './middlewares/multipart-form-parser';

const  middleware = nextConnect();

middleware.use(parseMultipartForm)

export  default  middleware;
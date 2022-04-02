import Post from '../schema/post-schema.js';
import {User, validate} from '../schema/user-schema.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
const Validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};


export const createPost = async (request, response) =>  {
    console.log(request.body);

    try {
        const post = await new Post(request.body);
        post.save();

        response.status(200).json('blog saved successfully');
    } catch(error) {
        response.status(500).json(error);
    }
}
export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}
export const deletePost = async (request, response) => {
    // console.log("check");
    try {
        const post = await Post.findById(request.params.id);
        
        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getAllPosts = async (request, response) =>  {
    try {
        let posts = await Post.find({});
        response.status(200).json(posts);
    } catch(error) {
        response.status(500).json(error);
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        console.log(request.params.id);
        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const Signup = async (req, res) => {

	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "Oops, User with given email already exists!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
        
		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully!" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}

export const Login = async (req, res) => {
    // console.log(11);
    
	try {
       
		const user = await User.findOne({ email: req.body.email });
        // console.log(user)
        
		if (!user)
			return res.status(401).send({ message: "Invalid Email Id" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (!validPassword)
			return res.status(401).send({ message: "Incorrect Password" });

		const token = user.generateAuthToken();

		res.status(200).send({ data: token, message: "Logged in successfully" });
	} catch (error) {
        console.log(error);

		res.status(500).send({ message: "Internal Server Error" });
	}
}

import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');


export const load = async ({ params }) => {
    const response = await pb.collection('blog_posts').getFullList({
        sort: '-created',
    });

	return {
		response
	};
};
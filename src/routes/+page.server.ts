import type { PageServerLoad } from './$types';
import rawProfile from '$lib/data/profile.json';
import rawTestProfile from '$lib/data/profile.test.json';
import type { IProfileResp } from '../types';

export const load: PageServerLoad = async () => {
	const selectedProfile =
		process.env.PROFILE_DATA_SOURCE === 'test' ? rawTestProfile : rawProfile;
	const profile: IProfileResp = {
		...selectedProfile,
		resumeUrl: {
			sourceLink: selectedProfile.resumeUrl.sourceLink,
			fullVersionLink: selectedProfile.resumeUrl.fullVersionLink
		}
	};
	return {
		profile
	};
};

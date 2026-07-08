import type { PageServerLoad } from './$types';
import rawProfile from '$lib/data/profile.json';
import type { IProfileResp } from '../types';

export const load: PageServerLoad = async () => {
	const profile: IProfileResp = {
		...rawProfile,
		resumeUrl: {
			sourceLink: rawProfile.resumeUrl.sourceLink,
			fullVersionLink: rawProfile.resumeUrl.fullVersion
		}
	};
	return {
		profile
	};
};

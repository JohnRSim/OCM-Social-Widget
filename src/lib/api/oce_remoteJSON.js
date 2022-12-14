import Ajax from '../utils/ajax';
import OCEconfig from '../config/oce.json';

const contentServer = OCEconfig.contentServer;//'/pxysvc/proxy/oce';
const remoteJSONURL = `${contentServer}/osn/fc/RemoteJSONBatch`;
const api = new Ajax();


class OCERemoteJSON {
	/**
	 * getProfilePictureDataUri
	 * returns list of profileimages
	 * 
	 * @param {Array} profileIDs ['16001','15340']
	 * @param {String} token 
	 * @param {String} sessionID
	 */
	getProfilePictureDataUri(profileIDs, token, sessionID) {
		console.log('[getProfilePictureDataUri]',profileIDs);

		const data = [];
		profileIDs.forEach((v, i) => {
			data.push({
				Arguments: [v],
				MethodName: "getProfileProfilePictureDataUri",
				ModuleName: "XUserModule$Server",
			});
		});
		
		const [promise, abort] = api.post(remoteJSONURL, data, token, true, sessionID);
		return [promise, abort];
	}

	/**
	 * getMyProfilePic
	 */
	getMyProfilePic(token, sessionID) {
	/*
		if (init) {
			//enable user session to get profile image
			data.push({
				Arguments: [],
				MethodName: "getLoginInfo",
				ModuleName: "XConnectModule$Server",
			});
			//enable presence
			data.push({
				Arguments: [],
				MethodName: "active",
				ModuleName: "XPresenceModule$Server",
			});
		}
		*/
		const data = [{
			Arguments: [],
			MethodName: "getMyScaledProfilePictureDataUri",
			ModuleName: "XUserModule$Server",
		}];

		const [promise, abort] = api.post(remoteJSONURL, data, token, true, sessionID);
		return [promise, abort];
	}
}

export default OCERemoteJSON;

import { writable } from 'svelte/store';

/**
 * Store Framework
 */
const setup = {
    searchEnabled: false,
    searchString: '',
    filter: [],
    activeFollowing:[],
    following: {}
};

/**
 * Store following Details
 * 
 */
function manageFollowing() {
    let store = setup;
    //if (process.browser) {
        store = JSON.parse(localStorage.getItem('following')) || setup;
    //}

	const { subscribe, set, update } = writable(store);

	return {
        /**
         * Subscribe to updates
         */
        subscribe,
        /**
         * updateVal
         */
        updateVal: (key,val) => {
            console.info('[following][updateVal]', key, val);
            update((a) => {
                //console.log('update',a,data)
                if (typeof(a[key]) !== 'undefined') {
                    console.log('updating.........', a[key], val);
                    a[key] = val;
                }
                return a;
            });
        },
        /**
         * addFollowing
         */
        addFollowing: (followingUsers) => {
            console.info('[following][addFollowing]', followingUsers);
            update((a) => {
                //console.log('update',a,data)
                a.activeFollowing = [];
                followingUsers.forEach((user, i) => {
                    if (a.activeFollowing.indexOf(user.id) === -1) {
                        a.activeFollowing.push(user.id);
                        a.following[user.id] = user;
                    }
                });
                return a;
            });
        },
        /**
         * addFollowingUser
         */
        addFollowingUser: (user) => {
            console.info('[following][addFollowingUser]', user);
            update((a) => {
                //console.log('update',a,data)
                a.activeFollowing.push(user.id);
                a.following[user.id] = user;
                return a;
            });
        },
        /**
         * removeFollowingUser
         */
        removeFollowingUser: (userID) => {
            console.info('[following][removeFollowingUser]', userID);
            update((a) => {
                //console.log('update',a,data)
                a.activeFollowing.splice(a.activeFollowing.indexOf(userID),1);
                delete a.following[userID];
                return a;
            });
        },
        /**
         * filterPeople
         */
        filterPeople: (searchString) => {
            console.info('[following][filterPeople]', searchString);
            update((a) => {
                console.log(a);
                a.searchEnabled = (searchString.length > 0);
                a.searchString =  (searchString.length > 0)?searchString:'';
                if (searchString.length > 0) {
					let filter = [];
                    //if (a.activePage === 'explorer') {
                        filter = a.profileMap.filter((person) => {
                            return (person.name.toLowerCase().startsWith(searchString.toLowerCase()) || person.email.toLowerCase().startsWith(searchString.toLowerCase()));
                        });
                    //search results
                    //} else {
                    //    filter = a.searchResults.filter((person) => {
                    //        return (person.email.toLowerCase().startsWith(searchString.toLowerCase()));
                    //    });
					//}
					a.filter = filter.map((v) => {
						return v.id;
					});
                }
                return a;
            });
        },
        /**
         * reset the state
         */
        reset: () => {
            //if (process.browser) {
                localStorage.setItem('following', setup);
            //}
            return set(setup);
        },
	};
}

const following = manageFollowing();
following.subscribe((val) => {
   // if (process.browser) {
        localStorage.setItem('following', JSON.stringify(val));
    //}
});

export { following };
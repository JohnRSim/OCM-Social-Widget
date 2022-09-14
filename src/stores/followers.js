import { writable } from 'svelte/store';

/**
 * Store Framework
 */
const setup = {
    searchEnabled: false,
    searchString: '',
    filter: [],
    activeFollowers:[],
    followers: {}
};

/**
 * Store followers Details
 * 
 */
function manageFollowers() {
    let store = setup;
    if (process.browser) {
        store = JSON.parse(localStorage.getItem('followers')) || setup;
    }

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
            console.info('[followers][updateVal]', key, val);
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
         * addFollowers
         */
        addFollowers: (followers) => {
            console.info('[followers][addFollowers]', followers);
            update((a) => {
                //console.log('update',a,data)
                followers.forEach((user, i) => {
                    if (a.activeFollowers.indexOf(user.id) === -1) {
                        a.activeFollowers.push(user.id);
                        a.followers[user.id] = user;
                    }
                });
                return a;
            });
        },
        /**
         * filterPeople
         */
        filterPeople: (searchString) => {
            console.info('[followers][filterPeople]', searchString);
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
            if (process.browser) {
                localStorage.setItem('followers', setup);
            }
            return set(setup);
        },
	};
}

const followers = manageFollowers();
followers.subscribe((val) => {
    if (process.browser) {
        localStorage.setItem('followers', JSON.stringify(val));
    }
});

export { followers };
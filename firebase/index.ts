// Dependencies
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';


import firebaseConfig from './config';


class FireBase {
    private _app: FirebaseApp | undefined;
    private _database: Database | undefined;

    constructor () {
        const _app = initializeApp(firebaseConfig);
    }

    get database (): Database {
        if (!this._database) {
            this._database = getDatabase(this._app);
        }

        return this._database;
    }
}

export default new FireBase();
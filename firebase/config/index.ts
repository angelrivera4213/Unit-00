export type RawFireBaseConfig = {
    databaseURL: string;
}

export type FireBaseConfig = Readonly<RawFireBaseConfig>

const firebaseConfig: RawFireBaseConfig = {
    databaseURL: 'https://unit-00-default-rtdb.firebaseio.com',
};

  
export default Object.freeze(firebaseConfig);